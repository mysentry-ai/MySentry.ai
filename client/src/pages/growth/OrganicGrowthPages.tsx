import type { ComponentProps } from "react";
import SEOPageTemplate from "@/components/SEOPageTemplate";

type PageConfig = ComponentProps<typeof SEOPageTemplate>;

const sharedSetup = {
  devices: "A currently supported smartphone. Optional wearable controls or device-detected events require an eligible device and supported configuration.",
  permissions: "Notifications, location, motion, background activity, microphone, camera, and contacts depend on the supported features the user enables.",
  connectivity: "Alert delivery and shared context require an available supported network connection. Keep an alternative plan for disconnected locations.",
  limitations: "Feature operation depends on supported devices, app state, permissions, connectivity, plan, region, and service availability. Maintain a separate plan for disconnected locations.",
};

const sharedAfterAlert = [
  "The user may cancel or close a supported alert when safe and able to respond.",
  "Configured contacts may receive supported notifications and permitted context for that workflow.",
  "Professional monitoring may attempt contact and coordinate appropriate next steps when included and available under the plan.",
  "Call local emergency services directly whenever it is safe and appropriate. Timing, response, and arrival are not guaranteed.",
];

const peopleLivingAlone: PageConfig = {
  seoTitle: "Personal Safety App for People Living Alone | MySentry",
  seoDescription: "Plan check-ins, trusted contacts, and eligible safety features with a supplemental personal safety app for independent routines.",
  canonical: "https://mysentry.ai/safety-for/people-living-alone",
  label: "Safety for Independent Living",
  h1: "Living Alone Should Still Feel Connected",
  h1Sub: "Build a clear safety routine for evenings, errands, exercise, travel, and time at home.",
  heroDescription: "MySentry can add user-activated alerts, scheduled check-ins, trusted contacts, and eligible monitoring to the plan you choose.",
  heroImage: "/images/challenge-female-living-alone-800w.jpg",
  problem: "When you live alone, another person may not automatically know your schedule, your route, or when a routine has changed. In an urgent moment, unlocking a phone and contacting several people may also be difficult.",
  empathy: "Independence does not require constant surveillance. A useful plan should respect privacy, fit daily life, and make the next step clear without promising that technology can detect or resolve every situation.",
  steps: [
    { title: "Choose the moments that need a plan", description: "Identify routines such as a late arrival, solo walk, home project, trip, or activity where a scheduled check-in or faster Panic Alarm access may be useful." },
    { title: "Set contacts, permissions, and backups", description: "Select trusted contacts, enable only the supported permissions you want, and document what to do if the phone, battery, or connection is unavailable." },
    { title: "Practice before an urgent moment", description: "Review how to start and close supported alerts, what contacts may receive, and when to call local emergency services directly." },
  ],
  primaryCta: { text: "Review Individual Plans", href: "/pricing#pricing-plans" },
  secondaryCta: { text: "See How MySentry Works", href: "/how-it-works" },
  directAnswer: "A personal safety app for someone living alone can supplement an agreed routine with a user-activated Panic Alarm, scheduled Safety Checks, trusted contacts, and eligible device-detected events. MySentry depends on the active plan, supported device, settings, permissions, app state, connectivity, region, and service availability. It does not provide continuous supervision or guarantee an emergency outcome.",
  howItWorks: [
    "Install MySentry on a supported phone and confirm current plan and regional eligibility.",
    "Choose trusted contacts and supported permissions based on the context you want available during an eligible alert.",
    "Schedule a Safety Check before a planned activity or use the Panic Alarm during an urgent concern when safe and able.",
    "Eligible device-detected events may begin a safety check, but no phone or wearable detects every event.",
  ],
  afterAlert: sharedAfterAlert,
  bestFor: ["Adults who live alone and want a prepared check-in routine", "People who walk, exercise, travel, or run errands independently", "Households coordinating support without constant tracking"],
  notIdealFor: ["Replacing direct calls to local emergency services", "Continuous supervision or guaranteed detection", "Use without a supported phone, permissions, battery, or connection"],
  keyTakeaways: ["Start with the routine and people involved, then choose technology that fits.", "Safety Checks and a Panic Alarm support different moments.", "MySentry supplements an independent-living plan and does not replace emergency services."],
  faqs: [
    { question: "Does MySentry track someone who lives alone all the time?", answer: "MySentry does not describe unrestricted continuous contact access to private location or wellness data. Sharing depends on supported features, settings, permissions, and active alert workflows." },
    { question: "What is a scheduled Safety Check?", answer: "A user may schedule a supported check-in before a planned activity. A missed response may continue the configured eligible workflow, subject to device, app, permission, connection, plan, and service requirements." },
    { question: "Will MySentry detect every fall or crash?", answer: "No. Eligible detection depends on the device, how it is carried or worn, settings, permissions, app state, connectivity, and event conditions." },
    { question: "When should I call 911 directly?", answer: "Call 911 or local emergency services whenever you can do so safely during an immediate emergency. MySentry adds configured alerts, context, contacts, and monitoring for supported situations." },
  ],
  setupRequirements: sharedSetup,
  proofBlocks: [
    { claim: "User-controlled routines", detail: "The user chooses supported contacts, permissions, Safety Checks, and alert options that fit the situation." },
    { claim: "Permission-based context", detail: "Available location, audio, video, or contact context depends on feature support and enabled permissions." },
    { claim: "A backup matters", detail: "An alternative process is important when a device, battery, app, network, or third party is unavailable." },
  ],
  relatedLinks: [
    { text: "Safety Check-In App", href: "/features/safety-check-in-app" },
    { text: "Personal Safety for Renters", href: "/use-cases/personal-safety-app-for-renters" },
    { text: "Solo Traveler Safety", href: "/safety-for/solo-travelers" },
    { text: "Compare Plans", href: "/pricing" },
  ],
};

