import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function ProfessionalMonitoring() {
  return (
    <SEOPageTemplate
      seoTitle="Professional Monitoring App for Safety | MySentry"
      seoDescription="Worried about emergencies? MySentry's professional monitoring connects you to live agents 24/7. They respond to alerts and get you help fast. Get peace of mind, review current plans and eligibility."
      canonical="https://mysentry.ai/features/24-7-professional-monitoring"
      label="FEATURE"
      h1="Real Help. Real Fast. Every Time."
      h1Sub="Our agents are always here for you."
      heroDescription="Real people watching over you around the clock, ready to respond the moment something goes wrong."
      problem="You worry about what might happen if you have an emergency and can't call for help. Who will know you're in trouble?"
      empathy="It's stressful to think about facing a crisis alone. You deserve to know that someone is always ready to respond, no matter what."
      steps={[
        { title: "Get the MySentry App", description: "Download the app and review current plans, eligibility, billing terms, and enrollment requirements." },
        { title: "Live Your Life", description: "MySentry works in the background. If a fall, crash, or panic alarm is triggered, we're promptly alerted." },
        { title: "Get Immediate Help", description: "Our 24/7 certified monitoring agents assess the situation and contact emergency services when appropriate if you need it." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="Eligible MySentry alerts may be routed to a professional monitoring team 24/7. An agent can review available context, attempt contact, notify trusted contacts, or coordinate with emergency services when appropriate. Timing and outcomes are not guaranteed."
      howItWorks={[
        "MySentry's smart sensors detect falls, car crashes, or a panic alarm triggered by voice, tap, or smartwatch.",
        "When an alert is triggered, it's sent promptly to our 24/7 professional monitoring center.",
        "A certified agent immediately attempts to contact you via live video and voice.",
        "If you're unresponsive or confirm you need help, we coordinate with local emergency services, providing them with your location and critical information.",
      ]}
      afterAlert={[
        "An alert is promptly sent to our U.S.-based, TMA Five Diamond Certified monitoring center.",
        "A trained agent joins a live video call to see and speak with you.",
        "They assess the situation and determine the appropriate level of response.",
        "When appropriate, an agent may notify trusted contacts or coordinate with police, EMS, or fire services using the available alert context.",
      ]}
      bestFor={["Individuals who live alone", "Seniors who want to maintain independence", "People with medical conditions", "Anyone who wants an extra layer of safety"]}
      notIdealFor={["Areas without a reliable internet or cellular connection.", "Users who are unwilling to grant necessary device permissions."]}
      keyTakeaways={[
        "MySentry provides an always-on connection to a professional monitoring center.",
        "Trained agents may coordinate with police, fire, or EMS when appropriate and when sufficient location and alert context are available.",
        "Live video and voice allows agents to see the situation and provide immediate assistance.",
      ]}
      faqs={[
        { question: "How does 24/7 professional monitoring work?", answer: "An eligible MySentry alert may be routed to the monitoring center. An agent can review available context, attempt contact, and coordinate with trusted contacts or emergency services when appropriate. Timing and outcomes vary." },
        { question: "Is the monitoring center always open?", answer: "MySentry describes professional monitoring as available 24/7 for eligible plans. Actual alert receipt, review, and escalation depend on plan status, connectivity, permissions, system availability, and incident conditions." },
        { question: "Who are the monitoring agents?", answer: "Our agents are U.S.-based, TMA Five Diamond Certified professionals. They undergo rigorous training in emergency response protocols to provide you with the highest level of service." },
        { question: "What happens if I trigger an alarm by accident?", answer: "Accidents happen. If you trigger a false alarm, you can simply cancel it in the app or inform the monitoring agent when they contact you. There is no penalty for false alarms." },
        { question: "Do I need a separate landline for this service?", answer: "No, MySentry's monitoring service works through your smartphone's cellular connection. No landline and no Wi-Fi are required." },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 7+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Professional monitoring is described as available 24/7 for eligible plans.", detail: "When an eligible alert is received, trained agents may review available, permissioned incident context and follow the configured workflow. Receipt, review, and escalation are not guaranteed." },
        { claim: "Agents review available alert context before next steps.", detail: "When supported and permitted, location, audio, video, and account context may help an agent attempt contact or coordinate with trusted contacts and local services." },
        { claim: "Agent contact timing varies by alert conditions and service availability.", detail: "Eligible alerts are routed for professional review. Timing and escalation can depend on plan, connectivity, available context, region, and third-party response." }
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
