import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function WhoWeProtectWomen() {
  return (
    <SEOPageTemplate
      seoTitle="Personal Safety App for Women | Panic Button & 24/7 Monitoring | MySentry"
      seoDescription="MySentry gives women a silent panic alarm, 24/7 professional monitoring, and live video response. Trigger by voice, phone tap, or Apple Watch. Stay safe walking, running, or working alone."
      canonical="https://mysentry.ai/who-we-protect/women"
      label="WHO WE PROTECT"
      h1="Feel Safe. Always Protected."
      h1Sub="Your personal safety net, always on."
      heroDescription="Panic alarm, live video response, and real-time location sharing designed for women who walk, commute, or live alone."
      heroImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663247484611/5pk35fzRuLVvrjtZdt4C3R/hero-women-safety-3jLHVRmcPw7sPeN2PuY5Ag.webp"
      problem="You walk to your car alone at night. You run before sunrise. You show homes to strangers. Every time, there is a small voice in the back of your head asking what you would do if something happened."
      empathy="That feeling is real. And it should not be the price of living your life. MySentry gives you a safety net that is always on, always ready, and never draws attention to itself."
      steps={[
        {
          title: "Download MySentry",
          description: "Get the app on iPhone or Android. Setup takes 5 minutes.",
        },
        {
          title: "Set Your Panic Triggers",
          description: "Choose how you want to activate the alarm: voice command, phone tap, or Apple Watch tap. All three work silently.",
        },
        {
          title: "Go About Your Life",
          description: "MySentry runs in the background. If you ever need help, one tap or one word connects you to a live agent who can see your situation and send help.",
        },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry is a personal safety app for women that includes a silent panic alarm (activated by voice, phone tap, or Apple Watch tap), 24/7 professional monitoring with live video response, automatic fall detection, and real-time GPS location sharing with emergency contacts. It works on iPhone and Android without any extra hardware."
      howItWorks={[
        "Activate the panic alarm silently by voice, phone tap, or Apple Watch tap.",
        "Our 24/7 monitoring team receives your alert and your live GPS location instantly.",
        "A trained agent starts a live video call to see what is happening.",
        "Your emergency contacts receive an instant text with your live location.",
        "The agent coordinates the right response, from reassurance to a 911 dispatch.",
      ]}
      afterAlert={[
        "A trained agent starts a live video call within seconds.",
        "They see and hear your situation and speak with you.",
        "Your emergency contacts receive your live GPS location.",
        "The agent dispatches local emergency services if needed.",
        "You receive updates until the situation is resolved.",
      ]}
      bestFor={[
        "Women who commute, walk, or run alone",
        "Real estate agents, nurses, and other lone workers",
        "Students and young professionals in cities",
        "Anyone who wants a discreet, always-ready safety net",
      ]}
      notIdealFor={[
        "Situations requiring immediate medical attention for a known condition",
        "Areas with no cellular connection",
      ]}
      keyTakeaways={[
        "Three silent panic triggers: voice, phone tap, Apple Watch tap.",
        "A trained agent responds by live video within seconds.",
        "Emergency contacts receive your live GPS location instantly.",
        "Works on iPhone and Android. No extra hardware required.",
      ]}
      faqs={[
        {
          question: "What is the best safety app for women walking alone?",
          answer: "MySentry is a strong choice for women who walk, run, or commute alone. The silent panic alarm can be triggered by voice, phone tap, or Apple Watch tap without drawing attention. A live video agent responds within seconds.",
        },
        {
          question: "Can I use MySentry when I run alone?",
          answer: "Yes. MySentry runs in the background while you run. You can trigger the panic alarm by voice or Apple Watch tap without stopping. Fall detection is also active, so if you fall during a run and do not respond within 2 minutes, an alert is sent automatically.",
        },
        {
          question: "Is there a safety app for real estate agents?",
          answer: "Yes. MySentry is used by real estate agents who show homes alone. The panic alarm can be triggered silently by voice or phone tap. A live video agent responds within seconds and can see the situation.",
        },
        {
          question: "Does MySentry work for nurses working night shifts?",
          answer: "Yes. MySentry is used by nurses and healthcare workers who work alone, walk to their cars at night, or work in high-risk environments. The panic alarm, fall detection, and 24/7 monitoring provide a safety net for every shift.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) or Android (8.0+). Optional: Apple Watch (Series 4+) or Samsung Galaxy Watch (4+).",
        permissions: "Location (always on), microphone (for voice activation), camera (for live video), and notifications.",
        connectivity: "Cellular or Wi-Fi required for alerts and live video.",
        limitations: "Voice activation requires the app to be running in the background.",
      }}
      proofBlocks={[
        { claim: "Three silent panic triggers", detail: "Voice command, phone tap, or Apple Watch tap. No need to unlock your phone or open an app." },
        { claim: "Live video response from a trained agent", detail: "Unlike apps that only send a text to a friend, MySentry connects you to a real person who can see your situation." },
        { claim: "Live GPS location shared instantly", detail: "Your emergency contacts receive your live location the moment an alarm is triggered." },
      ]}
      relatedLinks={[
        { text: "Panic Button App", href: "/features/panic-button-app" },
        { text: "Personal Safety App", href: "/personal-safety-app" },
        { text: "Fall Detection App", href: "/features/fall-detection-app" },
        { text: "Pricing", href: "/pricing" },
      ]}
    />
  );
}
