/**
 * resolve-meta.ts
 *
 * Resolves the final RouteMeta for any URL path, including dynamic blog routes.
 * Used by the Express SSR middleware to inject meta tags into index.html.
 *
 * Public blog posts are resolved from the local database, managed public
 * runtime, or catalog fallback and cached for 60 seconds.
 */

import {
  ROUTE_META,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  type RouteMeta,
} from "../../shared/seo/route-meta";
import { getHeldBlogTitle, isHeldBlogSlug } from "../../shared/seo/content-governance";
import { absoluteBlogImageUrl } from "../../shared/seo/blog-assets";
import { isNoindexPath } from "../../shared/seo/indexability";
import { resolvePublicBlogBySlug } from "../publicBlogResolver";

// ─── Blog meta cache ──────────────────────────────────────────────────────────

type BlogMeta = RouteMeta & {
  authorName?: string | null;
  publishedAt?: Date | null;
  updatedAt?: Date | null;
  isIndexed?: boolean;
  isFollowed?: boolean;
  articleHtml?: string | null;
};

type CacheEntry = { meta: BlogMeta; expiresAt: number };
const blogCache = new Map<string, CacheEntry>();
const BLOG_CACHE_TTL_MS = 60_000; // 60 seconds

async function resolveBlogMeta(slug: string): Promise<BlogMeta | null> {
  const cacheKey = `/blog/${slug}`;
  const cached = blogCache.get(cacheKey);
  if (cached && Date.now() < cached.expiresAt) {
    return cached.meta;
  }

  try {
    const resolution = await resolvePublicBlogBySlug(slug);
    const post = resolution.post;
    if (!post) return null;

    // Prefer explicit SEO fields over generic title/excerpt
    const resolvedTitle = post.metaTitle?.trim() || post.title;
    const resolvedDescription =
      post.metaDescription?.trim() ||
      post.excerpt?.trim() ||
      `Read "${post.title}" on the MySentry blog.`;
    const resolvedImage = absoluteBlogImageUrl(
      post.ogImageUrl ?? post.heroImageUrl
    ) ?? DEFAULT_OG_IMAGE;

    const meta: BlogMeta = {
      title: resolvedTitle,
      description: resolvedDescription,
      ogType: "article",
      ogImage: resolvedImage,
      authorName: post.authorName,
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      isIndexed: post.isIndexed,
      isFollowed: post.isFollowed,
      articleHtml: post.contentHtml,
    };

    blogCache.set(cacheKey, { meta, expiresAt: Date.now() + BLOG_CACHE_TTL_MS });
    return meta;
  } catch {
    return null;
  }
}

// ─── Default fallback ─────────────────────────────────────────────────────────

const DEFAULT_META: RouteMeta = {
  title: "MySentry Personal Safety and Wellness App",
  description:
    "Review MySentry Panic Alarm, Safety Checks, eligible incident detection, supported wellness signals, trusted contacts, professional monitoring, requirements, and limitations.",
};

// ─── Public API ───────────────────────────────────────────────────────────────

const PRIVATE_ROUTE_PREFIXES = ["/admin"];

export type ResolvedMeta = {
  title: string;          // Full title including "| MySentry" suffix
  description: string;
  ogType: string;
  ogImage: string;
  canonicalPath: string;  // The path used for the canonical URL
  robots: string;         // e.g. "index,follow" or "noindex,follow"
  found: boolean;
  routeType: "static" | "article" | "not-found";
  heading: string;
  summary: string;
  authorName?: string;
  publishedAt?: string;
  updatedAt?: string;
  articleHtml?: string;
};

/**
 * Resolves the full meta for a given URL path.
 * Handles static routes, /blog/:slug dynamic routes, and unknown paths.
 */
export async function resolveMeta(
  urlPath: string,
  _baseUrl: string
): Promise<ResolvedMeta> {
  // Normalize: strip trailing slash (except root "/")
  const path = urlPath.length > 1 ? urlPath.replace(/\/$/, "") : urlPath;

  let raw: BlogMeta | null = null;
  let routeType: ResolvedMeta["routeType"] = "not-found";
  let canonicalPath = path;
  let editorialHold = false;

  // 1. Static route lookup
  if (ROUTE_META[path]) {
    raw = ROUTE_META[path];
    routeType = "static";
  }
  // Private application routes must remain reachable but never indexable.
  else if (PRIVATE_ROUTE_PREFIXES.some(prefix => path === prefix || path.startsWith(`${prefix}/`))) {
    raw = {
      title: "MySentry Administration",
      description: "Private MySentry administration area.",
    };
    routeType = "static";
  }
  // 2. Dynamic blog route: /blog/:slug or /blogs/:slug
  else if (/^\/blogs?\/(.+)$/.test(path)) {
    const slug = path.replace(/^\/blogs?\//, "");
    editorialHold = isHeldBlogSlug(slug);
    raw = await resolveBlogMeta(slug);
    if (!raw && editorialHold) {
      raw = {
        title: `${getHeldBlogTitle(slug)} | Editorial Review`,
        description:
          "This MySentry article is temporarily unavailable while product, safety, medical, legal, or comparison claims are reviewed.",
        ogType: "website",
        isIndexed: false,
        isFollowed: true,
      };
    }
    if (raw) {
      routeType = "article";
      canonicalPath = `/blog/${slug}`;
      if (editorialHold) {
        raw = {
          ...raw,
          title: `${raw.title} | Editorial Review`,
          description:
            "This MySentry article is temporarily unavailable while product, safety, medical, legal, or comparison claims are reviewed.",
          ogType: "website",
          isIndexed: false,
        };
      }
    }
  }

  const found = raw !== null;
  if (!raw) raw = DEFAULT_META;

  // Append "| MySentry" suffix unless the title already ends with it
  const titleSuffix = ` | ${SITE_NAME}`;
  const fullTitle = raw.title.endsWith(SITE_NAME)
    ? raw.title
    : `${raw.title}${titleSuffix}`;

  const isPrivateRoute = PRIVATE_ROUTE_PREFIXES.some(
    prefix => path === prefix || path.startsWith(`${prefix}/`)
  );
  const robots = !found
    ? "noindex,nofollow"
    : isPrivateRoute
      ? "noindex,nofollow"
    : routeType === "article"
      ? `${raw.isIndexed === false || editorialHold ? "noindex" : "index"},${raw.isFollowed === false ? "nofollow" : "follow"}`
      : isNoindexPath(path)
        ? "noindex,follow"
        : "index,follow";

  return {
    title: fullTitle,
    description: raw.description,
    ogType: raw.ogType ?? "website",
    ogImage: raw.ogImage ?? DEFAULT_OG_IMAGE,
    canonicalPath,
    robots,
    found,
    routeType,
    heading: found ? raw.title.replace(/\s*\|\s*MySentry\s*$/i, "") : "Page not found",
    summary: found
      ? raw.description
      : "The page you requested is not available. Use the links below to continue exploring MySentry.",
    authorName: raw.authorName ?? undefined,
    publishedAt: raw.publishedAt?.toISOString(),
    updatedAt: raw.updatedAt?.toISOString(),
    articleHtml: routeType === "article" ? raw.articleHtml ?? undefined : undefined,
  };
}
