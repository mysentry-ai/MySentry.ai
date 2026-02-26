
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function PanicButtonApp() {
  return (
    <SEOPageTemplate
      seoTitle="Panic Button App for Personal Safety | MySentry"
      seoDescription="Get instant help with the MySentry panic button app. A single tap sends a silent alert to our 24/7 team and your emergency contacts. Start your free trial."
      canonical="https://mysentry.ai/features/panic-button-app"
      label="FEATURE"
      h1="The Panic Button App That Gets You Help, Fast."
      problem="Feeling unsafe when you're alone is stressful. You worry that if something happens, you won't be able to get help quickly and quietly."
      empathy="You deserve to feel safe everywhere you go. Having a silent, easy-to-use panic alarm in your pocket provides peace of mind."
      steps={[
        { title: "Tap the Panic Button", description: "Open the MySentry app and tap the SOS button, or simply use your voice to activate the alarm." },
        { title: "Alert is Sent Instantly", description: "Our 24/7 monitoring team and your chosen emergency contacts are immediately notified with your location." },
        { title: "Get a Live Video Call", description: "A trained MySentry agent initiates a live video call to assess your situation and coordinate the right help." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A panic button app is a mobile application that allows you to send a discreet emergency alert with your location to a 24/7 monitoring service and pre-selected contacts. The MySentry app provides a silent SOS button that can be activated by touch or voice for immediate personal safety response."
      howItWorks={[
        "Activate the panic alarm with a single tap in the app, on your smartwatch, or by using a voice command.",
        "Your live location is securely shared with our 24/7 professional monitoring center.",
        "Your emergency contacts are instantly alerted via text message with a link to your location.",
        "A MySentry agent will immediately start a live video call to see what's happening and dispatch help if needed.",
      ]}
      afterAlert={[
        "Our 24/7 monitoring agent receives the alert and your precise GPS location.",
        "The agent immediately initiates a live video call to your phone.",
        "They assess the situation visually and verbally, providing reassurance and guidance.",
        "If you are unresponsive or in danger, the agent coordinates with local emergency services (police, ambulance) on your behalf.",
      ]}
      bestFor={["Anyone who walks, runs, or commutes alone", "Students and young professionals living in cities", "Real estate agents and other lone workers", "Seniors who live independently"]}
      notIdealFor={["Situations requiring immediate medical attention for a known, life-threatening condition.", "Areas without a reliable internet or cellular connection."]}
      keyTakeaways={[
        "Get 24/7 emergency help with a single tap or voice command.",
        "Silently alert a professional monitoring team and your family.",
        "Live video verification helps get you the right response, faster.",
      ]}
      faqs={[
        {
          question: "Is the panic button app free?",
          answer: "The MySentry app is free to download, but the 24/7 professional monitoring service requires a subscription. We offer a 7-day free trial so you can experience the peace of mind we offer.",
        },
        {
          question: "How is this different from calling 911?",
          answer: "MySentry provides a silent, discreet way to get help. Our live video feature allows our agents to verify the emergency, which can lead to a faster, more accurate response from 911. We can also alert your family and provide your exact location.",
        },
        {
          question: "Can I activate the panic alarm with my voice?",
          answer: "Yes, MySentry supports voice activation, allowing you to trigger an alarm hands-free when you can't reach your phone. You can also use a smartwatch or tap the button in the app.",
        },
        {
          question: "What happens if I trigger the alarm by accident?",
          answer: "No problem. When our agent contacts you via video, simply let them know it was a false alarm. You can also cancel the alarm in the app within a few seconds of triggering it.",
        },
        {
          question: "Will my emergency contacts see my live video?",
          answer: "No. For your privacy, only our trained, professional monitoring agents can see the live video stream. Your emergency contacts will receive a text message with a link to your live location map.",
        },
      ]}
      disclaimer="If you feel unsafe, use the MySentry panic alarm. If it is an immediate life-threatening emergency, contact local emergency services. MySentry requires an active internet connection, device permissions, and sufficient battery. Not all features are available on all devices."
      relatedLinks={[
        { text: "How Fall Detection Works", href: "/features/fall-detection" },
        { text: "What is 24/7 Monitoring?", href: "/features/professional-monitoring" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "See How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

