import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { EXACT_HOMEPAGE_ASSET_ALIASES } from "./_core/exactHomepageAssetAliases";

const root = process.cwd();
const templatePath = path.join(
  root,
  "client",
  "public",
  "mysentry-homepage-v17.html"
);
const assetsPath = path.join(root, "client", "public", "assets");

const templateSha256 = "c63066cdee770813c5c3b3bf89a5f350953d703e73a08a144129eef1ae52810d";

const suppliedAssets: Record<string, string> = {
  "app-store-badge.webp": "66670a0a89dea0c1a5cad003abe8e0d72ba5c102fa77982e670d4d56d9f82765",
  "audience-family.svg": "3974efeb5473df7db423348c4563436f108dcc7868a1135991c22274aee3db15",
  "audience-seniors.webp": "5cb4534a2b7982855795acd08e74b22ffbc19996ea0d093b0ab34824619a8d9a",
  "audience-three-women.svg": "b4e4d77f65ecfd8ae8bb4e7c9622f6d9aa3075484951d97445e2e05d2a141fec",
  "automated-call-mockup.svg": "94f6f9c7126b4c5df3b84d069b515b581df464f6703ec5d6cad6e57992f94a38",
  "banner-audience-photo-1.webp": "31856b26092ad14c1d7dfa1c08c83db8da2ea1c6a39b943a7d3ded21fcb19da1",
  "banner-audience-photo-2.webp": "312c61f79f47884637d5664f2007c87d519d75b997bf3a349572140d26c4976a",
  "banner-audience-photo-3.webp": "b126e8a32778a23b94299cf8c556639ed31dc9278310b4c60e3468faaece047a",
  "banner-audience-photo-4.webp": "fbd0652cf07399b9c924a79e8121581770895b7bea1194773724d9e46944b86e",
  "crash-detection-mockup.svg": "57a577cf745ea2b09cd63fc25519a9851dad23d2099b43558c6e8092b6e44f34",
  "fall-detected-notification.webp": "60805e6ab02afb8498eb4362014c9e32763c94b2a798ae813b8148b8f47d2c2a",
  "fall-detection-and-ring-live-video-mockup.svg": "250d15de7332bb25e8695f1e54bb9e2769878ad4f3258e44a382a932d0d7dffa",
  "google-play-badge.webp": "9332c83543d29c6fd21fdfc958cbdaa49142546cc6f74e36065689bf7326faac",
  "health-monitoring-mockup.svg": "9a94eca50532dbe187dc7611c1bab10d590c886b1f13fee5f29aaf512cceae0a",
  "hero-family.webp": "dc8564cc032b94f62f0a4d8fd38528d0a94a83628db8b6005485fa6828261f88",
  "hero-mysentry-app-composite.svg": "8cc66fe9c51c934e0ccfa9c594dd486cbaa395ea7f88af46279b407addf4f57f",
  "hero-senior.webp": "865241cf4a47ea65ed72d005c8985b1bd2d2c90c2d7d5d2d4b97ba45bb2d1e26",
  "hero-woman.webp": "88ca4370853a8560f95efbe4c04b5a64c6f91be36ef4ac6e24956380e6f8d4db",
  "hero-young-driver.webp": "0775b43693093cf2a774de1c9b75d66f15f0ff2f9e70001e7bc2d46033407d98",
  "meetsafe-mockup.svg": "75152f79e74a0fcd79d6b92deece16cdf7109ef98a2ddab66dfa23a15fc6db62",
  "mysentry-logo.svg": "81fe62aadda5fb1e445945b223d25a8ee450f1fc46a16e08cf07e2c1dd9fd269",
  "panic-and-emergency-contacts-mockup.svg": "ce6fd6f16ae37b01ce9bc04292df239bf4eb351e57109a39e0d9eed48bcfc565",
  "ring-app-store-badge.webp": "9a72cf56b0b952e3571dcdb906f920834099df7f02417f2ed45c046451f98f8c",
};

function hashFile(filePath: string): string {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

const expectedManagedAliases = {
  "audience-family.svg": "/manus-storage/audience-family_6395f20b.svg",
  "audience-three-women.svg": "/manus-storage/audience-three-women_b9754c6a.svg",
  "automated-call-mockup.svg": "/manus-storage/automated-call-mockup_f8c7733c.svg",
  "crash-detection-mockup.svg": "/manus-storage/crash-detection-mockup_3f1ddf4f.svg",
  "fall-detection-and-ring-live-video-mockup.svg":
    "/manus-storage/fall-detection-and-ring-live-video-mockup_1a0e8f3e.svg",
  "hero-mysentry-app-composite.svg":
    "/manus-storage/hero-mysentry-app-composite_42728576.svg",
  "panic-and-emergency-contacts-mockup.svg":
    "/manus-storage/panic-and-emergency-contacts-mockup_79c7d6db.svg",
} as const;

describe("owner-supplied v17 homepage", () => {
  it("keeps the supplied document intact except for the authorized visible punctuation replacement", () => {
    const template = fs.readFileSync(templatePath, "utf8");

    expect(hashFile(templatePath)).toBe(templateSha256);
    expect((template.match(/<style\b/gi) ?? []).length).toBe(7);
    expect((template.match(/<script\b/gi) ?? []).length).toBe(4);
    expect(template).toContain('<header class="site-header" id="siteHeader">');
    expect(template).toContain('<section class="hero" id="home">');
    expect(template).toContain('id="mysentry-health-v13-scroll-script"');
    expect(template).toContain('https://www.youtube-nocookie.com/embed/7eT5sQQgsm8?rel=0&autoplay=1');
    expect(template).toContain(
      "assistance is coordinated when needed, and family stays informed."
    );
    expect(template).not.toContain(
      "assistance is coordinated when needed — and family stays informed."
    );
  });

  it("keeps supplied public assets local or maps their unchanged paths to verified File Storage", () => {
    for (const [filename, expectedHash] of Object.entries(suppliedAssets)) {
      const assetPath = path.join(assetsPath, filename);

      if (filename in expectedManagedAliases) {
        expect(fs.existsSync(assetPath), filename).toBe(false);
        continue;
      }

      expect(fs.existsSync(assetPath), filename).toBe(true);
      expect(hashFile(assetPath), filename).toBe(expectedHash);
    }

    expect(EXACT_HOMEPAGE_ASSET_ALIASES).toEqual(expectedManagedAliases);
  });

  it("serves the raw root document rather than silently falling back to the SPA shell", () => {
    const staticServer = fs.readFileSync(
      path.join(root, "server", "_core", "serve-static.ts"),
      "utf8"
    );

    expect(staticServer).toContain('cleanPath === "/"');
    expect(staticServer).toContain('Homepage template is unavailable');
    expect(staticServer).toContain('.sendFile(exactHomepagePath)');
    expect(staticServer).toContain('X-Robots-Tag');
    expect(staticServer).toContain('registerExactHomepageAssetAliases(app)');
  });
});
