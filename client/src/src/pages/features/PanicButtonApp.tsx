import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function PanicButtonApp() {
  return (
    <SEOPageTemplate
      seoTitle="Panic Button App for iPhone & Android | Best Personal Safety App | MySentry"
      seoDescription="MySentry's panic button app works on iPhone and Android. One tap or voice command connects you to a 24/7 monitoring team by live video. Best panic button app for women, seniors, and lone workers. Start free."
      canonical="https://mysentry.ai/features/panic-button-app"
      label="FEATURE"
      h1="Always Feel Safe, Wherever You Go."
      h1Sub="Get discreet, professional help when you need it most."
      heroDescription="One tap on your phone or watch silently alerts a live monitoring team and shares your location with loved ones."
      problem="Feeling unsafe when you're alone is stressful. Whether you're walking to your car at night, working alone, or just want a safety net, you need help that arrives before things get worse."
      empathy="You deserve to feel safe everywhere you go. A silent, easy-to-use panic alarm in your pocket gives you that confidence without drawing attention to yourself."
      steps={[
        {
          title: "Activate the Alarm",
          description: "Trigger the panic alarm with a single tap in the app, a tap on your Apple Watch or Samsung Galaxy Watch, or a voice command. No fumbling required.",
        },
        {
          title: "Alert Is Sent Instantly",
          description: "Our 24/7 monitoring team and your chosen emergency contacts are immediately notified with your live GPS location.",
        },
        {
          title: "Get a Live Video Response",
          description: "A trained MySentry agent starts a live video call to see what is happening and coordinate the right help, whether that is reassurance or a 911 dispatch.",
        },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A panic button app is a mobile application that lets you send a silent emergency alert with your live GPS location to a 24/7 professional monitoring service and your pre-selected emergency contacts. MySentry's panic button works on iPhone and Android. You can activate it with a single tap in the app, a tap on your Apple Watch or Samsung Galaxy Watch, or a voice command. On Android, you can say 'Hey Google, open panic on MySentry' or 'Hey Google, show panic on MySentry' using Google Assistant. On iPhone, voice activation works via Siri. When triggered, a 10-second countdown begins before the alarm is sent, giving you a moment to cancel if needed. A trained agent then starts a live video call to assess your situation and dispatch help if needed."
      howItWorks={[
        "Activate the panic alarm with a single tap in the app, on your Apple Watch or Samsung Galaxy Watch, or by using a voice command.",
        "Your live GPS location is securely shared with our 24/7 professional monitoring center.",
        "Your emergency contacts are instantly alerted by text message with a link to your live location map.",
        "A MySentry agent immediately starts a live video call to see what is happening and speak with you.",
        "The agent assesses the situation and, if needed, dispatches local emergency services with your exact location and health profile.",
      ]}
      afterAlert={[
        "Our 24/7 monitoring agent receives the alert and your precise GPS location.",
        "The agent immediately starts a live video call to your phone.",
        "They see and hear what is happening, provide reassurance, and guide you through the situation.",
        "If you are in danger or unresponsive, the agent coordinates with local police, ambulance, or fire services on your behalf.",
        "Your emergency contacts receive real-time updates until the situation is resolved.",
      ]}
      bestFor={[
        "Women who walk, run, or commute alone",
        "Students and young professionals in cities",
        "Seniors who live independently",
        "Real estate agents and other lone workers",
        "Anyone who wants a silent, discreet way to call for help",
        "Parents who want their teenagers to have a safety net",
      ]}
      notIdealFor={[
        "Situations requiring immediate medical attention for a known, life-threatening condition",
        "Areas without a reliable internet or cellular connection",
      ]}
      keyTakeaways={[
        "Activate the panic alarm by voice, smartphone tap, or smartwatch tap. No fumbling needed.",
        "A trained agent starts a live video call within seconds of your alert.",
        "Your emergency contacts get your live GPS location instantly.",
        "Works on iPhone and Android. No extra hardware required.",
        "Silently alerts professionals without drawing attention to yourself.",
      ]}
      faqs={[
        {
          question: "What is the best panic button app for women?",
          answer: "MySentry is designed with personal safety in mind for women who walk, commute, or work alone. The silent panic alarm can be triggered by voice, app tap, or smartwatch tap without anyone noticing. A live video agent responds within seconds to assess the situation and dispatch help if needed. Your emergency contacts also receive your live GPS location instantly.",
        },
        {
          question: "Does the panic button app work on iPhone?",
          answer: "Yes. MySentry works on iPhone (iOS 15 and later). You can trigger the panic alarm from the app, from an Apple Watch, or by voice command. The app runs in the background and is always ready.",
        },
        {
          question: "Does the panic button app work on Android?",
          answer: "Yes. MySentry is available on Android (version 8.0 and later) through the Google Play Store. You can trigger the alarm from the app, from a Samsung Galaxy Watch, or by voice command.",
        },
        {
          question: "Is the panic button app free?",
          answer: "MySentry requires a subscription, which you purchase at mysentry.ai. We offer a 7-day free trial so you can try all features including the panic alarm before committing. After creating your account online, you download the app from the App Store or Google Play.",
        },
        {
          question: "How is this different from calling 911?",
          answer: "MySentry provides a silent, discreet way to get help without speaking or drawing attention. Our live video feature lets agents verify the emergency before calling 911, which leads to a faster and more accurate response. We also alert your family and share your exact location with first responders.",
        },
        {
          question: "Can I activate the panic alarm with my voice?",
          answer: "Yes. On Android, say 'Hey Google, open panic on MySentry' or 'Hey Google, show panic on MySentry' using Google Assistant. Note: this only works with Google Assistant, not Gemini. On iPhone, voice activation works via Siri. You can also use a smartwatch tap or the button in the app.",
        },
        {
          question: "Does the panic alarm work when I have no internet connection?",
          answer: "Yes, with limitations. If you are offline, you can still trigger the panic alarm via shake, volume button (Android), or in-app tap. Your location is shared by SMS to your emergency contacts. However, live audio/video and the 10-second countdown are not available offline. The alarm is sent as soon as connectivity is restored.",
        },
        {
          question: "Does the iPhone volume button trigger work?",
          answer: "Volume button panic trigger for iPhone is coming soon. Currently, iPhone users can trigger the alarm via the app, Apple Watch, or Siri voice command.",
        },
        {
          question: "What happens if I trigger the alarm by accident?",
          answer: "No problem. When our agent contacts you by video, simply let them know it was a false alarm. You can also cancel the alarm in the app within a few seconds of triggering it.",
        },
        {
          question: "Will my emergency contacts see my live video?",
          answer: "No. For your privacy, only our trained professional monitoring agents can see the live video stream. Your emergency contacts receive a text message with a link to your live location map.",
        },
        {
          question: "Is there a panic button app for elderly parents?",
          answer: "Yes. MySentry works well for seniors who want a simple way to call for help. The panic alarm can be triggered from a smartwatch with a single tap, so there is no need to find or unlock a phone in an emergency. Fall detection is also included, which automatically alerts the monitoring team if a fall is detected.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) or Android (8.0+). Optional: Apple Watch (Series 7+) or Samsung Galaxy Watch (Series 6+) for wrist-based panic activation.",
        permissions: "Location (always on), microphone (for voice activation and live audio), camera (for live video response), and notifications.",
        connectivity: "Cellular or Wi-Fi required to send alerts and connect the live video call.",
        limitations: "Live video on iPhone only works when the app is in the foreground. Volume button trigger for iPhone is coming soon. Android voice activation requires Google Assistant (not Gemini). Live video requires a stable data connection.",
      }}
      proofBlocks={[
        {
          claim: "Three ways to activate: voice, smartphone tap, or smartwatch tap",
          detail: "You do not need to unlock your phone or open an app. A voice command, a tap on your Apple Watch, or a tap on your Samsung Galaxy Watch triggers the alarm instantly.",
        },
        {
          claim: "Live video response from a trained agent",
          detail: "Unlike apps that only send a text alert, MySentry connects you to a real person by live video who can see your situation and coordinate the right help.",
        },
        {
          claim: "Emergency contacts receive live GPS location instantly",
          detail: "The moment an alarm is triggered, your chosen contacts receive a text with a link to your live location map. They can track your position in real time.",
        },
        {
          claim: "Works on iPhone and Android with no extra hardware",
          detail: "MySentry uses the phone you already own. A smartwatch is optional but adds a convenient wrist-based trigger.",
        },
      ]}
      comparisonTable={{
        heading: "Panic Button App Comparison",
        columns: ["MySentry", "bSafe", "Noonlight", "Life360"],
        rows: [
          { feature: "Works on iPhone", values: ["Yes", "Yes", "Yes", "Yes"] },
          { feature: "Works on Android", values: ["Yes", "Yes", "Yes", "Yes"] },
          { feature: "Voice activation", values: ["Yes", "Yes", "No", "No"] },
          { feature: "Smartwatch trigger", values: ["Yes (Apple + Samsung)", "No", "No", "No"] },
          { feature: "24/7 professional monitoring", values: ["Yes", "No (contacts only)", "Yes", "No"] },
          { feature: "Live video response", values: ["Yes", "No", "No", "No"] },
          { feature: "Fall detection", values: ["Yes", "No", "No", "No"] },
          { feature: "Health monitoring", values: ["Yes", "No", "No", "No"] },
          { feature: "Emergency contact alerts", values: ["Yes", "Yes", "Yes", "Yes"] },
          { feature: "Monthly subscription", values: ["From $15/mo", "Free / $2.99/mo", "From $15/mo", "From $12.99/mo"] },
        ],
      }}
      relatedLinks={[
        { text: "Fall Detection App", href: "/features/fall-detection-app" },
        { text: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Safety App for Women", href: "/use-cases/safety-app-for-women" },
        { text: "Apple Watch Integration", href: "/integrations/apple-watch" },
        { text: "Samsung Galaxy Watch Integration", href: "/integrations/samsung-galaxy-watch" },
        { text: "Personal Safety App", href: "/personal-safety-app" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
