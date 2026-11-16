import fs from "node:fs";
import { describe, expect, it } from "vitest";
import { getCarouselScrollTarget } from "../client/src/components/ExpandableCarousel";
import { DOWNLOAD_PAGE_CSS } from "../shared/smart-app-download";

const carousel = fs.readFileSync("client/src/components/ExpandableCarousel.tsx", "utf8");
const pricing = fs.readFileSync("client/src/pages/Pricing.tsx", "utf8");
const dialog = fs.readFileSync("client/src/components/ui/dialog.tsx", "utf8");
const arrowClasses = [...carousel.matchAll(/"(absolute (?:left|right)-0 top-1\/2[^"\n]+)"/g)].map((match) => match[1]);

function outwardMargin(classes: string, side: "l" | "r", viewport: number) {
  let units = 0;
  for (const token of classes.split(" ")) {
    const match = token.match(new RegExp(`^(?:(md|lg):)?-m${side}-(\\d+)$`));
    if (!match) continue;
    const minimumWidth = match[1] === "lg" ? 1024 : match[1] === "md" ? 768 : 0;
    if (viewport >= minimumWidth) units = Number(match[2]);
  }
  return units * 4;
}

function pageGutter(viewport: number) {
  return viewport >= 1024 ? 48 : viewport > 640 ? 32 : 16;
}

describe("responsive carousel repair", () => {
  it("retains 48px arrows, original hover animation, disabled controls and desktop offsets", () => {
    expect(arrowClasses).toHaveLength(2);
    for (const classes of arrowClasses) {
      expect(classes).toContain("w-12 h-12");
      expect(classes).toContain("transition-[transform,translate,scale,opacity,box-shadow] duration-300 hover:scale-110");
    }
    expect(carousel).toContain("disabled={!canScrollLeft}");
    expect(carousel).toContain("disabled={!canScrollRight}");
    expect(arrowClasses[0]).toContain("lg:-ml-12");
    expect(arrowClasses[1]).toContain("lg:-mr-12");
    expect(carousel).toContain("opacity-0 translate-x-0 lg:-translate-x-4 pointer-events-none");
    expect(carousel).toContain("opacity-0 translate-x-0 lg:translate-x-4 pointer-events-none");
  });

  it.each([320, 375, 390, 640, 641, 740, 741, 767, 768, 769, 1023])(
    "keeps active and disabled arrow geometry in the %ipx gutter, including hover scale",
    (viewport) => {
      const hoverOverhang = (48 * 1.1 - 48) / 2;
      for (const [index, side] of ["l", "r"].entries()) {
        const remainingGutter = pageGutter(viewport) - outwardMargin(arrowClasses[index], side as "l" | "r", viewport);
        expect(remainingGutter).toBeGreaterThan(hoverOverhang);
      }
    },
  );

  it.each([1024, 1279, 1280, 1440])("retains the original outward desktop margin at %ipx", (viewport) => {
    expect(outwardMargin(arrowClasses[0], "l", viewport)).toBe(48);
    expect(outwardMargin(arrowClasses[1], "r", viewport)).toBe(48);
  });

  it("moves a cut-off expanded card fully into its local viewport", () => {
    const width = 704;
    const left = 352;
    const cardWidth = 600;
    const target = getCarouselScrollTarget(0, 1800, width, left, cardWidth);
    expect(target).toBe(left + cardWidth - width + 16);
    expect(left - target).toBeGreaterThanOrEqual(16);
    expect(left + cardWidth - target).toBeLessThanOrEqual(width - 16);
  });

  it("leaves a fully visible card where it is and moves left only when necessary", () => {
    expect(getCarouselScrollTarget(200, 1800, 704, 250, 400)).toBe(200);
    expect(getCarouselScrollTarget(400, 1800, 704, 250, 400)).toBe(250 - 16);
  });

  it("clamps first and last-card movement to the actual scroll range", () => {
    expect(getCarouselScrollTarget(100, 1800, 704, 0, 600)).toBe(0);
    expect(getCarouselScrollTarget(0, 1800, 704, 1500, 600)).toBe(1800 - 704);
    expect(getCarouselScrollTarget(0, 200, 704, 0, 100)).toBe(0);
  });

  it("fits only smaller strips, then reveals with existing smooth movement after expansion", () => {
    expect(carousel).toContain("window.innerWidth < 1024 ? Math.max(0, container.clientWidth - 32) : undefined");
    expect(carousel).toContain("w-[85vw] md:w-[600px] h-[500px] md:h-[600px]");
    expect(carousel).toContain("w-[280px] md:w-[320px] h-[400px] md:h-[450px] hover:shadow-xl");
    expect(carousel).toContain('container.scrollTo({ left: target, behavior: "smooth" })');
    expect(carousel).toContain("}, 550)");
    expect(carousel).toContain("window.clearTimeout(timer)");
    expect(carousel).toContain("snap-x snap-mandatory");
    expect(carousel).toContain("overflow-y-auto scrollbar-thin");
  });
});

