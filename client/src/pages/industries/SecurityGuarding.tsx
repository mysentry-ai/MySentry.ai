
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function SecurityGuarding() {
  return (
    <SEOPageTemplate
      seoTitle="Security Guard Safety App | MySentry"
      seoDescription="Protect your security guards with a lone worker safety app. MySentry offers fall detection, panic alerts, and 24/7 monitoring to keep your team safe. Book a demo."
      canonical="https://mysentry.ai/industries/security-guarding"
      label="FOR SECURITY COMPANIES"
      h1="A Modern Safety App for Security Guards"
      problem="Your guards work alone, often in high-risk environments. A simple slip, a medical emergency, or a direct threat can happen anytime, and traditional check-in systems are slow and unreliable."
      empathy="You're responsible for their safety, but you can't be everywhere at once. You need a reliable way to know your team is safe, especially when they are out of sight."
      steps={[
        { title: "Equip Your Guards", description: "Guards download the MySentry app on their existing smartphones. No new hardware is needed." },
        { title: "Monitor Their Safety", description: "See your team's status in a central dashboard. Get instant alerts for falls, missed check-ins, or panic alarms." },
        { title: "Respond Instantly", description: "Our 24/7 monitoring center verifies every alert. We can dispatch emergency services or notify your chain of command, based on your protocol." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="A security guard safety app is a smartphone application designed to protect lone security officers. It uses features like fall detection, a panic button, and GPS tracking to monitor their well-being. If an incident occurs, the app automatically alerts a 24/7 monitoring center for an immediate, verified response."
      howItWorks={[
        "Guards install the MySentry app on their personal or work-issued smartphone.",
        "The app runs in the background, monitoring for falls, inactivity, or manual panic alerts.",
        "Supervisors can use the MeetSafe feature to confirm guards arrive and leave sites on time.",
        "All alerts are sent to our 24/7 professional monitoring center for immediate verification and response.",
      ]}
      afterAlert={[
        "Our 24/7 monitoring agents receive the alert with the guard's location and data.",
        "We immediately open a live video and audio stream to assess the situation.",
        "We contact the guard directly to verify the emergency.",
        "If the guard is unresponsive or confirms the emergency, we dispatch local emergency services and notify your designated contacts.",
      ]}
      bestFor={[
        "Security companies with lone workers.",
        "Mobile guard patrols.",
        "Companies seeking to improve compliance and reduce liability.",
      ]}
      notIdealFor={[
        "Companies needing passive guard tour tracking.",
        "Situations without reliable cellular or Wi-Fi coverage.",
      ]}
      keyTakeaways={[
        "Provides an all-in-one safety net for lone security officers.",
        "Uses the guard's own smartphone, making it easy and affordable to deploy.",
        "Combines automatic detection with 24/7 professional monitoring for a fast, reliable response.",
      ]}
      faqs={[
        { question: "How does this replace our old guard tour system?", answer: "MySentry is not a guard tour system that tracks patrol routes. It is a life safety solution focused on responding to emergencies. It complements your existing operational software by adding a critical layer of protection for your officers." },
        { question: "Is the app complicated for our guards to use?", answer: "No, the app is designed for simplicity. It runs in the background with minimal interaction required. The panic button is easy to access, and check-ins are straightforward." },
        { question: "What happens if a guard has a false alarm?", answer: "Our 24/7 monitoring agents verify every alarm. If it's a false alarm, the guard can simply confirm they are safe with the agent, and the alert is closed. This prevents unnecessary emergency dispatches." },
        { question: "Can we customize the emergency response protocol?", answer: "Yes. During setup, we work with you to define your specific chain of command and response procedures. We will notify the people you designate in the order you specify." },
        { question: "How much does the monitoring service cost?", answer: "We offer flexible plans based on the number of users. Please book a demo with our team for a detailed quote based on your company's needs." },
      ]}
      disclaimer="If you feel unsafe, use the MySentry panic alarm. If it is an immediate life-threatening emergency, contact local emergency services. MySentry requires an active internet connection, device permissions, and sufficient battery. Not all features are available on all devices."
      relatedLinks={[
        { text: "Lone Worker Safety", href: "/use-cases/lone-worker-safety-app" },
        { text: "Panic Button for Teams", href: "/features/panic-button-app" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

