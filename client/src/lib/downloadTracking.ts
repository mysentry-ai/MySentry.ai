import { SMART_DOWNLOAD_STORES } from "@shared/smart-app-download";

export const DOWNLOAD_STORE_CLICK_EVENT = "DownloadStoreClick";
export type DownloadStore = keyof typeof SMART_DOWNLOAD_STORES;

interface DownloadAnalytics {
  umami?: { track: (name: string, data: Record<string, string>) => unknown };
  fbq?: (action: string, name: string, data: Record<string, string>) => unknown;
}

const STORE_NAMES: Record<DownloadStore, string> = {
  ios: "apple_app_store",
  android: "google_play",
  ring: "ring_appstore",
};

/** Counts an outbound click, not an install, signup, or purchase. */
export function trackDownloadStoreClick(
  store: DownloadStore,
  analytics: DownloadAnalytics | undefined = typeof window === "undefined"
    ? undefined
    : window as unknown as DownloadAnalytics,
): void {
  const data = {
    store: STORE_NAMES[store],
    destination_url: SMART_DOWNLOAD_STORES[store],
    page_path: "/download",
    placement: "desktop_store_options",
  };

  // Reuse existing SDKs; do not delay navigation or collect user/query details.
  // Keep providers independent so one blocked tracker cannot prevent the other.
  try {
    if (typeof analytics?.umami?.track === "function") {
      void Promise.resolve(analytics.umami.track(DOWNLOAD_STORE_CLICK_EVENT, data)).catch(() => {});
    }
  } catch {
    // Missing, blocked, or failed analytics must not interfere with the link.
  }
  try {
    if (typeof analytics?.fbq === "function") {
      analytics.fbq("trackCustom", DOWNLOAD_STORE_CLICK_EVENT, data);
    }
  } catch {
    // The ordinary anchor remains the navigation mechanism.
  }
}
