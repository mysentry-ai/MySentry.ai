
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function HealthMonitoring() {
  return (
    <SEOPageTemplate
      seoTitle="Health Monitoring App for Seniors | MySentry"
      seoDescription="Keep an eye on your health with MySentry's real-time tracking app. Monitor heart rate, SpO2, and HRV, and get alerts for changes. Start your free trial today for peace of mind."
      canonical="https://mysentry.ai/features/health-monitoring"
      label="FEATURE"
      h1="Your 24/7 Health Monitoring Companion"
      problem="Keeping track of key health signs like heart rate, HRV, and SpO2 can be complicated and easy to forget. You worry about missing an important change that could signal a problem."
      empathy="It's natural to want peace of mind about your health or the well-being of a loved one. You deserve a simple way to stay informed without constant stress."
      steps={[
        { title: "Download the MySentry App", description: "Get the app from the App Store or Google Play and create your account." },
        { title: "Connect Your Wearable Device", description: "Easily link your compatible smartwatch or health tracker to start syncing your data." },
        { title: "View Your Health Vitals", description: "See your real-time health information on your personal dashboard and set your alert preferences." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="The MySentry health monitoring app provides real-time tracking of key vitals like heart rate, HRV, and SpO2 through a connected wearable device. It helps you understand your health trends and can automatically alert you and your emergency contacts to significant changes, offering 24/7 peace of mind."
      howItWorks={[
        "MySentry securely syncs with your compatible wearable device to gather health data.",
        "It tracks your Heart Rate Variability (HRV), Blood Oxygen (SpO2), and Heart Rate in real-time.",
        "You can view your current and historical data easily within the app's dashboard.",
        "Set custom thresholds for alerts if your vitals go outside your normal range.",
      ]}
      afterAlert={[
        "A notification is sent to you, your emergency contacts, and our 24/7 monitoring team.",
        "Our professional responders can view your live location and health data.",
        "A live video call is initiated to assess your situation visually.",
        "If needed, we coordinate with local emergency services and provide them with critical information.",
      ]}
      bestFor={["Seniors living independently", "Individuals with chronic health conditions", "Family members wanting to monitor loved ones"]}
      notIdealFor={["Diagnosing medical conditions", "Replacing professional medical advice"]}
      keyTakeaways={[
        "Get 24/7 visibility into your key health vitals like HRV, SpO2, and heart rate.",
        "Receive automatic alerts when your health metrics go outside your set ranges.",
        "Empower your family and our 24/7 responders to act quickly in an emergency.",
      ]}
      faqs={[
        { question: "What devices work with MySentry for health monitoring?", answer: "MySentry is compatible with a wide range of popular smartwatches and wearable health trackers. You can check our full compatibility list on the How It Works page." },
        { question: "Is my health data secure?", answer: "Absolutely. We use bank-level encryption to protect your personal health information. Your privacy and security are our top priorities." },
        { question: "Can this app replace my doctor?", answer: "No. MySentry is a monitoring tool designed to provide you and your loved ones with peace of mind. It does not provide medical advice and should not replace consultations with your healthcare provider." },
        { question: "What is HRV and why is it important?", answer: "Heart Rate Variability (HRV) is the variation in time between each heartbeat. It is a key indicator of your body's stress and recovery levels, offering insights into your overall well-being." },
        { question: "Can my family see my real-time health data?", answer: "Your emergency contacts are alerted if your vitals fall outside the safe zones you define, but they cannot see your real-time data continuously. This protects your privacy while ensuring help is available when needed." },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection recommended for outdoor use and GPS accuracy. Offline mode stores alerts and sends when reconnected.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "MySentry tracks heart rate, HRV, SpO2, and skin temperature continuously via smartwatch.", detail: "Data is collected in real time and analyzed for abnormalities that may indicate a health emergency." },
        { claim: "Abnormal health readings trigger automatic alerts to 24/7 monitoring agents and emergency contacts.", detail: "Users and caregivers are notified of concerning trends before they become critical emergencies." }
      ]}
      disclaimer="If you feel unsafe, use the MySentry panic alarm. If it is an immediate life-threatening emergency, contact local emergency services. MySentry requires an active internet connection, device permissions, and sufficient battery. Not all features are available on all devices."
      relatedLinks={[
        { text: "Panic Alarm for Immediate Help", href: "/features/panic-button-app" },
        { text: "Automatic Fall Detection", href: "/features/fall-detection-app" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

