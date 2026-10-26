import type { Express } from "express";

/**
 * The owner-supplied homepage v17 document uses these relative `assets/...`
 * paths. The large SVGs live in managed File Storage, not in the repository,
 * while the document itself remains unchanged.
 */
export const EXACT_HOMEPAGE_ASSET_ALIASES = {
  "audience-family.svg": "/manus-storage/audience-family_6395f20b.svg",
  "audience-three-women.svg": "/manus-storage/audience-three-women_b9754c6a.svg",
  "automated-call-mockup.svg": "/manus-storage/automated-call-mockup_f8c7733c.svg",
  "crash-detection-mockup.svg": "/manus-storage/crash-detection-mockup_3f1ddf4f.svg",
  "fall-detection-and-ring-live-video-mockup.svg":
    "/manus-storage/fall-detection-and-ring-live-video-mockup_1a0e8f3e.svg",
  "hero-mysentry-app-composite.svg":
    "/manus-storage/hero-mysentry-app-composite_42728576.svg",
  "panic-and-emergency-contacts-mockup.svg":
    "/manus-storage/panic-and-emergency-contacts-mockup_79c7d6db.svg",
} as const;

export function registerExactHomepageAssetAliases(app: Express) {
  app.get("/assets/:assetName", (req, res, next) => {
    const storagePath = EXACT_HOMEPAGE_ASSET_ALIASES[
      req.params.assetName as keyof typeof EXACT_HOMEPAGE_ASSET_ALIASES
    ];

    if (!storagePath) return next();

    res
      .set("Cache-Control", "no-store")
      .set("Vary", "Accept")
      .redirect(307, storagePath);
  });
}
