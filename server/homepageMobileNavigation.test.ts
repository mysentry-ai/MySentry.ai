import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import groups from "./homepage-live-navigation.fixture.json";

const html = fs.readFileSync(path.join(process.cwd(), "client/public/mysentry-homepage-v17.html"), "utf8");
const header = html.match(/<header\b[\s\S]*?<\/header>/)![0];
const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

describe("homepage mobile, loading and live-navigation repair", () => {
  it("retains all 44 live submenu labels, descriptions and correct destinations", () => {
    let count = 0;
    for (const group of groups) {
      expect(header).toContain(group.label);
      expect(header).toContain(escape(group.header));
      for (const column of group.columns) {
        expect(header).toContain(escape(column.title));
        for (const item of column.items) {
          expect(header).toContain(`class="nav-submenu-link" href="${item.href}"><span class="nav-label">${escape(item.label)}</span><span class="nav-description">${escape(item.description)}</span>`);
          count++;
        }
      }
      expect(header).toContain(`class="nav-panel-footer" href="${group.footer.href}">${escape(group.footer.label)}`);
    }
    expect(count).toBe(44);
    expect((header.match(/class="nav-submenu-link"/g) ?? []).length).toBe(44);
    expect(header).toContain('href="/pricing#pricing-plans"');
    expect(header).toContain('href="https://dashboard.mysentry.ai/website-auth?redirect_url=login"');
    expect(header).not.toContain('href="https://mysentry.ai/login"');
    expect(header).not.toContain('href="https://mysentry.ai/blog"');
  });

  it("supports mobile accordion state, dismissal, keyboard input and breakpoint cleanup", () => {
    expect(html).toContain('aria-controls="mainNav"');
    expect(html).toContain("panel.hidden = !expanded");
    expect(html).toContain("navCloseGroups(false)");
    expect(html).toContain("event.key !== 'Escape'");
    expect(html).toContain("event.key !== 'ArrowDown'");
    expect(html).toContain("menu.focus({ preventScroll: true })");
    expect(html).toContain("if (!navMobile.matches) navSyncLayout()");
    expect(html).toContain(".dropdown-panel[hidden]");
    expect(html).toContain("max-height: calc(100dvh - var(--nav-header-height))");
  });

  it("reserves the hero geometry and defers the exact below-fold art without changing its source", () => {
    expect(html).toContain('fetchpriority="high" width="1270" height="714" src="assets/hero-mysentry-app-composite.svg"');
    expect(html).toContain('id="homepage-deferred-images"');
    expect(html).toContain("rootMargin:'300px 0px'");
    expect(html).toContain("img.src=img.dataset.deferredSrc");
    expect(html).toContain("<noscript>");
    expect(html).toContain('href="/favicon.svg"');
    const withoutFallback = html.replace(/<noscript>[\s\S]*?<\/noscript>/g, "");
    expect((withoutFallback.match(/class="scene-art(?: active)?"[^>]+data-deferred-src=/g) ?? []).length).toBe(5);
  });

  it("fixes narrow introduction overflow and preserves the second-slide reference on ordinary screens", () => {
    const style = html.split('<style id="homepage-responsive-loading-fixes">')[1].split('</style>')[0];
    expect(style).toContain("#intro .intro-grid{grid-template-columns:minmax(0,1fr)");
    expect(style).toContain("white-space:normal");
    expect(style).toContain("(max-height:690px)");
    expect(style).toContain("(max-height:540px)");
    expect(style).not.toMatch(/@keyframes|transition:|animation:/);
    expect(html).toContain("--story-reference-width:min(82cqw,470px)");
    expect(html).toContain('id="mysentry-health-v13-scroll-script"');
  });
});