const agingInPlace: PageConfig = {
  seoTitle: "Aging in Place Safety Checklist for Older Adults and Families | MySentry",
  seoDescription: "Use a respectful room-by-room checklist to plan home safety, communication, support, technology, privacy, and emergency contacts together.",
  canonical: "https://mysentry.ai/guides/aging-in-place-checklist",
  label: "Aging in Place Guide",
  h1: "An Aging in Place Checklist You Can Complete Together",
  h1Sub: "Protect independence by planning with the older adult, not around them.",
  heroDescription: "Organize the home, contacts, routines, professional guidance, and technology that support the person's goals.",
  heroImage: "/images/cdn/hero-family-multigenerational-E2GoJdiP8d3vSnxHi3L9fP.webp",
  problem: "Aging in place involves more than buying a device. Lighting, floors, stairs, bathrooms, transportation, medications, communication, nearby support, privacy, and emergency information all shape the plan.",
  empathy: "Older adults and families may agree on the goal but differ on how much support feels useful. A written, consent-based checklist keeps expectations visible and independence at the center.",
  steps: [
    { title: "Start with goals and consent", description: "Ask what independence means to the older adult, which routines matter, who should participate, and what information they want to share." },
    { title: "Review the home and routine", description: "Walk through entrances, lighting, floors, stairs, bathrooms, transportation, phones, charging, and nearby help with appropriate professionals." },
    { title: "Write and practice the plan", description: "Document contacts, clinician-managed information, check-in expectations, emergency steps, technology requirements, and a backup for device or connection problems." },
  ],
  primaryCta: { text: "Review the Senior Decision Guide", href: "/use-cases/medical-alert-app-for-seniors" },
  secondaryCta: { text: "Explore Senior Safety", href: "/seniors" },
  directAnswer: "An aging-in-place safety checklist is a consent-based review of the home, routines, contacts, professional guidance, transportation, technology, privacy, and emergency steps that support an older adult's goals. MySentry may supplement that plan with supported alerts, Safety Checks, trusted contacts, eligible fall checks, and professional monitoring. It does not replace clinical care, home modifications, supervision, emergency services, or local support.",
  howItWorks: [
    "Discuss goals, routines, concerns, privacy expectations, and preferred support with the older adult.",
    "Review regularly used areas for lighting, trip hazards, access, communication, and tasks that may need a repair, adaptation, or professional assessment.",
    "Organize medication and health questions with qualified clinicians or pharmacists rather than relying on an app to manage care.",
    "Write contacts, transportation options, check-in expectations, direct emergency steps, and technology backups.",
  ],
  afterAlert: sharedAfterAlert,
  bestFor: ["Older adults participating in their own planning", "Families coordinating practical, consent-based support", "Caregivers documenting contacts, routines, and backups"],
  notIdealFor: ["Replacing clinical or home-safety assessment", "Making decisions without the older adult when they can participate", "Treating technology as a substitute for repairs, care, supervision, or local help"],
  keyTakeaways: ["Independence, dignity, privacy, and consent belong in the checklist.", "Combine environment, people, professional guidance, routines, and technology.", "MySentry connects supported alerts, wellness context, trusted contacts, and eligible professional monitoring."],
  faqs: [
    { question: "Who should complete the checklist?", answer: "The older adult should participate whenever possible. Family, caregivers, clinicians, pharmacists, therapists, home-safety professionals, and local support organizations may contribute within their roles." },
    { question: "What rooms should we review?", answer: "Review entrances, hallways, bedrooms, bathrooms, kitchen, stairs, outdoor paths, and any area used regularly. Consider lighting, floors, reach, access, communication, and routine." },
    { question: "Can an app prevent falls?", answer: "No. MySentry does not prevent falls. Eligible devices may identify some fall-like events and begin a supported check, but no system detects every event." },
    { question: "How should family support respect privacy?", answer: "Agree on contacts, situations, permissions, information sharing, and review dates with the older adult. MySentry does not describe unrestricted continuous access to private wellness data." },
  ],
  setupRequirements: sharedSetup,
  proofBlocks: [
    { claim: "Consent comes first", detail: "The older adult helps choose contacts, routines, permissions, and the technology they want to use." },
    { claim: "Technology is one layer", detail: "The checklist also covers the home, professional guidance, transportation, local support, and direct emergency steps." },
    { claim: "Practice the workflow", detail: "A realistic plan includes device use, charging, permissions, connection, contacts, and a backup." },
  ],
  relatedLinks: [
    { text: "Senior Safety App Guide", href: "/use-cases/medical-alert-app-for-seniors" },
    { text: "Senior Safety Planning", href: "/guides/senior-safety-planning" },
    { text: "Wearable Fall Detection Limits", href: "/guides/wearable-fall-detection-limitations" },
    { text: "Compare Plans", href: "/pricing" },
  ],
};

