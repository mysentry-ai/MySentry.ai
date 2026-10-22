export const HOMEPAGE_ASSETS = {
  logo: "/manus-storage/mysentry-logo-color_9c46d27f.svg",
  appStoreBadge: "/manus-storage/Download_on_the_App_Store_3520a0d7.png",
  googlePlayBadge: "/manus-storage/Get_it_on_Google_Play.png_3896d918.png",
  ringBadge: "/manus-storage/mysentry-ring-appstore-badge_aeac9cb2.png",
  heroApp: "/manus-storage/mysentry-hero-home-screen_08e5b781.jpg",
  contactsScreen: "/manus-storage/mysentry-emergency-contacts_6cff739a.jpg",
  ringApp: "/manus-storage/mysentry-ring-home-screen_f2dc97ca.jpg",
  panicWatch: "/manus-storage/mysentry-watch-panic-alarm_0ca29439.png",
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
    headline: "Confidence for wherever you're headed.",
    description:
      "Personal safety alerts and check-ins when you're out and about.",
    href: "/use-cases/safety-app-for-women",
    image: HOMEPAGE_ASSETS.women,
    alt: "Woman jogging outdoors near the waterfront",
  },
] as const;
