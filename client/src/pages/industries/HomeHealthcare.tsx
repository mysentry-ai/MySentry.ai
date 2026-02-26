
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function HomeHealthcare() {
  return (
    <SEOPageTemplate
      seoTitle="Home Healthcare Worker Safety App | MySentry"
      seoDescription="Protect your home health aides & visiting nurses with MySentry. Our lone worker safety app provides panic alarms, fall detection & 24/7 monitoring. Book a demo."
      canonical="https://mysentry.ai/industries/home-healthcare"
      label="INDUSTRY"
      h1="Keep Your Home Healthcare Workers Safe"
      problem="Your home health aides, visiting nurses, and in-home caregivers work alone, often in unpredictable environments. How do you ensure their safety from a distance?"
      empathy="Worrying about your team's well-being is a constant stressor. You need a reliable way to protect them and fulfill your duty of care, without adding complexity."
      steps={[
        { title: "Equip Your Team", description: "Invite your caregivers to download the MySentry app on their existing smartphones." },
        { title: "Monitor Their Safety", description: "Use the employer dashboard to see check-ins and manage safety protocols." },
        { title: "Respond Instantly", description: "Receive immediate alerts if a panic alarm is triggered or a potential fall is detected." },
      ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry is a safety app for home healthcare agencies that protects lone workers like visiting nurses and in-home caregivers. It provides a panic button, automatic fall detection, and 24/7 professional monitoring on their smartphone, allowing employers to ensure team safety and meet duty of care requirements."
      howItWorks={[
        "Caregivers download the MySentry app on their personal or work phone.",
        "They use the MeetSafe feature to set a safety timer before entering a client's home.",
        "A discreet panic alarm can be triggered with a single tap if they feel unsafe.",
        "Automatic fall and crash detection sends an alert even if the worker is incapacitated.",
      ]}
      afterAlert={[
        "Our 24/7 monitoring center is instantly notified of the alert.",
        "A live agent attempts to contact the worker via video and voice.",
        "If the worker is unresponsive or confirms the emergency, we contact you.",
        "We can dispatch local emergency services to the worker's exact GPS location.",
      ]}
      bestFor={["Home Healthcare Agencies", "Hospice Providers", "In-Home Care Services", "Visiting Nurse Associations"]}
      notIdealFor={["Companies without lone workers", "Individuals seeking personal protection (see our consumer plans)"]}
      keyTakeaways={[
        "Fulfill your duty of care for lone healthcare workers.",
        "Reduce response time in emergencies with 24/7 monitoring.",
        "Improve staff retention by showing you prioritize their safety.",
      ]}
      faqs={[
        {
          question: "How does MySentry protect visiting nurses?",
          answer: "The app provides a discreet panic button, fall detection, and a check-in system. If a nurse feels unsafe or has an accident, they can get help quickly, and our 24/7 monitoring team can dispatch emergency services if needed.",
        },
        {
          question: "Is the app complicated for our home health aides to use?",
          answer: "No, MySentry is designed for simplicity. Key features like the panic alarm are accessible with one tap. We focused on an intuitive design to ensure it's easy to use, even in a high-stress situation.",
        },
        {
          question: "What are our responsibilities as the employer?",
          answer: "Your main role is to ensure your team has the app installed and understands the safety protocols. You will have access to a dashboard to monitor alerts and manage your team's safety settings.",
        },
        {
          question: "Can this help with our agency's compliance and liability?",
          answer: "Yes. Implementing a lone worker safety solution like MySentry demonstrates a strong commitment to employee safety, which can be a key factor in meeting OSHA guidelines and reducing corporate liability.",
        },
        {
          question: "How much does it cost for a home care agency?",
          answer: "Our pricing is based on the number of employees you need to protect. Please contact us to book a demo and receive a detailed quote tailored to your agency's specific needs.",
        },
      ]}
      disclaimer="If you feel unsafe, use the MySentry panic alarm. If it is an immediate life-threatening emergency, contact local emergency services. MySentry requires an active internet connection, device permissions, and sufficient battery. Not all features are available on all devices."
      relatedLinks={[
        { text: "Lone Worker Safety", href: "/use-cases/lone-worker-safety" },
        { text: "Panic Button", href: "/features/panic-button" },
        { text: "Pricing Plans", href: "/pricing" },
        { text: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}

