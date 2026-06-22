import SEOPageTemplate from "@/components/SEOPageTemplate";
export default function MedicalGuardianVsMysentry() {
  return (
    <SEOPageTemplate
      seoTitle="Medical Guardian vs MySentry | Medical Alert Comparison 2025"
      seoDescription="Medical Guardian vs MySentry: See how a traditional medical alert device compares to a smartphone-based safety app with live video response, fall detection, and family alerts."
      canonical="https://mysentry.ai/compare/medical-guardian-vs-mysentry"
      label="COMPARISON"
      h1="Medical Guardian vs MySentry"
      h1Sub="Traditional device vs smartphone safety app."
      problem="Your parent needs a medical alert system. Medical Guardian requires a dedicated device and a base unit. MySentry works on the smartphone they already own."
      empathy="Both options protect seniors. The right choice depends on your parent's lifestyle and whether they carry a smartphone."
      steps={[{ title: "Choose a Plan", description: "Plans start at $9.99/mo. No equipment fee. No long-term contract." }, { title: "Download the App", description: "Install on iPhone or Android. Pair with Apple Watch for wrist-based detection." }, { title: "Add Emergency Contacts", description: "Family members receive instant alerts with live GPS location." }]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See All Features", href: "/how-it-works" }}
      directAnswer="Medical Guardian is a traditional medical alert system that requires a dedicated wearable device and, for home use, a base unit. It includes 24/7 monitoring and fall detection on some models. MySentry is a smartphone-based safety app that includes 24/7 monitoring with live video response, automatic fall detection, a panic button, and family alerts, all on a device your parent already owns. Medical Guardian is better for seniors who do not use a smartphone. MySentry is better for seniors who carry an iPhone or Android and want live video response and family connectivity."
      howItWorks={["MySentry runs in the background on your parent's iPhone or Android.", "Fall detection prompts them to confirm they are okay within 2 minutes.", "If they do not respond, a trained agent starts a live video call.", "Family members receive instant alerts with live GPS location.", "The agent dispatches emergency services if needed."]}
      afterAlert={["A 24/7 agent receives the alert and GPS location.", "The agent starts a live video call within seconds.", "Family members receive real-time updates.", "Emergency services are dispatched if needed."]}
      bestFor={["Seniors who carry a smartphone", "Families who want live video response and family alerts", "Anyone who wants no extra hardware or equipment fee"]}
      notIdealFor={["Seniors who do not own or use a smartphone"]}
      keyTakeaways={["Medical Guardian requires a dedicated device. MySentry works on a smartphone.", "MySentry adds live video response. Medical Guardian uses voice-only monitoring.", "MySentry includes family alerts with live GPS. Medical Guardian does not on most plans.", "MySentry starts at $9.99/mo with no equipment fee."]}
      faqs={[{ question: "Is MySentry better than Medical Guardian?", answer: "For seniors who carry a smartphone, MySentry offers more features at a lower price: live video response, family alerts with GPS, and no equipment fee. Medical Guardian is a better fit for seniors who do not use a smartphone and prefer a dedicated wearable device." }, { question: "Does Medical Guardian have live video response?", answer: "No. Medical Guardian connects you to a voice-only monitoring center. MySentry connects you to a trained agent by live video." }]}
      setupRequirements={{ devices: "iPhone (iOS 15+) or Android (8.0+). Optional: Apple Watch (Series 4+).", permissions: "Location, motion, microphone, camera, notifications.", connectivity: "Cellular required.", limitations: "Requires a smartphone." }}
      proofBlocks={[{ claim: "Live video response", detail: "MySentry agents start a live video call. Medical Guardian uses voice-only monitoring." }, { claim: "No equipment fee", detail: "MySentry works on your parent's existing smartphone. No device to buy." }]}
      comparisonTable={{ heading: "Medical Guardian vs MySentry", columns: ["MySentry", "Medical Guardian"], rows: [{ feature: "Automatic fall detection", values: ["Yes", "Some models"] }, { feature: "Live video response", values: ["Yes", "No"] }, { feature: "Family alerts with GPS", values: ["Yes", "Limited"] }, { feature: "Extra device required", values: ["No", "Yes"] }, { feature: "Monthly subscription", values: ["From $9.99/mo", "From $29.95/mo"] }, { feature: "Equipment fee", values: ["None", "Up to $199"] }, { feature: "Long-term contract", values: ["No", "No"] }] }}
      relatedLinks={[{ text: "Medical Alert System for Seniors", href: "/medical-alert-system-for-seniors" }, { text: "Lively vs MySentry", href: "/compare/lively-vs-mysentry" }, { text: "Fall Detection App", href: "/features/fall-detection-app" }, { text: "Pricing", href: "/pricing" }]}
    />
  );
}
