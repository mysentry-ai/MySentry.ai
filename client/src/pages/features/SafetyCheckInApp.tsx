import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function SafetyCheckInApp() {
  return (
    <SEOPageTemplate
      seoTitle="Safety Check-In App for Planned Activities | MySentry"
      seoDescription="Schedule a MySentry safety check-in for an activity or meeting and understand how missed check-ins can continue an eligible alert workflow."
      canonical="https://mysentry.ai/features/safety-check-in-app"
      label="Feature"
      h1="Plan a Check-In Before You Go"
      h1Sub="Set a time for MySentry to ask whether you are safe."
      heroDescription="MySentry safety check-ins help you prepare for a meeting, visit, shift, commute, or solo activity. If you do not confirm your status, the configured alert workflow may continue and share permitted context when supported."
      problem="When you enter an unfamiliar or isolated situation, someone may not know where you are or when to expect you back."
      empathy="A scheduled check-in can create a clear plan without constant texting, continuous surveillance, or an unsupported promise that help is already on the way."
      steps={[
        { title: "Schedule the Activity", description: "Add the activity, expected time, and any supported check-in details in MySentry." },
        { title: "Respond to the Check-In", description: "When prompted, confirm that you are safe or use the available alert option if you want support." },
        { title: "Continue the Configured Workflow", description: "If you do not respond, an eligible alert may continue according to your plan, settings, permissions, connectivity, and region." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "Review the Panic Alarm", href: "/features/panic-button-app" }}
      directAnswer="A MySentry safety check-in is a scheduled prompt that asks whether you are safe after a planned activity. If you do not confirm your status, the configured alert workflow may route permitted context to trusted contacts and eligible professional monitoring. It does not guarantee emergency dispatch or arrival."
      howItWorks={[
        "Add a supported activity or meeting and expected time in MySentry.",
        "Review the contacts, permissions, and alert preferences for the check-in.",
        "Respond to the Safety Check Alert when it appears.",
        "If the check-in remains unresolved, the configured eligible workflow may continue with available permitted context.",
      ]}
      afterAlert={[
        "A monitoring agent may review available context for an eligible alert.",
        "The agent may attempt contact through supported channels.",
        "Configured trusted contacts or emergency services may be notified when appropriate.",
        "Delivery, timing, contact, escalation, response, and arrival are not guaranteed.",
      ]}
      bestFor={["Dates, client meetings, and property visits", "Solo shifts, home visits, and field work", "Running, hiking, commuting, or other planned activities"]}
      notIdealFor={["An emergency already in progress, when a direct Panic Alarm or emergency call may be more appropriate", "Covert tracking or monitoring", "Use without a supported device, required permissions, or connection"]}
      keyTakeaways={[
        "Schedule the check-in before the activity.",
        "Respond when prompted to confirm your status.",
        "A missed check-in may continue a configured alert workflow, but it does not guarantee dispatch or arrival.",
      ]}
      faqs={[
        { question: "What is a safety check-in?", answer: "It is a scheduled MySentry prompt that asks whether you are safe after a planned activity or meeting." },
        { question: "What happens if I miss the check-in?", answer: "The configured eligible alert workflow may continue and route permitted context for review. Trusted contacts or emergency services may be notified when appropriate." },
        { question: "Can I change or cancel a check-in?", answer: "Use the available MySentry controls to review, change, extend, or close a supported check-in before it continues to the next step." },
        { question: "Does a missed check-in guarantee emergency services?", answer: "No. Alert delivery, monitoring contact, escalation, emergency-service response, and arrival depend on the circumstances and are not guaranteed." },
      ]}
      setupRequirements={{
        devices: "A currently supported smartphone and MySentry app. Optional watch controls require an eligible configuration.",
        permissions: "Notifications, location, background, contact, audio, or video permissions depend on the workflow you configure.",
        connectivity: "Prompts, alerts, and shared context require an available supported connection.",
        limitations: "MySentry cannot guarantee prompt delivery, monitoring contact, escalation, emergency-service response, or arrival and is not a substitute for calling emergency services.",
      }}
      proofBlocks={[
        { claim: "Scheduled safety prompt", detail: "A user can prepare a check-in before a meeting or activity and respond when MySentry asks for status." },
        { claim: "Configurable next steps", detail: "Any later alert follows the supported plan, contacts, settings, permissions, connection, and region." },
      ]}
      relatedLinks={[
        { text: "Panic Alarm App", href: "/features/panic-button-app" },
        { text: "Emergency Contacts", href: "/features/emergency-contacts" },
        { text: "Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Compare Plans", href: "/pricing" },
      ]}
    />
  );
}
