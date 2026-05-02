import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function SafetyCheckInApp() {
  return (
    <SEOPageTemplate
      seoTitle="Safety Check-In App: Timed Alerts & Monitoring | MySentry"
      seoDescription="MySentry's safety check-in app offers timed alerts for solo activities, meetings, or dates. Miss a check-in? 24/7 agents get your GPS location and dispatch help. Start free."
      canonical="https://mysentry.ai/features/safety-check-in-app"
      label="FEATURE"
      h1="Feeling unsafe in solo situations? MySentry's Safety Check-In App automatically alerts help if you don't check in."
      problem="You meet strangers for dates, property showings, or client visits, and no one knows exactly where you are or when to expect you back."
      empathy="That uneasy feeling before walking into an unfamiliar situation is real. You deserve a simple way to let someone know you're safe, without constantly texting."
      steps={[
        { title: "Set a Check-In Timer", description: "Before your meeting, date, or solo activity, open MySentry and set a timed check-in for 15 minutes to 8 hours." },
        { title: "Go About Your Activity", description: "MySentry runs quietly in the background. When the timer is about to expire, you get a notification to confirm you're safe." },
        { title: "Miss a Check-In? Help Is On the Way", description: "If you don't dismiss the timer, our 24/7 monitoring agents are automatically alerted with your GPS location and can dispatch help." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A safety check-in app sends timed alerts to a monitoring service or emergency contacts when you don't confirm you're safe. MySentry's MeetSafe feature lets you set check-in timers before meetings, dates, or solo activities. If the timer expires without dismissal, 24/7 professional agents are alerted with your live GPS location and can dispatch emergency services."
      howItWorks={[
        "Open the MySentry app and tap 'MeetSafe' to start a new check-in timer.",
        "Choose a duration (15 minutes to 8 hours) based on your activity.",
        "When the timer is about to expire, you receive a push notification to confirm you're safe.",
        "If you dismiss the notification, the timer resets or ends. If you don't respond, 24/7 agents are alerted.",
        "Agents receive your GPS location and can attempt live video contact or dispatch local emergency services.",
      ]}
      afterAlert={[
        "Our 24/7 monitoring team receives an automatic alert with your last known GPS location.",
        "Agents attempt to reach you via the app's live video and audio connection.",
        "Your designated emergency contacts are notified simultaneously.",
        "If we cannot confirm your safety, local emergency services are dispatched to your location.",
      ]}
      bestFor={[
        "Women meeting dates or strangers for the first time.",
        "Real estate agents showing properties to unknown clients.",
        "Lone workers on remote job sites or during after-hours shifts.",
        "Anyone doing solo outdoor activities like hiking or running.",
        "Home healthcare workers visiting patients alone.",
      ]}
      notIdealFor={[
        "Situations requiring instant emergency response (use the Panic Alarm instead).",
        "Replacing a full GPS tracking system for fleet management.",
      ]}
      keyTakeaways={[
        "Set timed check-ins from 15 minutes to 8 hours for any solo activity.",
        "Missed check-ins automatically alert 24/7 professional monitoring agents with your GPS location.",
        "Works alongside Panic Alarm and Fall Detection for layered safety coverage.",
      ]}
      faqs={[
        {
          question: "How long can I set a safety check-in timer for?",
          answer: "You can set timers from 15 minutes to 8 hours. This flexibility covers everything from a quick coffee meeting to a full work shift or a long hike.",
        },
        {
          question: "What happens if I forget to dismiss the check-in?",
          answer: "If the timer expires without dismissal, MySentry's 24/7 monitoring agents are automatically alerted. They receive your GPS location and will attempt to contact you via the app. If they can't reach you, they notify your emergency contacts and can dispatch local emergency services.",
        },
        {
          question: "Can I cancel a check-in timer early?",
          answer: "Yes, you can dismiss or cancel the timer at any time directly from the app or your smartwatch. This prevents any false alarms.",
        },
        {
          question: "Is the safety check-in different from the panic button?",
          answer: "Yes. The panic button is for immediate emergencies where you need help right now. The safety check-in is a proactive, timed alert for situations where you want someone monitoring your status over a period of time. Both features work together for comprehensive safety.",
        },
        {
          question: "Do my emergency contacts get notified for every check-in?",
          answer: "No, your emergency contacts are only notified if you miss a check-in and the 24/7 monitoring team cannot confirm your safety. Routine check-in dismissals do not trigger any notifications.",
        },
        {
          question: "Can I use safety check-ins on my smartwatch?",
          answer: "Yes, you can start, extend, and dismiss MeetSafe check-in timers directly from your Apple Watch or Samsung Galaxy Watch without needing to pull out your phone.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection recommended for outdoor use and GPS accuracy. Offline mode stores alerts and sends when reconnected.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "MeetSafe check-ins use timed safety intervals that trigger automatic alerts if not dismissed.", detail: "Users set a timer before meetings or appointments. If the timer expires without dismissal, 24/7 agents are alerted with location." },
        { claim: "Check-in timers can be customized for different scenarios from 15 minutes to 8 hours.", detail: "Flexible timing accommodates short client meetings, long shifts, or extended outdoor activities." },
        { claim: "Missed check-ins trigger a multi-step response: agent contact, emergency contact notification, and 911 dispatch.", detail: "The escalation process ensures appropriate response without overwhelming users with false alarms." }
      ]}
      relatedLinks={[
        { text: "Panic Button App", href: "/features/panic-button-app" },
        { text: "Safety App for Women", href: "/use-cases/safety-app-for-women" },
        { text: "Lone Worker Safety App", href: "/use-cases/lone-worker-safety-app" },
        { text: "Pricing Plans", href: "/pricing" },
      ]}
    />
  );
}
