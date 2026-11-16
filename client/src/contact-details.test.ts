import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

vi.mock("./components/Navbar", () => ({ default: () => null }));
vi.mock("./components/Footer", () => ({ default: () => null }));
vi.mock("./components/SEO", () => ({ default: () => null }));
vi.mock("@/components/HeroSection", () => ({ default: () => null }));
import Contact from "./pages/Contact";

const render = () => renderToStaticMarkup(createElement(Contact));

describe("Contact page: email and location only", () => {
  it("removes the marked Call Us block and its telephone destination", () => {
    const html = render();
    expect(html).not.toContain("Call Us");
    expect(html).not.toContain("Andrew Caldwell");
    expect(html).not.toContain("tel:+16143615073");
  });

  it("preserves the exact support email and headquarters location", () => {
    const html = render();
    expect(html).toContain('href="mailto:support@MySentry.ai"');
    expect(html).toContain("Email Us");
    expect(html).toContain("Headquarters");
    expect(html).toContain("Alexandria, Virginia, USA");
  });

  it("keeps the existing message form and mailto action unchanged", () => {
    const html = render();
    expect(html).toContain("Send a Message");
    expect(html).toContain('action="mailto:support@MySentry.ai"');
    expect(html).toContain('method="post"');
    expect(html).toContain('encType="text/plain"');
    for (const name of ["name", "email", "subject", "message"]) {
      expect(html).toContain(`name="${name}"`);
    }
    expect(html).toContain("Send Message");
  });
});
