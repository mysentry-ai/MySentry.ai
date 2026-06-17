
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function MedicalAlertDevicesVsMysentry() {
  return (
    <SEOPageTemplate
      seoTitle="Medical Alert Devices vs. MySentry: A Better Choice | MySentry"
      seoDescription="Compare MySentry to traditional medical alert devices. MySentry uses your phone for discreet safety, fall detection, and 24/7 monitoring. Get peace of mind today."
      canonical="https://mysentry.ai/compare/medical-alert-devices-vs-mysentry"
      
      label="Comparison"
      h1="Tired of Old Medical Alert Devices? Try MySentry."
      problem="Traditional medical alert devices carry a stigma. The visible pendants and lanyards can feel like a constant, public reminder of vulnerability, making many people hesitant to wear them."
      empathy="You value your independence and style. You should not have to choose between safety and dignity. You need a solution that fits your life, not one that defines it."
      
      steps={[
        { title: "Discreet and Modern", description: "MySentry uses your own smartphone, so there is no stigmatizing pendant to wear." },
        { title: "Works Everywhere", description: "Get protection anywhere with a cellular signal, not just inside your home." },
        { title: "More Than an Alert", description: "Includes fall detection, live video help, and health monitoring at no extra cost." },
      ]}
      
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing#pricing-plans" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      heroImage="/images/compare-hero.jpg"

      directAnswer="MySentry turns your smartphone into a personal safety tool, offering a discreet choice over traditional medical alert devices. It includes fall detection and 24/7 monitoring, working anywhere with cell service, without the need for a visible pendant."

howItWorks={[
          "MySentry is an app on your smartphone or smartwatch.",
          "It uses your device's sensors to detect falls automatically.",
          "You can trigger a panic alarm by voice, phone tap, or watch tap.",
          "Alerts go to our 24/7 monitoring center for quick help."
        ]}

afterAlert={[
          "Our 24/7 monitoring team gets your alert right away.",
          "We talk to you through your phone or watch.",
          "If you need help, we send emergency services to you.",
          "We also tell your chosen emergency contacts."
        ]}

bestFor={[
          "People who want safety everywhere, not just at home.",
          "Anyone who wants discreet safety without a visible device.",
          "Those comfortable using smartphone apps.",
          "Families looking for an affordable safety option for loved ones."
        ]}

notIdealFor={[
          "People who do not use a smartphone.",
          "Those who prefer a simple button and do not mind a visible device.",
          "Anyone in areas without good cell service."
        ]}

keyTakeaways={[
          "MySentry uses your own phone, so there is no visible alert device.",
          "It gives you more features, like live video help, often for less money.",
          "You get protection anywhere you have cell service, not just at home.",
          "It is an app, so you do not need to buy new equipment."
        ]}

faqs={[
          { question: "Do I need to buy any special equipment?", answer: "No. MySentry works with your smartphone and smartwatch. You do not need to buy or wear a separate, visible pendant." },
          { question: "How is MySentry different from a traditional medical alert device?", answer: "MySentry is an app that offers more features like live video help and health alerts. It works anywhere and is more discreet and affordable than old-style devices."},
          { question: "What happens if I fall?", answer: "The app uses your phone's sensors to detect a fall. Within 2 minutes, it alerts our 24/7 monitoring center. Our agents will talk to you through your phone and send help if needed." },
          { question: "Is MySentry more expensive?", answer: "No, MySentry is usually more affordable. There are no equipment costs, and the monthly plan is often less than traditional systems, while giving you more features." }
        ]}

relatedLinks={[
          { text: "How MySentry Works", href: "/how-it-works" },
          { text: "MySentry vs. Apple Watch Fall Detection", href: "/compare/medical-alert-devices-vs-mysentry" },
          { text: "Pricing and Plans", href: "/pricing" }
        ]}
    />
  );
}
