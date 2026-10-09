import {
  EXACT_RING_PR_SLUG,
} from "../shared/seo/exact-ring-press-release";
import {
  STATIC_FALLBACK_PUBLIC_BLOGS,
  getStaticFallbackPublicBlogBySlug,
} from "../shared/seo/public-blog-catalog";
import { isHeldBlogSlug } from "../shared/seo/content-governance";
import {
  getAllCategories,
  getPublishedPostBySlug,
  getPublishedPosts,
  getRedirectByOldSlug,
  getRelatedPosts,
} from "./blogDb";
import { getDb } from "./db";

const MANAGED_PUBLIC_BLOG_ORIGIN = "https://mysentry-5pk35fzr.manus.space";
const MANAGED_FETCH_TIMEOUT_MS = process.env.NODE_ENV === "test" ? 250 : 8_000;

export type PublicBlogPost = {
  id: number;
  title: string;
  slug: string;
  categoryId: number | null;
  status: "published";
  excerpt: string | null;
  heroImageUrl: string | null;
  heroImageAlt: string | null;
  heroImageCaption: string | null;
  heroImageSource: "upload" | "ai" | "url" | null;
  contentHtml: string | null;
  contentJson: unknown;
  metaTitle: string | null;
  metaDescription: string | null;
  focusKeyword: string | null;
  secondaryKeywords: string[] | null;
  tags: string[] | null;
  canonicalUrl: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImageUrl: string | null;
  isIndexed: boolean;
  isFollowed: boolean;
  geoRegion: string | null;
  geoAudience: string | null;
  authorName: string;
  readTimeMinutes: number;
  wordCount: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  scheduledAt: null;
};

export type PublicBlogCategory = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type PublicBlogResolution = {
  redirect: boolean;
  newSlug: string | null;
  post: PublicBlogPost | null;
};

const fallbackCategoryIds = {
  "Senior Care": 1,
  Females: 2,
  Families: 3,
  Business: 4,
} as const;

export const publicFallbackBlogCategories: PublicBlogCategory[] = Object.entries(
  fallbackCategoryIds,
).map(([name, id]) => ({
  id,
  name,
  slug: name.toLowerCase().replace(/\s+/g, "-"),
  description: null,
  createdAt: new Date("2026-09-07T00:00:00.000Z"),
  updatedAt: new Date("2026-09-07T00:00:00.000Z"),
}));

function parsePublishedDate(value: string): Date {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime())
    ? new Date("2026-09-07T00:00:00.000Z")
    : parsed;
}

function readTimeMinutes(readTime: string): number {
  const value = Number.parseInt(readTime, 10);
  return Number.isFinite(value) ? value : 5;
}

function wordCount(contentHtml: string): number {
  return contentHtml.replace(/<[^>]*>/g, " ").trim().split(/\s+/).filter(Boolean)
    .length;
}

export function toPublicFallbackBlogPost(
  slug: string,
): PublicBlogPost | null {
  const post = getStaticFallbackPublicBlogBySlug(slug);
  if (!post) return null;

  const date = parsePublishedDate(post.date);
  const content = post.contentHtml.trim();
  const isExactRingPressRelease = post.slug === EXACT_RING_PR_SLUG;

  return {
    id: 900_000 + STATIC_FALLBACK_PUBLIC_BLOGS.findIndex(item => item.slug === post.slug),
    title: post.title,
    slug: post.slug,
    categoryId: fallbackCategoryIds[post.category],
    status: "published",
    excerpt: post.excerpt,
    heroImageUrl: post.image,
    heroImageAlt: post.title,
    heroImageCaption: null,
    heroImageSource: "upload",
    contentHtml: content,
    contentJson: null,
    metaTitle: isExactRingPressRelease
      ? post.title
      : `${post.title} | MySentry Safety & Health Hub`,
    metaDescription: post.excerpt,
    focusKeyword: null,
    secondaryKeywords: null,
    tags: [post.category, "Personal safety"],
    canonicalUrl: null,
    ogTitle: null,
    ogDescription: null,
    ogImageUrl: post.image,
    isIndexed: true,
    isFollowed: true,
    geoRegion: null,
    geoAudience: null,
    authorName: "MySentry Editorial Team",
    readTimeMinutes: readTimeMinutes(post.readTime),
    wordCount: wordCount(content),
    createdAt: date,
    updatedAt: date,
    publishedAt: date,
    scheduledAt: null,
  };
}

export function getAllPublicFallbackBlogPosts(): PublicBlogPost[] {
  return STATIC_FALLBACK_PUBLIC_BLOGS.map(post => toPublicFallbackBlogPost(post.slug)!).filter(
    Boolean,
  );
}

