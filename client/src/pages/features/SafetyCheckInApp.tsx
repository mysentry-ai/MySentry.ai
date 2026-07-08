import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function SafetyCheckInApp() {
  return (
    <SEOPageTemplate
      seoTitle="Safety Check-In App: Timed Alerts & Monitoring | MySentry"
      seoDescription="MySentry's safety check-in app offers timed alerts for solo activities, meetings, or dates. Miss a check-in? 24/7 agents get your GPS location and dispatch help. Start free."
      canonical="https://mysentry.ai/features/safety-check-in-app"
      label="FEATURE"
      h1="Know You're Safe, Even When Alone."
      h1Sub="Help is dispatched if you miss a check-in."
      heroDescription="Schedule a meeting in MeetSafe. When it ends, MySentry sends you a Safety Check Alert. If you don't respond, help is automatically on the way."
      problem="You meet strangers for dates, property showings, or client visits, and no one knows exactly where you are or when to expect you back."
      empathy="That uneasy feeling before walking into an unfamiliar situation is real. You deserve a simple way to let someone know you're safe, without constantly texting."
      steps={[
        { title: "Schedule a Meeting", description: "Open the MeetSafe tab in the MySentry app and add your meeting with a title, date, time, and expected duration." },
        { title: "Go to Your Meeting", description: "MySentry runs quietly in the background. When your meeting ends, the app sends you a Safety Check Alert asking if you're okay." },
        { title: "Confirm Safe or Get Help", description: "Tap 'I'm Safe' to close the alert. If you say you're not safe, or don't respond, your Panic Alarm is triggered and your emergency contacts and monitoring team are notified." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry's MeetSafe is a meeting safety feature. You schedule a meeting in the app with a title, date, time, and duration. When the meeting ends, MySentry sends you a Safety Check Alert. If you confirm you're safe, nothing happens. If you say you're not safe, or don't respond, your Panic Alarm is automatically triggered, alerting your emergency contacts and the 24/7 monitoring team with your live location."
      howItWorks={[
        "Open the MeetSafe tab in the MySentry app and tap + to add a new meeting.",
        "Add a title, date, time, and expected duration for your meeting.",
        "When the meeting ends, MySentry sends you a Safety Check Alert.",
        "Tap 'I'm Safe' to confirm. If you say you're not safe, or don't respond, your Panic Alarm is triggered.",
        "Your emergency contacts and 24/7 monitoring team are notified with your live GPS location.",
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
        "Schedule any meeting in MeetSafe. MySentry automatically checks on you when it ends.",
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
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 7+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "MeetSafe check-ins use timed safety intervals that trigger automatic alerts if not dismissed.", detail: "Users set a timer before meetings or appointments. If the timer expires without dismissal, 24/7 agents are alerted with location." },
        { claim: "MeetSafe works for any meeting: dates, client visits, solo activities, or late-night shifts.", detail: "Add a title, date, time, and duration. MySentry checks on you automatically when the meeting ends." },
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
