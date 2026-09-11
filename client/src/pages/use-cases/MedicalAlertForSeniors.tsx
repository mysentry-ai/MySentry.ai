import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  HeartHandshake,
  LockKeyhole,
  Radio,
  ShieldAlert,
  Smartphone,
  Users,
  Watch,
  Wifi,
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

const heroImage = "/images/cdn/hero-medical-alert-seniors-brbwAEw3QrMxYqBqfMTxKC.webp";

const faqs = [
  { question: "How does MySentry support an older adult's wider care plan?", answer: "MySentry adds configured alerts, supported wellness context, family contacts, and eligible professional monitoring. Wellness information does not diagnose a medical condition, and clinical care keeps its own role." },
  { question: "Does MySentry detect every fall?", answer: "No. Supported-device detection may miss an event or activate when no emergency exists. It depends on eligible hardware, how it is carried or worn, app state, settings, permissions, connectivity, and event conditions." },
  { question: "Does the family see an older adult's location all the time?", answer: "MySentry does not describe unrestricted continuous family tracking. Supported location or alert context follows the selected feature, permissions, settings, and active workflow." },
  { question: "Can family members see continuous wellness data?", answer: "MySentry does not describe continuous family access to private wellness information. Supported signals remain informational and sharing follows the user's permissions and configured alert workflow." },
  { question: "Is a smartwatch required?", answer: "No wearable is required for every feature. Supported-device detection, watch controls, and wellness context require an eligible wearable configuration and current compatibility." },
  { question: "What is the difference between a trusted contact and professional monitoring?", answer: "A trusted contact is a person the user selects. Eligible professional monitoring is a plan-based service that may review permitted alert context, attempt contact, and coordinate next steps. Roles, availability, and outcomes are not guaranteed." },
  { question: "What happens if there is no network connection?", answer: "Alert delivery and shared context require an available supported connection. Maintain a separate plan for disconnected areas, including direct emergency calls and nearby support when available." },
  { question: "What if an alert is accidental?", answer: "The user may be able to cancel or close a supported alert when safe and able. Exact behavior depends on the feature, device, settings, app state, plan, and connection, so practice the current workflow after setup." },
  { question: "Does MySentry replace 911 or in-home care?", answer: "No. Call 911 or local emergency services directly whenever it is safe and possible. MySentry does not replace supervision, professional care, prescribed devices, home modifications, transportation, or community support." },
  { question: "Should we choose an individual or family plan?", answer: "Choose based on who needs a separate license, who will act as a trusted contact, which devices are eligible, and how the household wants to coordinate. Review current license totals, billing options, terms, and eligibility on the pricing page." },
];

