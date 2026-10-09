import { afterEach, describe, expect, it, vi } from "vitest";
import {
  getManagedPublicBlogBySlug,
  getManagedPublicBlogPosts,
  getAllPublicFallbackBlogPosts,
  mergePublicBlogPosts,
  resolvePublicBlogBySlug,
  toPublicFallbackBlogPost,
} from "./publicBlogResolver";
import {
  STATIC_FALLBACK_PUBLIC_BLOGS,
  resolvePublicBlogLifecycle,
} from "../shared/seo/public-blog-catalog";
import { HELD_BLOG_SLUGS } from "../shared/seo/content-governance";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("central public blog authority", () => {
  it("gives every static fallback one public lifecycle and a complete article record", () => {
    expect(STATIC_FALLBACK_PUBLIC_BLOGS.length).toBe(6);

    for (const staticPost of STATIC_FALLBACK_PUBLIC_BLOGS) {
      const post = toPublicFallbackBlogPost(staticPost.slug);
      expect(post?.status, staticPost.slug).toBe("published");
      expect(post?.isIndexed, staticPost.slug).toBe(true);
      expect(post?.isFollowed, staticPost.slug).toBe(true);
      expect(post?.contentHtml, staticPost.slug).toContain("<p");
      expect(resolvePublicBlogLifecycle(staticPost.slug), staticPost.slug).toBe(
        "static-fallback-public",
      );
    }
  });

  it("does not expose an editorial-hold slug through the public resolver", async () => {
    const heldSlug = [...HELD_BLOG_SLUGS][0];
    await expect(resolvePublicBlogBySlug(heldSlug)).resolves.toEqual({
      redirect: false,
      newSlug: null,
      post: null,
    });
  });

  it("preserves the local database article over a same-slug fallback", () => {
    const fallback = getAllPublicFallbackBlogPosts()[0];
    const local = { ...fallback, id: 42, title: "Database article" };
    const result = mergePublicBlogPosts([local], [fallback]);

    expect(result.total).toBe(1);
    expect(result.posts[0]).toMatchObject({ id: 42, title: "Database article" });
  });
});

describe("managed public blog runtime fallback", () => {
  it("retrieves a published article server-to-server when local data is unavailable", async () => {
    const fallback = getAllPublicFallbackBlogPosts()[0];
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify([
          {
            result: {
              data: {
                json: { redirect: false, newSlug: null, post: fallback },
              },
            },
          },
        ]),
        { status: 200, headers: { "Content-Type": "application/json" } },
      ),
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      getManagedPublicBlogBySlug("family-park-safety-guide"),
    ).resolves.toMatchObject({ redirect: false, newSlug: null, post: fallback });
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining(
        "https://mysentry-5pk35fzr.manus.space/api/trpc/blog.public.getBySlug?batch=1",
      ),
      expect.objectContaining({ headers: { Accept: "application/json" } }),
    );
  });

  it("preserves the managed public article inventory for a database-unavailable runtime", async () => {
    const fallback = getAllPublicFallbackBlogPosts()[0];
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify([
          { result: { data: { json: { posts: [fallback], total: 1 } } } },
        ]),
        { status: 200, headers: { "Content-Type": "application/json" } },
      ),
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(getManagedPublicBlogPosts({ limit: 1 })).resolves.toEqual({
      posts: [fallback],
      total: 1,
    });
  });

  it("retries one transient managed-runtime failure before treating a public article as unavailable", async () => {
    const fallback = getAllPublicFallbackBlogPosts()[0];
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(new Response("temporary failure", { status: 503 }))
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify([
            {
              result: {
                data: {
                  json: { redirect: false, newSlug: null, post: fallback },
                },
              },
            },
          ]),
          { status: 200, headers: { "Content-Type": "application/json" } },
        ),
      );
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      getManagedPublicBlogBySlug("family-park-safety-guide"),
    ).resolves.toMatchObject({ post: { slug: fallback.slug } });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
});
