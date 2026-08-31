export const HELD_BLOG_SLUGS = new Set([
  "24-7-professional-monitoring-what-it-actually-means",
  "car-breakdown-safety-women",
  "caregiver-alert-app-how-to-stay-informed-from-a-distance",
  "construction-worker-safety-app-what-osha-requires",
  "dementia-wandering-safety-guide",
  "family-safety-app-how-to-keep-everyone-connected",
  "health-monitoring-app-what-it-tracks-and-why-it-matters",
  "heat-exhaustion-seniors-safety-guide",
  "how-crash-detection-works-on-your-smartphone",
  "how-does-fall-detection-work-on-a-phone-or-watch",
  "how-gps-tracking-works-in-a-safety-app",
  "how-mysentry-compares-to-adt-for-personal-protection",
  "how-mysentry-compares-to-life360-for-family-safety",
  "how-mysentry-compares-to-noonlight-for-emergency-response",
  "how-to-choose-a-medical-alert-app-for-an-aging-parent",
  "how-to-prevent-heat-exhaustion-in-outdoor-workers",
  "how-to-stay-safe-when-working-from-home-alone",
  "nursing-home-vs-aging-in-place-which-is-safer",
  "personal-safety-app-vs-home-security-system",
  "real-estate-agent-safety-app-why-agents-need-one",
  "run-free-solo-female-runners",
  "safety-app-for-college-students-what-parents-should-know",
  "share-location-with-emergency-contacts-how-it-works",
  "silent-heart-attack-warning-signs-seniors",
  "what-employers-must-provide-for-lone-worker-safety",
  "what-happens-when-you-press-a-panic-button-app",
  "women-walking-alone-at-night-safety",
  "workforce-safety-monitoring-app-for-remote-teams",
]);

export function isHeldBlogSlug(slug: string): boolean {
  return HELD_BLOG_SLUGS.has(slug.trim().toLowerCase());
}
