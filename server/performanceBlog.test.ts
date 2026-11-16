import * as React from "react";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createPublicReadGate, isDatabaseAvailabilityFailure } from "./publicBlogRead";
import { EXACT_RING_PR_SLUG, EXACT_RING_PR_CONTENT, EXACT_RING_PR_HERO_URL } from "../shared/seo/exact-ring-press-release";
import { HELD_BLOG_SLUGS } from "../shared/seo/content-governance";
import { getFallbackBlogPostBySlug } from "../client/src/lib/blogFallback";

const db = vi.hoisted(() => ({
  getDb: vi.fn(), getRedirectByOldSlug: vi.fn(), getPublishedPostBySlug: vi.fn(),
  getPublishedPosts: vi.fn(), getAllCategories: vi.fn(), getRelatedPosts: vi.fn(),
}));
const ui = vi.hoisted(() => ({ slug: "", post: {} as any, list: {} as any, categories: {} as any, related: {} as any,
  postHook: vi.fn(), listHook: vi.fn(), categoriesHook: vi.fn(), relatedHook: vi.fn() }));
vi.mock("./db", () => ({ getDb: db.getDb }));
vi.mock("./blogDb", () => db);
vi.mock("@/lib/trpc", () => ({ trpc: { blog: { public: {
  getBySlug: { useQuery: ui.postHook }, list: { useQuery: ui.listHook },
  categories: { useQuery: ui.categoriesHook }, related: { useQuery: ui.relatedHook },
} } } }));
vi.mock("wouter", () => ({
  useRoute: () => [true, { slug: ui.slug }], useLocation: () => [`/blog/${ui.slug}`, vi.fn()],
  Link: ({ href, children, ...props }: any) => createElement("a", { href, ...props }, children),
}));
vi.mock("@/components/Navbar", () => ({ default: () => null }));
vi.mock("@/components/Footer", () => ({ default: () => null }));
vi.mock("@/components/BlogCTA", () => ({ default: () => null }));
vi.mock("@/components/HeroSection", () => ({ default: () => null }));
vi.mock("@/components/SEO", () => ({ default: (props: any) => createElement("meta", {
  "data-noindex": props.noindex ? "true" : "false", "data-canonical": props.canonical,
}) }));
vi.mock("framer-motion", () => ({
  AnimatePresence: ({ children }: any) => children,
  motion: { div: ({ children, initial, animate, exit, transition, ...props }: any) => createElement("div", props, children) },
}));

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (error: unknown) => void;
  const promise = new Promise<T>((res, rej) => { resolve = res; reject = rej; });
  return { promise, resolve, reject };
}
const jsonResponse = (data: unknown) => new Response(JSON.stringify([{ result: { data: { json: data } } }]), {
  headers: { "Content-Type": "application/json" },
});
async function resolver() { return import("./publicBlogResolver"); }

beforeEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
  vi.stubGlobal("React", React);
  db.getDb.mockResolvedValue({});
  db.getRedirectByOldSlug.mockResolvedValue(undefined);
  db.getPublishedPostBySlug.mockResolvedValue(undefined);
  db.getPublishedPosts.mockResolvedValue({ posts: [], total: 0 });
  db.getAllCategories.mockResolvedValue([]);
  db.getRelatedPosts.mockResolvedValue([]);
  // No tests use the network or an actual DB, even if a local .env exists.
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("Site Unavailable", { headers: { "Content-Type": "text/html" } })));
  ui.slug = EXACT_RING_PR_SLUG;
  ui.post = { isLoading: false, isError: false, data: { post: null, redirect: false }, refetch: vi.fn() };
  ui.list = { isLoading: false, isError: false, data: { posts: [], total: 0 }, refetch: vi.fn() };
  ui.categories = { data: [] };
  ui.related = { data: [] };
  ui.postHook.mockImplementation(() => ui.post);
  ui.listHook.mockImplementation(() => ui.list);
  ui.categoriesHook.mockImplementation(() => ui.categories);
  ui.relatedHook.mockImplementation(() => ui.related);
});
afterEach(() => { vi.useRealTimers(); vi.unstubAllGlobals(); });

