
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function LiveVideoResponse() {
  return (
    <SEOPageTemplate
      seoTitle="Live Video Emergency Response | MySentry"
      seoDescription="Get instant help with MySentry's live video emergency response. Our 24/7 agents verify your emergency and guide you to safety. Start your free trial."
      canonical="https://mysentry.ai/features/live-video-response"
      label="FEATURE"
      h1="Live Video Emergency Response"
      problem="When you're in a scary situation, you're not sure if it's a real emergency and you don't want to be alone."
      empathy="Feeling unsafe is frightening. MySentry's live video response means a trained professional can see what you see and help you instantly."
      steps={[
        { title: "Activate the Alarm", description: "Press the MySentry panic button or use a voice command." },
        { title: "Share Your Video", description: "A live video stream starts, allowing our 24/7 monitoring agents to see your situation." },
        { title: "Get Immediate Help", description: "The agent assesses the scene, talks to you, and coordinates with emergency services if needed." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry's live video emergency response provides instant visual verification for any alert. When you trigger an alarm, our 24/7 professional monitoring agents can view your phone's camera feed to assess the situation, offer guidance, and dispatch emergency services, ensuring you get the right help, right away."
      howItWorks={[
        "When you feel unsafe, tap the panic button in the MySentry app.",
        "The app instantly opens a live video stream with our 24/7 monitoring center.",
        "A trained agent sees your situation in real-time to verify the emergency.",
        "The agent can talk to you, provide guidance, and dispatch first responders if you are unable to.",
      ]}
      afterAlert={[
        "A 24/7 monitoring agent immediately joins a live video call with you.",
        "They visually assess your surroundings to understand the context of the emergency.",
        "The agent provides verbal support and instructions to help you stay safe.",
        "If needed, they will contact your emergency contacts and dispatch local police, fire, or medical services to your location.",
      ]}
      bestFor={["Anyone who walks alone at night", "Real estate agents meeting new clients", "People who use online dating apps", "Students on college campuses"]}
      notIdealFor={["Situations without an internet or cellular connection.", "Monitoring for events that don't involve personal safety."]}
      keyTakeaways={[
        "Get instant visual confirmation of your emergency with live video.",
        "Our 24/7 trained agents are always ready to respond and assist.",
        "Video verification helps first responders arrive faster and better prepared.",
      ]}
      faqs={[
        {
          question: "Is the live video stream always on?",
          answer: "No. The live video stream only activates when you trigger a panic alarm. Your privacy is our priority.",
        },
        {
          question: "What happens if I don't have a good internet connection?",
          answer: "MySentry requires an active internet connection for live video. If the connection is poor, the app will still send an alert with your location to our monitoring center and your emergency contacts.",
        },
        {
          question: "Can the monitoring agent control my phone?",
          answer: "No. The agent can only view the video feed from your camera and speak with you. They cannot access any other part of your phone.",
        },
        {
          question: "Is the video recording saved?",
          answer: "Yes, for safety and evidence purposes, the video and audio from an emergency event are securely stored and can be accessed by you later.",
        },
        {
          question: "How does video verification help me?",
          answer: "It allows our agents to confirm a real emergency is happening, reducing false alarms. It also gives first responders critical information before they arrive, so they can help you more effectively.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection recommended for outdoor use and GPS accuracy. Offline mode stores alerts and sends when reconnected.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Live video streams from the user's phone camera to monitoring agents during emergencies.", detail: "When an alert is triggered, the phone's camera activates and streams video to the monitoring center for real-time assessment." },
        { claim: "Video evidence helps agents dispatch the right type of emergency response.", detail: "Agents can see the situation and determine whether police, fire, or medical services are needed, reducing response errors." },
        { claim: "Video is encrypted end-to-end and stored securely for evidence purposes.", detail: "All video transmissions use encryption to protect user privacy, and recordings are retained for incident documentation." }
      ]}
      disclaimer="If you feel unsafe, use the MySentry panic alarm. If it is an immediate life-threatening emergency, contact local emergency services. MySentry requires an active internet connection, device permissions, and sufficient battery. Not all features are available on all devices."
      relatedLinks={[
        { text: "Panic Button", href: "/features/panic-button-app" },
        { text: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

