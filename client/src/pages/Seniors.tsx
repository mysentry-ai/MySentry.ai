import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  HeartHandshake,
  Home,
  LockKeyhole,
  ShieldCheck,
  Smartphone,
  Users,
  Watch,
} from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is MySentry only for family members buying for an older adult?",
    answer: "No. An older adult can review and choose MySentry for themselves. A family member, caregiver, friend, neighbor, or other trusted person may also help compare options when the older adult wants that support.",
  },
  {
    question: "Does MySentry continuously track an older adult?",
    answer: "MySentry does not describe unrestricted continuous family tracking or continuous access to private wellness information. Supported sharing follows the selected feature, permissions, settings, and active alert workflow.",
  },
  {
    question: "Does MySentry detect every fall?",
    answer: "No. Supported-device detection can miss an event or activate when no emergency exists. It depends on eligible hardware, how it is carried or worn, app state, settings, permissions, connectivity, and event conditions.",
  },
  {
    question: "Does MySentry replace 911, medical care, or in-home support?",
    answer: "No. MySentry is supplemental. It does not replace emergency services, clinical care, prescribed devices, home modifications, transportation, supervision, or professional and community support.",
  },
  {
    question: "Should we choose an individual or family plan?",
    answer: "Choose based on who needs a separate license, who should be a trusted contact, which devices are eligible, and how the household wants to coordinate. Review the pricing page for current plan terms, license totals, billing options, and eligibility.",
  },
];

const featureCards = [
  {
    icon: Smartphone,
    title: "User-activated Panic Alarm",
    description: "An eligible user may start the configured alert workflow from an available phone or supported control when able.",
  },
  {
    icon: ClipboardCheck,
    title: "Safety Checks",
    description: "A timed check-in can support a planned walk, appointment, errand, or other activity when the user chooses to schedule it.",
  },
  {
    icon: Watch,
    title: "Supported-device events",
    description: "Eligible device configurations may detect certain events, but detection is not guaranteed and should never be the only plan.",
  },
  {
    icon: Users,
    title: "Trusted-contact coordination",
    description: "Selected people may receive supported notifications or permitted context according to the user's settings and the active workflow.",
  },
];

