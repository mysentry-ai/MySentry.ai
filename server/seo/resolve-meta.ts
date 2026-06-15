/**
 * resolve-meta.ts
 *
 * Resolves the final RouteMeta for any URL path, including dynamic blog routes.
 * Used by the Express SSR middleware to inject meta tags into index.html.
 *
 * Blog posts are fetched from the DB and cached for 60 seconds to avoid
 * a DB hit on every page request.
 */

import { getDb } from "../db";
import { blogPosts } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import {
  ROUTE_META,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  type RouteMeta,
} from "../../shared/seo/route-meta";

// ─── Blog meta cache ──────────────────────────────────────────────────────────

type CacheEntry = { meta: RouteMeta; expiresAt: number };
const blogCache = new Map<string, CacheEntry>();
const BLOG_CACHE_TTL_MS = 60_000; // 60 seconds

async function resolveBlogMeta(slug: string): Promise<RouteMeta | null> {
  const cacheKey = `/blog/${slug}`;
  const cached = blogCache.get(cacheKey);
  if (cached && Date.now() < cached.expiresAt) {
    return cached.meta;
  }

  try {
    const db = await getDb();
    if (!db) return null;

    const rows = await db
      .select({
        title: blogPosts.title,
        excerpt: blogPosts.excerpt,
        metaTitle: blogPosts.metaTitle,
        metaDescription: blogPosts.metaDescription,
        ogImageUrl: blogPosts.ogImageUrl,
        heroImageUrl: blogPosts.heroImageUrl,
      })
      .from(blogPosts)
      .where(eq(blogPosts.slug, slug))
      .limit(1);

    if (!rows.length) return null;

    const post = rows[0];

    // Prefer explicit SEO fields over generic title/excerpt
    const resolvedTitle = post.metaTitle ?? post.title;
    const resolvedDescription =
      post.metaDescription ??
      post.excerpt ??
      `Read "${post.title}" on the MySentry blog.`;
    const resolvedImage =
      post.ogImageUrl ?? post.heroImageUrl ?? DEFAULT_OG_IMAGE;

    const meta: RouteMeta = {
      title: resolvedTitle,
      description: resolvedDescription,
      ogType: "article",
      ogImage: resolvedImage,
    };

    blogCache.set(cacheKey, { meta, expiresAt: Date.now() + BLOG_CACHE_TTL_MS });
    return meta;
  } catch {
    // DB unavailable — return null so caller falls back to default
    return null;
  }
}

// ─── Default fallback ─────────────────────────────────────────────────────────

const DEFAULT_META: RouteMeta = {
  title: "MySentry - 24/7 Personal Safety & Health Monitoring App",
  description:
    "MySentry turns your smartphone into a 24/7 safety companion. Panic alarm, fall detection, crash detection, health monitoring, and live video emergency response. Start your free trial today.",
};

// ─── Public API ───────────────────────────────────────────────────────────────

export type ResolvedMeta = {
  title: string;          // Full title including "| MySentry" suffix
  description: string;
  ogType: string;
  ogImage: string;
  canonicalPath: string;  // The path used for the canonical URL
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

  let raw: RouteMeta | null = null;

  // 1. Static route lookup
  if (ROUTE_META[path]) {
    raw = ROUTE_META[path];
  }
  // 2. Dynamic blog route: /blog/:slug or /blogs/:slug
  else if (/^\/blogs?\/(.+)$/.test(path)) {
    const slug = path.replace(/^\/blogs?\//, "");
    raw = await resolveBlogMeta(slug);
  }

  // 3. Fallback
  if (!raw) {
    raw = DEFAULT_META;
  }

  // Append "| MySentry" suffix unless the title already ends with it
  const titleSuffix = ` | ${SITE_NAME}`;
  const fullTitle = raw.title.endsWith(SITE_NAME)
    ? raw.title
    : `${raw.title}${titleSuffix}`;

  return {
    title: fullTitle,
    description: raw.description,
    ogType: raw.ogType ?? "website",
    ogImage: raw.ogImage ?? DEFAULT_OG_IMAGE,
    canonicalPath: path,
  };
}
