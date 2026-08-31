import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function RealEstateSolution() {
  return (
    <SEOPageTemplate
      seoTitle="MySentry for Real Estate | Safety Solutions for Agents"
      seoDescription="Protect your agents with MySentry's discreet panic alarm and safety check-in features. Designed for the unique risks of the real estate industry."
      canonical="https://mysentry.ai/solutions/real-estate"
      label="Real Estate Safety"
      h1="Peace of Mind for Real Estate Professionals"
      problem="Real estate agents often work alone, meeting strangers in vacant properties. This isolation, combined with the unpredictable nature of open houses, creates significant safety risks with no reliable way to discreetly signal for help."
      empathy="We understand the vulnerabilities agents face. The pressure to be available and welcoming shouldn't come at the cost of personal safety. It's a constant worry for agents, brokers, and their families."
      steps={[
        { title: "Activate MySentry", description: "Equip agents with the MySentry app and optional smartwatch integration. Setup is simple and takes minutes." },
        { title: "Use Smart Safety Tools", description: "Utilize features like MeetSafe for scheduled check-ins before showings and the silent panic alarm for immediate, discreet alerts." },
        { title: "Gain Prompt Backup", description: "In an emergency, our 24/7 monitoring center receives the alert, sees the agent's live location and video, and may contact emergency services when appropriate." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "Review Plans and Eligibility", href: "/pricing#pricing-plans" }}
      directAnswer="MySentry offers a comprehensive safety solution for real estate professionals, including a silent panic alarm, automated safety check-ins (MeetSafe), and a 24/7 live video response service to provide immediate assistance and peace of mind."
      howItWorks={[
        "Silent Alarm: A discreet voice command, a tap on your smartphone, or a press on your smartwatch promptly triggers a silent alarm.",
        "MeetSafe Check-ins: Schedule automated safety check-ins before, during, and after showings. If you don't respond, an alert is automatically triggered.",
        "Live Video & Location: Our monitoring center promptly receives your GPS location and live video from your phone's camera, providing critical context to first responders.",
      ]}
      afterAlert={[
        "Immediate Assessment: Our 24/7 monitoring team immediately assesses the situation via live video and audio.",
        "Discreet Verification: We contact you through a discreet channel to verify the emergency.",
        "Dispatching Help: If the emergency is confirmed or you are unresponsive, we dispatch local law enforcement to your exact location.",
        "Notifying Contacts: Your emergency contacts are notified.",
      ]}
      bestFor={[
        "Individual real estate agents wanting personal protection.",
        "Brokerages looking to provide a comprehensive safety net for their entire team.",
        "Property managers who oversee multiple vacant or occupied properties.",
        "Real estate teams that frequently host open houses.",
      ]}
      notIdealFor={[
        "Professionals who are never in one-on-one situations with clients.",
        "Companies with existing, mandated, and comprehensive in-house security teams.",
      ]}
      keyTakeaways={[
        "MySentry addresses the top 3 safety risks for real estate agents.",
        "Features are designed for discretion and ease of use in real-world scenarios.",
        "Provides a scalable solution for both individual agents and large brokerages.",
        "Offers two clear paths to next steps: current plan and eligibility review for individuals, or a team discussion for organizations.",
      ]}
      faqs={[
        { question: "Is the alarm really silent?", answer: "Yes. When you trigger an alarm, your phone remains completely silent and the screen does not change, so an aggressor will not know it has been activated. Our monitoring center receives the alert silently." },
        { question: "What is MeetSafe?", answer: "MeetSafe is a feature that lets you schedule automated check-ins for specific durations. If you don't confirm your safety by the end of the timer, an alert is automatically sent to our monitoring center." },
        { question: "Can my whole brokerage use MySentry?", answer: "Absolutely. We offer brokerage-wide plans with centralized billing and team management. Use the 'Book a Demo' button to learn more about our solutions for teams." },
        { question: "What if I trigger an alarm by accident?", answer: "No problem. You can easily cancel a false alarm from your app with your secure PIN. Our monitoring team will also attempt to verify with you before dispatching emergency services." },
      ]}
      setupRequirements={{
        devices: "Requires an iOS or Android smartphone. Optional smartwatch integration is available.",
        permissions: "The app requires location and camera permissions to function correctly.",
        connectivity: "A cellular signal is all that is needed. No Wi-Fi required. Even with a weak signal, the app can send a text alert with your GPS coordinates.",
        limitations: "The service relies on device battery and signal strength. It is not a replacement for 911 in life-threatening emergencies.",
      }}
      proofBlocks={[
        { claim: "A Non-Negotiable Safety Protocol", detail: "MySentry has become a non-negotiable part of our safety protocol. Our agents feel more secure, and as a broker, I have peace of mind. - Sarah K., Brokerage Owner" },
        { claim: "A Virtual Partner for Showings", detail: "The MeetSafe feature is brilliant. I use it for every showing. It’s like having a virtual partner with me. - David L., Real Estate Agent" },
      ]}
      relatedLinks={[
        { text: "Safety Tips for Lone Workers", href: "/guides/lone-worker-safety" },
      ]}
      heroImage="/images/cdn/hero-real-estate-dAoBKmzF88UvcCt9qLwiSC.webp"
    />
  );
}