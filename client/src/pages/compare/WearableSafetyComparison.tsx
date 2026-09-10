import { CheckCircle2, ExternalLink, Info, ShieldCheck } from "lucide-react";
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
  mysentryDetail: string;
  mysentryFacts: string[];
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
    "Compare Apple Watch Fall Detection and Emergency SOS with MySentry. Review alert steps, trusted contacts, setup requirements, and limits before choosing.",
  label: "Apple Watch comparison",
  heroQuestion: "Can an Apple Watch cover your fall and personal-safety plan?",
  heroAnswer:
    "Apple Watch has useful native safety features. MySentry may add a separate eligible safety workflow on a supported Apple Watch and iPhone setup. The right choice depends on what you need, what is configured, and what you can confirm before relying on either service.",
  nativeSummary:
    "Apple says Fall Detection can show an alert after a hard fall on supported Apple Watch models. If the wearer remains immobile for about a minute, the watch begins a countdown and can contact emergency services and emergency contacts. Emergency SOS can also be started by pressing and holding the side button.",
  nativeFacts: [
    "Apple Watch Fall Detection is available on Apple Watch SE or later, Series 4 or later, and Ultra models, subject to Apple requirements.",
    "After an emergency call, Apple Watch can send emergency contacts a message with the wearer's location, subject to settings and service availability.",
    "A wearer can use the side button to access Emergency SOS and begin an emergency call.",
  ],
  nativeLimits: [
    "Apple states that Apple Watch cannot detect all falls and that some high-impact activity may be detected as a fall.",
    "Fall Detection and Emergency SOS depend on a compatible setup, settings, available satellite, cellular, or Wi-Fi calling connection, and regional support.",
    "A non-cellular watch may require a nearby paired iPhone for emergency calling.",
  ],
  mysentryDetail:
    "MySentry describes its Apple Watch experience as a supplemental service that works with Apple's native fall event on a supported configuration. MySentry may then begin a separately configured alert or eligible monitoring workflow. A user may also be able to start a MySentry panic alert from a supported smartwatch. Confirm current device, watchOS, iPhone, plan, permission, connectivity, and regional requirements before use.",
  mysentryFacts: [
    "MySentry does not replace Apple's own Fall Detection or Emergency SOS features.",
    "MySentry may use a supported device event or a user-started alert to begin an eligible workflow.",
    "Permitted context, contact attempts, monitoring, and any escalation depend on the account configuration and live conditions.",
  ],
  nativeSourceLabel: "Apple Support: Use Fall Detection with Apple Watch",
  nativeSourceHref: "https://support.apple.com/en-us/108896",
  setupSourceLabel: "Apple Support: Use Emergency SOS on your Apple Watch",
  setupSourceHref: "https://support.apple.com/en-us/108374",
  comparisonRows: [
    {
      topic: "Hard-fall feature",
      watch: "Apple's native Fall Detection can show a fall alert and may contact emergency services after the documented inactivity sequence.",
      mysentry: "MySentry may use a supported Apple fall event to begin its own configured workflow. It does not provide a separate Apple Watch fall-detection engine.",
    },
    {
      topic: "Urgent user action",
      watch: "Emergency SOS can be started from the watch side button.",
      mysentry: "A user may be able to start a MySentry panic alert from a supported smartwatch configuration.",
    },
    {
      topic: "Trusted contacts",
      watch: "Apple can message Medical ID emergency contacts after an emergency call, subject to settings and messaging availability.",
      mysentry: "Selected MySentry contacts may receive configured alert notifications or permitted context, subject to settings and delivery conditions.",
    },
    {
      topic: "Service boundary",
      watch: "Apple provides device safety features under Apple's terms, settings, device support, and service availability.",
      mysentry: "MySentry is a supplemental personal safety and wellness service. It is not a medical device and does not replace calling 911 or local emergency services.",
    },
  ],
  faqs: [
    {
      question: "Does Apple Watch detect every fall?",
      answer:
        "No. Apple states that Apple Watch cannot detect all falls, and some high-impact activity may be detected as a fall. A fall-detection feature should be part of a wider plan, not the only plan.",
    },
    {
      question: "Can Apple Watch notify family after a fall?",
      answer:
        "Apple says that after an emergency call, Apple Watch can message the emergency contacts in the wearer's Medical ID with location. Settings, the Messages app, connection, and regional conditions can affect what happens.",
    },
    {
      question: "Can I start a MySentry panic alert from Apple Watch?",
      answer:
        "MySentry says a panic alarm may be started from a supported smartwatch. Confirm the current Apple Watch, iPhone, watchOS, plan, permissions, app state, connectivity, and regional eligibility before relying on that option.",
    },
    {
      question: "Is MySentry a replacement for Apple Emergency SOS or 911?",
      answer:
        "No. MySentry is supplemental. It does not replace Apple Emergency SOS, 911, local emergency services, or medical care. Detection, delivery, contact, escalation, response, dispatch, and outcomes are not guaranteed.",
    },
  ],
};

