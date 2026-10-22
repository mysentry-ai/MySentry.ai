import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = path.resolve(import.meta.dirname, "../..");
const read = (...parts: string[]) =>
  fs.readFileSync(path.join(root, ...parts), "utf8");

const homepage = read(
  "client",
  "src",
  "components",
  "homepage",
  "HomepageExperience.tsx"
);
const walkthrough = read(
  "client",
  "src",
  "components",
  "homepage",
  "HomepageWalkthrough.tsx"
);
const assets = read(
  "client",
  "src",
  "components",
  "homepage",
  "homepageContent.ts"
);
const homeRoute = read("client", "src", "pages", "Home.tsx");
const styles = read("client", "src", "components", "homepage", "homepage.css");
const routeMeta = read("shared", "seo", "route-meta.ts");

describe("staged homepage implementation", () => {
  it("keeps the approved hero, at-a-glance explainer, video and four-step sequence", () => {
    expect(homepage).toContain(
      '<h1 id="homepage-title">Never Face an Emergency Alone.</h1>'
    );
    expect(homepage).toContain("From a safety alert to people who can help.");
    expect(homepage).toContain("See MySentry in Action");
    expect(homepage).toContain("Protection in 4 Simple Steps");
    expect(homepage.indexOf("See MySentry in Action")).toBeGreaterThan(
      homepage.indexOf("From a safety alert to people who can help.")
    );
    expect(homepage).toContain("youtube-nocookie.com/embed/7eT5sQQgsm8");
    expect(homepage).toContain("cc_load_policy=1");
    expect(homepage).not.toContain("autoplay=1");
  });

  it("limits the requested revision to the homepage banner and hero hierarchy", () => {
    const normalized = homepage.replace(/\s+/g, " ");
    expect(normalized).toContain(
      "Being independent matters. But so does knowing someone can be alerted when you need help."
    );
    expect(normalized).toContain(
      "MySentry connects your safety alerts to people you trust and 24/7 professional monitoring that can help coordinate an emergency response."
    );
    expect(normalized).toContain("Start Your 7-Day Free Trial");
    expect(normalized).toContain(
      "No Credit Card Required for Your 7-Day Free Trial."
    );
    expect(homepage).toContain('href="/pricing#pricing-plans"');
    expect(homeRoute.indexOf("<HomepageRingBanner />")).toBeGreaterThan(
      homeRoute.indexOf("<Navbar />")
    );
    expect(homeRoute.indexOf("<HomepageRingBanner />")).toBeLessThan(
      homeRoute.indexOf("<HomepageExperience />")
    );
    const banner = read(
      "client",
      "src",
      "components",
      "homepage",
      "HomepageRingBanner.tsx"
    );
    expect(banner).toContain("Explore the Integration");
    expect(banner).toContain('href="/integrations/ring"');
    expect(styles).toContain("hp-ring-marquee 40s linear infinite");
    expect(styles).toContain("animation-play-state: paused");
    expect(styles).toContain("--hp-nav-height");
  });

  it("uses the preserved live navigation rather than a homepage-specific replacement", () => {
    expect(homeRoute).toContain('import Navbar from "@/components/Navbar"');
    expect(homeRoute).toContain("<Navbar />");
    expect(homepage).not.toContain("hp-nav");
  });

  it("keeps real product artwork prominent and all workflow mockups visible", () => {
    expect(homepage).toContain("src={HOMEPAGE_ASSETS.allInOne}");
    expect(homepage).toContain('fetchPriority="high"');
    expect(homepage).not.toContain('loading="lazy"');
    expect(walkthrough).toContain('className="hp-product-gallery"');
    expect(walkthrough).toContain("src={scenarios[key].image}");
    expect(walkthrough).toContain('event.key === "ArrowRight"');
    expect(homepage).toContain("hp-video-poster");
    expect(homepage).toContain('reducedMotion="user"');
  });

  it("uses the official badge destinations and distinct owner-supplied mockups", () => {
    for (const asset of [
      "mysentry-home-app-store-badge_cac1b154.png",
      "mysentry-home-google-play-badge_e2d35fb4.png",
      "mysentry-home-ring-badge_1733c8e3.png",
      "mysentry-home-senior-showcase_591d5c90.png",
      "mysentry-home-emergency-contacts_ab3b570d.jpg",
      "mysentry-home-fall-detection_e15f9a76.png",
      "mysentry-home-health-monitoring_215b609c.png",
      "mysentry-home-panic-alarm-flow_56ac80ef.png",
      "mysentry-home-ring-screen_8e8d54ab.png",
      "mysentry-home-watch-panic_0409e3bc.png",
      "mysentry-home-all-in-one_f2b34eac.png",
    ]) {
      expect(assets).toContain(asset);
    }
    expect(assets).toContain("id6740518837");
    expect(assets).toContain("com.eagleeye.mysentry");
    expect(assets).toContain("https://ring.com/appstore/mysentry");
    expect(assets).toContain("HOMEPAGE_MOCKUP_PLACEMENTS");

    const uniquePlacementKeys = [
      "hero:",
      "atAGlance:",
      "walkthroughFall:",
      "walkthroughPanic:",
      "walkthroughHealth:",
      "ring:",
      "watch:",
      "final:",
    ];
    for (const placement of uniquePlacementKeys)
      expect(assets).toContain(placement);
  });

  it("keeps claim boundaries, reduced motion support and the owner-approved color balance", () => {
    const normalizedHomepage = homepage.replace(/\s+/g, " ");
    expect(normalizedHomepage).toContain(
      "Requires compatible Ring devices, access permissions and active applicable services."
    );
    expect(walkthrough.replace(/\s+/g, " ")).toContain("not a medical device");
    expect(`${homepage}\n${walkthrough}`).not.toMatch(
      /guaranteed|automatic dispatch|under 60/i
    );
    expect(styles).toContain("@media (prefers-reduced-motion: no-preference)");
    expect(styles).toContain("--hp-navy: #004f7b");
    expect(styles).toContain("--hp-mint: #6ad990");
    expect(styles).toContain("--hp-warm: #c58438");
  });

  it("applies the requested visual edits without duplicate inline styles", () => {
    const hero = homepage.slice(
      homepage.indexOf('<section className="hp-hero"'),
      homepage.indexOf('id="how-it-works"')
    );
    expect(hero).not.toContain('className="hp-eligibility"');
    expect(hero).not.toContain('className="hp-connector');
    expect(hero).not.toContain("style=");
    expect(styles).toContain("font-size: 58px !important");
    expect(styles).toContain(
      'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif !important'
    );
    expect(styles).toContain("margin-top: -15px");
    expect(styles).toContain("width: 135px");
    expect(homepage).toContain('className="hp-google-play-badge"');
  });

  it("preserves root metadata and the public no-em-dash policy", () => {
    expect(routeMeta).toContain(
      'title: "Personal Safety App for Families & Seniors"'
    );
    expect(routeMeta).toContain(
      '"Never face an emergency alone. MySentry connects safety alerts to trusted family members and eligible 24/7 professional monitoring. Explore plans and get the app."'
    );
    const emDash = String.fromCharCode(0x2014);
    expect(`${homepage}\n${walkthrough}\n${assets}\n${styles}`).not.toContain(
      emDash
    );
  });
});
