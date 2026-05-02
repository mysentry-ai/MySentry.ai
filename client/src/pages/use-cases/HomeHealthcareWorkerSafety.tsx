import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function HomeHealthcareWorkerSafety() {
  return (
    <SEOPageTemplate
      seoTitle="Home Healthcare Worker Safety App | MySentry"
      seoDescription="Keep home healthcare workers safe with MySentry. Our app offers a panic alarm, fall detection, and 24/7 monitoring. Protect your team, book a demo today."
      canonical="https://mysentry.ai/use-cases/home-healthcare-worker-safety"
      label="USE CASE"
      h1="Worried About Your Home Healthcare Team's Safety?"
      problem="Your caregivers work alone in private homes, exposing them to risks of assault, medical emergencies, or accidents with no one nearby to help."
      empathy="You worry about your team's safety and your organization's liability. It's a heavy burden to carry when your staff is vulnerable."
      steps={[
        {
          title: "Equip Your Team",
          description:
            "Enroll your caregivers through the employer dashboard online. They then download the MySentry app on their personal or work-issued smartphones.",
        },
        {
          title: "Monitor Their Safety",
          description:
            "Your team gets a simple panic button, automatic fall detection, and proactive safety checks for high-risk visits.",
        },
        {
          title: "Respond Instantly",
          description:
            "When an alert is triggered, our 24/7 monitoring center coordinates an immediate response, protecting your employee and your organization.",
        },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry is a safety app for home healthcare workers, including visiting nurses and caregivers. It offers a simple panic alarm, automatic fall and crash detection, and 24/7 professional monitoring. The app helps employers keep their team safe, reducing risks and bringing peace of mind."
      howItWorks={[
        "Caregivers sign up online, then get the MySentry app and set it up quickly.",
        "They can trigger a panic alarm quietly or with a sound from the app, their phone, or a smartwatch.",
        "Automatic fall detection and crash detection watch for accidents without any user action.",
        "MeetSafe check-ins ask the user to confirm their safety before, during, and after appointments.",
      ]}
      afterAlert={[
        "Our 24/7 professional monitoring agents get the alert right away.",
        "We find the user's location, health data, and can even turn on live video.",
        "Our team talks with the user to confirm the emergency.",
        "We send local emergency services and tell your chosen company contacts.",
      ]}
      bestFor={[
        "Home healthcare agencies",
        "Hospice care providers",
        "In-home nursing services",
        "Social workers and therapists",
      ]}
      notIdealFor={[
        "Workers without a reliable smartphone or internet connection.",
        "Organizations needing indoor location tracking without GPS.",
      ]}
      keyTakeaways={[
        "Protect your workers who are alone and lower company risk.",
        "Give your team a simple, helpful tool for any emergency.",
        "Rest easy with 24/7 professional monitoring and help.",
      ]}
      faqs={[
        {
          question: "How does the app protect our visiting nurses?",
          answer:
            "MySentry gives a panic button, fall detection, and regular check-ins. If a nurse feels unsafe or has an accident, they can get help right away from our 24/7 monitoring center.",
        },
        {
          question: "Is the app hard for non-technical staff to use?",
          answer:
            "No, the app is made to be simple. The panic alarm can be set off with one touch. Most features, like fall detection, work on their own in the background.",
        },
        {
          question: "What does it cost for a home healthcare agency?",
          answer:
            "We have plans that fit your needs, based on how many users and features you want. Please book a demo with our team to get a detailed price for your organization.",
        },
        {
          question: "Can we send our own security team instead of 911?",
          answer:
            "Yes. Our system lets you choose how emergency help is sent. We can tell your internal team, supervisors, or public emergency services, based on what you prefer.",
        },
        {
          question: "How does MySentry keep caregiver information private?",
          answer:
            "Location and data are only shared with our monitoring center when an alert is active or a safety check-in is missed. Keeping your information private is very important to us, and all data is safe and encrypted.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection recommended for outdoor use and GPS accuracy. Offline mode stores alerts and sends when reconnected.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Home healthcare workers can trigger silent panic alerts during patient visits.", detail: "The quiet way to activate allows workers to ask for help without making a risky situation worse." },
        { claim: "GPS tracking shows where workers are in real-time during home visits.", detail: "Employers and monitoring agents can see the worker's exact spot when an alert goes off." },
        { claim: "Automatic check-ins confirm worker safety at set times.", detail: "MeetSafe timers can be set for each patient visit, with automatic alerts if a check-in is missed." }
      ]}
      relatedLinks={[
        {
          text: "Lone Worker Safety",
          href: "/use-cases/lone-worker-safety-app",
        },
        {
          text: "Panic Button for Business",
          href: "/features/panic-button-app",
        },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
