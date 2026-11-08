import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Button } from "./components/ui/button";

const layout = readFileSync(resolve(process.cwd(), "client/src/components/Layout.tsx"), "utf8");
const page = readFileSync(resolve(process.cwd(), "client/src/components/SEOPageTemplate.tsx"), "utf8");

describe("Green growth accessibility improvements", () => {
  it("gives keyboard users a visible-on-focus skip link to a focusable main landmark", () => {
    expect(layout).toContain('href="#main-content"');
    expect(layout).toContain('id="main-content" tabIndex={-1}');
    expect(layout).toContain("focus:translate-y-0");
    expect(layout).toContain("Skip to main content");
  });
  it("connects FAQ buttons to stable mounted panels and announces open state", () => {
    expect(page).toContain("const faqId = useId()");
    expect(page).toContain('aria-expanded={openFaq === i}');
    expect(page).toContain('aria-controls={`${faqId}-panel-${i}`}');
    expect(page).toContain('id={`${faqId}-panel-${i}`}');
    expect(page).toContain('hidden={openFaq !== i}');
    expect(page).toContain('aria-labelledby={`${faqId}-trigger-${i}`}');
  });
  it("renders a styled CTA as one native anchor, not a button inside a link", () => {
    const html = renderToStaticMarkup(createElement(Button, { asChild: true }, createElement("a", { href: "/pricing" }, "Review Plans")));
    expect(html).toContain('href="/pricing"');
    expect(html).toContain("Review Plans");
    expect(html).not.toContain("<button");
    expect((page.match(/<Button asChild/g) ?? []).length).toBe(2);
  });
});
