/**
 * Centralized route-meta config — single source of truth for all static routes.
 *
 * Rules:
 *  - title: 50-60 chars; do NOT include "| MySentry" suffix (appended once in resolveMeta)
 *  - description: 150-160 chars, unique per route
 *  - ogType: "website" (default) or "article" (blog posts only)
 *  - ogImage: absolute URL; omit to use the default homepage og:image
 *
 * This file is imported by BOTH the Express SSR middleware (server-side) and
 * client/src/components/SEO.tsx (client-side). Keep it free of any server-only
 * or client-only imports — pure data + types only.
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
    title: "MySentry - 24/7 Personal Safety & Health Monitoring App",
    description:
      "MySentry turns your smartphone into a 24/7 safety companion. Panic alarm, fall detection, crash detection, health monitoring, and live video emergency response. Start your free trial today.",
  },
  "/about-us": {
    title: "About MySentry | Our Mission to Make Safety Accessible",
    description:
      "Learn about MySentry's mission to provide 24/7 personal safety and health monitoring with emergency response. Founded to make professional-grade protection accessible to everyone.",
  },
  "/how-it-works": {
    title: "How MySentry Works | Panic Button, Fall Detection & Monitoring",
    description:
      "See how MySentry protects you in 3 simple steps. Panic button, fall detection, crash detection, health monitoring, and 24/7 professional response with live video. Try free for 7 days.",
  },
  "/pricing": {
    title: "MySentry Pricing | Personal Safety Plans from $15/mo",
    description:
      "Choose the protection that fits your life. Individual plans from $15/mo, Family plans from $30/mo. 24/7 professional monitoring, fall detection, panic alarm, and live video response. Start your 7-day free trial.",
  },
  "/pricing-legacy": {
    title: "MySentry Pricing | Personal Safety Plans from $15/mo",
    description:
      "Choose your MySentry plan: Individual ($15/mo) or Family ($30/mo, up to 6 members). Includes fall detection, panic button, crash detection, and 24/7 professional monitoring. Try free for 7 days.",
  },
  "/contact": {
    title: "Contact MySentry | Get Help, Request a Demo, or Partner",
    description:
      "Contact MySentry for support, sales inquiries, partnership opportunities, or to schedule a demo. Our team is ready to help you find the right personal safety solution.",
  },
  "/team": {
    title: "MySentry Team | Leadership & Advisory Board",
    description:
      "Meet the team behind MySentry. Our leadership and advisory board bring decades of experience in safety technology, healthcare, and enterprise solutions.",
  },
  "/partner": {
    title: "Become a MySentry Dealer | Partner Program for Safety Solutions",
    description:
      "Join MySentry's dealer network. Offer AI-powered personal safety, health monitoring, and emergency response solutions to your clients. Competitive margins and full support.",
  },
  "/partners": {
    title: "MySentry Partners | Safety Technology Partnerships & Integrations",
    description:
      "Explore MySentry's technology and channel partnerships. We work with leading safety, healthcare, and enterprise organizations to deliver comprehensive personal protection solutions.",
  },
  "/privacy": {
    title: "Privacy Policy | MySentry",
    description:
      "Read MySentry's privacy policy. Learn how we collect, use, and protect your personal data, health information, and location data in compliance with applicable regulations.",
  },
  "/terms": {
    title: "Terms & Conditions | MySentry",
    description:
      "Read the Terms and Conditions for using MySentry services, including the mobile app, website, and 24/7 monitoring platform.",
  },

  // ─── Audience pages ───────────────────────────────────────────────────────
  "/employers": {
    title: "Lone Worker Safety App for Employers | Fall Detection & Panic Button",
    description:
      "Protect your workforce with MySentry. 24/7 fall detection, panic buttons, health monitoring, and live video response for lone workers and field employees. Reduce liability and comply with OSHA.",
  },
  "/families": {
    title: "Family Safety App | Crash Detection, GPS & Health Alerts",
    description:
      "Keep your whole family safe with MySentry. Real-time GPS, crash detection, fall alerts, and health monitoring for kids, teens, parents, and grandparents. Start your 7-day free trial.",
  },
  "/females": {
    title: "Safety App for Women | Discreet Panic Button & 24/7 Monitoring",
    description:
      "MySentry keeps women safe with a discreet panic button, live location sharing, and 24/7 professional monitoring. Walk, run, date, and travel with confidence. Start your free trial.",
  },
  "/seniors": {
    title: "Medical Alert App for Seniors | Fall Detection & Health Monitoring",
    description:
      "MySentry helps seniors stay independent with 24/7 fall detection, health monitoring, and emergency response. No pendant needed, just your phone and smartwatch. Start your free trial.",
  },

  // ─── Nurses pages ─────────────────────────────────────────────────────────
  "/nurses": {
    title: "Nurse Safety App | Panic Button, Fall Detection & Health Monitoring",
    description:
      "MySentry is the nurse safety app with a one-press panic alarm, fall detection, MeetSafe check-ins, and 24/7 professional monitoring. Built for home health, travel, ER, and night-shift nurses.",
  },
  "/nurses/er-trauma": {
    title: "ER Nurse Safety App | Duress Alarm & Incident Monitoring",
    description:
      "MySentry gives ER and trauma nurses a discreet duress alarm, fall detection, and 24/7 monitoring for high-pressure shifts. Protect yourself on every shift. Start free.",
  },
  "/nurses/home-health": {
    title: "Home Health Nurse Safety App | Lone Worker Protection",
    description:
      "MySentry protects home health nurses working alone in patient homes. One-press panic alarm, MeetSafe check-ins, and 24/7 monitoring so help is always close. Start free.",
  },
  "/nurses/night-shift": {
    title: "Night Shift Nurse Safety App | Crash Detection & 24/7 Monitoring",
    description:
      "MySentry protects night shift nurses during late-night commutes, parking lot walks, and post-shift drives home. Crash detection, panic alarm, and 24/7 monitoring. Start free.",
  },
  "/nurses/travel-nurses": {
    title: "Travel Nurse Safety App | Panic Button & 24/7 Monitoring",
    description:
      "MySentry keeps travel nurses safe in unfamiliar cities, new facilities, and late-night commutes. Panic alarm, fall detection, and 24/7 monitoring on your phone and watch. Start free.",
  },

  // ─── Blog ─────────────────────────────────────────────────────────────────
  "/blogs": {
    title: "Safety & Health Blog | Personal Safety Tips & Emergency Preparedness",
    description:
      "Expert advice on personal safety, fall prevention, family protection, and emergency preparedness. Read the latest from MySentry's safety and health blog.",
  },

  // ─── Features ─────────────────────────────────────────────────────────────
  "/features": {
    title: "Safety & Monitoring Features | MySentry",
    description:
      "Explore all of MySentry's powerful safety and health monitoring features. From panic alarms to fall detection, see how we protect you 24/7 with live video emergency response.",
  },
  "/features/panic-button-app": {
    title: "Panic Button App | One-Press Emergency Alarm with Live Video",
    description:
      "MySentry's panic button app sends a silent alarm with live video and GPS to 24/7 professional monitors. One press gets you help fast. Available on iOS and Android.",
  },
  "/features/fall-detection-app": {
    title: "Fall Detection App | Automatic Fall Alert with Emergency Response",
    description:
      "MySentry automatically detects falls and alerts 24/7 professional monitors with live video and GPS. No button press needed. Protect yourself and your loved ones.",
  },
  "/features/crash-detection": {
    title: "Crash Detection App | Automatic Car Accident Alert & Response",
    description:
      "MySentry detects car crashes automatically and alerts emergency services with your location and live video. Get help fast after an accident, even if you can't call.",
  },
  "/features/24-7-professional-monitoring": {
    title: "24/7 Professional Monitoring | Live Video Emergency Response",
    description:
      "MySentry's 24/7 professional monitoring team verifies emergencies with live video and dispatches help fast. Real humans, real response, around the clock.",
  },
  "/features/emergency-contacts": {
    title: "Emergency Contacts App | Real-Time Safety Alerts for Loved Ones",
    description:
      "MySentry notifies your emergency contacts instantly with your location and live video when an alert is triggered. Keep your family informed and connected.",
  },
  "/features/live-video-response": {
    title: "Live Video Response | Emergency Monitoring with Real-Time Video",
    description:
      "MySentry streams live video to professional monitors during emergencies so they can assess the situation and dispatch the right help fast. See what sets us apart.",
  },
  "/features/health-monitoring": {
    title: "Health Monitoring App | Real-Time Vitals Tracking & Alerts",
    description:
      "MySentry monitors your heart rate, SpO2, HRV, and more in real time. Get health alerts before a crisis develops. Compatible with Apple Watch and Samsung Galaxy Watch.",
  },
  "/features/meetsafe-check-ins": {
    title: "MeetSafe Check-Ins | Automated Safety Check-In App",
    description:
      "MySentry's MeetSafe check-ins let you schedule automated safety check-ins. If you don't respond, your emergency contacts and monitors are alerted instantly.",
  },
  "/features/safety-check-in-app": {
    title: "Safety Check-In App | Scheduled Check-Ins for Lone Workers",
    description:
      "MySentry's safety check-in app keeps lone workers and solo travelers safe with scheduled check-ins and automatic alerts if they miss a response. Try it free.",
  },
  // Semrush-flagged duplicate — needs unique entry
  "/features/health-monitoring-app-with-alerts": {
    title: "Health Monitoring App with Alerts | Vitals Tracking & Safety",
    description:
      "Track your heart rate, SpO2, and HRV with MySentry's health monitoring app. Get real-time safety alerts when vitals fall outside normal ranges. Works with Apple Watch.",
  },

  // ─── Use Cases ────────────────────────────────────────────────────────────
  "/use-cases": {
    title: "Who Uses MySentry | Safety App Use Cases",
    description:
      "Discover how MySentry protects women, families, seniors, lone workers, and healthcare workers with 24/7 safety monitoring and emergency response.",
  },
  "/use-cases/safety-app-for-women": {
    title: "Safety App for Women: Feel Secure, Live Free",
    description:
      "MySentry is a safety app for women, offering a panic alarm, fall detection, and 24/7 monitoring. Feel secure and live freely. Get your free trial today.",
  },
  "/use-cases/family-safety-app": {
    title: "Family Safety App with Monitoring & Alerts",
    description:
      "Keep your family safe with MySentry. Get real-time location, panic alerts, and 24/7 monitoring for peace of mind. Protect loved ones and get help fast. Try it free.",
  },
  "/use-cases/medical-alert-app-for-seniors": {
    title: "Medical Alert App for Seniors: Stay Safe",
    description:
      "MySentry helps seniors stay safe and independent with a medical alert app. It offers fall detection, health alerts, and 24/7 monitoring. Start your free trial.",
  },
  "/use-cases/lone-worker-safety-app": {
    title: "Lone Worker Safety App | Panic Alarm & 24/7 Monitoring",
    description:
      "Protect your lone workers with MySentry's safety app. Features panic alarm, fall detection, and 24/7 monitoring to ensure their safety wherever they work. Book a demo.",
  },
  "/use-cases/home-healthcare-worker-safety": {
    title: "Home Healthcare Worker Safety App | Lone Worker Protection",
    description:
      "Keep home healthcare workers safe with MySentry. Our app offers a panic alarm, fall detection, and 24/7 monitoring. Protect your team and book a demo today.",
  },
  "/use-cases/teen-driver-safety": {
    title: "Teen Driver Safety: Crash Detection for Parents",
    description:
      "Worried about your teen on the road? MySentry offers automatic crash detection, real-time location, and 24/7 monitoring. Get alerts if your teen is in an accident.",
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
      "MySentry protects home healthcare workers with fall detection, a panic alarm, and 24/7 monitoring. Keep your staff safe on every home visit. Book a demo today.",
  },
  "/industries/construction": {
    title: "Construction Safety App for Workers",
    description:
      "Keep construction workers safe with MySentry. Our app offers fall detection, panic alarms, and 24/7 monitoring for lone workers. Get help fast. Book a demo.",
  },
  "/industries/retail": {
    title: "Retail Worker Safety App | Silent Panic Alarm & Monitoring",
    description:
      "MySentry protects retail workers with a silent panic alarm, fall detection, and 24/7 monitoring. Reduce workplace violence risk and keep your team safe.",
  },
  "/industries/hospitality": {
    title: "Hospitality Worker Safety App | Panic Button & 24/7 Monitoring",
    description:
      "Keep hotel and hospitality workers safe with MySentry's panic alarm, fall detection, and 24/7 professional monitoring. Protect your lone workers on every shift.",
  },
  "/industries/real-estate": {
    title: "Real Estate Agent Safety App | Panic Button & GPS Tracking",
    description:
      "MySentry protects real estate agents during solo showings with a discreet panic alarm, GPS tracking, and 24/7 monitoring. Keep your agents safe on every appointment.",
  },
  "/industries/education": {
    title: "Education Safety App | Staff & Campus Worker Protection",
    description:
      "MySentry helps schools and universities protect lone staff and campus workers with fall detection, a panic alarm, and 24/7 professional monitoring. Book a demo.",
  },
  "/industries/security-guarding": {
    title: "Security Guard Safety App | Lone Worker Monitoring & Panic Alarm",
    description:
      "MySentry protects security guards working alone with a panic alarm, fall detection, and 24/7 monitoring. Get real-time alerts and live video response. Book a demo.",
  },

  // ─── Compare ──────────────────────────────────────────────────────────────
  "/compare": {
    title: "MySentry vs Competitors | Safety App Comparison",
    description:
      "Compare MySentry with Noonlight, Life360, FallCall, Google Personal Safety, and SOSecure/ADT. See which safety app is right for you.",
  },
  "/compare/noonlight-vs-mysentry": {
    title: "Noonlight vs MySentry | Which Safety App is Better?",
    description:
      "Compare Noonlight and MySentry side by side. See which app offers better fall detection, panic alarms, health monitoring, and 24/7 professional monitoring.",
  },
  "/compare/life360-vs-mysentry": {
    title: "Life360 vs MySentry | Family Safety App Comparison",
    description:
      "Compare Life360 and MySentry. MySentry adds fall detection, health monitoring, and 24/7 professional monitoring to family GPS tracking. See the full comparison.",
  },
  "/compare/fallcall-vs-mysentry": {
    title: "FallCall vs MySentry | Fall Detection App Comparison",
    description:
      "Compare FallCall and MySentry's fall detection features. MySentry adds panic alarms, crash detection, and 24/7 live video monitoring. See which app protects you better.",
  },
  "/compare/google-personal-safety-vs-mysentry": {
    title: "Google Personal Safety vs MySentry | Safety App Comparison",
    description:
      "Compare Google Personal Safety and MySentry. MySentry offers 24/7 professional monitoring, fall detection, and health tracking that Google's app doesn't provide.",
  },
  "/compare/sosecure-adt-vs-mysentry": {
    title: "SOSecure ADT vs MySentry | Personal Safety App Comparison",
    description:
      "Compare SOSecure by ADT and MySentry. See how MySentry's fall detection, health monitoring, and live video response stack up against ADT's personal safety app.",
  },
  "/compare/medical-alert-devices-vs-mysentry": {
    title: "Medical Alert Devices vs MySentry | Modern Safety Comparison",
    description:
      "Compare traditional medical alert devices with MySentry. No pendant required. MySentry uses your smartphone and smartwatch for fall detection and 24/7 monitoring.",
  },
  // Semrush-flagged duplicate — needs unique entry
  "/compare/mysentry-vs-citizen": {
    title: "MySentry vs Citizen App | Personal Safety App Comparison",
    description:
      "Compare MySentry and the Citizen app. MySentry offers personal fall detection, health monitoring, and direct 24/7 professional emergency response that Citizen doesn't provide.",
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
    title: "Safety Solutions for Delivery Drivers | Crash Detection & GPS",
    description:
      "MySentry offers real-time safety monitoring for delivery drivers, including crash detection, panic alarms, and GPS tracking, to protect your fleet and lone workers.",
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
      "Women living alone can feel secure with MySentry. Get peace of mind with fall detection, voice-activated panic alarms, and 24/7 monitoring. Start your free trial today.",
  },
  "/safety-for/seniors-aging-in-place": {
    title: "Aging in Place Safety: Keep Seniors Safe at Home",
    description:
      "Ensure aging in place safety for your parents. MySentry offers automatic fall detection, health monitoring, and 24/7 professional response. Keep loved ones safe at home.",
  },
  "/safety-for/solo-travelers": {
    title: "Solo Travel Safety App | Stay Safe Anywhere in the World",
    description:
      "Solo travelers, explore confidently. MySentry is a safety app with 24/7 monitoring, panic alarms, and fall detection. Get help anywhere, anytime. Start your free trial.",
  },

  // ─── Case Studies ─────────────────────────────────────────────────────────
  "/case-studies/home-healthcare": {
    title: "Case Study: MySentry for Home Healthcare Workers",
    description:
      "Discover how a home healthcare agency improved worker safety and satisfaction with MySentry's fall detection and panic alarm system. Read the full case study.",
  },
  "/case-studies/real-estate": {
    title: "MySentry Real Estate Case Study: Enhancing Agent Safety",
    description:
      "Discover how a regional real estate brokerage improved agent safety, boosted confidence, and saved on liability costs with MySentry's comprehensive safety solution.",
  },
  "/case-studies/field-services": {
    title: "MySentry Case Study: Field Services Safety Transformation",
    description:
      "Discover how a national field services company enhanced worker safety, achieved 100% OSHA compliance, and saw a 78% reduction in claims with MySentry.",
  },

  // ─── Resources ────────────────────────────────────────────────────────────
  "/resources/employer-one-pager": {
    title: "MySentry Employer One-Pager | Workforce Safety Overview",
    description:
      "Download MySentry's employer one-pager. Get a concise overview of our lone worker safety features, pricing, and how MySentry protects your workforce.",
  },

  // ─── Integrations ─────────────────────────────────────────────────────────
  "/integrations/apple-watch": {
    title: "Apple Watch Safety: MySentry for Personal Protection",
    description:
      "Turn your Apple Watch into a personal safety device. MySentry adds fall detection, a panic alarm, and crash alerts. Get help fast, directly from your wrist.",
  },
  "/integrations/samsung-galaxy-watch": {
    title: "Samsung Galaxy Watch Safety App | MySentry",
    description:
      "Turn your Samsung Galaxy Watch into a safety device. MySentry adds fall detection, panic alarm, and 24/7 monitoring to your Galaxy Watch. Start your free trial.",
  },
  "/integrations/oura-ring": {
    title: "Oura Ring Integration: Add 24/7 Safety Monitoring",
    description:
      "Integrate your Oura Ring with MySentry for 24/7 emergency response. Get fall detection, panic alarms, and professional monitoring. Stay safe and get help fast.",
  },

  // ─── Guides ───────────────────────────────────────────────────────────────
  "/guides/lone-worker-safety": {
    title: "Lone Worker Safety Guide, Compliance & Best Practices",
    description:
      "Keep your lone workers safe and meet compliance. MySentry helps you understand OSHA rules, duty of care, and safety tech. Protect your team today.",
  },
  "/guides/professional-monitoring": {
    title: "Professional Monitoring vs. App-Only Safety | Guide",
    description:
      "Professional monitoring provides 24/7 help. MySentry agents verify emergencies with live video and dispatch help fast, unlike app-only alerts. Get peace of mind today.",
  },
  "/guides/senior-safety-planning": {
    title: "Senior Safety Planning Guide for Aging Parents",
    description:
      "Help your aging parents stay safe and independent at home. This guide shows you how to plan for their safety, prevent falls, and use MySentry for peace of mind.",
  },
};
