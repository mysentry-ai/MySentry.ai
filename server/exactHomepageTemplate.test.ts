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
  "google-play-badge.webp": "9332c83543d29c6fd21fdfc958cbdaa49142546cc6f74e36065689bf7326faac",
  "health-monitoring-mockup.svg": "9a94eca50532dbe187dc7611c1bab10d590c886b1f13fee5f29aaf512cceae0a",
  "hero-family.webp": "dc8564cc032b94f62f0a4d8fd38528d0a94a83628db8b6005485fa6828261f88",
  "hero-senior.webp": "865241cf4a47ea65ed72d005c8985b1bd2d2c90c2d7d5d2d4b97ba45bb2d1e26",
  "hero-woman.webp": "88ca4370853a8560f95efbe4c04b5a64c6f91be36ef4ac6e24956380e6f8d4db",
  "hero-young-driver.webp": "0775b43693093cf2a774de1c9b75d66f15f0ff2f9e70001e7bc2d46033407d98",
  "meetsafe-mockup.svg": "75152f79e74a0fcd79d6b92deece16cdf7109ef98a2ddab66dfa23a15fc6db62",
  "mysentry-logo.svg": "81fe62aadda5fb1e445945b223d25a8ee450f1fc46a16e08cf07e2c1dd9fd269",
  "ring-app-store-badge.webp": "9a72cf56b0b952e3571dcdb906f920834099df7f02417f2ed45c046451f98f8c",
};

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

