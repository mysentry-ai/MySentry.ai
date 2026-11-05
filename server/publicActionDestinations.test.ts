import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const source = (relative: string) => fs.readFileSync(path.join(process.cwd(), relative), "utf8");
const homepage = source("client/public/mysentry-homepage-v17.html");

describe("current public action destinations", () => {
  it("sends each homepage feature action to its dedicated existing page", () => {
    for (const [label, href] of [
      ["Explore Panic Alarm", "/features/panic-button-app"],
      ["Explore Crash Detection", "/features/crash-detection"],
      ["Explore MeetSafe", "/features/safety-check-in-app"],
      ["Explore Automated Call", "/features/automated-call"],
      ["Explore Emergency Contacts", "/features/emergency-contacts"],
      ["See Fall Detection", "/features/fall-detection-app"],
      ["Explore Health Monitoring", "/features/health-monitoring"],
    ]) expect(homepage).toContain(`href="${href}">${label}`);
    expect(homepage).toContain('href="/females">Explore women');
    expect(homepage).not.toContain('href="https://mysentry.ai/women"');
  });

  it("uses direct app listings and keeps Ring information separate from enrollment", () => {
    expect(homepage).toContain("https://apps.apple.com/us/app/mysentry-safety-health/id6740518837");
    expect(homepage).toContain("https://play.google.com/store/apps/details?id=com.eagleeye.mysentry");
    expect(homepage).not.toContain("play.google.com/store/search");
    const ringBadges = homepage.match(/<a[^>]*aria-label="MySentry on the Ring App Store"[^>]*>/g) ?? [];
    expect(ringBadges).toHaveLength(2);
    for (const badge of ringBadges) expect(badge).toContain('href="https://ring.com/appstore/mysentry?q=mysen"');
    expect(homepage).toContain('href="/integrations/ring">Explore Ring + MySentry');
    expect(homepage).toContain('href="https://ring.com/appstore/mysentry?q=mysen">Explore Ring Offer');
  });

  it("retains the current public login and generic plan-review destinations", () => {
    expect(homepage.match(/https:\/\/dashboard\.mysentry\.ai\/website-auth\?redirect_url=login/g)).toHaveLength(2);
    expect(homepage).toContain('href="/pricing#pricing-plans">Try MySentry Free for 7 Days');
    expect(source("client/src/pages/Pricing.tsx")).toContain("getSignupUrl(planType, billingCycle)");
    expect(source("client/src/pages/Pricing.tsx")).toContain("getEnterpriseSignupUrl(enterpriseCoverage, billingCycle, licenses)");
  });

  it("uses existing owner-approved company social profiles rather than network home pages", () => {
    for (const href of ["https://www.facebook.com/MySentryAi", "https://www.instagram.com/mysentry.ai/", "https://www.linkedin.com/company/mysentryai", "https://www.youtube.com/@MySentry"]) expect(homepage).toContain(`href="${href}"`);
    for (const href of ["https://www.facebook.com/", "https://www.instagram.com/", "https://www.youtube.com/"]) expect(homepage).not.toContain(`href="${href}"`);
  });

  it("uses the same newsletter mutation contract and honest pending/success/error states on the standalone homepage", () => {
    expect(homepage).toContain("fetch('/api/trpc/newsletter.subscribe'");
    expect(homepage).toContain("JSON.stringify({json:{email:email.value.trim(),source:'footer'}})");
    expect(homepage).toContain("!news.reportValidity()");
    expect(homepage).toContain("newsletterPending=true;button.disabled=true");
    expect(homepage).toContain("!result?.success");
    expect(homepage).toContain("finally{newsletterPending=false;button.disabled=false");
    expect(homepage).not.toContain("This standalone preview does not send your email.");
  });

  it("keeps plan and billing selectors keyboard-operable without making static plan descriptions into buttons", () => {
    const pricing = source("client/src/pages/Pricing.tsx");
    expect(pricing).toContain('role={onClick ? "button" : undefined}');
    expect(pricing).toContain("tabIndex={onClick && !disabled ? 0 : undefined}");
    expect(pricing).toContain("aria-pressed={onClick ? active : undefined}");
    expect(pricing).toContain('event.key === "Enter" || event.key === " "');
  });

  it("makes the employer hero a demo-modal action and keeps Ring signup native/external", () => {
    const employers = source("client/src/pages/Employers.tsx");
    expect(employers).not.toContain('ctaLink="#"');
    expect(employers).toContain("trackLeadEvent();");
    expect(employers).toContain("setIsDemoModalOpen(true);");
    const ring = source("client/src/pages/RingLandingPage.tsx");
    expect(ring).toContain('const RING_CTA_LINK = "https://ring.com/appstore/mysentry?q=mysen"');
    expect(ring).not.toMatch(/<Link\s+href=\{RING_CTA_LINK\}/);
    expect(ring).toContain('href="/pricing#pricing-plans"');
    expect(source("client/src/components/homepage/homepageContent.ts")).toContain('ringAppstore: "https://ring.com/appstore/mysentry?q=mysen"');
  });
});