const familyPrivacy: PageConfig = {
  seoTitle: "Family Safety Without Constant Tracking | MySentry",
  seoDescription: "Build consent-based family safety routines with agreed check-ins, trusted contacts, situational sharing, and clear privacy boundaries.",
  canonical: "https://mysentry.ai/guides/family-safety-without-constant-tracking",
  label: "Family Safety and Privacy Guide",
  h1: "Family Safety Does Not Have to Mean Constant Tracking",
  h1Sub: "Agree on the moments that need support, the information to share, and when the routine ends.",
  heroDescription: "A family plan can combine trusted contacts, check-ins, permissions, and supported alerts while respecting age, independence, and consent.",
  heroImage: "/images/cdn/hero-family-safety-mefr82ZSQwHKQykhJyfmsj.webp",
  problem: "Families may want reassurance during a commute, trip, late arrival, first drive, or time alone. Constant access to another person's location can create a different problem when expectations and privacy boundaries were never agreed.",
  empathy: "The goal is not to choose between caring and privacy. Decide together what support fits the moment, who receives it, and how everyone can change the plan.",
  steps: [
    { title: "Name the situation", description: "Define the moments that need a check-in, such as arriving home, completing a trip, meeting someone, or returning from an activity." },
    { title: "Agree on contacts and information", description: "Choose who participates, what a missed check-in means, which permissions fit, and when situational sharing should stop." },
    { title: "Practice and revisit", description: "Test the workflow, document a backup for device or network problems, and review the agreement as routines and needs change." },
  ],
  primaryCta: { text: "Review Family Plans", href: "/pricing#pricing-plans" },
  secondaryCta: { text: "Explore Family Safety", href: "/families" },
  directAnswer: "A family can build a safety routine without making constant tracking the default by agreeing on situations, scheduled check-ins, trusted contacts, supported alert context, privacy boundaries, and a clear end to situational sharing. MySentry workflows depend on the plan, device, settings, permissions, app state, connectivity, region, and service availability.",
  howItWorks: ["Discuss the purpose with each family member who can participate.", "Choose a supported Safety Check, Panic Alarm, contact, or alert workflow for the situation.", "Enable only the permissions and sharing appropriate for the agreed purpose.", "Document what a missed response means and when someone should call directly."],
  afterAlert: sharedAfterAlert,
  bestFor: ["Families who want agreed check-ins for specific moments", "Parents and older teens discussing independence and privacy", "Adults coordinating consent-based support with relatives"],
  notIdealFor: ["Secret monitoring or unrestricted information access", "Parental-control, speed-monitoring, or driving-telemetry expectations", "Replacing direct family communication or emergency services"],
  keyTakeaways: ["Start with a shared purpose, not a tracking feature.", "Choose the minimum information and duration that fit.", "Revisit the agreement as independence, routines, and devices change."],
  faqs: [
    { question: "Can family safety work without constant location sharing?", answer: "Yes. Families can use agreed check-ins, trusted contacts, and supported context during specific workflows rather than making continuous access the default." },
    { question: "Can parents secretly monitor a teen with MySentry?", answer: "This guide does not recommend secret monitoring. Use should follow applicable law, account roles, supported features, age requirements, household agreements, and consent where required." },
    { question: "Does MySentry provide driving speed reports?", answer: "This page does not claim speed monitoring, driving scores, or continuous driving telemetry. Review current product documentation for supported features." },
    { question: "What should happen after a missed check-in?", answer: "Agree on a contact sequence, direct calls, nearby help, and when to contact local emergency services. Do not rely on a single notification." },
  ],
  setupRequirements: sharedSetup,
  proofBlocks: [
    { claim: "Situation-specific planning", detail: "The family defines the event, contact expectations, and information that fit the moment." },
    { claim: "Permission-based sharing", detail: "Supported context depends on settings, permissions, plan, device, and active workflow." },
    { claim: "Agreements can change", detail: "A useful family routine is reviewed as needs, independence, roles, and technology change." },
  ],
  relatedLinks: [
    { text: "Family Safety App", href: "/use-cases/family-safety-app" },
    { text: "Family Connectivity", href: "/features/family-connectivity" },
    { text: "Teen Driver Safety", href: "/use-cases/teen-driver-safety" },
    { text: "Compare Plans", href: "/pricing" },
  ],
};

