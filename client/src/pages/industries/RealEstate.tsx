import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function RealEstate() {
  return (
    <SEOPageTemplate
      seoTitle="Real Estate Agent Safety App for Showings | MySentry"
      seoDescription="Real estate agents, stay safe during showings. MySentry is a safety app with a panic alarm, fall detection, and 24/7 monitoring. Get help fast. Try it free."
      canonical="https://mysentry.ai/industries/real-estate"
      label="REAL ESTATE SAFETY"
      h1="Worried About Safety During Showings? Get Help Fast."
      problem="Real estate agents often work alone, meeting new people in empty homes. This can feel risky, leaving you vulnerable with no easy way to call for help if something goes wrong."
      empathy="You enjoy helping clients find their perfect home, but your safety matters most. It's natural to feel uneasy walking into an empty property with someone you just met."
      steps={[
        {
          title: "Set Your Safety Timer",
          description:
            "Before a showing, open MySentry and set a 'MeetSafe' timer. We'll know to check on you if you don't end it on time.",
        },
        {
          title: "Trigger a Panic Alarm",
          description:
            "If you feel unsafe, activate the panic alarm with a voice command, a tap on your phone, or a tap on your smartwatch. Our 24/7 monitoring team gets your location and sends help.",
        },
        {
          title: "Automatic Fall Detection",
          description:
            "If you fall and can't get up, MySentry detects it automatically. We'll alert our response team, even if you can't reach your phone.",
        },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A real estate agent safety app helps protect agents during their work. MySentry offers a panic alarm, automatic fall and crash detection, and 24/7 professional monitoring. This ensures agents get immediate help in an emergency, whether at a showing, open house, or while traveling."
      howItWorks={[
        "Activate a MeetSafe timer before a showing. We'll monitor you for the set time.",
        "If you feel unsafe, trigger the panic alarm. Our 24/7 response team gets an instant alert.",
        "Automatic fall detection sends an alert if you fall, even if you can't react.",
        "Our certified agents can see your live video, track your location, and send emergency services.",
      ]}
      afterAlert={[
        "A certified MySentry agent immediately gets your alert and exact location.",
        "They check the situation, using live video and audio if you've allowed it.",
        "The agent contacts you through the app or by phone to confirm the emergency.",
        "If you don't respond or confirm the danger, we send local police or paramedics.",
      ]}
      bestFor={[
        "Individual real estate agents working alone.",
        "Real estate companies wanting to keep their team safe.",
        "Property managers and leasing agents.",
      ]}
      notIdealFor={[
        "Areas with no cell coverage at all (Wi-Fi is never required).",
        "People who don't want to give the app necessary phone permissions.",
      ]}
      keyTakeaways={[
        "Gives real estate agents, their teams, and families peace of mind, day and night.",
        "Combines a manual panic button with automatic detection for complete safety.",
        "Professional monitoring means a faster, more effective emergency response.",
      ]}
      faqs={[
        {
          question: "Can my company pay for MySentry for our whole team?",
          answer:
            "Yes, we have business plans for real estate companies. You can offer MySentry to protect your entire team. Contact us to schedule a demo and learn more about our employer plans.",
        },
        {
          question: "How does the app work if I'm in a remote area?",
          answer:
            "MySentry works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns. We suggest confirming cell coverage before relying on it in isolated spots.",
        },
        {
          question: "Is MySentry a replacement for 911?",
          answer:
            "No. If you are in an immediate, life-threatening emergency, always call 911 first. MySentry is a strong tool for times when you feel unsafe or need help but can't call 911 directly.",
        },
        {
          question: "Will this use up my phone battery quickly?",
          answer:
            "MySentry is made to save battery. While active monitoring uses more power than when the app is off, it shouldn't drain your battery much during a typical showing. We suggest starting with a full charge.",
        },
        {
          question: "Can I use this for my personal safety outside of work?",
          answer:
            "Absolutely. Your MySentry plan covers you 24/7, whether you are at work, home, or out and about. It's a full personal safety solution for all parts of your life.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns.",
        limitations: "Fall detection accuracy depends on sensor quality and how you wear it. Battery life changes based on your device and how you use features. Health monitoring needs a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Real estate agents can set MeetSafe timers before property showings with new clients.", detail: "If the agent doesn't check in after the showing, 24/7 monitoring agents are alerted with their location." },
        { claim: "Voice-activated panic works hands-free during property tours.", detail: "Agents can trigger alerts quietly using a custom voice command without touching their phone." }
      ]}
      relatedLinks={[
        { text: "Panic Alarm for Agents", href: "/features/panic-button-app" },
        {
          text: "Safety for Lone Workers",
          href: "/use-cases/lone-worker-safety-app",
        },
        { text: "Real Estate Safety Solution", href: "/solutions/real-estate" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
