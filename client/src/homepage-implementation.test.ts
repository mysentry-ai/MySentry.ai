import { describe, it, expect, vi, afterEach } from "vitest";
import fs from "node:fs";
import path from "node:path";
import {
  HOME_ASSETS,
  HOME_AUDIENCES,
  HOME_DESCRIPTION,
  HOME_DESTINATIONS,
  HOME_FAQS,
  HOME_STAGES,
  HOME_TITLE,
  HOME_WORKFLOWS,
} from "./components/homepage/homepageContent";
import {
  homeLinkEvent,
  trackHomepageEvent,
} from "./components/homepage/homepageAnalytics";
import { ROUTE_META } from "../../shared/seo/route-meta";

const root = path.resolve(import.meta.dirname, "../..");
const read = (file: string) => fs.readFileSync(path.join(root, file), "utf8");
const experience = read(
  "client/src/components/homepage/HomepageExperience.tsx"
);
const css = read("client/src/components/homepage/homepage.css");
const walkthrough = read(
  "client/src/components/homepage/HomepageWalkthrough.tsx"
);

describe("homepage playbook implementation", () => {
  it("keeps the exact positioning, metadata and one H1", () => {
    expect(ROUTE_META["/"].title + " | MySentry").toBe(HOME_TITLE);
    expect(ROUTE_META["/"].description).toBe(HOME_DESCRIPTION);
    expect(experience.match(/<h1>/g)).toHaveLength(1);
    expect(experience).toContain("Never face an emergency alone.");
    expect(experience).toContain(
      "MySentry connects your safety alerts to the people you trust"
    );
    expect(experience).toContain("Stay independent. Stay connected.");
  });
  it("preserves the separate three-stage explainer and four selectable workflows", () => {
    expect(HOME_STAGES).toHaveLength(3);
    expect(Object.keys(HOME_WORKFLOWS)).toEqual([
      "fall",
      "crash",
      "panic",
      "health",
    ]);
    for (const workflow of Object.values(HOME_WORKFLOWS))
      expect(workflow.steps).toHaveLength(4);
    expect(experience).toContain("<HowItWorksDemo homepageMode");
    expect(walkthrough).toContain('role="tablist"');
    expect(walkthrough).toContain('role="tabpanel"');
    expect(walkthrough).toContain('event.key === "ArrowRight"');
    expect(walkthrough).toContain('event.key === "End"');
    expect(walkthrough).toContain("setAnimate(false)");
    expect(walkthrough).toContain("aria-pressed={selectedStep === index}");
  });
  it("preserves legacy demo default and all three concurrently visible audiences", () => {
    expect(read("client/src/components/HowItWorksDemo.tsx")).toContain(
      "homepageMode = false"
    );
    expect(read("client/src/components/HowItWorksDemo.tsx")).toContain(
      "<LegacyHowItWorksDemo />"
    );
    expect(HOME_AUDIENCES.map(a => a.label)).toEqual([
      "Families",
      "Seniors",
      "Women",
    ]);
    expect(experience).not.toContain("ExpandableCarousel");
    expect(experience).not.toContain("RingAnnouncementSection");
    expect(experience).not.toContain("RingTopBanner");
  });
  it("has eleven ordered page sections and three initially collapsed FAQs", () => {
    const sections = experience.match(/data-home-section="\d{2}"/g)?.sort();
    expect(sections).toEqual(
      Array.from(
        { length: 11 },
        (_, i) => `data-home-section="${String(i).padStart(2, "0")}"`
      )
    );
    expect(HOME_FAQS).toHaveLength(3);
    expect(experience).not.toContain("<details open");
    expect(experience).toContain('aria-controls="homepage-mobile-menu"');
    expect(experience).toContain('event.key === "Escape"');
  });
  it("keeps store artwork separate from verified destinations and ratios intact", () => {
    expect(HOME_DESTINATIONS.apple).toBe(
      "https://apps.apple.com/us/app/mysentry-safety-health/id6740518837"
    );
    expect(HOME_DESTINATIONS.google).toBe(
      "https://play.google.com/store/apps/details?id=com.eagleeye.mysentry"
    );
    expect(HOME_DESTINATIONS.ring).toBe("https://ring.com/appstore/mysentry");
    for (const [name, asset] of Object.entries(HOME_ASSETS))
      expect(asset, name).toMatch(/^\/(manus-storage|images)\//);
    expect(css).toContain("height: 48px");
    expect(css).toContain("height: 44px");
    expect(css).toContain("width: auto");
    expect(css).toContain("object-fit: contain");
  });
  it("keeps feature conditions, roadmap distinction and no guarantee additions", () => {
    const all =
      experience +
      walkthrough +
      read("client/src/components/homepage/homepageContent.ts");
    expect(all).toContain("Rapid Response Monitoring");
    expect(all).toContain("Coming soon");
    expect(all).toContain("Upcoming integrations are not yet available");
    expect(all).toContain("MySentry is not a medical device");
    expect(all).not.toMatch(
      /Secure Route|Save 67%|under 60 seconds|guaranteed arrival|auto-dispatch/i
    );
    expect(all).not.toContain(String.fromCharCode(0x2014));
    expect(css).not.toContain("#386758");
    expect(css).toContain("prefers-reduced-motion: reduce");
  });
});

describe("homepage canonical analytics subset", () => {
  afterEach(() => vi.unstubAllGlobals());
  it("does not emit events without explicit approved consent or after DNT", () => {
    const track = vi.fn();
    vi.stubGlobal("window", { navigator: {}, umami: { track } });
    expect(trackHomepageEvent("screen_view")).toBe(false);
    vi.stubGlobal("window", {
      navigator: { doNotTrack: "1" },
      __mysentryAnalyticsConsent: true,
      umami: { track },
    });
    expect(trackHomepageEvent("screen_view")).toBe(false);
    expect(track).not.toHaveBeenCalled();
  });
  it("emits exactly one appropriate event and preserves approved placements", () => {
    const track = vi.fn();
    vi.stubGlobal("window", {
      navigator: {},
      __mysentryAnalyticsConsent: true,
      umami: { track },
    });
    homeLinkEvent(
      "app_store_link_clicked",
      "hero_ios",
      "App Store",
      HOME_DESTINATIONS.apple,
      "hero"
    );
    expect(track).toHaveBeenCalledTimes(1);
    expect(track).toHaveBeenLastCalledWith("app_store_link_clicked", {
      screen_name: "home",
      ux_version: "homepage_visual_v1",
      page_name: "home",
      source: "hero",
    });
    track.mockClear();
    homeLinkEvent(
      "ring_cta_clicked",
      "ring_details",
      "See MySentry + Ring",
      HOME_DESTINATIONS.ringDetails,
      "ring"
    );
    expect(track).toHaveBeenCalledTimes(1);
    expect(track.mock.calls[0][0]).toBe("ring_cta_clicked");
    expect(track.mock.calls[0][1].cta_id).toBe("ring_details");
  });
});
