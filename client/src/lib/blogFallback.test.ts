import { describe, expect, it } from "vitest";
import {
  fallbackBlogCategories,
  fallbackBlogPosts,
  getFallbackBlogPostBySlug,
  getFallbackRelatedPosts,
} from "./blogFallback";

describe("public blog fallback", () => {
  it("provides complete article cards when the CMS API has no published posts", () => {
    expect(fallbackBlogPosts.length).toBeGreaterThan(0);
    expect(fallbackBlogPosts.every((post) => post.title && post.slug && post.heroImageUrl && post.contentHtml)).toBe(true);
  });

  it("resolves a fallback article by its public slug", () => {
    const post = fallbackBlogPosts[0];
    expect(getFallbackBlogPostBySlug(post.slug)?.id).toBe(post.id);
  });

  it("provides categories and related posts for fallback articles", () => {
    expect(fallbackBlogCategories.length).toBeGreaterThan(0);
    const post = fallbackBlogPosts.find((item) => getFallbackRelatedPosts(item.categoryId, item.id).length > 0);
    expect(post).toBeDefined();
    expect(getFallbackRelatedPosts(post!.categoryId, post!.id).every((item) => item.id !== post!.id)).toBe(true);
  });
});
