
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function Construction() {
  return (
    <SEOPageTemplate
      seoTitle="Construction Worker Safety App | MySentry"
      seoDescription="Protect your crew with MySentry's construction worker safety app. Features fall detection, panic alarm, and 24/7 monitoring for lone workers. Book a demo."
      canonical="https://mysentry.ai/industries/construction"
      label="INDUSTRY"
      h1="Keep Your Construction Crew Safe"
      problem="Construction sites are full of risks. It's hard to know if a worker is safe, especially if they are working alone or in a remote area of the job site."
      empathy="You're responsible for your crew's safety. You need a reliable way to monitor them and get them help fast in an emergency, without watching them all day."
      steps={[
        { title: "Equip Your Crew", description: "Workers are enrolled online through the employer dashboard. They then download the MySentry app on their existing smartphones. No new hardware needed." },
        { title: "Monitor Job Sites", description: "See worker status and location from a simple dashboard. Get alerts for falls, missed check-ins, or panic alarms." },
        { title: "Dispatch Help Fast", description: "Our 24/7 monitoring team verifies alerts and dispatches emergency services or your on-site supervisor." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry is a construction worker safety app that turns smartphones into life-saving devices. It provides fall detection, a panic button, and GPS location to a 24/7 monitoring service. This allows construction companies to protect lone workers and ensure rapid emergency response on any job site, improving overall safety."
      howItWorks={[
        "Workers install the MySentry app on their personal or company-issued phones.",
        "The app runs in the background, using sensors to detect falls or long periods of inactivity.",
        "If a potential incident is detected, an alarm is triggered.",
        "Workers can also manually trigger a panic alarm for any emergency.",
      ]}
      afterAlert={[
        "Our 24/7 professional monitoring agents receive the alert with the worker's location.",
        "They immediately attempt to contact the worker via call and text.",
        "If the worker is unresponsive or confirms the emergency, we dispatch local EMS.",
        "Your designated company contacts are notified of the incident and its outcome.",
      ]}
      bestFor={["General contractors", "Subcontractors", "Lone workers on job sites", "Companies with multiple job sites", "Firms focused on OSHA compliance"]}
      notIdealFor={["Companies without a clear safety protocol", "Workers without a smartphone"]}
      keyTakeaways={[
        "Improve job site safety and OSHA compliance with a simple app.",
        "Protect your lone workers with automatic fall detection and 24/7 monitoring.",
        "Reduce emergency response times with GPS location and professional dispatch.",
      ]}
      faqs={[
        { question: "How does MySentry detect falls on a construction site?", answer: "MySentry uses the motion sensors in a worker's smartphone, combined with a sophisticated algorithm, to detect the sudden impact and change in orientation characteristic of a fall. It's designed to minimize false alarms from normal work activities." },
        { question: "Does this replace the need for an on-site safety manager?", answer: "No. MySentry is a tool to augment your existing safety program. It provides an extra layer of protection, especially for lone workers, but does not replace the need for on-site supervision and a comprehensive safety culture." },
        { question: "What if a worker is in an area with poor cell service?", answer: "MySentry requires an active internet connection (cellular or Wi-Fi) to send alerts. While it can cache some data, real-time alerts depend on connectivity. We recommend assessing connectivity on your job sites as part of implementation." },
        { question: "Is the app complicated for workers to use?", answer: "No, it's designed for simplicity. After a one-time setup, the app runs in the background. The panic button is large and easy to access. We focused on making it as user-friendly as possible for all skill levels." },
        { question: "How much does the service cost for a construction company?", answer: "Our pricing is based on the number of workers you wish to protect. We offer flexible plans to fit teams of all sizes. Please book a demo or visit our pricing page for more details." },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
        connectivity: "Works on cellular data and Wi-Fi. Cellular connection recommended for outdoor use and GPS accuracy. Offline mode stores alerts and sends when reconnected.",
        limitations: "Fall detection accuracy depends on sensor quality and wearing position. Battery life varies by device and feature usage. Health monitoring requires a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Fall detection is calibrated for construction environments and elevated work.", detail: "The app detects falls from heights and on uneven surfaces common on construction sites." },
        { claim: "Panic alerts work in areas with limited cellular coverage using offline mode.", detail: "Alerts are queued when offline and sent automatically when connectivity is restored." },
        { claim: "Health monitoring can detect signs of heat stress in outdoor workers.", detail: "Continuous tracking of heart rate and skin temperature helps identify heat-related illness before it becomes critical." }
      ]}
      relatedLinks={[
        { text: "Lone Worker Safety", href: "/use-cases/lone-worker-safety-app" },
        { text: "Automatic Fall Detection", href: "/features/fall-detection-app" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

