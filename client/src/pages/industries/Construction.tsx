import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function Construction() {
  return (
    <SEOPageTemplate
      seoTitle="Construction Safety App for Workers | MySentry"
      seoDescription="Keep construction workers safe with MySentry. Our app offers fall detection, panic alarms, and 24/7 monitoring for lone workers. Get help fast. Book a demo."
      canonical="https://mysentry.ai/industries/construction"
      label="INDUSTRY"
      h1="Your Crew Goes Home Safe Every Day."
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663247484611/5pk35fzRuLVvrjtZdt4C3R/hero-construction-5bQ9DwxJp9a7vdZqxBpTTM.webp"
      h1Sub="Protect workers on every job site, near or remote."
      heroDescription="Fall detection, panic alarm, and health monitoring for workers in high-risk environments."
      problem="Construction sites are full of dangers. It's hard to know if a worker is okay, especially if they are alone or in a far-off part of the job site."
      empathy="You want your crew to be safe. You need a simple way to watch over them and get them help quickly in an emergency, without having to watch them all day."
      steps={[
        { title: "Equip Your Crew", description: "Workers sign up online through your company dashboard. They then download the MySentry app on their own smartphones. No new devices are needed." },
        { title: "Monitor Job Sites", description: "See where your workers are and their status from an easy-to-use dashboard. Get alerts for falls, missed check-ins, or panic alarms." },
        { title: "Dispatch Help Fast", description: "Our 24/7 monitoring team checks alerts and sends emergency services or your on-site supervisor." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry helps construction companies keep their workers safe. It's a smartphone app with fall detection, a panic button, and GPS. Our 24/7 monitoring team gets help to your team fast, especially for lone workers on any job site."
      howItWorks={[
        "Workers put the MySentry app on their phone.",
        "The app works in the background, using phone sensors to spot falls or if someone stops moving for too long.",
        "If the app thinks there's a problem, it sends an alert.",
        "Workers can also tap their phone or smartwatch, or use a voice command to call for help right away.",
      ]}
      afterAlert={[
        "Our 24/7 monitoring team gets the alert and the worker's location.",
        "They try to reach the worker by phone and text. If it's a fall, they wait for the Safety Check Alert response window.",
        "If the worker doesn't answer or says they need help, we send local emergency services.",
        "We also tell your company's contacts what happened.",
      ]}
      bestFor={["General contractors", "Subcontractors", "Lone workers on job sites", "Companies with multiple job sites", "Firms focused on OSHA compliance"]}
      notIdealFor={["Companies without a clear safety protocol", "Workers without a smartphone"]}
      keyTakeaways={[
        "Make job sites safer and meet OSHA rules with a simple app.",
        "Protect your lone workers with automatic fall detection and 24/7 monitoring.",
        "Get help to workers faster with GPS location and professional dispatch.",
      ]}
      faqs={[
        { question: "How does MySentry detect falls on a construction site?", answer: "MySentry uses the motion sensors in a worker's smartphone, along with smart software, to spot the sudden hit and change in position that happens with a fall. It's made to avoid false alarms from normal work." },
        { question: "Does this replace the need for an on-site safety manager?", answer: "No. MySentry is a tool to add to your current safety plan. It gives extra protection, especially for lone workers, but it doesn't take the place of on-site managers and a full safety culture." },
        { question: "What if a worker is in an area with poor cell service?", answer: "MySentry works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with GPS coordinates. We suggest confirming cell coverage on your job sites during setup." },
        { question: "Is the app hard for workers to use?", answer: "No, it's made to be simple. After setting it up once, the app runs in the background. The panic button is big and easy to tap. We made it as easy to use as possible for everyone." },
        { question: "How much does the service cost for a construction company?", answer: "Our price depends on how many workers you want to protect. We have flexible plans for teams of all sizes. Please book a demo or visit our pricing page for more details." },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 7+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns.",
        limitations: "Fall detection accuracy depends on sensor quality and how the device is worn. Battery life changes based on device and how much the features are used. Health monitoring needs a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Fall detection works well for construction sites and work at heights.", detail: "The app spots falls from high places and on rough ground common on construction sites." },
        { claim: "Panic alerts work even with weak cell service using offline mode.", detail: "Alerts are saved when offline and sent automatically when you get service back." },
        { claim: "Health monitoring can spot signs of heat stress in workers outside.", detail: "Watching heart rate and skin temperature helps find heat-related sickness before it gets serious." }
      ]}
      relatedLinks={[
        { text: "Lone Worker Safety", href: "/use-cases/lone-worker-safety-app" },
        { text: "Automatic Fall Detection", href: "/features/fall-detection-app" },
        { text: "Construction Safety Solution", href: "/solutions/construction" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
