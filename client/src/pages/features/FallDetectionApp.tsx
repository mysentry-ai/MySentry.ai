import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function FallDetectionApp() {
  return (
    <SEOPageTemplate
      seoTitle="Fall Detection App for Supported Smartwatches | MySentry"
      seoDescription="Learn how supported-device fall detection can begin a MySentry safety check, including watch, phone, permission, and connectivity requirements."
      canonical="https://mysentry.ai/features/fall-detection-app"
      label="Feature"
      h1="A Fall Check-In When You May Need It"
      h1Sub="Supported watch sensors may identify a fall-like event and begin a safety check."
      heroDescription="MySentry fall detection requires a currently supported watch and phone configuration. If the device identifies a fall-like event, the app may begin a check-in and eligible alert workflow. No system detects every fall."
      problem="A fall can make it difficult to reach a phone, explain what happened, or contact someone you trust."
      empathy="You should be able to prepare for a possible fall without giving up independence or relying on unsupported promises."
      steps={[
        { title: "Confirm Compatibility", description: "Verify the current supported watch, phone, software, plan, region, permissions, and connectivity requirements." },
        { title: "Keep the Required Setup Active", description: "Wear the supported watch and maintain the app state, sensor permissions, notifications, and connection needed for the feature." },
        { title: "Respond to the Safety Check", description: "If a fall-like event is identified, confirm your status when you can. An eligible alert may continue if your safety cannot be confirmed." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "Review Supported Devices", href: "/integrations/apple-watch" }}
      directAnswer="MySentry fall detection is a supported-device safety feature. Compatible watch sensors may identify a fall-like event and begin a Safety Check Alert. If the alert continues, permitted context may be routed to trusted contacts and an eligible monitoring workflow. Detection, monitoring, contact, escalation, and outcomes are not guaranteed."
      howItWorks={[
        "A supported watch evaluates available motion data while the required settings and app state are active.",
        "A possible fall can begin a Safety Check Alert on the connected devices.",
        "You can confirm that you are safe and close the alert when able.",
        "If the alert continues, permitted context may be routed according to your plan, settings, connection, and region.",
      ]}
      afterAlert={[
        "A monitoring agent may review available context for an eligible alert.",
        "The agent may attempt contact through supported account or device channels.",
        "Trusted contacts or emergency services may be notified when appropriate.",
        "Timing, response, escalation, and arrival are not guaranteed.",
      ]}
      bestFor={["Older adults using a currently supported watch", "People who live, exercise, or work alone", "Families preparing a consent-based safety plan"]}
      notIdealFor={["Use without a supported watch and phone", "Detecting every slow, gradual, or low-impact fall", "Replacing a direct call to emergency services or medical care"]}
      keyTakeaways={[
        "Fall detection requires a currently supported watch and phone configuration.",
        "No detection system identifies every fall.",
        "A possible event begins a check-in or alert workflow rather than guaranteeing emergency dispatch.",
      ]}
      faqs={[
        { question: "Does fall detection require a smartwatch?", answer: "Yes. MySentry fall detection requires a currently supported watch and phone configuration. Confirm exact models and software before enrollment." },
        { question: "Does MySentry detect every fall?", answer: "No. Detection depends on the device, how it is worn, sensor data, app state, settings, permissions, connectivity, and the circumstances of the event." },
        { question: "What happens after a possible fall?", answer: "The app may begin a safety check. If the alert continues, permitted context may be routed to configured contacts and an eligible monitoring workflow." },
        { question: "Is MySentry a medical alert device?", answer: "No. MySentry is a supplemental personal safety and wellness service, not a medical device or a replacement for emergency services." },
      ]}
      setupRequirements={{
        devices: "A currently supported watch, phone, and software version. Confirm exact eligibility before relying on the feature.",
        permissions: "Required motion, fitness, notification, location, background, audio, or video permissions depend on the configured workflow.",
        connectivity: "Alert delivery and shared context require an available supported device and network connection.",
        limitations: "Slow, gradual, or otherwise atypical falls may not be detected. Detection, monitoring, contact, escalation, response, and arrival are not guaranteed.",
      }}
      proofBlocks={[
        { claim: "Safety check before next steps", detail: "A possible fall can begin a user-facing check-in before an eligible alert workflow continues." },
        { claim: "Supported-device requirement", detail: "MySentry presents fall detection only for eligible watch and phone configurations." },
      ]}
      relatedLinks={[
        { text: "Wearable Fall Detection Limitations", href: "/guides/wearable-fall-detection-limitations" },
        { text: "Apple Watch Integration", href: "/integrations/apple-watch" },
        { text: "Samsung Galaxy Watch Integration", href: "/integrations/samsung-galaxy-watch" },
        { text: "Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Senior Safety", href: "/seniors" },
      ]}
    />
  );
}
