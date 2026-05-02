
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function RealEstateCaseStudy() {
  return (
    <SEOPageTemplate
      seoTitle="MySentry Real Estate Case Study: Enhancing Agent Safety"
      seoDescription="Discover how a regional real estate brokerage improved agent safety, boosted confidence, and saved on liability costs with MySentry's comprehensive safety solution."
      canonical="https://mysentry.ai/case-studies/real-estate"
      label="CASE STUDY"
      h1="Regional Brokerage Enhances Agent Safety with MySentry"
      problem="A thriving regional real estate brokerage with over 80 agents faced a critical challenge. Within a single year, two separate safety incidents occurred during open houses, leaving agents feeling vulnerable and hesitant to conduct showings alone, particularly in remote or unfamiliar rural areas."
      empathy="This fear not only impacted agent morale but also began to hinder business operations."
      steps={[
        { title: "MeetSafe Check-ins", description: "Agents were required to perform a check-in before every property showing, creating a virtual safety net and a clear record of their appointments." },
        { title: "Silent Panic Alarm", description: "A discreet panic alarm could be triggered via voice command, a tap on their smartphone, or their smartwatch, ensuring they could signal for help without escalating a potentially dangerous situation." },
        { title: "Live Video Streaming", description: "In an emergency, the system could stream live video to the monitoring center, providing crucial context for a rapid and effective response." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing#pricing-plans" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="The brokerage implemented MySentry as a mandatory safety protocol for all its agents, which yielded transformative results, creating a safer environment and delivering a strong return on investment."
      howItWorks={[
        "Agents check in before each showing using the MySentry app.",
        "A silent panic alarm can be triggered discreetly if a situation feels unsafe.",
        "Live video is streamed to a monitoring center during an emergency.",
        "24/7 monitoring and rapid response are provided."
      ]}
      afterAlert={[
        "The monitoring center is immediately notified.",
        "Live video and audio are analyzed to assess the situation.",
        "Emergency services are dispatched to the agent's location.",
        "The brokerage's emergency contacts are informed."
      ]}
      bestFor={[
        "Real estate brokerages looking to improve agent safety.",
        "Individual agents who want a reliable safety net.",
        "Property managers who need to ensure the security of their staff.",
        "Anyone working alone in potentially vulnerable situations."
      ]}
      notIdealFor={[
        "Individuals who do not have a smartphone.",
        "Areas with no cellular or internet connectivity.",
        "Users who are unwilling to follow safety protocols."
      ]}
      keyTakeaways={[
        "MySentry demonstrably reduces safety incidents.",
        "Agent confidence and productivity increase significantly.",
        "The solution offers a strong return on investment through reduced liability.",
        "Implementing a clear safety protocol is crucial for business success."
      ]}
      faqs={[
        { question: "How difficult is it for agents to learn to use MySentry?", answer: "MySentry is designed to be intuitive and easy to use. Most agents are comfortable with the system after a single training session." },
        { question: "What if an agent forgets to check in?", answer: "The system can send automated reminders to agents before their appointments to ensure they remember to check in." },
        { question: "Does MySentry work in areas with poor cell service?", answer: "While MySentry works best with a stable internet connection, it has offline capabilities to provide a degree of protection even in areas with poor connectivity." },
        { question: "Can the panic alarm be triggered accidentally?", answer: "The panic alarm is designed to prevent accidental triggers, requiring a deliberate action to activate." }
      ]}
      setupRequirements={{
        devices: "A smartphone (iOS or Android) or a compatible smartwatch.",
        permissions: "Location services and microphone access for emergency situations.",
        connectivity: "A cellular signal is all that is required. No Wi-Fi is needed for any feature.",
        limitations: "Effectiveness may be reduced in areas with no connectivity."
      }}
      proofBlocks={[
        { claim: "100%", detail: "Reduction in safety incidents in 12 months" },
        { claim: "34%", detail: "Increase in solo showings by agents" },
        { claim: "92%", detail: "Improvement in agent confidence" },
        { claim: "$45K", detail: "Savings in annual liability costs" },
      ]}
      relatedLinks={[
        { text: "Learn more about how MySentry works", href: "/how-it-works" },
        { text: "See pricing plans", href: "/pricing#pricing-plans" },
        { text: "Read another case study", href: "/case-studies/lone-worker-safety" },
      ]}
      heroImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
    />
  );
}
