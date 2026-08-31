import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function SamsungGalaxyWatchIntegration() {
  return (
    <SEOPageTemplate
      seoTitle="Samsung Galaxy Watch Safety App | MySentry"
      seoDescription="Review current MySentry eligibility, setup requirements, and limitations for supported Samsung Galaxy Watch and Android configurations."
      canonical="https://mysentry.ai/integrations/samsung-galaxy-watch"
      label="Integration"
      h1="Turn Your Samsung Galaxy Watch Into a Personal Safety Device"
      problem="You want to understand whether your Samsung watch and Android phone can support MySentry safety controls and eligible monitoring workflows."
      empathy="Compatibility can vary by watch model, operating system, phone, permissions, plan, and region. Confirm the current requirements before enrolling."
      steps={[
        { title: "Step 1: Download", description: "Download the MySentry app on your Android smartphone." },
        { title: "Step 2: Confirm Compatibility", description: "Verify your watch model, Wear OS version, phone, plan, and regional eligibility with MySentry support." },
        { title: "Step 3: Configure Permissions", description: "Pair supported devices and enable only the permissions needed for the features you choose." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry may support user-activated alerts, supported-device fall detection, permitted location or video context, and eligible professional monitoring on compatible Samsung watch and Android configurations. Current model, operating-system, plan, permission, connectivity, and regional requirements must be confirmed before use."
      howItWorks={[
        "Supported-Device Detection: A compatible device may identify a fall-like event and begin a check-in or configured alert workflow.",
        "User-Activated Panic Alarm: Start an alert from available watch, phone, or configured voice controls.",
        "Permitted Context: Supported wellness signals and location may be available during an alert when the device, settings, and permissions allow.",
      ]}
      afterAlert={[
        "Alert Review: An eligible alert may be routed to the professional monitoring workflow.",
        "Contact Attempt: An agent may try to contact you using available account and device information.",
        "Conditional Escalation: Trusted contacts or emergency services may be notified when appropriate. Timing, response, and arrival are not guaranteed.",
      ]}
      bestFor={[
        "Active seniors who use a Samsung Galaxy Watch.",
        "Anyone looking for an added layer of safety without a separate device.",
        "Galaxy Watch users who want peace of mind for themselves and their families.",
      ]}
      notIdealFor={[
        "Users whose watch, phone, operating system, plan, region, or permissions are not currently supported.",
        "Individuals who do not have an Android smartphone.",
        "People who are uncomfortable with sharing health data from their watch.",
      ]}
      keyTakeaways={[
        "Confirm the current supported watch, Wear OS, Android phone, plan, and regional requirements before enrolling.",
        "Detection is not guaranteed and depends on compatible sensors, settings, connectivity, and conditions.",
        "Available Panic Alarm controls depend on the supported device and configuration.",
        "An eligible Android smartphone with the MySentry app is required for supported watch workflows.",
      ]}
      faqs={[
        {
          question: "Which Samsung Galaxy Watch models are compatible?",
          answer: "Compatibility requirements can change. Confirm the supported Galaxy Watch models, Wear OS versions, Android phones, plans, and regions with MySentry support before enrolling.",
        },
        {
          question: "Do I need my phone with me for it to work?",
          answer: "Yes, your Galaxy Watch needs to be connected to your Android smartphone with the MySentry app running for the safety features to be active.",
        },
        {
          question: "How does the fall detection work?",
          answer: "On a supported configuration, device sensors may identify a fall-like event and begin a check-in or configured alert workflow. No detection system identifies every event.",
        },
        {
          question: "Is my health data secure?",
          answer: "MySentry applies documented security and privacy controls. Data access and sharing depend on your settings, permissions, plan, connected services, and the applicable privacy policy. Do not enable permissions you do not want to use.",
        },
      ]}
      setupRequirements={{
        devices: "A currently supported Samsung Galaxy Watch and eligible Android smartphone. Confirm exact models and software versions before enrollment.",
        permissions: "Enable only the watch, phone, location, video, microphone, notification, or wellness permissions required for the features you choose.",
        connectivity: "Supported workflows require available device connectivity. Bluetooth, cellular service, Wi-Fi, and background permissions can affect operation.",
        limitations: "MySentry is not a replacement for calling emergency services and is not a medical device. Detection, monitoring, contact, escalation, and arrival are not guaranteed.",
      }}
      proofBlocks={[
        { claim: "Compatibility Comes First", detail: "MySentry presents Samsung watch features only for configurations that meet current device, software, plan, permission, connectivity, and regional requirements." },
        { claim: "User-Controlled Permissions", detail: "Location, audio, video, wellness, and contact context is governed by feature availability and the permissions you enable." },
      ]}
      relatedLinks={[
        { text: "Apple Watch Integration", href: "/integrations/apple-watch" },
        { text: "Fall Detection Feature", href: "/features/fall-detection-app" },
        { text: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Pricing Plans", href: "/pricing" },
      ]}
      heroImage="/images/cdn/IElpNKDyEyZQAZJG.jpg"
    />
  );
}
