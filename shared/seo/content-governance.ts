export const HELD_BLOG_SLUGS = new Set([
  "24-7-professional-monitoring-what-it-actually-means",
  "aging-with-confidence-independence",
  "best-safety-app-for-women-living-alone",
  "caregiver-alert-app-how-to-stay-informed-from-a-distance",
  "caught-in-the-middle-sandwich-generation",
  "connected-and-protected-family-safety",
  "construction-worker-safety-app-what-osha-requires",
  "dehydration-in-seniors-living-alone",
  "dementia-wandering-safety-guide",
  "employee-health-wellness-future",
  "fall-detection-apple-watch-vs-dedicated-safety-app",
  "family-road-trip-safety-summer-guide",
  "family-safety-app-how-to-keep-everyone-connected",
  "health-monitoring-app-what-it-tracks-and-why-it-matters",
  "heart-rate-variability-what-it-means-for-your-health",
  "heat-exhaustion-seniors-safety-guide",
  "how-crash-detection-works-on-your-smartphone",
  "how-mysentry-compares-to-adt-for-personal-protection",
  "how-mysentry-compares-to-life360-for-family-safety",
  "how-mysentry-compares-to-noonlight-for-emergency-response",
  "how-to-choose-a-medical-alert-app-for-an-aging-parent",
  "how-to-talk-to-senior-parent-about-wearing-a-safety-app",
  "lone-worker-safety-checklist",
  "lone-worker-safety-guide",
  "medications-and-senior-falls",
  "nursing-home-vs-aging-in-place-which-is-safer",
  "panic-button-app-for-employees-what-to-look-for",
  "run-free-solo-female-runners",
  "safety-app-for-college-students-what-parents-should-know",
  "safety-app-vs-medical-alert-system-whats-the-difference",
  "safety-check-in-app-how-meetsafe-works",
  "safety-strategy-reducing-liability",
  "share-location-with-emergency-contacts-how-it-works",
  "silent-heart-attack-warning-signs-seniors",
  "silent-signs-heart-rate-monitoring",
  "solo-living-safety-guide",
  "solo-travel-safety-for-women",
  "summer-heat-senior-medications-safety-guide",
  "summer-safety-for-seniors-living-alone",
  "teen-driver-safety-apps-what-parents-need-to-know",
  "the-hidden-dangers-of-working-alone-what-every-employer-needs-to-know",
  "the-real-cost-of-workplace-accidents-why-prevention-beats-compensation",
  "what-employers-must-provide-for-lone-worker-safety",
  "what-happens-in-the-first-5-minutes-after-a-fall-why-speed-matters",
  "what-happens-when-you-press-a-panic-button-app",
  "what-is-spo2-and-why-does-it-matter-for-seniors",
  "workforce-safety-monitoring-app-for-remote-teams",
]);

export function isHeldBlogSlug(slug: string): boolean {
  return HELD_BLOG_SLUGS.has(slug.trim().toLowerCase());
}

export function getHeldBlogTitle(slug: string): string {
  return slug
    .trim()
    .split("-")
    .filter(Boolean)
    .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(" ");
}
