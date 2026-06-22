import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function HomeHealthcare() {
  return (
    <SEOPageTemplate
      seoTitle="Home Healthcare Safety App for Workers | MySentry"
      seoDescription="MySentry protects home healthcare workers with a safety app. It offers panic alarms, fall detection, and 24/7 monitoring to keep your team safe. Learn more today."
      canonical="https://mysentry.ai/industries/home-healthcare"
      label="INDUSTRY"
      h1="Home Healthcare Workers Stay Safe, Always."
      h1Sub="Protect your team working alone in unfamiliar places."
      heroDescription="Panic alarm, live location sharing, and check-in timers for caregivers visiting patients alone."
      problem="Your home health aides, visiting nurses, and in-home caregivers work alone, often in new places. How do you keep them safe when you're not there?"
      empathy="It's stressful to worry about your team's safety. You need a simple, dependable way to protect them and meet your responsibilities."
      steps={[
        { title: "Equip Your Team", description: "Enroll your caregivers through the employer dashboard online. They then download the MySentry app on their existing smartphones." },
        { title: "Monitor Their Safety", description: "Use the employer dashboard to see check-ins and manage safety protocols." },
        { title: "Respond Instantly", description: "Receive immediate alerts if a panic alarm is triggered or a potential fall is detected." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry is a safety app for home healthcare agencies. It protects lone workers, like visiting nurses and in-home caregivers. The app provides a panic alarm, automatic fall detection, and 24/7 professional monitoring on their smartphone. This helps employers keep their team safe and meet care requirements."
      howItWorks={[
        "Caregivers enroll online through the employer dashboard, then download the MySentry app on their phone.",
        "They use the MeetSafe feature to set a safety timer before entering a client's home.",
        "A discreet panic alarm can be triggered by voice command, smartphone tap, or smartwatch tap if they feel unsafe.",
        "Automatic fall and crash detection sends an alert even if the worker is unable to.",
      ]}
      afterAlert={[
        "Our 24/7 monitoring center is instantly notified of the alert.",
        "A live agent attempts to contact the worker via video and voice.",
        "If the worker is unresponsive or confirms the emergency, we contact you.",
        "We can dispatch local emergency services to the worker's exact GPS location.",
      ]}
      bestFor={["Home Healthcare Agencies", "Hospice Providers", "In-Home Care Services", "Visiting Nurse Associations"]}
      notIdealFor={["Companies without lone workers", "Individuals seeking personal protection (see our consumer plans)"]}
      keyTakeaways={[
        "Meet your responsibility to protect lone healthcare workers.",
        "Get faster help in emergencies with 24/7 monitoring.",
        "Show your staff you care about their safety, which helps them stay with your company.",
      ]}
      faqs={[
        {
          question: "How does MySentry protect visiting nurses?",
          answer: "The app provides a discreet panic alarm, fall detection, and a check-in system. If a nurse feels unsafe or has an accident, they can get help quickly. Our 24/7 monitoring team can send emergency services if needed.",
        },
        {
          question: "Is the app hard for our home health aides to use?",
          answer: "No, MySentry is made to be simple. Key features like the panic alarm are easy to reach with one tap. We designed it to be easy to use, even in a stressful situation.",
        },
        {
          question: "What do we need to do as the employer?",
          answer: "Your main job is to make sure your team has the app installed and understands the safety rules. You will have access to a dashboard to see alerts and manage your team's safety settings.",
        },
        {
          question: "Can this help with our agency's rules and legal protection?",
          answer: "Yes. Using a safety solution like MySentry for lone workers shows you care about employee safety. This can help you meet safety guidelines and lower company risk.",
        },
        {
          question: "How much does it cost for a home care agency?",
          answer: "Our price depends on how many employees you need to protect. Please contact us to book a demo and get a detailed price quote for your agency's needs.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns.",
        limitations: "Fall detection accuracy depends on sensor quality and how it's worn. Battery life changes based on device and how features are used. Health monitoring needs a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Home healthcare agencies can watch over worker safety during all patient visits from one dashboard.", detail: "Real-time GPS tracking and automatic check-ins show where workers are and their status." },
        { claim: "Silent panic alerts let healthcare workers ask for help without making patient situations worse.", detail: "Easy ways to activate the alarm protect workers in possibly difficult home settings." }
      ]}
      relatedLinks={[
        { text: "Lone Worker Safety", href: "/use-cases/lone-worker-safety-app" },
        { text: "Panic Button", href: "/features/panic-button-app" },
        { text: "Home Healthcare Safety Solution", href: "/solutions/home-healthcare" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
