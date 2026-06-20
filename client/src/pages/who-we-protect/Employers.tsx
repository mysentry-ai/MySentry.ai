import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function WhoWeProtectEmployers() {
  return (
    <SEOPageTemplate
      seoTitle="Lone Worker Safety App for Employers | 24/7 Monitoring | MySentry"
      seoDescription="MySentry protects lone workers with 24/7 professional monitoring, automatic fall detection, a panic button, and live video response. No extra hardware. Scales from 5 to 500 workers."
      canonical="https://mysentry.ai/who-we-protect/employers"
      label="WHO WE PROTECT"
      h1="Your Lone Workers Are Your Biggest Liability. MySentry Closes That Gap."
      problem="Your field technicians, home health aides, and late-shift workers are alone for hours at a time. If something happens, you may not know for hours. That is a safety failure and a legal exposure."
      empathy="You have a duty of care. And you want to meet it without burdening your workers with clunky hardware or complicated check-in procedures. MySentry gives your team real protection on the device they already carry."
      steps={[
        {
          title: "Get a Quote",
          description: "Contact us for team pricing. Plans scale from 5 to 500 workers with volume discounts.",
        },
        {
          title: "Set Up Your Account",
          description: "Add workers via CSV upload or manual entry. Each worker downloads MySentry on their iPhone or Android. Setup takes under 10 minutes per worker.",
        },
        {
          title: "Monitor Your Team",
          description: "Your safety manager receives instant alerts when a worker triggers a panic alarm or does not respond to a fall detection prompt. Live GPS location is included.",
        },
      ]}
      primaryCta={{ text: "Get a Team Quote", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry is a lone worker safety app that protects employees with 24/7 professional monitoring, automatic fall detection, a panic button with three triggers (voice, phone tap, smartwatch tap), and live video emergency response. It works on iPhone and Android without extra hardware. Safety managers receive instant alerts with live GPS location when a worker needs help."
      howItWorks={[
        "Each worker installs MySentry on their iPhone or Android phone.",
        "MySentry monitors their safety in the background while they work.",
        "If a fall is detected, the worker has 2 minutes to confirm they are okay.",
        "If they do not respond, or if they trigger the panic alarm, an alert is sent to our 24/7 monitoring team and your safety manager.",
        "A trained agent starts a live video call to the worker's phone.",
        "The agent dispatches the right help and keeps your safety manager informed.",
      ]}
      afterAlert={[
        "A 24/7 monitoring agent receives the alert and the worker's live GPS location.",
        "The agent starts a live video call to the worker's phone within seconds.",
        "Your safety manager receives an instant alert with the worker's location.",
        "The agent coordinates the response and dispatches emergency services if needed.",
        "A full incident report is generated for your records.",
      ]}
      bestFor={[
        "Field technicians, utility workers, and construction crews",
        "Home health aides and visiting nurses",
        "Real estate agents and property managers",
        "Security guards and night-shift workers",
        "Any employer with a duty of care for lone workers",
      ]}
      notIdealFor={[
        "Workers in areas with no cellular coverage",
        "Workers who do not carry a smartphone during their shift",
      ]}
      keyTakeaways={[
        "No extra hardware required. Works on the smartphone your workers already carry.",
        "Automatic fall detection and a panic button with three triggers.",
        "Safety managers receive instant alerts with live GPS location.",
        "24/7 professional monitoring with live video response.",
        "Scales from 5 to 500 workers with volume pricing.",
      ]}
      faqs={[
        {
          question: "What is the best lone worker safety app?",
          answer: "MySentry is a strong choice for lone worker safety. It includes automatic fall detection, a panic button with three triggers, 24/7 professional monitoring with live video response, and instant alerts to safety managers. It works on the smartphone your workers already carry, with no extra hardware required.",
        },
        {
          question: "Does MySentry meet lone worker safety regulations?",
          answer: "MySentry provides the core safety capabilities required by most lone worker regulations: a way for workers to call for help, automatic detection of incidents, and a monitoring response. Specific regulatory requirements vary by jurisdiction. Contact us to discuss your compliance needs.",
        },
        {
          question: "How does MySentry handle worker privacy?",
          answer: "MySentry does not track worker location continuously. Location data is only shared with your safety manager when a panic alarm is triggered or a fall is detected. Workers are in control of the app and can see exactly what data is shared.",
        },
        {
          question: "Can MySentry integrate with our existing safety systems?",
          answer: "Contact us to discuss integration options. We work with safety managers to ensure MySentry fits into your existing incident response procedures.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) or Android (8.0+) for each worker. Optional: Apple Watch (Series 4+) or Samsung Galaxy Watch (4+).",
        permissions: "Location (always on), motion and fitness, microphone, camera, and notifications.",
        connectivity: "Cellular signal required. Works anywhere with cell coverage.",
        limitations: "Requires workers to carry a smartphone during their shift.",
      }}
      proofBlocks={[
        { claim: "No extra hardware required", detail: "MySentry works on the smartphone your workers already carry. No devices to procure, distribute, or charge." },
        { claim: "Automatic fall detection", detail: "MySentry detects hard falls automatically. Workers do not need to press a button for help to be sent." },
        { claim: "Live video response from a trained agent", detail: "Our agents start a live video call to see what is happening and coordinate the right response." },
      ]}
      relatedLinks={[
        { text: "Panic Button App", href: "/features/panic-button-app" },
        { text: "Fall Detection App", href: "/features/fall-detection-app" },
        { text: "Personal Safety App", href: "/personal-safety-app" },
        { text: "Pricing", href: "/pricing" },
      ]}
    />
  );
}