const nightShiftNurse: PageConfig = {
  seoTitle: "Night Shift Nurse Safety Checklist for Parking and Commutes | MySentry",
  seoDescription: "Plan transitions before and after a nursing shift with workplace procedures, parking, communication, and fatigue-aware commute decisions.",
  canonical: "https://mysentry.ai/guides/night-shift-nurse-safety-checklist",
  label: "Night Shift Nurse Guide",
  h1: "Plan the Shift, the Parking Route, and the Trip Home",
  h1Sub: "A personal safety checklist should reinforce workplace procedures and fatigue-aware decisions.",
  heroDescription: "Use a repeatable plan for arrival, handoff, access, parking, communication, and the commute before an urgent concern changes the moment.",
  heroImage: "/images/cdn/hero-lone-worker-JfxZMZUbkeVn8y8gsYxau5.webp",
  problem: "Night-shift nurses may move through quieter entrances, parking areas, public transit, or long commutes while staffing, visibility, transportation, and alertness vary.",
  empathy: "A checklist cannot remove those risks. It can make employer procedures, communication steps, transportation choices, and personal-safety tools easier to review before the end of a demanding shift.",
  steps: [
    { title: "Prepare before the shift", description: "Review approved entrances, parking or transit, security contacts, charging, transportation, and employer escort and reporting procedures." },
    { title: "Use facility procedures", description: "Follow staffing, duress, de-escalation, security, incident-reporting, and access-control processes. MySentry does not replace them." },
    { title: "Reassess before leaving", description: "Consider alertness, route, lighting, escort options, transportation alternatives, and direct contact before beginning the trip home." },
  ],
  primaryCta: { text: "Explore Night Shift Safety", href: "/nurses/night-shift" },
  secondaryCta: { text: "Review Plans", href: "/pricing" },
  directAnswer: "A night-shift nurse safety checklist is a repeatable plan for workplace procedures, access, parking or transit, communication, alertness, and the commute. MySentry may add a supported Panic Alarm, scheduled Safety Check, trusted contacts, and eligible monitoring, but it does not replace employer policy, security, clinical judgment, transportation decisions, or emergency services.",
  howItWorks: ["Save facility security, supervisor, transportation, and personal contact information.", "Confirm approved routes and use available escort procedures when appropriate.", "Follow workplace violence prevention, duress, de-escalation, reporting, and emergency procedures.", "Before leaving, reassess whether you are able to travel safely and use an appropriate alternative if not."],
  afterAlert: ["Use facility duress, security, and emergency procedures first when appropriate.", ...sharedAfterAlert.slice(1)],
  bestFor: ["Nurses reviewing parking, transit, and commute routines", "Travel and home-health nurses adapting to unfamiliar locations", "Teams discussing how personal tools fit employer procedures"],
  notIdealFor: ["Replacing training, staffing, security, escorts, or reporting", "Diagnosing fatigue or fitness to drive", "Guaranteeing prevention, contact, escalation, response, or outcome"],
  keyTakeaways: ["The checklist begins with employer procedures and judgment.", "Parking and the commute are separate planning moments from bedside work.", "Do not drive if you are not able to do so safely. Use an appropriate alternative."],
  faqs: [
    { question: "How does MySentry fit with a hospital duress system?", answer: "Follow facility duress, security, emergency, and reporting procedures. MySentry can add personal alerts, Safety Checks, permitted context, contacts, and eligible monitoring for approved situations." },
    { question: "What should I check before walking to parking?", answer: "Review the approved route, lighting, access, security or escort options, transportation, phone battery, connection, and employer procedures." },
    { question: "Can an app tell me whether I am too tired to drive?", answer: "No. MySentry does not diagnose fatigue or determine fitness to drive. If you are not able to travel safely, use an appropriate alternative." },
    { question: "Will an alert guarantee that security or police arrive?", answer: "No. Alert delivery, contact, escalation, third-party response, arrival, and outcome are not guaranteed." },
  ],
  setupRequirements: sharedSetup,
  proofBlocks: [
    { claim: "Employer procedures remain primary", detail: "Facility security, duress, training, reporting, staffing, and emergency procedures are not replaced by an app." },
    { claim: "Transitions deserve a plan", detail: "Arrival, parking, transit, and the commute have different conditions from the clinical unit." },
    { claim: "A connected personal workflow", detail: "Supported alerts can connect the nurse, configured contacts, permitted context, and eligible monitoring, subject to device, permission, connection, plan, and service conditions." },
  ],
  relatedLinks: [
    { text: "Night Shift Nurses", href: "/nurses/night-shift" },
    { text: "ER and Trauma Nurses", href: "/nurses/er-trauma" },
    { text: "Travel Nurses", href: "/nurses/travel-nurses" },
    { text: "Panic Alarm App", href: "/features/panic-button-app" },
  ],
};

