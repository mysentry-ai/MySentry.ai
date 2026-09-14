import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = path.resolve(import.meta.dirname, "../..");
const read = (...parts: string[]) =>
  fs.readFileSync(path.join(root, ...parts), "utf8");

const featurePages = [
  "PanicButtonApp.tsx",
  "FallDetectionApp.tsx",
  "CrashDetection.tsx",
  "ProfessionalMonitoring.tsx",
  "EmergencyContacts.tsx",
  "LiveVideoResponse.tsx",
  "HealthMonitoring.tsx",
  "SafetyCheckInApp.tsx",
  "FamilyConnectivity.tsx",
  "AutomatedCall.tsx",
];

describe("feature-page header and visual refresh", () => {
  const template = read("client", "src", "components", "SEOPageTemplate.tsx");
  const howItWorks = read("client", "src", "pages", "HowItWorks.tsx");

  it("suppresses the generic Feature label and reserves space below the site header", () => {
    expect(template).toContain(
      'const showHeroLabel = label.trim().toLowerCase() !== "feature";'
    );
    expect(template).toContain("{showHeroLabel && (");
    expect(template).toContain("pt-32 sm:pt-36");
    expect(template).toContain("lg:pt-36 xl:pt-40");
  });

  it("gives every active detailed feature page a visual", () => {
    for (const page of featurePages) {
      const source = read("client", "src", "pages", "features", page);
      expect(source, page).toContain("heroImage=");
    }
  });

  it("uses approved MySentry app screens for the supported feature workflows", () => {
    const allFeatureSource = featurePages
      .map(page => read("client", "src", "pages", "features", page))
      .join("\n");
    const expectedScreenPaths = [
      "/manus-storage/panic-user-iphone_e6412ed5.png",
      "/manus-storage/watch-fall-detection_d7e1fea3.png",
      "/manus-storage/contact-1-iphone_86f27364.png",
      "/manus-storage/family-connectivity_e54f4d24.png",
      "/manus-storage/meetsafe-iphone_64344647.png",
      "/manus-storage/panic-contact-iphone_209727c2.png",
      "/manus-storage/health-vitals-phone-cropped_3c4f6e97.png",
    ];

    for (const screenPath of expectedScreenPaths) {
      expect(`${allFeatureSource}\n${howItWorks}`, screenPath).toContain(
        screenPath
      );
    }

    expect(template).toContain('heroImagePresentation = "editorial"');
    expect(template).toContain('heroImagePresentation === "app-screen"');
  });

  it("removes the outdated unverified How It Works visuals and claims", () => {
    expect(howItWorks).not.toContain('imageSrc="/images/how-it-works-hero.png"');
    expect(howItWorks).toContain(
      'phoneMockupSrc="/manus-storage/home-iphone_106132ba.png"'
    );
    expect(howItWorks).toContain("showBackgroundImage={false}");
    expect(howItWorks).toContain("showPhoneMockupOnMobile");
    expect(howItWorks).not.toContain('src="/images/frame-1.png"');
    expect(howItWorks).not.toContain('src="/images/frame-6.png"');
    expect(howItWorks).not.toContain('src="/images/frame-8.png"');
    expect(howItWorks).not.toContain('src="/images/iphone-168.png"');
    expect(howItWorks).not.toContain('src="/images/WebMysentry(11).svg"');
    expect(howItWorks).toContain('src="/images/challenge-senior-crash-800w.jpg"');
    expect(howItWorks).not.toContain(
      "We don't just detect falls. We predict them."
    );
    expect(howItWorks).not.toContain(
      "We send your exact GPS location to first responders"
    );
    expect(howItWorks).toContain("MySentry does not claim to predict falls");
    expect(howItWorks).toMatch(
      /A supported phone may identify a crash-like event and begin a\s+Safety Check\./
    );
  });

  it("keeps public feature refresh copy free of em dashes", () => {
    const prohibitedDash = String.fromCharCode(0x2014);
    expect(template).not.toContain(prohibitedDash);
    expect(howItWorks).not.toContain(prohibitedDash);
    for (const page of featurePages) {
      expect(
        read("client", "src", "pages", "features", page),
        page
      ).not.toContain(prohibitedDash);
    }
  });
});
