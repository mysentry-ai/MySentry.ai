import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { buildCanonicalBreadcrumbs } from "../../shared/seo/breadcrumbs";
import { ROUTE_META } from "../../shared/seo/route-meta";
import { CANONICAL_REDIRECTS } from "../../shared/seo/redirects";
import { renderSeoHtml } from "./render-seo-html";
import { resolveMeta } from "./resolve-meta";

const template = '<html><head><title>MySentry</title><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></head><body><div id="root"></div></body></html>';
const schemas = (html: string) => Array.from(html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g), match => JSON.parse(match[1]));

describe("Green schema and initial accessibility correctness", () => {
  it("omits nonexistent grouping ancestors without adding or redirecting pages", () => {
    expect(buildCanonicalBreadcrumbs("/guides/aging-in-place-checklist").map(x => x.url)).toEqual(["https://mysentry.ai", "https://mysentry.ai/guides/aging-in-place-checklist"]);
    expect(buildCanonicalBreadcrumbs("/blog/example-article").map(x => x.url)).not.toContain("https://mysentry.ai/blog");
    expect(buildCanonicalBreadcrumbs("/who-we-protect/women").map(x => x.url)).not.toContain("https://mysentry.ai/who-we-protect");
  });
  it("preserves real industry, feature, nurse and comparison hubs", () => {
    for (const path of ["/industries/home-healthcare", "/features/fall-detection", "/nurses/home-health", "/compare/apple-watch-fall-detection-vs-mysentry"]) {
      expect(buildCanonicalBreadcrumbs(path)[1].url).toBe(`https://mysentry.ai/${path.split('/')[1]}`);
    }
  });
  it("only emits existing nonredirect intermediates and preserves canonical leaves", () => {
    for (const path of Object.keys(ROUTE_META)) {
      const items = buildCanonicalBreadcrumbs(path);
      expect(items.at(-1)?.url).toBe(path === "/" ? "https://mysentry.ai" : `https://mysentry.ai${path}`);
      for (const item of items.slice(1, -1)) {
        const intermediate = new URL(item.url).pathname;
        expect(Object.hasOwn(ROUTE_META, intermediate)).toBe(true);
        expect(Object.hasOwn(CANONICAL_REDIRECTS, intermediate)).toBe(false);
      }
    }
  });
  it("uses sequential complete JSON-LD breadcrumb items and linked Organization identity", async () => {
    const meta = await resolveMeta("/guides/aging-in-place-checklist", "https://mysentry.ai");
    const json = schemas(renderSeoHtml(template, meta));
    const trail = json.find(x => x["@type"] === "BreadcrumbList");
    expect(trail.itemListElement.map((x: { position: number }) => x.position)).toEqual([1, 2]);
    expect(trail.itemListElement.at(-1).item).toBe(`https://mysentry.ai${meta.canonicalPath}`);
    expect(json.find(x => x["@type"] === "Organization")["@id"]).toBe("https://mysentry.ai/#organization");
    const client = readFileSync(resolve(process.cwd(), "client/src/components/SEO.tsx"), "utf8");
    expect(client).toMatch(/"@type": "Organization",\s*"@id": "https:\/\/mysentry.ai\/#organization"/);
    expect(client).toContain("buildCanonicalBreadcrumbs(canonicalPath)");
  });
  it("permits existing client zoom level in the initial response without changing canonical/title", async () => {
    const meta = await resolveMeta("/pricing", "https://mysentry.ai");
    const html = renderSeoHtml(template, meta);
    expect((html.match(/name="viewport"/g) ?? []).length).toBe(1);
    expect(html).toContain('content="width=device-width, initial-scale=1, maximum-scale=5"');
    expect(html).toContain(`rel="canonical" href="https://mysentry.ai/pricing"`);
    expect(html).toContain(`<title data-rh="true">${meta.title}</title>`);
  });
  it("keeps Oura and utility pages noindex and schema-free and preserves the download redirect", async () => {
    for (const path of ["/integrations/oura-ring", "/download"]) {
      const meta = await resolveMeta(path, "https://mysentry.ai");
      const html = renderSeoHtml(template, meta);
      expect(meta.robots).toBe("noindex,follow");
      expect(schemas(html)).toEqual([]);
      if (path === "/download") expect(html).toContain('id="mysentry-smart-download"');
    }
  });
});
