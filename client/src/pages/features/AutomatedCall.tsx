import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function AutomatedCall() {
  return (
    <SEOPageTemplate
      seoTitle="Automated Call for a Discreet Exit Plan | MySentry"
      seoDescription="Learn how an available MySentry Automated Call can support a planned, discreet exit from an uncomfortable situation, with current device, plan, notification, and feature requirements reviewed before use."
      canonical="https://mysentry.ai/features/automated-call"
      label="FEATURE"
      h1="Plan a Discreet Exit Before an Uncomfortable Situation Escalates"
      h1Sub="Use an available scheduled-call feature as one part of your own safety plan."
      heroDescription="An Automated Call may help you create a reason to leave. It is not an emergency service, does not contact others automatically, and should not replace calling local emergency services when needed."
      problem="A date, meeting, ride, or social situation can become uncomfortable before you are ready to explain why you want to leave. Planning a simple exit can make it easier to act on your own judgment."
      empathy="You do not need to justify leaving a situation that feels wrong. A clear personal plan can support your next step while keeping emergency contacts and local resources available separately."
      steps={[
        { title: "Confirm Availability", description: "Review the current app, device, notification, plan, and feature requirements before relying on a scheduled call." },
        { title: "Set Your Exit Plan", description: "Choose a time, decide where you will go, and let a trusted person know the plan when that is appropriate." },
        { title: "Choose the Safer Next Step", description: "Leave when you can do so safely. If you face immediate danger, call 911 or local emergency services directly when it is safe and appropriate." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "Explore Safety Check-Ins", href: "/features/safety-check-in-app" }}
      directAnswer="An available Automated Call feature can support a planned, discreet exit from an uncomfortable situation by scheduling a call on a supported device. It does not guarantee a particular appearance, delivery time, result, or safe outcome, and it does not replace emergency services or a personal safety plan."
      howItWorks={[
        "Confirm that the current feature is available for your supported device, plan, app version, and notification settings.",
        "Schedule the call according to the available feature controls and keep your own transport, contact, and exit plan in mind.",
        "If the situation changes, leave when it is safe or use local emergency services directly when appropriate.",
      ]}
      afterAlert={[
        "A scheduled call is separate from emergency response and may not include contact, monitoring, or escalation.",
        "If you use another MySentry safety feature, available behavior depends on the selected feature, settings, permissions, connectivity, plan, region, and service availability.",
        "An emergency requires your judgment and a direct call to 911 or local emergency services when it is safe and appropriate.",
      ]}
      bestFor={["People who want a planned exit from an uncomfortable meeting or date", "Users who prefer to prepare a simple departure plan before a social situation", "People who will keep their own transport, contacts, and emergency options available"]}
      notIdealFor={["An active emergency", "A replacement for calling emergency services or seeking local help", "A guarantee that a call will be delivered, look a certain way, or resolve a situation"]}
      keyTakeaways={["Plan an exit before a situation becomes difficult.", "Confirm whether the available feature supports your device, app version, plan, and settings.", "Use a scheduled call as one small tool, not as an emergency-response service.", "Keep trusted contacts, transport choices, and local emergency options in your plan."]}
      faqs={[
        { question: "Is Automated Call an emergency service?", answer: "No. A scheduled call is not an emergency service and does not guarantee alert delivery, contact, monitoring, escalation, response, or outcome." },
        { question: "Can I rely on it in an emergency?", answer: "No. Call 911 or local emergency services directly whenever it is safe and appropriate. Keep a separate plan for an urgent or disconnected situation." },
        { question: "Will the call always arrive at the exact time I choose?", answer: "Do not rely on a guaranteed time. Availability and behavior can depend on device support, app state, notification settings, operating system behavior, plan, and other conditions." },
        { question: "How should I decide whether it fits my plan?", answer: "Review current eligibility and feature behavior, then decide whether a planned call, a Safety Check, trusted contacts, or a direct emergency call is appropriate for the situation." },
      ]}
      setupRequirements={{
        devices: "A currently supported smartphone and an eligible app configuration. Confirm exact support before use.",
        permissions: "Notification permissions and other settings can affect available feature behavior. Review the current app guidance before scheduling a call.",
        connectivity: "Availability can vary with device state, notifications, and supported connectivity. Maintain a separate backup plan.",
        limitations: "Automated Call is a supplemental planning feature. It is not an emergency service and does not guarantee delivery, contact, response, or outcome.",
      }}
      proofBlocks={[
        { claim: "A planned exit tool", detail: "A scheduled call can be one practical cue to leave an uncomfortable situation without treating it as an emergency response system." },
        { claim: "User-directed safety planning", detail: "Users can decide in advance which contacts, transport, local resources, and available MySentry tools belong in their plan." },
        { claim: "Clear limits", detail: "The feature does not replace emergency services and should not be described as a guarantee of call delivery, monitoring, escalation, or safety." },
      ]}
      relatedLinks={[
        { text: "Safety Check-In App", href: "/features/safety-check-in-app" },
        { text: "Panic Alarm App", href: "/features/panic-button-app" },
        { text: "Safety App for Women", href: "/use-cases/safety-app-for-women" },
        { text: "Review Plans and Eligibility", href: "/pricing" },
      ]}
      heroImage="/images/challenge-female-bad-date-800w.jpg"
    />
  );
}
