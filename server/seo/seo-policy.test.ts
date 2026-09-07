import { describe, expect, it } from "vitest";
import {
  CANONICAL_REDIRECTS,
  resolveMalformedAbsolutePath,
} from "../../shared/seo/redirects";
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
    expect(html).toContain(`<title data-rh="true">${meta.title}</title>`);
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

  it("keeps the Oura route explicitly unavailable, noindex, and schema-free", async () => {
    const meta = await resolveMeta("/integrations/oura-ring", "https://mysentry.ai");
    const html = renderSeoHtml(template, meta);

    expect(meta.title).toContain("Coming Soon");
    expect(meta.description).toContain("not currently available");
    expect(meta.canonicalPath).toBe("/integrations/oura-ring");
    expect(meta.robots).toBe("noindex,follow");
    expect(html).not.toContain('type="application/ld+json"');
  });

  it("serves unique indexable metadata for every nurse specialty route", async () => {
    const routes = [
      "/nurses/home-health",
      "/nurses/travel-nurses",
      "/nurses/er-trauma",
      "/nurses/night-shift",
    ];
    const titles = new Set<string>();

    for (const route of routes) {
      const meta = await resolveMeta(route, "https://mysentry.ai");
      expect(meta.found, route).toBe(true);
      expect(meta.canonicalPath, route).toBe(route);
      expect(meta.robots, route).toBe("index,follow");
      expect(meta.title, route).toMatch(/Nurse Safety App/);
      expect(meta.description.length, route).toBeGreaterThan(80);
      expect(CANONICAL_REDIRECTS[route], route).toBeUndefined();
      titles.add(meta.title);
    }

    expect(titles.size).toBe(routes.length);
  });

  it("consolidates senior commercial intent into one canonical conversion route", async () => {
    const canonicalRoute = "/use-cases/medical-alert-app-for-seniors";
    const meta = await resolveMeta(canonicalRoute, "https://mysentry.ai");

    expect(meta.found).toBe(true);
    expect(meta.robots).toBe("index,follow");
    expect(meta.title).toContain("Family Caregivers");
    expect(meta.description).toContain("individual and family paths");
    expect(CANONICAL_REDIRECTS["/medical-alert-system-for-seniors"]).toBe(canonicalRoute);
    expect(CANONICAL_REDIRECTS["/who-we-protect/seniors"]).toBe(canonicalRoute);
    expect(CANONICAL_REDIRECTS["/safety-for/seniors-aging-in-place"]).toBe(canonicalRoute);
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

  it("serves unique indexable metadata and structured initial HTML for every growth route", async () => {
    const routes = [
      "/safety-for/people-living-alone",
      "/guides/aging-in-place-checklist",
      "/guides/family-safety-without-constant-tracking",
      "/guides/night-shift-nurse-safety-checklist",
      "/use-cases/personal-safety-app-for-renters",
      "/guides/wearable-fall-detection-limitations",
      "/solutions/utility-workers",
    ];
    const titles = new Set<string>();
    const descriptions = new Set<string>();

    for (const route of routes) {
      const meta = await resolveMeta(route, "https://mysentry.ai");
      const html = renderSeoHtml(template, meta);

      expect(meta.found, route).toBe(true);
      expect(meta.canonicalPath, route).toBe(route);
      expect(meta.robots, route).toBe("index,follow");
      expect(meta.title.length, route).toBeGreaterThan(30);
      expect(meta.description.length, route).toBeGreaterThan(100);
      expect(CANONICAL_REDIRECTS[route], route).toBeUndefined();
      expect(html, route).toContain(`rel="canonical" href="https://mysentry.ai${route}"`);
      expect(html, route).toContain("<h1>");
      expect(html, route).toContain('type="application/ld+json"');
      expect(html, route).not.toContain("SSR_TITLE");
      titles.add(meta.title);
      descriptions.add(meta.description);
    }

    expect(titles.size).toBe(routes.length);
    expect(descriptions.size).toBe(routes.length);
  });

  it("serves canonical indexable metadata and structured initial HTML for account deletion", async () => {
    const route = "/account-deletion";
    const meta = await resolveMeta(route, "https://mysentry.ai");
    const html = renderSeoHtml(template, meta);

    expect(meta.found).toBe(true);
    expect(meta.canonicalPath).toBe(route);
    expect(meta.robots).toBe("index,follow");
    expect(meta.title).toBe("Delete Your MySentry Account | MySentry");
    expect(meta.description).toContain("request deletion of a MySentry account");
    expect(CANONICAL_REDIRECTS[route]).toBeUndefined();
    expect(html).toContain('rel="canonical" href="https://mysentry.ai/account-deletion"');
    expect(html).toContain("<h1>");
    expect(html).toContain('type="application/ld+json"');
    expect(html).not.toContain("SSR_TITLE");
  });
});

describe("canonical redirect governance", () => {
  it("recovers only the exact malformed account-deletion URL and preserves its query", () => {
    expect(
      resolveMalformedAbsolutePath(
        "/https://mysentry.ai/account-deletion",
        "/https://mysentry.ai/account-deletion?from_webdev=1",
      ),
    ).toBe("/account-deletion?from_webdev=1");
    expect(
      resolveMalformedAbsolutePath(
        "/https://mysentry.ai/account-deletion",
        "/https://mysentry.ai/account-deletion",
      ),
    ).toBe("/account-deletion");
    expect(
      resolveMalformedAbsolutePath(
        "/account-deletion",
        "/account-deletion?from_webdev=1",
      ),
    ).toBeNull();
    expect(
      resolveMalformedAbsolutePath(
        "/https://example.com/account-deletion",
        "/https://example.com/account-deletion?from_webdev=1",
      ),
    ).toBeNull();
    expect(CANONICAL_REDIRECTS["/account-deletion"]).toBeUndefined();
  });

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
    expect(HELD_BLOG_SLUGS.size).toBe(47);
    for (const slug of HELD_BLOG_SLUGS) {
      expect(slug).toBe(slug.toLowerCase());
      expect(slug).toMatch(/^[a-z0-9-]+$/);
    }
  });
});
