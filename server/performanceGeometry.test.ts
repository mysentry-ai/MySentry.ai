import { normalizeHomepageImages } from "./homepageImagePreservation";
import originalLoader from "./homepage-loader-baseline.json";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

const html = fs.readFileSync(path.join(process.cwd(), "client/public/mysentry-homepage-v17.html"), "utf8");
const block = (id: string) => html.split(`<script id="${id}">`)[1]?.split("</script>")[0] ?? "";
const geometry = block("homepage-geometry-initializer");
const hash = (s: string) => crypto.createHash("sha256").update(s).digest("hex");

function geometryHarness(width: number, badgeTop = 435, badgeHeight = 34, deviceHeight = 206) {
  const operations: string[] = [];
  const values = new Map<string, string>();
  let minHeight = "";
  const style = {
    getPropertyValue: (n: string) => values.get(n) ?? "",
    setProperty: (n: string, v: string) => { operations.push(`write:${n}`); values.set(n, v); },
    removeProperty: (n: string) => { operations.push(`write:${n}`); values.delete(n); },
    get minHeight() { return minHeight; },
    set minHeight(v: string) { operations.push("write:minHeight"); minHeight = v; },
  };
  const read = (name: string, value: number) => { operations.push(`read:${name}`); return value; };
  const hero: any = { style };
  const copy: any = { get offsetHeight() { return read("copyHeight", badgeTop + badgeHeight); }, offsetParent: hero, offsetTop: 0 };
  const badges = { get offsetHeight() { return read("badgeHeight", badgeHeight); }, get offsetTop() { return read("badgeTop", badgeTop); }, offsetParent: copy };
  const device = { get offsetHeight() { return read("deviceHeight", deviceHeight); } };
  const faces = [140, 158, 500, 516].map(top => ({ top, get offsetHeight() { return read("portraitHeight", width <= 740 ? 69 : 112); } }));
  hero.querySelector = (selector: string) => ({ ".hero-copy": copy, ".store-badges": badges, "#heroDevice": device })[selector];
  hero.querySelectorAll = () => faces;
  const listeners: Record<string, Function> = {};
  const frames = new Map<number, Function>();
  const observers: any[] = [];
  let frameId = 0;
  const MockResizeObserver = class { constructor(fn: Function) { observers.push({ fn, observed: [] }); } observe(e: any) { observers.at(-1).observed.push(e); } };
  vm.runInNewContext(geometry, {
    document: { querySelector: () => hero },
    window: { innerWidth: width, addEventListener: (n: string, fn: Function) => { listeners[n] = fn; }, ResizeObserver: MockResizeObserver },
    ResizeObserver: MockResizeObserver,
    getComputedStyle: (e: any) => { operations.push("read:portraitTop"); return { top: `${e.top}px` }; },
    requestAnimationFrame: (fn: Function) => { frames.set(++frameId, fn); return frameId; },
    cancelAnimationFrame: (id: number) => frames.delete(id),
  });
  return { operations, values, style, listeners, frames, observers, flush: () => { const callbacks = [...frames.values()]; frames.clear(); callbacks.forEach(fn => fn()); } };
}

