import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { isNoindexPath } from "@shared/seo/indexability";
import { CANONICAL_REDIRECTS } from "@shared/seo/redirects";
import { ROUTE_META } from "@shared/seo/route-meta";

const root = path.resolve(import.meta.dirname, "../..");
const read = (...parts: string[]) => fs.readFileSync(path.join(root, ...parts), "utf8");

describe("wearable comparison and visibility release", () => {
  const app = read("client", "src", "App.tsx");
  const wearablePage = read("client", "src", "pages", "compare", "WearableSafetyComparison.tsx");
  const reviewPage = read("client", "src", "components", "ComparisonReviewPage.tsx");
  const carousel = read("client", "src", "components", "ExpandableCarousel.tsx");
  const howItWorksDemo = read("client", "src", "components", "HowItWorksDemo.tsx");
  const globalStyles = read("client", "src", "index.css");
  const sitemap = read("server", "sitemaps.ts");

  it("uses the public light theme and explicitly colors review-card text", () => {
    expect(app).toContain('<ThemeProvider defaultTheme="light">');
    expect(reviewPage).toContain('className="leading-relaxed text-[#334155]"');
    expect(reviewPage).not.toContain('className="leading-relaxed">{question}</p>');
    expect(globalStyles).toContain("Components may still set a specific high-contrast text utility.");
    expect(globalStyles).not.toContain("font-bold tracking-tight text-foreground");
    expect(globalStyles).not.toContain("@apply text-foreground leading-relaxed");
    expect(globalStyles).toContain("html:not(.dark) .text-gray-400");
    expect(globalStyles).toContain("color: #475569 !important;");
    expect(globalStyles).toContain("color: #005f91 !important;");
    expect(globalStyles).toContain("html:not(.dark) .text-blue-600");
    expect(globalStyles).toContain("html:not(.dark) .text-green-600");
    expect(globalStyles).toContain("html:not(.dark) .bg-\\[\\#66d48f\\].text-white");
    expect(carousel).toContain('"bg-gradient-to-b from-black/25 via-black/15 to-black/90"');
    expect(carousel).toContain('className="text-[#f8fafc] font-medium line-clamp-2 drop-shadow-sm"');
    expect(howItWorksDemo).toContain('className="text-xs text-[#d6f4ff] mt-1"');
  });

  it("mounts indexable detailed Apple and Samsung watch comparisons with initial metadata", () => {
    const appleRoute = "/compare/apple-watch-fall-detection-vs-mysentry";
    const samsungRoute = "/compare/samsung-galaxy-watch-vs-mysentry";
    expect(app).toContain(`<Route path="${appleRoute}" component={AppleWatchFallDetectionVsMysentry} />`);
    expect(app).toContain(`<Route path="${samsungRoute}" component={SamsungGalaxyWatchVsMysentry} />`);
    expect(ROUTE_META[appleRoute]?.title).toBe("Apple Watch Fall Detection vs MySentry");
    expect(ROUTE_META[samsungRoute]?.title).toBe("Samsung Galaxy Watch vs MySentry");
    expect(isNoindexPath(appleRoute)).toBe(false);
    expect(isNoindexPath(samsungRoute)).toBe(false);
    expect(sitemap).toContain(`{ url: "${appleRoute}", priority: "0.8", changefreq: "monthly" }`);
    expect(sitemap).toContain(`{ url: "${samsungRoute}", priority: "0.8", changefreq: "monthly" }`);
  });

  it("redirects the duplicate held Apple Watch article to its reviewed canonical comparison", () => {
    const legacyArticleRoute = ["/blog", "fall-detection-apple-watch-vs-dedicated-safety-app"].join("/");
    expect(CANONICAL_REDIRECTS[legacyArticleRoute])
      .toBe("/compare/apple-watch-fall-detection-vs-mysentry");
    expect(app.indexOf(legacyArticleRoute))
      .toBeLessThan(app.indexOf('/blog/:slug'));
  });

  it("keeps the source-linked comparisons factual, supplemental, and free of guarantees", () => {
    expect(wearablePage).toContain("https://support.apple.com/en-us/108896");
    expect(wearablePage).toContain("https://support.apple.com/en-us/108374");
    expect(wearablePage).toContain("https://www.samsung.com/us/support/answer/ANS10003423/");
    expect(wearablePage).toContain("https://www.samsung.com/us/support/answer/ANS10002904/");
    expect(wearablePage).toContain("cannot detect all falls");
    expect(wearablePage).toContain("high-impact activity may be detected as a fall");
    expect(wearablePage).toContain("MySentry is a supplemental personal safety and wellness service");
    expect(wearablePage).toContain("Detection, delivery, contact, escalation, response, dispatch, prevention, and outcomes are not guaranteed.");
    expect(wearablePage).not.toMatch(/guaranteed (?:detection|delivery|contact|escalation|response|dispatch|prevention|outcome)/i);
  });

  it("keeps all public comparison copy free of em dashes", () => {
    const prohibitedDash = String.fromCharCode(0x2014);
    expect(wearablePage).not.toContain(prohibitedDash);
    expect(reviewPage).not.toContain(prohibitedDash);
  });
});
