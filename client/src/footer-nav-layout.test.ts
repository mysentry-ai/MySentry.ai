import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = path.resolve(import.meta.dirname, "../..");
const read = (...parts: string[]) =>
  readFileSync(path.join(root, ...parts), "utf8");
const homepage = read(
  "client",
  "src",
  "components",
  "homepage",
  "HomepageExperience.tsx"
);
const styles = read("client", "src", "components", "homepage", "homepage.css");
const globalStyles = read("client", "src", "index.css");
const footer = read("client", "src", "components", "Footer.tsx");
const navbar = read("client", "src", "components", "Navbar.tsx");

describe("footer organization and navigation tagline spacing", () => {
  it("retains every visible homepage footer destination in the reorganized navigation", () => {
    const footerStart = homepage.indexOf('<footer className="hp-footer">');
    const footerEnd = homepage.indexOf("</footer>", footerStart);
    const homepageFooter = homepage.slice(footerStart, footerEnd);

    for (const label of [
      "How It Works",
      "Protection in 4 Steps",
      "Ring Integration",
      "Pricing",
      "Families",
      "Seniors",
      "Women",
      "Compatible Watches",
      "FAQ",
      "Contact and Support",
      "SMS Communication Consent",
      "Account Deletion",
      "Privacy Policy",
      "Terms",
    ]) {
      expect(homepageFooter).toContain(label);
    }

    expect(homepageFooter).toContain("Never face an emergency alone.");
  });

  it("uses a regular, compact hierarchy in both visible footer systems", () => {
    expect(styles).toContain("font-weight: 400 !important");
    expect(styles).toContain("font-size: 13px !important");
    expect(styles).toContain("repeat(4, minmax(0, 1fr))");
    expect(styles).toContain("grid-template-columns: 1fr 1fr");
    expect(globalStyles).toContain(".site-footer h3");
    expect(globalStyles).toContain("font-weight: 400 !important");
    expect(footer).toContain('className="site-footer');
    expect(footer).toContain("!font-normal text-xs");
    expect(footer).toContain("text-sm font-normal");
    expect(footer).toContain('href="/account-deletion"');
    expect(footer).toContain('href="/sms-consent"');
  });

  it("separates the navigation tagline from the logo without changing the approved words", () => {
    expect(navbar).toContain("Live Safe. Stay Healthy.");
    expect(navbar).toContain("mt-1.5");
    expect(navbar).toContain("font-normal uppercase");
    expect(navbar).toContain("xl:-ml-2");
  });
});
