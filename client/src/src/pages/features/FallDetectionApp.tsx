import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function FallDetectionApp() {
  return (
    <SEOPageTemplate
      seoTitle="Fall Detection App for Apple Watch & Samsung Galaxy Watch | MySentry"
      seoDescription="MySentry's fall detection works with Apple Watch (Series 7+) and Samsung Galaxy Watch (Series 6+). Automatic fall detection with 24/7 professional monitoring and live video response. Start your free trial."
      canonical="https://mysentry.ai/features/fall-detection-app"
      label="FEATURE"
      h1="Help Arrives When You Need It Most."
      h1Sub="Wrist-based fall detection that calls for help automatically."
      heroDescription="MySentry detects a fall through your Apple Watch or Samsung Galaxy Watch and sends a safety check alert. If you don't respond, it triggers the Panic Alarm and alerts your emergency contacts and 24/7 monitoring team."
      problem="Falls are the leading cause of injury for adults over 65. Most happen when no one is nearby. If you or a loved one falls and can't reach a phone, every minute matters."
      empathy="You shouldn't have to choose between living independently and staying safe. The right fall detection app means help is always on the way, even when you can't ask for it."
      steps={[
        {
          title: "Pair Your Smartwatch",
          description: "Fall detection requires a supported smartwatch. Pair your Apple Watch (Series 7+) or Samsung Galaxy Watch (Series 6+) with the MySentry app.",
        },
        {
          title: "Fall Detection Activates Automatically",
          description: "MySentry monitors your wrist sensors in the background. When a hard fall is detected, it sends a safety check alert asking if you are okay.",
        },
        {
          title: "Help Is Sent If You Don't Respond",
          description: "If you say you need help or don't respond in time, MySentry triggers the Panic Alarm, alerts your emergency contacts with your live location, and notifies the 24/7 monitoring team.",
        },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See All Features", href: "/how-it-works" }}
      directAnswer="MySentry's fall detection is smartwatch-based. It works with Apple Watch (Series 7 and newer) and Samsung Galaxy Watch (Series 6 and newer). When a fall is detected, MySentry sends a safety check alert. On iOS, Apple's native fall detection triggers the alert, and the response window is approximately 60 to 90 seconds (controlled by Apple). On Android, MySentry's own algorithm detects the fall using the watch's accelerometer and gyroscope, with a 15 to 20 second validation window followed by a 60 second safety check timeout. If you don't respond or say you need help, the Panic Alarm is triggered and your emergency contacts and 24/7 monitoring team are notified with your live GPS location."
      howItWorks={[
        "Your smartwatch sensors continuously monitor movement patterns in the background.",
        "When a hard fall is detected, MySentry sends a safety check alert to your phone and watch.",
        "On iOS: Apple's native fall detection triggers the alert. You have approximately 60 to 90 seconds to respond (this window is controlled by Apple, not MySentry).",
        "On Android: MySentry's custom algorithm detects the fall, validates inactivity for 15 to 20 seconds, then gives you 60 seconds to respond.",
        "If you confirm you are safe, the alert is dismissed with no further action.",
        "If you say you need help or don't respond, the Panic Alarm is triggered automatically.",
        "Your emergency contacts receive your live GPS location and the 24/7 monitoring team is notified.",
        "A trained agent initiates a live video call to assess the situation and coordinate help.",
      ]}
      afterAlert={[
        "Our 24/7 monitoring agent receives the fall alert and your precise GPS coordinates.",
        "The agent starts a live video call to your phone to see and hear what is happening.",
        "If you are conscious, the agent speaks with you and confirms whether emergency services are needed.",
        "If you are unresponsive, the agent immediately dispatches local emergency services with your location and health details.",
        "Your emergency contacts receive a real-time update throughout the response.",
      ]}
      bestFor={[
        "Seniors and older adults living independently or aging in place",
        "Anyone with a medical condition that increases fall risk",
        "Lone workers in construction, field services, or remote locations",
        "Runners, hikers, and cyclists who exercise alone",
        "Family members who want automatic alerts if a loved one falls",
      ]}
      notIdealFor={[
        "Users without a supported Apple Watch or Samsung Galaxy Watch (a smartwatch is required)",
        "Slow or gradual falls (the sensor requires a hard impact to trigger)",
        "Areas with no cellular or Wi-Fi connection",
        "Users who do not wear their watch regularly",
        "iOS users who fully terminate the MySentry app (the app must remain running in the background)",
      ]}
      keyTakeaways={[
        "Fall detection requires a supported smartwatch: Apple Watch Series 7+ or Samsung Galaxy Watch Series 6+.",
        "On iOS, the response window is approximately 60 to 90 seconds and is controlled by Apple's native fall detection.",
        "On Android, MySentry's own algorithm detects the fall with a 60 second safety check timeout.",
        "If you don't respond or say you need help, the Panic Alarm is triggered automatically.",
        "Emergency contacts receive your live GPS location the moment an alert is triggered.",
        "A live video call from a trained agent confirms the situation before dispatching emergency services.",
      ]}
      faqs={[
        {
          question: "Does fall detection require a smartwatch?",
          answer: "Yes. MySentry's fall detection is smartwatch-based. You need a supported Apple Watch (Series 7 or newer) or Samsung Galaxy Watch (Series 6 or newer) paired with the MySentry app. The smartwatch provides the wrist-based accelerometer and gyroscope data needed to detect falls accurately.",
        },
        {
          question: "Does fall detection work on iPhone without an Apple Watch?",
          answer: "No. Fall detection requires a paired Apple Watch (Series 7 or newer). The phone alone does not provide fall detection in MySentry. If you do not have a supported watch, you can still use the Panic Alarm, Crash Detection, and Health Monitoring features.",
        },
        {
          question: "How long do I have to cancel a false alarm?",
          answer: "On iOS, you have approximately 60 to 90 seconds to respond. This window is controlled by Apple's native fall detection, not MySentry. On Android, you have 60 seconds to respond after MySentry's algorithm validates the fall. If you dismiss the alert, no further action is taken.",
        },
        {
          question: "Does MySentry detect falls better than Apple Watch fall detection alone?",
          answer: "MySentry adds a critical layer that Apple Watch alone does not provide: 24/7 professional monitoring with live video response. When Apple Watch detects a fall, it calls 911 directly. MySentry first connects you to a trained agent by live video, who can confirm the situation, speak with you, and coordinate the right response. This reduces unnecessary 911 calls and gets you more targeted help.",
        },
        {
          question: "Can family members be notified when a fall is detected?",
          answer: "Yes. When a fall alert is triggered and you do not respond, your chosen emergency contacts receive an automatic notification with your live GPS location. They are updated throughout the response.",
        },
        {
          question: "Which Samsung Galaxy Watch models are supported?",
          answer: "MySentry supports Samsung Galaxy Watch Series 6 and newer running Wear OS with Samsung Health APIs. Older Samsung watch models are not supported.",
        },
        {
          question: "What is the difference between MySentry and a medical alert device?",
          answer: "Traditional medical alert devices like Life Alert require you to press a button. MySentry detects falls automatically through your smartwatch, even if you are unconscious or unable to press anything. MySentry also adds live video response, health monitoring, and a panic alarm in a single smartphone app, with no extra hardware to buy beyond a supported smartwatch.",
        },
        {
          question: "Does the MySentry app need to be open for fall detection to work on iPhone?",
          answer: "The MySentry iOS app must be running in the background (not fully terminated) for fall detection to work. If you force-close the app on iPhone, fall detection will not be active. We recommend keeping the app running in the background at all times.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) or Android (8.0+) with a supported smartwatch: Apple Watch Series 7 or newer, or Samsung Galaxy Watch Series 6 or newer.",
        permissions: "Location (always on), motion and fitness, microphone, camera, and background app refresh.",
        connectivity: "Cellular or Wi-Fi required to send alerts.",
        limitations: "A supported smartwatch is required for fall detection. Slow or gradual falls may not trigger detection. On iPhone, the app must remain running in the background.",
      }}
      proofBlocks={[
        {
          claim: "Smartwatch-based detection",
          detail: "Fall detection uses the accelerometer and gyroscope in your Apple Watch or Samsung Galaxy Watch for accurate wrist-based fall identification.",
        },
        {
          claim: "Automatic safety check alert",
          detail: "When a fall is detected, MySentry asks if you are okay before escalating. This reduces false alarms while ensuring help is sent when you need it.",
        },
        {
          claim: "24/7 professional monitoring included",
          detail: "Every MySentry subscription includes access to a 24/7 trained monitoring team who responds to fall alerts with a live video call.",
        },
        {
          claim: "Live GPS location shared automatically",
          detail: "When a fall alert is sent, your emergency contacts and monitoring agents receive your precise GPS coordinates in real time.",
        },
      ]}
      comparisonTable={{
        heading: "Fall Detection App Comparison",
        columns: ["MySentry", "Apple Watch (alone)", "Medical Alert Device", "Life360"],
        rows: [
          { feature: "Automatic fall detection", values: ["Yes (watch required)", "Yes (watch required)", "Some models", "No"] },
          { feature: "Works on iPhone", values: ["Yes + Apple Watch", "Requires Watch", "No", "Yes"] },
          { feature: "Works on Android", values: ["Yes + Samsung Watch", "No", "No", "Yes"] },
          { feature: "24/7 professional monitoring", values: ["Yes", "No (calls 911 directly)", "Yes", "No"] },
          { feature: "Live video response", values: ["Yes", "No", "No", "No"] },
          { feature: "Emergency contact alerts", values: ["Yes", "No", "Some", "Yes"] },
          { feature: "Health monitoring (HRV, SpO2)", values: ["Yes", "Yes (with Watch)", "No", "No"] },
          { feature: "Panic button", values: ["Yes (voice, tap, watch)", "SOS only", "Button only", "Yes"] },
          { feature: "Extra hardware required", values: ["Smartwatch required", "Apple Watch required", "Yes (device + base)", "No"] },
          { feature: "Monthly subscription", values: ["From $15/mo", "None (device cost)", "From $29.95/mo", "From $12.99/mo"] },
        ],
      }}
      relatedLinks={[
        { text: "Panic Button App", href: "/features/panic-button-app" },
        { text: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Health Monitoring", href: "/features/health-monitoring" },
        { text: "Apple Watch Integration", href: "/integrations/apple-watch" },
        { text: "Samsung Galaxy Watch Integration", href: "/integrations/samsung-galaxy-watch" },
        { text: "Medical Alert App for Seniors", href: "/use-cases/medical-alert-app-for-seniors" },
        { text: "Apple Watch Fall Detection vs MySentry", href: "/compare/apple-watch-fall-detection-vs-mysentry" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
