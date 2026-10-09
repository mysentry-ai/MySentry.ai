import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  STATIC_FALLBACK_PUBLIC_BLOGS,
  isStaticFallbackPublicBlogSlug,
} from "../shared/seo/public-blog-catalog";
import { HELD_BLOG_SLUGS } from "../shared/seo/content-governance";

const source = readFileSync(
  path.resolve(process.cwd(), "server/sitemaps.ts"),
  "utf8",
);

describe("blog sitemap public catalog parity", () => {
  it("uses centralized public-blog availability instead of a Ring-only database exception", () => {
    expect(source).toContain('import { listPublicBlogs } from "./publicBlogResolver";');
    expect(source).toContain("const result = await listPublicBlogs({ limit: 1_000 });");
    expect(source).toContain("new Map(posts.map(post => [post.slug, post]))");
    expect(source).not.toContain("EXACT_RING_PR_SLUG");
    expect(source).not.toContain("getDb()");
  });

  it("includes every public static fallback and excludes every held article", () => {
    expect(STATIC_FALLBACK_PUBLIC_BLOGS.length).toBe(6);
    expect(
      STATIC_FALLBACK_PUBLIC_BLOGS.every(
        post => isStaticFallbackPublicBlogSlug(post.slug) && !HELD_BLOG_SLUGS.has(post.slug),
      ),
    ).toBe(true);
    expect(source).toContain("post.isIndexed !== false");
    expect(source).toContain("!isHeldBlogSlug(post.slug)");
  });
});
