
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function CrashDetection() {
  return (
    <SEOPageTemplate
      seoTitle="Crash Detection App for Cars | MySentry"
      seoDescription="Worried about car crashes? MySentry's automatic crash detection app alerts contacts and 24/7 monitoring. Get help fast, even if you can't call. Start your free trial."
      canonical="https://mysentry.ai/features/crash-detection"
      label="FEATURE"
      h1="Car Crash? Get Help Fast with Automatic Detection"
      problem="Car accidents are scary, and often leave you unable to call for help. When you're hurt and alone, every second counts."
      empathy="The worry of a crash, and not being able to get help, is real. You deserve peace of mind, knowing help is always on the way."
      steps={[
        { title: "Drive with MySentry Active", description: "Just keep the MySentry app running in the background on your phone while you drive." },
        { title: "Automatic Crash Detection", description: "MySentry uses your phone's sensors to automatically detect a car crash." },
        { title: "Instant Emergency Alert", description: "An alert goes to your emergency contacts and our 24/7 monitoring team, who can send help." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A crash detection app, like MySentry, uses your smartphone's sensors to automatically find a car accident. When a crash happens, it instantly sends an alert with your location to chosen emergency contacts and a 24/7 professional monitoring service. This makes sure you get help fast, even if you can't call."
      howItWorks={[
        "MySentry uses smart programs and your phone's sensors to spot the unique forces of a car crash.",
        "When a crash is found, the app sets off an alarm on your phone right away.",
        "If you don't cancel it, the app automatically sends your exact GPS location to your emergency contacts.",
        "Our 24/7 monitoring team gets the alert and can work with emergency services to get you help.",
      ]}
      afterAlert={[
        "Your chosen emergency contacts get a text message with a link to your location.",
        "Our 24/7 monitoring agents get the alert and your profile details.",
        "An agent will try to reach you using the app's live video and audio feature.",
        "If you don't respond or say you need help, we will send local emergency services to your location.",
      ]}
      bestFor={["People who drive every day or take long trips", "Parents of new or young drivers", "Anyone who often drives by themselves"]}
      notIdealFor={["Motorcyclists or cyclists (this feature works best for cars)", "People without a steady cell or internet connection"]}
      keyTakeaways={[
        "Automatically finds car crashes using your phone's sensors.",
        "Quickly alerts family, friends, and our 24/7 monitoring team.",
        "Gives you and your loved ones peace of mind while driving.",
      ]}
      faqs={[
        {
          question: "How does the car crash detection app work?",
          answer: "MySentry uses your smartphone's sensors, like the accelerometer, to spot the sudden hit and forces of a car accident. Our program is set to tell the difference between a crash and just a hard brake or dropping your phone.",
        },
        {
          question: "Will it go off by mistake if I drop my phone?",
          answer: "Our system is made to avoid false alarms. It looks at many pieces of information, not just one bump. If a false alarm does happen, you have 30 seconds to stop the alert before anyone is told.",
        },
        {
          question: "What if I'm in an area with no cell service?",
          answer: "MySentry needs an active internet connection (cell data or Wi-Fi) to send an alert. If a crash happens where there's no service, the alert will wait and send as soon as your phone gets back online.",
        },
        {
          question: "Does this take the place of calling 911?",
          answer: "Our 24/7 monitoring team can send emergency services, but we always suggest calling your local emergency number yourself if you can. MySentry is there to help when you can't make the call."
        },
        {
          question: "Does the app need to be open for crash detection to work?",
          answer: "No, the app doesn't need to be open on your screen. It just needs to be running in the background with the right permissions turned on to watch for a possible crash."
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for watch features.",
        permissions: "Location services (always on for GPS tracking), notifications, microphone (for voice panic alarm), camera (for live video response).",
        connectivity: "Works on cell data and Wi-Fi. Cell connection is best for outside use and accurate GPS. Offline mode saves alerts and sends them when you reconnect.",
        limitations: "Crash detection accuracy depends on sensor quality. Battery life changes based on your device and how you use features. Health monitoring needs a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Crash detection uses phone sensors to find sudden stops that look like car crashes.", detail: "The app checks accelerometer data patterns that match crash signs and sends automatic alerts." },
        { claim: "If you don't respond in 2 minutes, 24/7 agents get an alert with your GPS location and live video.", detail: "This countdown gives you time to cancel false alarms from things like speed bumps or dropping your phone." }
      ]}
      relatedLinks={[
        { text: "Panic Alarm for Quick Help", href: "/features/panic-button-app" },
        { text: "24/7 Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

