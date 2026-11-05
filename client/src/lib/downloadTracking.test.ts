import { describe, expect, it, vi } from "vitest";
import { SMART_DOWNLOAD_STORES } from "@shared/smart-app-download";
import { DOWNLOAD_STORE_CLICK_EVENT, trackDownloadStoreClick, type DownloadStore } from "./downloadTracking";

const stores: Array<[DownloadStore, string]> = [
  ["ios", "apple_app_store"],
  ["android", "google_play"],
  ["ring", "ring_appstore"],
];

describe("desktop download store click tracking", () => {
  it.each(stores)("tracks one %s click per provider with a distinct store value", (key, name) => {
    const track = vi.fn();
    const fbq = vi.fn();
    trackDownloadStoreClick(key, { umami: { track }, fbq });
    const data = { store: name, destination_url: SMART_DOWNLOAD_STORES[key], page_path: "/download", placement: "desktop_store_options" };
    expect(track).toHaveBeenCalledTimes(1);
    expect(track).toHaveBeenCalledWith(DOWNLOAD_STORE_CLICK_EVENT, data);
    expect(fbq).toHaveBeenCalledTimes(1);
    expect(fbq).toHaveBeenCalledWith("trackCustom", DOWNLOAD_STORE_CLICK_EVENT, data);
    expect(fbq).not.toHaveBeenCalledWith("track", "CompleteRegistration", expect.anything());
    expect(Object.keys(data)).toEqual(["store", "destination_url", "page_path", "placement"]);
  });

  it("is safe without analytics or a browser", () => {
    expect(() => trackDownloadStoreClick("ios", {})).not.toThrow();
    expect(() => trackDownloadStoreClick("android")).not.toThrow();
  });

  it("does not block Meta when Umami throws", () => {
    const fbq = vi.fn();
    expect(() => trackDownloadStoreClick("ring", { umami: { track: () => { throw new Error("Blocked"); } }, fbq })).not.toThrow();
    expect(fbq).toHaveBeenCalledOnce();
  });

  it("does not block the link when Meta throws", () => {
    const track = vi.fn();
    expect(() => trackDownloadStoreClick("ios", { umami: { track }, fbq: () => { throw new Error("Blocked"); } })).not.toThrow();
    expect(track).toHaveBeenCalledOnce();
  });

  it("handles an asynchronous Umami rejection without awaiting navigation", async () => {
    const fbq = vi.fn();
    expect(trackDownloadStoreClick("android", { umami: { track: () => Promise.reject(new Error("Offline")) }, fbq })).toBeUndefined();
    expect(fbq).toHaveBeenCalledOnce();
    await new Promise(resolve => setTimeout(resolve, 0));
  });
});
