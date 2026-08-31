import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function AppleWatchIntegrationPage() {
  return (
    <SEOPageTemplate
      seoTitle="Apple Watch Safety: MySentry for Personal Protection | MySentry"
      seoDescription="Review current MySentry eligibility, setup requirements, permissions, and limitations for supported Apple Watch and iPhone configurations."
      canonical="https://mysentry.ai/integrations/apple-watch"
      label="Apple Watch Integration"
      h1="Make Your Apple Watch a Personal Safety Device"
      problem="You want to understand whether your Apple Watch and iPhone can support MySentry safety controls and eligible monitoring workflows."
      empathy="Compatibility can vary by watch, operating system, phone, permissions, plan, connectivity, and region. Confirm the current requirements before enrolling."
      steps={[
        { title: "Create Your Account", description: "Visit mysentry.ai, choose your plan, and create your account online. Then download the MySentry app on your iPhone." },
        { title: "Confirm Compatibility", description: "Verify your Apple Watch, watchOS, iPhone, plan, and regional eligibility with MySentry support." },
        { title: "Configure Permissions", description: "Pair supported devices and enable only the permissions needed for the features you choose." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing#pricing-plans" }}
      directAnswer="MySentry may support user-activated alerts, supported-device fall or crash detection, available wellness signals, permitted location or video context, and eligible professional monitoring on compatible Apple Watch and iPhone configurations. Confirm current device, operating-system, plan, permission, connectivity, and regional requirements before use."
      howItWorks={[
        "Install MySentry on an eligible iPhone and confirm current watch compatibility before pairing.",
        "Enable only the watch, phone, location, notification, audio, video, or wellness permissions required for the features you choose.",
        "Supported workflows can run only when the required app state, settings, permissions, device connection, and network connection are available.",
      ]}
      afterAlert={[
        "A user-activated alert or supported-device event may begin a check-in or eligible monitoring workflow.",
        "A monitoring agent may attempt contact through available account and device channels.",
        "Permitted context may be reviewed, and trusted contacts or emergency services may be notified when appropriate.",
        "Detection, monitoring, contact, escalation, response, and arrival are not guaranteed.",
      ]}
      bestFor={[
        "Apple Watch users who want more personal safety.",
        "Seniors living on their own who already use an Apple Watch.",
        "Anyone looking for a simple, yet powerful, personal safety solution.",
        "Drivers who want an added supported-device safety layer while carrying an eligible iPhone.",
      ]}
      notIdealFor={[
        "People whose watch, iPhone, operating system, plan, region, or permissions are not currently supported.",
        "Users who do not want to share health and location data.",
        "Those who need a medical alert device with a special button worn around the neck or wrist.",
      ]}
      keyTakeaways={[
        "Adds an important safety layer to your Apple Watch.",
        "Includes fall detection, a panic alarm, and crash detection.",
        "Easy to set up and works smoothly with your watch.",
        "Current watch, watchOS, iPhone, plan, and regional requirements must be confirmed before enrollment.",
        "Eligible alerts may be reviewed by a 24/7 professional monitoring service.",
      ]}
      faqs={[
        {
          question: "Is MySentry a replacement for a traditional medical alert device?",
          answer: "No. MySentry is a supplemental personal safety and wellness service, not a medical alert device or a replacement for calling 911 or local emergency services.",
        },
        {
          question: "How does the fall detection work?",
          answer: "On a supported configuration, device sensors may identify a fall-like event and begin a check-in or configured alert workflow. No detection system identifies every event, and timing can vary by configuration and conditions.",
        },
        {
          question: "Will this drain my Apple Watch battery?",
          answer: "Battery impact depends on the watch, iPhone, software, permissions, connectivity, and enabled features. Review battery use on your devices and adjust settings as needed.",
        },
        {
          question: "What do I need to use MySentry with my Apple Watch?",
          answer: "You need a currently supported Apple Watch, watchOS version, iPhone, MySentry plan, permissions, and region. Confirm the exact requirements with MySentry support before enrolling.",
        },
        {
          question: "How is the panic alarm triggered?",
          answer: "The panic alarm can be triggered by a voice command, tapping your smartphone, or tapping your smartwatch.",
        },
      ]}
      setupRequirements={{
        devices: "A currently supported Apple Watch, watchOS version, and eligible iPhone. Confirm exact requirements before enrollment.",
        permissions: "Enable only the permissions required for the features you choose. Location, audio, video, notification, and wellness permissions affect available context.",
        connectivity: "Supported workflows require an available device and network connection. Bluetooth, cellular service, Wi-Fi, app state, and background permissions can affect operation.",
        limitations: "MySentry is not a replacement for emergency services and is not a medical device. Detection, monitoring, contact, escalation, response, and arrival are not guaranteed.",
      }}
      proofBlocks={[
        {
          claim: "Compatibility Comes First",
          detail: "Use Apple Watch features only after confirming current device, software, plan, permission, connectivity, and regional requirements.",
        },
        {
          claim: "User-Controlled Permissions",
          detail: "Location, audio, video, wellness, and contact context is governed by feature availability and the permissions you enable.",
        },
      ]}
      relatedLinks={[
        { text: "Compare MySentry to Other Medical Alert Devices", href: "/compare/medical-alert-devices-vs-mysentry" },
        { text: "How Our 24/7 Monitoring Works", href: "/features" },
        { text: "MySentry for Seniors Living Alone", href: "/use-cases/medical-alert-app-for-seniors" },
      ]}
      heroImage="/images/happy-senior-watch-800w.jpg"
    />
  );
}
