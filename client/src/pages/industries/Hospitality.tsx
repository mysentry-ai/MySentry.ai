
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function Hospitality() {
  return (
    <SEOPageTemplate
      seoTitle="Hospitality Worker Safety App | MySentry"
      seoDescription="Protect your hotel and hospitality staff with MySentry's lone worker safety app. Features panic buttons and fall detection for housekeeping and front desk staff. Book a demo."
      canonical="https://mysentry.ai/industries/hospitality"
      label="INDUSTRY"
      h1="Hospitality Worker Safety App"
      problem="Hospitality staff often work alone in guest rooms or isolated areas, making them vulnerable to threats, accidents, or medical emergencies with no one nearby to help."
      empathy="Your team's safety is your top priority. Ensuring they feel secure shouldn't be a constant source of worry for you or for them."
      steps={[
        { title: "Equip Your Team", description: "Provide your staff with the MySentry app on their existing smartphones. No new hardware is needed." },
        { title: "Monitor & Respond", description: "Our 24/7 professional monitoring team responds instantly to any alert, from a panic button press to a detected fall." },
        { title: "Ensure Peace of Mind", description: "Give your employees confidence that help is always just a tap away, improving morale and retention." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry is a hospitality worker safety app that equips hotel staff with a panic button, fall detection, and 24/7 professional monitoring on their smartphone. It helps employers meet safety mandates and protect lone workers like housekeepers and maintenance staff, ensuring a rapid response to any emergency."
      howItWorks={[
        "Staff are enrolled online through the employer dashboard, then download the MySentry app onto their personal or work-issued smartphone.",
        "A discreet panic alarm can be triggered with a single tap or voice command.",
        "Automatic fall detection sends an alert even if the employee is incapacitated.",
        "Our 24/7 professional monitoring center verifies the emergency and dispatches help.",
      ]}
      afterAlert={[
        "Our U.S.-based monitoring team receives the alert with the employee's precise location.",
        "An agent immediately attempts to contact the employee via call, text, and live video.",
        "If the employee is unresponsive or confirms the emergency, we contact hotel security and local 911.",
        "Management is kept informed with real-time updates throughout the incident.",
      ]}
      bestFor={["Hotels & Resorts", "Casino Staff", "Housekeeping & Janitorial", "Maintenance & Engineering", "Event & Banquet Staff"]}
      notIdealFor={["Locations without reliable cellular or Wi-Fi service.", "Companies unwilling to implement a formal safety response plan."]}
      keyTakeaways={[
        "Protect your lone workers and comply with hotel safety regulations.",
        "Reduce incident response times with 24/7 professional monitoring.",
        "Improve staff morale, retention, and sense of security at work.",
      ]}
      faqs={[
        {
          question: "Do my employees need a special device?",
          answer: "No, MySentry works on most standard smartphones. This eliminates the cost and hassle of purchasing and managing new hardware. Employees can use their own devices or company-provided phones.",
        },
        {
          question: "How does this help us comply with safety mandates?",
          answer: "Many cities and states now legally require hotels to provide employees with panic buttons. MySentry provides a modern, app-based solution that meets or exceeds these requirements, including location tracking and 24/7 monitoring.",
        },
        {
          question: "Is the app difficult for staff to use?",
          answer: "Not at all. The app is designed for simplicity and ease of use, even for non-technical users. Activating an alarm is as simple as tapping a button on the screen or using a voice command.",
        },
        {
          question: "What is the cost for a hotel or hospitality business?",
          answer: "We offer flexible, per-user pricing plans designed to be affordable for businesses of all sizes. Please contact us to book a demo and receive a custom quote based on your team's needs.",
        },
        {
          question: "How quickly is an alert responded to?",
          answer: "Our professional monitoring center responds to every alert in seconds, 24/7/365. Our agents are trained to quickly assess the situation and coordinate with on-site personnel and local emergency services.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection recommended for outdoor use and GPS accuracy. Offline mode stores alerts and sends when reconnected.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Hotel and restaurant workers can send silent panic alerts from any location on property.", detail: "The app works throughout the property using Wi-Fi or cellular, covering guest rooms, kitchens, and parking areas." },
        { claim: "GPS and indoor positioning help identify the exact location of a worker in distress.", detail: "Monitoring agents receive precise location data to direct emergency responders to the right area." },
        { claim: "Automated incident reporting helps employers meet OSHA workplace safety requirements.", detail: "Every alert generates a documented record with timestamps, location, and response details for compliance." }
      ]}
      relatedLinks={[
        { text: "Hotel Staff Panic Buttons", href: "/features/panic-button-app" },
        { text: "Lone Worker Safety", href: "/use-cases/lone-worker-safety-app" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
