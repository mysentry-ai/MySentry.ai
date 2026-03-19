
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function Education() {
  return (
    <SEOPageTemplate
      seoTitle="School Safety App for Teachers & Staff | MySentry"
      seoDescription="Protect your teachers and staff with a dedicated school safety app. MySentry provides instant emergency alerts and campus-wide monitoring to keep everyone safe. Book a demo."
      canonical="https://mysentry.ai/industries/education"
      label="EDUCATION"
      h1="A School Safety App That Protects Your People"
      problem="Schools need a fast, reliable way to handle emergencies, from medical incidents to security threats, but traditional systems are often slow and complex."
      empathy="You want to create a safe campus for your students and staff. The weight of that responsibility is immense, and you need a tool that you can count on in a crisis."
      steps={[
        { title: "Request a Demo", description: "Let us show you how MySentry can be customized for your school or campus." },
        { title: "Onboard Your Staff", description: "We make it simple to get your team set up and trained on the app." },
        { title: "Provide Instant Protection", description: "Give your staff a direct line to help, ensuring peace of mind across your campus." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A school safety app is a mobile application designed to enhance security for students and staff. It provides tools like panic alarms, emergency alerts, and location tracking to enable a rapid, coordinated response to incidents on campus, improving overall teacher and student safety."
      howItWorks={[
        "Staff members can trigger a silent or audible alarm from their phone.",
        "Our 24/7 monitoring team is instantly notified of the user's location and situation.",
        "Live video and audio allows our agents to assess the emergency in real-time.",
        "We coordinate with campus security or local emergency services as needed.",
      ]}
      afterAlert={[
        "A certified agent immediately reviews the alert.",
        "They assess the situation using live video, audio, and location data.",
        "The agent communicates with the user and/or your designated contacts.",
        "If necessary, the agent dispatches local emergency services to the user's exact location.",
      ]}
      bestFor={["K-12 Schools", "Colleges & Universities", "Trade Schools", "Preschools & Daycares"]}
      notIdealFor={["Schools without designated safety protocols", "Individuals seeking personal monitoring"]}
      keyTakeaways={[
        "Empower teachers and staff with a direct-to-help panic button.",
        "Improve emergency response times with 24/7 professional monitoring.",
        "Increase visibility and coordination during critical incidents on campus.",
      ]}
      faqs={[
        {
          question: "How does a school safety app work for teachers?",
          answer: "A teacher can discreetly activate a panic alarm on their smartphone. Our monitoring team receives the alert, sees their location, and can even view the situation via live video to provide the right help, fast.",
        },
        {
          question: "Is this system difficult to implement across a large campus?",
          answer: "No. MySentry is a software-based solution that requires no special hardware. Staff are enrolled online through the employer dashboard, then they download the app to their existing smartphones, making deployment simple and scalable for any size school or university.",
        },
        {
          question: "Can this app be used for medical emergencies as well as security threats?",
          answer: "Yes. The app is designed for any type of emergency. Whether a teacher has a medical event or there is a security lockdown, our agents are trained to handle the situation and coordinate the appropriate response.",
        },
        {
          question: "What happens if an alert is triggered accidentally?",
          answer: "Accidents happen. Users can easily cancel a false alarm from the app. If not canceled, our monitoring agent will attempt to verify the emergency via text and call before escalating to emergency services.",
        },
        {
          question: "How does this integrate with our existing school emergency alert system?",
          answer: "MySentry acts as a powerful first-alert tool that complements your existing systems. It provides immediate, on-the-ground intelligence that can inform and accelerate your broader campus-wide emergency notifications.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection recommended for outdoor use and GPS accuracy. Offline mode stores alerts and sends when reconnected.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "School staff can trigger campus-wide alerts from any location using the MySentry app.", detail: "Panic alerts include GPS location and live video to help responders assess the situation." },
        { claim: "MeetSafe check-ins protect staff working alone in buildings after hours.", detail: "Automated safety intervals ensure someone is monitoring staff during vulnerable periods." }
      ]}
      relatedLinks={[
        { text: "Panic Alarm for Lone Workers", href: "/features/panic-button-app" },
        { text: "Safety for Healthcare Workers", href: "/industries/home-healthcare" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

