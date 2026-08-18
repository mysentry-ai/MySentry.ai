import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function PersonalSafetyApp() {
  return (
    <SEOPageTemplate
      seoTitle="Personal Safety App for iPhone & Android | MySentry"
      seoDescription="MySentry is the personal safety app that monitors your health, detects falls and crashes, and connects you to a 24/7 professional monitoring team by live video. Try it free for 7 days."
      canonical="https://mysentry.ai/personal-safety-app"
      label="PERSONAL SAFETY"
      h1="The Personal Safety App That Watches Over You 24/7."
      problem="Most safety apps just send a text to a friend. But what if you can't press a button? What if no one is watching? You need a safety app that acts, not just alerts."
      empathy="Whether you live alone, work in the field, or just want peace of mind on your daily run, you deserve real protection. Not just a notification. Real help."
      steps={[
        {
          title: "Download MySentry",
          description: "Get the app on iPhone or Android. No extra hardware needed. Your existing phone and smartwatch are all you need.",
        },
        {
          title: "Set Up Your Safety Circle",
          description: "Add up to 3 emergency contacts, complete your health profile, and turn on the features that matter to you.",
        },
        {
          title: "Go About Your Life",
          description: "MySentry runs quietly in the background, monitoring your health and safety 24/7. If something happens, help is on the way before you even have to ask.",
        },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A personal safety app is a smartphone application that monitors your safety and health and connects you to emergency help when you need it. MySentry is a personal safety app for iPhone and Android that includes automatic fall detection, crash detection, a panic button (activated by voice, tap, or smartwatch), real-time health monitoring (heart rate, HRV, SpO2), and 24/7 professional monitoring with live video emergency response. It works in the background on your existing devices without any extra hardware."
      howItWorks={[
        "MySentry runs quietly in the background on your iPhone or Android phone.",
        "The app continuously monitors your movement and health data from your phone and paired smartwatch.",
        "If a fall or crash is detected, the app prompts you to confirm you are okay. You have a short window to respond.",
        "If you do not respond, or if you trigger the panic alarm by voice, tap, or smartwatch, an alert is sent to our 24/7 monitoring center.",
        "A trained agent starts a live video call to see what is happening and assess the situation.",
        "Your emergency contacts receive an instant text with your live GPS location.",
        "If needed, the agent dispatches local emergency services with your location and health profile.",
      ]}
      afterAlert={[
        "Our 24/7 monitoring agent receives your alert and your precise GPS location.",
        "The agent starts a live video call to your phone within seconds.",
        "They see and hear your situation and speak with you directly.",
        "If you are in danger or unresponsive, the agent dispatches local emergency services.",
        "Your emergency contacts receive real-time updates until the situation is resolved.",
      ]}
      bestFor={[
        "Women who walk, run, or commute alone",
        "Seniors and older adults living independently",
        "Lone workers in field services, construction, real estate, or healthcare",
        "Runners, hikers, and cyclists who exercise alone",
        "Anyone who wants a safety net without carrying extra hardware",
        "Families who want one app that covers everyone",
      ]}
      notIdealFor={[
        "Users who only need basic location sharing with family",
        "Areas with no cellular or Wi-Fi connection",
      ]}
      keyTakeaways={[
        "MySentry is the only personal safety app that combines fall detection, crash detection, health monitoring, and 24/7 live video emergency response in one app.",
        "Works on iPhone and Android. No extra hardware required.",
        "Three ways to trigger the panic alarm: voice command, smartphone tap, or smartwatch tap.",
        "Automatic fall detection alerts our monitoring team if you do not respond to the Safety Check Alert.",
        "Real-time health monitoring tracks heart rate, HRV, and SpO2 through your paired smartwatch.",
      ]}
      faqs={[
        {
          question: "What is the best personal safety app for iPhone?",
          answer: "MySentry is the most complete personal safety app for iPhone. It combines automatic fall detection, crash detection, a panic button (voice, tap, or Apple Watch), real-time health monitoring, and 24/7 professional monitoring with live video response. It works on iPhone with iOS 15 or later.",
        },
        {
          question: "What is the best personal safety app for Android?",
          answer: "MySentry is available on Android (version 8.0 and later) through the Google Play Store. It includes the same full set of features as the iPhone version, including fall detection, crash detection, panic alarm, health monitoring, and 24/7 live video emergency response.",
        },
        {
          question: "Is there a free personal safety app?",
          answer: "MySentry offers a 7-day free trial that gives you full access to all features, including fall detection, panic alarm, health monitoring, and 24/7 professional monitoring. After the trial, a subscription is required. Plans start from $15 per month.",
        },
        {
          question: "How is MySentry different from other personal safety apps?",
          answer: "Most personal safety apps send a text to a contact when you press a button. MySentry goes further: it detects falls and crashes automatically, monitors your health in real time, and connects you to a trained agent by live video who can see your situation and dispatch the right help. You do not need to press a button for help to arrive.",
        },
        {
          question: "Does a personal safety app work without Wi-Fi?",
          answer: "MySentry works on a cellular connection without Wi-Fi. Fall detection and the panic alarm function as long as you have a cellular signal. In areas with no signal, alerts are queued and sent the moment connectivity returns.",
        },
        {
          question: "Can I use a personal safety app for my elderly parent?",
          answer: "Yes. MySentry is well suited for seniors. It detects falls automatically, works with Apple Watch and Samsung Galaxy Watch, and does not require the user to press a button in an emergency. Family members can be added as emergency contacts and receive instant alerts when an alarm is triggered.",
        },
        {
          question: "What personal safety apps work with Apple Watch?",
          answer: "MySentry integrates with Apple Watch (Series 7 and newer) to provide wrist-based fall detection, a one-tap panic alarm from the watch face, and health monitoring including heart rate and SpO2. The Apple Watch integration improves fall detection accuracy and makes the panic alarm faster to trigger.",
        },
        {
          question: "Is MySentry a good safety app for women?",
          answer: "Yes. MySentry is designed for personal safety in everyday situations. The silent panic alarm can be triggered by voice, app tap, or Apple Watch tap without drawing attention. A live video agent responds within seconds. Your emergency contacts receive your live GPS location instantly. It is used by women who commute, run, work alone, and travel.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) or Android (8.0+). Optional: Apple Watch (Series 7+) or Samsung Galaxy Watch (4+) for wrist-based features.",
        permissions: "Location (always on), motion and fitness, microphone, camera, and background app refresh.",
        connectivity: "Cellular or Wi-Fi required to send alerts and connect live video calls.",
        limitations: "Health monitoring features require a compatible paired smartwatch. Voice activation requires the app to be running in the background.",
      }}
      proofBlocks={[
        {
          claim: "All-in-one: fall detection, crash detection, panic alarm, and health monitoring",
          detail: "MySentry is the only personal safety app that combines all four safety layers in a single subscription. Most competitors offer only one or two of these features.",
        },
        {
          claim: "24/7 professional monitoring with live video",
          detail: "Every MySentry subscription includes access to a 24/7 trained monitoring team who responds to alerts with a live video call, not just a text notification.",
        },
        {
          claim: "Three panic alarm triggers: voice, smartphone tap, smartwatch tap",
          detail: "You do not need to unlock your phone. A voice command, an Apple Watch tap, or a Samsung Galaxy Watch tap triggers the alarm instantly.",
        },
        {
          claim: "2-minute fall detection response window",
          detail: "After a fall is detected, you receive a Safety Check Alert to confirm you are okay. If you do not respond, an alert is sent automatically to our monitoring team and your emergency contacts.",
        },
      ]}
      comparisonTable={{
        heading: "Personal Safety App Comparison",
        columns: ["MySentry", "Noonlight", "bSafe", "Life360", "Medical Alert Device"],
        rows: [
          { feature: "Automatic fall detection", values: ["Yes", "No", "No", "No", "Some models"] },
          { feature: "Crash detection", values: ["Yes", "No", "No", "Yes (driving)", "No"] },
          { feature: "Panic button", values: ["Yes (voice, tap, watch)", "Yes (tap only)", "Yes (voice + tap)", "Yes (contacts only)", "Yes (button only)"] },
          { feature: "24/7 professional monitoring", values: ["Yes", "Yes", "No", "No", "Yes"] },
          { feature: "Live video response", values: ["Yes", "No", "No", "No", "No"] },
          { feature: "Health monitoring", values: ["Yes (HRV, SpO2, HR)", "No", "No", "No", "No"] },
          { feature: "Works on iPhone", values: ["Yes", "Yes", "Yes", "Yes", "No"] },
          { feature: "Works on Android", values: ["Yes", "Yes", "Yes", "Yes", "No"] },
          { feature: "Apple Watch support", values: ["Yes", "No", "No", "No", "No"] },
          { feature: "Extra hardware required", values: ["No", "No", "No", "No", "Yes"] },
          { feature: "Monthly subscription", values: ["From $15/mo", "From $15/mo", "Free / $2.99/mo", "From $12.99/mo", "From $29.95/mo"] },
        ],
      }}
      relatedLinks={[
        { text: "Panic Button App", href: "/features/panic-button-app" },
        { text: "Fall Detection App", href: "/features/fall-detection-app" },
        { text: "Health Monitoring", href: "/features/health-monitoring" },
        { text: "Safety App for Women", href: "/use-cases/safety-app-for-women" },
        { text: "Medical Alert App for Seniors", href: "/use-cases/medical-alert-app-for-seniors" },
        { text: "Life360 vs MySentry", href: "/compare/life360-vs-mysentry" },
        { text: "How It Works", href: "/how-it-works" },
        { text: "Pricing", href: "/pricing" },
      ]}
    />
  );
}