const samsungConfig: ComparisonConfig = {
  deviceName: "Samsung Galaxy Watch",
  shortName: "Samsung Galaxy Watch",
  canonical: "https://mysentry.ai/compare/samsung-galaxy-watch-vs-mysentry",
  title: "Samsung Galaxy Watch vs MySentry",
  description:
    "Compare Samsung Galaxy Watch hard fall detection and Emergency SOS with MySentry. Review alert steps, trusted contacts, setup requirements, and limits.",
  label: "Samsung Galaxy Watch comparison",
  heroQuestion: "Can a Samsung Galaxy Watch cover your fall and personal-safety plan?",
  heroAnswer:
    "A Galaxy Watch can offer configurable safety features. MySentry may add a separate eligible safety workflow on a supported Samsung setup. Review the differences before deciding what role each service can play in your plan.",
  nativeSummary:
    "Samsung says compatible Galaxy Watch models can offer hard-fall detection and Emergency SOS tools. A user can configure emergency contacts, calls, information sharing, and fall-detection behavior through Galaxy Wearable settings, with options that can vary by model, phone, provider, software, and location.",
  nativeFacts: [
    "Samsung says its hard-fall feature can notify emergency contacts and may be configured to make an emergency call.",
    "Samsung says Galaxy Watch safety settings can include medical information, emergency contacts, Emergency SOS, and hard-fall detection on supported models.",
    "Samsung documents that some models can start an SOS request through the watch Home or Power key when configured.",
  ],
  nativeLimits: [
    "Samsung says high-impact sports can sometimes register as a fall.",
    "Samsung says available screens and settings can vary by provider, phone, or watch.",
    "Samsung states that the device, Samsung Health, and related software are not intended to diagnose, cure, mitigate, treat, or prevent disease or other conditions.",
  ],
  mysentryDetail:
    "MySentry describes a Samsung Galaxy Watch workflow that may use supported Samsung Health APIs and wearable sensors on a compatible configuration. A supported event or a user-started alert may begin a separate configured MySentry workflow. Confirm the current watch, paired phone, software, plan, permissions, connectivity, app state, region, and service eligibility before use.",
  mysentryFacts: [
    "MySentry does not replace Samsung's own configured Emergency SOS or hard-fall features.",
    "MySentry may use a supported device event or user-started alert to begin an eligible workflow.",
    "Any permitted context, monitoring, contact attempt, escalation, or outcome depends on the live configuration and cannot be guaranteed.",
  ],
  nativeSourceLabel: "Samsung Support: Use the Detect fall feature on your Samsung smart watch",
  nativeSourceHref: "https://www.samsung.com/us/support/answer/ANS10003423/",
  setupSourceLabel: "Samsung Support: Use your Samsung smart watch in an emergency situation",
  setupSourceHref: "https://www.samsung.com/us/support/answer/ANS10002904/",
  comparisonRows: [
    {
      topic: "Hard-fall feature",
      watch: "Samsung documents configurable hard-fall detection on compatible models, with available options varying by device and setup.",
      mysentry: "MySentry may use supported Samsung Health APIs and wearable signals to begin a separately configured workflow on a compatible setup.",
    },
    {
      topic: "Urgent user action",
      watch: "Emergency SOS can be configured in Galaxy Wearable, and some models support an SOS request through the Home or Power key.",
      mysentry: "A user may be able to start a MySentry panic alert from a supported smartwatch configuration.",
    },
    {
      topic: "Trusted contacts",
      watch: "Samsung documents SOS messages, calls, and location information for assigned contacts when the relevant settings are configured.",
      mysentry: "Selected MySentry contacts may receive configured alert notifications or permitted context, subject to settings and delivery conditions.",
    },
    {
      topic: "Service boundary",
      watch: "Samsung provides device safety features under its terms, settings, model support, carrier or provider conditions, and service availability.",
      mysentry: "MySentry is a supplemental personal safety and wellness service. It is not a medical device and does not replace calling 911 or local emergency services.",
    },
  ],
  faqs: [
    {
      question: "Does Samsung Galaxy Watch detect every fall?",
      answer:
        "No. Samsung cautions that high-impact activity can register as a fall. The available setting, alert sequence, and emergency options also depend on the watch, phone, provider, software, and configuration.",
    },
    {
      question: "Can Galaxy Watch notify family during an emergency?",
      answer:
        "Samsung documents SOS messages, calls, and location sharing for assigned emergency contacts when the applicable options are configured. Availability and delivery depend on the device and conditions.",
    },
    {
      question: "Can I start a MySentry panic alert from Samsung Galaxy Watch?",
      answer:
        "MySentry says a panic alarm may be started from a supported smartwatch. Confirm current Galaxy Watch, phone, software, plan, permissions, app state, connectivity, and regional eligibility before relying on that option.",
    },
    {
      question: "Is MySentry a replacement for Samsung Emergency SOS or 911?",
      answer:
        "No. MySentry is supplemental. It does not replace Samsung Emergency SOS, 911, local emergency services, or medical care. Detection, delivery, contact, escalation, response, dispatch, and outcomes are not guaranteed.",
    },
  ],
};

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
      <SEO
        title={config.title}
        description={config.description}
        canonical={config.canonical}
        schema={faqSchema}
      />
      <main className="bg-[#f8fbfa] pb-24 pt-32 text-[#0f172a]">
        <section className="container max-w-6xl">
          <div className="overflow-hidden rounded-[2rem] border border-[#0b6848]/15 bg-white shadow-sm">
            <div className="grid gap-10 px-7 py-10 md:px-12 md:py-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#007bc2]">{config.label}</p>
                <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] text-[#0b2f4f] md:text-6xl">{config.heroQuestion}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#334155]">{config.heroAnswer}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#comparison" className="inline-flex items-center justify-center rounded-xl bg-[#0b6848] px-6 py-3 font-bold text-white transition-colors hover:bg-[#084f38] focus:outline-none focus:ring-2 focus:ring-[#007bc2] focus:ring-offset-2">
                    Compare the options
                  </a>
                  <Link href="/pricing#pricing-plans" className="inline-flex items-center justify-center rounded-xl border-2 border-[#007bc2] bg-white px-6 py-3 font-bold text-[#005f91] transition-colors hover:bg-[#e8f5fb] focus:outline-none focus:ring-2 focus:ring-[#007bc2] focus:ring-offset-2">
                    Review plans and eligibility
                  </Link>
                </div>
              </div>
              <aside className="rounded-3xl border border-[#007bc2]/20 bg-[#e8f5fb] p-6">
                <ShieldCheck className="h-8 w-8 text-[#007bc2]" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-bold text-[#0b2f4f]">A clear role for each service</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#334155]">{config.shortName} can offer its own device safety features. MySentry may provide an additional safety workflow where the device, account, permissions, connection, plan, region, and service are supported.</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="container mt-12 max-w-6xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#007bc2]">Start with the watch</p>
              <h2 className="mt-3 text-3xl font-bold text-[#0b2f4f]">What {config.shortName} can do on its own</h2>
              <p className="mt-5 leading-relaxed text-[#334155]">{config.nativeSummary}</p>
              <BulletList items={config.nativeFacts} />
              <a href={config.nativeSourceHref} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#0b6848]">
                {config.nativeSourceLabel} <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>

            <article className="rounded-3xl border border-[#0b6848]/20 bg-[#edf8f1] p-7 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#0b6848]">Add MySentry only where it fits</p>
              <h2 className="mt-3 text-3xl font-bold text-[#0b2f4f]">What MySentry may add</h2>
              <p className="mt-5 leading-relaxed text-[#1f2937]">{config.mysentryDetail}</p>
              <BulletList items={config.mysentryFacts} />
              <Link href={`/integrations/${kind === "apple" ? "apple-watch" : "samsung-galaxy-watch"}`} className="mt-6 inline-flex items-center gap-2 font-bold text-[#0b6848] underline decoration-2 underline-offset-4 hover:text-[#005f91]">
                Review MySentry {config.shortName} eligibility <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          </div>
        </section>

        <section className="container mt-12 max-w-6xl">
          <div className="rounded-3xl border border-[#d4e6dc] bg-white p-7 md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#007bc2]">Read the limits first</p>
              <h2 className="mt-3 text-3xl font-bold text-[#0b2f4f]">A feature is only as useful as its setup and conditions</h2>
              <p className="mt-4 leading-relaxed text-[#334155]">A watch can be a useful part of a safety plan. It should not be treated as a guarantee that a fall will be detected, a message will be delivered, someone will be reached, or help will arrive.</p>
            </div>
            <BulletList items={config.nativeLimits} />
            <div className="mt-6 rounded-2xl border border-[#f0c36a]/55 bg-[#fff9eb] p-5">
              <div className="flex gap-3">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#8a5200]" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-[#4a3106]">MySentry is supplemental personal safety and wellness support. It is not a medical device or a replacement for calling 911 or local emergency services. Detection, delivery, contact, escalation, response, dispatch, prevention, and outcomes are not guaranteed.</p>
              </div>
            </div>
            <a href={config.setupSourceHref} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#0b6848]">
              {config.setupSourceLabel} <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <section id="comparison" className="container mt-12 max-w-6xl scroll-mt-28">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#007bc2]">Side-by-side guide</p>
            <h2 className="mt-3 text-3xl font-bold text-[#0b2f4f]">{config.shortName} and MySentry are not the same service</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[#334155]">The table describes the different roles each can play. It does not promise that a feature will be available or work in every situation.</p>
            <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[720px] w-full border-collapse text-left">
                <thead className="bg-[#0b2f4f] text-white">
                  <tr>
                    <th className="px-5 py-4 text-sm font-bold">Topic</th>
                    <th className="px-5 py-4 text-sm font-bold">{config.shortName}</th>
                    <th className="px-5 py-4 text-sm font-bold">MySentry</th>
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
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="rounded-3xl bg-[#0b6848] p-7 text-white md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#d9f5e4]">A practical plan</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Set up the watch before you need it</h2>
              <ol className="mt-6 space-y-5 text-white">
                <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white font-bold text-[#0b6848]">1</span><span><strong>Turn on the native safety features.</strong> Review the device maker's current instructions and add emergency contacts where available.</span></li>
                <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white font-bold text-[#0b6848]">2</span><span><strong>Check the conditions.</strong> Confirm model support, software, connection, permissions, emergency-contact information, and regional availability.</span></li>
                <li className="flex gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white font-bold text-[#0b6848]">3</span><span><strong>Decide whether MySentry belongs in the plan.</strong> Review current eligibility and configure only the MySentry features you choose.</span></li>
              </ol>
            </article>
            <article className="rounded-3xl border border-slate-200 bg-white p-7 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#007bc2]">For a family decision</p>
              <h2 className="mt-3 text-3xl font-bold text-[#0b2f4f]">Ask the person who will wear the watch</h2>
              <p className="mt-5 leading-relaxed text-[#334155]">A plan works better when the wearer understands it. Talk through who should be listed as an emergency contact, what sharing they are comfortable with, how the watch is charged, and how they would ask for help if a device feature is unavailable.</p>
              <Link href="/use-cases/medical-alert-app-for-seniors" className="mt-7 inline-flex items-center justify-center rounded-xl border-2 border-[#007bc2] bg-white px-6 py-3 font-bold text-[#005f91] transition-colors hover:bg-[#e8f5fb] focus:outline-none focus:ring-2 focus:ring-[#007bc2] focus:ring-offset-2">
                Explore senior safety planning
              </Link>
            </article>
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
            <h2 className="text-xl font-bold text-[#0b2f4f]">Sources and current-product checks</h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#334155]">Watch features and availability can change. Read the current manufacturer instructions, then confirm MySentry eligibility before enrolling or relying on any workflow.</p>
            <div className="mt-5 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
              <a href={config.nativeSourceHref} target="_blank" rel="noreferrer" className="font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#0b6848]">[1] {config.nativeSourceLabel}</a>
              <a href={config.setupSourceHref} target="_blank" rel="noreferrer" className="font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#0b6848]">[2] {config.setupSourceLabel}</a>
              <Link href={`/integrations/${kind === "apple" ? "apple-watch" : "samsung-galaxy-watch"}`} className="font-bold text-[#005f91] underline decoration-2 underline-offset-4 hover:text-[#0b6848]">[3] MySentry {config.shortName} eligibility</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
