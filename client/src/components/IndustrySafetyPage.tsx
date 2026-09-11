import SEOPageTemplate from "@/components/SEOPageTemplate";

interface IndustrySafetyPageProps {
  industry: string;
  canonical: string;
  seoDescription: string;
  audienceExamples: string[];
  risks: string;
  heroImage?: string;
}

export default function IndustrySafetyPage({
  industry,
  canonical,
  seoDescription,
  audienceExamples,
  risks,
  heroImage,
}: IndustrySafetyPageProps) {
  return (
    <SEOPageTemplate
      seoTitle={`${industry} Worker Safety App | MySentry`}
      seoDescription={seoDescription}
      canonical={canonical}
      label="Industry"
      h1={`Add a Personal Safety Layer for ${industry} Teams`}
      h1Sub="User-activated alerts, scheduled check-ins, eligible incident detection, and professional monitoring."
      heroDescription={`MySentry gives eligible ${industry.toLowerCase()} workers a configurable safety workflow that connects available panic triggers, permitted incident context, designated contacts, and 24/7 professional monitoring on supported devices.`}
      heroImage={heroImage}
      problem={`${risks} When a worker is alone or out of sight, it may be harder to recognize a developing problem and coordinate the next step.`}
      empathy="Employers need a practical way for eligible workers to signal that they want support and for designated contacts and professional monitoring to understand what happens next."
      steps={[
        { title: "Review the Work Environment", description: "Identify roles, locations, connectivity gaps, escalation contacts, and existing procedures before choosing a MySentry configuration." },
        { title: "Configure Eligible Users", description: "Confirm supported devices, plans, regional availability, permissions, contacts, and the alert workflows each role may use." },
        { title: "Train and Test", description: "Explain when to use a Panic Alarm or Safety Check, test approved scenarios, and maintain a separate process for disconnected or urgent situations." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "Review How MySentry Works", href: "/how-it-works" }}
      directAnswer={`MySentry connects eligible ${industry.toLowerCase()} workers to user-activated Panic Alarms, scheduled Safety Checks, supported-device incident detection, permission-based alert context, designated contacts, and 24/7 professional monitoring. After verification, monitoring can contact emergency services when appropriate.`}
      howItWorks={[
        "An eligible worker installs MySentry on a currently supported device and completes the required setup.",
        "The organization documents the intended alert, contact, and escalation workflow for each covered role.",
        "A worker can start a supported Panic Alarm or Safety Check. An eligible device-detected event may also begin a check-in.",
        "Eligible 24/7 professional monitoring can review the available permitted context, attempt contact, and coordinate with designated contacts or emergency services when appropriate.",
      ]}
      afterAlert={[
        "The worker may cancel or close the alert if safe and able to respond.",
        "Eligible monitoring may review the context available for that alert.",
        "Designated organizational contacts may be notified according to the configured workflow.",
        "After verification, monitoring can contact emergency services, including 911, when appropriate.",
      ]}
      bestFor={audienceExamples}
      notIdealFor={[
        "Replacing required workplace controls, supervision, training, security, or emergency procedures",
        "Locations without an available supported network connection",
        "Covert employee tracking or unrestricted access to private wellness information",
      ]}
      keyTakeaways={[
        "Start with three questions: who works alone, which incidents matter, and what should happen after an alert?",
        "Confirm device, plan, permission, connectivity, and regional requirements before rollout.",
        "Connect MySentry alerts to the organization's documented contacts, escalation steps, training, and emergency procedures.",
      ]}
      faqs={[
        { question: `How can MySentry support ${industry.toLowerCase()} workers?`, answer: "Eligible workers can use supported Panic Alarm and Safety Check controls. Compatible devices may also offer eligible fall or crash detection. An alert may include permitted location, audio, video, or account context when available." },
        { question: "Does MySentry guarantee regulatory compliance?", answer: "No. MySentry does not certify OSHA, HIPAA, labor, privacy, school, hospitality, or other regulatory compliance. Review applicable requirements with qualified counsel and safety professionals." },
        { question: "Can an employer track workers continuously?", answer: "MySentry should not be described or deployed as covert tracking. Workforce use requires clear policy, appropriate consent, defined permissions, and review of applicable laws and agreements." },
        { question: "What happens when connectivity is unavailable?", answer: "Alert delivery and shared context require an available supported connection. Organizations should confirm coverage and maintain a separate procedure for disconnected areas." },
        { question: "When should a worker call emergency services directly?", answer: "If a worker can safely call 911 or local emergency services during an immediate emergency, they should follow the organization's approved procedure. MySentry adds configured alerts, context, contacts, and monitoring on supported setups." },
      ]}
      setupRequirements={{
        devices: "Currently supported phones and, for optional wearable features, an eligible watch configuration. Confirm exact compatibility before rollout.",
        permissions: "Notification, location, motion, background, microphone, camera, and contact permissions depend on the approved workflow and device support.",
        connectivity: "Alert delivery and shared context require an available supported network connection. Confirm coverage across intended work areas.",
        limitations: "Feature operation depends on supported devices, app state, permissions, connectivity, plan, region, and service availability. Employers remain responsible for applicable safety, privacy, labor, and emergency procedures.",
      }}
      proofBlocks={[
        { claim: "User-activated safety controls", detail: "Eligible workers may use available phone, watch, or configured voice controls to start a Panic Alarm." },
        { claim: "Permission-based alert context", detail: "Available location, audio, video, contact, or account context depends on feature support and enabled permissions." },
        { claim: "Configurable organizational workflow", detail: "Teams can define designated contacts and internal procedures around eligible alerts without treating the service as a compliance guarantee." },
      ]}
      relatedLinks={[
        { text: "Lone Worker Safety App", href: "/use-cases/lone-worker-safety-app" },
        { text: "Panic Alarm App", href: "/features/panic-button-app" },
        { text: "Safety Check-In App", href: "/features/safety-check-in-app" },
        { text: "Contact MySentry", href: "/contact" },
      ]}
    />
  );
}
