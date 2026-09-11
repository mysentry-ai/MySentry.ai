import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function PanicButtonApp() {
  return (
    <SEOPageTemplate
      seoTitle="Panic Alarm App for Personal Safety | MySentry"
      seoDescription="Learn how the MySentry Panic Alarm starts an eligible safety workflow from supported phone, watch, or configured voice controls."
      canonical="https://mysentry.ai/features/panic-button-app"
      label="Feature"
      h1="Start a Personal Safety Alert When You Need It"
      h1Sub="Use supported phone, watch, or configured voice controls to activate the Panic Alarm."
      heroDescription="The MySentry Panic Alarm is a user-activated safety tool. An eligible alert may share permitted location, audio, video, and account context with trusted contacts and the professional monitoring workflow."
      problem="In an unsafe or uncertain moment, unlocking a phone, explaining where you are, and contacting several people can be difficult."
      empathy="A prepared alert option can make it simpler to signal that you want support without promising a specific outcome."
      steps={[
        { title: "Configure Supported Controls", description: "Confirm the phone, watch, voice, plan, region, settings, and permissions available for your account." },
        { title: "Activate the Panic Alarm", description: "Use an available in-app, watch, or configured voice control to begin the alert workflow." },
        { title: "Share Permitted Context", description: "Eligible monitoring and trusted contacts may receive the alert context supported by your device, settings, permissions, and connection." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "Review How MySentry Works", href: "/how-it-works" }}
      directAnswer="A panic alarm app lets a user start a safety alert from a supported device. In MySentry, an eligible Panic Alarm may route permitted context to professional monitoring and up to 5 trusted contacts. Available controls, delivery, monitoring, contact, escalation, and outcomes depend on plan, device, permissions, app state, connectivity, region, and third parties."
      howItWorks={[
        "Configure the supported Panic Alarm controls and permissions available on your account.",
        "Use an available phone, watch, or configured voice control to start an alert.",
        "MySentry attempts to route the alert and available permitted context through the eligible workflow.",
        "A monitoring agent may review context, attempt contact, and coordinate with trusted contacts or emergency services when appropriate.",
      ]}
      afterAlert={[
        "Cancel or close the alert if you are safe and able to do so.",
        "Configured contacts may receive the alert information allowed by your settings.",
        "An eligible monitoring agent may attempt contact through supported channels.",
        "Call 911 or local emergency services directly whenever you can do so safely. Response and arrival are not guaranteed.",
      ]}
      bestFor={["People who commute, exercise, travel, or work alone", "Families preparing a trusted contact workflow", "Users who want more than one supported way to start an alert"]}
      notIdealFor={["Replacing a direct call to emergency services", "Use without a supported device, required permissions, or connectivity", "Covert tracking or recording without appropriate knowledge or consent"]}
      keyTakeaways={[
        "The Panic Alarm is user-activated.",
        "Available phone, watch, and voice controls depend on the supported configuration.",
        "Shared context follows feature support and the permissions you enable.",
      ]}
      faqs={[
        { question: "How can I activate the Panic Alarm?", answer: "Available controls may include the MySentry app, a supported watch, or a configured voice command. Exact options depend on device, software, plan, settings, permissions, and region." },
        { question: "Does the Panic Alarm guarantee emergency dispatch?", answer: "No. An eligible monitoring agent may coordinate with trusted contacts or emergency services when appropriate, but contact, escalation, response, and arrival are not guaranteed." },
        { question: "What information may be shared?", answer: "Depending on the supported workflow and your permissions, available alert type, location, audio, video, contact, or account context may be shared." },
        { question: "When should I call 911 directly?", answer: "If you can safely call 911 or local emergency services during an immediate emergency, do so. MySentry adds supported panic triggers, permitted context, configured contacts, and eligible 24/7 professional monitoring." },
      ]}
      setupRequirements={{
        devices: "A currently supported smartphone. Watch and voice controls require additional supported devices, software, and setup.",
        permissions: "Notification, location, microphone, camera, background, and contact permissions depend on the controls and context you choose to enable.",
        connectivity: "Alert delivery and live context require an available supported network connection.",
        limitations: "MySentry does not guarantee alert delivery, monitoring contact, escalation, emergency-service response, or arrival and is not a replacement for calling emergency services.",
      }}
      proofBlocks={[
        { claim: "Multiple supported activation options", detail: "Eligible accounts may offer app, watch, or configured voice controls depending on the current supported setup." },
        { claim: "Permission-based context", detail: "Location, audio, video, and contact context follows feature support and the permissions you enable." },
      ]}
      relatedLinks={[
        { text: "Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Emergency Contacts", href: "/features/emergency-contacts" },
        { text: "Safety Check-In App", href: "/features/safety-check-in-app" },
        { text: "Compare Plans", href: "/pricing" },
      ]}
    />
  );
}
