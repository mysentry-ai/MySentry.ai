import * as React from "react";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Router } from "wouter";
import { readFileSync } from "node:fs";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";

beforeAll(() => vi.stubGlobal("React", React));
afterAll(() => vi.unstubAllGlobals());

vi.mock("@/components/Layout", () => ({ default: ({ children }: any) => createElement("main", null, children) }));
vi.mock("@/components/SEO", () => ({ default: () => null }));
vi.mock("@/components/HeroSection", () => ({ default: () => null }));
vi.mock("@/components/AlertDemo", () => ({ default: () => null }));
vi.mock("@/components/ActivationSteps", () => ({ default: () => null }));
vi.mock("@/components/FAQs", () => ({ default: () => null }));

import HowItWorks from "./pages/HowItWorks";
import ExpandableCarousel from "./components/ExpandableCarousel";

const staticHook = () => ["/how-it-works", () => {}] as [string, (to: string) => void];
const render = (component: any, props?: any) => renderToStaticMarkup(createElement(Router, { hook: staticHook }, createElement(component, props)));

describe("weekly Green native action controls", () => {
  it("renders the actual plan CTA as a single styled native link", () => {
    const html = render(HowItWorks);
    const link = html.match(/<a\b[^>]*href="\/pricing#pricing-plans"[^>]*>[\s\S]*?<\/a>/g) || [];
    expect(link).toHaveLength(1);
    expect(link[0]).toContain("Review Plans and Eligibility");
    expect(link[0]).toContain('data-slot="button"');
    expect(link[0]).toContain("shadow-2xl");
    expect(link[0]).not.toMatch(/<button\b/);
    expect(html).not.toMatch(/<button\b[^>]*>\s*<a\b/);
  });

  it("disables the actual invisible left boundary arrow on initial render", () => {
    const html = render(ExpandableCarousel, { items: [{ id: "test", title: "Test card", subtitle: "Test subtitle", description: "Test description", image: "/test.svg" }] });
    const left = html.match(/<button\b[^>]*aria-label="Scroll left"[^>]*>/)?.[0];
    const right = html.match(/<button\b[^>]*aria-label="Scroll right"[^>]*>/)?.[0];
    expect(left).toContain('disabled=""');
    expect(left).toContain("opacity-0");
    expect(right).not.toContain('disabled=""');
    expect(right).toContain("opacity-100");
  });

  it("connects disabled states to the existing left/right availability calculation", () => {
    const source = readFileSync(new URL("./components/ExpandableCarousel.tsx", import.meta.url), "utf8");
    expect(source).toContain("disabled={!canScrollLeft}");
    expect(source).toContain("disabled={!canScrollRight}");
    expect(source).toContain('behavior: "smooth"');
    expect(source).toContain("const scrollAmount = 340;");
  });
});
