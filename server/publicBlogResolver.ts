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
import { createPublicReadGate, isDatabaseAvailabilityFailure } from "./publicBlogRead";
export { isDatabaseAvailabilityFailure } from "./publicBlogRead";

const MANAGED_PUBLIC_BLOG_ORIGIN = "https://mysentry-5pk35fzr.manus.space";
const LOCAL_PUBLIC_READ_DEADLINE_MS = 1_500;
const MANAGED_FETCH_TIMEOUT_MS = 2_000;
const localPublicReads = createPublicReadGate({
  deadlineMs: LOCAL_PUBLIC_READ_DEADLINE_MS,
  maxInFlight: 4,
  unavailableCooldownMs: 5_000,
  isAvailabilityFailure: isDatabaseAvailabilityFailure,
});
const managedPublicReads = createPublicReadGate({
  deadlineMs: MANAGED_FETCH_TIMEOUT_MS,
  maxInFlight: 2,
  unavailableCooldownMs: 5_000,
  isAvailabilityFailure: () => true,
});

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
  if (!payload[0] || typeof payload[0] !== "object") return undefined;
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

  const outcome = await managedPublicReads.read<T | null>(url, async signal => {
    for (let attempt = 0; attempt < 2 && !signal.aborted; attempt += 1) {
      let transient = false;
      let response: Response | undefined;
      try {
        response = await globalThis.fetch(url, {
          headers: { Accept: "application/json", "x-mysentry-public-relay": "1" },
          signal,
        });
      } catch (error) {
        // Only transport failures are retryable. Parsing/API errors below fail once.
        transient = !signal.aborted && (error instanceof TypeError || isDatabaseAvailabilityFailure(error));
        if (!transient) throw error;
      }
      if (response?.ok) {
        const contentType = response.headers.get("content-type") ?? "";
        if (!/^application\/(?:[\w.-]+\+)?json(?:\s*;|$)/i.test(contentType)) {
          void response.body?.cancel().catch(() => undefined);
          throw new Error("Managed public blog API returned non-JSON content");
        }
        const data = getTrpcData(await response.json());
        if (data === undefined) throw new Error("Invalid managed public blog API envelope");
        return data as T | null;
      }
      if (response) {
        transient = [502, 503, 504].includes(response.status);
        void response.body?.cancel().catch(() => undefined);
      }
      if (!transient || attempt === 1 || signal.aborted) throw new Error("Managed public blog API unavailable");
      await new Promise<void>(resolve => {
        const done = () => { clearTimeout(timer); signal.removeEventListener("abort", done); resolve(); };
        const timer = setTimeout(done, 100);
        signal.addEventListener("abort", done, { once: true });
      });
    }
    throw new Error("Managed public blog API deadline exceeded");
  }, null);
  return outcome.value;
}

export async function getManagedPublicBlogBySlug(
  slug: string,
): Promise<PublicBlogResolution | null> {
  const resolution = await queryManagedPublicBlog<PublicBlogResolution>(
    "blog.public.getBySlug",
    { slug },
  );
  if (!resolution || typeof resolution !== "object" || typeof resolution.redirect !== "boolean" ||
      !("post" in resolution) || (resolution.redirect && typeof resolution.newSlug !== "string")) return null;
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
  if (!result || !Array.isArray(result.posts) || !Number.isFinite(result.total) || result.total < 0) return null;
  const posts = asPublicBlogPosts(result.posts);
  return { posts, total: Number(result.total ?? posts.length) };
}

export async function getManagedPublicBlogCategories(): Promise<
  PublicBlogCategory[] | null
> {
  const result = await queryManagedPublicBlog<PublicBlogCategory[]>(
    "blog.public.categories",
    undefined,
  );
  return Array.isArray(result) ? result.filter(category =>
    category && typeof category.id === "number" && typeof category.name === "string"
  ) : null;
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
  key: string,
  operation: (signal: AbortSignal) => Promise<T>,
  fallback: T,
) {
  return localPublicReads.read(key, async signal => {
    if (!(await getDb()) || signal.aborted) throw new Error("Database not available");
    return operation(signal);
  }, fallback);
}

export async function resolvePublicBlogBySlug(
  slug: string,
  options: { skipManagedFallback?: boolean } = {},
): Promise<PublicBlogResolution> {
  if (isHeldBlogSlug(slug)) {
    return { redirect: false, newSlug: null, post: null };
  }

  // One local phase: a stalled redirect must not start a second DB read after timeout.
  const localResult = await readAvailableLocalBlogData<PublicBlogResolution>(
    `detail:${slug}`,
    async signal => {
      const redirect = await getRedirectByOldSlug(slug);
      if (signal.aborted) throw new Error("Database not available");
      if (redirect) return { redirect: true, newSlug: redirect.newSlug, post: null };
      const post = asPublicBlogPost(await getPublishedPostBySlug(slug));
      return { redirect: false, newSlug: null, post };
    },
    { redirect: false, newSlug: null, post: null },
  );
  if (localResult.value.redirect || localResult.value.post) return localResult.value;

  const staticFallbackPost = toPublicFallbackBlogPost(slug);
  if (staticFallbackPost) {
    return { redirect: false, newSlug: null, post: staticFallbackPost };
  }

  const managedResolution = options.skipManagedFallback ? null : await getManagedPublicBlogBySlug(slug);
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
} = {}, options: { skipManagedFallback?: boolean } = {}): Promise<{ posts: PublicBlogPost[]; total: number }> {
  const localResult = await readAvailableLocalBlogData(
    `list:${JSON.stringify(filters)}`,
    () => getPublishedPosts(filters),
    { posts: [], total: 0 },
  );
  const local = localResult.value;
  const remote =
    options.skipManagedFallback || localResult.state !== "available" || local.total > 0
      ? null
      : await getManagedPublicBlogPosts(filters);
  const primaryPosts = asPublicBlogPosts(remote?.posts ?? local.posts);

  return mergePublicBlogPosts(
    primaryPosts,
    getAllPublicFallbackBlogPosts(),
    filters,
  );
}

export async function listPublicBlogCategories(options: { skipManagedFallback?: boolean } = {}): Promise<PublicBlogCategory[]> {
  const localResult = await readAvailableLocalBlogData("categories", () => getAllCategories(), []);
  const local = localResult.value;
  const remote =
    options.skipManagedFallback || localResult.state !== "available" || local.length > 0
      ? null
      : await getManagedPublicBlogCategories();
  return mergePublicBlogCategories((remote ?? local) as PublicBlogCategory[]);
}

export async function listPublicRelatedBlogs(input: {
  categoryId: number;
  excludeId: number;
  tags?: string[] | null;
  limit?: number;
}, options: { skipManagedFallback?: boolean } = {}): Promise<PublicBlogPost[]> {
  const limit = input.limit ?? 4;
  const fallbackPosts = getAllPublicFallbackBlogPosts()
    .filter(post => post.categoryId === input.categoryId && post.id !== input.excludeId);

  const localResult = await readAvailableLocalBlogData(
    `related:${JSON.stringify(input)}`,
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
    options.skipManagedFallback || localResult.state !== "available" || local.length > 0
      ? null
      : await getManagedRelatedPublicBlogPosts(input);
  const primaryPosts = asPublicBlogPosts(remote ?? local);

  return mergePublicBlogPosts(primaryPosts, fallbackPosts, { limit }).posts.filter(
    post => post.id !== input.excludeId && !isHeldBlogSlug(post.slug),
  );
}