describe("homepage performance geometry", () => {
  it("seeds placement immediately after the hero, before parsing other sections", () => {
    expect(geometry).toBeTruthy();
    expect(html.indexOf('<script id="homepage-geometry-initializer">')).toBeLessThan(html.indexOf('<section class="intro" id="intro">'));
    expect(geometry).not.toContain("getBoundingClientRect");
    expect(geometry).not.toMatch(/addEventListener\(['"]load/);
    expect(html).toContain('<div class="hero-art-reserve" aria-hidden="true"></div>');
    expect(html).toContain('<div class="hero-orbit-anchor"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div></div>');
  });

  it("uses stable offset-parent geometry and completes all reads before any writes", () => {
    const h = geometryHarness(390);
    expect(h.values.get("--hero-art-top")).toBe("515px");
    expect(h.values.get("--hero-orbit-top")).toBe("623px");
    expect(geometry).toContain("parseFloat(copyStyle.height)");
    expect(geometry).toContain("Number.isFinite(copyEnd)?copyEnd");
    expect(h.values.get("--hero-portrait-first")).toBe("530px");
    expect(h.values.get("--hero-portrait-second")).toBe("664px");
    expect(h.style.minHeight).toBe("880px");
    const firstWrite = h.operations.findIndex(op => op.startsWith("write:"));
    expect(firstWrite).toBeGreaterThan(0);
    expect(h.operations.slice(firstWrite).some(op => op.startsWith("read:"))).toBe(false);
  });

  it("retains breakpoint gaps, artwork ratio clearance, and desktop portrait coordinates", () => {
    for (const width of [320, 599, 600, 740, 741, 999, 1000, 1440]) {
      const h = geometryHarness(width, 461, 42, 405);
      const gap = width < 600 ? 46 : width < 1000 ? 38 : 50;
      const top = 503 + gap;
      expect(h.values.get("--hero-art-top")).toBe(`${top}px`);
      expect(h.values.get("--hero-orbit-top")).toBe(`${Math.ceil(top + 405 * .52)}px`);
      expect(Number.parseInt(h.style.minHeight)).toBe(Math.max(width <= 740 ? 880 : 1010, top + 405 + 75));
      if (width > 740) expect(h.values.has("--hero-portrait-first")).toBe(false);
    }
  });

  it("coalesces invalidations, clears frame ids, and skips identical write outputs", () => {
    const h = geometryHarness(390);
    h.operations.length = 0;
    h.listeners.resize(); h.listeners.resize(); h.observers[0].fn();
    expect(h.frames.size).toBe(1);
    h.flush();
    expect(h.operations.some(op => op.startsWith("write:"))).toBe(false);
    h.listeners.resize(); expect(h.frames.size).toBe(1);
    h.listeners.pagehide(); expect(h.frames.size).toBe(0);
    expect(h.observers[0].observed).toHaveLength(2);
  });

  it("preserves all original style blocks and all unrelated script bytes, without blessing new hashes", () => {
    // Baseline hashes are from the pre-repair cad8d11 document. Only explicit authorized blocks are excluded.
    const originalStyleHTML = html.replace(/<style id="homepage-performance-geometry">[\s\S]*?<\/style>\n/, "")
      .replace(/<noscript><style>\n\/\* Preserve room for the existing no-script portrait fallback coordinates\.[\s\S]*?<\/style><\/noscript>\n/, "");
    const originalStyles = (originalStyleHTML.match(/<style[^>]*>[\s\S]*?<\/style>/g) ?? []).join("");
    expect(hash(originalStyles)).toBe("74ff1da838abe8b5ea56bb87dc77b2119c2739bd88d11b1e8e2e27b6adff6cd3");
    const protectedScripts = (html.match(/<script[^>]*>[\s\S]*?<\/script>/g) ?? [])
      .filter(s => !s.includes('id="homepage-geometry-initializer"') && !s.includes('id="mysentry-health-v13-scroll-script"'))
      .map(s => (s.includes('id="homepage-deferred-images"') ? originalLoader : s).replace(/\/\* Fine-pointer parallax:[\s\S]*?(?=const peopleArea=)/, "[PARALLAX-REVEAL]")
        .replace(/const scrollHero=document.querySelector\('#heroDevice'\);\nfunction update\(\)\{[\s\S]*?(?=let queued=false;)/, "[SCROLL-UPDATE]"))
      .join("");
    expect(hash(protectedScripts)).toBe("2726b7a33ffad61032712374d3b56ec4f2a35c10bc8aa19da7bb7b13f3148d2c");
  });

  it("retains every visible body byte, href, image attribute, section and notification outside the two wrappers", () => {
    const body = normalizeHomepageImages(html).split("<body>")[1].split("</body>")[0]
      .replace(/<script[^>]*>[\s\S]*?<\/script>/g, "")
      .replace('<div class="hero-art-reserve" aria-hidden="true"></div>', "")
      .replace('<div class="hero-orbit-anchor"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div></div>', '<div class="orbit orbit-one"></div><div class="orbit orbit-two"></div>');
    expect(hash(body)).toBe("265e41de2082a1750d7e052143ac0470aea6667fff5b65bd9d34ae3a5666906c");
  });

  it("preserves parallax and health math and fails open for reveals without IntersectionObserver", () => {
    expect(html).toContain("x+=(tx-x)*.05;y+=(ty-y)*.05");
    expect(html).toContain("(e.clientX/innerWidth-.5)*23");
    expect(html).toContain("(e.clientY/innerHeight-.5)*17");
    expect(html).toContain("x.toFixed(1)+'px'");
    expect(html).toContain("if(x!==tx||y!==ty)raf=requestAnimationFrame(tick)");
    expect(html).toContain("!document.hidden&&visible");
    expect(html).toContain("else{reveals.forEach(e=>e.classList.add('on'));}");
    const health = block("mysentry-health-v13-scroll-script");
    expect(health).toContain("current+=(target-current)*0.15");
    expect(health).toContain("(27-53*current).toFixed(2)");
    expect(health).toContain("(0.958+0.055*current).toFixed(4)");
    expect(health).toContain("Math.abs(current-target)<0.0008");
    expect(health).toContain("if(motion.matches||document.hidden||!visible)return");
    expect(health).toContain("measureRaf=requestAnimationFrame(update)");
  });
});
