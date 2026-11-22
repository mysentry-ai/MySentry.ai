import * as React from "react";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { HELD_BLOG_SLUGS } from "../shared/seo/content-governance";

const state = vi.hoisted(() => ({
  posts: {} as any,
  categories: [{ id: 3, name: "Families" }, { id: 1, name: "Senior Care" }],
  listHook: vi.fn(),
}));
vi.mock("@/lib/trpc", () => ({ trpc: { blog: { public: {
  categories: { useQuery: () => ({ data: state.categories }) },
  list: { useQuery: state.listHook },
} } } }));
vi.mock("wouter", () => ({
  Link: ({ href, children, ...props }: any) => createElement("a", { href, ...props }, children),
}));
vi.mock("@/components/Layout", () => ({ default: ({ children }: any) => createElement("main", null, children) }));
vi.mock("@/components/Navbar", () => ({ default: () => null }));
vi.mock("@/components/Footer", () => ({ default: () => null }));
vi.mock("@/components/SEO", () => ({ default: () => null }));
vi.mock("@/components/HeroSection", () => ({ default: () => null }));
vi.mock("@/components/GetStartedSection", () => ({ default: () => null }));
vi.mock("@/components/PerformanceImage", () => ({ default: (props: any) => createElement("img", props) }));
vi.mock("framer-motion", () => ({
  AnimatePresence: ({ children }: any) => children,
  motion: new Proxy({}, { get: (_target, tag: string) => ({ children, initial, animate, whileInView, exit, transition, ...props }: any) => createElement(tag, props, children) }),
}));

beforeEach(() => {
  vi.stubGlobal("React", React);
  vi.clearAllMocks();
  state.posts = { isLoading: false, isError: false, data: { posts: [], total: 0 }, refetch: vi.fn() };
  state.listHook.mockImplementation(() => state.posts);
});
afterEach(() => vi.unstubAllGlobals());

const templateProps = {
  seoTitle: "Existing title", seoDescription: "Existing description", label: "Feature",
  h1: "Existing heading", problem: "Existing problem", empathy: "Existing explanation", steps: [],
  primaryCta: { text: "Primary action", href: "/download" },
  secondaryCta: { text: "Secondary action", href: "/how-it-works" },
  directAnswer: "Existing answer", howItWorks: [], afterAlert: [], bestFor: [], notIdealFor: [],
  keyTakeaways: [], faqs: [], relatedLinks: [],
};
async function renderTemplate(props = templateProps) {
  const { default: Template } = await import("../client/src/components/SEOPageTemplate");
  return renderToStaticMarkup(createElement(Template, props));
}
async function renderBlogs() {
  const { default: Blogs } = await import("../client/src/pages/Blogs");
  return renderToStaticMarkup(createElement(Blogs));
}
function styledAnchors(html: string) {
  return [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)].filter(match => match[1].includes('data-slot="button"'));
}

describe("weekly Green public-control regressions", () => {
  it("renders each real template CTA as one styled anchor, not two nested interactive elements", async () => {
    const links = styledAnchors(await renderTemplate());
    expect(links).toHaveLength(2);
    for (const link of links) expect(link[2]).not.toMatch(/<(?:button|a)\b/);
    expect(links[0][1]).toContain('href="/download"');
    expect(links[1][1]).toContain('href="/how-it-works"');
    expect(links[0][2]).toContain("Primary action");
    expect(links[1][2]).toContain("Secondary action");
  });

  it("keeps the primary-only template state and existing responsive CTA styles", async () => {
    const links = styledAnchors(await renderTemplate({ ...templateProps, secondaryCta: undefined } as any));
    expect(links).toHaveLength(1);
    expect(links[0][1]).toContain("min-h-14");
    expect(links[0][1]).toContain("w-full");
    expect(links[0][1]).toContain("sm:w-auto");
    expect(links[0][1]).toContain("bg-[#6AD990]");
  });

  it("exposes exactly one selected native blog filter and preserves filter query policy", async () => {
    const html = await renderBlogs();
    expect(html).toMatch(/<button[^>]*aria-pressed="true"[^>]*>All<\/button>/);
    expect((html.match(/aria-pressed="true"/g) ?? [])).toHaveLength(1);
    expect((html.match(/aria-pressed="false"/g) ?? [])).toHaveLength(2);
    expect((html.match(/focus-visible:ring-\[#005f91\]/g) ?? [])).toHaveLength(3);
    expect(state.listHook.mock.calls[0]).toEqual([{ categoryId: undefined, limit: 200 }, { retry: false, staleTime: 30_000 }]);
    expect(html).toContain("No articles found in this category.");
  });

  it("announces real loading with a named status and excludes the decorative spinner", async () => {
    state.posts = { isLoading: true, isError: false };
    const html = await renderBlogs();
    expect(html).toContain('role="status" aria-label="Loading articles"');
    expect(html).toMatch(/<svg[^>]*aria-hidden="true"/);
    expect(html).not.toContain("No articles found in this category.");
    expect(html).not.toContain("Featured Story");
  });

  it("does not turn a real SQL error into loading, a fabricated article or empty success", async () => {
    state.posts = { isLoading: false, isError: true, error: { message: "Invalid SQL" }, refetch: vi.fn() };
    const html = await renderBlogs();
    expect(html).toContain('role="alert"');
    expect(html).toContain("Articles could not be loaded.");
    expect(html).not.toContain('role="status"');
    expect(html).not.toContain("Featured Story");
    expect(html).not.toContain("No articles found in this category.");
  });

  it("retains published article links and local image paths while suppressing editorial-held slugs", async () => {
    const article = { id: 1, title: "Existing article", slug: "existing-article", categoryId: 3,
      heroImageUrl: "/images/cdn/GqszcNTBcTbleCyx.jpg", heroImageAlt: "Existing image", publishedAt: new Date("2026-09-07"), readTimeMinutes: 5 };
    state.posts.data = { posts: [article, { ...article, id: 2, title: "Held fixture", slug: [...HELD_BLOG_SLUGS][0] }], total: 2 };
    const html = await renderBlogs();
    expect(html).toContain('href="/blog/existing-article"');
    expect(html).toContain('src="/images/cdn/GqszcNTBcTbleCyx.jpg"');
    expect(html).not.toContain("Held fixture");
  });
});
