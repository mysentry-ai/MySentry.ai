import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function Education() {
  return (
    <SEOPageTemplate
      seoTitle="School Safety App for Staff & Students | MySentry"
      seoDescription="Keep your school safe with MySentry, a school safety app for staff and students. Get instant emergency alerts, fall detection, and 24/7 monitoring. Book a demo today."
      canonical="https://mysentry.ai/industries/education"
      label="EDUCATION"
      h1="Protect Your School: A Safety App for Every Campus"
      problem="Schools face a challenge: how to quickly handle emergencies, from medical issues to security threats. Old systems are often slow and hard to use."
      empathy="You want a safe campus for students and staff. This is a big responsibility, and you need a tool you can trust when a crisis happens."
      steps={[
        { title: "Request a Demo", description: "Let us show you how MySentry can be set up for your school or campus." },
        { title: "Onboard Your Staff", description: "We make it easy to get your team ready and trained on the app." },
        { title: "Provide Instant Protection", description: "Give your staff a direct way to get help, bringing peace of mind across your campus." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A school safety app is a mobile tool that makes schools safer for students and staff. It offers features like panic alarms, emergency alerts, and location tracking. This helps quickly respond to incidents on campus, making schools safer for everyone."
      howItWorks={[
        "Staff can trigger a silent or loud alarm from their phone, voice command, or smartwatch.",
        "Our 24/7 monitoring team instantly gets the user's location and details.",
        "Live video and audio let our agents see the emergency in real-time.",
        "We work with campus security or local emergency services as needed.",
      ]}
      afterAlert={[
        "A certified agent immediately checks the alert.",
        "They look at the situation using live video, audio, and location data.",
        "The agent talks with the user or their chosen contacts.",
        "If needed, the agent sends local emergency services to the user's exact spot.",
      ]}
      bestFor={["K-12 Schools", "Colleges & Universities", "Trade Schools", "Preschools & Daycares"]}
      notIdealFor={["Schools without clear safety plans", "People looking for personal monitoring only"]}
      keyTakeaways={[
        "Give teachers and staff a direct panic button to get help.",
        "Improve emergency response times with 24/7 professional monitoring.",
        "Increase awareness and teamwork during serious campus incidents.",
      ]}
      faqs={[
        {
          question: "How does a school safety app work for teachers?",
          answer: "A teacher can quietly activate a panic alarm on their smartphone, by voice, or on their smartwatch. Our monitoring team gets the alert, sees their location, and can even watch the situation through live video to send the right help, fast.",
        },
        {
          question: "Is this system hard to set up across a large campus?",
          answer: "No. MySentry is a software solution that does not need special hardware. Staff sign up online through the employer dashboard, then download the app to their existing smartphones. This makes it simple and easy to use for any size school or university.",
        },
        {
          question: "Can this app be used for medical emergencies and security threats?",
          answer: "Yes. The app is made for any type of emergency. If a teacher has a medical event or there is a security lockdown, our agents are trained to handle it and get the right help.",
        },
        {
          question: "What happens if an alert is triggered by mistake?",
          answer: "Mistakes happen. Users can easily cancel a false alarm from the app. If not canceled, our monitoring agent will try to confirm the emergency by text and call before calling emergency services.",
        },
        {
          question: "How does this work with our current school emergency alert system?",
          answer: "MySentry is a strong first-alert tool that works with your existing systems. It gives immediate, on-the-ground information that can help and speed up your wider campus emergency notifications.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection is best for outdoor use and GPS accuracy. Offline mode saves alerts and sends them when connected again.",
        limitations: "Fall detection accuracy depends on sensor quality and how it is worn. Battery life changes based on device and feature use. Health monitoring needs a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "School staff can trigger campus-wide alerts from any spot using the MySentry app.", detail: "Panic alerts include GPS location and live video to help responders understand the situation." },
        { claim: "MeetSafe check-ins keep staff safe when working alone in buildings after hours.", detail: "Automatic safety checks make sure someone is watching staff during vulnerable times." }
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
