import { describe, expect, it, vi } from "vitest";
import vm from "node:vm";
import fs from "node:fs";
import {
  attemptDownloadRedirect,
  buildEarlyDownloadScript,
  detectDownloadPlatform,
  SMART_DOWNLOAD_STORES,
  type DownloadDevice,
} from "../shared/smart-app-download";
import { renderSeoHtml } from "./seo/render-seo-html";
import { isNoindexPath } from "../shared/seo/indexability";
import type { ResolvedMeta } from "./seo/resolve-meta";

const devices: Array<[string, DownloadDevice, string]> = [
  ["iPhone", { userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)", platform: "iPhone", maxTouchPoints: 5 }, "ios"],
  ["iPad", { userAgent: "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X)", platform: "iPad", maxTouchPoints: 5 }, "ios"],
  ["desktop-mode iPad", { userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) Version/18.0 Safari/605.1", platform: "MacIntel", maxTouchPoints: 5 }, "ios"],
  ["desktop-mode iPad without platform", { userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)", maxTouchPoints: 5 }, "ios"],
  ["Android phone", { userAgent: "Mozilla/5.0 (Linux; Android 15; Pixel 8) Mobile Safari/537.36", maxTouchPoints: 5 }, "android"],
  ["Android tablet", { userAgent: "Mozilla/5.0 (Linux; Android 15; SM-X700) Safari/537.36", maxTouchPoints: 5 }, "android"],
  ["Android client hints", { userAgent: "Mozilla/5.0", userAgentData: { platform: "Android" } }, "android"],
  ["Windows desktop", { userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)", platform: "Win32", maxTouchPoints: 0 }, "other"],
  ["Windows touch laptop", { userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)", platform: "Win32", maxTouchPoints: 10 }, "other"],
  ["Mac desktop", { userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15)", platform: "MacIntel", maxTouchPoints: 0 }, "other"],
  ["Linux desktop", { userAgent: "Mozilla/5.0 (X11; Linux x86_64)", platform: "Linux x86_64" }, "other"],
  ["unsupported television", { userAgent: "Mozilla/5.0 (Linux; Android TV; SHIELD)" }, "other"],
  ["unknown device", { userAgent: "" }, "other"],
];

const meta = (path: string): ResolvedMeta => ({
  title: "Download MySentry | MySentry", description: "Choose your store.",
  canonicalPath: path, ogType: "website", ogImage: "https://mysentry.ai/images/og-default.jpg",
  robots: path === "/download" ? "noindex,follow" : "index,follow", found: true,
  routeType: "static", heading: "Download MySentry.", summary: "Choose your store.",
});
const template = '<html><head><title>Default</title></head><body><div id="root"></div><script type="module" src="/app.js"></script></body></html>';

describe("smart app download", () => {
  it.each(devices)("detects %s without confusing desktop touchscreens", (_name, device, expected) => {
    expect(detectDownloadPlatform(device)).toBe(expected);
  });

  it.each(devices)("runs early redirect JavaScript for %s without needing the React bundle", (_name, device, expected) => {
    const replace = vi.fn();
    const window: Record<string, unknown> = { location: { pathname: "/download", replace } };
    const context = vm.createContext({ navigator: device, window });
    vm.runInContext(buildEarlyDownloadScript(), context);
    vm.runInContext(buildEarlyDownloadScript(), context);
    if (expected === "other") expect(replace).not.toHaveBeenCalled();
    else {
      expect(replace).toHaveBeenCalledTimes(1);
      expect(replace).toHaveBeenCalledWith(SMART_DOWNLOAD_STORES[expected as "ios" | "android"]);
      expect(window.__mysentrySmartDownload).toEqual({ attempted: true });
    }
  });

  it("uses the user's exact URLs, without changing existing homepage app links", () => {
    expect(SMART_DOWNLOAD_STORES).toEqual({
      ios: "https://apps.apple.com/us/app/mysentry-safety-health/id6740518837",
      android: "https://play.google.com/store/search?q=MySentry&c=apps",
      ring: "https://ring.com/appstore/mysentry",
    });
    expect(fs.readFileSync("client/public/mysentry-homepage-v17.html", "utf8")).toContain("https://play.google.com/store/apps/details?id=com.eagleeye.mysentry");
  });

  it("handles a blocked redirect once and tolerates trailing slash and campaign parameters", () => {
    const state = {};
    const replace = vi.fn(() => { throw new Error("Navigation blocked"); });
    const location = { pathname: "/download/", replace };
    expect(() => attemptDownloadRedirect(devices[0][1], location, state)).not.toThrow();
    attemptDownloadRedirect(devices[0][1], location, state);
    expect(replace).toHaveBeenCalledTimes(1);
    expect(replace).toHaveBeenCalledWith(SMART_DOWNLOAD_STORES.ios);
  });

  it("never redirects another website route or selects Ring automatically", () => {
    const replace = vi.fn();
    attemptDownloadRedirect(devices[0][1], { pathname: "/pricing", replace }, {});
    attemptDownloadRedirect(devices[7][1], { pathname: "/download", replace }, {});
    expect(replace).not.toHaveBeenCalled();
  });

  it("includes early script and usable fallback links only on the download route", () => {
    const html = renderSeoHtml(template, meta("/download"));
    expect(html.indexOf('id="mysentry-smart-download"')).toBeLessThan(html.indexOf('type="module"'));
    expect(html).toContain('href="https://apps.apple.com/us/app/mysentry-safety-health/id6740518837"');
    expect(html).toContain('href="https://play.google.com/store/search?q=MySentry&amp;c=apps"');
    expect(html).toContain('href="https://ring.com/appstore/mysentry"');
    expect(html).toContain('href="https://mysentry.ai/download"');
    expect(html).toContain('content="noindex,follow"');
    expect(html).not.toContain('http-equiv="refresh"');
    for (const path of ["/", "/features", "/pricing", "/privacy", "/contact"]) {
      const ordinary = renderSeoHtml(template, meta(path));
      expect(ordinary).not.toContain('id="mysentry-smart-download"');
      expect(ordinary).not.toContain(".smart-download{");
    }
  });

  it("keeps utility indexability isolated", () => {
    expect(isNoindexPath("/download")).toBe(true);
    expect(isNoindexPath("/download/")).toBe(true);
    expect(isNoindexPath("/features")).toBe(false);
    expect(isNoindexPath("/pricing")).toBe(false);
  });
});
