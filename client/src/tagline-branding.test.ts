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

  it("keeps the tagline inside the shared logo rather than duplicating it", () => {
    const html = readSource("client/public/mysentry-homepage-v17.html");
    const header = html.match(
      /<header class="site-header"[\s\S]*?<\/header>/
    )![0];
    expect(header).toContain("MySentry | Live Safe. Stay Healthy");
    expect(header).not.toContain('class="brand-tagline"');
    expect(readSource("client/src/components/Navbar.tsx")).toContain(
      "PUBLIC_HEADER_HTML"
    );
  });
  it("removes retired branding from customer-facing website source", () => {
    const publicSources = [
      "client/index.html",
      "client/src/components/Navbar.tsx",
      "client/src/components/Footer.tsx",
      "client/public/mysentry-homepage-v17.html",
      "client/src/pages/Privacy.tsx",
      "shared/seo/route-meta.ts",
    ]
      .map(readSource)
      .join("\n");

    expect(publicSources).not.toMatch(/Your Vital Companion/i);
    expect(publicSources).not.toMatch(/Mysentry Vital Companion/i);
    expect(publicSources).toContain("Live Safe. Stay Healthy.");
  });
});
