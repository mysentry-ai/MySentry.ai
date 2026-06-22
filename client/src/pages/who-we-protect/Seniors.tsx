import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function WhoWeProtectSeniors() {
  return (
    <SEOPageTemplate
      seoTitle="Safety App for Seniors | Fall Detection & 24/7 Monitoring | MySentry"
      seoDescription="MySentry protects seniors with automatic fall detection, a panic button, 24/7 professional monitoring, and live video response. Works on iPhone, Android, and Apple Watch. No pendant required."
      canonical="https://mysentry.ai/who-we-protect/seniors"
      label="WHO WE PROTECT"
      h1="Know Your Parent Is Safe Right Now."
      h1Sub="Peace of mind when they live alone."
      problem="Your parent lives alone. You worry every time the phone rings. They don't want to wear a pendant or feel like they need a babysitter. But one fall with no one around could change everything."
      empathy="Independence matters. Dignity matters. MySentry gives your parent both, while giving you the peace of mind you need to stop worrying every time you don't hear from them."
      steps={[
        {
          title: "Pick a Plan",
          description: "Plans start at $9.99 per month. No long-term contract. No equipment fee.",
        },
        {
          title: "Download and Set Up",
          description: "Install MySentry on your parent's iPhone or Android. Pair with their Apple Watch for wrist-based detection. Setup takes about 10 minutes.",
        },
        {
          title: "Add Your Family",
          description: "Add up to 3 emergency contacts. You receive instant alerts with live GPS location if your parent needs help.",
        },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry is a safety app for seniors that works on a smartphone or Apple Watch. It includes automatic fall detection, a one-tap panic alarm, 24/7 professional monitoring with live video response, and real-time health monitoring. When an alarm is triggered, family members receive an instant text with live GPS location. No pendant, no base unit, and no landline required."
      howItWorks={[
        "MySentry runs quietly in the background on your parent's iPhone or Android phone.",
        "If a hard fall is detected, the app prompts them to confirm they are okay within 2 minutes.",
        "If they do not respond, or if they press the panic button on their phone or Apple Watch, an alert is sent immediately.",
        "A trained agent starts a live video call to see what is happening.",
        "You and other family members receive an instant text with their live GPS location.",
        "The agent dispatches local emergency services if needed, with their location and health details.",
      ]}
      afterAlert={[
        "A 24/7 monitoring agent receives the alert and your parent's GPS location.",
        "The agent starts a live video call to their phone within seconds.",
        "The agent speaks with your parent and assesses the situation.",
        "You and your family receive real-time updates.",
        "Emergency services are dispatched if needed.",
      ]}
      bestFor={[
        "Seniors who live alone and want to age in place",
        "Older adults with a history of falls or a chronic health condition",
        "Families who want to be notified immediately if a parent needs help",
        "Seniors who already own an iPhone or Android and do not want extra hardware",
      ]}
      notIdealFor={[
        "Seniors who do not own or regularly use a smartphone",
      ]}
      keyTakeaways={[
        "Automatic fall detection works without your parent pressing a button.",
        "A trained agent responds by live video, not just a phone call.",
        "Family members receive instant alerts with live GPS location.",
        "Works on iPhone, Android, Apple Watch, and Samsung Galaxy Watch.",
        "No pendant, no base unit, no landline required.",
      ]}
      faqs={[
        {
          question: "What is the best safety app for seniors who live alone?",
          answer: "MySentry is a strong choice for seniors who live alone. It detects falls automatically, works on a smartphone or Apple Watch without extra hardware, and connects to a 24/7 professional monitoring team by live video when an alarm is triggered.",
        },
        {
          question: "Does MySentry work for seniors with dementia?",
          answer: "MySentry works best for seniors who can use a smartphone independently. For seniors with advanced dementia who may not be able to respond to app prompts, a traditional medical alert device with a caregiver-managed setup may be more appropriate.",
        },
        {
          question: "Can I monitor my parent's safety remotely?",
          answer: "Yes. When an alarm is triggered, you receive an instant text with your parent's live GPS location. You can track their position in real time. You do not receive continuous passive location data, which protects your parent's privacy.",
        },
        {
          question: "Is MySentry easy for seniors to use?",
          answer: "Yes. The app is designed to be simple. The panic button is large and easy to find. Fall detection works automatically without any action from your parent. Setup takes about 10 minutes and can be done by a family member.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) or Android (8.0+). Optional: Apple Watch (Series 4+) or Samsung Galaxy Watch (4+).",
        permissions: "Location (always on), motion and fitness, microphone, camera, and background app refresh.",
        connectivity: "Cellular signal required. Works anywhere with cell coverage.",
        limitations: "Requires a smartphone. Not suitable for seniors who do not use a smartphone regularly.",
      }}
      proofBlocks={[
        { claim: "Automatic fall detection, no button press needed", detail: "MySentry detects hard falls using phone and smartwatch sensors. Your parent does not need to press anything for help to be sent." },
        { claim: "Live video response from a trained agent", detail: "Our agents start a live video call to see what is happening, not just a voice call." },
        { claim: "Works anywhere with a cellular signal", detail: "Protects your parent at home, on a walk, at a store, or anywhere else." },
      ]}
      relatedLinks={[
        { text: "Medical Alert System for Seniors", href: "/medical-alert-system-for-seniors" },
        { text: "Fall Detection App", href: "/features/fall-detection-app" },
        { text: "Health Monitoring", href: "/features/health-monitoring" },
        { text: "Pricing", href: "/pricing" },
      ]}
    />
  );
}
