import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function AppleWatchIntegrationPage() {
  return (
    <SEOPageTemplate
      seoTitle="Apple Watch Safety: MySentry for Personal Protection | MySentry"
      seoDescription="Turn your Apple Watch into a personal safety device. MySentry adds fall detection, a panic alarm, and crash alerts. Get help fast, directly from your wrist."
      canonical="https://www.mysentry.ai/integrations/apple-watch"
      label="Apple Watch Integration"
      h1="Make Your Apple Watch a Personal Safety Device"
      problem="You rely on your Apple Watch for health and convenience, but what if you need help in a serious emergency like a fall or car accident? Your watch alone might not be enough."
      empathy="It's natural to want full protection for yourself or loved ones. You deserve to feel safe, knowing that help is always close by, whether through a tap or a voice command."
      steps={[
        { title: "Create Your Account", description: "Visit mysentry.ai, choose your plan, and create your account online. Then download the MySentry app on your iPhone." },
        { title: "Pair with Apple Watch", description: "Connect MySentry to your Apple Watch easily." },
        { title: "Enable Data Sharing", description: "Allow health and location data for full protection." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing#pricing-plans" }}
      directAnswer="MySentry works with your Apple Watch (Series 4 and newer) to add a strong layer of personal safety. It brings powerful features like fall detection from your wrist, a panic alarm on your watch face, continuous heart rate monitoring, and automatic crash detection. This helps make sure you get help when you need it most."
      howItWorks={[
        "Get the MySentry app from the App Store and easily connect it with your Apple Watch.",
        "Give the app permission to use your health and location data. This turns on important safety features like fall detection and GPS tracking.",
        "MySentry runs quietly in the background, making your Apple Watch a powerful tool for your personal safety.",
      ]}
      afterAlert={[
        "If you fall, are in a crash, or trigger the panic alarm, an alert goes to our 24/7 monitoring center right away.",
        "Our agents will try to talk to you directly through your connected iPhone.",
        "If you can't respond or say you need help, we send local emergency services to your exact GPS location.",
        "We also let your chosen emergency contacts know what's happening.",
      ]}
      bestFor={[
        "Apple Watch users who want more personal safety.",
        "Seniors living on their own who already use an Apple Watch.",
        "Anyone looking for a simple, yet powerful, personal safety solution.",
        "Drivers who want extra protection with automatic crash detection.",
      ]}
      notIdealFor={[
        "People without an Apple Watch (Series 4 or newer).",
        "Users who do not want to share health and location data.",
        "Those who need a medical alert device with a special button worn around the neck or wrist.",
      ]}
      keyTakeaways={[
        "Adds an important safety layer to your Apple Watch.",
        "Includes fall detection, a panic alarm, and crash detection.",
        "Easy to set up and works smoothly with your watch.",
        "Needs Apple Watch Series 4 or newer with watchOS 9+.",
        "Supported by a 24/7 professional monitoring service.",
      ]}
      faqs={[
        {
          question: "Is MySentry a replacement for a traditional medical alert device?",
          answer: "MySentry offers many of the same features as a traditional medical alert device, but through your Apple Watch. It is a great, modern choice for those who already have a compatible Apple Watch and prefer a less noticeable solution.",
        },
        {
          question: "How does the fall detection work?",
          answer: "MySentry uses the advanced motion sensors in your Apple Watch to spot the specific movements of a hard fall. If a fall is detected, it will automatically send an alert to our monitoring center after 2 minutes. This gives you time to cancel the alert if you are okay.",
        },
        {
          question: "Will this drain my Apple Watch battery?",
          answer: "MySentry is made to use less power. It runs in the background to watch for emergencies, but it has a small effect on your Apple Watch's battery life, similar to other health and fitness apps.",
        },
        {
          question: "What do I need to use MySentry with my Apple Watch?",
          answer: "You will need an Apple Watch Series 4 or newer running watchOS 9 or later, paired with a compatible iPhone. You also need to create your account and sign up for a monitoring plan at mysentry.ai, then download the MySentry app from the App Store.",
        },
        {
          question: "How is the panic alarm triggered?",
          answer: "The panic alarm can be triggered by a voice command, tapping your smartphone, or tapping your smartwatch.",
        },
      ]}
      setupRequirements={{
        devices: "Apple Watch Series 4 or newer running watchOS 9 or later, paired with a compatible iPhone.",
        permissions: "You must give the app permission to use your location and health data for all features to work.",
        connectivity: "Your iPhone needs an active cellular or Wi-Fi connection.",
        limitations: "Fall detection does not catch 100% of falls. For crash detection, you must have your iPhone with you in the car.",
      }}
      proofBlocks={[
        {
          claim: "Works with Your Watch",
          detail: "Compatible with Apple Watch Series 4 and newer.",
        },
        {
          claim: "Always-On Safety",
          detail: "From fall detection to a panic alarm on your wrist.",
        },
        {
          claim: "Peace of Mind",
          detail: "I feel so much safer knowing MySentry is on my Apple Watch. It is the peace of mind I did not know I was missing. - Sarah K., MySentry User",
        },
      ]}
      relatedLinks={[
        { text: "Compare MySentry to Other Medical Alert Devices", href: "/compare/medical-alert-devices-vs-mysentry" },
        { text: "How Our 24/7 Monitoring Works", href: "/solutions/24-7-monitoring" },
        { text: "MySentry for Seniors Living Alone", href: "/safety-for/seniors-living-alone" },
      ]}
      heroImage="/images/integrations/mysentry-on-apple-watch.png"
    />
  );
}
