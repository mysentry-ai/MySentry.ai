import { describe, expect, it, vi } from "vitest";
import vm from "node:vm";
import { readFileSync } from "node:fs";
import {
  buildEarlyDownloadScript,
  DOWNLOAD_PAGE_CSS,
  SMART_DOWNLOAD_STORES,
} from "../shared/smart-app-download";
import {
  downloadActivityPacketSchema,
  downloadActivityEventsForPacket,
} from "../shared/download-activity";
import { renderSeoHtml } from "./seo/render-seo-html";
import type { ResolvedMeta } from "./seo/resolve-meta";

const visitId = "d0879d3b-50f0-4d13-9705-c9f29e1ddcb2";
const nextVisitId = "f0879d3b-50f0-4d13-9705-c9f29e1ddcb2";
function browser({
  mobile = false,
  optOut = false,
  gpc = false,
  bot = false,
  broken = false,
  rejected = false,
  pending = false,
  blockedRedirect = false,
  prerendering = false,
  cryptoMissing = false,
  fetchMissing = false,
  device = {},
} = {}) {
  const order: string[] = [];
  const handlers: Record<string, (...args: any[]) => void> = {};
  const packets: any[] = [];
  const replace = vi.fn(() => {
    order.push("redirect");
    if (blockedRedirect) throw new Error("Navigation blocked");
  });
  const fetch = vi.fn((_url, options) => {
    order.push("track");
    packets.push(JSON.parse(options.body).json);
    if (broken) throw new Error("Offline");
    if (rejected) return Promise.reject(new Error("Offline"));
    if (pending) return new Promise(() => {});
    return Promise.resolve({ ok: true });
  });
  const navigator = {
    userAgent: bot
      ? mobile ? "iPhone Googlebot" : "Googlebot"
      : mobile ? "iPhone Safari" : "Windows Chrome",
    platform: mobile ? "iPhone" : "Win32",
    maxTouchPoints: mobile ? 5 : 0,
    doNotTrack: optOut ? "1" : "0",
    globalPrivacyControl: gpc,
    ...device,
  };
  const document = {
    prerendering,
    addEventListener: vi.fn((event, handler) => {
      handlers[event] = handler;
    }),
  };
  const window: Record<string, any> = {
    location: { pathname: "/download", replace },
    fetch: fetchMissing ? undefined : fetch,
  };
  // Fail the test if the collector ever accesses persistent browser storage.
  for (const key of ["localStorage", "sessionStorage"]) {
    Object.defineProperty(window, key, { get: () => { throw new Error("Persistent identity forbidden"); } });
  }
  Object.defineProperty(document, "cookie", { get: () => { throw new Error("Cookies forbidden"); } });
  class Element {
    dataset: { downloadStore?: string };
    constructor(store?: string) { this.dataset = { downloadStore: store }; }
    closest(selector: string) {
      return selector === "a[data-download-store]" ? this : null;
    }
  }
  const randomUUID = vi.fn()
    .mockReturnValueOnce(visitId)
    .mockReturnValue(nextVisitId);
  const context = vm.createContext({
    navigator,
    window,
    document,
    Element,
    crypto: cryptoMissing ? undefined : { randomUUID },
  });
  const run = () => vm.runInContext(buildEarlyDownloadScript(), context);
  const click = (store: string, options: Record<string, unknown> = {}) => {
    const event = {
      type: "click", button: 0, detail: 1, defaultPrevented: false,
      target: new Element(store), preventDefault: vi.fn(), ...options,
    };
    handlers[String(event.type)](event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  };
  return { window, navigator, document, handlers, packets, fetch, replace, order, run, click };
}

describe("anonymous smart-link activity", () => {
  it("records a desktop arrival once before and after React would mount", () => {
    const b = browser();
    b.run();
    b.run();
    expect(b.fetch).toHaveBeenCalledTimes(1);
    expect(b.replace).not.toHaveBeenCalled();
    expect(b.packets).toEqual([{ kind: "arrival", visitId, platform: "other" }]);
    expect(b.fetch.mock.calls[0][0]).toBe("/api/trpc/downloadActivity.record");
    expect(b.fetch.mock.calls[0][1]).toMatchObject({
      keepalive: true, credentials: "omit", referrerPolicy: "no-referrer",
    });
    expect(b.document.addEventListener).toHaveBeenCalledTimes(2);
  });
  it("queues the iPhone visit and redirect attempt before exactly one immediate redirect", () => {
    const b = browser({ mobile: true });
    b.run();
    b.run();
    expect(b.order).toEqual(["track", "redirect"]);
    expect(b.packets[0]).toEqual({ kind: "arrival", visitId, platform: "ios", autoStore: "ios" });
    expect(b.replace).toHaveBeenCalledWith(SMART_DOWNLOAD_STORES.ios);
  });
  it.each([
    ["desktop-mode iPad", { userAgent: "Macintosh Safari", platform: "MacIntel", maxTouchPoints: 5 }, "ios"],
    ["Android phone", { userAgent: "Linux Android 15 Mobile Safari", platform: "Linux", maxTouchPoints: 5 }, "android"],
    ["Android tablet", { userAgent: "Linux Android 15 Safari", platform: "Linux", maxTouchPoints: 5 }, "android"],
  ] as const)("records an immediate %s redirect attempt", (_name, device, store) => {
    const b = browser({ device });
    b.run();
    expect(b.order).toEqual(["track", "redirect"]);
    expect(b.packets[0]).toMatchObject({ platform: store, autoStore: store });
    expect(b.replace).toHaveBeenCalledWith(SMART_DOWNLOAD_STORES[store]);
  });
  it.each([
    { optOut: true }, { gpc: true }, { bot: true },
    { cryptoMissing: true }, { fetchMissing: true },
    { device: { doNotTrack: "yes" } }, { device: { msDoNotTrack: "1" } },
  ])("keeps mobile navigation working when counting is suppressed: %j", options => {
    const b = browser({ mobile: true, ...options });
    b.run();
    expect(b.fetch).not.toHaveBeenCalled();
    expect(b.replace).toHaveBeenCalledOnce();
  });
  it.each([{ broken: true }, { rejected: true }, { pending: true }])(
    "never awaits activity delivery or cancels the redirect: %j", async options => {
      const b = browser({ mobile: true, ...options });
      b.run();
      expect(b.replace).toHaveBeenCalledOnce();
      expect(b.order).toEqual(["track", "redirect"]);
      await Promise.resolve();
    }
  );
  it("waits for prerender activation before counting or redirecting", () => {
    const b = browser({ mobile: true, prerendering: true });
    b.run();
    expect(b.fetch).not.toHaveBeenCalled();
    expect(b.replace).not.toHaveBeenCalled();
    b.document.prerendering = false;
    b.handlers.prerenderingchange();
    expect(b.fetch).toHaveBeenCalledOnce();
    expect(b.replace).toHaveBeenCalledOnce();
  });
  it.each([
    ["left click", { type: "click", button: 0, detail: 1 }],
    ["middle click", { type: "auxclick", button: 1, detail: 1 }],
    ["keyboard activation", { type: "click", button: 0, detail: 0 }],
  ])("records %s on delegated store anchors without intercepting navigation", (_name, event) => {
    const b = browser();
    b.run();
    b.click("ring", event);
    expect(b.packets[1]).toEqual({ kind: "store_click", visitId, platform: "other", store: "ring" });
  });
  it("deduplicates arrival and repeated clicks per navigation per store, including left/middle/keyboard", () => {
    const b = browser();
    b.run();
    b.run();
    for (const store of ["ios", "android", "ring"]) {
      b.click(store);
      b.click(store, { type: "auxclick", button: 1 });
      b.click(store, { detail: 0 });
    }
    expect(b.packets).toHaveLength(4);
    expect(b.packets.slice(1).map(packet => packet.store)).toEqual(["ios", "android", "ring"]);
  });
  it("counts a mobile fallback click even when the immediate redirect was blocked", () => {
    const b = browser({ mobile: true, blockedRedirect: true });
    expect(() => b.run()).not.toThrow();
    b.click("ios");
    b.click("ios", { type: "auxclick", button: 1 });
    expect(b.packets).toHaveLength(2);
    expect(b.packets[1]).toEqual({ kind: "store_click", visitId, platform: "ios", store: "ios" });
    expect(b.replace).toHaveBeenCalledOnce();
  });
  it("ignores right clicks, cancelled clicks, invalid stores, non-elements and unrelated routes", () => {
    const b = browser();
    b.run();
    b.click("ios", { type: "auxclick", button: 2 });
    b.click("ios", { defaultPrevented: true });
    b.click("unknown");
    b.click("ring", { target: {} });
    b.window.location.pathname = "/pricing";
    b.click("android");
    expect(b.packets).toHaveLength(1);
  });
  it("respects an opt-out enabled after arrival before a store click", () => {
    const b = browser();
    b.run();
    b.navigator.globalPrivacyControl = true;
    b.click("ring");
    expect(b.packets).toHaveLength(1);
  });
  it("handles trailing slash navigation without reading or sending campaign/query/referrer data", () => {
    const b = browser();
    b.window.location.pathname = "/download/";
    b.window.location.search = "?email=private@example.invalid&utm_source=campaign";
    b.run();
    b.click("ring");
    expect(b.packets).toEqual([
      { kind: "arrival", visitId, platform: "other" },
      { kind: "store_click", visitId, platform: "other", store: "ring" },
    ]);
  });
  it("uses only navigation-scoped fields and recovers an arrival from a click packet", () => {
    const packet = downloadActivityPacketSchema.parse({ kind: "store_click", visitId, platform: "other", store: "ring" });
    expect(downloadActivityEventsForPacket(packet, 1770000000000)).toEqual([
      { visitId, platform: "other", receivedAt: 1770000000000, eventType: "visit", store: "none" },
      { visitId, platform: "other", receivedAt: 1770000000000, eventType: "store_click", store: "ring" },
    ]);
  });
  it("creates a fresh visit after SPA departure while keeping the delegated listener single", () => {
    const b = browser();
    b.run();
    b.click("ring");
    // The Download component clears only navigation-scoped state on departure.
    delete b.window.__mysentryDownloadActivity;
    delete b.window.__mysentrySmartDownload;
    b.run();
    b.click("ring");
    expect(b.packets.map(packet => packet.visitId)).toEqual([visitId, visitId, nextVisitId, nextVisitId]);
    expect(b.document.addEventListener).toHaveBeenCalledTimes(2);
    const page = readFileSync("client/src/pages/Download.tsx", "utf8");
    expect(page).toContain("delete window.__mysentryDownloadActivity");
    expect(page).toContain("delete window.__mysentrySmartDownload");
  });
  it("instruments both current React and early fallback anchors while preserving current 740px CSS and image handling", () => {
    const meta: ResolvedMeta = {
      title: "Download MySentry", description: "Choose your store.", canonicalPath: "/download",
      robots: "noindex,follow", ogType: "website", ogImage: "", found: true,
      routeType: "static", heading: "Download MySentry.", summary: "Choose your store.",
    };
    const html = renderSeoHtml('<html><head><title>Default</title></head><body><div id="root"></div></body></html>', meta);
    for (const store of ["ios", "android", "ring"]) expect(html).toContain(`data-download-store="${store}"`);
    const page = readFileSync("client/src/pages/Download.tsx", "utf8");
    expect(page).toContain("data-download-store={primary.key}");
    expect(page).toContain("data-download-store={option.key}");
    expect(page).toContain("<PerformanceImage src={option.image}");
    expect(DOWNLOAD_PAGE_CSS).toContain("@media(max-width:740px)");
    expect(DOWNLOAD_PAGE_CSS).not.toContain("@media(max-width:640px)");
  });
  it.each([
    { kind: "arrival", visitId, platform: "other", autoStore: "ios" },
    { kind: "arrival", visitId, platform: "ios", autoStore: "ring" },
    { kind: "arrival", visitId: "invalid", platform: "other" },
    { kind: "arrival", visitId, platform: "other", email: "should-not-be-stored@example.invalid" },
    { kind: "store_click", visitId, platform: "other", store: "unknown" },
  ])("rejects invalid or extra activity fields: %j", packet => {
    expect(downloadActivityPacketSchema.safeParse(packet).success).toBe(false);
  });
});
