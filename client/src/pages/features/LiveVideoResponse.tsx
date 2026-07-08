import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function LiveVideoResponse() {
  return (
    <SEOPageTemplate
      seoTitle="Live Video Emergency Response for Safety | MySentry"
      seoDescription="MySentry's live video emergency response connects you to 24/7 agents who verify your situation, offer guidance, and dispatch help. Get peace of mind, start your free trial."
      canonical="https://mysentry.ai/features/live-video-response"
      label="FEATURE"
      h1="Get Instant Help, Verified Safety."
      h1Sub="Trained agents see and respond instantly."
      heroDescription="When an alert is triggered, a trained agent sees your situation in real time and coordinates the right help."
      problem="When you're in a scary situation, you're not sure if it's a real emergency and you don't want to be alone."
      empathy="Feeling unsafe is frightening. MySentry's live video response means a trained professional can see what you see and help you instantly."
      steps={[
        { title: "Activate the Alarm", description: "Press the MySentry panic button, use a voice command, or tap your smartwatch." },
        { title: "Share Your Video", description: "A live video stream starts, allowing our 24/7 monitoring agents to see your situation." },
        { title: "Get Immediate Help", description: "The agent assesses the scene, talks to you, and coordinates with emergency services if needed." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry's live video emergency response offers instant visual help during an alert. When you trigger an alarm, our 24/7 monitoring agents can see your phone's camera feed to understand the situation, give advice, and send emergency services. This ensures you get the right help quickly."
      howItWorks={[
        "When you feel unsafe, tap the panic button in the MySentry app, use a voice command, or tap your smartwatch.",
        "The app instantly opens a live video stream with our 24/7 monitoring center.",
        "A trained agent sees your situation in real-time to confirm the emergency.",
        "The agent can talk to you, give guidance, and send first responders if you cannot.",
      ]}
      afterAlert={[
        "A 24/7 monitoring agent immediately joins a live video call with you.",
        "They visually check your surroundings to understand the emergency.",
        "The agent provides verbal support and instructions to help you stay safe.",
        "If needed, they will contact your emergency contacts and send local police, fire, or medical services to your location.",
      ]}
      bestFor={["Anyone who walks alone at night", "Real estate agents meeting new clients", "People who use online dating apps", "Students on college campuses", "Individuals needing quick, verified emergency help"]}
      notIdealFor={["Situations without an internet or cellular connection.", "Monitoring for events that don't involve personal safety.", "Users who prefer complete anonymity during emergencies."]}
      keyTakeaways={[
        "Get instant visual confirmation of your emergency with live video.",
        "Our 24/7 trained agents are always ready to respond and assist.",
        "Video verification helps first responders arrive faster and better prepared.",
        "Your privacy is protected, video only activates during an alarm.",
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
        {
          question: "What if I accidentally trigger a live video response?",
          answer: "If you accidentally trigger an alarm, simply tell the monitoring agent that you are safe and it was a mistake. They will close the video stream and cancel any dispatched services.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 7+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Live video streams from the user's phone camera to monitoring agents during emergencies.", detail: "When an alert is triggered, the phone's camera activates and streams video to the monitoring center for real-time assessment." },
        { claim: "Video evidence helps agents dispatch the right type of emergency response.", detail: "Agents can see the situation and determine whether police, fire, or medical services are needed, reducing response errors." },
        { claim: "Video is encrypted end-to-end and stored securely for evidence purposes.", detail: "All video transmissions use encryption to protect user privacy, and recordings are retained for incident documentation." },
        { claim: "24/7 professional monitoring agents provide real-time support and coordination.", detail: "Our trained agents are available around the clock to respond to alerts, communicate with users, and coordinate with emergency services." },
      ]}
      relatedLinks={[
        { text: "Panic Button App", href: "/features/panic-button-app" },
        { text: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" },
        { text: "How MySentry Works", href: "/how-it-works" },
        { text: "MySentry Pricing Plans", href: "/pricing" },
      ]}
    />
  );
}
