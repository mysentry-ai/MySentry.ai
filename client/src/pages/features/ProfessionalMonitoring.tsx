import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function ProfessionalMonitoring() {
  return (
    <SEOPageTemplate
      seoTitle="Professional Monitoring App for Safety | MySentry"
      seoDescription="Worried about emergencies? MySentry's professional monitoring connects you to live agents 24/7. They respond to alerts and get you help fast. Get peace of mind, start your free trial."
      canonical="https://mysentry.ai/features/24-7-professional-monitoring"
      label="FEATURE"
      h1="Never Face an Emergency Alone: 24/7 Professional Monitoring"
      problem="You worry about what might happen if you have an emergency and can't call for help. Who will know you're in trouble?"
      empathy="It's stressful to think about facing a crisis alone. You deserve to know that someone is always ready to respond, no matter what."
      steps={[
        { title: "Get the MySentry App", description: "Download the app and start your 7-day free trial. No credit card required." },
        { title: "Live Your Life", description: "MySentry works in the background. If a fall, crash, or panic alarm is triggered, we're instantly alerted." },
        { title: "Get Immediate Help", description: "Our 24/7 certified monitoring agents assess the situation and dispatch help if you need it." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry's professional monitoring connects you to live agents 24/7. When an alert is triggered, certified agents are notified. They assess the situation, speak with you, and dispatch emergency services if needed, ensuring you get help quickly."
      howItWorks={[
        "MySentry's smart sensors detect falls, car crashes, or a panic alarm triggered by voice, tap, or smartwatch.",
        "When an alert is triggered, it's sent instantly to our 24/7 professional monitoring center.",
        "A certified agent immediately attempts to contact you via live video and voice.",
        "If you're unresponsive or confirm you need help, we coordinate with local emergency services, providing them with your location and critical information.",
      ]}
      afterAlert={[
        "An alert is instantly sent to our U.S.-based, TMA Five Diamond Certified monitoring center.",
        "A trained agent joins a live video call to see and speak with you.",
        "They assess the situation and determine the appropriate level of response.",
        "If necessary, they contact police, EMS, or fire departments and stay on the line until help arrives.",
      ]}
      bestFor={["Individuals who live alone", "Seniors who want to maintain independence", "People with medical conditions", "Anyone who wants an extra layer of safety"]}
      notIdealFor={["Areas without a reliable internet or cellular connection.", "Users who are unwilling to grant necessary device permissions."]}
      keyTakeaways={[
        "MySentry provides an always-on connection to a professional monitoring center.",
        "Trained agents can dispatch emergency services like police, fire, or EMS to your exact location.",
        "Live video and voice allows agents to see the situation and provide immediate assistance.",
      ]}
      faqs={[
        { question: "How does 24/7 professional monitoring work?", answer: "When an alarm is triggered on your MySentry app, our monitoring center is instantly notified. A live agent will attempt to contact you via video and voice to assess the situation and can dispatch emergency services if needed." },
        { question: "Is the monitoring center always open?", answer: "Yes, our professional monitoring center operates 24 hours a day, 7 days a week, 365 days a year, including all holidays. You are never without protection." },
        { question: "Who are the monitoring agents?", answer: "Our agents are U.S.-based, TMA Five Diamond Certified professionals. They undergo rigorous training in emergency response protocols to provide you with the highest level of service." },
        { question: "What happens if I trigger an alarm by accident?", answer: "Accidents happen. If you trigger a false alarm, you can simply cancel it in the app or inform the monitoring agent when they contact you. There is no penalty for false alarms." },
        { question: "Do I need a separate landline for this service?", answer: "No, MySentry's monitoring service works through your smartphone's internet connection (Wi-Fi or cellular data). No landline is required." },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection recommended for outdoor use and GPS accuracy. Offline mode stores alerts and sends when reconnected.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Certified monitoring agents are available 24 hours a day, 7 days a week, 365 days a year.", detail: "MySentry's monitoring center operates continuously with trained agents who can assess emergencies using live video, GPS, and health data." },
        { claim: "Agents can dispatch police, fire, or EMS based on real-time assessment.", detail: "Using live video and audio from the user's device, agents determine the appropriate emergency response and coordinate with local services." },
        { claim: "Average response time from alert to agent contact is under 60 seconds.", detail: "Alerts are prioritized and routed to available agents immediately, with automated escalation if the first agent is unavailable." }
      ]}
      relatedLinks={[
        { text: "Panic Button", href: "/features/panic-button-app" },
        { text: "Fall Detection", href: "/features/fall-detection-app" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
