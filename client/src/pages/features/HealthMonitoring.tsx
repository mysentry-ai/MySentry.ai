import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function HealthMonitoring() {
  return (
    <SEOPageTemplate
      seoTitle="Health Monitoring App: Track Vitals & Get Alerts | MySentry"
      seoDescription="Monitor heart rate, SpO2, and HRV with MySentry's health monitoring app. Get instant alerts for changes and connect to emergency help. Start your free trial today."
      canonical="https://mysentry.ai/features/health-monitoring"
      label="FEATURE"
      h1="Peace of Mind About Your Health."
      h1Sub="Track vitals and get instant alerts."
      heroDescription="Continuous heart rate, SpO2, and HRV tracking with instant alerts when something looks wrong."
      problem="Keeping track of important health signs like heart rate, HRV, and SpO2 can be tough. You might worry about missing a change that signals a problem."
      empathy="It's normal to want peace of mind about your health or a loved one's well-being. You deserve a simple way to stay informed without constant stress."
      steps={[
        { title: "Create Your Account Online", description: "Visit mysentry.ai, choose your plan, and create your account. Then download the MySentry app from the App Store or Google Play." },
        { title: "Connect Your Wearable Device", description: "Easily link your compatible smartwatch or health tracker to start syncing your data." },
        { title: "View Your Health Vitals", description: "See your real-time health information on your personal dashboard and set your alert preferences." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry's health monitoring app tracks vital signs like heart rate, HRV, and SpO2 in real-time using your wearable device. It helps you understand health trends and automatically alerts you and your emergency contacts to important changes, providing peace of mind around the clock."
      howItWorks={[
        "MySentry connects securely with your compatible smartwatch or health tracker to collect your health data.",
        "It keeps an eye on your Heart Rate, Blood Oxygen (SpO2), and Heart Rate Variability (HRV) all the time.",
        "You can easily see your current and past health information on your app dashboard.",
        "Set up personal alerts so you know if your health numbers go outside your usual range.",
      ]}
      afterAlert={[
        "You, your emergency contacts, and our 24/7 monitoring team all get a notification.",
        "Our trained responders can see your live location and your health information.",
        "We start a live video call to check on you and see what's happening.",
        "If you need help, we contact local emergency services and give them key details.",
      ]}
      bestFor={["Older adults living alone", "People with ongoing health conditions", "Family members who want to check on loved ones"]}
      notIdealFor={["Diagnosing illnesses", "Replacing a doctor's advice"]}
      keyTakeaways={[
        "Get a clear view of your key health numbers like HRV, SpO2, and heart rate, 24/7.",
        "Receive automatic alerts when your health metrics change unexpectedly.",
        "Give your family and our responders the power to act fast in an emergency.",
      ]}
      faqs={[
        { question: "What devices work with MySentry for health monitoring?", answer: "MySentry works with many popular smartwatches and health trackers. You can find our full list of compatible devices on the How It Works page." },
        { question: "Is my health data safe?", answer: "Yes, absolutely. We use strong encryption to protect your personal health information. Your privacy and security are our top concerns." },
        { question: "Can this app replace my doctor?", answer: "No. MySentry is a tool to help you and your loved ones feel more secure. It does not give medical advice and should not take the place of talking with your healthcare provider." },
        { question: "What is HRV and why is it important?", answer: "Heart Rate Variability (HRV) is how much the time between your heartbeats changes. It's a good sign of your body's stress and recovery, giving you clues about your overall health." },
        { question: "Can my family see my real-time health data?", answer: "Your emergency contacts get alerts if your health numbers go outside the safe limits you set. They do not see your real-time data all the time. This keeps your information private while making sure help is there when you need it." },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "MySentry tracks heart rate, HRV, SpO2, and skin temperature continuously via smartwatch.", detail: "Data is collected in real time and checked for unusual readings that might point to a health emergency." },
        { claim: "Unusual health readings send automatic alerts to 24/7 monitoring agents and emergency contacts.", detail: "Users and caregivers are told about worrying trends before they become serious emergencies." }
      ]}
      relatedLinks={[
        { text: "Panic Alarm for Immediate Help", href: "/features/panic-button-app" },
        { text: "Automatic Fall Detection", href: "/features/fall-detection-app" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
