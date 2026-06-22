import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function WhoWeProtectDrivers() {
  return (
    <SEOPageTemplate
      seoTitle="Crash Detection App for Drivers | 24/7 Monitoring | MySentry"
      seoDescription="MySentry detects car crashes automatically and sends help even if you cannot call. 24/7 professional monitoring, live video response, and instant family alerts with GPS. Works on iPhone and Android."
      canonical="https://mysentry.ai/who-we-protect/drivers"
      label="WHO WE PROTECT"
      h1="Help Arrives After Every Crash."
      h1Sub="Help is on the way, even if you can't call."
      heroDescription="Crash detection, automatic alerts, and live video response for anyone who spends time on the road."
      problem="You drive alone on highways, late at night, or in unfamiliar areas. If you are in a serious crash and cannot call for help, minutes matter. Most apps only call 911. MySentry sends a live video agent."
      empathy="You cannot predict a crash. But you can make sure that when one happens, help is already on the way before you have to do anything."
      steps={[
        {
          title: "Download MySentry",
          description: "Get the app on iPhone or Android. Enable crash detection in settings.",
        },
        {
          title: "Add Emergency Contacts",
          description: "Add up to 3 family members or friends. They receive your live GPS location the moment a crash is detected.",
        },
        {
          title: "Drive with Confidence",
          description: "MySentry runs in the background. If a crash is detected and you do not respond within 2 minutes, a trained agent calls for help.",
        },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry includes automatic crash detection that uses your phone's accelerometer and gyroscope to detect a serious collision. If a crash is detected and you do not respond within 2 minutes, a 24/7 monitoring agent starts a live video call to your phone, and your emergency contacts receive your live GPS location. If you cannot respond, the agent dispatches local emergency services with your location."
      howItWorks={[
        "MySentry monitors your phone's sensors in the background while you drive.",
        "If a serious impact is detected, the app prompts you to confirm you are okay.",
        "You have 2 minutes to respond. If you do not, an alert is sent automatically.",
        "A trained agent starts a live video call to your phone.",
        "Your emergency contacts receive your live GPS location instantly.",
        "The agent dispatches emergency services with your location if needed.",
      ]}
      afterAlert={[
        "A 24/7 monitoring agent receives your alert and GPS location.",
        "The agent starts a live video call to your phone within seconds.",
        "Your emergency contacts receive your live location.",
        "The agent dispatches emergency services if you cannot respond.",
        "Help arrives with your exact location.",
      ]}
      bestFor={[
        "Drivers who commute long distances alone",
        "Teen drivers and new drivers",
        "Rideshare drivers and delivery drivers",
        "Anyone who drives alone at night or in unfamiliar areas",
        "Families who want to know their teen driver is safe",
      ]}
      notIdealFor={[
        "Areas with no cellular coverage",
        "Situations where the phone is not in the vehicle",
      ]}
      keyTakeaways={[
        "Automatic crash detection works without pressing a button.",
        "A trained agent responds by live video, not just a 911 call.",
        "Emergency contacts receive your live GPS location instantly.",
        "Works on iPhone and Android. No extra hardware required.",
      ]}
      faqs={[
        {
          question: "Does MySentry have crash detection?",
          answer: "Yes. MySentry detects serious vehicle collisions automatically using your phone's sensors. If a crash is detected and you do not respond within 2 minutes, a 24/7 monitoring agent starts a live video call and your emergency contacts receive your live GPS location.",
        },
        {
          question: "How is MySentry crash detection different from iPhone crash detection?",
          answer: "iPhone crash detection calls 911 directly. MySentry connects you to a trained 24/7 monitoring agent who starts a live video call to see your situation before dispatching help. Your family also receives your live GPS location instantly. MySentry provides a more complete response than a direct 911 call.",
        },
        {
          question: "Can MySentry detect a crash if my phone is in my bag?",
          answer: "MySentry works best when your phone is mounted or in a cup holder where it can detect the impact. Detection accuracy may be reduced if the phone is in a bag or glove compartment. For best results, keep your phone in a mount or on the seat beside you.",
        },
        {
          question: "Does MySentry work for teen drivers?",
          answer: "Yes. MySentry is a strong choice for families with teen drivers. Crash detection sends an alert automatically if your teen is in an accident. Emergency contacts receive their live GPS location. The panic button also lets your teen call for help in any situation, not just a crash.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) or Android (8.0+). Optional: Apple Watch (Series 4+) or Samsung Galaxy Watch (4+).",
        permissions: "Location (always on), motion and fitness, microphone, camera, and notifications.",
        connectivity: "Cellular signal required for alerts and live video.",
        limitations: "Detection accuracy depends on phone placement in the vehicle.",
      }}
      proofBlocks={[
        { claim: "Automatic crash detection, no button press needed", detail: "MySentry detects serious collisions using your phone's sensors. You do not need to press anything for help to be sent." },
        { claim: "Live video response from a trained agent", detail: "Our agents start a live video call to see what is happening and coordinate the right response." },
        { claim: "Family alerts with live GPS location", detail: "Your emergency contacts receive your live location the moment a crash is detected." },
      ]}
      relatedLinks={[
        { text: "Panic Button App", href: "/features/panic-button-app" },
        { text: "Fall Detection App", href: "/features/fall-detection-app" },
        { text: "Personal Safety App", href: "/personal-safety-app" },
        { text: "Family Connectivity", href: "/how-it-works#family-connectivity" },
        { text: "Pricing", href: "/pricing" },
      ]}
    />
  );
}
