import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function SecureRoute() {
  return (
    <SEOPageTemplate
      seoTitle="Secure Route: Route Deviation Monitoring | MySentry"
      seoDescription="MySentry Secure Route monitors your journey and checks on you if you drift off your planned route. If you don't respond, help is automatically dispatched."
      canonical="https://mysentry.ai/features/secure-route"
      label="FEATURE"
      h1="Walk, Drive, or Travel With Confidence."
      h1Sub="Set a route. MySentry watches over you the whole way."
      heroDescription="MySentry Secure Route monitors your journey and sends a Safety Check Alert if you drift significantly off your planned path. If you don't respond, your emergency contacts and monitoring team are notified."
      problem="You're walking home late at night, driving an unfamiliar route, or traveling alone, and no one knows if you've been diverted or if something has gone wrong."
      empathy="Getting from A to B should feel safe. You deserve a quiet safety net that watches your route without you having to think about it."
      steps={[
        { title: "Set Your Route", description: "Before your journey, open MySentry and set your Secure Route with your destination and expected arrival time." },
        { title: "Travel as Normal", description: "MySentry monitors your GPS position quietly in the background. It does not interrupt your journey unless something looks wrong." },
        { title: "Route Deviation Alert", description: "If you drift significantly off your planned route, MySentry sends you a Safety Check Alert. Confirm you're safe or let help come to you." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="MySentry Secure Route is a journey monitoring feature. You set a route and an expected arrival time before your trip. MySentry monitors your GPS position in the background. If you drift significantly off your planned route, MySentry sends you a Safety Check Alert asking if you're okay. If you confirm you're safe, the journey continues. If you say you're not safe or don't respond, your Panic Alarm is triggered and your emergency contacts and 24/7 monitoring team are notified with your live location."
      howItWorks={[
        "Open the MySentry app and tap Secure Route before your journey.",
        "Enter your destination and expected arrival time.",
        "MySentry monitors your GPS position quietly in the background.",
        "If you drift significantly off your planned route, MySentry sends a Safety Check Alert.",
        "Confirm you're safe to continue. If you say you're not safe or don't respond, your Panic Alarm is triggered.",
        "Your emergency contacts and 24/7 monitoring team are notified with your live location.",
      ]}
      afterAlert={[
        "Your emergency contacts receive your live GPS location and last known route.",
        "The 24/7 monitoring team is notified and can attempt to reach you via live video.",
        "If you cannot be reached, local emergency services can be dispatched to your location.",
      ]}
      bestFor={[
        "Women walking home alone at night.",
        "Drivers on unfamiliar or long-distance routes.",
        "Travelers in new cities or countries.",
        "Anyone who wants a trusted person to know if their journey goes off track.",
      ]}
      notIdealFor={[
        "Fleet management or commercial vehicle tracking.",
        "Situations where GPS signal is unavailable (underground, remote areas).",
      ]}
      keyTakeaways={[
        "Set a route before your journey and MySentry monitors it quietly in the background.",
        "Route deviation triggers a Safety Check Alert, not an immediate alarm.",
        "If you don't respond or say you're not safe, your Panic Alarm is triggered automatically.",
        "Works alongside Panic Alarm and MeetSafe for layered journey safety.",
      ]}
      faqs={[
        {
          question: "What counts as a significant route deviation?",
          answer: "MySentry monitors for meaningful deviations from your planned route, not minor GPS drift or small detours. The system is designed to avoid false alarms from normal driving variations like taking a slightly different street.",
        },
        {
          question: "Does Secure Route work while driving?",
          answer: "Yes. Secure Route works for any mode of travel: walking, driving, cycling, or public transport. MySentry monitors your GPS position regardless of how you're moving.",
        },
        {
          question: "What happens if I arrive safely but forget to close the route?",
          answer: "MySentry will send you a Safety Check Alert when your expected arrival time passes. Simply confirm you're safe to close the route and prevent any alerts.",
        },
        {
          question: "Can my emergency contacts see my route in real time?",
          answer: "Your emergency contacts receive your live GPS location if a route deviation alert is triggered and you do not respond. They do not see your route in real time during normal travel unless you have location sharing enabled.",
        },
        {
          question: "Is Secure Route included in all plans?",
          answer: "Yes. Secure Route is included in both the Individual ($15/month) and Family ($30/month) plans, as well as the 7-day free trial.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+).",
        permissions: "Location services (always-on for GPS monitoring), notifications.",
        connectivity: "Cellular signal required for real-time route monitoring. In areas with no signal, alerts queue and send when signal returns.",
        limitations: "Route monitoring accuracy depends on GPS signal quality. Secure Route is not a navigation app and does not provide turn-by-turn directions."
      }}
      proofBlocks={[
        { claim: "Secure Route monitors your journey in the background without interrupting your travel.", detail: "GPS monitoring runs quietly. You only receive an alert if you drift significantly off your planned route." },
        { claim: "Route deviation triggers a Safety Check Alert, not an immediate emergency response.", detail: "This prevents false alarms from minor detours while ensuring genuine deviations are caught." },
        { claim: "Works alongside Panic Alarm and MeetSafe for complete journey safety.", detail: "Use Secure Route for journey monitoring, MeetSafe for destination check-ins, and Panic Alarm for immediate emergencies." }
      ]}
      relatedLinks={[
        { text: "Panic Button App", href: "/features/panic-button-app" },
        { text: "MeetSafe Check-Ins", href: "/features/meetsafe-check-ins" },
        { text: "Family Connectivity", href: "/features/family-connectivity" },
        { text: "Safety App for Women", href: "/use-cases/safety-app-for-women" },
      ]}
    />
  );
}