function getTrpcData(payload: unknown): unknown {
  if (!Array.isArray(payload) || payload.length !== 1) return undefined;
  const entry = payload[0] as {
    error?: { json?: { message?: string } };
    result?: { data?: { json?: unknown } | unknown };
  };

  if (entry.error?.json?.message) {
    throw new Error(entry.error.json.message);
  }

  const data = entry.result?.data;
  if (data && typeof data === "object" && "json" in data) {
    return (data as { json?: unknown }).json;
  }
  return data;
}

async function queryManagedPublicBlog<T>(
  procedure: string,
  input: unknown,
): Promise<T | null> {
  const encodedInput = encodeURIComponent(
    JSON.stringify({ 0: { json: input } }),
  );
  const url = `${MANAGED_PUBLIC_BLOG_ORIGIN}/api/trpc/${procedure}?batch=1&input=${encodedInput}`;

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), MANAGED_FETCH_TIMEOUT_MS);

    try {
      const response = await globalThis.fetch(url, {
        headers: { Accept: "application/json" },
        signal: controller.signal,
      });
      if (response.ok) {
        const result = getTrpcData(await response.json());
        return (result ?? null) as T | null;
      }
    } catch {
      // Retry a transient managed-runtime network or startup failure once.
    } finally {
      clearTimeout(timeout);
    }

    if (attempt === 0) {
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  }

  return null;
}

export async function getManagedPublicBlogBySlug(
  slug: string,
): Promise<PublicBlogResolution | null> {
  const resolution = await queryManagedPublicBlog<PublicBlogResolution>(
    "blog.public.getBySlug",
    { slug },
  );
  if (!resolution) return null;
  return {
    redirect: resolution.redirect === true,
    newSlug: resolution.newSlug ?? null,
    post: asPublicBlogPost(resolution.post),
  };
}

export async function getManagedPublicBlogPosts(input: {
  categoryId?: number;
  keyword?: string;
  limit?: number;
  offset?: number;
}): Promise<{ posts: PublicBlogPost[]; total: number } | null> {
  const result = await queryManagedPublicBlog<{
    posts: PublicBlogPost[];
    total: number;
  }>(
    "blog.public.list",
    input,
  );
  if (!result) return null;
  const posts = asPublicBlogPosts(result.posts);
  return { posts, total: Number(result.total ?? posts.length) };
}

export async function getManagedPublicBlogCategories(): Promise<
  PublicBlogCategory[] | null
> {
  return queryManagedPublicBlog<PublicBlogCategory[]>(
    "blog.public.categories",
    undefined,
  );
}

export async function getManagedRelatedPublicBlogPosts(input: {
  categoryId: number;
  excludeId: number;
  tags?: string[] | null;
  limit?: number;
}): Promise<PublicBlogPost[] | null> {
  const result = await queryManagedPublicBlog<PublicBlogPost[]>(
    "blog.public.related",
    input,
  );
  return result ? asPublicBlogPosts(result) : null;
}

