import { HOMEPAGE_VERSION } from "./homepageContent";

export type HomeEvent =
  | "screen_view"
  | "cta_clicked"
  | "app_store_link_clicked"
  | "play_store_link_clicked"
  | "ring_cta_clicked"
  | "external_link_opened";
export type EventProperties = Record<string, string>;
type AnalyticsWindow = Window & {
  umami?: { track: (event: string, properties: EventProperties) => unknown };
  __mysentryAnalyticsConsent?: boolean;
};

// Do not infer consent from using the page. Integration with the owner's approved
// consent manager and complete event property specification is a release gate.
export function trackHomepageEvent(
  event: HomeEvent,
  properties: EventProperties = {}
) {
  if (typeof window === "undefined") return false;
  const analyticsWindow = window as AnalyticsWindow;
  const globalPrivacyControl = (
    window.navigator as Navigator & { globalPrivacyControl?: boolean }
  ).globalPrivacyControl;
  if (
    window.navigator.doNotTrack === "1" ||
    globalPrivacyControl ||
    analyticsWindow.__mysentryAnalyticsConsent !== true
  )
    return false;
  if (!analyticsWindow.umami?.track) return false;
  try {
    analyticsWindow.umami.track(event, {
      screen_name: "home",
      ux_version: HOMEPAGE_VERSION,
      ...properties,
    });
    return true;
  } catch {
    // Analytics must never block the user's navigation or install action.
    return false;
  }
}

export function homeLinkEvent(
  event: HomeEvent,
  id: string,
  label: string,
  destination: string,
  source: string
) {
  if (
    event === "app_store_link_clicked" ||
    event === "play_store_link_clicked"
  ) {
    return trackHomepageEvent(event, { page_name: "home", source });
  }
  if (event === "external_link_opened") {
    return trackHomepageEvent(event, {
      link_type: source,
      destination_domain: new URL(destination).hostname,
    });
  }
  return trackHomepageEvent(event, {
    cta_id: id,
    cta_label: label,
    destination,
  });
}
