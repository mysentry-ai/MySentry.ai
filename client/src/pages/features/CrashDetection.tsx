
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function CrashDetection() {
  return (
    <SEOPageTemplate
      seoTitle="Crash Detection App | MySentry"
      seoDescription="Get peace of mind with MySentry's automatic crash detection app. Instant alerts to emergency contacts and 24/7 monitoring. Start your free trial."
      canonical="https://mysentry.ai/features/crash-detection"
      label="FEATURE"
      h1="Automatic Crash Detection and Alert"
      problem="Car accidents are terrifying and can leave you unable to call for help. Every second matters when you're hurt and alone."
      empathy="The fear of being in a crash and not being able to reach someone is real. You deserve to know that help is always on the way."
      steps={[
        { title: "Drive with MySentry Active", description: "Simply keep the MySentry app running in the background on your phone while you drive." },
        { title: "Automatic Crash Detection", description: "Using your phone's sensors, MySentry automatically detects a potential car crash." },
        { title: "Instant Emergency Alert", description: "An alert is sent to your emergency contacts and our 24/7 monitoring team, who can dispatch help." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A crash detection app, like MySentry, uses your smartphone's sensors to automatically identify a car accident. When a crash is detected, it instantly sends an alert with your location to pre-selected emergency contacts and a 24/7 professional monitoring service, ensuring you get help quickly even if you can't call for it."
      howItWorks={[
        "MySentry uses advanced algorithms and your phone's built-in sensors to detect the unique forces of a car crash.",
        "Once a crash is detected, the app triggers an immediate alarm on your device.",
        "If not canceled, it automatically sends your precise GPS location to your emergency contacts.",
        "Our 24/7 professional monitoring team receives the alert and can coordinate with emergency services.",
      ]}
      afterAlert={[
        "Your designated emergency contacts are notified via SMS with a link to your location.",
        "Our 24/7 professional monitoring agents receive the alert and your user profile.",
        "An agent will attempt to contact you through the app's live video and audio feature.",
        "If you are unresponsive or confirm you need help, we will dispatch local emergency services to your location.",
      ]}
      bestFor={["Daily commuters and road-trippers", "Parents of teen or new drivers", "Anyone who frequently drives alone"]}
      notIdealFor={["Motorcyclists or cyclists (feature is optimized for cars)", "Users without a consistent cellular or data connection"]}
      keyTakeaways={[
        "Automatically detects car crashes using your phone's sensors.",
        "Instantly alerts family, friends, and our 24/7 monitoring team.",
        "Provides peace of mind for you and your loved ones while driving.",
      ]}
      faqs={[
        {
          question: "How does the crash detection app work?",
          answer: "MySentry uses the sensors in your smartphone, like the accelerometer and gyroscope, to detect the sudden impact and forces associated with a car accident. Our algorithm is tuned to differentiate a crash from a simple hard brake or dropping your phone.",
        },
        {
          question: "Will it trigger a false alarm if I drop my phone?",
          answer: "Our system is designed to minimize false alarms. It analyzes multiple data points, not just a single jolt. In the rare case of a false alarm, you have a 30-second window to cancel the alert before anyone is notified.",
        },
        {
          question: "What happens if I'm in an area with no cell service?",
          answer: "MySentry requires an active internet connection (cellular or Wi-Fi) to send an alert. If a crash occurs in an area with no service, the alert will be queued and sent as soon as your phone reconnects to a network.",
        },
        {
          question: "Does this replace calling 911?",
          answer: "While our 24/7 monitoring team can dispatch emergency services, we always recommend calling your local emergency number directly if you are able. MySentry is a safety net for when you can't make the call yourself.",
        },
        {
          question: "Does the app need to be open for crash detection to work?",
          answer: "No, the app does not need to be open on your screen. It just needs to be running in the background with the necessary permissions enabled for it to monitor for a potential crash.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection recommended for outdoor use and GPS accuracy. Offline mode stores alerts and sends when reconnected.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Crash detection uses phone sensors to identify sudden deceleration events consistent with vehicle collisions.", detail: "The app analyzes accelerometer data patterns that match crash signatures and triggers automatic alerts." },
        { claim: "If the user does not respond within 2 minutes, 24/7 agents are alerted with GPS location and live video.", detail: "The countdown gives conscious users time to cancel false alarms from speed bumps or phone drops." }
      ]}
      disclaimer="If you feel unsafe, use the MySentry panic alarm. If it is an immediate life-threatening emergency, contact local emergency services. MySentry requires an active internet connection, device permissions, and sufficient battery. Not all features are available on all devices."
      relatedLinks={[
        { text: "Panic Alarm for Immediate Help", href: "/features/panic-button-app" },
        { text: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

