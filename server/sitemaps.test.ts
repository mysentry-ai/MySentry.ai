import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { EXACT_RING_PR_SLUG } from "../shared/seo/exact-ring-press-release";

const source = readFileSync(
  path.resolve(process.cwd(), "server/sitemaps.ts"),
  "utf8",
);

describe("blog sitemap production fallback", () => {
  it("keeps the exact Ring PR discoverable without a runtime database", () => {
    expect(source).toContain(
      'import { EXACT_RING_PR_SLUG } from "../shared/seo/exact-ring-press-release";',
    );
    expect(source).toContain("sendBlogSitemap([exactRingPrEntry]);");
    expect(source).toContain(
      "posts.some(post => post.slug === EXACT_RING_PR_SLUG)",
    );
    expect(EXACT_RING_PR_SLUG).toBe(
      "mysentry-now-available-ring-appstore",
    );
  });
});
