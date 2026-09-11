import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function AppleWatchIntegrationPage() {
  return (
    <SEOPageTemplate
      seoTitle="Connect Apple Watch to MySentry Safety Monitoring | MySentry"
      seoDescription="Connect a supported Apple Watch to MySentry for voice panic, wellness analysis, family alerts, live context, 24/7 monitoring, and verified escalation."
      canonical="https://mysentry.ai/integrations/apple-watch"
      label="Apple Watch Integration"
      h1="Connect Your Apple Watch to a Wider Safety Response"
      h1Sub="Keep Apple Fall Detection and Emergency SOS. Add MySentry's family, context, wellness, and professional monitoring workflow."
      problem="Your Apple Watch can detect some hard falls and call for help. You may still want a second way to trigger an alert, a shared plan for family members on iOS or Android, and professionals who can review an eligible event when you cannot explain what happened."
      empathy="A watch is most useful when the people around it know what to do next. MySentry connects supported Apple events and user triggers to one configured response workflow."
      steps={[
        { title: "Keep Apple Safety Features On", description: "Follow Apple's current instructions for Fall Detection, Emergency SOS, Medical ID, emergency contacts, and connectivity." },
        { title: "Connect MySentry", description: "Install MySentry on the supported iPhone and Apple Watch, then enable the safety and wellness features you want to use." },
        { title: "Add Family and Test", description: "Choose responders on supported iOS or Android phones, enable required permissions, and test the watch, phone, and voice panic options." },
      ]}
      primaryCta={{ text: "Review Plans and Eligibility", href: "/pricing#pricing-plans" }}
      secondaryCta={{ text: "Compare Apple Watch and MySentry", href: "/compare/apple-watch-fall-detection-vs-mysentry" }}
      directAnswer="Apple Watch supplies valuable native Fall Detection and Emergency SOS. MySentry adds hands-free voice panic, supported wellness analysis, live location and permitted phone audio or video, mixed iOS and Android family alerts, and eligible 24/7 professional monitoring. After verification, monitoring can contact emergency services, including 911, when appropriate."
      howItWorks={[
        "Apple produces an eligible fall outcome, supported wellness readings qualify, or the wearer starts MySentry from the watch, phone, phone shake, supported button action, or configured voice command.",
        "MySentry opens the configured Panic Alarm or Safety Check workflow and gives the wearer a chance to confirm safety or ask for help when the event supports it.",
        "Configured family members, responders, and eligible 24/7 professional monitoring receive the event through MySentry.",
        "Live location, phone battery level, and permitted phone audio or video can be shared during an eligible online Panic Alarm when enabled.",
        "After verification, monitoring can contact emergency services, including 911, when appropriate.",
      ]}
      afterAlert={[
        "The wearer can confirm safety or request help when able.",
        "Configured family members or responders can receive the supported alert and authorized context on iOS or Android.",
        "The 24/7 professional monitoring team can review the eligible event and available context.",
        "After verification, monitoring can contact emergency services when appropriate for the situation.",
      ]}
      bestFor={[
        "Apple Watch owners who want native watch safety features connected to a wider response workflow.",
        "People who want a voice-enabled panic option when the phone or watch is out of reach.",
        "Families using a mix of iPhone and Android phones.",
        "Older adults and independent people who want family and professional monitoring in the same plan.",
      ]}
      notIdealFor={[
        "Unsupported Apple Watch, iPhone, watchOS, plan, or regional configurations.",
        "Use without the required permissions, app state, device connection, or network availability.",
        "Medical diagnosis or a guarantee that every event will be detected or every alert will be delivered.",
      ]}
      keyTakeaways={[
        "Keep Apple's Fall Detection and Emergency SOS enabled because MySentry works alongside them.",
        "MySentry adds more ways to trigger help, including configured voice control when the wearer cannot reach a device.",
        "Supported wellness readings can be analyzed against a personal baseline before a verified critical reading starts the Panic Alarm workflow.",
        "Family members on iOS or Android and eligible 24/7 professional monitoring can participate in one configured response plan.",
      ]}
      faqs={[
        {
          question: "Why do I need MySentry if Apple Watch already has Fall Detection and Emergency SOS?",
          answer: "Apple Watch supplies the native fall signal and direct Apple emergency actions. MySentry adds voice panic, supported wellness analysis, mixed-device family alerts, live location and permitted phone context, plus eligible 24/7 professional monitoring and verified escalation.",
        },
        {
          question: "Can I trigger MySentry when I cannot reach my phone or watch?",
          answer: "A configured voice command can trigger the MySentry Panic Alarm on a supported setup. Voice behavior depends on the supported assistant, device state, app setup, permissions, and connectivity.",
        },
        {
          question: "Can my Android family members receive MySentry alerts?",
          answer: "Yes. The wearer can use a supported Apple Watch and iPhone while configured family members or responders use MySentry on supported iOS or Android phones.",
        },
        {
          question: "How does MySentry use Apple Watch fall information?",
          answer: "Apple provides the native Fall Detection engine. On a supported configuration, MySentry receives an eligible Apple fall outcome and connects it to the configured MySentry Panic Alarm, family, and monitoring workflow.",
        },
        {
          question: "Does professional monitoring contact 911?",
          answer: "An eligible Panic Alarm alerts MySentry's 24/7 professional monitoring team. After verification, monitoring can contact emergency services, including 911, when appropriate. Actual contact and response depend on the event, available context, account setup, connectivity, region, and service availability.",
        },
      ]}
      setupRequirements={{
        devices: "A currently supported Apple Watch, watchOS version, and eligible iPhone. Confirm exact requirements before enrollment.",
        permissions: "Enable the watch, phone, location, notification, audio, video, wellness, and contact permissions required for the features you choose.",
        connectivity: "Fall-event handling, alert delivery, monitoring, and live context require the supported app state and available device and network connections.",
        limitations: "Feature operation depends on supported devices, app state, permissions, connectivity, plan, region, and service availability. Wellness analysis does not diagnose a medical condition.",
      }}
      proofBlocks={[
        { claim: "Voice-enabled Panic Alarm", detail: "Use a configured voice command on a supported setup when the wearer cannot reach the phone or watch." },
        { claim: "AI-supported wellness analysis", detail: "MySentry algorithms compare supported readings with a personal baseline and use rest-state and multi-reading checks before a critical workflow." },
        { claim: "One connected response", detail: "Configured family, permitted phone context, and eligible 24/7 professional monitoring can participate in the same MySentry event." },
      ]}
      relatedLinks={[
        { text: "Apple Watch vs MySentry", href: "/compare/apple-watch-fall-detection-vs-mysentry" },
        { text: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Panic Alarm App", href: "/features/panic-button-app" },
        { text: "Compare Plans", href: "/pricing#pricing-plans" },
      ]}
      heroImage="/images/happy-senior-watch-800w.jpg"
    />
  );
}
