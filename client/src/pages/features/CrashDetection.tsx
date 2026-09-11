import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function CrashDetection() {
  return (
    <SEOPageTemplate
      seoTitle="Crash Detection App and Safety Alerts | MySentry"
      seoDescription="Learn how supported-device crash detection can begin a MySentry check-in and eligible alert workflow, including requirements and limitations."
      canonical="https://mysentry.ai/features/crash-detection"
      label="Feature"
      h1="Crash Detection With a Clear Follow-Up Workflow"
      h1Sub="A supported phone may identify a crash-like event and begin a safety check-in."
      heroDescription="MySentry can use supported phone sensors to identify a possible vehicle crash and begin a configured alert workflow. Detection and any later escalation depend on the device, app state, settings, permissions, connectivity, plan, region, and event conditions."
      problem="After a serious vehicle incident, you may be unable to unlock a phone, explain where you are, or contact a trusted person."
      empathy="Preparing an alert workflow before a drive can reduce uncertainty, but no app can identify or resolve every crash."
      steps={[
        { title: "Confirm Eligibility", description: "Verify that your phone, software, plan, region, permissions, and app settings support crash detection." },
        { title: "Keep the Required Settings Active", description: "Carry the supported phone and maintain the app state, motion permissions, notifications, and connectivity required for the feature." },
        { title: "Review the Safety Check", description: "If a crash-like event is identified, respond to the check-in when you can. An eligible alert may continue if your safety cannot be confirmed." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "Review How MySentry Works", href: "/how-it-works" }}
      directAnswer="MySentry crash detection is a supported-device safety feature, not a guarantee that every vehicle incident will be detected. A compatible phone may identify crash-like motion and begin a safety check. If the alert continues, permitted location or other available context may be shared with trusted contacts and an eligible monitoring workflow."
      howItWorks={[
        "A supported phone evaluates available motion data while the required app state and permissions are active.",
        "A possible crash can begin a Safety Check Alert so you can confirm your status.",
        "If the alert continues, permitted context may be routed according to your plan, settings, connectivity, and region.",
        "A monitoring agent may attempt contact or coordinate with trusted contacts or emergency services when appropriate.",
      ]}
      afterAlert={[
        "Review or cancel the alert if you are safe and able to respond.",
        "Trusted contacts may receive the context you have configured and permitted.",
        "Eligible monitoring may review available context and attempt contact.",
        "Response, escalation, emergency-service availability, and arrival are not guaranteed.",
      ]}
      bestFor={["Eligible drivers who carry a supported phone", "Families preparing a safety workflow for a new driver", "People who regularly drive alone or take longer trips"]}
      notIdealFor={["Use without a supported phone, permissions, or network connection", "Motorcycle or bicycle incidents unless explicitly supported", "Replacing a direct call to 911 or local emergency services"]}
      keyTakeaways={[
        "Crash detection depends on supported hardware, software, settings, permissions, connectivity, and event conditions.",
        "A possible event begins a check-in or alert workflow rather than guaranteeing emergency dispatch.",
        "Call 911 or local emergency services directly whenever you can do so safely.",
      ]}
      faqs={[
        { question: "Does MySentry detect every car crash?", answer: "No. Detection depends on the supported phone, sensor data, app state, settings, permissions, connectivity, and the circumstances of the event." },
        { question: "What happens after a possible crash is identified?", answer: "The app may begin a Safety Check Alert. If the alert continues, permitted context may be routed to configured contacts and an eligible monitoring workflow." },
        { question: "When should I call 911 directly after a crash?", answer: "If you can safely call 911 or local emergency services during an immediate emergency, do so. MySentry can add an eligible crash alert, permitted context, configured contacts, and professional monitoring to the supported workflow." },
        { question: "Will crash detection work without connectivity?", answer: "Some device actions may still be available, but sending an alert or sharing context requires an available supported connection. Delivery is not guaranteed." },
      ]}
      setupRequirements={{
        devices: "A currently supported smartphone and software version. Confirm eligibility before relying on crash detection.",
        permissions: "Required motion, notification, location, background, audio, or video permissions depend on the configured workflow.",
        connectivity: "Alert delivery and shared context require an available supported network connection.",
        limitations: "MySentry is not a replacement for emergency services and is not a medical device. Detection, contact, escalation, response, and arrival are not guaranteed.",
      }}
      proofBlocks={[
        { claim: "Safety check before escalation", detail: "A possible crash can begin a user-facing check-in before an eligible alert workflow continues." },
        { claim: "Permission-based context", detail: "Available location, audio, video, and contact context follows feature support and the permissions you enable." },
      ]}
      relatedLinks={[
        { text: "Panic Alarm App", href: "/features/panic-button-app" },
        { text: "Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Teen Driver Safety", href: "/use-cases/teen-driver-safety" },
        { text: "Compare Plans", href: "/pricing" },
      ]}
    />
  );
}
