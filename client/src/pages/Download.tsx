import PerformanceImage from "@/components/PerformanceImage";
import { useLayoutEffect, useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { ROUTE_META } from "@shared/seo/route-meta";
import { trackDownloadStoreClick } from "@/lib/downloadTracking";
import { downloadActivityAllowed, initializeDownloadActivity } from "@shared/download-activity-browser";
import {
  attemptDownloadRedirect,
  detectDownloadPlatform,
  DOWNLOAD_OPTIONS,
  DOWNLOAD_PAGE_CSS,
  SMART_DOWNLOAD_STORES,
  type DownloadDevice,
  type DownloadRedirectState,
} from "@shared/smart-app-download";

declare global {
  interface Window {
    __mysentrySmartDownload?: DownloadRedirectState;
  }
}

export default function Download() {
  const [platform] = useState(() => typeof navigator === "undefined"
    ? "other"
    : detectDownloadPlatform(navigator as DownloadDevice));

  useLayoutEffect(() => {
    window.__mysentrySmartDownload ??= {};
    const start = () => {
      initializeDownloadActivity(platform, platform !== "other" && !window.__mysentrySmartDownload?.attempted);
      attemptDownloadRedirect(navigator as DownloadDevice, window.location, window.__mysentrySmartDownload!);
    };
    if ((document as Document & { prerendering?: boolean }).prerendering) {
      document.addEventListener("prerenderingchange", start, { once: true });
    } else {
      start();
    }
    return () => {
      document.removeEventListener("prerenderingchange", start);
      if (window.location.pathname.replace(/\/+$/, "") !== "/download") {
        delete window.__mysentryDownloadActivity;
        delete window.__mysentrySmartDownload;
      }
    };
  }, [platform]);

  const primary = platform === "other" ? null : DOWNLOAD_OPTIONS.find(option => option.key === platform);

  return (
    <Layout>
      <SEO title={ROUTE_META["/download"].title} description={ROUTE_META["/download"].description} canonical="https://mysentry.ai/download" noindex />
      <style>{DOWNLOAD_PAGE_CSS}</style>
      <section className="smart-download" aria-labelledby="download-heading">
        <div className="smart-download-inner">
          <p className="download-eyebrow">Live Safe. Stay Healthy.</p>
          <h1 id="download-heading">Download MySentry.</h1>
          <p className="download-intro">Choose the store for your device. For Ring, open the MySentry listing in the Ring Appstore.</p>
          {primary && (
            <div className="download-fallback" role="status">
              <p>If the store did not open, use the button below.</p>
              <a className="download-primary" data-download-store={primary.key} href={SMART_DOWNLOAD_STORES[primary.key]}>
                {primary.label}<span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
          <div className="download-grid">
            {DOWNLOAD_OPTIONS.map(option => (
              <div className="download-card" key={option.key}>
                <h2>{option.heading}</h2>
                <a
                  className="download-store"
                  data-download-store={option.key}
                  href={SMART_DOWNLOAD_STORES[option.key]}
                  onClick={() => {
                    if (platform === "other" && downloadActivityAllowed()) trackDownloadStoreClick(option.key);
                  }}
                  onAuxClick={event => {
                    if (platform === "other" && event.button === 1 && downloadActivityAllowed()) trackDownloadStoreClick(option.key);
                  }}
                >
                  <PerformanceImage src={option.image} alt="" width="154" height="46" />
                  <span className="download-link">{option.label}<span aria-hidden="true">↗</span></span>
                </a>
              </div>
            ))}
          </div>
          <p className="download-note">You can share this same download link with someone using a different device.</p>
        </div>
      </section>
    </Layout>
  );
}
