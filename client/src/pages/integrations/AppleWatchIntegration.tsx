import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function AppleWatchIntegrationPage() {
  return (
    <SEOPageTemplate
      seoTitle="MySentry for Apple Watch | The Ultimate Safety Layer"
      seoDescription="Integrate MySentry with your Apple Watch for advanced fall detection, a panic alarm, heart rate monitoring, and crash detection. Your ultimate safety companion."
      canonical="https://www.mysentry.ai/integrations/apple-watch"
      label="Apple Watch Integration"
      h1="The Ultimate Safety Layer for Your Apple Watch"
      problem="You love the convenience and health features of your Apple Watch, but worry it's not enough to protect you or your loved ones in a serious emergency like a fall or a car accident."
      empathy="It's unsettling to think that a device you wear every day might not be a complete safety net. You deserve the peace of mind that comes from knowing help is always just a tap or a voice command away."
      steps={[
        { title: "Create Your Account", description: "Visit mysentry.ai, choose your plan, and create your account online. Then download the MySentry app on your iPhone." },
        { title: "Pair with Apple Watch", description: "Connect MySentry to your Apple Watch seamlessly." },
        { title: "Enable Data Sharing", description: "Allow health and location data for full protection." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing#pricing-plans" }}
      directAnswer="MySentry integrates seamlessly with your Apple Watch (Series 4 and newer) to provide an advanced layer of personal safety. It adds powerful features like fall detection from your wrist, a panic alarm on your watch face, continuous heart rate monitoring, and automatic crash detection, ensuring you get help when you need it most."
      howItWorks={[
        "Get the MySentry app from the App Store and easily pair it with your Apple Watch.",
        "Grant access to Health and location data to enable critical safety features like fall detection and GPS tracking.",
        "MySentry runs in the background, turning your Apple Watch into a powerful personal safety device.",
      ]}
      afterAlert={[
        "A fall, crash, or panic alarm activation instantly triggers an alert to our 24/7 monitoring center.",
        "Our agents attempt to speak with you directly through your connected iPhone.",
        "If you're unresponsive or confirm you need help, we dispatch local emergency services to your exact GPS location.",
        "Your designated emergency contacts are notified of the situation.",
      ]}
      bestFor={[
        "Apple Watch users who want to enhance their personal safety.",
        "Seniors living independently who already use an Apple Watch.",
        "Anyone looking for a discreet yet powerful personal safety solution.",
        "Drivers who want an extra layer of protection with automatic crash detection.",
      ]}
      notIdealFor={[
        "Individuals without an Apple Watch (Series 4 or newer).",
        "Users who are not comfortable sharing health and location data.",
        "Those who require a medical alert device with a dedicated physical button worn around the neck or wrist.",
      ]}
      keyTakeaways={[
        "Adds a critical safety layer to your existing Apple Watch.",
        "Features include fall detection, panic alarm, and crash detection.",
        "Seamless integration and easy setup process.",
        "Requires Apple Watch Series 4 or newer with watchOS 9+.",
        "Backed by a 24/7 professional monitoring service.",
      ]}
      faqs={[
        {
          question: "Is MySentry a replacement for a traditional medical alert device?",
          answer: "MySentry provides many of the same features as a traditional medical alert device, but through your Apple Watch. It is an excellent, modern alternative for those who already own a compatible Apple Watch and prefer a more discreet solution.",
        },
        {
          question: "How does the fall detection work?",
          answer: "MySentry uses the advanced motion sensors in your Apple Watch to detect the specific impact and motion patterns of a hard fall. If a fall is detected, it will automatically initiate an alert to our monitoring center after a 2-minute period to allow you to cancel if you are okay.",
        },
        {
          question: "Will this drain my Apple Watch battery?",
          answer: "MySentry is designed to be power-efficient. While it does run in the background to monitor for emergencies, the impact on your Apple Watch's battery life is minimal, similar to other health and fitness tracking apps.",
        },
        {
          question: "What do I need to use MySentry with my Apple Watch?",
          answer: "You will need an Apple Watch Series 4 or newer running watchOS 9 or later, paired with a compatible iPhone. You will also need to create your account and subscribe to a monitoring plan at mysentry.ai, then download the MySentry app from the App Store.",
        },
      ]}
      setupRequirements={{
        devices: "Apple Watch Series 4 or newer running watchOS 9 or later, paired with a compatible iPhone.",
        permissions: "You must grant the app permissions to access your location and health data for full functionality.",
        connectivity: "An active cellular or Wi-Fi connection is required for your iPhone.",
        limitations: "Fall detection does not detect 100% of falls. For crash detection, the user must have their iPhone with them in the car.",
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