import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

const read = (file: string) => fs.readFileSync(path.join(process.cwd(), file), "utf8");
const html = read("client/public/mysentry-homepage-v17.html");
const manifest = JSON.parse(read("shared/homepage-artwork-manifest.json"));
const loader = html.split('<script id="homepage-deferred-images">')[1].split("</script>")[0];

describe("homepage portable artwork performance", () => {
  it("preserves all public markup, words, links and animation classes apart from image attributes", () => {
    const body = html.split("<body")[1].replace(/<script[^>]*>[\s\S]*?<\/script>/g, "").replace(/<img\b[^>]*>/g, "<img>");
    expect(crypto.createHash("sha256").update(body).digest("hex")).toBe("5b5fc0b4ef5cfd00afc972bd1857f57f7e1c48f010c5ba4fed100e369880b2d0");
  });

  it("packages 24 hashed public artwork files without runtime cloud credentials", () => {
    expect(manifest.assets).toHaveLength(24);
    for (const asset of manifest.assets) {
      expect(asset.file).toMatch(/^[a-z0-9.-]+\.[a-f0-9]{12}\.webp$/);
      expect(asset.sha256).toMatch(/^[a-f0-9]{64}$/);
      expect(new URL(asset.url).origin).toBe("https://files.manuscdn.com");
      expect(asset.bytes).toBeGreaterThan(0);
      expect(html).toContain("/homepage-art/" + asset.file);
    }
    const build = JSON.parse(read("package.json")).scripts.build;
    expect(build).toContain("--output dist/public/homepage-art");
    const script = read("scripts/prepare-homepage-artwork.mjs");
    expect(script).toContain("Artwork checksum mismatch");
    expect(script).toContain("AbortSignal.timeout(25000)");
    expect(script).not.toMatch(/DATABASE_URL|forgeApiKey|\.env/);
  });

  it("preloads only the visible hero and logo with matching responsive selection", () => {
    const preloads = html.match(/<link[^>]+rel="preload"[^>]*>/g) ?? [];
    expect(preloads).toHaveLength(2);
    for (const preload of preloads) {
      const set = preload.match(/imagesrcset="([^"]+)"/)![1];
      const sizes = preload.match(/imagesizes="([^"]+)"/)![1];
      expect(html).toContain('srcset="' + set + '" sizes="' + sizes + '"');
      expect(preload).toContain('fetchpriority="high"');
    }
    expect(html).toContain("badges.offsetHeight");
    expect(html).toContain("el=el.offsetParent");
  });

  it("loads the active scene first and only the next scene after decode instead of bursting all five", async () => {
    let ready!: () => void;
    const order: string[] = [];
    const image = (name: string) => ({
      dataset: { deferredSrc: name + ".webp", deferredSrcset: name + ".webp 960w" },
      matches: () => true,
      set loading(_: string) {}, set decoding(_: string) {}, set srcset(_: string) {},
      set src(_: string) { order.push(name); },
      decode: () => name === "active" ? new Promise<void>(resolve => { ready = resolve; }) : Promise.resolve(),
    });
    const active = Object.assign(image("active"), { dataset: { deferredSrc: "active.webp", deferredSrcset: "active.webp 960w", scene: "0" } });
    const next = image("next");
    const area = {
      getBoundingClientRect: () => ({ top: 400, bottom: 4000 }),
      querySelector: (selector: string) => selector === ".scene-art.active" ? active : selector === 'img.scene-art[data-scene="1"]' ? next : null,
    };
    const callbacks: ((entries: unknown[]) => void)[] = [];
    const context = { window: { IntersectionObserver: true }, innerHeight: 844, document: { getElementById: (id: string) => id === "how" ? area : null },
      IntersectionObserver: class { constructor(callback: (entries: unknown[]) => void) { callbacks.push(callback); } observe() {} }, Promise, Number };
    vm.runInNewContext(loader, context);
    callbacks[0]([{ target: area, isIntersecting: true }]);
    expect(order).toEqual(["active"]);
    ready();
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(order).toEqual(["active", "next"]);
  });
});
