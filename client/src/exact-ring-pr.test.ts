import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getFallbackBlogPostBySlug } from "./lib/blogFallback";
import {
  EXACT_RING_PR_CONTENT,
  EXACT_RING_PR_HERO_URL,
  EXACT_RING_PR_SLUG,
  EXACT_RING_PR_SUBTITLE,
  EXACT_RING_PR_TITLE,
} from "@shared/seo/exact-ring-press-release";

const source = readFileSync(
  path.resolve(process.cwd(), "client/src/pages/BlogPost.tsx"),
  "utf8",
);
const serverMetaSource = readFileSync(
  path.resolve(process.cwd(), "server/seo/resolve-meta.ts"),
  "utf8",
);
const publicCatalogSource = readFileSync(
  path.resolve(process.cwd(), "shared/seo/public-blog-catalog.ts"),
  "utf8",
);

describe("exact supplied Ring press release rendering", () => {
  it("identifies only the approved Ring announcement slug as an exact press release", () => {
    expect(source).toContain(
      "const isExactRingPressRelease = slug === 'mysentry-now-available-ring-appstore';",
    );
    expect(source).toContain('data-exact-pr-part="release-label"');
    expect(source).toContain("FOR IMMEDIATE RELEASE");
    expect(source).toContain('data-exact-pr-part="subtitle"');
  });

  it("keeps the exact release in the shared server-recognized public catalog", () => {
    expect(serverMetaSource).toContain(
      'import { resolvePublicBlogBySlug } from "../publicBlogResolver";',
    );
    expect(serverMetaSource).toContain(
      "const resolution = await resolvePublicBlogBySlug(slug);",
    );
    expect(publicCatalogSource).toContain("STATIC_FALLBACK_PUBLIC_BLOGS");
    expect(publicCatalogSource).toContain("EXACT_RING_PR_SLUG");
  });

  it("does not append generic editorial blocks to the exact press release", () => {
    expect(source).toContain(
      "!isExactRingPressRelease && Array.isArray(post.tags)",
    );
    expect(source).toContain(
      "!isExactRingPressRelease && post.excerpt",
    );
    expect(source).toContain(
      "{!isExactRingPressRelease && <BlogCTA />}",
    );
    expect(source).toContain(
      "!isExactRingPressRelease && relatedPosts.length > 0",
    );
    expect(source).toContain(
      "isExactRingPressRelease\n                ? post.contentHtml || ''",
    );
  });

  it("provides the exact release as a production fallback with the approved hero", () => {
    const post = getFallbackBlogPostBySlug(EXACT_RING_PR_SLUG);

    expect(post).not.toBeNull();
    expect(post).toMatchObject({
      slug: EXACT_RING_PR_SLUG,
      title: EXACT_RING_PR_TITLE,
      excerpt: EXACT_RING_PR_SUBTITLE,
      contentHtml: EXACT_RING_PR_CONTENT,
      heroImageUrl: EXACT_RING_PR_HERO_URL,
      categoryId: 4,
      readTimeMinutes: 4,
      metaTitle: EXACT_RING_PR_TITLE,
      isIndexed: true,
      isFollowed: true,
    });
    expect(post?.publishedAt.toISOString()).toBe("2026-09-10T00:00:00.000Z");
  });

  it("preserves every visible word from the supplied DOCX in the fallback", () => {
    const blockMatches = [
      ...EXACT_RING_PR_CONTENT.matchAll(/<(p|h2)[^>]*>([\s\S]*?)<\/\1>/g),
    ];
    const bodyLines = blockMatches.flatMap(match =>
      match[2]
        .replace(/<br\s*\/?\s*>/gi, "\n")
        .replace(/<[^>]+>/g, "")
        .split("\n")
        .map(line => line.replace(/\s+/g, " ").trim())
        .filter(Boolean),
    );
    const sourceText = [
      "FOR IMMEDIATE RELEASE",
      EXACT_RING_PR_TITLE,
      EXACT_RING_PR_SUBTITLE,
      ...bodyLines,
    ].join("\n");
    const sourceHash = createHash("sha256").update(sourceText).digest("hex");

    expect(sourceHash).toBe(
      "640daba11dc3b3d38ba308923bc1a26d35faeb6576e5ffa319b02bc0b47638ff",
    );
  });
});
