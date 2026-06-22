
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function EmergencyContacts() {
  return (
    <SEOPageTemplate
      seoTitle="Emergency Contacts App | MySentry"
      seoDescription="MySentry's emergency contacts app helps you instantly alert loved ones during an emergency. Share your location and status with a tap, keeping family informed and safe. Start your free trial today."
      canonical="https://mysentry.ai/features/emergency-contacts"
      label="FEATURE"
      h1="Loved Ones Alerted. Help Arrives Fast."
      h1Sub="Instantly notify family and friends with your location."
      problem="It's hard to quickly and reliably notify your family or friends when you're in an emergency. You need a simple way to send an alert with your location."
      empathy="Worrying about your loved ones' safety is natural. It's even more stressful when you can't reach them or know if they are okay."
      steps={[
        { title: "Add Your Contacts", description: "Easily add family, friends, and trusted individuals to your emergency contact list in the MySentry app." },
        { title: "Trigger an Alert", description: "When you feel unsafe, activate the panic alarm or rely on automatic detections like falls or crashes." },
        { title: "Instantly Notify Everyone", description: "MySentry automatically sends an alert with your live location and status to all your emergency contacts." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry's emergency contacts app lets you instantly alert pre-selected family and friends during an emergency. With a single tap or an automatic detection, the app sends an alert with your live location and status, ensuring your loved ones are informed and can respond quickly when you need help most."
      howItWorks={[
        "Designate trusted family members and friends as your emergency contacts within the app.",
        "When you trigger a panic alarm, or if the app detects a fall or car crash, it sends an immediate notification.",
        "Your contacts receive a text message with a link to a secure web page showing your live location and status.",
        "You can also initiate a live video stream for our 24/7 professional monitors to assess the situation.",
      ]}
      afterAlert={[
        "Your designated contacts are immediately sent a text message with your alert details.",
        "They can view your real-time location on a map and see the reason for the alert.",
        "If you have professional monitoring, our certified agents will also be notified and can dispatch emergency services.",
        "The app keeps your contacts updated until the emergency is resolved.",
      ]}
      bestFor={[
        "Families wanting to stay connected and ensure each other's safety.",
        "Individuals who live alone or have medical conditions.",
        "Parents who want peace of mind for their children's safety.",
      ]}
      notIdealFor={[
        "Users without a smartphone or a consistent internet connection.",
        "Situations requiring immediate, life-threatening medical intervention where calling 911 is faster.",
      ]}
      keyTakeaways={[
        "Instantly notify multiple contacts at once during any emergency.",
        "Share your live location automatically when an alert is triggered.",
        "Works seamlessly with automatic fall and crash detection for added safety.",
      ]}
      faqs={[
        {
          question: "How many emergency contacts can I add?",
          answer: "You can add up to five emergency contacts in the MySentry app. We recommend adding a mix of family members, trusted friends, and neighbors.",
        },
        {
          question: "What information do my contacts receive?",
          answer: "Your contacts receive a text message with a secure link. The link opens a webpage showing your name, the type of alert (e.g., panic alarm, fall detection), and your live location on a map.",
        },
        {
          question: "Is the emergency contact feature free?",
          answer: "Yes, the ability to add emergency contacts and send alerts to them is included in all MySentry subscription plans, including our free trial.",
        },
        {
          question: "Can my contacts call me back through the app?",
          answer: "The alert notification is a one-way message to inform your contacts. They can then call your phone number directly or use the location information to get to you.",
        },
        {
          question: "Do my contacts need to have the MySentry app installed?",
          answer: "No, your contacts do not need the app. They receive the alert via a standard SMS text message and can view your status on any web browser.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Up to 5 emergency contacts can be designated per user profile.", detail: "Each contact receives SMS, push notification, and email alerts simultaneously when an emergency is triggered." },
        { claim: "Emergency contacts receive the user's real-time GPS location during an active alert.", detail: "Contacts can track the user's location on a map and coordinate with emergency services." }
      ]}
      relatedLinks={[
        { text: "Fall Detection", href: "/features/fall-detection-app" },
        { text: "Panic Alarm for Seniors", href: "/use-cases/medical-alert-app-for-seniors" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}


