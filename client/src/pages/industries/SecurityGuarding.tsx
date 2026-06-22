import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function SecurityGuarding() {
  return (
    <SEOPageTemplate
      seoTitle="Security Guard Safety App for Lone Workers | MySentry"
      seoDescription="Keep your security guards safe with MySentry, a lone worker safety app. It offers fall detection, panic alarms, and 24/7 monitoring. Get peace of mind, book a demo today."
      canonical="https://mysentry.ai/industries/security-guarding"
      label="FOR SECURITY COMPANIES"
      h1="Your Security Guards Stay Safe and Connected."
      h1Sub="Instant help for every lone guard, every shift."
      heroDescription="Live check-ins, panic alarm, and real-time health monitoring for guards working alone."
      problem="Your guards work alone, often in high-risk places. A simple fall, a health issue, or a threat can happen fast. Old check-in systems are slow and not always reliable."
      empathy="You want to keep your team safe, but you can't be everywhere. You need a trusted way to know your guards are okay, especially when they are out of sight."
      steps={[
        { title: "Equip Your Guards", description: "Guards enroll online through your dashboard. They download the MySentry app on their own smartphone. No new devices are needed." },
        { title: "Monitor Their Safety", description: "See your team's status on a central dashboard. Get instant alerts for falls, missed check-ins, or panic alarms." },
        { title: "Respond Instantly", description: "Our 24/7 monitoring center checks every alert. We can send emergency help or tell your managers, based on your rules." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A security guard safety app helps protect lone security officers. It uses features like fall detection, a panic alarm, and GPS tracking to watch over them. If something happens, the app automatically tells a 24/7 monitoring center for a quick, verified response."
      howItWorks={[
        "Guards put the MySentry app on their phone.",
        "The app runs quietly, looking for falls, no movement, or panic alarms.",
        "Supervisors can use MeetSafe to make sure guards arrive and leave sites on time.",
        "All alerts go to our 24/7 monitoring center for quick checking and help.",
      ]}
      afterAlert={[
        "Our 24/7 agents get the alert with the guard's location.",
        "We quickly open a live video and audio call to see what's happening.",
        "We call the guard to confirm the emergency.",
        "If the guard doesn't answer or confirms the problem, we send local emergency services and tell your chosen contacts.",
      ]}
      bestFor={[
        "Security companies with guards who work alone.",
        "Mobile guard patrols.",
        "Companies wanting to follow rules better and lower risks.",
      ]}
      notIdealFor={[
        "Companies needing simple guard tour tracking.",
        "Places with no cell coverage at all (Wi-Fi is never required).",
      ]}
      keyTakeaways={[
        "Gives lone security officers a full safety net.",
        "Uses the guard's own smartphone, making it easy and cheap to use.",
        "Combines automatic detection with 24/7 professional monitoring for fast, reliable help.",
      ]}
      faqs={[
        { question: "How is this different from our old guard tour system?", answer: "MySentry is not for tracking patrol routes. It's a safety tool for emergencies. It works with your current software to add a vital layer of protection for your officers." },
        { question: "Is the app hard for our guards to use?", answer: "No, the app is made to be simple. It runs in the background and needs little interaction. The panic alarm is easy to find, and check-ins are simple." },
        { question: "What if a guard accidentally triggers an alarm?", answer: "Our 24/7 agents check every alarm. If it's a false alarm, the guard can just tell the agent they are safe, and the alert is closed. This stops unneeded emergency calls." },
        { question: "Can we change the emergency response plan?", answer: "Yes. When you set up, we work with you to set your specific chain of command and how to respond. We will tell the people you name in the order you choose." },
        { question: "How much does the monitoring service cost?", answer: "We have flexible plans based on how many users you have. Please book a demo with our team for a detailed price based on your company's needs." },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 4+) and Samsung Galaxy Watch for wearable features.",
        permissions: "Location services (always on for GPS tracking), notifications, microphone (for voice panic alarm), camera (for live video response).",
        connectivity: "Works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns.",
        limitations: "Fall detection accuracy depends on sensor quality and how it's worn. Battery life changes with device and feature use. Health monitoring needs a compatible smartwatch."
      }}
      proofBlocks={[
        { claim: "Security guards can trigger panic alarms with live video during patrol incidents.", detail: "24/7 monitoring agents get real-time video and location to help coordinate emergency response." },
        { claim: "Automated patrol check-ins confirm guard safety at set times.", detail: "Missed check-ins send automatic alerts to supervisors and monitoring agents." }
      ]}
      relatedLinks={[
        { text: "Lone Worker Safety App", href: "/use-cases/lone-worker-safety-app" },
        { text: "Panic Button for Teams", href: "/features/panic-button-app" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