export function mergePublicBlogPosts(
  primaryPosts: PublicBlogPost[],
  fallbackPosts: PublicBlogPost[],
  filters: { categoryId?: number; keyword?: string; limit?: number; offset?: number } = {},
): { posts: PublicBlogPost[]; total: number } {
  const map = new Map<string, PublicBlogPost>();
  for (const post of [...primaryPosts, ...fallbackPosts]) {
    if (!map.has(post.slug)) map.set(post.slug, post);
  }

  const keyword = filters.keyword?.trim().toLowerCase();
  const posts = Array.from(map.values())
    .filter(post => !isHeldBlogSlug(post.slug))
    .filter(post => !filters.categoryId || post.categoryId === filters.categoryId)
    .filter(post => {
      if (!keyword) return true;
      return [post.title, post.excerpt ?? "", post.contentHtml ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    })
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

  const total = posts.length;
  const offset = filters.offset ?? 0;
  const limit = filters.limit ?? 50;
  return { posts: posts.slice(offset, offset + limit), total };
}

export function mergePublicBlogCategories(
  primaryCategories: PublicBlogCategory[],
): PublicBlogCategory[] {
  const categories = new Map<number, PublicBlogCategory>();
  for (const category of [...primaryCategories, ...publicFallbackBlogCategories]) {
    if (!categories.has(category.id)) categories.set(category.id, category);
  }
  return Array.from(categories.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function isDatabaseAvailabilityFailure(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error ?? "");
  return /database not available|database connection|connect.*database|ECONNREFUSED|ETIMEDOUT|ENOTFOUND|PROTOCOL_CONNECTION_LOST|access denied|ER_ACCESS_DENIED_ERROR/i.test(
    message,
  );
}

function asPublicBlogPost(value: unknown): PublicBlogPost | null {
  if (!value || typeof value !== "object") return null;
  const post = value as Record<string, unknown>;
  if (
    typeof post.slug !== "string" ||
    typeof post.title !== "string" ||
    post.status !== "published"
  ) {
    return null;
  }

  const asDate = (date: unknown) => {
    const value = date instanceof Date ? date : new Date(String(date));
    return Number.isNaN(value.getTime())
      ? new Date("2026-09-07T00:00:00.000Z")
      : value;
  };

  return {
    ...(post as PublicBlogPost),
    createdAt: asDate(post.createdAt),
    updatedAt: asDate(post.updatedAt),
    publishedAt: asDate(post.publishedAt),
  };
}

function asPublicBlogPosts(value: unknown): PublicBlogPost[] {
  return Array.isArray(value)
    ? value.map(asPublicBlogPost).filter((post): post is PublicBlogPost => !!post)
    : [];
}

async function readAvailableLocalBlogData<T>(
  operation: () => Promise<T>,
  fallback: T,
): Promise<{ available: boolean; value: T }> {
  if (!(await getDb())) {
    return { available: false, value: fallback };
  }

  try {
    return { available: true, value: await operation() };
  } catch (error) {
    if (!isDatabaseAvailabilityFailure(error)) throw error;
    return { available: false, value: fallback };
  }
}

export async function resolvePublicBlogBySlug(
  slug: string,
): Promise<PublicBlogResolution> {
  if (isHeldBlogSlug(slug)) {
    return { redirect: false, newSlug: null, post: null };
  }

  const localRedirectResult = await readAvailableLocalBlogData(
    () => getRedirectByOldSlug(slug),
    undefined,
  );
  const localRedirect = localRedirectResult.value;
  if (localRedirect) {
    return { redirect: true, newSlug: localRedirect.newSlug, post: null };
  }

  const localPostResult = await readAvailableLocalBlogData(
    () => getPublishedPostBySlug(slug),
    undefined,
  );
  const localPost = asPublicBlogPost(localPostResult.value);
  if (localPost) {
    return { redirect: false, newSlug: null, post: localPost };
  }

  const staticFallbackPost = toPublicFallbackBlogPost(slug);
  if (staticFallbackPost) {
    return { redirect: false, newSlug: null, post: staticFallbackPost };
  }

  const managedResolution = await getManagedPublicBlogBySlug(slug);
  if (managedResolution?.redirect && managedResolution.newSlug) {
    return {
      redirect: true,
      newSlug: managedResolution.newSlug,
      post: null,
    };
  }

  const managedPost = asPublicBlogPost(managedResolution?.post);
  if (managedPost) {
    return { redirect: false, newSlug: null, post: managedPost };
  }

  return {
    redirect: false,
    newSlug: null,
    post: null,
  };
}

export async function listPublicBlogs(filters: {
  categoryId?: number;
  keyword?: string;
  limit?: number;
  offset?: number;
} = {}): Promise<{ posts: PublicBlogPost[]; total: number }> {
  const localResult = await readAvailableLocalBlogData(
    () => getPublishedPosts(filters),
    { posts: [], total: 0 },
  );
  const local = localResult.value;
  const remote =
    localResult.available && local.total > 0
      ? null
      : await getManagedPublicBlogPosts(filters);
  const primaryPosts = asPublicBlogPosts(remote?.posts ?? local.posts);

  return mergePublicBlogPosts(
    primaryPosts,
    getAllPublicFallbackBlogPosts(),
    filters,
  );
}

export async function listPublicBlogCategories(): Promise<PublicBlogCategory[]> {
  const localResult = await readAvailableLocalBlogData(() => getAllCategories(), []);
  const local = localResult.value;
  const remote =
    localResult.available && local.length > 0
      ? null
      : await getManagedPublicBlogCategories();
  return mergePublicBlogCategories((remote ?? local) as PublicBlogCategory[]);
}

export async function listPublicRelatedBlogs(input: {
  categoryId: number;
  excludeId: number;
  tags?: string[] | null;
  limit?: number;
}): Promise<PublicBlogPost[]> {
  const limit = input.limit ?? 4;
  const fallbackPosts = getAllPublicFallbackBlogPosts()
    .filter(post => post.categoryId === input.categoryId && post.id !== input.excludeId);

  const localResult = await readAvailableLocalBlogData(
    () =>
      getRelatedPosts(
        input.categoryId,
        input.excludeId,
        input.tags ?? null,
        limit,
      ),
    [],
  );
  const local = localResult.value;
  const remote =
    localResult.available && local.length > 0
      ? null
      : await getManagedRelatedPublicBlogPosts(input);
  const primaryPosts = asPublicBlogPosts(remote ?? local);

  return mergePublicBlogPosts(primaryPosts, fallbackPosts, { limit }).posts.filter(
    post => post.id !== input.excludeId && !isHeldBlogSlug(post.slug),
  );
}
