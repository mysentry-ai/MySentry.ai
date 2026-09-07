import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const root = import.meta.dirname;
const read = (relativePath: string) =>
  readFileSync(resolve(root, relativePath), "utf8");

describe("reader-first public content", () => {
  it("keeps the About and Privacy pages specific and limitation-aware", () => {
    const about = read("pages/About.tsx");
    const privacy = read("pages/Privacy.tsx");

    expect(about).toContain("Support depends on your setup.");
    expect(about).toContain("does not guarantee detection, contact, escalation, response, or outcome");
    expect(about).not.toContain("We are always there.");
    expect(about).not.toContain("predict better, and respond faster");
    expect(privacy).toContain("may collect, use, share, and protect personal information");
    expect(privacy).not.toContain("privacy and security is paramount");
  });

  it("uses the claim-safe industry template for canonical home healthcare and real-estate pages", () => {
    const homeHealthcare = read("pages/industries/HomeHealthcare.tsx");
    const realEstate = read("pages/industries/RealEstate.tsx");

    expect(homeHealthcare).toContain('import IndustrySafetyPage from "@/components/IndustrySafetyPage"');
    expect(realEstate).toContain('import IndustrySafetyPage from "@/components/IndustrySafetyPage"');
    expect(homeHealthcare).toContain("supplemental personal-safety workflow");
    expect(realEstate).toContain("supplemental personal-safety workflow");
    expect(homeHealthcare).not.toContain("Stay Safe, Always.");
    expect(realEstate).not.toContain("Complete Peace of Mind at Every Showing.");
  });
});
