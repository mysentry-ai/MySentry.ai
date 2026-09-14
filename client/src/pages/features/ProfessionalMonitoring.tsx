import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function ProfessionalMonitoring() {
  return (
    <SEOPageTemplate
      seoTitle="Professional Monitoring for Personal Safety | MySentry"
      seoDescription="Learn how MySentry professional monitoring may review an eligible alert, attempt contact, and coordinate with designated contacts or emergency services when appropriate, subject to plan and service conditions."
      canonical="https://mysentry.ai/features/24-7-professional-monitoring"
      label="FEATURE"
      h1="Understand the Professional Monitoring Workflow Before You Need It"
      h1Sub="Review the eligible alert, contact, and escalation steps for your supported configuration."
      heroDescription="MySentry may route eligible alerts to professional monitoring. The available workflow depends on your plan, device, permissions, app state, connectivity, region, and service availability."
      problem="When a safety concern develops, you may need a clear plan for who can receive an alert, what information may be available, and when to contact emergency services directly."
      empathy="You remain the decision-maker. MySentry can be one supplemental layer in a plan that also includes trusted contacts, local emergency resources, and practical backup steps."
      steps={[
        { title: "Review Eligibility", description: "Confirm the current plan, supported devices, permissions, region, and monitoring availability before relying on the service." },
        { title: "Set Your Alert Plan", description: "Choose eligible personal-alert controls, Safety Checks, trusted contacts, and any available information-sharing settings." },
        { title: "Practice the Next Step", description: "Learn when to use the available workflow and when to call 911 or local emergency services directly if it is safe and appropriate." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry professional monitoring may receive an eligible alert, review permitted context, attempt contact, notify trusted contacts, or coordinate with emergency services when appropriate. It is a supplemental service and does not guarantee detection, delivery, contact, escalation, response, or arrival."
      howItWorks={[
        "An eligible user completes the current device, permission, contact, and plan setup.",
        "A user may start an available personal alert or Safety Check. A supported device event may also begin a check-in.",
        "When an eligible alert reaches the monitoring workflow, an agent may review permitted available context and attempt contact.",
        "The agent may coordinate with designated contacts or emergency services when appropriate under the available workflow.",
      ]}
      afterAlert={[
        "If safe and able, the user may respond to, cancel, or close the alert.",
        "Available monitoring may review permitted context and attempt contact.",
        "Trusted contacts may receive information according to the configured feature and permissions.",
        "Timing, delivery, contact, escalation, emergency-service response, and arrival are not guaranteed.",
      ]}
      bestFor={["People who want a supplemental alert-review option", "Older adults and families making a shared safety plan", "Workers whose employer has a documented safety program", "Users who will confirm the current availability and limitations"]}
      notIdealFor={["Replacing emergency services, clinical judgment, or a local safety plan", "Use without a supported device, current permissions, and available connectivity", "A guarantee that someone will always receive or resolve an alert"]}
      keyTakeaways={["Start with your supported setup, contacts, and plan terms.", "Use professional monitoring as one layer alongside emergency services and trusted local support.", "Review permissions and information-sharing choices before an alert occurs.", "Keep a separate backup plan for low battery, lost devices, or unavailable connectivity."]}
      faqs={[
        { question: "How does professional monitoring work?", answer: "An eligible MySentry alert may be routed to the monitoring workflow. An agent may review permitted available context, attempt contact, and coordinate with designated contacts or emergency services when appropriate. Timing and outcomes vary." },
        { question: "Is monitoring available for every user and situation?", answer: "No. Availability depends on current plan terms, supported devices, settings, permissions, connectivity, region, system availability, and incident conditions. Review eligibility before enrollment." },
        { question: "Does MySentry replace calling emergency services?", answer: "No. Call 911 or local emergency services directly whenever it is safe and appropriate. MySentry does not guarantee alert delivery, contact, escalation, response, or arrival." },
        { question: "What information can be shared after an alert?", answer: "Available location, audio, video, and account context depend on supported features, selected settings, permissions, and the active workflow." },
      ]}
      setupRequirements={{
        devices: "A currently supported phone and, for optional wearable features, an eligible watch configuration. Confirm exact compatibility before enrollment.",
        permissions: "Required notification, location, microphone, camera, motion, background, and contact permissions depend on the selected supported workflow.",
        connectivity: "Alert delivery and context sharing require an available supported network connection. Keep a separate plan for disconnected settings.",
        limitations: "MySentry is not a medical device and does not guarantee detection, alert delivery, contact, escalation, emergency-service response, or arrival.",
      }}
      proofBlocks={[
        { claim: "User-directed safety setup", detail: "Eligible users choose available contacts, permissions, and alert settings for the situations they want to prepare for." },
        { claim: "Permission-based alert context", detail: "Available information depends on feature support, settings, permissions, connectivity, and the active alert workflow." },
        { claim: "Supplemental professional review", detail: "Professional monitoring may review an eligible alert and coordinate next steps when appropriate, but it does not replace emergency services or guarantee an outcome." },
      ]}
      relatedLinks={[
        { text: "Panic Alarm App", href: "/features/panic-button-app" },
        { text: "Safety Check-In App", href: "/features/safety-check-in-app" },
        { text: "How MySentry Works", href: "/how-it-works" },
        { text: "Review Plans and Eligibility", href: "/pricing" },
      ]}
      heroImage="/manus-storage/panic-contact-iphone_209727c2.png"
      heroImageAlt="MySentry app active alert screen with permitted live-video context"
      heroImagePresentation="app-screen"
    />
  );
}
