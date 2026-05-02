import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function OuraRingIntegration() {
  return (
    <SEOPageTemplate
      seoTitle="Oura Ring Integration: Add 24/7 Safety | MySentry"
      seoDescription="Integrate your Oura Ring with MySentry for 24/7 emergency response. Get fall detection, panic alarms, and professional monitoring. Stay safe, get help fast."
      canonical="https://www.mysentry.ai/integrations/oura-ring"
      label="Integration"
      h1="Worried About Emergencies While Wearing Your Oura Ring?"
      problem="You love the health insights from your Oura Ring, but what happens in an emergency? A fall, a sudden health event, or a moment of panic can leave you vulnerable when you're alone."
      empathy="We understand. You value your independence and peace of mind. That's why we've partnered with Oura to provide a safety net that works with your health tracking, giving you and your loved ones confidence that help is always there when you need it."
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
      directAnswer="MySentry works with your Oura Ring to add 24/7 professional monitoring and emergency response. While Oura tracks your health data, MySentry can detect possible health changes and automatically send help if you can't respond. It also adds fall detection and a panic alarm, turning your wellness tracker into a personal safety device."
      howItWorks={[
        "Connect Your Accounts: Download the MySentry app and allow it to connect to your Oura Ring account using the official Oura API. Your data is encrypted and safe.",
        "Enable Health Data Sync: Let MySentry securely access your health data, such as heart rate, HRV, SpO2, and temperature, for early health change detection.",
        "Add Emergency Response: MySentry adds fall detection, a panic alarm you can trigger with your voice or a tap, and 24/7 professional monitoring to your Oura Ring. Help is always available.",
      ]}
      afterAlert={[
        "Immediate Alert: When a fall or health change is found, or the panic alarm is set off, an alert goes to our 24/7 monitoring center.",
        "Professional Response: Our trained agents check the situation, talk with you if possible, and send emergency services if needed.",
        "Family Notification: Your chosen emergency contacts are told what's happening, keeping them informed.",
      ]}
      bestFor={[
        "Oura Ring users who want more personal safety.",
        "People living alone who want peace of mind.",
        "Anyone wanting to add emergency response to their health tracking.",
        "Families who want to keep their loved ones safe from far away.",
      ]}
      notIdealFor={[
        "People without a compatible Oura Ring (Gen 3 or newer).",
        "Users who do not want to share health data for monitoring.",
        "People looking for a medical alert device without health tracking.",
      ]}
      keyTakeaways={[
        "Adds to Your Oura Ring: MySentry works with your Oura Ring's health tracking to add a vital layer of emergency response.",
        "Smart Health Monitoring: Uses Oura's data (HRV, SpO2, temperature) for early health alerts.",
        "Complete Safety: Adds fall detection, a panic alarm, and 24/7 professional monitoring to your current wellness device.",
        "Easy Setup: Simple to set up by connecting your Oura account through the secure Oura API.",
        "Works With: Oura Ring Gen 3 and newer models.",
      ]}
      faqs={[
        {
          question: "Does MySentry replace my Oura Ring app?",
          answer: "Not at all. MySentry works alongside your Oura Ring app. You will keep using the Oura app for your detailed health insights, sleep analysis, and activity tracking. MySentry gives you the extra layer of safety and emergency response.",
        },
        {
          question: "Is my health data safe?",
          answer: "Yes, absolutely. We use the official Oura API to get your data, and all data is encrypted when it's sent and when it's stored. We promise to meet the highest standards for data privacy and safety.",
        },
        {
          question: "What happens if I accidentally set off an alarm?",
          answer: "Our professional monitoring agents will try to contact you to check if there's a real emergency. If you say it was a mistake, we will stop the dispatch. There's no penalty for accidental alarms.",
        },
        {
          question: "Do I need my smartphone with me for it to work?",
          answer: "Yes, for the integration to be active, your Oura Ring needs to be connected to your smartphone, and the MySentry app must be running in the background. This lets us get the data and send alerts when needed.",
        },
      ]}
      setupRequirements={{
        devices: "A compatible Oura Ring (Generation 3 or newer) and a smartphone (iOS or Android) with the MySentry app installed.",
        permissions: "You must allow the connection between MySentry and your Oura account through the secure Oura API.",
        connectivity: "Your smartphone needs an active internet connection for the service to work.",
        limitations: "An active Oura membership is required. The MySentry app must be running in the background on your smartphone.",
      }}
      proofBlocks={[
        {
          claim: "Advanced Health Data from Oura Ring",
          detail: "MySentry uses your Oura Ring's advanced sensors to watch key health signs like Heart Rate Variability (HRV), SpO2, and body temperature for a full health picture.",
        },
        {
          claim: "MySentry Adds 24/7 Professional Safety",
          detail: "Our service makes your Oura Ring safer with important features, including automatic fall detection, a panic alarm you can trigger with your voice or a tap, and quick access to our emergency center.",
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
