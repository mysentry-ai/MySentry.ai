
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function ProfessionalMonitoring() {
  return (
    <SEOPageTemplate
      seoTitle="24/7 Professional Monitoring App | MySentry"
      seoDescription="Get peace of mind with MySentry's 24/7 professional monitoring. Our live agents respond to any alert, day or night. Start your 7-day free trial today."
      canonical="https://mysentry.ai/features/24-7-professional-monitoring"
      label="FEATURE"
      h1="24/7 Professional Monitoring For Total Peace of Mind"
      problem="You worry about what might happen if you have an emergency and can't call for help. Who will know you're in trouble?"
      empathy="It's stressful to think about facing a crisis alone. You deserve to know that someone is always ready to respond, no matter what."
      steps={[
        { title: "Get the MySentry App", description: "Download the app and start your 7-day free trial. No credit card required." },
        { title: "Live Your Life", description: "MySentry works in the background. If a fall, crash, or panic alarm is triggered, we're instantly alerted." },
        { title: "Get Immediate Help", description: "Our 24/7 certified monitoring agents assess the situation and dispatch help if you need it." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A 24/7 professional monitoring app like MySentry provides constant oversight for your safety. If an alert like a fall, crash, or panic button is triggered, certified agents are immediately notified. They can assess the situation, speak to you via live video, and dispatch emergency services if needed, ensuring you get help anytime."
      howItWorks={[
        "MySentry's smart sensors monitor for falls, car crashes, or a press of your panic button.",
        "When an alert is triggered, it's sent instantly to our 24/7 professional monitoring center.",
        "A certified agent immediately attempts to contact you via live video and voice.",
        "If you're unresponsive or confirm you need help, we coordinate with local emergency services, providing them with your location and critical information.",
      ]}
      afterAlert={[
        "An alert is instantly sent to our U.S.-based, TMA Five Diamond Certified monitoring center.",
        "A trained agent joins a live video call to see and speak with you.",
        "They assess the situation and determine the appropriate level of response.",
        "If necessary, they contact police, EMS, or fire departments and stay on the line until help arrives.",
      ]}
      bestFor={["Individuals who live alone", "Seniors who want to maintain independence", "People with medical conditions", "Anyone who wants an extra layer of safety"]}
      notIdealFor={["Areas without a reliable internet or cellular connection.", "Users who are unwilling to grant necessary device permissions."]}
      keyTakeaways={[
        "MySentry provides an always-on connection to a professional monitoring center.",
        "Trained agents can dispatch emergency services like police, fire, or EMS to your exact location.",
        "Live video and voice allows agents to see the situation and provide immediate assistance.",
      ]}
      faqs={[
        { question: "How does 24/7 professional monitoring work?", answer: "When an alarm is triggered on your MySentry app, our monitoring center is instantly notified. A live agent will attempt to contact you via video and voice to assess the situation and can dispatch emergency services if needed." },
        { question: "Is the monitoring center always open?", answer: "Yes, our professional monitoring center operates 24 hours a day, 7 days a week, 365 days a year, including all holidays. You are never without protection." },
        { question: "Who are the monitoring agents?", answer: "Our agents are U.S.-based, TMA Five Diamond Certified professionals. They undergo rigorous training in emergency response protocols to provide you with the highest level of service." },
        { question: "What happens if I trigger an alarm by accident?", answer: "Accidents happen. If you trigger a false alarm, you can simply cancel it in the app or inform the monitoring agent when they contact you. There is no penalty for false alarms." },
        { question: "Do I need a separate landline for this service?", answer: "No, MySentry's monitoring service works through your smartphone's internet connection (Wi-Fi or cellular data). No landline is required." },
      ]}
      disclaimer="If you feel unsafe, use the MySentry panic alarm. If it is an immediate life-threatening emergency, contact local emergency services. MySentry requires an active internet connection, device permissions, and sufficient battery. Not all features are available on all devices."
      relatedLinks={[
        { text: "Panic Button", href: "/features/panic-button-app" },
        { text: "Fall Detection", href: "/features/fall-detection-app" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