export default function Seniors() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <Layout>
      <SEO schema={faqSchema} />

      <main className="overflow-hidden bg-white text-slate-900">
        <section className="relative bg-gradient-to-br from-[#eaf5ef] via-white to-[#e7f2f8] pb-20 pt-32 lg:pb-28 lg:pt-40">
          <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#0b6848]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#007bc2]/10 blur-3xl" />
          <div className="container relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006a9c]">Personal safety for older adults</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight text-[#0b2f4f] sm:text-5xl lg:text-[55px]">
                Safety support that respects independence and choice.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
                MySentry can add user-activated alerts, Safety Checks, eligible supported-device events, trusted contacts, and professional monitoring options to a broader plan for living independently.
              </p>
              <p className="mt-5 max-w-2xl border-l-4 border-[#007bc2] pl-5 leading-relaxed text-slate-600">
                The older adult stays at the center of the decision. Family support should follow consent, agreed roles, and the person's own goals, not constant surveillance.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/use-cases/medical-alert-app-for-seniors" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0b6848] px-7 py-3 font-bold text-white shadow-lg shadow-[#0b6848]/15 transition hover:bg-[#084f38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                  Open the Senior Decision Guide
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0b6848] bg-white px-7 py-3 font-bold text-[#0b6848] transition hover:bg-[#edf8f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                  Compare Plans
                </Link>
                <Link href="/guides/aging-in-place-checklist" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#004F7B] bg-white px-7 py-3 font-bold text-[#004F7B] transition hover:bg-[#eef7fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                  Aging in Place Checklist
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#0b6848]/15 to-[#007bc2]/15 blur-2xl" />
              <img
                src="/images/happy-senior-watch.jpg"
                alt="Older adult using a smartwatch while staying active and independent"
                className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl shadow-[#0b2f4f]/15"
                width="1200"
                height="900"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-16">
          <div className="container max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">Direct answer</p>
            <h2 className="mt-4 text-3xl font-bold text-[#0b2f4f]">What MySentry can add to an aging-in-place plan</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              MySentry is a supplemental smartphone-based personal-safety and wellness service. It can help an eligible older adult start an alert, schedule a check-in, choose trusted contacts, and use supported-device features. It does not replace emergency services, a prescribed medical device, home modifications, clinical care, transportation, supervision, or local aging and caregiver resources.
            </p>
          </div>
        </section>

        <section className="bg-[#f5faf7] py-20 lg:py-28">
          <div className="container max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b6848]">Start with the life you want</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl lg:text-5xl">
                Independence works best with a plan everyone understands.
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { icon: Home, title: "Support the person's routine", description: "Choose tools that fit how the older adult actually uses a phone, wearable, home, car, and community rather than forcing a new routine that will not last." },
                { icon: LockKeyhole, title: "Agree on privacy first", description: "Decide what may be shared, with whom, and during which supported workflow. Family concern does not create a right to unrestricted location or wellness access." },
                { icon: ShieldCheck, title: "Keep more than one way to get help", description: "Use direct emergency calls, local contacts, home-safety measures, healthcare, transportation, and community resources alongside any app-based feature." },
              ].map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e4f1f7] text-[#006a9c]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0b2f4f]">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="container max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">Two respectful decision paths</p>
              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl lg:text-5xl">
                Choose for yourself, or choose together.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-700">
                Adult daughters are an important part of many families, but they are not the only buyers or caregivers. Adult sons, spouses, relatives, friends, neighbors, and other trusted people may also help when the older adult wants them involved.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article className="rounded-[2rem] bg-[#0d3028] p-8 text-white shadow-xl sm:p-10">
                <Smartphone className="h-10 w-10 text-[#b7edff]" aria-hidden="true" />
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#b7edff]">Choosing for myself</p>
                <h3 className="mt-3 text-3xl font-bold">Keep control of the setup.</h3>
                <div className="mt-6 space-y-4">
                  {["Confirm that your phone and optional wearable are eligible.", "Choose the features and permissions you understand.", "Select trusted contacts and explain the role you want each person to have.", "Practice the workflow and keep direct emergency options available."].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#b7edff]" aria-hidden="true" />
                      <p className="leading-relaxed text-[#d8e9e3]">{item}</p>
                    </div>
                  ))}
                </div>
                <Link href="/use-cases/medical-alert-app-for-seniors#individual-path" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#0b6848] transition hover:bg-[#e7f2f8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7edff]">
                  Explore My Path
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>

              <article className="rounded-[2rem] bg-[#004f7b] p-8 text-white shadow-xl sm:p-10">
                <HeartHandshake className="h-10 w-10 text-[#d9f2fc]" aria-hidden="true" />
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#d9f2fc]">Choosing together</p>
                <h3 className="mt-3 text-3xl font-bold">Support without taking over.</h3>
                <div className="mt-6 space-y-4">
                  {["Ask what independence and privacy mean to the older adult.", "Decide who needs a license and who only needs to be a trusted contact.", "Agree on which supported alerts and context may be shared.", "Compare current individual and family plan terms before enrollment."].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d9f2fc]" aria-hidden="true" />
                      <p className="leading-relaxed text-[#d9f2fc]">{item}</p>
                    </div>
                  ))}
                </div>
                <Link href="/use-cases/medical-alert-app-for-seniors#family-path" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#004f7b] transition hover:bg-[#edf8f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9f2fc]">
                  Explore the Shared Path
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#0d3028] py-20 text-white lg:py-28">
          <div className="container max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b7edff]">Possible MySentry layers</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Use only the tools that fit the person.</h2>
              </div>
              <p className="text-lg leading-relaxed text-[#d8e9e3] lg:justify-self-end">
                Current feature behavior depends on the plan, device, software, permissions, settings, app state, connectivity, region, and service availability.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {featureCards.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-3xl border border-white/15 bg-white/10 p-7">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d9f2fc] text-[#004f7b]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{title}</h3>
                      <p className="mt-3 leading-relaxed text-[#d8e9e3]">{description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f5faf7] py-20 lg:py-28">
          <div className="container grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">Questions before enrollment</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl">Older-adult safety FAQ</h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                Use the complete decision guide to compare setup, privacy, supported devices, individual and family paths, and important limitations.
              </p>
            </div>
            <Accordion type="single" collapsible className="rounded-[2rem] border border-slate-200 bg-white px-6 shadow-sm sm:px-8">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="border-slate-200">
                  <AccordionTrigger className="py-6 text-left text-base font-bold text-[#0b2f4f] hover:text-[#006a9c] hover:no-underline sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-slate-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container max-w-6xl">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#dff3e7] to-[#e3f1f8] p-8 sm:p-12 lg:p-16">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b6848]">Make the decision together</p>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl lg:text-5xl">Review fit, privacy, setup, and limits before choosing a plan.</h2>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link href="/use-cases/medical-alert-app-for-seniors" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0b6848] px-7 py-3 font-bold text-white transition hover:bg-[#084f38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                    Open the Decision Guide
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0b6848] bg-white px-7 py-3 font-bold text-[#0b6848] transition hover:bg-[#edf8f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                    Compare Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
