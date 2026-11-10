import { describe, expect, it, vi } from "vitest";
import vm from "node:vm";
import {
  buildEarlyDownloadScript,
  SMART_DOWNLOAD_STORES,
} from "../shared/smart-app-download";
import {
  downloadActivityPacketSchema,
  downloadActivityEventsForPacket,
} from "../shared/download-activity";

const visitId = "d0879d3b-50f0-4d13-9705-c9f29e1ddcb2";
function browser({
  mobile = false,
  optOut = false,
  gpc = false,
  bot = false,
  broken = false,
  prerendering = false,
  cryptoMissing = false,
} = {}) {
  const order: string[] = [];
  const handlers: Record<string, (...args: any[]) => void> = {};
  const packets: any[] = [];
  const replace = vi.fn(() => {
    order.push("redirect");
  });
  const fetch = vi.fn((_url, options) => {
    order.push("track");
    packets.push(JSON.parse(options.body).json);
    if (broken) throw new Error("Offline");
    return Promise.resolve({ ok: true });
  });
  const navigator = {
    userAgent: bot
      ? mobile
        ? "iPhone Googlebot"
        : "Googlebot"
      : mobile
        ? "iPhone Safari"
        : "Windows Chrome",
    platform: mobile ? "iPhone" : "Win32",
    maxTouchPoints: mobile ? 5 : 0,
    doNotTrack: optOut ? "1" : "0",
    globalPrivacyControl: gpc,
  };
  const document = {
    prerendering,
    addEventListener: vi.fn((event, handler) => {
      handlers[event] = handler;
    }),
  };
  const window: Record<string, any> = {
    location: { pathname: "/download", replace },
    fetch,
  };
  const context = vm.createContext({
    navigator,
    window,
    document,
    crypto: cryptoMissing ? undefined : { randomUUID: () => visitId },
  });
  const run = () => vm.runInContext(buildEarlyDownloadScript(), context);
  return {
    window,
    navigator,
    document,
    handlers,
    packets,
    fetch,
    replace,
    order,
    run,
  };
}

describe("anonymous smart-link activity", () => {
  it("records a desktop arrival once before and after React would mount", () => {
    const b = browser();
    b.run();
    b.run();
    expect(b.fetch).toHaveBeenCalledTimes(1);
    expect(b.replace).not.toHaveBeenCalled();
    expect(b.packets).toEqual([
      { kind: "arrival", visitId, platform: "other" },
    ]);
    expect(b.fetch.mock.calls[0][0]).toBe("/api/trpc/downloadActivity.record");
    expect(b.fetch.mock.calls[0][1]).toMatchObject({
      keepalive: true,
      credentials: "omit",
      referrerPolicy: "no-referrer",
    });
    expect(b.document.addEventListener).toHaveBeenCalledTimes(2);
  });
  it("queues the iPhone visit and redirect attempt before exactly one immediate redirect", () => {
    const b = browser({ mobile: true });
    b.run();
    b.run();
    expect(b.order).toEqual(["track", "redirect"]);
    expect(b.packets[0]).toEqual({
      kind: "arrival",
      visitId,
      platform: "ios",
      autoStore: "ios",
    });
    expect(b.replace).toHaveBeenCalledWith(SMART_DOWNLOAD_STORES.ios);
  });
  it.each([
    { optOut: true },
    { gpc: true },
    { bot: true },
    { cryptoMissing: true },
  ])(
    "keeps mobile navigation working when counting is suppressed: %j",
    options => {
      const b = browser({ mobile: true, ...options });
      b.run();
      expect(b.fetch).not.toHaveBeenCalled();
      expect(b.replace).toHaveBeenCalledOnce();
    }
  );
  it("does not delay or cancel a mobile redirect when activity delivery throws", () => {
    const b = browser({ mobile: true, broken: true });
    b.run();
    expect(b.replace).toHaveBeenCalledOnce();
    expect(b.order).toEqual(["track", "redirect"]);
  });
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
  it("uses only navigation-scoped event fields and recovers an arrival from a click packet", () => {
    const packet = downloadActivityPacketSchema.parse({
      kind: "store_click",
      visitId,
      platform: "other",
      store: "ring",
    });
    expect(downloadActivityEventsForPacket(packet, 1770000000000)).toEqual([
      {
        visitId,
        platform: "other",
        receivedAt: 1770000000000,
        eventType: "visit",
        store: "none",
      },
      {
        visitId,
        platform: "other",
        receivedAt: 1770000000000,
        eventType: "store_click",
        store: "ring",
      },
    ]);
  });
  it("creates a fresh visit after SPA departure while keeping the global delegated listener single", () => {
    const b = browser();
    b.run();
    delete b.window.__mysentryDownloadActivity;
    delete b.window.__mysentrySmartDownload;
    b.run();
    expect(b.fetch).toHaveBeenCalledTimes(2);
    expect(b.document.addEventListener).toHaveBeenCalledTimes(2);
  });
  it.each([
    { kind: "arrival", visitId, platform: "other", autoStore: "ios" },
    { kind: "arrival", visitId, platform: "ios", autoStore: "ring" },
    { kind: "arrival", visitId: "invalid", platform: "other" },
    {
      kind: "arrival",
      visitId,
      platform: "other",
      email: "should-not-be-stored@example.invalid",
    },
    { kind: "store_click", visitId, platform: "other", store: "unknown" },
  ])("rejects invalid or extra activity fields: %j", packet => {
    expect(downloadActivityPacketSchema.safeParse(packet).success).toBe(false);
  });
});
