import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { CANONICAL_REDIRECTS } from "@shared/seo/redirects";

const root = process.cwd();
const sourceRoot = path.join(root, "client", "src");
const publicRoot = path.join(root, "client", "public");

function sourceFiles(): string[] {
  const files: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(ts|tsx|css)$/.test(entry.name)) files.push(full);
    }
  };
  walk(sourceRoot);
  return files;
}

const files = sourceFiles();

describe("public source policy", () => {
  it("contains no Manus CDN or CloudFront dependency", () => {
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      expect(text, path.relative(root, file)).not.toMatch(/(?:manuscdn\.com|cloudfront\.net)/i);
    }
  });

  it("keeps every referenced local image on disk", () => {
    const imagePaths = new Set<string>();
    const imagePattern = /["'(]((?:\/images\/)[^"')?#]+\.(?:avif|gif|jpe?g|png|svg|webp))/gi;
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      for (const match of text.matchAll(imagePattern)) imagePaths.add(match[1]);
    }

    expect(imagePaths.size).toBeGreaterThan(0);
    for (const imagePath of imagePaths) {
      expect(
        fs.existsSync(path.join(publicRoot, imagePath.replace(/^\//, ""))),
        `Missing public image: ${imagePath}`
      ).toBe(true);
    }
  });

  it("does not link visitor-facing source files through approved redirects", () => {
    for (const file of files.filter(file => !file.endsWith(`${path.sep}App.tsx`))) {
      const text = fs.readFileSync(file, "utf8");
      for (const source of Object.keys(CANONICAL_REDIRECTS)) {
        const escaped = source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        expect(text, `${path.relative(root, file)} links to ${source}`).not.toMatch(
          new RegExp(`["']${escaped}["']`)
        );
      }
    }
  });

  it("keeps the primary brand token and shared actions on high-contrast colors", () => {
    const css = fs.readFileSync(path.join(sourceRoot, "index.css"), "utf8");
    const navbar = fs.readFileSync(path.join(sourceRoot, "components", "Navbar.tsx"), "utf8");
    const selector = fs.readFileSync(path.join(sourceRoot, "components", "ICPSelector.tsx"), "utf8");

    expect(css).toContain("--primary: #004F7B;");
    expect(navbar).toContain("bg-[#004F7B]");
    expect(selector).toContain("border-[#255044]");
    expect(selector).toContain("bg-[#004F7B]");
  });
});