describe("public-only deadline and admission policy", () => {
  it("recognizes nested driver codes but not SQL, schema, or logic errors", () => {
    for (const code of ["ETIMEDOUT", "ECONNREFUSED", "ER_ACCESS_DENIED_ERROR", "EAI_AGAIN"]) {
      expect(isDatabaseAvailabilityFailure(new Error("Failed query: redacted", { cause: { code } }))).toBe(true);
    }
    const cycle: any = { message: "Bad SQL", code: "ER_BAD_FIELD_ERROR" }; cycle.cause = cycle;
    expect(isDatabaseAvailabilityFailure(cycle)).toBe(false);
    expect(isDatabaseAvailabilityFailure(new Error("Failed query", { cause: { code: "ER_PARSE_ERROR" } }))).toBe(false);
  });

  it("coalesces reads and keeps timed-out admission slots until actual settlement", async () => {
    vi.useFakeTimers();
    const gate = createPublicReadGate({ deadlineMs: 50, maxInFlight: 2, unavailableCooldownMs: 100, isAvailabilityFailure: isDatabaseAvailabilityFailure });
    const a = deferred<number>(), b = deferred<number>();
    const operation = vi.fn(() => a.promise);
    const first = gate.read("a", operation, -1);
    expect(gate.read("a", operation, -1)).toBe(first);
    const second = gate.read("b", () => b.promise, -1);
    await expect(gate.read("c", operation, -1)).resolves.toMatchObject({ state: "unavailable" });
    await vi.advanceTimersByTimeAsync(50);
    expect(await first).toEqual({ state: "deadline-exceeded", value: -1 });
    expect(await second).toEqual({ state: "deadline-exceeded", value: -1 });
    await vi.advanceTimersByTimeAsync(101);
    await expect(gate.read("d", operation, -1)).resolves.toMatchObject({ state: "unavailable" });
    expect(operation).toHaveBeenCalledTimes(1);
    expect(gate.inFlight).toBe(2);
    a.reject(new Error("late driver error")); b.resolve(2);
    await vi.advanceTimersByTimeAsync(0);
    expect(gate.inFlight).toBe(0);
    await expect(gate.read("new", async () => 3, -1)).resolves.toEqual({ state: "available", value: 3 });
  });

  it("rethrows unexpected local errors rather than fabricating an available response", async () => {
    const gate = createPublicReadGate({ deadlineMs: 50, maxInFlight: 1, unavailableCooldownMs: 10, isAvailabilityFailure: isDatabaseAvailabilityFailure });
    await expect(gate.read("sql", async () => { throw new Error("Invalid SQL"); }, null)).rejects.toThrow("Invalid SQL");
  });
});

