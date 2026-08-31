import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function FamilyConnectivity() {
  return (
    <SEOPageTemplate
      seoTitle="Family Safety Alerts and Trusted Contacts | MySentry"
      seoDescription="Learn how MySentry supports consent-based family safety alerts, up to 5 trusted contacts, and permission-controlled context sharing."
      canonical="https://mysentry.ai/features/family-connectivity"
      label="Feature"
      h1="Family Safety Without Continuous Surveillance"
      h1Sub="Prepare trusted contacts and share only the alert context you permit."
      heroDescription="MySentry helps families prepare for eligible safety alerts with up to 5 trusted contacts. Family members do not receive continuous access to private wellness data, and any location or status context follows feature support and user permissions."
      problem="Families want a practical way to coordinate during a safety concern without constant calls, hidden tracking, or unrestricted access to private information."
      empathy="Staying connected should support independence and privacy, not replace them."
      steps={[
        { title: "Choose Trusted Contacts", description: "Invite up to 5 people and confirm their contact information." },
        { title: "Set Alert Permissions", description: "Choose which supported alerts and context each contact may receive." },
        { title: "Use the Configured Workflow", description: "When an eligible alert begins, MySentry may notify contacts with the permitted context available at that time." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "Review Family Plans", href: "/pricing" }}
      directAnswer="MySentry Family Connectivity is an alert-based family safety feature. It helps a user prepare up to 5 trusted contacts and control which supported alerts and context they may receive. It is not continuous family surveillance, and contacts do not receive unrestricted access to private wellness data."
      howItWorks={[
        "Invite up to 5 trusted contacts and confirm their information.",
        "Review notification and context-sharing settings for each contact.",
        "When a supported alert begins, MySentry attempts to deliver the configured notification and available permitted context.",
        "Contacts may call, check in, or coordinate next steps using the information they receive.",
      ]}
      afterAlert={[
        "Configured contacts may receive the alert type and available permitted context.",
        "Location or status availability depends on device, settings, permissions, app state, and connectivity.",
        "Eligible professional monitoring may review the alert separately.",
        "Delivery, response, escalation, and arrival are not guaranteed.",
      ]}
      bestFor={["Families supporting an independent loved one", "Parents preparing an alert plan for an eligible family member", "Couples or relatives who want consent-based safety coordination"]}
      notIdealFor={["Tracking someone without their knowledge or consent", "Continuous access to another person's private wellness data", "Fleet, workforce, or covert location tracking"]}
      keyTakeaways={[
        "Configure up to 5 trusted contacts.",
        "Sharing is alert-based and permission-controlled.",
        "Contacts do not receive continuous access to private wellness data.",
      ]}
      faqs={[
        { question: "How many trusted contacts can I add?", answer: "You can configure up to 5 trusted contacts in MySentry." },
        { question: "Can family members see my wellness data all the time?", answer: "No. MySentry does not describe continuous family access to private wellness data. Any sharing follows supported features, settings, permissions, and active workflows." },
        { question: "Can MySentry be used for secret tracking?", answer: "No. Family safety features should be used with the knowledge and consent of the people involved." },
        { question: "What happens if an alert cannot be delivered?", answer: "Delivery depends on the supported device, app state, connection, destination, and third-party services. Use direct calls or local emergency services when needed." },
      ]}
      setupRequirements={{
        devices: "A currently supported smartphone and MySentry app for the account using the feature.",
        permissions: "Notification, contact, location, and other context permissions depend on the alerts you choose to enable.",
        connectivity: "Alert delivery and available context require a supported network connection.",
        limitations: "MySentry is not a covert tracking service and cannot guarantee notification delivery, contact response, monitoring escalation, or emergency-service arrival.",
      }}
      proofBlocks={[
        { claim: "Up to 5 trusted contacts", detail: "A focused contact network can be prepared inside the app before an alert occurs." },
        { claim: "Privacy-aware coordination", detail: "Supported alert context follows user settings and permissions instead of continuous access to private wellness information." },
      ]}
      relatedLinks={[
        { text: "Emergency Contacts", href: "/features/emergency-contacts" },
        { text: "Safety Check-In App", href: "/features/safety-check-in-app" },
        { text: "Family Safety", href: "/families" },
        { text: "Compare Plans", href: "/pricing" },
      ]}
    />
  );
}
