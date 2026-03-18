
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function RealEstate() {
  return (
    <SEOPageTemplate
      seoTitle="Real Estate Agent Safety App | MySentry"
      seoDescription="Protect yourself during showings and open houses. MySentry is a realtor safety app with a panic alarm, fall detection, and 24/7 monitoring. Start your free trial."
      canonical="https://mysentry.ai/industries/real-estate"
      label="REAL ESTATE SAFETY"
      h1="A Realtor Safety App That Has Your Back"
      problem="Agents often work alone, meeting strangers in empty properties. This isolation creates significant risks, from verbal threats to physical assault, with no immediate way to get help."
      empathy="You love helping clients find their dream home, but your safety shouldn't be at risk. It's unnerving to walk into a vacant house with a new client, not knowing their intentions."
      steps={[
        {
          title: "Activate MySentry Before a Showing",
          description:
            "Before you meet a client, open the MySentry app. A single tap activates monitoring for your appointment.",
        },
        {
          title: "Use the Panic Alarm if Unsafe",
          description:
            "If you feel threatened, discreetly tap the panic button. Our 24/7 agents receive your location and dispatch help immediately.",
        },
        {
          title: "Rely on Automatic Fall Detection",
          description:
            "If you fall and can't get up, the app automatically detects it and alerts our response team, even if you can't reach your phone.",
        },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A real estate agent safety app is a tool designed to protect realtors during their work. MySentry provides a panic alarm, automatic fall and crash detection, and 24/7 professional monitoring to ensure agents can get immediate help in an emergency, whether at a showing, open house, or on the road."
      howItWorks={[
        "Activate a MeetSafe timer before a showing so we know how long to monitor you.",
        "If you feel unsafe, tap the panic button to instantly alert our 24/7 response team.",
        "Automatic fall detection sends an alert if you slip or are pushed down, even if you can't react.",
        "Our certified agents can view your live video, track your location, and dispatch emergency services.",
      ]}
      afterAlert={[
        "A certified MySentry agent immediately receives your alert with your precise location.",
        "They assess the situation, accessing live video and audio if the feature is enabled.",
        "The agent contacts you through the app or by phone to verify the emergency.",
        "If you are unresponsive or confirm the threat, we dispatch local police or paramedics.",
      ]}
      bestFor={[
        "Individual real estate agents working alone.",
        "Real estate brokerages providing safety tools for their team.",
        "Property managers and leasing agents.",
      ]}
      notIdealFor={[
        "Areas without reliable cellular or Wi-Fi service.",
        "Users who are unwilling to grant necessary device permissions.",
      ]}
      keyTakeaways={[
        "Provides 24/7 peace of mind for agents, teams, and their families.",
        "Combines a manual panic button with automatic detection for comprehensive safety.",
        "A professional monitoring service ensures a faster, more effective emergency response.",
      ]}
      faqs={[
        {
          question: "Can my brokerage cover the cost for our entire team?",
          answer:
            "Yes, we offer business plans designed for real estate brokerages. You can provide MySentry as a benefit to protect your entire team. Contact us to book a demo and learn more about our employer plans.",
        },
        {
          question: "How does the app work if I'm in a remote area?",
          answer:
            "MySentry requires an active internet connection (cellular or Wi-Fi) to send alerts. While it works in most areas, it may have limitations in remote locations with no signal. We recommend checking your coverage before relying on it in isolated areas.",
        },
        {
          question: "Is MySentry a replacement for 911?",
          answer:
            "No. If you are in an immediate, life-threatening emergency, your first call should always be to 911. MySentry is a powerful tool for situations where you feel unsafe or need help but may not be able to call 911 directly.",
        },
        {
          question: "Will this drain my phone battery?",
          answer:
            "MySentry is designed to be battery-efficient. While active monitoring uses more power than when the app is idle, it should not significantly drain your battery during a typical showing. We recommend starting with a full charge.",
        },
        {
          question: "Can I use this for personal safety outside of work?",
          answer:
            "Absolutely. Your MySentry subscription covers you 24/7, whether you are at work, at home, or on the go. It's a complete personal safety solution for all aspects of your life.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection recommended for outdoor use and GPS accuracy. Offline mode stores alerts and sends when reconnected.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Real estate agents can set MeetSafe timers before property showings with unknown clients.", detail: "If the agent does not check in after the showing, 24/7 monitoring agents are alerted with their location." },
        { claim: "Voice-activated panic works hands-free during property tours.", detail: "Agents can trigger alerts discreetly using a custom voice command without reaching for their phone." }
      ]}
      relatedLinks={[
        { text: "Panic Alarm for Agents", href: "/features/panic-button-app" },
        {
          text: "Safety for Lone Workers",
          href: "/use-cases/lone-worker-safety-app",
        },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

