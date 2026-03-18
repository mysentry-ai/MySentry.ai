import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function OuraRingIntegration() {
  return (
    <SEOPageTemplate
      seoTitle="MySentry & Oura Ring Integration | Ultimate Safety Layer"
      seoDescription="Enhance your Oura Ring with MySentry's 24/7 emergency response and professional monitoring. The ultimate safety layer for your health and well-being."
      canonical="https://www.mysentry.ai/integrations/oura-ring"
      label="Integration"
      h1="The Ultimate Safety Layer for Your Oura Ring"
      problem="You love the health insights from your Oura Ring, but what happens in an emergency? A fall, a sudden health event, or a moment of panic can leave you vulnerable when you're alone."
      empathy="We get it. You value your independence and peace of mind. That's why we've partnered with Oura to provide a seamless safety net that complements your health tracking, giving you and your loved ones confidence that help is always there when you need it."
      steps={[
        {
          title: "Download MySentry",
          description: "Get the app on your smartphone from the App Store or Google Play.",
        },
        {
          title: "Connect Your Oura Ring",
          description: "Easily link your Oura account in the MySentry app via the secure Oura API.",
        },
        {
          title: "Enjoy Peace of Mind",
          description: "MySentry works quietly in the background, providing 24/7 protection and emergency support.",
        },
      ]}
      primaryCta={{
        text: "Start 7-Day Free Trial",
        href: "/pricing#pricing-plans",
      }}
      heroImage="/images/hero/oura-integration-hero.png"
      directAnswer="MySentry integrates with your Oura Ring to add a layer of 24/7 professional monitoring and emergency response. While Oura tracks your health data, MySentry can detect potential health anomalies and automatically dispatch help if you can't respond. It also adds fall detection and a panic alarm, turning your wellness tracker into a comprehensive personal safety device."
      howItWorks={[
        "Connect Your Accounts: Download the MySentry app and authorize a connection to your Oura Ring account using the official Oura API. Your data is encrypted and secure.",
        "Enable Health Data Sync: Allow MySentry to securely access your health data, such as heart rate, HRV, SpO2, and temperature, for advanced health anomaly detection.",
        "Add Emergency Response: MySentry adds fall detection, a voice-activated panic alarm, and 24/7 professional monitoring to your Oura Ring, ensuring help is always available.",
      ]}
      afterAlert={[
        "Immediate Alert: When a fall or health anomaly is detected, or the panic alarm is triggered, an alert is sent to our 24/7 monitoring center.",
        "Professional Response: Our trained agents assess the situation, speak with you if possible, and dispatch emergency services if needed.",
        "Family Notification: Your designated emergency contacts are notified, keeping them informed and involved.",
      ]}
      bestFor={[
        "Oura Ring users seeking an added layer of personal safety.",
        "Individuals living alone who want peace of mind.",
        "Anyone looking to enhance their health tracking with emergency response.",
        "Families wanting to ensure the safety of their loved ones remotely.",
      ]}
      notIdealFor={[
        "Individuals without a compatible Oura Ring (Gen 3 or newer).",
        "Users who do not want to share health data for monitoring purposes.",
        "People seeking a medical alert device without health tracking features.",
      ]}
      keyTakeaways={[
        "Enhance, Not Replace: MySentry complements the Oura Ring's health tracking with a critical layer of emergency response.",
        "Advanced Health Monitoring: Leverages Oura's data (HRV, SpO2, temperature) for proactive health anomaly alerts.",
        "Complete Safety Solution: Adds fall detection, a panic alarm, and 24/7 professional monitoring to your existing wellness device.",
        "Seamless Integration: Easy setup by connecting your Oura account through the secure Oura API.",
        "Compatibility: Works with Oura Ring Gen 3 and newer models.",
      ]}
      faqs={[
        {
          question: "Does MySentry replace my Oura Ring app?",
          answer: "Not at all. MySentry works alongside your Oura Ring app. You will continue to use the Oura app for your detailed health insights, sleep analysis, and activity tracking. MySentry provides the additional layer of safety and emergency response.",
        },
        {
          question: "Is my health data secure?",
          answer: "Yes, absolutely. We use the official Oura API to access your data, and all data is encrypted both in transit and at rest. We are committed to the highest standards of data privacy and security.",
        },
        {
          question: "What happens if I accidentally trigger an alarm?",
          answer: "Our professional monitoring agents will attempt to contact you to verify the emergency. If you confirm it was a false alarm, we will cancel the dispatch. There is no penalty for accidental alarms.",
        },
        {
          question: "Do I need my smartphone with me for it to work?",
          answer: "Yes, for the integration to be active, your Oura Ring needs to be connected to your smartphone, and the MySentry app must be running in the background. This allows us to receive the data and trigger alerts when necessary.",
        },
      ]}
      setupRequirements={{
        devices: "A compatible Oura Ring (Generation 3 or newer) and a smartphone (iOS or Android) with the MySentry app installed.",
        permissions: "You must authorize the connection between MySentry and your Oura account via the secure Oura API.",
        connectivity: "Your smartphone requires an active internet connection for the service to function.",
        limitations: "An active Oura membership is required. The MySentry app must be running in the background on your smartphone.",
      }}
      proofBlocks={[
        {
          claim: "Advanced Health Data from Oura Ring",
          detail: "MySentry uses your Oura Ring's advanced sensors to monitor key biometrics like Heart Rate Variability (HRV), SpO2, and body temperature for a complete health picture.",
        },
        {
          claim: "MySentry Adds 24/7 Professional Safety",
          detail: "Our service enhances your Oura Ring with critical safety features, including automatic fall detection, a voice-activated panic alarm, and immediate access to our emergency dispatch center.",
        },
      ]}
      relatedLinks={[
        { text: "How MySentry Works", href: "/how-it-works" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "About Us", href: "/about" },
      ]}
    />
  );
}