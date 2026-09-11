/**
 * Centralized route-meta config  -  single source of truth for all static routes.
 *
 * Rules:
 *  - title: 50-60 chars; do NOT include "| MySentry" suffix (appended once in resolveMeta)
 *  - description: 150-160 chars, unique per route
 *  - ogType: "website" (default) or "article" (blog posts only)
 *  - ogImage: absolute URL; omit to use the default homepage og:image
 *
 * This file is imported by BOTH the Express SSR middleware (server-side) and
 * client/src/components/SEO.tsx (client-side). Keep it free of any server-only
 * or client-only imports  -  pure data + types only.
 */

export type RouteMeta = {
  title: string;
  description: string;
  ogType?: "website" | "article";
  ogImage?: string;
};

export const DEFAULT_OG_IMAGE =
  "https://mysentry.ai/images/og-default.jpg";

export const SITE_NAME = "MySentry";

export const ROUTE_META: Record<string, RouteMeta> = {
  // ─── Core pages ───────────────────────────────────────────────────────────
  "/": {
    title: "Personal Safety and Wellness Monitoring, 24/7",
    description:
      "MySentry combines a Panic Alarm, Safety Checks, eligible device detection, trusted contacts, professional monitoring, and supported wellness context, subject to plan and device requirements.",
  },
  "/about-us": {
    title: "About MySentry | Our Mission & Story",
    description:
      "MySentry was founded to make professional-grade safety accessible to everyone. Learn about our mission, team, and 24/7 emergency response platform.",
  },
  "/how-it-works": {
    title: "How MySentry Works | Panic Button & Monitoring",
    description:
      "See how MySentry alerts can begin, which context may be shared, how eligible monitoring works, and which device, permission, connectivity, and service limits apply.",
  },
  "/pricing": {
    title: "Pricing | Personal Safety Plans from $15/mo",
    description:
      "Review current MySentry plan information, eligible Ring offers, billing routes, supported features, device requirements, and service limitations before enrolling.",
  },
  "/pricing-legacy": {
    title: "Legacy Pricing | Plans from $15/mo",
    description:
      "This legacy pricing route is not current. Review the active pricing page for current plan, eligibility, billing, and service limitation information.",
  },
  "/contact": {
    title: "Contact MySentry | Support & Sales",
    description:
      "Get help, request a demo, or explore partnership opportunities. Our team is ready to help you find the right personal safety solution.",
  },
  "/team": {
    title: "Our Team | Leadership & Advisory Board",
    description:
      "Meet the team behind MySentry. Our leadership and advisory board bring decades of experience in safety technology, healthcare, and enterprise solutions.",
  },
  "/partner": {
    title: "Become a MySentry Dealer | Partner Program",
    description:
      "Join MySentry's dealer network. Offer personal safety, health monitoring, and emergency response to your clients. Competitive margins and full support.",
  },
  "/partners": {
    title: "Partner Opportunities | MySentry",
    description:
      "Explore partner opportunities with MySentry for personal safety, supported wearable wellness context, and eligible workforce programs.",
  },
  "/privacy": {
    title: "Privacy Policy | MySentry",
    description:
      "Read how MySentry describes collection, use, disclosure, retention, security, and choices for account, location, alert, and supported wellness information.",
  },
  "/account-deletion": {
    title: "Delete Your MySentry Account",
    description:
      "Learn how to request deletion of a MySentry account, what information to include, how identity verification may work, and which records may be retained.",
  },
  "/terms": {
    title: "Terms & Conditions | MySentry",
    description:
      "Read the Terms and Conditions for using MySentry services, including the mobile app, website, and 24/7 monitoring platform.",
  },

  // ─── Audience pages ───────────────────────────────────────────────────────
  "/employers": {
    title: "Lone Worker Safety App for Employers",
    description:
      "Explore app-based panic alerts, supported-device fall signals, safety check-ins, and professional monitoring options for lone and mobile workers.",
  },
  "/families": {
    title: "Family Safety App | GPS, Crash & Health Alerts",
    description:
      "Help family members stay connected with consent-based location sharing, panic alerts, supported-device safety signals, and emergency contact notifications.",
  },
  "/females": {
    title: "Safety App for Women | Panic Button & Monitoring",
    description:
      "MySentry keeps women safe with a discreet panic button, live location, and 24/7 monitoring. Walk, run, commute, and travel with confidence.",
  },
  "/seniors": {
    title: "Personal Safety App for Older Adults and Families",
    description:
      "Explore respectful, consent-based safety planning for independent older adults, trusted family members, and caregivers, with clear setup and limits.",
  },

  // ─── Nurses pages ─────────────────────────────────────────────────────────
  "/nurses": {
    title: "Personal Safety App for Nurses",
    description:
      "Explore setting-specific personal-safety planning for home health, travel, ER and trauma, and night-shift nurses, including requirements and limitations.",
  },
  "/nurses/er-trauma": {
    title: "ER and Trauma Nurse Safety App and Duress Planning",
    description:
      "See how MySentry can supplement facility procedures with eligible personal alerts, trusted contacts, setup guidance, and clear limitations.",
  },
  "/nurses/home-health": {
    title: "Home Health Nurse Safety App and Solo Visit Planning",
    description:
      "Explore user-activated alerts, Safety Checks, trusted contacts, setup needs, and limitations for home health nurses working in private homes.",
  },
  "/nurses/night-shift": {
    title: "Night Shift Nurse Safety App and Check-In Planning",
    description:
      "Prepare for after-hours transitions, parking, and commutes with Safety Checks, eligible alerts, trusted contacts, and clear limitations.",
  },
  "/nurses/travel-nurses": {
    title: "Travel Nurse Safety App for New Assignments",
    description:
      "Plan for unfamiliar facilities, housing, parking, and commutes with eligible MySentry alerts, trusted contacts, setup guidance, and limitations.",
  },

  // ─── Blog ─────────────────────────────────────────────────────────────────
  "/blogs": {
    title: "MySentry Blog | Safety & Emergency Preparedness",
    description:
      "Expert advice on personal safety, fall prevention, family protection, and emergency preparedness. Read the latest from MySentry's safety and health blog.",
  },

  // ─── Features ─────────────────────────────────────────────────────────────
  "/features": {
    title: "Safety & Monitoring Features | MySentry",
    description:
      "Review current MySentry personal safety and wellness features, including device, plan, permission, connectivity, privacy, and monitoring requirements.",
  },
  "/features/panic-button-app": {
    title: "Panic Button App | One-Press Emergency Alarm with Live Video",
    description:
      "Learn how MySentry panic alerts can share permitted safety context with professional monitoring and selected emergency contacts on supported devices.",
  },
  "/features/fall-detection-app": {
    title: "Fall Detection App | Automatic Fall Alert with Emergency Response",
    description:
      "Learn how MySentry works with supported smartwatch fall signals, user prompts, professional monitoring, and selected emergency contacts.",
  },
  "/features/crash-detection": {
    title: "Crash Detection App | Automatic Car Accident Alert & Response",
    description:
      "Learn how MySentry uses supported-device crash signals, a user response window, location context, and professional monitoring during a possible crash event.",
  },
  "/features/24-7-professional-monitoring": {
    title: "24/7 Professional Monitoring | Live Video Emergency Response",
    description:
      "See how MySentry routes eligible safety alerts to professional monitoring for review, contact attempts, and possible escalation based on the situation.",
  },
  "/features/emergency-contacts": {
    title: "Emergency Contact Alerts",
    description:
      "Learn how selected contacts may receive supported alert notifications and permitted context, with setup requirements, privacy controls, and delivery limitations.",
  },
  "/features/live-video-response": {
    title: "Video Context During Eligible Alerts",
    description:
      "Learn when permitted video context may be available during an eligible alert, how monitoring may use it, and which privacy and connectivity limits apply.",
  },
  "/features/health-monitoring": {
    title: "Wearable Wellness Signals and Alerts",
    description:
      "Review supported wearable wellness signals, informational alert context, device compatibility, permissions, and non-medical limitations.",
  },
  "/features/meetsafe-check-ins": {
    title: "MeetSafe Check-Ins | Automated Safety Check-In App",
    description:
      "Schedule a MeetSafe check-in and learn how MySentry can begin the configured alert workflow if you do not confirm that you are safe.",
  },
  "/features/safety-check-in-app": {
    title: "Safety Check-In App | Scheduled Check-Ins for Lone Workers",
    description:
      "Plan time-based safety check-ins for solo activities and learn how a missed response can begin the configured MySentry alert workflow.",
  },
  // Semrush-flagged duplicate  -  needs unique entry
  "/features/health-monitoring-app-with-alerts": {
    title: "Health Monitoring App with Alerts | Vitals Tracking & Safety",
    description:
      "Explore supported smartwatch wellness metrics and personalized safety alerts, with platform, permission, connectivity, and non-medical limitations explained.",
  },

  // ─── Use Cases ────────────────────────────────────────────────────────────
  "/use-cases": {
    title: "Who Uses MySentry | Safety App Use Cases",
    description:
      "Explore MySentry use cases for individuals, families, older adults, and work teams, with current feature, device, privacy, and service limitations.",
  },
  "/use-cases/safety-app-for-women": {
    title: "Safety App for Women: Feel Secure, Live Free",
    description:
      "Review Panic Alarm, Safety Checks, trusted contacts, permission-based location context, monitoring options, and practical limitations for women.",
  },
  "/use-cases/family-safety-app": {
    title: "Family Safety App with Monitoring & Alerts",
    description:
      "Review permission-based family safety tools, trusted contacts, alerts, Safety Checks, supported devices, privacy boundaries, and service limitations.",
  },
  "/use-cases/medical-alert-app-for-seniors": {
    title: "Medical Alert App for Seniors and Family Caregivers",
    description:
      "Compare individual and family paths for supported-device alerts, Safety Checks, trusted contacts, eligible monitoring, privacy, setup, and limitations.",
  },
  "/use-cases/lone-worker-safety-app": {
    title: "Lone Worker Safety App | Panic Alarm & 24/7 Monitoring",
    description:
      "Review Panic Alarm, Safety Checks, eligible device detection, monitoring, permissions, connectivity, and program limitations for lone workers.",
  },
  "/use-cases/home-healthcare-worker-safety": {
    title: "Home Healthcare Worker Safety App | Lone Worker Protection",
    description:
      "Keep home healthcare workers safe with MySentry. Our app offers a panic alarm, fall detection, and 24/7 monitoring. Protect your team and book a demo today.",
  },
  "/use-cases/teen-driver-safety": {
    title: "Teen Driver Safety: Crash Detection for Parents",
    description:
      "Review eligible crash signals, user response windows, trusted contacts, permitted location context, monitoring, and limitations for teen-driver plans.",
  },
  "/use-cases/personal-safety-app-for-renters": {
    title: "Personal Safety App for Renters and Apartment Living",
    description:
      "Add a portable personal-safety routine for apartment living, shared spaces, transit, and time alone without replacing home security.",
  },

  // ─── Industries ───────────────────────────────────────────────────────────
  "/industries": {
    title: "Industry Safety Solutions | MySentry",
    description:
      "MySentry offers tailored 24/7 safety monitoring for home healthcare, construction, retail, hospitality, real estate, education, and security industries.",
  },
  "/industries/home-healthcare": {
    title: "Home Healthcare Safety App | Lone Worker Protection",
    description:
      "Review supplemental Panic Alarm, Safety Checks, monitoring, permissions, connectivity, and response-planning considerations for home healthcare teams.",
  },
  "/industries/construction": {
    title: "Construction Safety App for Workers",
    description:
      "Keep construction workers safe with MySentry. Our app offers fall detection, panic alarms, and 24/7 monitoring for lone workers. Get help fast. Book a demo.",
  },
  "/industries/retail": {
    title: "Retail Worker Safety App | Silent Panic Alarm & Monitoring",
    description:
      "Review supplemental Panic Alarm, Safety Checks, monitoring, privacy, training, and response-planning considerations for retail teams.",
  },
  "/industries/hospitality": {
    title: "Hospitality Worker Safety App | Panic Button & 24/7 Monitoring",
    description:
      "Review supplemental Panic Alarm, Safety Checks, monitoring, privacy, training, and response-planning considerations for hospitality teams.",
  },
  "/industries/real-estate": {
    title: "Real Estate Agent Safety App | Panic Button & GPS Tracking",
    description:
      "Review supplemental Panic Alarm, Safety Checks, trusted contacts, monitoring, privacy, and response-planning considerations for real estate teams.",
  },
  "/industries/education": {
    title: "Education Safety App | Staff & Campus Worker Protection",
    description:
      "Review supplemental Panic Alarm, Safety Checks, monitoring, privacy, accessibility, and response-planning considerations for education teams.",
  },
  "/industries/security-guarding": {
    title: "Security Guard Safety App | Lone Worker Monitoring & Panic Alarm",
    description:
      "Review supplemental Panic Alarm, Safety Checks, eligible device detection, monitoring, connectivity, and response-planning considerations for security teams.",
  },

  // ─── Compare ──────────────────────────────────────────────────────────────
  "/compare": {
    title: "How to Compare Personal Safety Services",
    description:
      "Use an evidence-first checklist to compare device support, alert workflows, monitoring, privacy, pricing, eligibility, and service limitations.",
  },
  "/compare/apple-watch-fall-detection-vs-mysentry": {
    title: "Apple Watch Fall Detection vs MySentry",
    description:
      "See why Apple Watch owners connect MySentry for voice panic, wellness analysis, family alerts, live context, 24/7 monitoring, and emergency escalation.",
  },
  "/compare/samsung-galaxy-watch-vs-mysentry": {
    title: "Samsung Galaxy Watch vs MySentry",
    description:
      "See why Galaxy Watch owners connect MySentry for voice panic, wellness analysis, family alerts, live context, 24/7 monitoring, and emergency escalation.",
  },
  "/compare/noonlight-vs-mysentry": {
    title: "Noonlight and MySentry Comparison Under Review",
    description:
      "The Noonlight and MySentry comparison is temporarily held while current official product, pricing, compatibility, privacy, and policy sources are reviewed.",
  },
  "/compare/life360-vs-mysentry": {
    title: "Life360 and MySentry Comparison Under Review",
    description:
      "The Life360 and MySentry comparison is temporarily held while current official product, pricing, compatibility, privacy, and policy sources are reviewed.",
  },
  "/compare/fallcall-vs-mysentry": {
    title: "FallCall and MySentry Comparison Under Review",
    description:
      "The FallCall and MySentry comparison is temporarily held while current official product, pricing, compatibility, privacy, and policy sources are reviewed.",
  },
  "/compare/google-personal-safety-vs-mysentry": {
    title: "Google Personal Safety and MySentry Comparison Under Review",
    description:
      "The Google Personal Safety and MySentry comparison is temporarily held while current official product, compatibility, privacy, and policy sources are reviewed.",
  },
  "/compare/sosecure-adt-vs-mysentry": {
    title: "ADT SoSecure and MySentry Comparison Under Review",
    description:
      "The ADT SoSecure and MySentry comparison is temporarily held while current official product, pricing, compatibility, privacy, and policy sources are reviewed.",
  },
  "/compare/medical-alert-devices-vs-mysentry": {
    title: "Medical Alert Service Comparison Under Review",
    description:
      "This category comparison is temporarily held while equipment, monitoring, pricing, eligibility, and service limitations are reviewed against current sources.",
  },
  // Semrush-flagged duplicate  -  needs unique entry
  "/compare/mysentry-vs-citizen": {
    title: "Citizen and MySentry Comparison Under Review",
    description:
      "The Citizen and MySentry comparison is temporarily held while current official product, pricing, compatibility, privacy, and policy sources are reviewed.",
  },
  "/compare/lively-vs-mysentry": {
    title: "Lively vs MySentry | Senior Safety Comparison",
    description:
      "Compare two approaches to senior safety, including device requirements, monitoring options, fall-event support, family notifications, and current pricing.",
  },
  "/compare/medical-guardian-vs-mysentry": {
    title: "Medical Guardian vs MySentry | Safety Comparison",
    description:
      "Compare a dedicated medical alert service with MySentry's phone and smartwatch safety approach, including equipment, monitoring, and feature differences.",
  },
  "/compare/oura-ring-vs-mysentry": {
    title: "Oura Ring vs MySentry | Wellness and Safety",
    description:
      "Compare Oura's wellness-focused wearable experience with MySentry's personal safety workflows. This comparison does not imply a live Oura integration.",
  },
  "/compare/whoop-vs-mysentry": {
    title: "WHOOP vs MySentry | Fitness and Safety Comparison",
    description:
      "Compare WHOOP's fitness and recovery focus with MySentry's personal safety workflows, supported-device signals, and monitoring options.",
  },
  "/compare/traditional-medical-alerts-vs-mysentry": {
    title: "Traditional Medical Alert Services Comparison Review",
    description:
      "Use a structured checklist to compare equipment, monitoring, eligibility, pricing, privacy, and limitations. Product-specific claims remain under evidence review.",
  },
  "/compare/fitness-wearables-vs-mysentry": {
    title: "Fitness Wearables and MySentry Comparison Review",
    description:
      "Use a structured checklist to compare wellness wearables with personal safety services. Product-specific claims remain under evidence review.",
  },

  // ─── Solutions ────────────────────────────────────────────────────────────
  "/solutions/home-healthcare": {
    title: "Lone Worker Safety for Home Healthcare",
    description:
      "MySentry provides a comprehensive lone worker safety solution for home healthcare agencies and their staff, featuring fall detection, a panic alarm, and GPS tracking.",
  },
  "/solutions/real-estate": {
    title: "MySentry for Real Estate | Safety Solutions for Agents",
    description:
      "Protect your agents with MySentry's discreet panic alarm and safety check-in features. Designed for the unique risks of the real estate industry.",
  },
  "/solutions/delivery-drivers": {
    title: "Delivery Driver Safety App for Teams",
    description:
      "Review MySentry Panic Alarm, eligible crash detection, Safety Checks, monitoring, permissions, and limits for delivery-driver teams.",
  },
  "/solutions/utility-workers": {
    title: "Personal Safety App for Utility and Field Workers",
    description:
      "Explore a supplemental personal-safety layer for changing worksites and field travel within employer training, supervision, and emergency procedures.",
  },
  "/solutions/construction": {
    title: "Construction Safety Solution | Fall Detection for Job Sites",
    description:
      "MySentry's construction safety solution provides fall detection, panic alarms, and 24/7 monitoring for job sites. Protect your crew and comply with safety regulations.",
  },
  "/solutions/retail-workers": {
    title: "Silent Panic Alarm for Retail Workers",
    description:
      "MySentry offers a discreet silent panic alarm for retail workers facing workplace violence. Protect your employees with live video response and GPS tracking.",
  },

  // ─── Safety For ───────────────────────────────────────────────────────────
  "/safety-for/women-living-alone": {
    title: "Safety for Women Living Alone | Panic Alarm & 24/7 Monitoring",
    description:
      "Women living alone can feel secure with MySentry. Get peace of mind with fall detection, voice-activated panic alarms, and 24/7 monitoring. Review Plans and Eligibility today.",
  },
  "/safety-for/seniors-aging-in-place": {
    title: "Aging in Place Safety: Keep Seniors Safe at Home",
    description:
      "Help seniors live independently with fall detection, health monitoring, and 24/7 response. Keep loved ones safe at home. Review plan eligibility.",
  },
  "/safety-for/solo-travelers": {
    title: "Solo Travel Safety App and Check-Ins",
    description:
      "Prepare MySentry Panic Alarm, Safety Checks, trusted contacts, monitoring, and an offline backup plan before traveling alone.",
  },
  "/safety-for/people-living-alone": {
    title: "Personal Safety App for People Living Alone",
    description:
      "Plan check-ins, trusted contacts, and eligible safety features with a supplemental personal safety app for independent routines.",
  },

  // ─── Case Studies ─────────────────────────────────────────────────────────
  "/case-studies/home-healthcare": {
    title: "Home Healthcare Case Study Evidence Review",
    description:
      "The MySentry home healthcare case study is temporarily held while customer outcomes and supporting evidence are reviewed.",
  },
  "/case-studies/real-estate": {
    title: "Real Estate Case Study Evidence Review",
    description:
      "The MySentry real estate case study is temporarily held while customer outcomes and supporting evidence are reviewed.",
  },
  "/case-studies/field-services": {
    title: "Field Services Case Study Evidence Review",
    description:
      "The MySentry field services case study is temporarily held while customer outcomes and supporting evidence are reviewed.",
  },

  // ─── Resources ────────────────────────────────────────────────────────────
  "/resources/employer-one-pager": {
    title: "Employer Safety One-Pager",
    description:
      "A concise employer overview of MySentry Panic Alarm, Safety Checks, eligible incident detection, professional monitoring, privacy, and limitations.",
  },

  // ─── Integrations ─────────────────────────────────────────────────────────
  "/integrations/apple-watch": {
    title: "Apple Watch and MySentry Compatibility Review",
    description:
      "Review current Apple Watch eligibility, setup, supported controls, wearable wellness context, monitoring, and important limitations for MySentry.",
  },
  "/integrations/samsung-galaxy-watch": {
    title: "Samsung Galaxy Watch and MySentry Compatibility Review",
    description:
      "Review current Samsung Galaxy Watch eligibility, setup, supported controls, wearable wellness context, monitoring, and important limitations for MySentry.",
  },
  "/integrations/oura-ring": {
    title: "Oura Ring and MySentry Coming Soon",
    description:
      "Explore MySentry's future vision for permission-based Oura Ring wellness context and personal safety. The integration is not currently available.",
    ogImage: "/images/cdn/hero-oura-ring-integration-gVAVE7WXQAwHMQbbzBA9nB.webp",
  },

  // ─── Additional public routes ─────────────────────────────────────────────
  "/personal-safety-app": {
    title: "Personal Safety App With Monitoring",
    description:
      "Review the MySentry Panic Alarm, Safety Checks, eligible device detection, trusted contacts, professional monitoring, requirements, and limitations.",
  },
  "/who-we-protect/women": {
    title: "Personal Safety Support for Women | MySentry",
    description:
      "Explore consent-based location sharing, discreet panic alerts, safety check-ins, emergency contacts, and professional monitoring options for women.",
  },
  "/who-we-protect/seniors": {
    title: "Safety Support for Older Adults | MySentry",
    description:
      "Explore supported-watch fall signals, panic alerts, selected wellness insights, emergency contacts, and professional monitoring options for older adults.",
  },
  "/who-we-protect/students": {
    title: "Student Safety App | Check-Ins and Panic Alerts",
    description:
      "Explore safety check-ins, panic alerts, consent-based location sharing, emergency contacts, and monitoring options for college and adult students.",
  },
  "/who-we-protect/children-and-teens": {
    title: "Family Safety Support for Teens | MySentry",
    description:
      "Learn how families can use user-activated panic alerts, supported-device crash signals, and consent-based location sharing with age-appropriate boundaries.",
  },
  "/who-we-protect/drivers": {
    title: "Driver Safety App | Crash Signals and Alerts",
    description:
      "Learn how supported-device crash signals, user response windows, location context, emergency contacts, and professional monitoring fit into MySentry's driver workflow.",
  },
  "/who-we-protect/employers": {
    title: "Workforce Safety App for Employers | MySentry",
    description:
      "Explore panic alerts, check-ins, supported-device fall signals, and professional monitoring options for organizations with lone and mobile workers.",
  },
  "/features/automated-call": {
    title: "Automated Call | Discreet Exit Support",
    description:
      "Learn how MySentry's scheduled Automated Call can provide a discreet reason to step away from an uncomfortable situation without implying emergency escalation.",
  },
  "/features/family-connectivity": {
    title: "Family Connectivity | Consent-Based Location Sharing",
    description:
      "Learn how time-bounded, consent-based location sharing and safety notifications can help selected family members stay connected without continuous health surveillance.",
  },
  "/features/secure-route": {
    title: "Secure Route | Feature Status",
    description:
      "Secure Route availability is being reviewed. This page does not represent the feature as generally available until platform and plan support are confirmed.",
  },
  "/ring": {
    title: "MySentry for Ring Users | Personal and Home Safety",
    description:
      "Learn how eligible Ring camera context may complement MySentry's personal safety workflows, subject to account, camera, subscription, consent, and regional requirements.",
  },
  "/integrations/ring": {
    title: "Ring and MySentry Integration | Eligibility and Setup",
    description:
      "Review MySentry and Ring eligibility, setup, billing, camera selection, consent, subscription dependencies, and current integration limitations.",
  },

  // ─── Guides ───────────────────────────────────────────────────────────────
  "/guides/lone-worker-safety": {
    title: "Lone Worker Safety Planning Guide",
    description:
      "Build a practical lone-worker safety plan covering hazards, check-ins, alerts, connectivity, privacy, training, and escalation responsibilities.",
  },
  "/guides/professional-monitoring": {
    title: "Professional Monitoring vs. App-Only Safety | Guide",
    description:
      "Professional monitoring provides 24/7 help. MySentry agents verify emergencies with live video and contact emergency services when appropriate fast, unlike app-only alerts. Get peace of mind today.",
  },
  "/guides/senior-safety-planning": {
    title: "Senior Safety Planning Guide for Families",
    description:
      "Create a respectful senior safety plan covering home hazards, contacts, medical guidance, technology, privacy, and emergency steps.",
  },
  "/guides/aging-in-place-checklist": {
    title: "Aging in Place Safety Checklist for Older Adults and Families",
    description:
      "Use a respectful room-by-room checklist to plan home safety, communication, support, technology, privacy, and emergency contacts together.",
  },
  "/guides/family-safety-without-constant-tracking": {
    title: "Family Safety Without Constant Tracking",
    description:
      "Build consent-based family safety routines with agreed check-ins, trusted contacts, situational sharing, and clear privacy boundaries.",
  },
  "/guides/night-shift-nurse-safety-checklist": {
    title: "Night Shift Nurse Safety Checklist for Parking and Commutes",
    description:
      "Plan transitions before and after a nursing shift with workplace procedures, parking, communication, and fatigue-aware commute decisions.",
  },
  "/guides/wearable-fall-detection-limitations": {
    title: "Wearable Fall Detection: Capabilities and Limitations",
    description:
      "Understand what eligible consumer devices may detect, why events can be missed, and which settings, permissions, wearing conditions, and connections matter.",
  },
};
