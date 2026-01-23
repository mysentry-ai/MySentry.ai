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
      answer: "Your watch collects vitals. MySentry explains what they mean and alerts you when something's wrong. While standard tracking shows you data, MySentry uses AI to learn your personal baseline and detects anomalies in real-time. Plus, we connect that data to 24/7 professional monitoring, so if a critical event like a fall or heart anomaly occurs, we can send help even if you can't call for it."
    },
    {
      question: "Do I need to buy a new device to use MySentry?",
      answer: "No! MySentry works with the devices you likely already own. It is compatible with Apple Watch (Series 6 and newer) and Samsung Galaxy Watch (Watch 6 and newer). We believe safety shouldn't require buying expensive, stigmatizing hardware when you already have powerful technology on your wrist."
    },
    {
      question: "What happens if MySentry detects a heart rate anomaly?",
      answer: "It depends on the severity. If your heart rate enters the 'Risky Zone' (unusual but not immediately dangerous), you get a gentle alert to check your status. If it hits the 'Critical Zone' (indicating a potential medical emergency), MySentry triggers a loud alarm. If you don't dismiss it, we notify your emergency contacts and our 24/7 monitoring center immediately."
    },
    {
      question: "Can I use MySentry if I don't have a smartwatch?",
      answer: "Yes, you can use the MySentry app on your smartphone for features like the Panic Button, MeetSafe Timer, and Crash Detection. However, for automatic Fall Detection and continuous Health Anomaly Monitoring, a compatible smartwatch is required as these rely on wrist-based sensors."
    },
    {
      question: "How does the Fall Detection work?",
      answer: "MySentry uses the motion sensors in your smartwatch to detect hard falls. If a fall is detected, you'll receive an alert on your watch. If you don't respond within the designated time window (2 minutes for Apple, 30 seconds for Samsung) OR if you mark yourself unsafe, emergency contacts and 24/7 monitoring are notified immediately with your location."
    },
    {
      question: "Is my health data private and secure?",
      answer: "Yes. MySentry is committed to protecting your privacy. All your health information is stored on encrypted servers, never shared with third parties without your permission, and accessed only when you explicitly allow it. We do not misuse your health information for any purpose beyond providing you with personalized health monitoring and insights."
    },
    {
      question: "How accurate is MySentry's health monitoring?",
      answer: "MySentry uses vitals data collected by your Apple Watch or Samsung Watch, which employ medical-grade sensors. Our AI analyzes this data against your personal baseline to detect patterns. However, MySentry is a wellness tool designed to keep you informed, not a medical device or diagnostic tool."
    },
    {
      question: "What are the device requirements?",
      answer: "MySentry supports Apple Watch Series 6 and above (watchOS 11+) paired with iPhone (iOS 16+), and Samsung Galaxy Watch 6 and above paired with Android phones (Android 11+)."
    },
    {
      question: "Who is MySentry designed for?",
      answer: "MySentry serves anyone who wants to move beyond basic fitness tracking to understand their health data. Our primary audiences include seniors aging in place, individuals managing chronic health conditions, caregivers seeking peace of mind, and health-conscious consumers who want proactive wellness guidance."
    },
    {
      question: "What do the upcoming features cost?",
      answer: "Upcoming features like Near-Fall Detection, Realtime Health Assessment, and 30-Day Predictive Analysis will be included in specific subscription tiers. Pricing details for these advanced features will be announced upon their release."
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
