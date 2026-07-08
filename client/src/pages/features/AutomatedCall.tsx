import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function AutomatedCall() {
  return (
    <SEOPageTemplate
      seoTitle="Automated Call: Fake Incoming Call to Exit Unsafe Situations | MySentry"
      seoDescription="MySentry's Automated Call feature schedules a realistic fake incoming call to help you exit uncomfortable or unsafe situations discreetly. No one needs to know."
      canonical="https://mysentry.ai/features/automated-call"
      label="FEATURE"
      h1="Need an Excuse to Leave? We Have You Covered."
      h1Sub="Schedule a realistic fake call to exit any situation, discreetly."
      heroDescription="MySentry's Automated Call sends a realistic incoming call to your phone at a time you choose, giving you a natural, believable reason to leave any uncomfortable or unsafe situation."
      problem="You're in a situation that feels wrong, a bad date, an uncomfortable meeting, an unsafe environment, and you need a way out without confrontation."
      empathy="Sometimes the safest exit is a quiet one. You shouldn't have to explain yourself or create a scene to leave a situation that doesn't feel right."
      steps={[
        { title: "Schedule Your Call", description: "Open the MySentry app and set the Automated Call to arrive in 1, 5, 10, or 15 minutes, or at a specific time." },
        { title: "Wait for the Ring", description: "Your phone rings like a real incoming call at the scheduled time. It looks and sounds completely authentic." },
        { title: "Make Your Exit", description: "Answer the call and use it as your reason to leave. No explanation needed." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See All Features", href: "/features" }}
      directAnswer="MySentry's Automated Call is a safety feature that schedules a realistic fake incoming call to your phone. You set the time, and when it rings, you have a natural, believable reason to exit any uncomfortable or unsafe situation without confrontation. It is designed to work alongside MySentry's Panic Alarm and MeetSafe features as part of a layered personal safety system."
      howItWorks={[
        "Open the MySentry app and navigate to the Automated Call feature.",
        "Choose when you want the call to arrive: in 1, 5, 10, or 15 minutes, or at a specific time.",
        "Your phone rings at the scheduled time with a realistic incoming call.",
        "Answer the call and use it as your reason to leave the situation.",
        "If you need immediate help instead, the Panic Alarm is always one tap away.",
      ]}
      afterAlert={[
        "If the situation escalates before the call arrives, trigger the Panic Alarm immediately.",
        "The Panic Alarm alerts your emergency contacts and the 24/7 monitoring team with your live location.",
        "MeetSafe can be used alongside Automated Call for added protection during meetings or dates.",
      ]}
      bestFor={[
        "Women on first dates or meeting strangers for the first time.",
        "Real estate agents or service professionals in uncomfortable client situations.",
        "Anyone who needs a discreet, confrontation-free exit from an unsafe environment.",
        "Students or young adults in social situations that feel wrong.",
      ]}
      notIdealFor={[
        "Active emergencies where immediate help is needed (use the Panic Alarm instead).",
        "Situations where you need to document or report an incident.",
      ]}
      keyTakeaways={[
        "Schedule a realistic fake incoming call to exit any uncomfortable or unsafe situation.",
        "Works alongside Panic Alarm and MeetSafe for layered personal safety.",
        "No confrontation needed. The call gives you a natural, believable reason to leave.",
      ]}
      faqs={[
        {
          question: "Does the Automated Call look real?",
          answer: "Yes. The Automated Call is designed to look and sound like a genuine incoming call on your phone. It uses your phone's native call interface so it appears authentic to anyone nearby.",
        },
        {
          question: "Can I set the caller name?",
          answer: "Yes, you can customize the caller name that appears on the screen so it looks like a call from a specific person, such as a family member or friend.",
        },
        {
          question: "What if I need help before the call arrives?",
          answer: "If the situation escalates before your scheduled call, use the Panic Alarm immediately. You can trigger it by tapping the app, pressing the volume button (Android), or using a voice command. The Panic Alarm alerts your emergency contacts and the 24/7 monitoring team instantly.",
        },
        {
          question: "Is the Automated Call included in all plans?",
          answer: "Yes. The Automated Call feature is included in both the Individual ($15/month) and Family ($30/month) plans, as well as the 7-day free trial.",
        },
        {
          question: "Can I cancel the call after I schedule it?",
          answer: "Yes. You can cancel the scheduled call at any time before it arrives directly from the MySentry app.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+).",
        permissions: "Notifications enabled for the call to ring at the scheduled time.",
        connectivity: "Works on cellular or Wi-Fi. No internet connection is required for the call itself once scheduled.",
        limitations: "The Automated Call is a simulated call and cannot be used to make real phone calls. It is a safety tool designed to help you exit uncomfortable situations."
      }}
      proofBlocks={[
        { claim: "The Automated Call uses your phone's native call interface for a realistic appearance.", detail: "It looks and sounds like a genuine incoming call, making it a believable exit strategy." },
        { claim: "Works alongside Panic Alarm and MeetSafe for layered safety coverage.", detail: "Use Automated Call for discreet exits, MeetSafe for scheduled check-ins, and Panic Alarm for active emergencies." },
        { claim: "Customizable caller name and timing for maximum flexibility.", detail: "Set the call to arrive in 1-15 minutes or at a specific time, with a caller name of your choice." }
      ]}
      relatedLinks={[
        { text: "Panic Button App", href: "/features/panic-button-app" },
        { text: "MeetSafe Check-Ins", href: "/features/meetsafe-check-ins" },
        { text: "Safety App for Women", href: "/use-cases/safety-app-for-women" },
        { text: "Pricing Plans", href: "/pricing" },
      ]}
    />
  );
}
