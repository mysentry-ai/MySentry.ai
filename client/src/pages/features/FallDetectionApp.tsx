
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function FallDetectionApp() {
  return (
    <SEOPageTemplate
      seoTitle="Fall Detection App for Seniors | MySentry"
      seoDescription="Get peace of mind with an automatic fall detection app that alerts for help 24/7. Works on smartphones and smartwatches. Start your 7-day free trial."
      canonical="https://mysentry.ai/features/fall-detection-app"
      label="FEATURE"
      h1="Automatic Fall Detection for Instant Help"
      problem="A sudden fall can be terrifying when you are alone. The fear of not being able to get help can limit your freedom and independence."
      empathy="You deserve to live confidently and without constant worry. MySentry provides a safety net, so you can feel secure knowing help is always there if you need it."
      steps={[
        { title: "Download MySentry", description: "Install the app on your smartphone or a compatible smartwatch." },
        { title: "Activate Fall Detection", description: "Enable the automatic fall detection feature in the app’s settings." },
        { title: "Live with Confidence", description: "MySentry monitors for falls 24/7, ready to send help the moment you need it." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A fall detection app uses sensors in a smartphone or smartwatch to automatically identify a fall. When a fall is detected, the MySentry app alerts your emergency contacts and our 24/7 professional monitoring center. This ensures you get help fast, even if you are unconscious or cannot reach your phone."
      howItWorks={[
        "MySentry uses the motion sensors in your existing smartphone or smartwatch to detect the unique impact of a fall.",
        "When a potential fall is detected, the app gives you 30 seconds to confirm you are okay or cancel the alarm.",
        "If the alarm is not canceled, it automatically notifies your emergency contacts and our 24/7 monitoring team.",
        "A live agent will speak to you through your device and can dispatch local emergency services to your location.",
      ]}
      afterAlert={[
        "Your designated emergency contacts receive an immediate notification with your GPS location.",
        "Our 24/7 professional monitoring team is alerted and reviews the event.",
        "A live agent establishes two-way communication through your phone or watch.",
        "If you need help or are unresponsive, we coordinate with local EMS to dispatch assistance.",
      ]}
      bestFor={["Seniors living independently", "Individuals with mobility concerns", "Anyone wanting an added layer of safety at home"]}
      notIdealFor={["People without a compatible smartphone or smartwatch", "Locations without a reliable internet or cellular signal"]}
      keyTakeaways={[
        "Get automatic help after a fall, even if you can't press a button.",
        "Works on the smartphone or smartwatch you already own.",
        "Combines automatic detection with 24/7 professional human oversight.",
      ]}
      faqs={[
        {
          question: "Do I need to buy a special device?",
          answer: "No, MySentry works on most modern smartphones and popular smartwatches. There is no need to purchase or wear a separate, single-purpose fall detection device."
        },
        {
          question: "What happens if I just drop my phone?",
          answer: "Our system is designed to differentiate between a person falling and a device being dropped. If a fall is suspected, you have a 30-second window to easily cancel the alert, preventing false alarms."
        },
        {
          question: "Does the fall detection app require an internet connection?",
          answer: "Yes, an active internet connection, either through Wi-Fi or a cellular network, is required for the app to detect a fall and send out alerts to our monitoring center and your contacts."
        },
        {
          question: "Can I try the fall detection feature before I buy?",
          answer: "Absolutely. All MySentry features, including automatic fall detection, are available during our 7-day free trial. You can test it out and see how it gives you peace of mind."
        },
        {
          question: "Is this a good fall alert app for seniors?",
          answer: "Yes, it is an ideal solution for seniors who want to maintain their independence. It is easy to set up on a device they already use and provides 24/7 protection without the stigma of a traditional medical alert necklace."
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection recommended for outdoor use and GPS accuracy. Offline mode stores alerts and sends when reconnected.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Falls are detected using accelerometer and gyroscope sensors on phone and smartwatch.", detail: "MySentry analyzes sudden changes in motion patterns to identify falls, even when the user is alone." },
        { claim: "If the user does not respond within 2 minutes, alerts are sent automatically.", detail: "A 2-minute countdown gives the user time to cancel a false alarm. If no response, 24/7 agents are alerted with location and vitals." },
        { claim: "Near-fall detection identifies stability issues before a serious fall occurs.", detail: "The app tracks balance patterns over time and alerts users and caregivers to increasing fall risk." }
      ]}
      relatedLinks={[
        { text: "Panic Alarm for Emergencies", href: "/features/panic-button-app" },
        { text: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

