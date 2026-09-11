import {
  Activity,
  BellRing,
  CheckCircle2,
  ExternalLink,
  HeartPulse,
  MapPin,
  Mic2,
  Radio,
  ShieldCheck,
  Smartphone,
  Users,
  Video,
} from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

type WearableKind = "apple" | "samsung";

type ComparisonConfig = {
  deviceName: string;
  shortName: string;
  canonical: string;
  title: string;
  description: string;
  label: string;
  heroQuestion: string;
  heroAnswer: string;
  nativeSummary: string;
  nativeFacts: string[];
  nativeLimits: string[];
  mySentryDetail: string;
  mySentryFacts: string[];
  flowStart: string;
  nativeSourceLabel: string;
  nativeSourceHref: string;
  setupSourceLabel: string;
  setupSourceHref: string;
  comparisonRows: Array<{ topic: string; watch: string; mysentry: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

const appleConfig: ComparisonConfig = {
  deviceName: "Apple Watch",
  shortName: "Apple Watch",
  canonical: "https://mysentry.ai/compare/apple-watch-fall-detection-vs-mysentry",
  title: "Apple Watch Fall Detection vs MySentry",
  description:
    "See why Apple Watch owners connect MySentry for voice panic, wellness analysis, family alerts, live context, 24/7 monitoring, and emergency escalation.",
  label: "Apple Watch plus MySentry",
  heroQuestion: "Your Apple Watch can detect a fall. Who helps coordinate what happens next?",
  heroAnswer:
    "Keep Apple's native safety features on. Connect MySentry when you want eligible watch events, hands-free panic options, family contacts, permitted phone context, and 24/7 professional monitoring to work as one safety plan.",
  nativeSummary:
    "Apple Watch already provides useful safety tools. Apple says Fall Detection can show an alert after a hard fall and can contact emergency services and Medical ID emergency contacts after its documented immobility sequence. A wearer can also start Emergency SOS from the side button.",
  nativeFacts: [
    "Apple Watch can detect some hard falls, ask whether the wearer is okay, and contact emergency services after the documented no-response sequence.",
    "Emergency SOS can call local emergency services and notify Medical ID emergency contacts with location when its requirements are met.",
    "The watch gives the wearer a direct wrist-based way to call for help.",
  ],
  nativeLimits: [
    "Apple states that Apple Watch cannot detect all falls and that some high-impact activity may be detected as a fall.",
    "Automatic emergency calling requires the documented watch settings and an available supported satellite, cellular, or Wi-Fi Calling connection.",
    "A non-cellular Apple Watch may need its paired iPhone nearby for emergency calling.",
  ],
  mySentryDetail:
    "On a supported Apple Watch and iPhone setup, MySentry receives eligible Apple fall outcomes and starts its own configured Panic Alarm workflow. MySentry also analyzes supported wellness readings against a personal baseline, gives the wearer several ways to ask for help, and connects the event to family and eligible 24/7 professional monitoring.",
  mySentryFacts: [
    "A configured voice command can trigger the MySentry Panic Alarm when the wearer cannot reach the phone or watch.",
    "MySentry algorithms analyze supported wellness readings against a personalized baseline and can start a Panic Alarm for a verified critical reading.",
    "An active online Panic Alarm can share live location, phone battery level, and permitted phone audio or video when enabled.",
    "Configured family members and responders can receive alerts through MySentry on iOS or Android.",
    "The 24/7 monitoring team can review an eligible event and, after verification, contact emergency services, including 911, when appropriate.",
  ],
  flowStart: "Apple detects an eligible fall outcome, or the user starts MySentry by watch, phone, shake, supported button action, or configured voice command.",
  nativeSourceLabel: "Apple Support: Use Fall Detection with Apple Watch",
  nativeSourceHref: "https://support.apple.com/en-us/108896",
  setupSourceLabel: "Apple Support: Use Emergency SOS on your Apple Watch",
  setupSourceHref: "https://support.apple.com/en-us/108374",
  comparisonRows: [
    {
      topic: "Fall signal",
      watch: "Apple provides the native Fall Detection engine and its documented emergency sequence.",
      mysentry: "MySentry receives an eligible Apple fall outcome and connects it to the configured MySentry Panic Alarm workflow.",
    },
    {
      topic: "Ways to ask for help",
      watch: "The wearer can use Apple's fall alert or start Emergency SOS from the watch.",
      mysentry: "The wearer can trigger MySentry through supported watch and phone controls, phone shake, supported button actions, or a configured voice command.",
    },
    {
      topic: "Wellness signals",
      watch: "Apple Health records supported watch health information for permitted apps and services.",
      mysentry: "MySentry analyzes supported wellness readings against a personal baseline, checks rest state, and uses multiple readings before a critical panic workflow. This is wellness analysis, not a medical diagnosis.",
    },
    {
      topic: "Family network",
      watch: "Apple can notify Medical ID emergency contacts after an emergency call when its requirements are met.",
      mysentry: "A MySentry family can include iOS and Android members, with configured responders receiving alerts and authorized context through one safety workflow.",
    },
    {
      topic: "Incident context",
      watch: "Apple can share location with emergency services and emergency contacts during supported native emergency flows.",
      mysentry: "MySentry can share live location, phone battery level, and permitted phone audio or video during an eligible online Panic Alarm when enabled.",
    },
    {
      topic: "Professional response",
      watch: "Apple's native features can call emergency services directly under Apple's documented conditions.",
      mysentry: "Eligible alerts reach MySentry's 24/7 professional monitoring team. After verification, monitoring can contact emergency services, including 911, when appropriate.",
    },
  ],
  faqs: [
    {
      question: "Why add MySentry if Apple Watch already has Fall Detection and Emergency SOS?",
      answer:
        "Apple Watch provides the fall signal and native emergency actions. MySentry adds a connected workflow around that signal: hands-free panic options, supported wellness analysis, mixed-device family alerts, live location and permitted phone context, plus eligible 24/7 professional monitoring and verified escalation.",
    },
    {
      question: "Can I trigger MySentry if I cannot reach my phone or watch?",
      answer:
        "A configured voice command can trigger the MySentry Panic Alarm on a supported setup. This gives the wearer another way to ask for help when their hands are occupied or a device is out of reach. Voice behavior depends on the supported assistant, device state, permissions, connectivity, and setup.",
    },
    {
      question: "Can family members use Android if the wearer uses an iPhone and Apple Watch?",
      answer:
        "Yes. A MySentry family can include members and responders using iOS or Android. The wearer can use a supported Apple Watch and iPhone while configured family members receive MySentry alerts and authorized context on their supported phones.",
    },
    {
      question: "Does MySentry professional monitoring contact 911?",
      answer:
        "An eligible Panic Alarm alerts MySentry's 24/7 professional monitoring team. After the event is verified, monitoring can contact emergency services, including 911, when appropriate. Actual contact and response depend on the event, available context, account setup, connectivity, region, and service availability.",
    },
    {
      question: "Does Apple Watch detect every fall?",
      answer:
        "No. Apple states that Apple Watch cannot detect all falls and that some high-impact activity may be detected as a fall. Keep Apple's settings current and build a safety plan with more than one way to ask for help.",
    },
  ],
};

const samsungConfig: ComparisonConfig = {
  deviceName: "Samsung Galaxy Watch",
  shortName: "Samsung Galaxy Watch",
  canonical: "https://mysentry.ai/compare/samsung-galaxy-watch-vs-mysentry",
  title: "Samsung Galaxy Watch vs MySentry",
  description:
    "See why Galaxy Watch owners connect MySentry for voice panic, wellness analysis, family alerts, live context, 24/7 monitoring, and emergency escalation.",
  label: "Samsung Galaxy Watch plus MySentry",
  heroQuestion: "Your Galaxy Watch can send an SOS. Who keeps the whole safety plan connected?",
  heroAnswer:
    "Keep Samsung's native safety features on. Connect MySentry when you want supported watch events, hands-free panic options, family contacts, permitted phone context, and 24/7 professional monitoring to work as one safety plan.",
  nativeSummary:
    "Samsung Galaxy Watch already provides useful safety tools. Samsung says supported models can offer hard-fall detection, SOS messages, assigned emergency contacts, location sharing, and configured emergency calls. Available settings vary by watch, phone, provider, software, and location.",
  nativeFacts: [
    "Samsung says supported Galaxy Watch models can notify assigned emergency contacts after a detected hard fall.",
    "Samsung safety settings can include Emergency SOS, emergency calls, medical information, and location sharing.",
    "Supported models can start an SOS request through configured watch controls.",
  ],
  nativeLimits: [
    "Samsung says high-impact activities can sometimes register as a fall.",
    "Fall detection must be enabled and requires a supported watch, current software, emergency contacts, and the documented connection or service setup.",
    "Samsung states that the device, Samsung Health, and related software are not intended to diagnose, cure, mitigate, treat, or prevent disease or other conditions.",
  ],
  mySentryDetail:
    "On a supported Samsung Galaxy Watch and Android setup, MySentry uses supported Samsung Health APIs and wearable signals for its configured fall and wellness workflows. MySentry adds multiple panic options, family and responder coordination, permitted incident context, and eligible 24/7 professional monitoring.",
  mySentryFacts: [
    "A configured voice command can trigger the MySentry Panic Alarm when the wearer cannot reach the phone or watch.",
    "MySentry algorithms analyze supported wellness readings against a personalized baseline and can start a Panic Alarm for a verified critical reading.",
    "An active online Panic Alarm can share live location, phone battery level, and permitted phone audio or video when enabled.",
    "Configured family members and responders can receive alerts through MySentry on iOS or Android.",
    "The 24/7 monitoring team can review an eligible event and, after verification, contact emergency services, including 911, when appropriate.",
  ],
  flowStart: "A supported Samsung fall event or wellness event qualifies, or the user starts MySentry by watch, phone, shake, supported button action, or configured voice command.",
  nativeSourceLabel: "Samsung Support: Use the Detect fall feature on your Samsung smart watch",
  nativeSourceHref: "https://www.samsung.com/us/support/answer/ANS10003423/",
  setupSourceLabel: "Samsung Support: Use your Samsung smart watch in an emergency situation",
  setupSourceHref: "https://www.samsung.com/us/support/answer/ANS10002904/",
  comparisonRows: [
    {
      topic: "Fall signal",
      watch: "Samsung provides native hard-fall settings on supported watch models.",
      mysentry: "On supported Samsung configurations, MySentry uses watch motion signals and post-impact checks to connect a qualifying event to its Panic Alarm workflow.",
    },
    {
      topic: "Ways to ask for help",
      watch: "The wearer can start Samsung's configured SOS request from supported watch controls.",
      mysentry: "The wearer can trigger MySentry through supported watch and phone controls, phone shake, supported button actions, or a configured voice command.",
    },
    {
      topic: "Wellness signals",
      watch: "Samsung Health and supported watch sensors collect available wellness readings.",
      mysentry: "MySentry analyzes supported wellness readings against a personal baseline, checks rest state, and uses multiple readings before a critical panic workflow. This is wellness analysis, not a medical diagnosis.",
    },
    {
      topic: "Family network",
      watch: "Samsung can notify assigned emergency contacts through configured native SOS and fall settings.",
      mysentry: "A MySentry family can include iOS and Android members, with configured responders receiving alerts and authorized context through one safety workflow.",
    },
    {
      topic: "Incident context",
      watch: "Samsung can send location and configured SOS information to assigned contacts on supported setups.",
      mysentry: "MySentry can share live location, phone battery level, and permitted phone audio or video during an eligible online Panic Alarm when enabled.",
    },
    {
      topic: "Professional response",
      watch: "Samsung's native settings can place a configured emergency call or contact assigned people, depending on the model and setup.",
      mysentry: "Eligible alerts reach MySentry's 24/7 professional monitoring team. After verification, monitoring can contact emergency services, including 911, when appropriate.",
    },
  ],
  faqs: [
    {
      question: "Why add MySentry if Galaxy Watch already has fall detection and SOS?",
      answer:
        "Galaxy Watch provides native fall and SOS tools. MySentry adds a connected workflow around supported events: hands-free panic options, supported wellness analysis, mixed-device family alerts, live location and permitted phone context, plus eligible 24/7 professional monitoring and verified escalation.",
    },
    {
      question: "Can I trigger MySentry if I cannot reach my phone or watch?",
      answer:
        "A configured voice command can trigger the MySentry Panic Alarm on a supported setup. This gives the wearer another way to ask for help when their hands are occupied or a device is out of reach. Voice behavior depends on the supported assistant, device state, permissions, connectivity, and setup.",
    },
    {
      question: "Can family members use iPhone if the wearer uses Android and Galaxy Watch?",
      answer:
        "Yes. A MySentry family can include members and responders using iOS or Android. The wearer can use a supported Samsung Galaxy Watch and Android phone while configured family members receive MySentry alerts and authorized context on their supported phones.",
    },
    {
      question: "Does MySentry professional monitoring contact 911?",
      answer:
        "An eligible Panic Alarm alerts MySentry's 24/7 professional monitoring team. After the event is verified, monitoring can contact emergency services, including 911, when appropriate. Actual contact and response depend on the event, available context, account setup, connectivity, region, and service availability.",
    },
    {
      question: "Does Samsung Galaxy Watch detect every fall?",
      answer:
        "Samsung notes that high-impact activity can sometimes register as a fall. Keep Samsung's settings current and build a safety plan with more than one way to ask for help.",
    },
  ],
};

const responseSteps = [
  { icon: BellRing, title: "A signal starts the workflow", detail: "" },
  { icon: ShieldCheck, title: "MySentry opens the Panic Alarm workflow", detail: "The wearer can confirm safety, ask for help, or let the configured no-response workflow continue." },
  { icon: MapPin, title: "The event carries useful context", detail: "MySentry can share live location, phone battery level, and permitted phone audio or video when enabled and available." },
  { icon: Users, title: "Family and monitoring are alerted", detail: "Configured contacts and the eligible 24/7 professional monitoring team receive the event through the same MySentry workflow." },
  { icon: Radio, title: "Verified escalation can reach emergency services", detail: "After verification, monitoring can contact emergency services, including 911, when appropriate." },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map(item => (
        <li key={item} className="flex gap-3 text-[#1f2937]">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0b6848]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function WearableSafetyComparison({ kind }: { kind: WearableKind }) {
  const config = kind === "apple" ? appleConfig : samsungConfig;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <Layout>
      <SEO title={config.title} description={config.description} canonical={config.canonical} schema={faqSchema} />
      <main className="bg-[#f8fbfa] pb-24 pt-32 text-[#0f172a]">
        <section className="container max-w-6xl">
          <div className="overflow-hidden rounded-[2rem] border border-[#0b6848]/15 bg-white shadow-sm">
            <div className="grid gap-10 px-7 py-10 md:px-12 md:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#007bc2]">{config.label}</p>
                <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] text-[#0b2f4f] md:text-6xl">{config.heroQuestion}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#334155]">{config.heroAnswer}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#comparison" className="inline-flex items-center justify-center rounded-xl bg-[#0b6848] px-6 py-3 font-bold text-white transition-colors hover:bg-[#084f38] focus:outline-none focus:ring-2 focus:ring-[#007bc2] focus:ring-offset-2">
                    See what MySentry adds
                  </a>
                  <Link href="/pricing#pricing-plans" className="inline-flex items-center justify-center rounded-xl border-2 border-[#007bc2] bg-white px-6 py-3 font-bold text-[#005f91] transition-colors hover:bg-[#e8f5fb] focus:outline-none focus:ring-2 focus:ring-[#007bc2] focus:ring-offset-2">
                    Review plans and eligibility
                  </Link>
                </div>
              </div>
              <aside className="rounded-3xl border border-[#007bc2]/20 bg-[#e8f5fb] p-6">
                <ShieldCheck className="h-8 w-8 text-[#007bc2]" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-bold text-[#0b2f4f]">Keep the watch. Connect the response.</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">{config.shortName} provides valuable wrist-based safety features. MySentry connects supported events to family, permitted incident context, and eligible 24/7 professional monitoring.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="container mt-12 max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#007bc2]">Start with the watch</p>
              <h2 className="mt-3 text-3xl font-bold text-[#0b2f4f]">What {config.shortName} already does</h2>
              <p className="mt-5 leading-relaxed text-[#334155]">{config.nativeSummary}</p>
              <BulletList items={config.nativeFacts} />
              <a href={config.nativeSourceHref} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#0b6848]">
                {config.nativeSourceLabel} <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>

            <article className="rounded-3xl border border-[#0b6848]/20 bg-[#edf8f1] p-7 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0b6848]">Connect the wider safety plan</p>
              <h2 className="mt-3 text-3xl font-bold text-[#0b2f4f]">What MySentry adds</h2>
              <p className="mt-5 leading-relaxed text-[#1f2937]">{config.mySentryDetail}</p>
              <BulletList items={config.mySentryFacts} />
              <Link href={`/integrations/${kind === "apple" ? "apple-watch" : "samsung-galaxy-watch"}`} className="mt-6 inline-flex items-center gap-2 font-bold text-[#0b6848] underline decoration-2 underline-offset-4 hover:text-[#005f91]">
                Review MySentry {config.shortName} setup <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        <section className="container mt-12 max-w-6xl">
          <div className="rounded-3xl bg-[#0b2f4f] p-7 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#b7edff]">From signal to coordinated response</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white">A watch event becomes one connected MySentry workflow</h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-5">
              {responseSteps.map((step, index) => {
                const Icon = step.icon;
                const detail = index === 0 ? config.flowStart : step.detail;
                return (
                  <article key={step.title} className="rounded-2xl border border-white/15 bg-white/10 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <Icon className="h-6 w-6 text-[#b7edff]" aria-hidden="true" />
                      <span className="text-sm font-bold text-[#b7edff]">0{index + 1}</span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#e5edf5]">{detail}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="comparison" className="container mt-12 max-w-6xl scroll-mt-28">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#007bc2]">Side-by-side guide</p>
            <h2 className="mt-3 text-3xl font-bold text-[#0b2f4f]">Why use MySentry with {config.shortName}?</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#334155]">The watch remains an important safety tool. MySentry adds the people, context, wellness workflow, and professional monitoring that help the event move beyond one device.</p>
            <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[760px] w-full border-collapse text-left">
                <thead className="bg-[#0b2f4f] text-white">
                  <tr>
                    <th className="px-5 py-4 text-sm font-bold">Safety need</th>
                    <th className="px-5 py-4 text-sm font-bold">{config.shortName}</th>
                    <th className="px-5 py-4 text-sm font-bold">Connected with MySentry</th>
                  </tr>
                </thead>
                <tbody>
                  {config.comparisonRows.map((row, index) => (
                    <tr key={row.topic} className={index % 2 === 0 ? "bg-white" : "bg-[#f8fbfa]"}>
                      <th scope="row" className="border-t border-slate-200 px-5 py-5 align-top text-sm font-bold text-[#0b2f4f]">{row.topic}</th>
                      <td className="border-t border-slate-200 px-5 py-5 align-top text-sm leading-relaxed text-[#334155]">{row.watch}</td>
                      <td className="border-t border-slate-200 px-5 py-5 align-top text-sm leading-relaxed text-[#334155]">{row.mysentry}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="container mt-12 max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-3xl bg-[#0b6848] p-7 text-white md:p-8">
              <Smartphone className="h-8 w-8 text-[#d9f5e4]" aria-hidden="true" />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-[#d9f5e4]">One family, different devices</p>
              <h2 className="mt-3 text-3xl font-bold text-white">iOS and Android can stay in the same plan</h2>
              <p className="mt-5 leading-relaxed text-white">The wearer can use a supported Apple Watch or Samsung Galaxy Watch. Family members and responders can use supported iOS or Android phones. MySentry connects configured alerts and authorized context across the household.</p>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-7 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#007bc2]">More than fall detection</p>
              <h2 className="mt-3 text-3xl font-bold text-[#0b2f4f]">Help can start even when the watch does not detect a fall</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  { icon: Mic2, title: "Voice-enabled panic", text: "Use a configured voice command when the phone or watch is out of reach." },
                  { icon: HeartPulse, title: "Wellness analysis", text: "MySentry algorithms compare supported readings with a personal baseline and verify critical patterns before a panic workflow." },
                  { icon: Video, title: "Permitted live context", text: "Share live location and permitted phone audio or video during an eligible online Panic Alarm when enabled." },
                  { icon: Activity, title: "Professional monitoring", text: "Eligible alerts reach a 24/7 team that can verify the event and contact emergency services when appropriate." },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl bg-[#f1f7f4] p-5">
                    <Icon className="h-6 w-6 text-[#0b6848]" aria-hidden="true" />
                    <h3 className="mt-3 font-bold text-[#0b2f4f]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#334155]">{text}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="container mt-12 max-w-6xl">
          <div className="rounded-3xl border border-[#d4e6dc] bg-white p-7 md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#007bc2]">Set it up before you need it</p>
              <h2 className="mt-3 text-3xl font-bold text-[#0b2f4f]">Four steps to connect the plan</h2>
            </div>
            <ol className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["1", "Keep native safety features on", `Follow ${config.shortName}'s current instructions for fall detection, SOS, emergency contacts, and calling options.`],
                ["2", "Connect MySentry", "Install MySentry on the supported phone and watch, then enable the features you want to use."],
                ["3", "Add your people", "Choose family members and responders, confirm their roles, and agree on the information they may receive."],
                ["4", "Test every trigger", "Practice the watch, phone, and voice panic options. Confirm permissions, connectivity, monitoring eligibility, and backup plans."],
              ].map(([number, title, text]) => (
                <li key={number} className="rounded-2xl border border-slate-200 bg-[#f8fbfa] p-5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b6848] font-bold text-white">{number}</span>
                  <h3 className="mt-4 font-bold text-[#0b2f4f]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#334155]">{text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-7 border-l-4 border-[#007bc2] pl-5 text-sm leading-relaxed text-[#475569]">Features depend on supported devices, app state, permissions, connectivity, plan, region, and service availability. If you can call 911 directly during an immediate emergency, do so.</p>
          </div>
        </section>

        <section className="container mt-12 max-w-6xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#007bc2]">Common questions</p>
            <h2 className="mt-3 text-3xl font-bold text-[#0b2f4f]">{config.shortName} and MySentry FAQs</h2>
            <div className="mt-6 divide-y divide-slate-200">
              {config.faqs.map(faq => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[#0b2f4f] marker:content-none">{faq.question}</summary>
                  <p className="mt-3 max-w-4xl leading-relaxed text-[#334155]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="container mt-12 max-w-6xl">
          <div className="rounded-3xl border border-[#007bc2]/20 bg-[#e8f5fb] p-7 md:p-8">
            <h2 className="text-xl font-bold text-[#0b2f4f]">Sources and current setup checks</h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#334155]">Watch features and MySentry compatibility can change. Read the current manufacturer instructions and confirm your MySentry device, plan, region, and monitoring eligibility before enrolling.</p>
            <div className="mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
              <a href={config.nativeSourceHref} target="_blank" rel="noreferrer" className="font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#0b6848]">[1] {config.nativeSourceLabel}</a>
              <a href={config.setupSourceHref} target="_blank" rel="noreferrer" className="font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#0b6848]">[2] {config.setupSourceLabel}</a>
              <Link href={`/integrations/${kind === "apple" ? "apple-watch" : "samsung-galaxy-watch"}`} className="font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#0b6848]">[3] MySentry {config.shortName} setup</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
