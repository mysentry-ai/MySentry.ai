import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function ProfessionalMonitoringGuide() {
  return (
    <SEOPageTemplate
      seoTitle="Professional Monitoring vs. App-Only Safety | MySentry"
      seoDescription="Professional monitoring provides 24/7 help. MySentry agents verify emergencies with live video and dispatch help fast, unlike app-only alerts. Get peace of mind today."
      label="PERSONAL SAFETY"
      h1="Worried about getting help fast? Choose professional monitoring."
      problem="When an emergency strikes, every second counts. App-only solutions that just notify your personal contacts can lead to dangerous delays, especially if you're unable to respond."
      empathy="Choosing the right safety system can be overwhelming, and it's hard to know if you're truly protected. You need a solution that offers immediate, professional help when you need it most."
      steps={[
        { title: "Trigger an Alert", description: "MySentry detects a fall, or you can use a voice command, smartphone tap, or smartwatch tap to trigger a panic alarm." },
        { title: "Instant Video Verification", description: "A live monitoring agent immediately looks at your camera feed to see what's happening." },
        { title: "Emergency Dispatch", description: "The agent confirms the emergency and sends the right help with exact details." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing#pricing-plans" }}
      secondaryCta={{ text: "See How It Works", href: "/how-it-works" }}
      directAnswer="Professional monitoring gives you immediate, 24/7 help from trained agents. They can see what's happening and send help, even if you can't speak. App-only systems just tell your contacts, which can cause dangerous delays."
      howItWorks={[
        "When an alarm goes off, a live agent sees your camera feed.",
        "The agent checks to confirm it's a real emergency.",
        "They can talk to you through your device to offer help.",
        "If needed, they send emergency services with all the right details."
      ]}
      afterAlert={[
        "A trained professional knows your situation right away.",
        "You get the correct help quickly, without confusion or waiting.",
        "Your loved ones are told what's happening with clear information."
      ]}
      bestFor={[
        "Older adults living alone who might fall.",
        "People with health issues who need quick help.",
        "Anyone who wants the comfort of professional help in an emergency.",
        "Families who want to make sure their loved ones are always safe."
      ]}
      notIdealFor={[
        "People who only want friends and family to help them.",
        "People who are okay with possible delays from an app-only alert system."
      ]}
      keyTakeaways={[
        "Professional monitoring means a real person is there to help, 24/7.",
        "Live video verification helps get you fast and accurate emergency help.",
        "App-only solutions are not reliable if you are unconscious or can't speak.",
        "The monthly cost for monitoring is small for the peace of mind it brings."
      ]}
      faqs={[
        { question: "What happens if I fall and can't get up?", answer: "Our monitoring agent will see you on the camera, confirm you need help, and send emergency services right away, even if you can't speak. This happens within 2 minutes of a detected fall." },
        { question: "Is professional monitoring expensive?", answer: "There is a monthly fee, but it's a small cost for 24/7 protection and peace of mind. It's often much less than the potential cost of slow medical help." },
        { question: "How is this different from just calling 911?", answer: "MySentry agents give 911 confirmed, real-time information. This leads to a faster, more accurate response. If you can't speak or are confused, our agents act for you." },
        { question: "Can I use a voice command to get help?", answer: "Yes, you can quietly trigger a panic alarm with a voice command, smartphone tap, or smartwatch tap. An agent will immediately check your video feed and help you." }
      ]}
      relatedLinks={[
        { text: "How MySentry Works", href: "/how-it-works" },
        { text: "Pricing Plans", href: "/pricing#pricing-plans" },
      ]}
    />
  );
}
