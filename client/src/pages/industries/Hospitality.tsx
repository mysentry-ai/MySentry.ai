
import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function Hospitality() {
  return (
    <SEOPageTemplate
      seoTitle="Hospitality Staff Safety App, Panic Button | MySentry"
      seoDescription="Keep hospitality staff safe with MySentry's app. It offers a panic button and fall detection for housekeepers and front desk workers. Get help fast. Book a demo today."
      canonical="https://mysentry.ai/industries/hospitality"
      label="INDUSTRY"
      h1="Your Hospitality Team Stays Safe."
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663247484611/5pk35fzRuLVvrjtZdt4C3R/hero-hospitality-6jASxWDKrP6WWVd8AWcFRB.webp"
      h1Sub="Quick help for lone workers, every shift."
      heroDescription="Discreet panic alarm and instant response for housekeeping, maintenance, and night-shift staff."
      problem="Hospitality staff often work alone in guest rooms or quiet areas. This can make them feel unsafe if a threat, accident, or medical emergency happens and no one is around to help."
      empathy="You want your team to be safe. It shouldn't be a constant worry for you or for them to feel secure at work."
steps={[
          { title: "Give Your Team the App", description: "Your staff gets the MySentry app on their own smartphones. No new devices are needed." },
          { title: "We Watch and Respond", description: "Our team watches 24/7. They respond right away to any alert, like a panic button press or a detected fall." },
          { title: "Feel Safe at Work", description: "Your employees will know help is always close. This makes them feel more secure and happy at work." },
        ]}
      primaryCta={{ text: "Book a Demo", href: "/contact" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry is a safety app for hospitality workers. It gives hotel staff a panic button, fall detection, and 24/7 professional monitoring on their smartphone. It helps employers meet safety rules and protect lone workers like housekeepers, ensuring quick help in an emergency."
howItWorks={[
          "Your staff signs up online through your dashboard. Then, they download the MySentry app to their personal or work phone.",
          "They can trigger a silent panic alarm by tapping their phone, smartwatch, or using a voice command.",
          "If someone falls, the app sends an alert automatically, even if they can't move.",
          "Our 24/7 monitoring team checks the emergency and sends help right away.",
        ]}
afterAlert={[
          "Our U.S.-based monitoring team gets the alert and the employee's exact location.",
          "An agent tries to reach the employee right away by call, text, and live video.",
          "If the employee doesn't answer or confirms the emergency, we call hotel security and 911.",
          "We keep management updated with live information during the event.",
        ]}
      bestFor={["Hotels and Resorts", "Casino Staff", "Housekeeping and Janitorial", "Maintenance and Engineering", "Event and Banquet Staff"]}
      notIdealFor={["Places with no cell coverage at all (Wi-Fi is never required).", "Companies that don't want to set up a clear safety plan."]}
keyTakeaways={[
          "Keep your lone workers safe and follow hotel safety rules.",
          "Get faster help during incidents with 24/7 professional monitoring.",
          "Make your staff feel safer and happier at work, which helps keep them longer.",
        ]}
faqs={[
          {
            question: "Do my employees need a special device?",
            answer: "No, MySentry works on most common smartphones. This means no extra cost or trouble buying new devices. Staff can use their own phones or company phones.",
          },
          {
            question: "How does this help us follow safety rules?",
            answer: "Many places now require hotels to give employees panic buttons. MySentry is a modern app that meets or goes beyond these rules. It includes tracking location and 24/7 monitoring.",
          },
          {
            question: "Is the app hard for staff to use?",
            answer: "No, it's very easy to use, even for people who aren't tech-savvy. To set off an alarm, they just tap a button on the screen or use a voice command.",
          },
          {
            question: "What does it cost for a hotel or hospitality business?",
            answer: "We have flexible pricing per user, made to be affordable for any size business. Please contact us for a demo and a custom price quote based on what your team needs.",
          },
          {
            question: "How fast do you respond to an alert?",
            answer: "Our monitoring center responds to every alert within seconds, all day, every day. Our agents are trained to quickly check what's happening and work with your staff and local emergency services.",
          },
        ]}
setupRequirements={{
          devices: "iPhone (iOS 15+) and Android (12+) smartphones. Apple Watch (Series 7+) and Samsung Galaxy Watch for wearable features.",
          permissions: "Location services (always-on for GPS tracking), notifications, microphone (for voice-activated panic), camera (for live video response).",
          connectivity: "Works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. In areas with no cell coverage at all, alerts queue and send the moment signal returns.",
          limitations: "How well fall detection works depends on the sensor and where it's worn. Battery life changes based on the device and how much the features are used. Health monitoring needs a compatible smartwatch."
        }}
proofBlocks={[
          { claim: "Hotel and restaurant workers can send silent panic alerts from anywhere on the property.", detail: "The app works across the entire property using cellular signal. No Wi-Fi is required, though the app uses it automatically if available. It covers guest rooms, kitchens, and parking areas." },
          { claim: "GPS and indoor tracking help find the exact spot of a worker in trouble.", detail: "Monitoring agents get precise location data to guide emergency responders to the correct area." },
          { claim: "Automatic incident reports help employers meet OSHA workplace safety rules.", detail: "Every alert creates a written record with times, location, and response details for compliance." }
        ]}
relatedLinks={[
          { text: "Hotel Staff Panic Buttons", href: "/features/panic-button-app" },
          { text: "Lone Worker Safety", href: "/use-cases/lone-worker-safety-app" },
          { text: "Pricing Plans", href: "/pricing" },
          { text: "How It Works", href: "/how-it-works" },
        ]}
    />
  );
}