describe("bounded public resolver authority", () => {
  it("gives stalled redirects one local phase, coalesces concurrent callers, and skips late post work", async () => {
    vi.useFakeTimers();
    const stalled = deferred<any>(); db.getRedirectByOldSlug.mockReturnValue(stalled.promise);
    const api = await resolver();
    const requests = Array.from({ length: 12 }, () => api.resolvePublicBlogBySlug(EXACT_RING_PR_SLUG));
    await vi.advanceTimersByTimeAsync(1_500);
    for (const result of await Promise.all(requests)) {
      expect(result.post?.contentHtml).toBe(EXACT_RING_PR_CONTENT.trim());
      expect(result.post?.heroImageUrl).toBe(EXACT_RING_PR_HERO_URL);
    }
    expect(db.getRedirectByOldSlug).toHaveBeenCalledTimes(1);
    expect(db.getPublishedPostBySlug).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
    stalled.resolve(undefined); await vi.advanceTimersByTimeAsync(0);
    expect(db.getPublishedPostBySlug).not.toHaveBeenCalled();
  });

  it("bounds a stalled published-post query without destroying or replacing the DB handle", async () => {
    vi.useFakeTimers();
    const stalled = deferred<any>(); db.getPublishedPostBySlug.mockReturnValue(stalled.promise);
    const api = await resolver();
    const result = api.resolvePublicBlogBySlug(EXACT_RING_PR_SLUG);
    await vi.advanceTimersByTimeAsync(1_500);
    expect((await result).post?.id).toBe(api.toPublicFallbackBlogPost(EXACT_RING_PR_SLUG)?.id);
    expect(db.getPublishedPostBySlug).toHaveBeenCalledTimes(1);
    stalled.reject(new Error("late error")); await vi.advanceTimersByTimeAsync(0);
    expect(vi.getTimerCount()).toBe(0);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns catalog without initiating queries or managed waiting when no local handle is available", async () => {
    db.getDb.mockResolvedValue(null);
    const api = await resolver();
    const result = await api.listPublicBlogs({ limit: 200 });
    expect(result.posts).toHaveLength(6);
    expect(db.getPublishedPosts).not.toHaveBeenCalled();
    expect(fetch).not.toHaveBeenCalled();
  });

  it("preserves managed inventory when the existing successful empty-local rule applies", async () => {
    const api = await resolver();
    const post = { ...api.toPublicFallbackBlogPost(EXACT_RING_PR_SLUG)!, slug: "managed-only", id: 8 };
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(jsonResponse({ posts: [post], total: 1 })));
    expect((await api.listPublicBlogs({ limit: 200 })).posts.some(item => item.slug === post.slug)).toBe(true);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("preserves reviewed redirect and local noindex/nofollow post precedence", async () => {
    const api = await resolver();
    db.getRedirectByOldSlug.mockResolvedValueOnce({ newSlug: "reviewed-target" });
    expect(await api.resolvePublicBlogBySlug(EXACT_RING_PR_SLUG)).toEqual({ redirect: true, newSlug: "reviewed-target", post: null });
    expect(db.getPublishedPostBySlug).not.toHaveBeenCalled();
    const primary = { ...api.toPublicFallbackBlogPost(EXACT_RING_PR_SLUG)!, id: 42, title: "Local primary", isIndexed: false, isFollowed: false };
    db.getPublishedPostBySlug.mockResolvedValue(primary);
    expect((await api.resolvePublicBlogBySlug(EXACT_RING_PR_SLUG)).post).toEqual(primary);
    const { resolveMeta } = await import("./seo/resolve-meta");
    expect(await resolveMeta(`/blog/${EXACT_RING_PR_SLUG}`, "https://mysentry.ai")).toMatchObject({ robots: "noindex,nofollow", heading: primary.metaTitle });
  });

  it("returns source catalog immediately on wrapped availability failure without waiting on the remote outage", async () => {
    const api = await resolver();
    db.getPublishedPosts.mockRejectedValue(new Error("Failed query", { cause: { code: "ETIMEDOUT" } }));
    const result = await api.listPublicBlogs({ limit: 200 });
    expect(result.total).toBe(6);
    expect(result.posts).toHaveLength(6);
    expect(fetch).not.toHaveBeenCalled();
    expect(await api.listPublicBlogCategories()).toHaveLength(4);
    expect(db.getAllCategories).not.toHaveBeenCalled(); // Short unavailable circuit.
  });

  it("retains current filter/pagination behavior and same-slug primary indexing flags", async () => {
    const api = await resolver();
    const primary = { ...api.toPublicFallbackBlogPost(EXACT_RING_PR_SLUG)!, id: 7, isIndexed: false };
    db.getPublishedPosts.mockResolvedValue({ posts: [primary], total: 1 });
    const result = await api.listPublicBlogs({ limit: 2, offset: 1 });
    expect(db.getPublishedPosts).toHaveBeenCalledWith({ limit: 2, offset: 1 });
    expect(result.posts).toHaveLength(2);
    const all = await api.listPublicBlogs({ limit: 200 });
    expect(all.posts.find(post => post.slug === primary.slug)?.isIndexed).toBe(false);
  });

  it("never queries a held slug and never converts a SQL failure to a static article", async () => {
    const api = await resolver();
    expect((await api.resolvePublicBlogBySlug([...HELD_BLOG_SLUGS][0])).post).toBeNull();
    expect(db.getDb).not.toHaveBeenCalled();
    db.getRedirectByOldSlug.mockRejectedValue(new Error("Invalid SQL"));
    await expect(api.resolvePublicBlogBySlug(EXACT_RING_PR_SLUG)).rejects.toThrow("Invalid SQL");
    expect(fetch).not.toHaveBeenCalled();
  });
});

describe("managed API outage handling", () => {
  it("rejects HTTP-200 HTML once and opens a short origin failure circuit", async () => {
    const api = await resolver();
    expect(await api.getManagedPublicBlogBySlug("unknown-one")).toBeNull();
    expect(await api.getManagedPublicBlogBySlug("unknown-two")).toBeNull();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("aborts stalled managed headers at the same overall deadline without a second attempt", async () => {
    vi.useFakeTimers();
    let signal: AbortSignal | undefined;
    vi.stubGlobal("fetch", vi.fn((_url, options) => {
      signal = options.signal;
      return new Promise((_resolve, reject) => signal!.addEventListener("abort", () => reject(new Error("aborted headers")), { once: true }));
    }));
    const api = await resolver();
    const result = api.getManagedPublicBlogBySlug("headers-stall");
    await vi.advanceTimersByTimeAsync(2_000);
    expect(await result).toBeNull();
    expect(signal?.aborted).toBe(true);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(vi.getTimerCount()).toBe(0);
  });

  it("rejects malformed JSON envelopes without retry", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("[null]", { headers: { "Content-Type": "application/json" } })));
    expect(await (await resolver()).getManagedPublicBlogBySlug("malformed")).toBeNull();
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("does not publish managed drafts and retains managed noindex/nofollow flags", async () => {
    const api = await resolver();
    const post = api.toPublicFallbackBlogPost(EXACT_RING_PR_SLUG)!;
    vi.stubGlobal("fetch", vi.fn()
      .mockResolvedValueOnce(jsonResponse({ redirect: false, post: { ...post, status: "draft" } }))
      .mockResolvedValueOnce(jsonResponse({ redirect: false, post: { ...post, isIndexed: false, isFollowed: false } })));
    expect((await api.getManagedPublicBlogBySlug("draft"))?.post).toBeNull();
    expect((await api.getManagedPublicBlogBySlug("primary"))?.post).toMatchObject({ isIndexed: false, isFollowed: false });
  });

  it("bounds body stalls and retries to one overall managed phase, propagating abort", async () => {
    vi.useFakeTimers();
    let signal: AbortSignal | undefined;
    vi.stubGlobal("fetch", vi.fn().mockResolvedValueOnce(new Response("temporary", { status: 503 })).mockImplementationOnce((_url, options) => {
      signal = options.signal;
      return Promise.resolve({ ok: true, headers: new Headers({ "Content-Type": "application/json" }), json: () => new Promise((_resolve, reject) => {
        signal!.addEventListener("abort", () => reject(new Error("aborted body")), { once: true });
      }) });
    }));
    const api = await resolver();
    const result = api.getManagedPublicBlogBySlug("body-stall");
    await vi.advanceTimersByTimeAsync(1_999);
    expect(signal?.aborted).toBe(false);
    await vi.advanceTimersByTimeAsync(1);
    expect(await result).toBeNull();
    expect(signal?.aborted).toBe(true);
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(vi.getTimerCount()).toBe(0);
  });

  it("coalesces concurrent equivalent managed reads", async () => {
    const response = deferred<Response>(); vi.stubGlobal("fetch", vi.fn(() => response.promise));
    const api = await resolver();
    const calls = [api.getManagedPublicBlogBySlug("same"), api.getManagedPublicBlogBySlug("same")];
    await Promise.resolve();
    response.resolve(jsonResponse({ redirect: true, newSlug: "target", post: null }));
    expect(await Promise.all(calls)).toEqual(Array(2).fill({ redirect: true, newSlug: "target", post: null }));
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe("bounded existing SEO cache", () => {
  it("evicts beyond 64 entries and expires positive metadata after the original 60 seconds", async () => {
    vi.useFakeTimers();
    const api = await resolver();
    const post = api.toPublicFallbackBlogPost(EXACT_RING_PR_SLUG)!;
    db.getPublishedPostBySlug.mockImplementation(async slug => ({ ...post, slug }));
    const { resolveMeta } = await import("./seo/resolve-meta");
    for (let i = 0; i < 65; i++) await resolveMeta(`/blog/cache-${i}`, "https://mysentry.ai");
    expect(db.getPublishedPostBySlug).toHaveBeenCalledTimes(65);
    await resolveMeta("/blog/cache-0", "https://mysentry.ai");
    expect(db.getPublishedPostBySlug).toHaveBeenCalledTimes(66);
    await resolveMeta("/blog/cache-0", "https://mysentry.ai");
    expect(db.getPublishedPostBySlug).toHaveBeenCalledTimes(66);
    await vi.advanceTimersByTimeAsync(60_000);
    await resolveMeta("/blog/cache-0", "https://mysentry.ai");
    expect(db.getPublishedPostBySlug).toHaveBeenCalledTimes(67);
  });

  it("bounds retained article bytes without truncating rendered HTML", async () => {
    const api = await resolver();
    const contentHtml = "<p>" + "x".repeat(1_200_000) + "</p>";
    db.getPublishedPostBySlug.mockImplementation(async slug => ({ ...api.toPublicFallbackBlogPost(EXACT_RING_PR_SLUG)!, slug, contentHtml }));
    const { resolveMeta } = await import("./seo/resolve-meta");
    expect((await resolveMeta("/blog/large-a", "https://mysentry.ai")).articleHtml).toBe(contentHtml);
    await resolveMeta("/blog/large-b", "https://mysentry.ai");
    await resolveMeta("/blog/large-a", "https://mysentry.ai");
    expect(db.getPublishedPostBySlug).toHaveBeenCalledTimes(3);
  });
});

describe("actual public component states and query policies", () => {
  async function renderPost() {
    const { default: BlogPost } = await import("../client/src/pages/BlogPost");
    return renderToStaticMarkup(createElement(BlogPost));
  }
  async function renderList() {
    const { default: Blogs } = await import("../client/src/pages/Blogs");
    return renderToStaticMarkup(createElement(Blogs));
  }

  it("renders held noindex/canonical copy immediately and disables every public query", async () => {
    ui.slug = [...HELD_BLOG_SLUGS][0]; ui.post = { isLoading: true, isError: false };
    const html = await renderPost();
    expect(html).toContain("Editorial review in progress");
    expect(html).toContain('data-noindex="true"');
    expect(html).toContain(`data-canonical="https://mysentry.ai/blog/${ui.slug}"`);
    for (const hook of [ui.postHook, ui.relatedHook, ui.categoriesHook]) expect(hook.mock.calls[0][1]).toMatchObject({ enabled: false, retry: false });
  });

  it("does not show fabricated static content during real loading, redirect, or SQL errors", async () => {
    ui.post = { isLoading: true, isError: false };
    expect(await renderPost()).not.toContain("FOR IMMEDIATE RELEASE");
    ui.post = { isLoading: false, isError: false, data: { redirect: true, newSlug: "target", post: null } };
    expect(await renderPost()).not.toContain("FOR IMMEDIATE RELEASE");
    ui.post = { isLoading: false, isError: true, error: { message: "Invalid SQL" } };
    const html = await renderPost();
    expect(html).toContain("Article could not be loaded");
    expect(html).not.toContain("Article Not Found");
    expect(html).not.toContain("FOR IMMEDIATE RELEASE");
  });

  it("retains exact PR content and approved hero while disabling categories and related reads", async () => {
    ui.post.data.post = getFallbackBlogPostBySlug(EXACT_RING_PR_SLUG);
    const html = await renderPost();
    expect(html).toContain("FOR IMMEDIATE RELEASE");
    expect(html).toContain(EXACT_RING_PR_HERO_URL);
    expect(ui.categoriesHook.mock.calls[0][1]).toMatchObject({ enabled: false });
    expect(ui.relatedHook.mock.calls[0][1]).toMatchObject({ enabled: false });
  });

  it("uses source-related contents for server fallback IDs but preserves ordinary primary queries", async () => {
    ui.slug = "consent-first-family-safety-plan";
    ui.post.data.post = getFallbackBlogPostBySlug(ui.slug);
    expect(await renderPost()).toContain("More from Families");
    expect(ui.relatedHook.mock.calls[0][1].enabled).toBe(false);
    expect(ui.categoriesHook.mock.calls[0][1].enabled).toBe(false);
    ui.relatedHook.mockClear(); ui.categoriesHook.mockClear();
    ui.post.data.post = { ...getFallbackBlogPostBySlug(ui.slug), id: 42 };
    await renderPost();
    expect(ui.relatedHook.mock.calls[0][1]).toMatchObject({ enabled: true, retry: false });
    expect(ui.categoriesHook.mock.calls[0][1]).toMatchObject({ enabled: true, retry: false });
  });

  it("keeps catalog loading/errors/authoritative empty separate and supplies source category labels", async () => {
    ui.list = { isLoading: true, isError: false };
    expect(await renderList()).not.toContain("Featured Story");
    ui.list = { isLoading: false, isError: true, error: { message: "Invalid SQL" } };
    const errorHtml = await renderList();
    expect(errorHtml).toContain("Articles could not be loaded");
    expect(errorHtml).not.toContain("Featured Story");
    ui.list = { isLoading: false, isError: false, data: { posts: [] } };
    const empty = await renderList();
    expect(empty).toContain("No articles found in this category.");
    expect(empty).toContain("Senior Care");
    expect(ui.listHook.mock.calls[0][1]).toMatchObject({ retry: false });
    expect(ui.listHook.mock.calls[0][0]).toMatchObject({ limit: 200 });
  });

  it("shows only approved catalog/article fallback after a known transport deadline settles", async () => {
    ui.post = { isLoading: false, isError: true, error: { message: "Public blog read deadline exceeded" } };
    expect(await renderPost()).toContain("FOR IMMEDIATE RELEASE");
    ui.list = { isLoading: false, isError: true, error: { message: "Public blog read deadline exceeded" } };
    expect(await renderList()).toContain("Featured Story");
    ui.slug = "database-only-with-no-approved-fallback";
    const unknown = await renderPost();
    expect(unknown).toContain("Article could not be loaded");
    expect(unknown).not.toContain("Article Not Found");
  });
});
