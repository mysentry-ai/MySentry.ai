import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function HealthMonitoring() {
  return (
    <SEOPageTemplate
      seoTitle="Wearable Wellness Signals and Alerts | MySentry"
      seoDescription="View supported wellness signals from compatible wearables and understand MySentry permissions, alert settings, and non-medical limitations."
      canonical="https://mysentry.ai/features/health-monitoring"
      label="Feature"
      h1="Supported Wellness Signals in One Safety App"
      h1Sub="Review available heart rate, HRV, blood oxygen, activity, and related device data."
      heroDescription="MySentry can display wellness signals made available by a compatible wearable. Supported signals vary by device and are informational only. MySentry does not diagnose, predict, treat, cure, or prevent a medical condition."
      problem="Wellness data can be spread across devices and apps, making it difficult to understand what is available during a personal safety workflow."
      empathy="You deserve clear information about what the app can show, who can access it, and what it cannot tell you."
      steps={[
        { title: "Confirm Device Support", description: "Verify the current supported wearable, phone, software, plan, and regional requirements." },
        { title: "Choose Permissions", description: "Connect eligible services and enable only the wellness and safety permissions you want to use." },
        { title: "Review Available Signals", description: "Use the MySentry dashboard to view supported wellness information made available by your connected device." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "Review Supported Devices", href: "/integrations/apple-watch" }}
      directAnswer="MySentry wellness features display supported signals supplied by compatible devices, such as heart rate, HRV, blood oxygen, and activity. Signal availability and timing depend on the device, settings, permissions, app state, and connectivity. The information is not medical advice, a diagnosis, or a prediction of an emergency."
      howItWorks={[
        "Connect a currently supported wearable and phone configuration.",
        "Enable only the device and wellness permissions required for the features you choose.",
        "Review the signals that the connected device makes available to MySentry.",
        "Configure informational notifications where the supported device, plan, and service allow them.",
      ]}
      afterAlert={[
        "A supported notification may prompt the user to review an available wellness signal.",
        "Private wellness data is not continuously exposed to family members.",
        "During an eligible safety alert, permitted context may be available to the monitoring workflow when supported.",
        "Seek professional medical care for symptoms or health concerns and call emergency services for urgent medical needs.",
      ]}
      bestFor={["People who already use a compatible wearable", "Families seeking privacy-aware safety planning", "Users who want supported wellness context alongside personal safety tools"]}
      notIdealFor={["Diagnosing or predicting medical conditions", "Replacing a clinician, medical device, or emergency service", "Use without a supported device, permissions, or connection"]}
      keyTakeaways={[
        "Supported signals vary by wearable and configuration.",
        "Wellness information is informational and non-medical.",
        "Sharing follows user permissions and active safety workflows.",
      ]}
      faqs={[
        { question: "Which wellness signals can MySentry show?", answer: "Depending on the supported device and permissions, available signals may include heart rate, HRV, blood oxygen, activity, and related wellness information. Confirm current device support before enrollment." },
        { question: "Can MySentry diagnose a health condition?", answer: "No. MySentry is not a medical device and does not diagnose, predict, treat, cure, or prevent a condition." },
        { question: "Can family members see my wellness data continuously?", answer: "No. MySentry does not describe continuous family access to private wellness data. Context sharing follows supported features, settings, permissions, and active workflows." },
        { question: "What should I do about concerning symptoms or readings?", answer: "Contact a qualified healthcare professional. For urgent symptoms or an emergency, call 911 or local emergency services directly." },
      ]}
      setupRequirements={{
        devices: "A currently supported wearable, phone, and software configuration. Confirm exact eligibility before enrollment.",
        permissions: "Enable only the wellness, notification, background, and safety permissions required for the features you choose.",
        connectivity: "Signal availability and alert-time context depend on the connected services, app state, and network connection.",
        limitations: "MySentry is not a medical device, does not provide medical advice, and does not guarantee that every signal or concerning change will be identified.",
      }}
      proofBlocks={[
        { claim: "Supported wearable signals", detail: "MySentry can organize wellness information that an eligible connected device makes available." },
        { claim: "Non-medical by design", detail: "Wellness features are informational and do not replace medical advice, diagnosis, treatment, or emergency care." },
      ]}
      relatedLinks={[
        { text: "Apple Watch Integration", href: "/integrations/apple-watch" },
        { text: "Samsung Galaxy Watch Integration", href: "/integrations/samsung-galaxy-watch" },
        { text: "Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Compare Plans", href: "/pricing" },
      ]}
    />
  );
}
