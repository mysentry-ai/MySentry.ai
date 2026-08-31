import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function MeetSafeCheckIns() {
  return (
    <SEOPageTemplate
      seoTitle="MeetSafe: Meeting Safety Check-In App | MySentry"
      seoDescription="Schedule any meeting, date, or appointment in MySentry's MeetSafe. If you don't check in afterward, your Panic Alarm triggers automatically. Start your 7-day free trial."
      canonical="https://mysentry.ai/features/meetsafe-check-ins"
      label="FEATURE"
      h1="Schedule a Meeting. MySentry Has Your Back."
      h1Sub="Add a meeting to MeetSafe. If you don't check in afterward, help is automatically on the way."
      heroDescription="MeetSafe lets you schedule any meeting, date, or appointment inside the app. When the meeting ends, MySentry sends you a Safety Check Alert. If you say you're not safe, or don't respond, it automatically triggers your Panic Alarm."
      problem="Going on a date, meeting a new client, or walking to your car alone at night can feel risky. You want a simple way to make sure someone knows you're okay, without constant texting."
      empathy="It's natural to want a little backup. MySentry's MeetSafe feature gives you a discreet safety net, so you can live your life with more confidence and less worry."
      steps={[
        {
          title: "Add a Meeting",
          description:
            "Open the MeetSafe tab in the MySentry app and tap the + button. Add a title, set the date, time, and expected duration.",
        },
        {
          title: "Go to Your Meeting",
          description:
            "MySentry runs quietly in the background. When your meeting time ends, the app sends you a Safety Check Alert asking if you're okay.",
        },
        {
          title: "Confirm Safe or Get Help",
          description:
            "Tap 'I'm Safe' to close the alert. If you say you're not safe, or don't respond, MeetSafe automatically triggers your Panic Alarm and notifies your emergency contacts and monitoring team.",
        },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MeetSafe is MySentry's meeting safety feature. You schedule a meeting inside the app with a title, date, time, and duration. When the meeting ends, MySentry sends you a Safety Check Alert asking if you're safe. If you confirm you're safe, nothing happens. If you say you're not safe, or don't respond within the timeout, MeetSafe automatically triggers your Panic Alarm, alerting your emergency contacts and the 24/7 monitoring team with your live location."
      howItWorks={[
        "Schedule a meeting in the MeetSafe tab with a title, date, time, and expected duration.",
        "When the meeting time ends, MySentry sends you a Safety Check Alert.",
        "Tap 'I'm Safe' to confirm everything is fine.",
        "If you say you're not safe, or don't respond, MeetSafe automatically triggers your Panic Alarm.",
      ]}
      afterAlert={[
        "Your emergency contacts receive a notification with your name and a link to your live location.",
        "They can see your last known location on a map and your phone's battery level.",
        "If you have 24/7 professional monitoring, our agents also receive the alert.",
        "Our certified agents will review the situation and can dispatch emergency services if needed.",
      ]}
      bestFor={[
        "Online daters and people meeting new friends.",
        "Real estate agents showing properties alone.",
        "Home healthcare workers on solo visits.",
        "Anyone meeting a stranger or working late alone.",
      ]}
      notIdealFor={[
        "Situations requiring immediate, life-threatening emergency response (use the Panic Alarm directly).",
        "Areas without a reliable cellular signal.",
      ]}
      keyTakeaways={[
        "Schedule any meeting in the app. MySentry checks on you when it ends.",
        "A missed check-in automatically triggers your Panic Alarm.",
        "No manual texting or check-in calls needed.",
      ]}
      faqs={[
        {
          question: "How does MeetSafe work?",
          answer:
            "You add a meeting in the MeetSafe tab with a title, date, time, and duration. When the meeting ends, MySentry sends you a Safety Check Alert. If you confirm you're safe, the alert closes. If you say you're not safe, or don't respond, your Panic Alarm is automatically triggered.",
        },
        {
          question: "Is MeetSafe good for date safety?",
          answer:
            "Yes. MeetSafe is ideal for first dates or meeting someone new. Add the meeting beforehand, and if anything goes wrong and you can't respond, your emergency contacts and monitoring team are automatically alerted with your location.",
        },
        {
          question: "Can I extend or cancel a MeetSafe meeting?",
          answer:
            "Yes. You can extend or cancel a scheduled meeting from within the app at any time before the Safety Check Alert is sent.",
        },
        {
          question: "What information do my emergency contacts receive?",
          answer:
            "If a MeetSafe alert escalates to a Panic Alarm, your contacts receive a notification with your name and a link to your live GPS location.",
        },
        {
          question: "Does MeetSafe require an internet connection?",
          answer:
            "Yes, MySentry requires a cellular signal to send Safety Check Alerts and trigger the Panic Alarm. No Wi-Fi is needed, but a cellular signal must be available.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 7+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular signal. No Wi-Fi is required.",
        limitations: "MeetSafe requires a cellular signal to send Safety Check Alerts. In areas with no signal, the alert cannot be sent until signal returns.",
      }}
      proofBlocks={[
        { claim: "MeetSafe sends a Safety Check Alert when your scheduled meeting ends.", detail: "If you don't respond or say you're not safe, your Panic Alarm is automatically triggered, alerting emergency contacts and the 24/7 monitoring team." },
        { claim: "MeetSafe is built for real-world safety scenarios: dates, client meetings, solo work visits.", detail: "Any situation where you want a silent safety net without constant manual check-ins." },
      ]}
      relatedLinks={[
        { text: "Panic Alarm", href: "/features/panic-button-app" },
        { text: "Live Video Response", href: "/features/live-video-response" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
