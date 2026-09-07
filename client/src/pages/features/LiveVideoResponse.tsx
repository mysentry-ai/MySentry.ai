import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function LiveVideoResponse() {
  return (
    <SEOPageTemplate
      seoTitle="Live Video Response for Personal Safety | MySentry"
      seoDescription="Learn how live video may provide permitted visual context during an eligible MySentry alert, subject to supported devices, settings, permissions, connectivity, plan, region, and service availability."
      canonical="https://mysentry.ai/features/live-video-response"
      label="FEATURE"
      h1="Review How Live Video Can Add Context to an Eligible Alert"
      h1Sub="Know the device, permission, connection, and workflow requirements before you rely on it."
      heroDescription="Live video may make permitted context available within an eligible safety workflow. It is not continuous monitoring and cannot guarantee agent contact or emergency response."
      problem="During an urgent concern, a location alone may not explain what is happening. You may want to decide in advance which supported context could be available and who should be contacted."
      empathy="You can build a clearer plan without giving up privacy or assuming a feature will work in every setting. MySentry is a supplemental layer, not a replacement for calling emergency services directly."
      steps={[
        { title: "Confirm Support", description: "Review whether your phone, plan, operating system, permissions, connectivity, and region support the current live-video workflow." },
        { title: "Choose Your Settings", description: "Decide which notifications, contacts, permissions, and available alert controls fit the situations you want to prepare for." },
        { title: "Keep a Backup Plan", description: "Plan for low battery, unavailable connections, or urgent situations where calling 911 or local emergency services directly is appropriate." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="During an eligible MySentry alert, live video may provide permitted visual context to the active monitoring workflow when the supported device, app state, permissions, connectivity, plan, region, and service conditions allow. It does not provide continuous monitoring or guarantee contact, escalation, response, or outcome."
      howItWorks={[
        "Confirm whether the current device, app version, plan, permissions, and location support the feature.",
        "A user starts an available personal alert or a supported workflow begins an eligible check-in.",
        "If the applicable feature and permissions are active, available visual context may be included with the alert.",
        "Professional monitoring may review permitted context and coordinate next steps when appropriate.",
      ]}
      afterAlert={[
        "If safe and able, the user may respond to or close the active workflow.",
        "Monitoring may review the permitted information that is available for that alert.",
        "Designated contacts may receive information according to the active workflow and settings.",
        "Connectivity, timing, receipt, review, contact, escalation, emergency-service response, and arrival are not guaranteed.",
      ]}
      bestFor={["People building a permissions-based personal safety plan", "Families agreeing on contacts and information sharing", "Eligible workers using a documented employer safety protocol", "Users who will confirm support before relying on an alert workflow"]}
      notIdealFor={["Continuous video monitoring", "A replacement for emergency services or workplace procedures", "Use when device permissions or a supported connection are unavailable"]}
      keyTakeaways={["Choose available alert controls and privacy settings before you need them.", "Visual context may be available only during eligible workflows and with enabled permissions.", "Confirm current device, plan, connectivity, region, and service support.", "Keep direct local emergency options and a separate backup plan available."]}
      faqs={[
        { question: "Is live video always on?", answer: "No. MySentry should not be described as continuous video monitoring. Any available video context depends on an eligible active workflow, supported device, selected settings, and permissions." },
        { question: "What if connectivity is weak or unavailable?", answer: "Live video and other shared context require an available supported connection. Keep a separate plan for a low-signal, disconnected, low-battery, or unavailable-device situation." },
        { question: "Can an agent control my phone?", answer: "MySentry does not describe unrestricted access to a user’s phone. Available alert context and communication options depend on the supported workflow, permissions, and device behavior." },
        { question: "Does video guarantee a faster emergency response?", answer: "No. MySentry does not guarantee delivery, review, contact, escalation, response time, or emergency-service arrival. Call 911 or local emergency services directly when it is safe and appropriate." },
      ]}
      setupRequirements={{
        devices: "A currently supported phone with an eligible app and operating-system configuration. Confirm compatibility before enrollment.",
        permissions: "Camera, microphone, notification, location, background, and contact permissions depend on the supported workflow and user choices.",
        connectivity: "Live video and shared context require an available supported network connection. Behavior can vary with bandwidth, app state, and service availability.",
        limitations: "MySentry is a supplemental safety service. It does not provide continuous monitoring and does not guarantee detection, alert delivery, contact, escalation, response, or outcome.",
      }}
      proofBlocks={[
        { claim: "Permission-based visual context", detail: "Available video can be part of an eligible alert only when the current device, feature, permissions, and workflow support it." },
        { claim: "User-directed preparation", detail: "Users can review settings, contacts, and backup steps before deciding whether the available workflow fits their safety plan." },
        { claim: "Supplemental alert support", detail: "Professional monitoring may review permitted context and coordinate next steps when appropriate, subject to service conditions and without outcome guarantees." },
      ]}
      relatedLinks={[
        { text: "Panic Alarm App", href: "/features/panic-button-app" },
        { text: "Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Safety Check-In App", href: "/features/safety-check-in-app" },
        { text: "Review Plans and Eligibility", href: "/pricing" },
      ]}
      heroImage="/images/feature-video.jpg"
    />
  );
}
