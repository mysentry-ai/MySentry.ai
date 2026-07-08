import SEOPageTemplate from "@/components/SEOPageTemplate";

export default function FamilyConnectivity() {
  return (
    <SEOPageTemplate
      seoTitle="Family Connectivity: Real-Time Location Sharing | MySentry"
      seoDescription="MySentry Family Connectivity lets you share your location on a schedule or in real time, and request a trusted contact's location when you're worried. Included in the Family Plan."
      canonical="https://mysentry.ai/features/family-connectivity"
      label="FEATURE"
      h1="Always Know Your Family Is Safe."
      h1Sub="Share location on schedule or in real time. Check on loved ones anytime."
      heroDescription="MySentry Family Connectivity lets you share your live location with trusted contacts and request their location when you're worried, without the awkwardness of a check-in text."
      problem="You want to know your family is safe without calling every hour or tracking them without their knowledge."
      empathy="Worrying about a loved one's commute, a teenager's night out, or an elderly parent's walk to the store is exhausting. You deserve a simple, respectful way to stay connected."
      steps={[
        { title: "Add Emergency Contacts", description: "Add up to 5 trusted contacts in the MySentry app. Each contact can be a full MySentry user or a Responder who downloads the app via a link and enters a 6-digit code." },
        { title: "Set Location Sharing Preferences", description: "Choose to share your location on a schedule (e.g., during your commute) or in real time. Each contact's sharing settings can be customized individually." },
        { title: "Request a Contact's Location", description: "When you're worried about a family member, tap their name and request their location. They receive a notification and can share it with you instantly." },
      ]}
      primaryCta={{ text: "Start 7-Day Free Trial", href: "/pricing" }}
      secondaryCta={{ text: "See Family Plan Details", href: "/pricing" }}
      directAnswer="MySentry Family Connectivity is a feature that lets you share your live GPS location with trusted contacts on a schedule or in real time. You can also request a trusted contact's location when you're concerned about them. Family Connectivity is part of the MySentry app and is included in both the Individual and Family plans. Emergency contacts do not need to be MySentry subscribers, they can join as Responders via a link."
      howItWorks={[
        "Add up to 5 emergency contacts in the MySentry app.",
        "Customize each contact's settings: Panic Alarm alerts, MeetSafe updates, and Family Connectivity.",
        "Share your location on a schedule or in real time with selected contacts.",
        "When worried about a family member, request their location directly from the app.",
        "Contacts receive a notification and can share their location with you instantly.",
      ]}
      afterAlert={[
        "When a Panic Alarm is triggered, all emergency contacts receive your live GPS location automatically.",
        "Contacts can track your location in real time until the alarm is resolved.",
        "The 24/7 monitoring team also receives your location and can coordinate a response.",
      ]}
      bestFor={[
        "Parents who want to know when their teenager arrives home safely.",
        "Families with elderly parents who live alone.",
        "Couples who want to share location during commutes or travel.",
        "Anyone who wants a trusted person to know their whereabouts without constant texting.",
      ]}
      notIdealFor={[
        "Fleet management or employee tracking (use a dedicated GPS fleet solution).",
        "Tracking someone without their knowledge or consent.",
      ]}
      keyTakeaways={[
        "Share your location on a schedule or in real time with up to 5 trusted contacts.",
        "Request a contact's location when you're worried, without an awkward phone call.",
        "Emergency contacts can be MySentry users or Responders who join via a link.",
        "During a Panic Alarm, all contacts receive your live location automatically.",
      ]}
      faqs={[
        {
          question: "Do my emergency contacts need to have a MySentry subscription?",
          answer: "No. Emergency contacts can be full MySentry users or Responders. Responders download the MySentry app via a link, sign up as a Responder, and enter a 6-digit code. They do not need a paid subscription to receive your alerts and location.",
        },
        {
          question: "How many emergency contacts can I add?",
          answer: "You can add up to 5 emergency contacts. Each contact's notification settings can be customized individually, including which alerts they receive for Panic Alarm, MeetSafe, and Family Connectivity.",
        },
        {
          question: "Can I share my location with some contacts but not others?",
          answer: "Yes. Each contact's settings are managed individually. You can choose which contacts receive location sharing, Panic Alarm alerts, and MeetSafe updates.",
        },
        {
          question: "What is the Loud Emergency Check-In?",
          answer: "The Loud Emergency Check-In plays a loud custom sound on your emergency contact's phone, even if it is on Silent or Do Not Disturb. This ensures they notice urgent alerts when it matters most.",
        },
        {
          question: "Is Family Connectivity included in the Individual plan?",
          answer: "Yes. Family Connectivity is included in both the Individual ($15/month) and Family ($30/month) plans. The Family plan adds up to 5 member licenses under one account.",
        },
        {
          question: "What is the difference between Family Connectivity and the Family Plan?",
          answer: "Family Connectivity is a feature that lets you share location and request a contact's location. The Family Plan is a subscription tier that includes up to 5 member licenses under one account, so each family member has their own full MySentry account.",
        },
      ]}
      setupRequirements={{
        devices: "iPhone (iOS 15+) and Android (12+). Emergency contacts need the MySentry app installed as a Responder or full user.",
        permissions: "Location services (always-on for GPS tracking), notifications.",
        connectivity: "Cellular or Wi-Fi required for real-time location sharing.",
        limitations: "Location sharing requires the contact to have the MySentry app installed. Real-time location sharing uses battery. Contacts must accept the invitation to become active."
      }}
      proofBlocks={[
        { claim: "Emergency contacts receive live GPS location automatically during a Panic Alarm.", detail: "No manual sharing required. When a Panic Alarm is triggered, all emergency contacts receive your location instantly." },
        { claim: "Contacts can join as Responders without a paid subscription.", detail: "Non-subscriber contacts download the app, sign up as Responders via a link, and enter a 6-digit code to connect." },
        { claim: "Each contact's notification settings are fully customizable.", detail: "Choose which alerts each contact receives: Panic Alarm, MeetSafe updates, and Family Connectivity location sharing." }
      ]}
      relatedLinks={[
        { text: "Family Safety App", href: "/use-cases/family-safety-app" },
        { text: "MeetSafe Check-Ins", href: "/features/meetsafe-check-ins" },
        { text: "Emergency Contacts", href: "/features/emergency-contacts" },
        { text: "Family Plan Pricing", href: "/pricing" },
      ]}
    />
  );
}
