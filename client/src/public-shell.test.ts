import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  PUBLIC_HEADER_HTML,
  PUBLIC_BANNER_HTML,
  PUBLIC_FOOTER_HTML,
} from "./components/public-shell/publicShellMarkup";
import {
  PUBLIC_FOOTER_BLOG_GUIDES,
  getPublicBlogPath,
} from "@shared/seo/public-blog-catalog";

const root = path.resolve(import.meta.dirname, "../..");
const read = (file: string) => fs.readFileSync(path.join(root, file), "utf8");
const document = read("client/public/mysentry-homepage-v17.html");
const css = read("client/src/components/public-shell/publicShell.css");

describe("approved homepage shared public shell", () => {
  it("keeps injected DOM props stable so page and mutation updates cannot detach listeners", () => {
    const navbar = read("client/src/components/Navbar.tsx");
    const footer = read("client/src/components/Footer.tsx");
    expect(navbar).toContain("dangerouslySetInnerHTML={headerMarkup}");
    expect(footer).toContain("dangerouslySetInnerHTML={footerMarkup}");
    expect(navbar.indexOf("const headerMarkup")).toBeLessThan(navbar.indexOf("export default function"));
    expect(footer.indexOf("const footerMarkup")).toBeLessThan(footer.indexOf("export default function"));
  });

  it("renders the exact source header, Ring announcement and footer with root-relative assets", () => {
    for (const [markup, pattern] of [
      [PUBLIC_HEADER_HTML, /<header class="site-header"[\s\S]*?<\/header>/],
      [
        PUBLIC_BANNER_HTML,
        /<section aria-label="MySentry and Ring announcement"[\s\S]*?<\/section>/,
      ],
      [PUBLIC_FOOTER_HTML, /<footer class="site-footer"[\s\S]*?<\/footer>/],
    ] as const) {
      expect(markup).toBe(
        document.match(pattern)![0].replace(/src="assets\//g, 'src="/assets/')
      );
      expect(markup).not.toContain("\u2014");
      expect(markup).not.toMatch(/<script\b/i);
    }
    expect(read("client/src/components/Navbar.tsx")).toContain(
      "PUBLIC_HEADER_HTML + PUBLIC_BANNER_HTML"
    );
    expect(read("client/src/components/Footer.tsx")).toContain(
      "__html: PUBLIC_FOOTER_HTML"
    );
  });

  it("retains all five navigation groups with valid unique ARIA targets and the live destinations", () => {
    const ids = [...PUBLIC_HEADER_HTML.matchAll(/\bid="([^"]+)"/g)].map(
      match => match[1]
    );
    expect(new Set(ids).size).toBe(ids.length);
    expect(
      (PUBLIC_HEADER_HTML.match(/class="nav-item dropdown-toggle"/g) ?? [])
        .length
    ).toBe(5);
    for (const match of PUBLIC_HEADER_HTML.matchAll(
      /aria-controls="([^"]+)"/g
    )) {
      expect(ids).toContain(match[1]);
    }
    for (const destination of [
      "/how-it-works",
      "/features",
      "/integrations/ring",
      "/pricing",
      "/blogs",
      "/use-cases/teen-driver-safety",
      "/nurses/travel-nurses",
      "/use-cases/medical-alert-app-for-seniors",
    ]) {
      expect(PUBLIC_HEADER_HTML).toContain(`href="${destination}"`);
    }
    expect(PUBLIC_HEADER_HTML).toContain(
      "https://dashboard.mysentry.ai/website-auth?redirect_url=login"
    );
  });

  it("preserves catalog guides, legal links and the actionable newsletter form", () => {
    for (const guide of PUBLIC_FOOTER_BLOG_GUIDES) {
      expect(PUBLIC_FOOTER_HTML).toContain(
        `href="${getPublicBlogPath(guide.slug)}"`
      );
    }
    for (const route of [
      "/privacy",
      "/terms",
      "/sms-consent",
      "/account-deletion",
      "/contact",
    ]) {
      expect(PUBLIC_FOOTER_HTML).toContain(`href="${route}"`);
    }
    for (const id of ["newsletterForm", "newsEmail", "newsletterStatus"]) {
      expect(PUBLIC_FOOTER_HTML).toContain(`id="${id}"`);
    }
    const footer = read("client/src/components/Footer.tsx");
    expect(footer).toContain("trpc.newsletter.subscribe.useMutation()");
    expect(footer).toContain("form.reportValidity()");
    expect(footer).toContain('form.removeEventListener("submit", handler)');
  });

  it("isolates styles and preserves native focus, reduced-motion and responsive menu behavior", () => {
    expect(css).toContain(".public-shell .container");
    expect(css).toContain(".public-shell :focus-visible");
    expect(css).toContain("prefers-reduced-motion");
    expect(css).toContain("max-width: 1279px");
    expect(css).toContain("--public-shell-header-height: 93px");
    expect(css).not.toMatch(/(?:^|\n)\s*(?:body|html)\s*\{/);
    const behavior = read(
      "client/src/components/public-shell/initializePublicNavigation.ts"
    );
    expect(behavior).toContain("controller.abort()");
    expect(behavior).toContain('mobile.removeEventListener("change", sync)');
    expect(behavior).toContain('event.key === "Escape"');
  });

  it("includes public errors and screen documents but preserves the document-only print output", () => {
    expect(read("client/src/pages/NotFound.tsx")).toContain("<Layout>");
    const article = read("client/src/pages/BlogPost.tsx");
    const missing = article.slice(
      article.indexOf("if (!post)"),
      article.indexOf("//", article.indexOf("if (!post)"))
    );
    expect(missing).toContain("<Navbar />");
    expect(missing).toContain("<Footer />");
    const printable = read("client/src/pages/resources/EmployerOnePager.tsx");
    expect(printable).toContain("<Navbar />");
    expect(printable).toContain("<Footer />");
    expect(printable).toContain("@media print");
    expect(printable).toContain(".no-print, .public-shell");
    expect(read("client/src/pages/Home.tsx")).toContain(
      "`/${window.location.search}${window.location.hash}`"
    );
  });
});
