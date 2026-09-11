import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
  const faqs = [
    {
      question: "How is MySentry different from the health tracking my Apple Watch or Samsung Watch already does?",
      answer: "Apple Watch and Samsung Galaxy Watch provide native safety and wellness features. MySentry adds configured voice panic, AI-supported wellness analysis against a personal baseline, mixed-device family alerts, permitted phone context, and eligible 24/7 professional monitoring around supported events."
    },
    {
      question: "Do I need to buy a new device to use MySentry?",
      answer: "A supported smartphone is required. Optional wearable features require a currently eligible Apple Watch or Samsung Galaxy Watch configuration. Review current device, software, plan, permissions, connectivity, and regional eligibility before enrollment."
    },
    {
      question: "What happens when MySentry identifies a critical wellness pattern?",
      answer: "MySentry algorithms compare supported wellness readings with the user's personal baseline. The workflow checks the reading, rest state, and repeated measurements before a verified critical pattern can start a Panic Alarm. Wellness analysis is not a medical diagnosis."
    },
    {
      question: "Can I use MySentry if I don't have a smartwatch?",
      answer: "Yes. Supported phone features can include the Panic Alarm, configured voice and button triggers, Safety Checks, and eligible crash workflows. Wearable-dependent fall and wellness features require a currently supported watch configuration."
    },
    {
      question: "How does the Fall Detection work?",
      answer: "On a supported configuration, MySentry receives an eligible Apple fall outcome or uses supported Samsung motion signals and post-impact checks. A qualifying event can start the configured Panic Alarm workflow and alert family and eligible 24/7 professional monitoring with permitted context. No watch detects every fall."
    },
    {
      question: "Is my health data private and secure?",
      answer: "MySentry uses permission-based access and security controls described in its Privacy Policy. Review current data handling, service-provider access, retention, and user choices before enrollment."
    },
    {
      question: "How does MySentry use supported wellness readings?",
      answer: "MySentry analyzes supported readings against a personal baseline and uses repeated measurements and rest-state checks before a critical panic workflow. Device readings and MySentry wellness analysis do not diagnose a medical condition."
    },
    {
      question: "What are the device requirements?",
      answer: "Device eligibility can change. Confirm the current supported phone, watch, operating system, app version, permissions, plan, connectivity, and regional requirements before enrollment."
    },
    {
      question: "Who is MySentry designed for?",
      answer: "MySentry is designed for people, families, and teams who want supported alerts, trusted contacts, wellness context, and eligible professional monitoring connected in one safety workflow."
    },
    {
      question: "What do the upcoming features cost?",
      answer: "Roadmap capabilities are not presented as available until their status, supported devices, plan eligibility, and terms are confirmed."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about MySentry's features, compatibility, and security.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-2xl px-6 data-[state=open]:border-primary data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-lg font-bold text-[#1a1a1a] py-6 hover:no-underline hover:text-primary text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-lg leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
