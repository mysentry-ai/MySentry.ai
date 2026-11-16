import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const source = readFileSync(new URL("./components/HeroSection.tsx", import.meta.url), "utf8");
const css = readFileSync(new URL("./components/HeroSection.css", import.meta.url), "utf8");

describe("approved hero visual edit", () => {
  it("preserves all original hero content, assets, CTA and animation code", () => {
    const original = source.replace('import "./HeroSection.css";\n', "").replace("hero-phone-visual-edit relative", "relative");
    expect(createHash("sha256").update(original).digest("hex")).toBe("2ea3bedf8d63c09f4e7412f892fa8fdeae5a22215200c1e2c7172fe717ad2519");
  });

  it("retains the five exact user-selected desktop geometry values", () => {
    const desktop = css.split("@media (min-width: 1280px)")[1];
    for (const rule of ["width: 451px;", "height: 429px;", "margin-bottom: -111px;", "margin-left: 99px;", "padding-right: 232px;"]) {
      expect(desktop).toContain(rule);
    }
  });

  it("removes offsets and keeps the artwork's proportions on smaller screens", () => {
    const small = css.split("@media")[0];
    for (const rule of ["height: auto;", "max-width: 100%;", "margin-bottom: 0;", "margin-left: 0;", "padding-right: 0;", "object-fit: contain;"]) {
      expect(small).toContain(rule);
    }
    expect(source).not.toMatch(/style=\{\{height:\s*'429px'/);
    expect(source).toContain("w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px]");
    expect(source).toContain('loading="eager" fetchPriority="high"');
  });
});