const renters: PageConfig = {
  seoTitle: "Personal Safety App for Renters and Apartment Living | MySentry",
  seoDescription: "Add a portable personal-safety routine for apartment living, shared spaces, transit, and time alone without replacing home security.",
  canonical: "https://mysentry.ai/use-cases/personal-safety-app-for-renters",
  label: "Personal Safety for Renters",
  h1: "A Safety Plan That Moves With You",
  h1Sub: "Support the person moving through the lobby, parking area, transit stop, neighborhood, and home.",
  heroDescription: "MySentry can supplement appropriate apartment security with user-activated alerts, check-ins, trusted contacts, and eligible monitoring.",
  heroImage: "/images/home-protection-bubble-800w.png",
  problem: "Renters may have limited control over doors, lighting, cameras, common areas, parking, or building access. Home-security measures also remain at the property when the person leaves.",
  empathy: "A portable safety routine should complement locks, alarms, cameras, building procedures, and situational awareness. It should not pretend an app replaces them.",
  steps: [
    { title: "Separate home and personal layers", description: "Review what the property, building, landlord, or home-security system covers and where a person-centered routine may help." },
    { title: "Choose situations and contacts", description: "Identify shared spaces, transit, walks, late arrivals, solo time, or maintenance visits that may benefit from an agreed workflow." },
    { title: "Practice with a backup", description: "Confirm permissions, contacts, charging, connection, direct emergency steps, and what to do when technology is unavailable." },
  ],
  primaryCta: { text: "Review Individual Plans", href: "/pricing#pricing-plans" },
  secondaryCta: { text: "Explore the Ring Integration", href: "/integrations/ring" },
  directAnswer: "A personal safety app can travel with a renter beyond the apartment and supplement appropriate home-security measures with supported alerts, scheduled check-ins, trusted contacts, and eligible monitoring. MySentry does not replace locks, lighting, cameras, alarms, building security, landlord responsibilities, emergency services, or situational judgment.",
  howItWorks: ["Review the apartment, common areas, access, parking, transit, and neighborhood routines separately.", "Use property and home-security measures appropriate to the residence.", "Configure supported contacts, permissions, Safety Checks, and Panic Alarm access.", "Keep a backup for a lost phone, low battery, unavailable app, or disconnected network."],
  afterAlert: sharedAfterAlert,
  bestFor: ["Renters who want a portable personal-safety routine", "People moving through shared entrances, parking, transit, and neighborhoods", "Ring users comparing home and personal safety layers"],
  notIdealFor: ["Replacing locks, alarms, cameras, building security, or property procedures", "Secret monitoring of roommates or household members", "Use without an available supported phone and connection"],
  keyTakeaways: ["Home security protects a place; a personal safety routine follows the person.", "Use appropriate property measures alongside personal tools.", "MySentry connects supported personal alerts, trusted contacts, permitted context, and eligible monitoring."],
  faqs: [
    { question: "Does MySentry replace apartment security?", answer: "No. MySentry does not replace locks, lighting, cameras, alarms, access control, building security, landlord responsibilities, or emergency services." },
    { question: "Can I use MySentry outside my apartment?", answer: "Supported features may be used in eligible locations, subject to device, permissions, app state, network, plan, region, and service availability." },
    { question: "How does Ring relate to renter safety?", answer: "The verified Ring page explains the current integration and eligibility. Home-security measures address the property, while MySentry is designed around supported personal alert workflows." },
    { question: "What if my building has poor mobile service?", answer: "Alert delivery requires an available supported connection. Keep direct emergency numbers, building procedures, nearby contacts, and another backup." },
  ],
  setupRequirements: sharedSetup,
  proofBlocks: [
    { claim: "Portable personal-safety layer", detail: "Supported alerts and check-ins can be part of a routine that continues beyond the residence." },
    { claim: "Home security remains separate", detail: "MySentry does not replace property security, access control, building procedures, or emergency services." },
    { claim: "Plan for common areas", detail: "Entrances, elevators, stairs, laundry, parking, transit, and maintenance visits may need different procedures." },
  ],
  relatedLinks: [
    { text: "Ring Integration", href: "/integrations/ring" },
    { text: "People Living Alone", href: "/safety-for/people-living-alone" },
    { text: "Panic Alarm App", href: "/features/panic-button-app" },
    { text: "Compare Plans", href: "/pricing" },
  ],
};

