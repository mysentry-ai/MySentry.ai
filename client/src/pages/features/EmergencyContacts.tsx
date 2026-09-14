import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function EmergencyContacts() {
  return (
    <SEOPageTemplate
      seoTitle="Emergency Contacts and Safety Alerts | MySentry"
      seoDescription="Add up to 5 trusted contacts and control the alert context MySentry can share during supported safety workflows."
      canonical="https://mysentry.ai/features/emergency-contacts"
      label="Feature"
      h1="Keep Trusted Contacts Informed During an Alert"
      h1Sub="Prepare up to 5 people before you need to reach them."
      heroDescription="MySentry lets you configure up to 5 trusted contacts for eligible safety alerts. The information they receive depends on feature support, your settings and permissions, connectivity, and the active workflow."
      problem="In a stressful moment, contacting several people and explaining your location or status can be difficult."
      empathy="A prepared contact list can make communication simpler without giving anyone continuous access to your private information."
      steps={[
        { title: "Add Trusted Contacts", description: "Invite up to 5 people and review which MySentry alerts they should receive." },
        { title: "Choose Permissions", description: "Enable only the contact, notification, and context-sharing options you want to use." },
        { title: "Start an Eligible Alert", description: "A user-activated or supported-device alert may notify configured contacts with the context available for that workflow." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "Review How MySentry Works", href: "/how-it-works" }}
      directAnswer="MySentry supports up to 5 trusted contacts for eligible safety alerts. Contacts may receive available alert type, location, or status context when the feature, plan, permissions, app state, and connection support it. They do not receive continuous access to private wellness data."
      howItWorks={[
        "Invite the people you trust and confirm their contact details.",
        "Choose which supported alerts and context each person may receive.",
        "When an eligible alert begins, MySentry attempts to deliver the configured notification and permitted context.",
        "Contacts can use that information to call you, check on you, or coordinate next steps.",
      ]}
      afterAlert={[
        "Configured contacts may receive an alert through supported channels.",
        "Available location or status context may be included according to your permissions.",
        "An eligible professional monitoring workflow may run separately from contact notifications.",
        "Notification delivery, response, escalation, and arrival are not guaranteed.",
      ]}
      bestFor={["Individuals who want a prepared contact plan", "Families supporting a loved one", "People who work, exercise, travel, or commute alone"]}
      notIdealFor={["Secret or non-consensual tracking", "Replacing a direct call to 911 or local emergency services", "Use without accurate contact details or an available connection"]}
      keyTakeaways={[
        "Add up to 5 trusted contacts.",
        "Alert context is controlled by feature support and the permissions you enable.",
        "Family and contacts do not receive continuous access to private wellness data.",
      ]}
      faqs={[
        { question: "How many trusted contacts can I add?", answer: "You can configure up to 5 trusted contacts in MySentry." },
        { question: "What can contacts receive?", answer: "Depending on the alert and your settings, contacts may receive the alert type and available location or status context through a supported channel." },
        { question: "Can contacts see my wellness data all the time?", answer: "No. MySentry does not describe continuous family access to private wellness data. Sharing follows supported features, settings, permissions, and active workflows." },
        { question: "Do contact alerts replace 911?", answer: "No. Contact notifications are supplemental. Call 911 or local emergency services directly whenever you can do so safely." },
      ]}
      setupRequirements={{
        devices: "A supported smartphone with the MySentry app and accurate contact information.",
        permissions: "Notifications, contacts, location, and other context permissions depend on the features you enable.",
        connectivity: "Notification delivery and shared context require an available supported network connection.",
        limitations: "MySentry cannot guarantee message delivery, contact response, monitoring escalation, emergency-service response, or arrival.",
      }}
      proofBlocks={[
        { claim: "Up to 5 trusted contacts", detail: "A user can prepare a small, focused contact network inside MySentry." },
        { claim: "Consent-based context", detail: "Contacts receive only the information supported by the alert and allowed by your settings and permissions." },
      ]}
      relatedLinks={[
        { text: "Family Connectivity", href: "/features/family-connectivity" },
        { text: "Panic Alarm App", href: "/features/panic-button-app" },
        { text: "Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Compare Plans", href: "/pricing" },
      ]}
      heroImage="/manus-storage/contact-1-iphone_86f27364.png"
      heroImageAlt="MySentry app screen for emergency contacts and contact setup"
      heroImagePresentation="app-screen"
    />
  );
}
