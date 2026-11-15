// This utility deliberately uses the exact destinations requested for /download.
// Existing download buttons and enrollment links elsewhere remain unchanged.
export const SMART_DOWNLOAD_STORES = {
  ios: "https://apps.apple.com/us/app/mysentry-safety-health/id6740518837",
  android: "https://play.google.com/store/search?q=MySentry&c=apps",
  ring: "https://ring.com/appstore/mysentry",
} as const;

export type DownloadPlatform = "ios" | "android" | "other";
export interface DownloadDevice {
  userAgent: string;
  platform?: string;
  maxTouchPoints?: number;
  userAgentData?: { platform?: string };
}
export interface DownloadRedirectState {
  attempted?: boolean;
}

export function detectDownloadPlatform(device: DownloadDevice): DownloadPlatform {
  const ua = device.userAgent || "";
  const platform = device.platform || "";
  // iPadOS Safari can identify as a Mac. Touch alone must not classify Windows PCs.
  if (/iPhone|iPad|iPod/i.test(ua) ||
    (/Mac/i.test(platform + " " + ua) && (device.maxTouchPoints || 0) > 1)) {
    return "ios";
  }
  if (/Android/i.test(ua) || /Android/i.test(device.userAgentData?.platform || "")) {
    // Android television browsers are not phone/tablet download targets.
    if (/Android TV|AndroidTV|GoogleTV|Smart-TV|SmartTV|BRAVIA|AFT\w+|SHIELD|CrKey/i.test(ua)) return "other";
    return "android";
  }
  return "other";
}

export function attemptDownloadRedirect(
  device: DownloadDevice,
  location: { pathname: string; replace: (url: string) => void },
  state: DownloadRedirectState,
): DownloadPlatform {
  const platform = detectDownloadPlatform(device);
  if (location.pathname.replace(/\/+$/, "") !== "/download" || platform === "other" || state.attempted) return platform;
  // Set before navigating, including when navigation throws or is blocked.
  // This also prevents a React mount or back/forward restoration from retrying.
  state.attempted = true;
  try {
    location.replace(SMART_DOWNLOAD_STORES[platform]);
  } catch {
    // The landing page and ordinary store anchors remain usable.
  }
  return platform;
}

export function buildEarlyDownloadScript(): string {
  // Serialize pure functions after TypeScript compilation. No user input, device
  // hints, URL parameters, or remote scripts are interpolated into executable code.
  return `(() => {const SMART_DOWNLOAD_STORES=${JSON.stringify(SMART_DOWNLOAD_STORES)};const detectDownloadPlatform=${detectDownloadPlatform.toString()};const attemptDownloadRedirect=${attemptDownloadRedirect.toString()};try{window.__mysentrySmartDownload=window.__mysentrySmartDownload||{};attemptDownloadRedirect(navigator,window.location,window.__mysentrySmartDownload);}catch{}})();`;
}

export const DOWNLOAD_OPTIONS = [
  { key: "ios", heading: "iPhone & iPad", label: "Download on the App Store", image: "/assets/app-store-badge.webp" },
  { key: "android", heading: "Android phones & tablets", label: "Get it on Google Play", image: "/assets/google-play-badge.webp" },
  { key: "ring", heading: "Ring Appstore", label: "Explore MySentry on Ring Appstore", image: "/assets/ring-app-store-badge.webp" },
] as const;

export const DOWNLOAD_PAGE_CSS = `
.smart-download{--download-header-space:93px;width:100%;padding:calc(var(--download-header-space) + 42px) 24px 88px;background:linear-gradient(155deg,#fff 25%,#f0fbf6);color:#004f7b;font-family:Inter,Arial,sans-serif}
.smart-download-inner{max-width:1100px;margin:0 auto}
.smart-download .download-eyebrow{color:#0b6848;font-size:13px;font-weight:600;letter-spacing:.11em;text-transform:uppercase;margin:0 0 18px}
.smart-download h1{font-family:Barlow,Inter,Arial,sans-serif;font-size:clamp(34px,4.8vw,60px)!important;line-height:1.1!important;font-weight:700!important;letter-spacing:-.025em;margin:0 0 22px;color:#004f7b!important;max-width:760px}
.smart-download .download-intro{max-width:620px;font-size:18px;line-height:1.65;color:#37586a;margin:0 0 38px}
.smart-download .download-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
.smart-download .download-card{background:#fff;border:1px solid #cddde5;border-radius:22px;padding:26px 24px;box-shadow:0 10px 30px rgba(0,79,123,.04);min-width:0}
.smart-download h2{font-size:18px!important;font-weight:600!important;line-height:1.4!important;letter-spacing:normal!important;color:#004f7b!important;margin:0 0 22px}
.smart-download .download-store{display:flex;flex-direction:column;align-items:flex-start;gap:24px;text-decoration:none;color:#004f7b;font-weight:600;font-size:15px;line-height:1.5;border-radius:8px}
.smart-download .download-store img{display:block;width:auto;max-width:100%;height:46px;object-fit:contain;object-position:left}
.smart-download .download-link{display:flex;align-items:flex-start;gap:10px}
.smart-download .download-store:hover .download-link{text-decoration:underline;text-underline-offset:4px}
.smart-download a:focus-visible{outline:3px solid #007bc2;outline-offset:6px}
.smart-download .download-fallback{border-left:4px solid #0b6848;background:#fff;padding:20px 24px;margin:0 0 30px;border-radius:0 16px 16px 0;color:#37586a;max-width:740px}
.smart-download .download-fallback p{font-size:16px;line-height:1.6;margin:0 0 14px}
.smart-download .download-primary{display:inline-flex;align-items:center;gap:12px;padding:13px 22px;border-radius:999px;background:#004f7b;color:#fff!important;font-size:15px;font-weight:600;text-decoration:none}
.smart-download .download-note{font-size:14px;line-height:1.65;color:#37586a;margin:28px 0 0;max-width:720px}
@media(max-width:1279px){.smart-download{--download-header-space:78px}}
@media(max-width:640px){.smart-download{--download-header-space:74px}}
@media(max-width:760px){.smart-download{padding:calc(var(--download-header-space) + 32px) 20px 56px}.smart-download .download-grid{grid-template-columns:1fr;gap:16px}.smart-download .download-intro{font-size:16px;margin-bottom:28px}.smart-download .download-card{padding:24px}.smart-download .download-store{gap:18px}.smart-download .download-store img{height:42px}.smart-download .download-fallback{padding:18px}.smart-download h1{max-width:560px}}
`;