const wearableLimits: PageConfig = {
  seoTitle: "Wearable Fall Detection: Capabilities and Limitations | MySentry",
  seoDescription: "Understand what eligible consumer devices may detect, why events can be missed, and which settings, permissions, wearing conditions, and connections matter.",
  canonical: "https://mysentry.ai/guides/wearable-fall-detection-limitations",
  label: "Wearable Fall Detection Guide",
  h1: "Fall Detection Can Help, but It Cannot Detect Every Fall",
  h1Sub: "Device, sensors, setup, wearing conditions, event motion, app state, and connectivity all matter.",
  heroDescription: "Ask better questions about eligibility, limitations, alert workflows, trusted contacts, and backups.",
  heroImage: "/images/happy-senior-watch-800w.jpg",
  problem: "A consumer phone or watch interprets sensor patterns. A real event may not match the expected pattern, the device may not be worn or carried as intended, or settings and connectivity may be unavailable.",
  empathy: "Families and users want a clear answer. Fall detection may add a useful layer, but it cannot replace direct emergency action, clinical assessment, or a complete safety plan.",
  steps: [
    { title: "Confirm current eligibility", description: "Check the supported phone, wearable model, software, app version, plan, region, permissions, and wearing requirements." },
    { title: "Understand the workflow", description: "Review what may begin a check, how the user can respond, what contacts may receive, and what monitoring may do." },
    { title: "Keep direct and local backups", description: "Maintain emergency numbers, nearby contacts, appropriate home changes, professional guidance, and a plan for a missed event." },
  ],
  primaryCta: { text: "Review Fall Detection", href: "/features/fall-detection-app" },
  secondaryCta: { text: "Check Wearable Options", href: "/integrations/apple-watch" },
  directAnswer: "Wearable fall detection uses supported device sensors and software to identify some fall-like motion patterns. It may miss an event or identify non-fall motion. Behavior varies by device, model, software, configuration, permissions, wearing conditions, event characteristics, app state, connection, plan, region, and service availability. MySentry is not a medical device and does not guarantee detection or response.",
  howItWorks: ["An eligible device observes supported motion or sensor information.", "A qualifying pattern may begin a safety-check workflow when the integration and plan support it.", "The user may be asked to respond, cancel, or provide context when safe and able.", "A missed event, false alert, permission problem, battery issue, or unavailable connection remains possible."],
  afterAlert: sharedAfterAlert,
  bestFor: ["People comparing eligible phone and wearable fall detection", "Older adults and families building a broader plan", "Users willing to confirm setup, wearing, battery, permissions, and connectivity"],
  notIdealFor: ["Replacing clinical assessment, prevention, supervision, or prescribed equipment", "Assuming every fall will be detected", "Presenting unverified Oura or WHOOP integrations as available"],
  keyTakeaways: ["No consumer fall-detection system identifies every event.", "Eligibility and configuration should be checked before relying on a workflow.", "Fall detection belongs inside a broader plan."],
  faqs: [
    { question: "Why can a wearable miss a fall?", answer: "The motion may not match a supported pattern, the device may not be carried or worn as expected, or settings, permissions, battery, app state, software, or connectivity may affect the workflow." },
    { question: "Can fall detection create a false alert?", answer: "Yes. Non-fall movement may resemble a supported pattern. Users should understand how to respond to or cancel an alert when safe and able." },
    { question: "Is MySentry integrated with Oura Ring today?", answer: "No. The Oura Ring page is explicitly Coming Soon and does not represent a live integration, launch date, model list, or current data transfer." },
    { question: "Does a detected fall guarantee emergency help?", answer: "No. Detection, delivery, contact, escalation, third-party response, arrival, and outcome are not guaranteed." },
  ],
  setupRequirements: sharedSetup,
  proofBlocks: [
    { claim: "Eligibility is specific", detail: "Model, software, plan, region, configuration, permissions, and app requirements determine support." },
    { claim: "Events can be missed", detail: "No supported phone or wearable should be represented as detecting every fall-like event." },
    { claim: "MySentry is non-medical", detail: "The service does not diagnose, predict, treat, or prevent a condition." },
  ],
  relatedLinks: [
    { text: "Fall Detection App", href: "/features/fall-detection-app" },
    { text: "Apple Watch", href: "/integrations/apple-watch" },
    { text: "Samsung Galaxy Watch", href: "/integrations/samsung-galaxy-watch" },
    { text: "Oura Ring Coming Soon", href: "/integrations/oura-ring" },
  ],
};

