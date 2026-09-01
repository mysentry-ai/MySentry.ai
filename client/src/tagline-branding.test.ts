import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

describe("approved project tagline", () => {
  const projectRoot = resolve(import.meta.dirname, "../..");
  const readSource = (path: string) =>
    readFileSync(resolve(projectRoot, path), "utf8");

  it("uses the approved tagline in browser and mobile application metadata", () => {
    const document = readSource("client/index.html");

    expect(document).toContain(
      '<meta name="application-name" content="Live Safe. Stay Healthy." />'
    );
    expect(document).toContain(
      '<meta name="apple-mobile-web-app-title" content="Live Safe. Stay Healthy." />'
    );
    expect(document).not.toMatch(/Your Vital Companion/i);
  });

  it("keeps the approved tagline visible in both mobile navigation surfaces", () => {
    const navbar = readSource("client/src/components/Navbar.tsx");
    const occurrences = navbar.match(/Live Safe\. Stay Healthy\./g) ?? [];

    expect(occurrences).toHaveLength(2);
    expect(navbar).not.toMatch(
      /hidden\s+lg:block[^>]*>\s*Live Safe\. Stay Healthy\./s
    );
  });

  it("removes retired branding from customer-facing website source", () => {
    const publicSources = [
      "client/index.html",
      "client/src/components/Navbar.tsx",
      "client/src/components/Footer.tsx",
      "client/src/pages/Privacy.tsx",
      "shared/seo/route-meta.ts",
    ].map(readSource).join("\n");

    expect(publicSources).not.toMatch(/Your Vital Companion/i);
    expect(publicSources).not.toMatch(/Mysentry Vital Companion/i);
    expect(publicSources).toContain("Live Safe. Stay Healthy.");
  });
});
