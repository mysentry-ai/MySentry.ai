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
      heroDescription={`MySentry gives eligible ${industry.toLowerCase()} workers a configurable safety workflow on supported devices. It supplements, but does not replace, workplace controls, supervision, training, security, or emergency procedures.`}
      heroImage={heroImage}
      problem={`${risks} When a worker is alone or out of sight, it may be harder to recognize a developing problem and coordinate the next step.`}
      empathy="Employers need a practical way for eligible workers to signal that they want support without relying on unsupported promises about detection, connectivity, or emergency outcomes."
      steps={[
        { title: "Review the Work Environment", description: "Identify roles, locations, connectivity gaps, escalation contacts, and existing procedures before choosing a MySentry configuration." },
        { title: "Configure Eligible Users", description: "Confirm supported devices, plans, regional availability, permissions, contacts, and the alert workflows each role may use." },
        { title: "Train and Test", description: "Explain when to use a Panic Alarm or Safety Check, test approved scenarios, and maintain a separate process for disconnected or urgent situations." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "Review How MySentry Works", href: "/how-it-works" }}
      directAnswer={`MySentry is a supplemental personal safety service for eligible ${industry.toLowerCase()} teams. It can combine a user-activated Panic Alarm, scheduled Safety Checks, supported-device incident detection, permission-based alert context, and 24/7 professional monitoring. Availability and outcomes depend on plan, device, settings, permissions, app state, connectivity, region, and third parties.`}
      howItWorks={[
        "An eligible worker installs MySentry on a currently supported device and completes the required setup.",
        "The organization documents the intended alert, contact, and escalation workflow for each covered role.",
        "A worker can start a supported Panic Alarm or Safety Check. An eligible device-detected event may also begin a check-in.",
        "Professional monitoring may review the available permitted context, attempt contact, and coordinate with designated contacts or emergency services when appropriate.",
      ]}
      afterAlert={[
        "The worker may cancel or close the alert if safe and able to respond.",
        "Eligible monitoring may review the context available for that alert.",
        "Designated organizational contacts may be notified according to the configured workflow.",
        "Delivery, timing, contact, escalation, emergency-service response, and arrival are not guaranteed.",
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
        "Treat MySentry as one part of a documented safety program, not a guarantee of compliance or outcomes.",
      ]}
      faqs={[
        { question: `How can MySentry support ${industry.toLowerCase()} workers?`, answer: "Eligible workers can use supported Panic Alarm and Safety Check controls. Compatible devices may also offer eligible fall or crash detection. An alert may include permitted location, audio, video, or account context when available." },
        { question: "Does MySentry guarantee regulatory compliance?", answer: "No. MySentry does not certify OSHA, HIPAA, labor, privacy, school, hospitality, or other regulatory compliance. Review applicable requirements with qualified counsel and safety professionals." },
        { question: "Can an employer track workers continuously?", answer: "MySentry should not be described or deployed as covert tracking. Workforce use requires clear policy, appropriate consent, defined permissions, and review of applicable laws and agreements." },
        { question: "What happens when connectivity is unavailable?", answer: "Alert delivery and shared context require an available supported connection. Organizations should confirm coverage and maintain a separate procedure for disconnected areas." },
        { question: "Does MySentry replace calling emergency services?", answer: "No. Call 911 or local emergency services directly whenever it is safe and appropriate. Monitoring contact, escalation, response, and arrival are not guaranteed." },
      ]}
      setupRequirements={{
        devices: "Currently supported phones and, for optional wearable features, an eligible watch configuration. Confirm exact compatibility before rollout.",
        permissions: "Notification, location, motion, background, microphone, camera, and contact permissions depend on the approved workflow and device support.",
        connectivity: "Alert delivery and shared context require an available supported network connection. Confirm coverage across intended work areas.",
        limitations: "MySentry is not a medical device, does not certify compliance, and does not guarantee detection, alert delivery, contact, escalation, emergency-service response, or arrival.",
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
