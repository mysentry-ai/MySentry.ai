export const HOMEPAGE_VERSION = "homepage_visual_v1";
export const HOME_TITLE =
  "Personal Safety App for Families & Seniors | MySentry";
export const HOME_DESCRIPTION =
  "Never face an emergency alone. MySentry connects safety alerts to trusted family members and eligible 24/7 professional monitoring. Explore plans and get the app.";

export const HOME_DESTINATIONS = {
  apple: "https://apps.apple.com/us/app/mysentry-safety-health/id6740518837",
  google: "https://play.google.com/store/apps/details?id=com.eagleeye.mysentry",
  ring: "https://ring.com/appstore/mysentry",
  ringDetails: "/integrations/ring",
  pricing: "/pricing",
  provider: "https://www.rrms.com/",
} as const;

// Official artwork is unchanged; app frames and screen text are preserved.
export const HOME_ASSETS = {
  logo: "/manus-storage/mysentry-logo-color_5573ee21.svg",
  apple: "/manus-storage/app-store-badge_04958381.png",
  google: "/manus-storage/google-play-badge_92c8e3d1.png",
  ringBadge: "/manus-storage/ring-appstore-badge_a31fd540.png",
  homePhone: "/manus-storage/mysentry-current-home-portrait_13541e12.webp",
  ringPhone: "/manus-storage/mysentry-current-home-portrait_13541e12.webp",
  panicPhone: "/manus-storage/mysentry-current-home-portrait_13541e12.webp",
  healthPhone: "/manus-storage/health-demo-trim_d454a91b.webp",
  fallPhone: "/manus-storage/fall-panic-demo_096ca1fb.webp",
  heroPhoto: "/manus-storage/mysentry-family-safety-app-hero_ebf4689b.webp",
  familyPhoto: "/images/cdn/hero-family-safety-mefr82ZSQwHKQykhJyfmsj.webp",
  seniorPhoto:
    "/images/cdn/hero-medical-alert-seniors-brbwAEw3QrMxYqBqfMTxKC.webp",
  womenPhoto: "/images/cdn/hero-safety-women-AnNQmUkZgkndJZ95kCXbP6.webp",
} as const;

export const HOME_STAGES = [
  {
    title: "An alert starts",
    description:
      "Request help, or let a supported device start a safety check.",
  },
  {
    title: "Your people know",
    description:
      "Chosen contacts can receive an alert and the context you allow.",
  },
  {
    title: "Help can be coordinated",
    description:
      "Eligible professional monitoring can review the alert and determine next steps.",
  },
] as const;

export const HOME_AUDIENCES = [
  {
    label: "Families",
    title: "Stay close, wherever life takes you.",
    description:
      "Keep trusted family members connected to important safety alerts.",
    image: HOME_ASSETS.familyPhoto,
    alt: "A family and older parent share a moment together at home",
    href: "/use-cases/family-safety-app",
  },
  {
    label: "Seniors",
    title: "Independent living. Connected support.",
    description:
      "Safety check-ins and compatible watch features can add reassurance.",
    image: HOME_ASSETS.seniorPhoto,
    alt: "An independently active older woman walks in a neighborhood park",
    href: "/use-cases/medical-alert-app-for-seniors",
  },
  {
    label: "Women",
    title: "Confidence for wherever you're headed.",
    description:
      "Personal safety alerts and check-ins when you're out and about.",
    image: HOME_ASSETS.womenPhoto,
    alt: "A woman enjoys a run along a familiar city waterfront",
    href: "/use-cases/safety-app-for-women",
  },
] as const;

export type HomeScenario = "fall" | "crash" | "panic" | "health";
export const HOME_WORKFLOWS: Record<
  HomeScenario,
  {
    label: string;
    screen: keyof typeof HOME_ASSETS;
    alt: string;
    caption: string;
    steps: readonly { title: string; description: string }[];
  }
> = {
  fall: {
    label: "Fall Detection",
    screen: "homePhone",
    alt: "Current MySentry app screen, accompanying a description of supported fall-alert steps",
    caption:
      "Current app screen. The steps describe the workflow, not a live alert.",
    steps: [
      {
        title: "A fall may be detected.",
        description: "A compatible watch identifies a possible fall.",
      },
      {
        title: "A safety check follows.",
        description: "The supported device or app asks if you're okay.",
      },
      {
        title: "An alert may start.",
        description:
          "If you request help or cannot respond, MySentry can trigger a Panic Alarm.",
      },
      {
        title: "Your people can be notified.",
        description:
          "Chosen contacts and eligible monitoring receive permitted information.",
      },
    ],
  },
  crash: {
    label: "Crash Detection",
    screen: "homePhone",
    alt: "Current MySentry app screen, illustrating the app rather than a crash detection event",
    caption: "Current app screen. A crash-state mockup was not supplied.",
    steps: [
      {
        title: "A serious impact is detected.",
        description: "Supported sensors identify a possible crash.",
      },
      {
        title: "MySentry checks on you.",
        description: "Confirm you're safe or ask for help.",
      },
      {
        title: "No response may trigger an alert.",
        description: "The enabled safety workflow can escalate.",
      },
      {
        title: "Contacts get context.",
        description:
          "Permitted location and details help them understand what's happening.",
      },
    ],
  },
  panic: {
    label: "Panic Alarm",
    screen: "panicPhone",
    alt: "Supplied MySentry Panic Alarm app screen",
    caption: "Example app screen. No alert is sent by this walkthrough.",
    steps: [
      {
        title: "You request help.",
        description: "Use your phone or supported watch.",
      },
      {
        title: "The alert flow begins.",
        description: "An in-app tap includes a short cancellation countdown.",
      },
      {
        title: "The alarm becomes active.",
        description: "If not canceled, MySentry starts the configured alert.",
      },
      {
        title: "Connected people can respond.",
        description:
          "Trusted contacts and eligible monitoring may receive the alarm.",
      },
    ],
  },
  health: {
    label: "Health Monitoring",
    screen: "homePhone",
    alt: "Current MySentry app screen showing the supported Health Monitoring entry",
    caption:
      "Current app screen. Available wellness readings depend on your device.",
    steps: [
      {
        title: "Your watch shares supported readings.",
        description: "Available signals depend on your device and permissions.",
      },
      {
        title: "MySentry evaluates a concern.",
        description: "Supported heart-rate workflows use confirmation rules.",
      },
      {
        title: "A critical alert may start.",
        description: "When the conditions are met, MySentry can escalate.",
      },
      {
        title: "Your safety network can be alerted.",
        description:
          "Configured contacts and eligible monitoring receive permitted context.",
      },
    ],
  },
};

export const HOME_FAQS = [
  {
    question: "Do I need a smartwatch?",
    answer:
      "No. Core phone-based safety features don't require a smartwatch; some detection features do require a compatible wearable.",
  },
  {
    question: "Who receives my alerts?",
    answer:
      "The trusted contacts you configure, and eligible professional monitoring when enabled and supported. Shared information depends on your permissions and settings.",
  },
  {
    question: "Can I use MySentry with Ring?",
    answer:
      "Yes, through its Ring Appstore listing with compatible devices and required permissions. See the Ring integration details.",
  },
] as const;