function hashFile(filePath: string): string {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function visibleBody(template: string): string {
  const bodyStart = template.indexOf("<body>");
  const scriptStart = template.indexOf("<script>", bodyStart);

  expect(bodyStart).toBeGreaterThanOrEqual(0);
  expect(scriptStart).toBeGreaterThan(bodyStart);

  return template.slice(bodyStart + "<body>".length, scriptStart);
}

describe("owner-supplied v17 homepage", () => {
  it("preserves the v17 standalone root document and implements all 12 approved feedback items", () => {
    const template = fs.readFileSync(templatePath, "utf8");
    const body = visibleBody(template);

    expect(template).toContain('<header class="site-header" id="siteHeader">');
    expect(template).toContain('<section class="hero" id="home">');
    expect(template).toContain('id="mysentry-health-v13-scroll-script"');
    expect(template).toContain('https://www.youtube-nocookie.com/embed/7eT5sQQgsm8?rel=0&autoplay=1');
    expect(template).toContain(
      "assistance is coordinated when needed, and family stays informed."
    );
    expect(body).not.toContain("—");

    // 1. Ring announcement follows the hero, retains a moving track, and has its matching CTA.
    expect(template.indexOf('class="ring-marquee-banner"')).toBeGreaterThan(
      template.indexOf('</header><main>')
    );
    expect(template.indexOf('class="ring-marquee-banner"')).toBeLessThan(
      template.indexOf('<section class="hero"')
    );
    expect(template).toContain("homepage-ring-marquee");
    expect(template).toContain("Explore Ring Integration");

    // 2. Official hero badges are enlarged without altering their real links.
    expect(template).toContain('.store-badges a{flex:0 0 136px;min-width:136px;height:42px}');
    expect(template).toContain("https://apps.apple.com/us/app/mysentry-safety-health/id6740518837");
    expect(template).toContain("https://play.google.com/store/search?q=MySentry&amp;c=apps");

    // 3. The provided logo and semibold blue navigation are used.
    expect(template).toContain('/manus-storage/mysentry-logo-tagline_b866a0e6.svg');
    expect(template).toContain('color:var(--blue);font-weight:600');

    // 4 and 5. Every audience slide gains type/line spacing and every app-story scene gains clearance.
    expect(template).toContain('font-size:clamp(43px,4.8vw,70px);line-height:1.06');
    expect(template).toContain('font-size:19px;line-height:1.52');
    expect(template).toContain('.story{height:480vh}');
    expect(template).toContain('.scene-stage{min-height:610px}');
    expect(template).toContain('.scene-art{max-width:635px;max-height:655px;width:100%');

    // 6 and 7. The supplied Emergency Contacts art is in slide five and Scheduled call is lower.
    expect(template).toContain('/manus-storage/emergency-contacts_14f5ace9.svg');
    expect(template).toContain('.auto-chip-left{top:34%}');

    // 8 and 9. The fall overlay and Ring badge are removed, while the supplied Ring art is used.
    expect(body).not.toContain('class="overlay-note"');
    expect(body).not.toContain('class="ring-badge-link"');
    expect(template).toContain('/manus-storage/ring-section_7e68a6f7.svg');
    expect(template).toContain('.ring-picture:before{display:none}');

    // 10. The reassurance qualifier is removed and all three official badges sit below its CTA.
    expect(body).not.toContain(
      "Professional response and emergency coordination are included with certain plans"
    );
    expect(body).toContain('class="support-store-badges"');
    expect((body.match(/aria-label="MySentry on (?:the )?(?:App Store|Google Play|Ring App Store)"/g) ?? []).length).toBe(6);

    // 11. Pricing copy is exact and the old availability note is removed.
    expect(body).toContain("Coverage for up to 5 family members.");
    expect(body).not.toContain("Support for the people you care about most.");
    expect(body).not.toContain("Prices shown in USD.");

    // 12. Accessible brand SVG icons replace the typed placeholder characters.
    expect((body.match(/class="social-icon"/g) ?? []).length).toBe(4);
    expect(body).not.toContain('target="_blank">◎</a>');
    expect(body).not.toContain('target="_blank">▶</a>');
  });

  it("removes only the separate navbar tagline and enlarges the three audience slides", () => {
    const template = fs.readFileSync(templatePath, "utf8");
    const body = visibleBody(template);
    const audienceStyle = template.split('<style id="mysentry-audience-v14-fix">')[1].split("</style>")[0];

    expect(template).not.toContain('.brand:after{content:"LIVE SAFE. STAY HEALTHY."');
    expect(body).toContain('/manus-storage/mysentry-logo-tagline_b866a0e6.svg');
    expect(body).toContain('<strong>LIVE SAFE. STAY HEALTHY.</strong>');
    expect(audienceStyle).toContain('font-size:clamp(40px,4.2vw,60px);line-height:1.14');
    expect(audienceStyle).toContain('font-size:clamp(17px,1.35vw,20px);line-height:1.65');
    expect(audienceStyle).toContain('height:clamp(350px,58svh,510px)');
    expect(audienceStyle).toContain('font-size:15px;line-height:1.55');
    expect(audienceStyle).toContain('font-size:14px;line-height:1.45');
    expect(audienceStyle).toContain('transition:opacity .34s ease,transform .55s cubic-bezier(.22,1,.36,1)');
    expect(audienceStyle).toContain('#people.audience-sticky{height:480vh}');
    for (const slide of [0, 1, 2]) {
      expect(body).toContain(`data-aud="${slide}"`);
    }
  });

  it("matches all five mockups to the second-slide reference and keeps Automated Call notifications clear", () => {
    const template = fs.readFileSync(templatePath, "utf8");
    const style = template.split('<style id="story-mockup-reference-sizing">')[1].split("</style>")[0];
    expect(template).toContain('<img alt="MySentry Automated Call settings and incoming call mockup" class="scene-art" data-scene="3" src="/manus-storage/automated_call_08c12f8e.svg"/>');
    expect((template.match(/src="\/manus-storage\/automated_call_08c12f8e.svg"/g) ?? []).length).toBe(1);
    for (const notification of ["left", "right", "bottom"]) {
      expect(style).toContain(`#how #storyPin .auto-chip-${notification}[data-scene="3"]`);
    }
    for (const scene of [0, 1, 2, 3, 4]) {
      expect(style).toContain(`#how #storyPin .scene-stage .scene-art[data-scene="${scene}"]`);
    }
    expect(style).toContain('--story-reference-width:min(82cqw,470px)');
    expect(style).toContain('left:50%;top:50%');
    expect(style).toContain('object-fit:contain');
    expect(style).not.toMatch(/transition:|animation:|@keyframes|background:|transform:|clip-path:/);
    expect(template).not.toContain('<style id="automated-call-supplied-mockup-layout">');
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
    expect(staticServer).toContain("Homepage template is unavailable");
    expect(staticServer).toContain(".sendFile(exactHomepagePath)");
    expect(staticServer).toContain("X-Robots-Tag");
    expect(staticServer).toContain("registerExactHomepageAssetAliases(app)");
  });
});
