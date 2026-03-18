import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function SamsungGalaxyWatchIntegration() {
  return (
    <SEOPageTemplate
      seoTitle="MySentry | Samsung Galaxy Watch Integration"
      seoDescription="The ultimate safety layer for your Samsung Galaxy Watch. MySentry offers fall detection, a panic alarm, and more, seamlessly integrated with your smartwatch."
      canonical="https://mysentry.ai/integrations/samsung-galaxy-watch"
      label="Integration"
      h1="The Ultimate Safety Layer for Your Samsung Galaxy Watch"
      problem="You love the convenience of your Samsung Galaxy Watch, but worry about safety, especially during falls or emergencies. You need a solution that integrates seamlessly without adding another device."
      empathy="We get it. Your watch is part of your life. That's why we created MySentry to enhance the device you already own and love, turning it into a powerful safety companion."
      steps={[
        { title: "Step 1: Download", description: "Download the MySentry app on your Android smartphone." },
        { title: "Step 2: Pair", description: "Pair the app with your Samsung Galaxy Watch." },
        { title: "Step 3: Enable", description: "Enable data sharing with Samsung Health to get the most out of MySentry." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing#pricing-plans" }}
      directAnswer="MySentry integrates with your Samsung Galaxy Watch to provide advanced safety features like automatic fall detection, a voice-activated panic alarm, and health monitoring, all from your wrist."
      howItWorks={[
        "Automatic Fall Detection: If you fall, MySentry detects it and alerts our 24/7 monitoring center within 2 minutes if you do not respond.",
        "Instant Panic Alarm: Trigger a panic alarm with a simple voice command, a tap on your watch face, or through your smartphone.",
        "Health & GPS Monitoring: Keeps an eye on your heart rate and SpO2 levels, and provides GPS location to emergency contacts when an alert is triggered.",
      ]}
      afterAlert={[
        "Immediate Contact: Our monitoring team speaks to you directly through your smartphone.",
        "Emergency Dispatch: If needed, we dispatch local emergency services to your GPS location.",
        "Family Notification: Your designated emergency contacts are notified of the situation.",
      ]}
      bestFor={[
        "Active seniors who use a Samsung Galaxy Watch.",
        "Anyone looking for an added layer of safety without a separate device.",
        "Galaxy Watch users who want peace of mind for themselves and their families.",
      ]}
      notIdealFor={[
        "Users without a compatible Samsung Galaxy Watch (Series 4 or newer).",
        "Individuals who do not have an Android smartphone.",
        "People who are uncomfortable with sharing health data from their watch.",
      ]}
      keyTakeaways={[
        "Seamless integration with your existing Samsung Galaxy Watch.",
        "Comprehensive safety features: fall detection, panic alarm, and crash detection.",
        "Utilizes watch sensors for heart rate and SpO2 monitoring.",
        "Requires a compatible Android phone and Galaxy Watch (4 or newer).",
      ]}
      faqs={[
        {
          question: "Which Samsung Galaxy Watch models are compatible?",
          answer: "MySentry is compatible with the Samsung Galaxy Watch 4 and any newer models running Wear OS 3 or higher.",
        },
        {
          question: "Do I need my phone with me for it to work?",
          answer: "Yes, your Galaxy Watch needs to be connected to your Android smartphone with the MySentry app running for the safety features to be active.",
        },
        {
          question: "How does the fall detection work?",
          answer: "MySentry uses the motion sensors in your Galaxy Watch to detect the impact of a fall. If a fall is detected, it will initiate an alert sequence. If you do not cancel the alert within 2 minutes, our 24/7 monitoring center is notified.",
        },
        {
          question: "Is my health data secure?",
          answer: "Absolutely. Your health data is encrypted and securely stored. We only share relevant information with emergency services during an active alert.",
        },
      ]}
      setupRequirements={{
        devices: "Samsung Galaxy Watch 4 or newer and a compatible Android smartphone.",
        permissions: "Enable data sharing with Samsung Health for full functionality.",
        connectivity: "Requires a constant Bluetooth connection between your watch and smartphone.",
        limitations: "MySentry is not a substitute for professional medical advice. Health monitoring is for informational purposes only.",
      }}
      proofBlocks={[
        { claim: "2 Minute Fall Detection Time", detail: "If a fall is detected, MySentry waits 2 minutes for you to respond before alerting our 24/7 monitoring center." },
        { claim: "Automatic Crash Detection", detail: "In the event of a car accident, MySentry can automatically detect the crash and alert our monitoring center." },
        { claim: "User Testimonial", detail: "I feel so much safer knowing MySentry is on my wrist. It is the best of both worlds: the smartwatch I love and the protection I need. - Sarah L., MySentry User" },
      ]}
      disclaimer="MySentry is not a substitute for professional medical advice. Heart rate and SpO2 monitoring are for informational purposes only and not intended for medical use."
      relatedLinks={[
        { text: "Explore Pricing Plans", href: "/pricing#pricing-plans" },
        { text: "How MySentry Works", href: "/how-it-works" },
        { text: "Contact Support", href: "/contact" },
      ]}
      heroImage="/images/integrations/samsung-galaxy-watch-hero.png"
    />
  );
}