export default function MedicalAlertForSeniors() {
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
      <SEO
        title="Medical Alert App for Seniors and Family Caregivers"
        description="Compare individual and family paths for supported-device alerts, Safety Checks, trusted contacts, eligible monitoring, privacy, setup, and limitations."
        canonical="https://mysentry.ai/use-cases/medical-alert-app-for-seniors"
        image={heroImage}
        schema={faqSchema}
      />

      <main className="overflow-hidden bg-white text-slate-900">
        <section className="relative bg-gradient-to-br from-[#eaf5ef] via-white to-[#e7f2f8] pb-20 pt-32 lg:pb-28 lg:pt-40">
          <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#0b6848]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#007bc2]/10 blur-3xl" />
          <div className="container relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006a9c]">Senior safety decision guide</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight text-[#0b2f4f] sm:text-5xl lg:text-[55px]">
                A medical alert app decision guide for older adults and families.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
                Compare how MySentry may fit an independent older adult, a shared family safety plan, or a caregiver-supported setup, with privacy, eligibility, and limitations explained before enrollment.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#choose-path" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0b6848] px-7 py-3 font-bold text-white shadow-lg shadow-[#0b6848]/15 transition hover:bg-[#084f38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                  Choose Your Decision Path
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0b6848] bg-white px-7 py-3 font-bold text-[#0b6848] transition hover:bg-[#edf8f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                  Compare Current Plans
                </Link>
              </div>
              <p className="mt-7 max-w-2xl border-l-4 border-[#007bc2] pl-5 text-sm leading-relaxed text-slate-600">
                MySentry connects supported alerts, trusted contacts, permitted incident context, and eligible professional monitoring around the older adult's choices.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#0b6848]/15 to-[#007bc2]/15 blur-2xl" />
              <img
                src={heroImage}
                alt="Older adult and family member reviewing a smartphone-based safety plan together"
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
            <h2 className="mt-4 text-3xl font-bold text-[#0b2f4f]">How MySentry connects the safety plan</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              Eligible users can use MySentry for a Panic Alarm, Safety Checks, supported-device events, trusted contacts, permitted alert context, and professional monitoring. The service fits alongside clinical care, prescribed devices, home modifications, in-home support, transportation, emergency procedures, and local community resources.
            </p>
          </div>
        </section>

        <section id="choose-path" className="scroll-mt-24 bg-[#f5faf7] py-20 lg:py-28">
          <div className="container max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b6848]">Choose the right conversation</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl lg:text-5xl">Two paths, one shared goal: safer independence.</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">
                The older adult should remain part of every decision. A trusted person can help compare options without assuming control over the person's location, wellness information, or daily routine.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <article id="individual-path" className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
                <Smartphone className="h-10 w-10 text-[#0b6848]" aria-hidden="true" />
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#0b6848]">Individual path</p>
                <h3 className="mt-3 text-3xl font-bold text-[#0b2f4f]">I am choosing for myself.</h3>
                <p className="mt-4 leading-relaxed text-slate-700">This path fits an older adult who uses an eligible phone, wants direct control, and will choose the features, permissions, and contacts personally.</p>
                <div className="mt-6 space-y-4">
                  {["Confirm the phone and optional wearable are eligible.", "Choose the supported alerts and permissions you understand.", "Select trusted contacts and explain the role you want each person to have.", "Practice the alert and Safety Check workflow before relying on it.", "Keep direct emergency calls and local support options available."].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0b6848]" aria-hidden="true" />
                      <p className="leading-relaxed text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
                <Link href="/pricing" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0b6848] px-6 py-3 font-bold text-white transition hover:bg-[#084f38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                  Review Individual Plans
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>

              <article id="family-path" className="scroll-mt-28 rounded-[2rem] bg-[#004f7b] p-8 text-white shadow-xl sm:p-10">
                <HeartHandshake className="h-10 w-10 text-[#d9f2fc]" aria-hidden="true" />
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-[#d9f2fc]">Family path</p>
                <h3 className="mt-3 text-3xl font-bold">We are choosing together.</h3>
                <p className="mt-4 leading-relaxed text-[#d9f2fc]">This path fits a household comparing separate licenses, trusted-contact roles, and consent-based alert coordination across more than one person.</p>
                <div className="mt-6 space-y-4">
                  {["Ask what support the older adult wants and what privacy boundaries matter.", "Decide who needs a license and who only needs to be a trusted contact.", "Confirm each person's eligible device, permissions, and connectivity.", "Agree on who responds to which supported notification.", "Review current family terms, license totals, and billing options on the pricing page."].map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d9f2fc]" aria-hidden="true" />
                      <p className="leading-relaxed text-[#d9f2fc]">{item}</p>
                    </div>
                  ))}
                </div>
                <Link href="/pricing" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-[#004f7b] transition hover:bg-[#edf8f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9f2fc]">
                  Review Family Plans
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="container grid max-w-6xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">Set up before the moment</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl lg:text-5xl">Build one clear, practiced workflow.</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">The setup should be understandable to the older adult and every person expected to act on a notification.</p>
            </div>
            <ol className="space-y-5">
              {[
                { title: "Confirm eligibility", description: "Review the current phone, optional wearable, software, plan, region, permissions, connectivity, and professional monitoring availability." },
                { title: "Choose the smallest useful set of features", description: "Enable only the Panic Alarm, Safety Checks, supported-device events, or wellness context the user understands and wants." },
                { title: "Assign trusted-contact roles", description: "Decide who may receive supported notifications, what permitted context may be shared, and what each person should do next." },
                { title: "Practice and keep a backup", description: "Test the current workflow, learn how accidental alerts are handled, and retain direct emergency calls, nearby contacts, and local resources." },
              ].map((step, index) => (
                <li key={step.title} className="rounded-3xl border border-slate-200 bg-[#f8fbf9] p-6 sm:p-8">
                  <div className="flex gap-5 sm:gap-7">
                    <span className="text-2xl font-bold text-[#007bc2]">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="text-xl font-bold text-[#0b2f4f] sm:text-2xl">{step.title}</h3>
                      <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#0d3028] py-20 text-white lg:py-28">
          <div className="container max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b7edff]">Privacy and consent</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Support should not feel like surveillance.</h2>
              </div>
              <p className="text-lg leading-relaxed text-[#d8e9e3] lg:justify-self-end">Adult daughters and sons, spouses, relatives, friends, neighbors, and other trusted people can be part of the plan when the older adult wants them involved.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {[
                { icon: LockKeyhole, title: "Permission before sharing", description: "Location, camera, microphone, notifications, motion, contacts, background access, and wearable information depend on the selected feature and the user's permissions." },
                { icon: Users, title: "Role clarity", description: "A trusted contact is not automatically a caregiver, clinician, monitoring agent, or emergency responder. Each role should be explained before setup." },
                { icon: Radio, title: "Alert-based coordination", description: "Supported notifications and context should follow the active workflow rather than providing unrestricted continuous visibility." },
                { icon: ShieldAlert, title: "A wider support plan", description: "Home modifications, healthcare, transportation, community services, neighbors, and direct emergency access remain important." },
              ].map(({ icon: Icon, title, description }) => (
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

        <section className="bg-white py-20 lg:py-28">
          <div className="container max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">What may happen after an eligible alert</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl lg:text-5xl">Understand the workflow without assuming an outcome.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "An eligible alert begins", "A user action, missed Safety Check, or supported-device event may begin the configured workflow."],
                ["02", "Available context is prepared", "Supported information depends on the feature, permissions, settings, app state, plan, device, and connection."],
                ["03", "Contact may be attempted", "An eligible monitoring service or trusted contact may attempt to reach the user according to the active workflow."],
                ["04", "Next steps depend on the situation", "Contacts or monitoring may coordinate with emergency services when appropriate, but delivery, response, and arrival are not guaranteed."],
              ].map(([number, title, description]) => (
                <article key={number} className="rounded-3xl border border-slate-200 bg-[#f8fbf9] p-6">
                  <span className="text-2xl font-bold text-[#007bc2]">{number}</span>
                  <h3 className="mt-5 text-xl font-bold text-[#0b2f4f]">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#e7f2f8] py-20 lg:py-24">
          <div className="container grid max-w-6xl gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-[#004f7b] p-8 text-white shadow-xl sm:p-10">
              <ShieldAlert className="h-10 w-10 text-[#d9f2fc]" aria-hidden="true" />
              <h2 className="mt-6 text-3xl font-bold">Important limitations</h2>
              <div className="mt-6 space-y-4">
                {["No fall, crash, or other event detection is guaranteed.", "Alert delivery and shared context require an available supported connection.", "Professional monitoring and trusted contacts cannot guarantee contact, escalation, emergency-service response, arrival, or an outcome.", "MySentry does not replace medical care, emergency services, prescribed devices, home modifications, supervision, transportation, or community support."].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d9f2fc]" aria-hidden="true" />
                    <p className="leading-relaxed text-[#d9f2fc]">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
              <Wifi className="h-10 w-10 text-[#0b6848]" aria-hidden="true" />
              <h2 className="mt-6 text-3xl font-bold text-[#0b2f4f]">Setup requirements to confirm</h2>
              <div className="mt-6 space-y-5">
                {[
                  [Smartphone, "Phone", "A currently supported smartphone, software version, app state, and plan."],
                  [Watch, "Optional wearable", "An eligible supported wearable for watch controls, supported-device detection, or wellness context."],
                  [LockKeyhole, "Permissions", "The notifications, location, motion, background, camera, microphone, contact, and wearable permissions needed by selected features."],
                  [Radio, "Connection and availability", "A supported network connection plus current regional and professional-monitoring availability."],
                ].map(([Icon, title, description]) => {
                  const RequirementIcon = Icon as typeof Smartphone;
                  return (
                    <div key={String(title)} className="flex gap-4">
                      <RequirementIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#0b6848]" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold text-[#0b2f4f]">{String(title)}</h3>
                        <p className="mt-1 leading-relaxed text-slate-600">{String(description)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="container grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">Questions before enrollment</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl">Senior medical alert app FAQ</h2>
              <p className="mt-5 leading-relaxed text-slate-600">These answers explain the current decision points and limits. Confirm current device, plan, region, and service details before enrollment.</p>
            </div>
            <Accordion type="single" collapsible className="rounded-[2rem] border border-slate-200 bg-[#f8fbf9] px-6 shadow-sm sm:px-8">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="border-slate-200">
                  <AccordionTrigger className="py-6 text-left text-base font-bold text-[#0b2f4f] hover:text-[#006a9c] hover:no-underline sm:text-lg">{faq.question}</AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-slate-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-[#f5faf7] py-16">
          <div className="container max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-[#0b2f4f]">Continue your decision</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    ["Senior Safety Hub", "/seniors"],
                    ["Fall Detection App", "/features/fall-detection-app"],
                    ["Safety Check-In App", "/features/safety-check-in-app"],
                    ["Professional Monitoring", "/features/24-7-professional-monitoring"],
                    ["Compare Plans", "/pricing"],
                  ].map(([text, href]) => (
                    <Link key={href} href={href} className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#0b6848] bg-white px-5 py-2 font-bold text-[#0b6848] transition hover:bg-[#edf8f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2]">
                      {text}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#0b2f4f]">Independent research and support</h2>
                <p className="mt-4 leading-relaxed text-slate-700">Aging in place and caregiving decisions extend beyond any app. These public resources can support a broader conversation.</p>
                <div className="mt-5 space-y-3">
                  {[
                    ["AARP Home and Community Preferences Survey", "https://www.aarp.org/home-living/home-community-preferences-survey-2024/"],
                    ["Administration for Community Living Caregiver Support", "https://acl.gov/programs/support-caregivers/national-family-caregiver-support-program"],
                    ["AARP and National Alliance for Caregiving 2025", "https://www.aarp.org/pri/topics/ltss/family-caregiving/caregiving-in-the-us-2025/"],
                  ].map(([text, href]) => (
                    <a key={href} href={href} target="_blank" rel="noreferrer" className="flex items-start gap-2 font-semibold text-[#006a9c] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2]">
                      <ExternalLink className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                      {text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container max-w-6xl">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#dff3e7] to-[#e3f1f8] p-8 sm:p-12 lg:p-16">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b6848]">Choose with clear expectations</p>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl lg:text-5xl">Compare the current individual and family paths.</h2>
                  <p className="mt-5 text-lg leading-relaxed text-slate-700">Review current per-license terms, billing options, device eligibility, setup needs, permissions, and monitoring availability before enrollment.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0b6848] px-7 py-3 font-bold text-white transition hover:bg-[#084f38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                    Compare Plans
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0b6848] bg-white px-7 py-3 font-bold text-[#0b6848] transition hover:bg-[#edf8f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                    Ask a Setup Question
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
