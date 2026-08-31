import SEOPageTemplate from "@/components/SEOPageTemplate";

interface AudienceSafetyPageProps {
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  label: string;
  h1: string;
  h1Sub: string;
  problem: string;
  directAnswer: string;
  bestFor: string[];
  notIdealFor: string[];
  heroImage?: string;
  primaryCta?: { text: string; href: string };
}

export default function AudienceSafetyPage({
  seoTitle,
  seoDescription,
  canonical,
  label,
  h1,
  h1Sub,
  problem,
  directAnswer,
  bestFor,
  notIdealFor,
  heroImage,
  primaryCta = { text: "Review Plans and Eligibility", href: "/pricing" },
}: AudienceSafetyPageProps) {
  return (
    <SEOPageTemplate
      seoTitle={seoTitle}
      seoDescription={seoDescription}
      canonical={canonical}
      label={label}
      h1={h1}
      h1Sub={h1Sub}
      heroDescription="MySentry combines a user-activated Panic Alarm, scheduled Safety Checks, eligible device-detected events, trusted contacts, and professional monitoring on supported configurations."
      heroImage={heroImage}
      problem={problem}
      empathy="A useful safety plan should be easy to understand, respect privacy, and explain what happens after an alert without promising a result that no app or monitoring service can guarantee."
      steps={[
        { title: "Confirm Eligibility", description: "Review the current plan, supported device, software, region, permissions, connectivity, and optional wearable requirements." },
        { title: "Prepare the Workflow", description: "Add up to 5 trusted contacts and choose the supported alerts and context-sharing permissions you want to use." },
        { title: "Use the Right Safety Tool", description: "Start a Panic Alarm during an urgent concern or schedule a Safety Check before a planned activity. Eligible device detection may also begin a check-in." },
      ]}
      primaryCta={primaryCta}
      secondaryCta={{ text: "Review How MySentry Works", href: "/how-it-works" }}
      directAnswer={directAnswer}
      howItWorks={[
        "The eligible user installs MySentry on a currently supported phone and completes the required setup.",
        "The user chooses contacts, permissions, and the supported safety features appropriate for the situation.",
        "A user-activated alert, scheduled check-in, or eligible device-detected event may begin a Safety Check Alert.",
        "Professional monitoring may review available permitted context, attempt contact, and coordinate with trusted contacts or emergency services when appropriate.",
      ]}
      afterAlert={[
        "The user may cancel or close an alert if safe and able to respond.",
        "Configured contacts may receive the supported notification and permitted context available for that workflow.",
        "An eligible monitoring agent may attempt contact and coordinate appropriate next steps.",
        "Alert delivery, timing, contact, escalation, emergency-service response, and arrival are not guaranteed.",
      ]}
      bestFor={bestFor}
      notIdealFor={notIdealFor}
      keyTakeaways={[
        "MySentry is a supplemental personal safety and wellness service, not a replacement for emergency services.",
        "Feature behavior depends on the active plan, supported device, settings, permissions, app state, connectivity, region, and third parties.",
        "Family and organizational contacts receive configured alert information, not continuous access to private wellness data.",
      ]}
      faqs={[
        { question: "Does MySentry guarantee that every incident will be detected?", answer: "No. Detection depends on the supported device, how it is carried or worn, app state, settings, permissions, connectivity, and the event conditions." },
        { question: "What happens after an eligible alert?", answer: "Professional monitoring may review available permitted context, attempt contact, and coordinate with trusted contacts or emergency services when appropriate. Delivery, timing, response, and arrival are not guaranteed." },
        { question: "Can family members or employers see private wellness data continuously?", answer: "No. MySentry does not describe continuous family or employer access to private wellness data. Sharing follows supported features, settings, permissions, and active alert workflows." },
        { question: "Does MySentry replace calling 911?", answer: "No. Call 911 or local emergency services directly whenever you can do so safely. MySentry is supplemental." },
        { question: "Can I use MySentry without a network connection?", answer: "Alert delivery and shared context require an available supported connection. Maintain an alternative plan for disconnected locations." },
      ]}
      setupRequirements={{
        devices: "A currently supported smartphone. Optional watch controls, detection, and wellness features require an eligible wearable configuration.",
        permissions: "Notification, location, motion, background, microphone, camera, and contact permissions depend on the supported features you enable.",
        connectivity: "Alert delivery and shared context require an available supported network connection.",
        limitations: "MySentry is not a medical device and does not guarantee detection, alert delivery, monitoring contact, escalation, emergency-service response, or arrival.",
      }}
      proofBlocks={[
        { claim: "User-activated Panic Alarm", detail: "Eligible users may use available phone, watch, or configured voice controls, subject to the current supported setup." },
        { claim: "Scheduled Safety Checks", detail: "A user can schedule a check-in before a planned activity. A missed check-in may continue the configured eligible alert workflow." },
        { claim: "Permission-based alert context", detail: "Available location, audio, video, contact, or account context depends on feature support and the permissions the user enables." },
      ]}
      relatedLinks={[
        { text: "Panic Alarm App", href: "/features/panic-button-app" },
        { text: "Safety Check-In App", href: "/features/safety-check-in-app" },
        { text: "Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Compare Plans", href: "/pricing" },
      ]}
    />
  );
}
