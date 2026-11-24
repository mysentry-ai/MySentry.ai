import type { DownloadActivityPacket } from "./download-activity";
import type { DownloadPlatform } from "./smart-app-download";

export interface DownloadActivityBrowserState {
  visitId: string;
  platform: DownloadPlatform;
  arrivalSent: boolean;
  seenStores: Partial<Record<"ios" | "android" | "ring", boolean>>;
}
declare global {
  interface Window {
    __mysentryDownloadActivity?: DownloadActivityBrowserState;
    __mysentryDownloadActivityListeners?: boolean;
  }
}

export function downloadActivityAllowed(): boolean {
  try {
    const nav = navigator as Navigator & {
      globalPrivacyControl?: boolean;
      msDoNotTrack?: string;
    };
    return (
      nav.doNotTrack !== "1" &&
      nav.doNotTrack !== "yes" &&
      nav.msDoNotTrack !== "1" &&
      !nav.globalPrivacyControl &&
      !/bot\b|crawler|spider|slurp|facebookexternalhit|facebot|twitterbot|linkedinbot|whatsapp|telegrambot|preview|lighthouse|googleother|bingpreview/i.test(
        nav.userAgent || ""
      )
    );
  } catch {
    return false;
  }
}

export function createDownloadVisitId(): string | null {
  try {
    if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
    const bytes = crypto.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 15) | 64;
    bytes[8] = (bytes[8] & 63) | 128;
    const hex = Array.from(bytes, byte =>
      byte.toString(16).padStart(2, "0")
    ).join("");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
  } catch {
    return null;
  }
}

export function sendDownloadActivityPacket(
  packet: DownloadActivityPacket
): void {
  try {
    if (!downloadActivityAllowed() || typeof window.fetch !== "function")
      return;
    void window
      .fetch("/api/trpc/downloadActivity.record", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ json: packet }),
        keepalive: true,
        credentials: "omit",
        referrerPolicy: "no-referrer",
      })
      .catch(() => {});
  } catch {
    /* Recording failure must never interfere with the store link. */
  }
}

export function recordFirstPartyDownloadStoreClick(
  store: "ios" | "android" | "ring"
): void {
  const state = window.__mysentryDownloadActivity;
  if (!state || !downloadActivityAllowed() || state.seenStores[store]) return;
  state.seenStores[store] = true;
  sendDownloadActivityPacket({
    kind: "store_click",
    visitId: state.visitId,
    platform: state.platform,
    store,
  });
}

export function handleDownloadActivityClick(event: MouseEvent): void {
  if (
    window.location.pathname.replace(/\/+$/, "") !== "/download" ||
    (event.type === "auxclick" && event.button !== 1) ||
    (event.type === "click" && event.button !== 0) ||
    event.defaultPrevented
  )
    return;
  const element =
    event.target instanceof Element
      ? event.target.closest<HTMLAnchorElement>("a[data-download-store]")
      : null;
  const store = element?.dataset.downloadStore;
  if (store === "ios" || store === "android" || store === "ring")
    recordFirstPartyDownloadStoreClick(store);
}

export function installDownloadActivityClickListeners(): void {
  if (window.__mysentryDownloadActivityListeners) return;
  document.addEventListener("click", handleDownloadActivityClick, true);
  document.addEventListener("auxclick", handleDownloadActivityClick, true);
  window.__mysentryDownloadActivityListeners = true;
}

export function initializeDownloadActivity(
  platform: DownloadPlatform,
  automaticRedirect: boolean
): void {
  try {
    if (
      window.location.pathname.replace(/\/+$/, "") !== "/download" ||
      !downloadActivityAllowed()
    )
      return;
    if ((document as Document & { prerendering?: boolean }).prerendering) {
      document.addEventListener(
        "prerenderingchange",
        () => initializeDownloadActivity(platform, automaticRedirect),
        { once: true }
      );
      return;
    }
    if (!window.__mysentryDownloadActivity) {
      const visitId = createDownloadVisitId();
      if (!visitId) return;
      window.__mysentryDownloadActivity = {
        visitId,
        platform,
        arrivalSent: false,
        seenStores: {},
      };
    }
    const state = window.__mysentryDownloadActivity;
    if (!state.arrivalSent) {
      state.arrivalSent = true;
      sendDownloadActivityPacket({
        kind: "arrival",
        visitId: state.visitId,
        platform,
        ...(automaticRedirect && platform !== "other"
          ? { autoStore: platform }
          : {}),
      });
    }
    installDownloadActivityClickListeners();
  } catch {
    /* The download and fallback options remain usable. */
  }
}

export function buildDownloadActivityBrowserFunctions(): string {
  return [
    downloadActivityAllowed,
    createDownloadVisitId,
    sendDownloadActivityPacket,
    recordFirstPartyDownloadStoreClick,
    handleDownloadActivityClick,
    installDownloadActivityClickListeners,
    initializeDownloadActivity,
  ]
    .map(fn => `const ${fn.name}=${fn.toString()};`)
    .join("");
}
