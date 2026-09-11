import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { isNoindexPath } from "@shared/seo/indexability";
import { CANONICAL_REDIRECTS } from "@shared/seo/redirects";
import { ROUTE_META } from "@shared/seo/route-meta";

const root = path.resolve(import.meta.dirname, "../..");
const read = (...parts: string[]) => fs.readFileSync(path.join(root, ...parts), "utf8");
const readVisitorSource = (directory: string): string => fs.readdirSync(directory, { withFileTypes: true })
  .flatMap(entry => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return [readVisitorSource(fullPath)];
    if (!entry.name.match(/\.(?:ts|tsx)$/) || entry.name.includes(".test.")) return [];
    return [fs.readFileSync(fullPath, "utf8")];
  })
  .join("\n");

describe("wearable comparison and visibility release", () => {
  const app = read("client", "src", "App.tsx");
  const wearablePage = read("client", "src", "pages", "compare", "WearableSafetyComparison.tsx");
  const reviewPage = read("client", "src", "components", "ComparisonReviewPage.tsx");
  const productAnswer = read("client", "src", "components", "ProductAnswerBlock.tsx");
  const audiencePage = read("client", "src", "components", "AudienceSafetyPage.tsx");
  const industryPage = read("client", "src", "components", "IndustrySafetyPage.tsx");
  const compareHub = read("client", "src", "pages", "CompareHub.tsx");
  const appleIntegration = read("client", "src", "pages", "integrations", "AppleWatchIntegration.tsx");
  const samsungIntegration = read("client", "src", "pages", "integrations", "SamsungGalaxyWatchIntegration.tsx");
  const comparisonSection = read("client", "src", "components", "ComparisonSection.tsx");
  const faqs = read("client", "src", "components", "FAQs.tsx");
  const howItWorks = read("client", "src", "pages", "HowItWorks.tsx");
  const seniorAgingInPlace = read("client", "src", "pages", "safety-for", "SeniorsAgingInPlace.tsx");
  const llms = read("client", "public", "llms.txt");
  const allVisitorSource = readVisitorSource(path.join(root, "client", "src"));
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

  it("keeps the source-linked comparisons factual, additive, and free of blanket disclaimer copy", () => {
    expect(wearablePage).toContain("https://support.apple.com/en-us/108896");
    expect(wearablePage).toContain("https://support.apple.com/en-us/108374");
    expect(wearablePage).toContain("https://www.samsung.com/us/support/answer/ANS10003423/");
    expect(wearablePage).toContain("https://www.samsung.com/us/support/answer/ANS10002904/");
    expect(wearablePage).toContain("cannot detect all falls");
    expect(wearablePage).toContain("high-impact activities can sometimes register as a fall");
    expect(wearablePage).toContain("A configured voice command can trigger the MySentry Panic Alarm");
    expect(wearablePage).toContain("MySentry algorithms analyze supported wellness readings against a personalized baseline");
    expect(wearablePage).toContain("live location, phone battery level, and permitted phone audio or video");
    expect(wearablePage).toContain("family can include members and responders using iOS or Android");
    expect(wearablePage).toContain("24/7 professional monitoring team");
    expect(wearablePage).toContain("contact emergency services, including 911, when appropriate");
    expect(wearablePage).not.toContain("MySentry is supplemental personal safety and wellness support");
    expect(wearablePage).not.toContain("Detection, delivery, contact, escalation, response, dispatch, prevention, and outcomes are not guaranteed.");
    expect(wearablePage).not.toMatch(/guaranteed (?:detection|delivery|contact|escalation|response|dispatch|prevention|outcome)/i);
  });

  it("uses capability-led MySentry positioning across revised public marketing components", () => {
    const revisedSources = [reviewPage, productAnswer, audiencePage, industryPage, compareHub, appleIntegration, samsungIntegration];
    for (const source of revisedSources) {
      expect(source).not.toContain("MySentry is supplemental personal safety and wellness support");
    }
    expect(productAnswer).toContain("Configured family members and responders can use supported iOS or Android phones");
    expect(audiencePage).toContain("configured voice and device triggers");
    expect(industryPage).toContain("24/7 professional monitoring");
    expect(compareHub).toContain("permitted incident context");
    expect(appleIntegration).toContain("A configured voice command can trigger the MySentry Panic Alarm");
    expect(samsungIntegration).toContain("A configured voice command can trigger the MySentry Panic Alarm");
    expect(appleIntegration).toContain("After verification, monitoring can contact emergency services, including 911, when appropriate");
    expect(samsungIntegration).toContain("After verification, monitoring can contact emergency services, including 911, when appropriate");
  });

  it("protects the connected watch story across the homepage, FAQs, structured data, senior guidance, and public summary", () => {
    expect(comparisonSection).toContain("Keep the watch. Add the response network.");
    expect(comparisonSection).toContain("A configured MySentry voice command gives you another way to start a Panic Alarm");
    expect(comparisonSection).toContain("One family across iOS and Android");
    expect(comparisonSection).toContain("after verification, contact emergency services, including 911, when appropriate");
    expect(comparisonSection).toContain("/compare/apple-watch-fall-detection-vs-mysentry");
    expect(comparisonSection).toContain("/compare/samsung-galaxy-watch-vs-mysentry");
    expect(faqs).toContain("configured voice panic");
    expect(faqs).toContain("No watch detects every fall");
    expect(howItWorks).toContain("mixed-device family alerts");
    expect(seniorAgingInPlace).toContain("including 911, when appropriate");
    expect(llms).toContain("a configured voice command");
    expect(llms).toContain("supported iOS or Android phones");
  });

  it("removes the retired blanket definition and legacy wearable claims from all visitor-facing source", () => {
    expect(allVisitorSource).not.toMatch(/MySentry is (?:a )?supplemental/i);
    expect(allVisitorSource).not.toContain("Detection, delivery, contact, escalation, response, dispatch, prevention, and outcomes are not guaranteed.");
    expect(allVisitorSource).not.toContain("dispatch emergency services immediately");
    expect(allVisitorSource).not.toContain("Automatically streams live video");
    expect(allVisitorSource).not.toContain("medical-grade sensors");
    expect(allVisitorSource).not.toContain("Apple Watch Series 6 and newer");
    expect(allVisitorSource).not.toContain("Samsung Galaxy Watch 6 and newer");
    expect(llms).not.toMatch(/MySentry is (?:a )?supplemental/i);
  });

  it("keeps all public comparison copy free of em dashes", () => {
    const prohibitedDash = String.fromCharCode(0x2014);
    expect(wearablePage).not.toContain(prohibitedDash);
    expect(reviewPage).not.toContain(prohibitedDash);
    expect(appleIntegration).not.toContain(prohibitedDash);
    expect(samsungIntegration).not.toContain(prohibitedDash);
    expect(comparisonSection).not.toContain(prohibitedDash);
    expect(faqs).not.toContain(prohibitedDash);
    expect(howItWorks).not.toContain(prohibitedDash);
    expect(seniorAgingInPlace).not.toContain(prohibitedDash);
  });
});
