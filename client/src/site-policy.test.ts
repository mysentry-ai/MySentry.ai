import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { CANONICAL_REDIRECTS } from "@shared/seo/redirects";

const root = process.cwd();
const sourceRoot = path.join(root, "client", "src");
const publicRoot = path.join(root, "client", "public");

function sourceFiles(): string[] {
  const files: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(ts|tsx|css)$/.test(entry.name)) files.push(full);
    }
  };
  walk(sourceRoot);
  return files;
}

const files = sourceFiles();

describe("public source policy", () => {
  it("contains no Manus CDN or CloudFront dependency", () => {
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      expect(text, path.relative(root, file)).not.toMatch(/(?:manuscdn\.com|cloudfront\.net)/i);
    }
  });

  it("keeps every referenced local image on disk", () => {
    const imagePaths = new Set<string>();
    const imagePattern = /["'(]((?:\/images\/)[^"')?#]+\.(?:avif|gif|jpe?g|png|svg|webp))/gi;
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      for (const match of text.matchAll(imagePattern)) imagePaths.add(match[1]);
    }

    expect(imagePaths.size).toBeGreaterThan(0);
    for (const imagePath of imagePaths) {
      expect(
        fs.existsSync(path.join(publicRoot, imagePath.replace(/^\//, ""))),
        `Missing public image: ${imagePath}`
      ).toBe(true);
    }
  });

  it("contains no prohibited em dash in visitor-facing source", () => {
    const prohibitedDash = String.fromCharCode(0x2014);
    for (const file of files) {
      const text = fs.readFileSync(file, "utf8");
      expect(text, path.relative(root, file)).not.toContain(prohibitedDash);
    }
  });

  it("does not link visitor-facing source files through approved redirects", () => {
    for (const file of files.filter(file => !file.endsWith(`${path.sep}App.tsx`))) {
      const text = fs.readFileSync(file, "utf8");
      for (const source of Object.keys(CANONICAL_REDIRECTS)) {
        const escaped = source.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        expect(text, `${path.relative(root, file)} links to ${source}`).not.toMatch(
          new RegExp(`["']${escaped}["']`)
        );
      }
    }
  });

  it("keeps the primary brand token and shared actions on high-contrast colors", () => {
    const css = fs.readFileSync(path.join(sourceRoot, "index.css"), "utf8");
    const navbar = fs.readFileSync(path.join(sourceRoot, "components", "Navbar.tsx"), "utf8");
    const selector = fs.readFileSync(path.join(sourceRoot, "components", "ICPSelector.tsx"), "utf8");

    expect(css).toContain("--primary: #004F7B;");
    expect(navbar).toContain("bg-[#004F7B]");
    expect(selector).toContain("border-[#255044]");
    expect(selector).toContain("bg-[#004F7B]");
  });

  it("mounts all four nurse specialty pages directly and links them from the hub", () => {
    const app = fs.readFileSync(path.join(sourceRoot, "App.tsx"), "utf8");
    const hub = fs.readFileSync(path.join(sourceRoot, "pages", "Nurses.tsx"), "utf8");
    const routes: Array<[string, string]> = [
      ["/nurses/home-health", "HomeHealthNurses"],
      ["/nurses/travel-nurses", "TravelNurses"],
      ["/nurses/er-trauma", "ErTraumaNurses"],
      ["/nurses/night-shift", "NightShiftNurses"],
    ];

    for (const [route, component] of routes) {
      expect(app).toContain(`<Route path="${route}" component={${component}} />`);
      expect(hub).toContain(`href: "${route}"`);
      expect(CANONICAL_REDIRECTS[route]).toBeUndefined();
    }
  });

  it("keeps the Oura page honest about current availability", () => {
    const oura = fs.readFileSync(
      path.join(sourceRoot, "pages", "integrations", "OuraRingIntegration.tsx"),
      "utf8"
    );

    expect(oura).toContain("Coming soon. Not available today.");
    expect(oura).toContain("does not currently connect to Oura Ring");
    expect(oura).toContain("no confirmed launch date");
    expect(oura).toContain("noindex");
    expect(oura).not.toMatch(/Oura (?:is|has been) integrated with MySentry/i);
    expect(oura).not.toMatch(/Oura (?:data|signals?) (?:triggers?|starts?) (?:an )?alert/i);
  });

  it("provides individual and family senior paths with consent and limitations", () => {
    const hub = fs.readFileSync(path.join(sourceRoot, "pages", "Seniors.tsx"), "utf8");
    const guide = fs.readFileSync(
      path.join(sourceRoot, "pages", "use-cases", "MedicalAlertForSeniors.tsx"),
      "utf8"
    );

    expect(hub).toContain("Choosing for myself");
    expect(hub).toContain("Choosing together");
    expect(hub).toContain("not constant surveillance");
    expect(guide).toContain('id="individual-path"');
    expect(guide).toContain('id="family-path"');
    expect(guide).toContain("The older adult should remain part of every decision");
    expect(guide).toContain("does not describe unrestricted continuous family tracking");
    expect(guide).toContain("Wellness information does not diagnose a medical condition");
    expect(guide).toContain("Supported-device detection may miss an event");
    expect(guide).toContain("Alert delivery and shared context require an available supported connection");
  });

  it("uses high-contrast brand treatments on the affected conversion pages", () => {
    const affected = [
      path.join(sourceRoot, "components", "NurseSpecialtyPage.tsx"),
      path.join(sourceRoot, "pages", "Nurses.tsx"),
      path.join(sourceRoot, "pages", "Seniors.tsx"),
      path.join(sourceRoot, "pages", "use-cases", "MedicalAlertForSeniors.tsx"),
      path.join(sourceRoot, "pages", "integrations", "OuraRingIntegration.tsx"),
    ];

    for (const file of affected) {
      const text = fs.readFileSync(file, "utf8");
      expect(text, path.relative(root, file)).toMatch(/#0b6848|#0D3028|#004f7b|#004F7B|#007bc2|#007BC2/);
      expect(text, path.relative(root, file)).not.toMatch(/text-\[#6AD990\]/i);
    }
  });

  it("does not contain the accidental nested source tree", () => {
    expect(fs.existsSync(path.join(sourceRoot, "src"))).toBe(false);
  });

  it("mounts and discovers every organic growth route directly", () => {
    const app = fs.readFileSync(path.join(sourceRoot, "App.tsx"), "utf8");
    const sitemap = fs.readFileSync(path.join(root, "server", "sitemaps.ts"), "utf8");
    const llms = fs.readFileSync(path.join(publicRoot, "llms.txt"), "utf8");
    const discoverySources = [
      path.join(sourceRoot, "components", "Navbar.tsx"),
      path.join(sourceRoot, "components", "Footer.tsx"),
      path.join(sourceRoot, "pages", "UseCasesHub.tsx"),
      path.join(sourceRoot, "pages", "Seniors.tsx"),
      path.join(sourceRoot, "pages", "Families.tsx"),
      path.join(sourceRoot, "pages", "nurses", "NightShiftNurses.tsx"),
      path.join(sourceRoot, "pages", "features", "FallDetectionApp.tsx"),
    ].map(file => fs.readFileSync(file, "utf8")).join("\n");
    const routes = [
      "/safety-for/people-living-alone",
      "/guides/aging-in-place-checklist",
      "/guides/family-safety-without-constant-tracking",
      "/guides/night-shift-nurse-safety-checklist",
      "/use-cases/personal-safety-app-for-renters",
      "/guides/wearable-fall-detection-limitations",
      "/solutions/utility-workers",
    ];

    for (const route of routes) {
      expect(app, route).toContain(`<Route path="${route}"`);
      expect(CANONICAL_REDIRECTS[route], route).toBeUndefined();
      expect(sitemap, route).toContain(`url: "${route}"`);
      expect(llms, route).toContain(`https://mysentry.ai${route}`);
      expect(discoverySources, route).toContain(route);
    }
  });

  it("keeps the growth pages local, high contrast, and claim safe", () => {
    const growthPages = fs.readFileSync(
      path.join(sourceRoot, "pages", "growth", "OrganicGrowthPages.tsx"),
      "utf8"
    );

    expect(growthPages).toContain("MySentry connects supported alerts, wellness context, trusted contacts, and eligible professional monitoring");
    expect(growthPages).toContain("Feature operation depends on supported devices, app state, permissions, connectivity, plan, region, and service availability");
    expect(growthPages).toContain("does not replace employer policy");
    expect(growthPages).toContain("The Oura Ring page is explicitly Coming Soon");
    expect(growthPages).not.toMatch(/will always (?:detect|dispatch|protect|respond)|works everywhere/i);
    expect(growthPages).not.toMatch(/https?:\/\/(?:images\.unsplash\.com|.*cloudfront\.net|.*manuscdn\.com)/i);
  });

  it("publishes conservative AI discovery facts and the approved tagline", () => {
    const llms = fs.readFileSync(path.join(publicRoot, "llms.txt"), "utf8");

    expect(llms).toContain("Live Safe. Stay Healthy.");
    expect(llms).toContain("MySentry connects supported safety alerts");
    expect(llms).toContain("a configured voice command");
    expect(llms).toContain("eligible 24/7 professional monitoring");
    expect(llms).toContain("after verification, contact emergency services, including 911, when appropriate");
    expect(llms).toContain("The Oura Ring integration is not currently available");
    expect(llms).not.toMatch(/Your Vital Companion/i);
    expect(llms).not.toMatch(/free trial|guaranteed (?:response|protection|results)|auto-dispatch|real-time GPS location/i);
  });

  it("mounts and discovers the account-deletion page with verified support instructions", () => {
    const app = fs.readFileSync(path.join(sourceRoot, "App.tsx"), "utf8");
    const page = fs.readFileSync(path.join(sourceRoot, "pages", "AccountDeletion.tsx"), "utf8");
    const privacy = fs.readFileSync(path.join(sourceRoot, "pages", "Privacy.tsx"), "utf8");
    const footer = fs.readFileSync(path.join(sourceRoot, "components", "Footer.tsx"), "utf8");
    const sitemap = fs.readFileSync(path.join(root, "server", "sitemaps.ts"), "utf8");

    expect(app).toContain('<Route path="/account-deletion" component={AccountDeletion} />');
    expect(page.match(/<h1\b/g)).toHaveLength(1);
    expect(page).toContain("support@mysentry.ai");
    expect(page).toContain("Account Deletion Request");
    expect(page).toContain("verify your identity");
    expect(page).toContain("Some information may be retained");
    expect(page).toContain("Account deletion and subscription cancellation may be handled through different systems");
    const prohibitedDeletionPromises = new RegExp(
      [
        "deleted automatically",
        ["inst", "ant deletion"].join(""),
        "within \\d+ (?:hours|days)",
        "guaranteed deletion",
      ].join("|"),
      "i"
    );
    expect(page).not.toMatch(prohibitedDeletionPromises);
    expect(page).toMatch(/#005f91|#004f7b|#0b6848/);
    expect(privacy).toContain('href="/account-deletion"');
    expect(footer).toContain('href="/account-deletion"');
    expect(sitemap).toContain('url: "/account-deletion"');
    expect(CANONICAL_REDIRECTS["/account-deletion"]).toBeUndefined();
  });
});
