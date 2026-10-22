export const HOMEPAGE_ASSETS = {
  appStoreBadge: "/manus-storage/mysentry-home-app-store-badge_cac1b154.png",
  googlePlayBadge: "/manus-storage/mysentry-home-google-play-badge_e2d35fb4.png",
  ringBadge: "/manus-storage/mysentry-home-ring-badge_1733c8e3.png",
  heroSenior: "/manus-storage/mysentry-home-senior-showcase_591d5c90.png",
  emergencyContacts: "/manus-storage/mysentry-home-emergency-contacts_ab3b570d.jpg",
  fallDetection: "/manus-storage/mysentry-home-fall-detection_e15f9a76.png",
  healthMonitoring: "/manus-storage/mysentry-home-health-monitoring_215b609c.png",
  panicFlow: "/manus-storage/mysentry-home-panic-alarm-flow_56ac80ef.png",
  ringScreen: "/manus-storage/mysentry-home-ring-screen_8e8d54ab.png",
  watchPanic: "/manus-storage/mysentry-home-watch-panic_0409e3bc.png",
  allInOne: "/manus-storage/mysentry-home-all-in-one_f2b34eac.png",
  family: "/images/family-hero-base.jpg",
  senior: "/images/senior-gardening-800w.jpg",
  women: "/images/cdn/hero-safety-women-AnNQmUkZgkndJZ95kCXbP6.webp",
} as const;

export const HOMEPAGE_LINKS = {
  appStore: "https://apps.apple.com/us/app/mysentry-safety-health/id6740518837",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.eagleeye.mysentry",
  ringAppstore: "https://ring.com/appstore/mysentry",
  ringDetails: "/integrations/ring",
  pricing: "/pricing",
  rapidResponse: "https://www.rrms.com/",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  accountDeletion: "/account-deletion",
  smsConsent: "/sms-consent",
} as const;

export const audiences = [
  {
    title: "Families",
    headline: "Stay close, wherever life takes you.",
    description:
      "Keep trusted family members connected to important safety alerts.",
    href: "/use-cases/family-safety-app",
    image: HOMEPAGE_ASSETS.family,
    alt: "Family spending time together at home",
  },
  {
    title: "Seniors",
    headline: "Independent living. Connected support.",
    description:
      "Safety check-ins and compatible watch features can add reassurance.",
    href: "/use-cases/medical-alert-app-for-seniors",
    image: HOMEPAGE_ASSETS.senior,
    alt: "Older adult gardening outside",
  },
  {
    title: "Women",
    headline: "Confidence for wherever you are headed.",
    description:
      "Personal safety alerts and check-ins when you are out and about.",
    href: "/use-cases/safety-app-for-women",
    image: HOMEPAGE_ASSETS.women,
    alt: "Woman jogging outdoors near the waterfront",
  },
] as const;

/**
 * Every owner-supplied product mockup appears in one homepage placement only.
 * The object also gives tests a single authority for no-repeat checks.
 */
export const HOMEPAGE_MOCKUP_PLACEMENTS = {
  hero: HOMEPAGE_ASSETS.heroSenior,
  atAGlance: HOMEPAGE_ASSETS.emergencyContacts,
  walkthroughFall: HOMEPAGE_ASSETS.fallDetection,
  walkthroughPanic: HOMEPAGE_ASSETS.panicFlow,
  walkthroughHealth: HOMEPAGE_ASSETS.healthMonitoring,
  ring: HOMEPAGE_ASSETS.ringScreen,
  watch: HOMEPAGE_ASSETS.watchPanic,
  final: HOMEPAGE_ASSETS.allInOne,
} as const;