const utilityWorkers: PageConfig = {
  seoTitle: "Personal Safety App for Utility and Field Workers | MySentry",
  seoDescription: "Explore a supplemental personal-safety layer for changing worksites and field travel within employer training, supervision, and emergency procedures.",
  canonical: "https://mysentry.ai/solutions/utility-workers",
  label: "Utility and Field Worker Safety",
  h1: "Support the Worker Between Dispatch, Worksite, and Return",
  h1Sub: "Add a personal-safety layer to the employer's hazard assessment, training, supervision, and emergency procedures.",
  heroDescription: "MySentry can support eligible worker alerts and check-ins, but it does not replace workplace controls, communication systems, or regulatory responsibilities.",
  heroImage: "/images/worker-safety-800w.png",
  problem: "Utility and field technicians may travel between changing locations, work outside normal hours, enter customer or remote sites, and move in and out of reliable communication coverage.",
  empathy: "Employers need a plan that fits the work rather than a promise that one app covers every hazard. Technology should follow the risk assessment and reinforce clear procedures.",
  steps: [
    { title: "Assess the work and locations", description: "Identify tasks, travel, isolation, weather, access, public interaction, signal limits, supervision, and existing controls." },
    { title: "Define check-ins and escalation", description: "Document who expects a response, what a missed check-in means, which contacts act, and which disconnected backup applies." },
    { title: "Evaluate MySentry fit", description: "Confirm devices, permissions, connectivity, account roles, plan, region, service availability, and policy alignment." },
  ],
  primaryCta: { text: "Discuss Employer Fit", href: "/contact" },
  secondaryCta: { text: "Review Lone Worker Safety", href: "/use-cases/lone-worker-safety-app" },
  directAnswer: "A personal safety app may supplement a utility or field-worker program with user-activated alerts, scheduled Safety Checks, configured contacts, and eligible professional monitoring. It must fit the employer's hazard assessment, training, supervision, communication, security, reporting, and emergency procedures. MySentry does not guarantee legal compliance, universal coverage, detection, delivery, response, or outcome.",
  howItWorks: ["The employer assesses hazards by role, task, location, travel, schedule, and communication coverage.", "The team defines check-ins, internal contacts, direct emergency steps, and a disconnected backup.", "Eligible workers configure the supported device, app, permissions, contacts, and plan.", "The employer reviews incidents, worker feedback, device limits, and changing conditions."],
  afterAlert: ["Workers follow employer and site procedures, including direct calls when appropriate.", ...sharedAfterAlert.slice(1)],
  bestFor: ["Utility and field teams evaluating a supplemental layer", "Programs with defined contacts, escalation, and disconnected backups", "Employers prepared to verify eligibility and responsibilities"],
  notIdealFor: ["Replacing hazard controls, radios, dispatch, supervision, training, or security", "Guaranteeing OSHA or legal compliance", "Assuming offline operation, universal coverage, dashboards, or audit trails"],
  keyTakeaways: ["Start with work, hazards, locations, and employer responsibilities.", "Define the human response and disconnected backup before choosing an app.", "Connect MySentry alerts to documented contacts, escalation roles, training, and backup procedures."],
  faqs: [
    { question: "Does MySentry make a program legally compliant?", answer: "No. Requirements vary by jurisdiction, industry, role, hazard, and employer obligations. Obtain qualified legal and safety guidance." },
    { question: "Does MySentry work in every remote location?", answer: "No. Alert delivery and shared context require an available supported connection. Employers need a separate process for disconnected work." },
    { question: "Can supervisors continuously track workers?", answer: "This page does not claim unrestricted continuous tracking. Access depends on supported roles, settings, permissions, plan, and active workflows, subject to policy and law." },
    { question: "Does MySentry replace radios or dispatch?", answer: "No. MySentry does not replace site communication, radios, dispatch, supervision, security, work procedures, or direct emergency calls." },
  ],
  setupRequirements: {
    devices: "Currently supported worker phones and any eligible optional wearable configuration approved by the employer.",
    permissions: "Permissions depend on enabled features, account roles, employer policy, applicable law, and worker notice or consent requirements.",
    connectivity: "Alert delivery and shared context require an available supported connection. Maintain an employer-defined disconnected backup.",
    limitations: "MySentry does not replace hazard controls, training, supervision, dispatch, radios, security, reporting, emergency procedures, or legal guidance.",
  },
  proofBlocks: [
    { claim: "Program fit comes first", detail: "The employer defines hazards, controls, training, check-ins, escalation, and backups before adding technology." },
    { claim: "Connectivity is a constraint", detail: "A documented alternative is required where a supported network is unavailable." },
    { claim: "No compliance guarantee", detail: "An app cannot guarantee that every legal, regulatory, contractual, or site requirement is met." },
  ],
  relatedLinks: [
    { text: "Lone Worker Safety App", href: "/use-cases/lone-worker-safety-app" },
    { text: "Lone Worker Safety Guide", href: "/guides/lone-worker-safety" },
    { text: "Delivery Drivers", href: "/solutions/delivery-drivers" },
    { text: "Contact MySentry", href: "/contact" },
  ],
};

function GrowthPage({ config }: { config: PageConfig }) {
  return <SEOPageTemplate {...config} />;
}

export const PeopleLivingAlonePage = () => <GrowthPage config={peopleLivingAlone} />;
export const AgingInPlaceChecklistPage = () => <GrowthPage config={agingInPlace} />;
export const FamilySafetyWithoutTrackingPage = () => <GrowthPage config={familyPrivacy} />;
export const NightShiftNurseChecklistPage = () => <GrowthPage config={nightShiftNurse} />;
export const RenterSafetyPage = () => <GrowthPage config={renters} />;
export const WearableFallLimitationsPage = () => <GrowthPage config={wearableLimits} />;
export const UtilityWorkersPage = () => <GrowthPage config={utilityWorkers} />;
