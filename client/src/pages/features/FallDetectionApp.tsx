
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function FallDetectionApp() {
  return (
    <SEOPageTemplate
      seoTitle="Automatic Fall Detection App, Get Help Fast | MySentry"
      seoDescription="MySentry's fall detection app uses your phone or watch to get you help quickly after a fall. Feel safer, live freely. Try it free for 7 days."
      canonical="https://mysentry.ai/features/fall-detection-app"
      label="FEATURE"
      h1="Worried About Falling When Alone? MySentry Can Help."
      problem="A sudden fall can be terrifying when you are alone. The fear of not being able to get help can limit your freedom and independence."
      empathy="You deserve to live confidently and without constant worry. MySentry provides a safety net, so you can feel secure knowing help is always there if you need it."
      steps={[
        { title: "Download MySentry", description: "Install the app on your smartphone or a compatible smartwatch." },
        { title: "Activate Fall Detection", description: "Enable the automatic fall detection feature in the app’s settings." },
        { title: "Live with Confidence", description: "MySentry monitors for falls 24/7, ready to send help the moment you need it." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A fall detection app uses sensors in your smartphone or smartwatch to automatically sense a fall. If you fall, MySentry alerts your emergency contacts and our 24/7 monitoring team. This means you get help fast, even if you can't call for it yourself."
      howItWorks={[
        "MySentry uses the motion sensors in your smartphone or smartwatch to detect when you fall.",
        "If a fall is detected, the app gives you 30 seconds to say you are okay or cancel the alert.",
        "If you don't cancel, MySentry automatically tells your emergency contacts and our 24/7 monitoring team.",
        "A live agent will talk to you through your device and can send local emergency services to your location.",
      ]}
      afterAlert={[
        "Your chosen emergency contacts get an instant message with your exact location.",
        "Our 24/7 monitoring team is told about the fall and checks what happened.",
        "A live agent talks to you through your phone or watch.",
        "If you need help or don't answer, we work with local emergency services to send help.",
      ]}
      bestFor={["Older adults living alone", "People who worry about falling", "Anyone wanting more safety at home"]}
      notIdealFor={["People without a modern smartphone or smartwatch", "Places without good internet or cell service"]}
      keyTakeaways={[
       "Get automatic help after a fall, even if you can't reach your phone.",
        "Works on the phone or smartwatch you already have.",
        "Connects automatic fall detection with 24/7 human help.",
      ]}
      faqs={[
        {
          question: "Do I need to buy a special device?",
          answer: "No, MySentry works on most newer smartphones and popular smartwatches. You don't need to buy another device just for fall detection."
        },
        {
          question: "What happens if I just drop my phone?",
          answer: "Our system can tell the difference between a person falling and a device being dropped. If it thinks you fell, you have 30 seconds to easily cancel the alert and stop false alarms."
        },
        {
          question: "Does the fall detection app need internet?",
          answer: "Yes, you need an active internet connection, either Wi-Fi or cell service, for the app to detect a fall and send alerts to our monitoring center and your contacts."
        },
        {
          question: "Can I try fall detection before I buy?",
          answer: "Yes. All MySentry features, including automatic fall detection, are part of our 7-day free trial. You can test it and see how it makes you feel safer."
        },
        {
          question: "Is this a good fall alert app for older adults?",
          answer: "Yes, it's a great choice for older adults who want to stay independent. It's easy to set up on a device they already use and gives 24/7 protection without needing a special medical alert necklace."
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15 or newer) and Android (12 or newer) smartphones. Apple Watch (Series 4 or newer) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always on for GPS tracking), notifications, microphone (for voice panic alarm), camera (for live video help).",
        connectivity: "Works with cell data and Wi-Fi. Cell connection is best for outside use and accurate GPS. Offline mode saves alerts and sends them when you reconnect.",
        limitations: "How well fall detection works depends on sensor quality and where you wear your device. Battery life changes based on your device and how you use features. Health monitoring needs a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "MySentry uses phone and smartwatch sensors to detect falls.", detail: "MySentry looks for sudden changes in movement to spot falls, even when you are by yourself." },
        { claim: "If you don't respond in 2 minutes, alerts are sent automatically.", detail: "You have 2 minutes to cancel a false alarm. If you don't respond, 24/7 agents get your location and health info." },
        { claim: "Near-fall detection spots balance problems before a serious fall.", detail: "The app watches your balance over time and tells you or your caregivers if your fall risk is growing." }
      ]}
      relatedLinks={[
        { text: "Panic Alarm for Quick Help", href: "/features/panic-button-app" },
        { text: "24/7 Human Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