describe("responsive pricing and shared dialog repair", () => {
  it("uses the fixed-header token with scoped 93/78/74px fallback seams, not the in-flow banner", () => {
    expect(pricing).toContain("pricing-layout max-w-[1200px] mx-auto px-6 pb-24");
    expect(pricing).toContain(".pricing-layout { --pricing-fixed-header-height: 93px; }");
    expect(pricing).toContain("@media (max-width: 1279px) { .pricing-layout { --pricing-fixed-header-height: 78px; } }");
    expect(pricing).toContain("@media (max-width: 740px) { .pricing-layout { --pricing-fixed-header-height: 74px; } }");
    expect(pricing).toContain("lg:top-[calc(var(--public-fixed-header-height,var(--pricing-fixed-header-height))+16px)]");
    expect(pricing).not.toContain("lg:top-10");
    expect(pricing).not.toContain("--public-banner-height");
    expect(pricing).toContain('summaryFitsViewport && "lg:sticky"');
    expect(pricing).toContain("summary.offsetHeight <= window.innerHeight - inset - 16");
  });

  it("bounds and scrolls the quote locally with a reachable sticky close and two columns restored at sm", () => {
    expect(pricing).toContain("max-height: calc(100vh - 32px); max-height: calc(100dvh - 32px)");
    expect(pricing).toContain("overflow-y-auto overscroll-contain");
    expect(pricing).toContain("pricing-quote-dialog block sm:max-w-[520px]");
    expect(pricing).toContain('<div className="sticky top-0 z-10 h-0">');
    expect(pricing).toContain("showCloseButton={false}");
    expect(pricing).toContain('className="grid grid-cols-1 sm:grid-cols-2 gap-4"');
    const quote = pricing.slice(pricing.indexOf("function CustomQuoteModal"), pricing.indexOf("/* ─── Main Component"));
    expect(quote.match(/aria-label="Close"/g)).toHaveLength(1);
    expect(quote).not.toContain("overflow-hidden");
  });

  it("raises both Radix layers above the fixed header and preserves focus-trap/Escape/animation composition", () => {
    const overlay = dialog.slice(dialog.indexOf("function DialogOverlay"), dialog.indexOf("DialogOverlay.displayName"));
    const content = dialog.slice(dialog.indexOf("function DialogContent"), dialog.indexOf("function DialogHeader"));
    expect(overlay).toContain("z-[2147483646]");
    expect(content).toContain("z-[2147483647]");
    expect(overlay).toContain("data-[state=open]:fade-in-0");
    expect(content).toContain("data-[state=open]:zoom-in-95");
    expect(content).toContain("<DialogPrimitive.Content");
    expect(content).toContain("<DialogOverlay />");
    expect(content).toContain("onEscapeKeyDown={handleEscapeKeyDown}");
    expect(content).toContain("if (isCurrentlyComposing)");
    expect(content).toContain("onEscapeKeyDown?.(e)");
  });

  it("aligns only the download header-height mobile seam", () => {
    expect(DOWNLOAD_PAGE_CSS).toContain("@media(max-width:740px){.smart-download{--download-header-space:74px}}");
    expect(DOWNLOAD_PAGE_CSS).not.toContain("@media(max-width:640px){.smart-download{--download-header-space:74px}}");
  });

  it("does not add page-wide clipping, shrink text, or alter pricing plan values", () => {
    expect(carousel + pricing).not.toMatch(/overflow-x-hidden|overflow-x:\s*hidden/);
    expect(pricing).toContain("individual_monthly: 15");
    expect(pricing).toContain("family_monthly: 30");
    expect(pricing).toContain("individual_yearly: 15 * 12 * 0.8");
    expect(pricing).toContain("family_yearly: 30 * 12 * 0.8");
    expect(pricing).toContain("getEnterpriseSignupUrl(enterpriseCoverage, billingCycle, licenses)");
    expect(pricing).toContain("quoteMutation.mutate({");
  });
});
