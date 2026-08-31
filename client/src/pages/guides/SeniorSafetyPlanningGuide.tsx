import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function SeniorSafetyPlanningGuide() {
  return (
    <SEOPageTemplate
      seoTitle="Senior Safety Planning Guide for Families | MySentry"
      seoDescription="Create a respectful senior safety plan covering home hazards, contacts, medical guidance, technology, privacy, and emergency steps."
      canonical="https://mysentry.ai/guides/senior-safety-planning"
      label="Senior Safety Guide"
      h1="Build a Senior Safety Plan That Respects Independence"
      h1Sub="Plan with the older adult, not around them."
      problem="Changes in mobility, balance, vision, hearing, medication, memory, or living arrangements can affect how an older adult prepares for everyday risks."
      empathy="Families want to help without taking away control. A practical plan starts with consent, the person's routines and preferences, and guidance from qualified medical and safety professionals."
      steps={[
        { title: "Ask and Listen", description: "Discuss the older adult's goals, routines, concerns, preferred contacts, privacy expectations, and the support they want." },
        { title: "Review the Environment", description: "Walk through lighting, stairs, bathrooms, flooring, footwear, entrances, phones, and other practical home conditions with appropriate professionals." },
        { title: "Write the Plan", description: "Document contacts, medications with a clinician or pharmacist, emergency information, check-in expectations, technology requirements, and a backup process." },
      ]}
      primaryCta={{ text: "Compare Plans", href: "/pricing" }}
      secondaryCta={{ text: "Review Senior Safety", href: "/seniors" }}
      directAnswer="A senior safety plan is a written, consent-based plan for reducing avoidable hazards, organizing contacts and medical information, preparing emergency steps, and choosing appropriate support. MySentry can add supported-device fall checks, a user-activated Panic Alarm, Safety Checks, trusted contacts, supported wellness context, and professional monitoring. It is not a medical device or a substitute for clinical care."
      howItWorks={[
        "Discuss independence goals, routines, communication preferences, and who should participate in the plan.",
        "Review the home and daily activities for hazards that may require a repair, adaptation, training, or professional assessment.",
        "Organize medical and medication information with qualified clinicians or pharmacists rather than relying on an app to diagnose or manage care.",
        "Choose contacts, emergency steps, check-in expectations, and a method for updating the plan.",
        "If technology is included, confirm that the older adult can and wants to use the supported device, permissions, charging routine, and connection it requires.",
      ]}
      afterAlert={[
        "The older adult may cancel or close a supported alert if safe and able to respond.",
        "Configured contacts may receive the supported notification and permitted alert context available for that workflow.",
        "An eligible monitoring agent may attempt contact and coordinate with trusted contacts or emergency services when appropriate.",
        "Call local emergency services directly whenever it is safe and appropriate. Delivery, contact, response, and arrival are not guaranteed.",
      ]}
      bestFor={["Older adults who want to participate in their own safety planning", "Families coordinating consent-based support", "Caregivers documenting contacts, routines, and backup steps"]}
      notIdealFor={["Replacing clinical assessment, in-home care, supervision, or prescribed equipment", "Continuous family access to private wellness data", "Use without the older adult's participation and appropriate consent"]}
      keyTakeaways={[
        "Independence, dignity, privacy, and consent belong in the safety plan.",
        "Technology works best when the device, connection, permissions, charging routine, and backup plan are realistic.",
        "MySentry does not diagnose, predict, treat, or prevent medical conditions.",
      ]}
      faqs={[
        { question: "How should I start the conversation?", answer: "Lead with the older adult's goals and preferences. Ask what support feels useful, listen to concerns, and agree on contacts and privacy boundaries together." },
        { question: "Who should review fall risk and medication questions?", answer: "Use qualified clinicians, pharmacists, occupational therapists, physical therapists, home-safety professionals, or other appropriate experts. MySentry is not a medical device." },
        { question: "Can family members monitor wellness data continuously?", answer: "MySentry does not describe continuous family access to private wellness data. Sharing follows supported features, settings, permissions, and active alert workflows." },
        { question: "Does fall detection identify every fall?", answer: "No. Detection depends on the supported device, how it is carried or worn, app state, settings, permissions, connectivity, and event conditions." },
        { question: "What should the backup plan include?", answer: "Include local emergency numbers, nearby contacts, entry information where appropriate, medication details managed with clinicians, and a procedure for device, battery, or connectivity problems." },
      ]}
      setupRequirements={{
        devices: "A currently supported smartphone and, for optional wearable features, an eligible watch configuration. Confirm compatibility before enrollment.",
        permissions: "Notification, location, motion, background, microphone, camera, and contact permissions depend on the supported features enabled by the user.",
        connectivity: "Alert delivery and shared context require an available supported network connection.",
        limitations: "MySentry is not a medical device and does not replace clinical care, supervision, emergency services, or prescribed safety equipment.",
      }}
      proofBlocks={[
        { claim: "Consent-based planning", detail: "The older adult participates in choosing contacts, permissions, routines, and the technology they want to use." },
        { claim: "Supported fall checks", detail: "An eligible device may identify a fall-like event and begin a safety check, but no system detects every event." },
        { claim: "Non-medical wellness context", detail: "A compatible wearable may provide supported wellness signals for informational context. MySentry does not diagnose or predict a condition." },
      ]}
      relatedLinks={[
        { text: "Safety for Seniors", href: "/seniors" },
        { text: "Fall Detection App", href: "/features/fall-detection-app" },
        { text: "Senior Safety App", href: "/medical-alert-system-for-seniors" },
        { text: "Compare Plans", href: "/pricing" },
      ]}
    />
  );
}
