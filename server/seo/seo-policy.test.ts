import { describe, expect, it } from "vitest";
import { CANONICAL_REDIRECTS } from "../../shared/seo/redirects";
import { HELD_BLOG_SLUGS } from "../../shared/seo/content-governance";
import { ROUTE_META } from "../../shared/seo/route-meta";
import { renderSeoHtml } from "./render-seo-html";
import { resolveMeta } from "./resolve-meta";

const template = `<!doctype html>
<html lang="en">
  <head>
    <title>Default</title>
    <meta name="description" content="Default" />
    <meta name="robots" content="index,follow" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Default" />
    <meta property="og:description" content="Default" />
    <meta property="og:image" content="https://mysentry.ai/favicon.svg" />
    <meta property="og:url" content="https://mysentry.ai" />
    <meta name="twitter:title" content="Default" />
    <meta name="twitter:description" content="Default" />
    <meta name="twitter:image" content="https://mysentry.ai/favicon.svg" />
    <link rel="canonical" href="https://mysentry.ai" />
  </head>
  <body><div id="root"></div></body>
</html>`;

describe("route-aware SEO rendering", () => {
  it("returns route-specific metadata and meaningful initial HTML for an indexable page", async () => {
    const meta = await resolveMeta("/pricing", "https://mysentry.ai");
    const html = renderSeoHtml(template, meta);

    expect(meta.found).toBe(true);
    expect(meta.canonicalPath).toBe("/pricing");
    expect(meta.robots).toBe("index,follow");
    expect(html).toContain(`<title>${meta.title}</title>`);
    expect(html).toContain('rel="canonical" href="https://mysentry.ai/pricing"');
    expect(html).toContain("<h1>");
    expect(html).toContain('type="application/ld+json"');
    expect(html).not.toContain("SSR_TITLE");
  });

  it("suppresses structured data on public noindex review routes", async () => {
    for (const route of [
      "/compare/noonlight-vs-mysentry",
      "/compare/fitness-wearables-vs-mysentry",
      "/case-studies/home-healthcare",
      "/features/secure-route",
      "/integrations/oura-ring",
    ]) {
      const meta = await resolveMeta(route, "https://mysentry.ai");
      const html = renderSeoHtml(template, meta);
      expect(meta.found, route).toBe(true);
      expect(meta.robots, route).toBe("noindex,follow");
      expect(html, route).not.toContain('type="application/ld+json"');
    }
  });

  it("returns a true not-found metadata state without public schema", async () => {
    const meta = await resolveMeta("/this-route-does-not-exist", "https://mysentry.ai");
    const html = renderSeoHtml(template, meta);

    expect(meta.found).toBe(false);
    expect(meta.routeType).toBe("not-found");
    expect(meta.robots).toBe("noindex,nofollow");
    expect(html).toContain("Page not found");
    expect(html).not.toContain('type="application/ld+json"');
  });
});

describe("canonical redirect governance", () => {
  it("contains no self redirects, chains, or missing canonical targets", () => {
    const sources = new Set(Object.keys(CANONICAL_REDIRECTS));

    for (const [source, target] of Object.entries(CANONICAL_REDIRECTS)) {
      const targetPath = target.split("#", 1)[0];
      expect(targetPath, source).not.toBe(source);
      expect(sources.has(targetPath), `${source} must not redirect through ${targetPath}`).toBe(false);
      expect(ROUTE_META[targetPath], `${source} target ${targetPath} needs metadata`).toBeDefined();
    }
  });

  it("keeps the approved editorial hold explicit and stable", () => {
    expect(HELD_BLOG_SLUGS.size).toBe(28);
    for (const slug of HELD_BLOG_SLUGS) {
      expect(slug).toBe(slug.toLowerCase());
      expect(slug).toMatch(/^[a-z0-9-]+$/);
    }
  });
});
