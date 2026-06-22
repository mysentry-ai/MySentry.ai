import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function FallDetectionApp() {
  return (
    <SEOPageTemplate
      seoTitle="Fall Detection App for iPhone, Android & Apple Watch | MySentry"
      seoDescription="MySentry's fall detection app works on iPhone, Android, and Apple Watch. It automatically detects hard falls and sends a live alert to 24/7 professionals and your family. Start your free trial."
      canonical="https://mysentry.ai/features/fall-detection-app"
      label="FEATURE"
      h1="Help Arrives When You Need It Most."
      h1Sub="Get help fast, even if you can't call out."
      heroDescription="MySentry detects a fall and connects you to a live agent within 2 minutes, even if you can't move or speak."
      problem="Falls are the leading cause of injury for adults over 65. Most happen when no one is nearby. If you or a loved one falls and can't reach a phone, minutes matter."
      empathy="You shouldn't have to choose between living independently and staying safe. The right fall detection app means help is always on the way, even when you can't ask for it."
      steps={[
        {
          title: "Download MySentry",
          description: "Get the app on iPhone or Android. Pair it with your Apple Watch or Samsung Galaxy Watch for wrist-based detection.",
        },
        {
          title: "Fall Detection Activates Automatically",
          description: "MySentry uses your phone and watch sensors to detect a hard fall in real time. No button press needed.",
        },
        {
          title: "Help Is Sent Within 2 Minutes",
          description: "If you don't respond to the check-in prompt within 2 minutes, our 24/7 monitoring team is alerted and your emergency contacts are notified with your live location.",
        },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See All Features", href: "/how-it-works" }}
      directAnswer="A fall detection app uses the accelerometer and gyroscope in your smartphone or smartwatch to identify the sudden impact and change in position that happens during a hard fall. MySentry's fall detection works on iPhone, Android, Apple Watch, and Samsung Galaxy Watch. When a fall is detected, the app gives you 2 minutes to confirm you are okay. If you don't respond, it automatically alerts our 24/7 professional monitoring team and your chosen emergency contacts with your live GPS location."
      howItWorks={[
        "Your phone or watch sensors continuously monitor movement patterns in the background.",
        "When a hard fall is detected, the app immediately shows a check-in prompt on your screen.",
        "You have 2 minutes to dismiss the alert and confirm you are okay.",
        "If there is no response within 2 minutes, MySentry sends an automatic alert to our 24/7 monitoring center.",
        "A trained agent initiates a live video call to assess the situation.",
        "Your emergency contacts receive an instant text with your name, location, and a link to your live GPS position.",
        "If needed, the agent contacts local emergency services and shares your health profile and location.",
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
        "Slow or gradual falls (the sensor requires a hard impact to trigger)",
        "Areas with no cellular or Wi-Fi connection",
        "Users who do not carry their phone or wear their watch regularly",
      ]}
      keyTakeaways={[
        "MySentry detects hard falls automatically on iPhone, Android, Apple Watch, and Samsung Galaxy Watch.",
        "You have 2 minutes to confirm you are okay before an alert is sent to our 24/7 monitoring team.",
        "Emergency contacts receive your live GPS location the moment an alert is triggered.",
        "A live video call from a trained agent confirms the situation before dispatching emergency services.",
        "No extra hardware is needed. The app works with devices you already own.",
      ]}
      faqs={[
        {
          question: "Does fall detection work on iPhone?",
          answer: "Yes. MySentry's fall detection works on iPhone using the built-in accelerometer and gyroscope. For the most reliable detection, we recommend pairing your iPhone with an Apple Watch, which provides wrist-based motion data for greater accuracy.",
        },
        {
          question: "Does fall detection work on Android?",
          answer: "Yes. MySentry supports fall detection on Android smartphones. Pairing with a Samsung Galaxy Watch improves detection accuracy by combining phone and wrist sensor data.",
        },
        {
          question: "How long do I have to cancel a false alarm?",
          answer: "You have 2 minutes to respond to the check-in prompt after a fall is detected. If you dismiss the alert within that window, no alert is sent. This gives you time to confirm you are okay without triggering a false alarm.",
        },
        {
          question: "Does MySentry detect falls better than Apple Watch fall detection?",
          answer: "MySentry adds a layer that Apple Watch alone does not provide: 24/7 professional monitoring. When Apple Watch detects a fall, it calls 911 directly. MySentry first connects you to a trained agent by live video, who can confirm the situation, speak with you, and coordinate the right response. This reduces unnecessary 911 calls and gets you more targeted help.",
        },
        {
          question: "Can family members be notified when a fall is detected?",
          answer: "Yes. When a fall alert is triggered and you do not respond within 2 minutes, your chosen emergency contacts receive an automatic text message with your name and a link to your live GPS location. They are updated throughout the response.",
        },
        {
          question: "Is fall detection available for seniors without a smartwatch?",
          answer: "Yes. MySentry's fall detection works on a smartphone alone. A smartwatch improves accuracy, but it is not required. For seniors who prefer not to wear a watch, the phone-only option still provides automatic fall detection and 24/7 monitoring.",
        },
        {
          question: "What is the difference between MySentry and a medical alert device?",
          answer: "Traditional medical alert devices like Life Alert require you to press a button. MySentry detects falls automatically, even if you are unconscious or unable to press anything. MySentry also adds live video response, health monitoring, and a panic alarm in a single smartphone app, with no extra hardware to buy or wear.",
        },
        {
          question: "Does fall detection drain the phone battery?",
          answer: "MySentry is designed to run efficiently in the background. Fall detection uses the phone's motion co-processor, which is a low-power chip designed for always-on sensor monitoring. Most users see less than 5% additional battery usage per day.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) or Android (8.0+). Optional but recommended: Apple Watch (Series 4+) or Samsung Galaxy Watch (4+).",
        permissions: "Location (always on), motion and fitness, microphone, camera, and background app refresh.",
        connectivity: "Cellular or Wi-Fi required to send alerts. Fall detection itself works offline; the alert is queued and sent when connectivity is restored.",
        limitations: "Slow or gradual falls may not trigger detection. Detection accuracy improves when a paired smartwatch is worn.",
      }}
      proofBlocks={[
        {
          claim: "2-minute response window",
          detail: "After a fall is detected, you have 2 minutes to confirm you are okay before an alert is automatically sent to our monitoring team and your emergency contacts.",
        },
        {
          claim: "Works on iPhone, Android, Apple Watch, and Samsung Galaxy Watch",
          detail: "MySentry uses the accelerometer and gyroscope in your existing devices. No extra hardware purchase is required.",
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
          { feature: "Automatic fall detection", values: ["Yes", "Yes", "Some models", "No"] },
          { feature: "Works on iPhone", values: ["Yes", "Requires Watch", "No", "Yes"] },
          { feature: "Works on Android", values: ["Yes", "No", "No", "Yes"] },
          { feature: "24/7 professional monitoring", values: ["Yes", "No (calls 911 directly)", "Yes", "No"] },
          { feature: "Live video response", values: ["Yes", "No", "No", "No"] },
          { feature: "Emergency contact alerts", values: ["Yes", "No", "Some", "Yes"] },
          { feature: "Health monitoring (HRV, SpO2)", values: ["Yes", "Yes (with Watch)", "No", "No"] },
          { feature: "Panic button", values: ["Yes (voice, tap, watch)", "SOS only", "Button only", "Yes"] },
          { feature: "Extra hardware required", values: ["No", "Apple Watch required", "Yes (device + base)", "No"] },
          { feature: "Monthly subscription", values: ["From $9.99/mo", "None (device cost)", "From $29.95/mo", "From $12.99/mo"] },
        ],
      }}
      relatedLinks={[
        { text: "Panic Button App", href: "/features/panic-button-app" },
        { text: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Health Monitoring", href: "/features/health-monitoring" },
        { text: "Apple Watch Integration", href: "/integrations/apple-watch" },
        { text: "Medical Alert App for Seniors", href: "/use-cases/medical-alert-app-for-seniors" },
        { text: "Apple Watch Fall Detection vs MySentry", href: "/compare/apple-watch-fall-detection-vs-mysentry" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
