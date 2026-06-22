import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function MeetSafeCheckIns() {
  return (
    <SEOPageTemplate
      seoTitle="Safety Check-In App for Peace of Mind | MySentry"
      seoDescription="Feeling unsafe? MySentry's safety check-in app automatically alerts loved ones if you miss a check-in. Get peace of mind, start your free trial today."
      canonical="https://mysentry.ai/features/meetsafe-check-ins"
      label="FEATURE"
      h1="Feel Safe Meeting Anyone, Anywhere."
      h1Sub="Meeting new people should never feel risky."
      problem="Going on a date, meeting someone new, or just walking home alone can feel risky. You want a simple way to let someone know you're okay, without constant texting."
      empathy="It's natural to want a little backup. MySentry's MeetSafe feature gives you a discreet safety net, so you can live your life with more confidence and less worry."
      steps={[
        {
          title: "Set a Timer",
          description:
            "Before a date, a solo trip, or any situation where you want extra peace of mind, open the MySentry app and set a MeetSafe timer for how long you expect to be.",
        },
        {
          title: "Live Your Life",
          description:
            "MySentry runs quietly in the background. If you're safe, simply check in before the timer expires to confirm you're okay. No need to do anything else.",
        },
        {
          title: "Get Help if Needed",
          description:
            "If you don't check in, MySentry automatically triggers an alert, sending your location and status to your pre-selected emergency contacts so they can get you help.",
        },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry's MeetSafe is a safety check-in app. You set a timer before activities like dates or meeting someone new. If you don't confirm you're safe before the timer ends, the app automatically alerts your emergency contacts with your location. This gives you a safety net."
      howItWorks={[
        "Set a safety timer for any duration before you start your activity.",
        "The app will remind you to check in as the timer nears its end.",
        "Simply tap a button in the app to confirm you are safe.",
        "If you fail to check in, an automatic alert is sent to your emergency contacts.",
      ]}
      afterAlert={[
        "Your emergency contacts receive a text message with your name and a link to your live location.",
        "They can see your last known location on a map and your phone's battery level.",
        "If you have 24/7 professional monitoring, our agents also receive the alert.",
        "Our certified agents will review the situation and can dispatch emergency services if needed.",
      ]}
      bestFor={[
        "Online daters and people meeting new friends.",
        "Solo travelers and adventurers.",
        "Real estate agents, home healthcare workers, and other lone workers.",
      ]}
      notIdealFor={[
        "Situations requiring immediate, life-threatening emergency response.",
        "Areas without a reliable internet or GPS connection.",
      ]}
      keyTakeaways={[
        "Automates safety check-ins so you don't have to remember.",
        "Discreetly alerts your contacts if you miss a check-in.",
        "Provides peace of mind for you and your loved ones.",
      ]}
      faqs={[
        {
          question: "How does the MeetSafe safety check-in work?",
          answer:
            "You set a timer in the MySentry app for your activity. If you don't mark yourself as safe before the timer expires, the app automatically sends an alert with your location to your chosen emergency contacts.",
        },
        {
          question: "Is this a good app for online dating safety?",
          answer:
            "Yes, MeetSafe is an ideal date safety app. It provides an automatic, discreet way to ensure someone is notified if a date doesn't go as planned and you're unable to signal for help yourself.",
        },
        {
          question: "Can I adjust the timer after I set it?",
          answer:
            "Yes, you can easily extend or cancel the MeetSafe timer at any point from within the MySentry app as your plans change.",
        },
        {
          question: "What information do my emergency contacts receive?",
          answer:
            "If an alert is triggered, your contacts receive a text message with your name, a notification that you missed a safety check-in, and a link to a live map showing your GPS location.",
        },
        {
          question: "Does the safety check-in app require an internet connection?",
          answer:
            "Yes, MySentry requires a cellular signal to set timers, send notifications, and trigger alerts. No Wi-Fi is needed. Your location services must also be enabled.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "MeetSafe check-ins use timed safety intervals that trigger automatic alerts if not dismissed.", detail: "Users set a timer before meetings or appointments. If the timer expires without dismissal, 24/7 agents are alerted with location." },
        { claim: "Check-in timers can be customized for different scenarios from 15 minutes to 8 hours.", detail: "Flexible timing accommodates short client meetings, long shifts, or extended outdoor activities." }
      ]}
      relatedLinks={[
        { text: "Panic Button", href: "/features/panic-button-app" },
        { text: "Live Video Response", href: "/features/live-video-response" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
