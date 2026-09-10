import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const source = readFileSync(
  path.resolve(process.cwd(), "client/src/pages/BlogPost.tsx"),
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
});
