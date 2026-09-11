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
      heroDescription="MySentry connects a user-activated Panic Alarm, configured voice and device triggers, Safety Checks, trusted contacts, permitted incident context, and 24/7 professional monitoring on supported configurations."
      heroImage={heroImage}
      problem={problem}
      empathy="A useful safety plan should be easy to understand, respect privacy, and give the user, family, and professional monitoring team a clear role when an alert begins."
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
        "Eligible 24/7 professional monitoring can review available permitted context, attempt contact, and coordinate with trusted contacts or emergency services when appropriate.",
      ]}
      afterAlert={[
        "The user may cancel or close an alert if safe and able to respond.",
        "Configured contacts may receive the supported notification and permitted context available for that workflow.",
        "An eligible monitoring agent may attempt contact and coordinate appropriate next steps.",
        "After verification, monitoring can contact emergency services, including 911, when appropriate.",
      ]}
      bestFor={bestFor}
      notIdealFor={notIdealFor}
      keyTakeaways={[
        "MySentry brings the user, configured contacts, permitted incident context, and eligible 24/7 professional monitoring into one workflow.",
        "Available phone, watch, shake, button, or voice panic controls depend on the supported setup.",
        "Family and organizational contacts receive configured alert information according to the permissions and workflow the user enables.",
      ]}
      faqs={[
        { question: "How can a user start a MySentry Panic Alarm?", answer: "Available triggers can include the app, phone shake, supported button actions, a supported smartwatch, or a configured voice command. The exact options depend on the phone, watch, operating system, app state, permissions, and connectivity." },
        { question: "What happens after an eligible alert?", answer: "Eligible 24/7 professional monitoring can review available permitted context, attempt contact, and coordinate with trusted contacts. After verification, monitoring can contact emergency services, including 911, when appropriate." },
        { question: "Can family members or employers see private wellness data continuously?", answer: "No. MySentry does not describe continuous family or employer access to private wellness data. Sharing follows supported features, settings, permissions, and active alert workflows." },
        { question: "When should I call 911 directly?", answer: "If you can safely call 911 or local emergency services during an immediate emergency, do so. MySentry adds configured alerts, context, contacts, and monitoring for the situations and devices it supports." },
        { question: "Can I use MySentry without a network connection?", answer: "Alert delivery and shared context require an available supported connection. Maintain an alternative plan for disconnected locations." },
      ]}
      setupRequirements={{
        devices: "A currently supported smartphone. Optional watch controls, detection, and wellness features require an eligible wearable configuration.",
        permissions: "Notification, location, motion, background, microphone, camera, and contact permissions depend on the supported features you enable.",
        connectivity: "Alert delivery and shared context require an available supported network connection.",
        limitations: "Feature operation depends on supported devices, app state, permissions, connectivity, plan, region, and service availability. Wellness information does not diagnose a medical condition.",
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
