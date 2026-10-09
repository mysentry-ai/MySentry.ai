import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { fallbackBlogPosts } from "./lib/blogFallback";
import {
  PUBLIC_FOOTER_BLOG_GUIDES,
  STATIC_FALLBACK_PUBLIC_BLOGS,
  getPublicBlogPath,
  resolvePublicBlogLifecycle,
} from "@shared/seo/public-blog-catalog";
import { HELD_BLOG_SLUGS } from "@shared/seo/content-governance";
import { CANONICAL_REDIRECTS } from "@shared/seo/redirects";
import { ROUTE_META } from "@shared/seo/route-meta";

const root = process.cwd();
const footer = readFileSync(
  path.join(root, "client", "src", "components", "Footer.tsx"),
  "utf8",
);
const hub = readFileSync(
  path.join(root, "client", "src", "pages", "Blogs.tsx"),
  "utf8",
);
const detail = readFileSync(
  path.join(root, "client", "src", "pages", "BlogPost.tsx"),
  "utf8",
);

function internalHrefs(html: string): string[] {
  return [...html.matchAll(/href="(\/[^"#?]*)"/g)].map(match => match[1]);
}

describe("public blog internal link integrity", () => {
  it("makes the footer derive its guides from the central public catalog", () => {
    expect(footer).toContain("PUBLIC_FOOTER_BLOG_GUIDES.map");
    expect(footer).toContain("getPublicBlogPath(guide.slug)");
    expect(footer).not.toMatch(/href="\/blog\//);
    expect(new Set(PUBLIC_FOOTER_BLOG_GUIDES.map(guide => guide.slug)).size).toBe(
      PUBLIC_FOOTER_BLOG_GUIDES.length,
    );

    for (const guide of PUBLIC_FOOTER_BLOG_GUIDES) {
      expect(getPublicBlogPath(guide.slug)).toBe(`/blog/${guide.slug}`);
      expect(
        resolvePublicBlogLifecycle(guide.slug, { databaseStatus: "published" }),
      ).toBe("database-published");
    }
  });

  it("keeps static fallback cards public, unique, and outside editorial hold", () => {
    expect(fallbackBlogPosts).toHaveLength(STATIC_FALLBACK_PUBLIC_BLOGS.length);
    expect(new Set(fallbackBlogPosts.map(post => post.slug)).size).toBe(
      fallbackBlogPosts.length,
    );

    for (const post of fallbackBlogPosts) {
      expect(HELD_BLOG_SLUGS.has(post.slug), post.slug).toBe(false);
      expect(resolvePublicBlogLifecycle(post.slug), post.slug).toBe(
        "static-fallback-public",
      );
    }

    expect(hub).toContain("fallbackBlogPosts");
    expect(hub).toContain("!isHeldBlogSlug(post.slug)");
    expect(detail).toContain("getFallbackBlogPostBySlug(slug)");
  });

  it("keeps canonical, non-redirecting internal links inside static fallback articles", () => {
    for (const post of STATIC_FALLBACK_PUBLIC_BLOGS) {
      for (const href of internalHrefs(post.contentHtml)) {
        expect(CANONICAL_REDIRECTS[href], `${post.slug} points through ${href}`).toBeUndefined();
        expect(ROUTE_META[href], `${post.slug} points to an unknown route ${href}`).toBeDefined();
      }
    }
  });
});
