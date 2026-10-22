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
const routeMeta = read("shared", "seo", "route-meta.ts");

describe("staged homepage implementation", () => {
  it("keeps the approved hero, high-level explainer, video, and four-step sequence", () => {
    expect(homepage).toContain("Never face an emergency alone.");
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

  it("uses the owner-supplied official badges, product visuals, and exact store destinations", () => {
    for (const asset of [
      "Download_on_the_App_Store_3520a0d7.png",
      "Get_it_on_Google_Play.png_3896d918.png",
      "mysentry-ring-appstore-badge_aeac9cb2.png",
      "mysentry-hero-home-screen_08e5b781.jpg",
      "mysentry-emergency-contacts_6cff739a.jpg",
      "mysentry-ring-home-screen_f2dc97ca.jpg",
      "mysentry-watch-panic-alarm_0ca29439.png",
    ]) {
      expect(assets).toContain(asset);
    }
    expect(assets).toContain("id6740518837");
    expect(assets).toContain("com.eagleeye.mysentry");
    expect(assets).toContain("https://ring.com/appstore/mysentry");
  });

  it("keeps the required connected-safety boundaries and no diagnostic claim", () => {
    const normalizedHomepage = homepage.replace(/\s+/g, " ");
    expect(normalizedHomepage).toContain(
      "Monitoring and features depend on plan, settings, compatible devices, connectivity and availability."
    );
    expect(normalizedHomepage).toContain(
      "Requires compatible Ring devices, access permissions and active applicable services."
    );
    expect(walkthrough).toContain("MySentry is not a medical device.");
    expect(`${homepage}\n${walkthrough}`).not.toMatch(
      /guaranteed|automatic dispatch|under 60/i
    );
  });

  it("preserves the requested root-page metadata and visitor-facing punctuation policy", () => {
    expect(routeMeta).toContain(
      'title: "Personal Safety App for Families & Seniors"'
    );
    expect(routeMeta).toContain(
      '"Never face an emergency alone. MySentry connects safety alerts to trusted family members and eligible 24/7 professional monitoring. Explore plans and get the app."'
    );
    const emDash = String.fromCharCode(0x2014);
    expect(`${homepage}\n${walkthrough}\n${assets}`).not.toContain(emDash);
  });
});
