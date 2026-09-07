import {
  Activity,
  ArrowRight,
  BellRing,
  CheckCircle2,
  CirclePause,
  Clock3,
  EyeOff,
  HeartPulse,
  Link2,
  LockKeyhole,
  MessagesSquare,
  ShieldCheck,
  Smartphone,
  Sparkles,
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

const heroImage = "/images/cdn/hero-oura-ring-integration-gVAVE7WXQAwHMQbbzBA9nB.webp";

const safetyGaps = [
  {
    icon: Activity,
    title: "Wellness insight can remain isolated",
    description:
      "Personal wellness information may help you notice patterns, but it does not automatically create a MySentry safety alert or monitoring workflow.",
  },
  {
    icon: BellRing,
    title: "A safety moment needs useful context",
    description:
      "When someone asks for help, the right context can support a clearer review. Raw wellness information alone should never be treated as a diagnosis or emergency decision.",
  },
  {
    icon: EyeOff,
    title: "Connection should not mean constant visibility",
    description:
      "A family-safety experience should define which wellness details remain private and which permitted context may be shared for a configured safety event.",
  },
];

const explorationAreas = [
  {
    icon: HeartPulse,
    title: "Permission-based wellness context",
    description:
      "Explore whether user-approved wellness context could add clarity to an eligible MySentry safety workflow without presenting that information as medical advice.",
  },
  {
    icon: ShieldCheck,
    title: "A personal-safety layer",
    description:
      "Study how a future connection could complement MySentry's current user-activated alerts, supported-device events, trusted contacts, and eligible monitoring services.",
  },
  {
    icon: Users,
    title: "Privacy-aware family support",
    description:
      "Keep continuous wellness details private. If a future connection is released, family visibility should follow user permissions and configured alert settings.",
  },
  {
    icon: LockKeyhole,
    title: "Eligibility before activation",
    description:
      "Publish supported models, regions, plans, permissions, data categories, connectivity needs, and limitations before anyone is invited to connect an account.",
  },
];

const launchChecks = [
  {
    number: "01",
    title: "Verify technical compatibility",
    description:
      "Confirm supported Oura models, account requirements, phone platforms, regions, plans, and connectivity conditions.",
  },
  {
    number: "02",
    title: "Define permission boundaries",
    description:
      "Explain exactly which information can be accessed, why it is needed, when it may be used, and how permission can be changed or removed.",
  },
  {
    number: "03",
    title: "Validate the safety workflow",
    description:
      "Test how any permitted context appears during an eligible alert without treating wearable information as a diagnosis or a guaranteed emergency signal.",
  },
  {
    number: "04",
    title: "Publish the complete terms",
    description:
      "Document availability, setup, privacy, retention, monitoring eligibility, limitations, pricing, and support before launch.",
  },
];

const currentOptions = [
  {
    icon: BellRing,
    title: "Panic Alarm",
    description:
      "Start a user-activated MySentry alert from an eligible configured device when you need help.",
    href: "/features/panic-button-app",
  },
  {
    icon: Clock3,
    title: "Safety Check",
    description:
      "Create a timed check-in for an activity and configure what should happen if you do not confirm that you are safe.",
    href: "/features/safety-check-in-app",
  },
  {
    icon: Activity,
    title: "Wellness Context",
    description:
      "Review non-medical wellness information from currently eligible devices, subject to compatibility and permission requirements.",
    href: "/features/health-monitoring",
  },
  {
    icon: Watch,
    title: "Current Watch Options",
    description:
      "Review current Apple Watch and Samsung Galaxy Watch compatibility guidance before selecting a setup.",
    href: "/integrations/apple-watch",
  },
];

const faqs = [
  {
    question: "Is MySentry currently integrated with Oura Ring?",
    answer:
      "No. MySentry does not currently offer a production Oura Ring connection. You cannot connect an Oura account to MySentry today, and no Oura-based MySentry alert or monitoring workflow is currently available.",
  },
  {
    question: "Why does MySentry have an Oura Ring page before launch?",
    answer:
      "This page explains the customer problem MySentry is exploring, the standards a future connection would need to meet, and the MySentry options available today. It is not a launch announcement.",
  },
  {
    question: "When will the Oura Ring integration launch?",
    answer:
      "There is no confirmed launch date. MySentry will not publish a date until technical compatibility, privacy requirements, eligible workflows, support processes, and commercial terms are verified.",
  },
  {
    question: "Which Oura Ring models will be supported?",
    answer:
      "No supported-model list has been announced. If an integration is released, MySentry will publish exact model, account, phone, software, region, plan, and connectivity requirements before activation.",
  },
  {
    question: "What Oura data would MySentry use?",
    answer:
      "No data categories are confirmed. Any future connection would need a clear permission screen that identifies the information requested, its purpose, when it may be used, how long it may be retained, and how access can be revoked.",
  },
  {
    question: "Would Oura information diagnose a medical condition?",
    answer:
      "No. MySentry is not a medical device and does not diagnose, treat, or prevent medical conditions. Any future wellness context would remain informational and would not replace professional medical care or emergency services.",
  },
  {
    question: "Would Oura information automatically contact emergency services?",
    answer:
      "No such workflow is currently available or promised. If a future connection is released, MySentry will explain exactly how eligible alerts, monitoring review, trusted contacts, and possible escalation work. Detection, delivery, contact, escalation, response, and arrival cannot be guaranteed.",
  },
  {
    question: "Would my family see my Oura wellness information?",
    answer:
      "A future design would need to respect user permissions and avoid continuous family access to private wellness details. MySentry's family-safety approach is to share configured alert context when permitted, not to provide unrestricted continuous wellness visibility.",
  },
  {
    question: "Can I use MySentry without Oura Ring?",
    answer:
      "Yes. MySentry's current services do not require an Oura Ring. Review current features, plans, supported devices, permissions, regions, and monitoring eligibility before enrolling.",
  },
  {
    question: "How can I ask about future Oura compatibility?",
    answer:
      "Contact MySentry with your device and region questions. Support can explain current options and record your interest, but cannot promise a future model, feature, price, or launch date.",
  },
];

export default function OuraRingIntegration() {
  return (
    <Layout>
      <SEO
        title="Oura Ring and MySentry Coming Soon"
        description="Explore MySentry's future vision for permission-based Oura Ring wellness context and personal safety. The integration is not currently available."
        canonical="https://mysentry.ai/integrations/oura-ring"
        image={heroImage}
        noindex
      />

      <main className="overflow-hidden bg-white text-[#10231D]">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#E9F6EF] via-white to-[#E8F2F8] pb-20 pt-32 lg:pb-28 lg:pt-40">
          <div className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#6AD990]/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#007BC2]/10 blur-3xl" />

          <div className="container relative grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#386758]/30 bg-white/85 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-[#255044] shadow-sm backdrop-blur">
                <CirclePause className="h-4 w-4" aria-hidden="true" />
                Coming soon. Not available today.
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight text-[#0F172A] sm:text-5xl lg:text-[55px]">
                A future connection between Oura Ring and MySentry.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#334155] sm:text-xl">
                If you use Oura for personal wellness insight, you may also want a clearer safety plan for the moments when you need help. MySentry is exploring how permission-based wellness context could complement personal-safety workflows without turning private data into constant family tracking.
              </p>

              <p className="mt-5 max-w-2xl border-l-4 border-[#007BC2] pl-5 text-base leading-relaxed text-[#475569]">
                MySentry does not currently connect to Oura Ring. No account connection, supported model, data workflow, alert behavior, price, region, or launch date is available or promised today.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/features"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#006A9C] px-7 py-3 font-bold text-white shadow-lg shadow-[#006A9C]/20 transition hover:-translate-y-0.5 hover:bg-[#004F7B]"
                >
                  Explore MySentry Today
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/integrations/apple-watch"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#386758] bg-white px-7 py-3 font-bold text-[#255044] transition hover:bg-[#E9F6EF]"
                >
                  Review Current Watch Options
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#334155]">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#386758]" aria-hidden="true" />
                  Honest availability status
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#386758]" aria-hidden="true" />
                  Privacy before activation
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#386758]" aria-hidden="true" />
                  No unverified launch promise
                </span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#6AD990]/30 to-[#007BC2]/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-2xl shadow-[#004F7B]/15">
                <img
                  src={heroImage}
                  alt="Oura Ring beside a phone, representing a possible future MySentry connection"
                  className="aspect-[16/10] w-full rounded-[1.55rem] object-cover"
                  width="1920"
                  height="1080"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9F6EF] text-[#255044]">
                      <Sparkles className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0F172A]">The vision</p>
                      <p className="mt-1 text-sm leading-relaxed text-[#475569]">
                        Bring user-approved wellness context closer to an eligible safety workflow, with privacy and compatibility defined first.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#006A9C]">The missing bridge</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                You have insight. What happens when you need support?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#475569]">
                A wellness device and a personal-safety service solve different problems. Any future connection should preserve clear boundaries between wellness information, medical judgment, and permission-based access to private data.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {safetyGaps.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-3xl border border-[#DCE8E2] bg-[#F8FCFA] p-7 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5F4EC] text-[#255044]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0F172A]">{title}</h3>
                  <p className="mt-3 leading-relaxed text-[#475569]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0D3028] py-20 text-white lg:py-28">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#9FE8B8]">What MySentry is exploring</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  A safety layer designed around permission, not assumptions.
                </h2>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-[#D8E9E3] lg:justify-self-end">
                This is a design direction, not a released feature list. Any future connection would need to earn trust through clear eligibility, limited data access, user control, testing, and transparent limitations.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {explorationAreas.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-3xl border border-white/15 bg-white/7 p-7 backdrop-blur-sm">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#9FE8B8] text-[#123D32]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{title}</h3>
                      <p className="mt-3 leading-relaxed text-[#D8E9E3]">{description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F2F8F5] py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#006A9C]">Clear boundaries</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                What exists today, and what could come later.
              </h2>
            </div>

            <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-[#CADDD3] bg-white shadow-xl shadow-[#004F7B]/5 lg:grid-cols-3">
              <div className="p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF2F4] text-[#475569]">
                  <Watch className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-[#64748B]">Today with Oura</p>
                <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">Your Oura experience stays with Oura.</h3>
                <p className="mt-4 leading-relaxed text-[#475569]">
                  Continue using your Oura product according to Oura's current features, account terms, privacy choices, and supported devices. MySentry does not receive Oura account information today.
                </p>
              </div>

              <div className="border-y border-[#CADDD3] bg-[#E9F6EF] p-8 lg:border-x lg:border-y-0 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#255044]">
                  <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-[#255044]">Today with MySentry</p>
                <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">Use current MySentry safety features.</h3>
                <p className="mt-4 leading-relaxed text-[#334155]">
                  Review user-activated alerts, supported-device events, Safety Checks, trusted contacts, wellness context, and eligible monitoring based on current device, permission, plan, region, and connectivity requirements.
                </p>
              </div>

              <div className="p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F2F8] text-[#006A9C]">
                  <Link2 className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-[#006A9C]">Possible future connection</p>
                <h3 className="mt-3 text-2xl font-bold text-[#0F172A]">Connect only after the rules are clear.</h3>
                <p className="mt-4 leading-relaxed text-[#475569]">
                  If released, a connection would follow published compatibility, permission, privacy, plan, support, and workflow terms. No part of that connection is active today.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="container grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#006A9C]">Before any launch</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                Trust has to be designed into the connection.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#475569]">
                A future integration should not begin with a marketing promise. It should begin with compatibility checks, privacy boundaries, workflow validation, and complete customer-facing terms.
              </p>
            </div>

            <div className="space-y-5">
              {launchChecks.map((step) => (
                <article key={step.number} className="group rounded-3xl border border-[#DCE8E2] bg-[#F8FCFA] p-6 transition hover:border-[#386758]/45 hover:shadow-lg sm:p-8">
                  <div className="flex gap-5 sm:gap-7">
                    <span className="text-2xl font-bold text-[#007BC2]">{step.number}</span>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] sm:text-2xl">{step.title}</h3>
                      <p className="mt-3 leading-relaxed text-[#475569]">{step.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#E8F2F8] py-20 lg:py-28">
          <div className="container">
            <div className="overflow-hidden rounded-[2rem] bg-[#004F7B] text-white shadow-2xl shadow-[#004F7B]/20">
              <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
                <div className="p-8 sm:p-10 lg:p-14">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12 text-[#B7EDFF]">
                    <LockKeyhole className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-[#B7EDFF]">Privacy commitment</p>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                    Your wellness information should remain under your control.
                  </h2>
                  <p className="mt-5 leading-relaxed text-[#D9F2FC]">
                    Any future Oura connection would need explicit permission, limited access, a documented purpose, clear retention rules, and a simple way to remove access.
                  </p>
                </div>

                <div className="grid gap-px bg-white/15 sm:grid-cols-2">
                  {[
                    ["Explicit consent", "No account connection should begin without a clear user action and understandable permission request."],
                    ["Limited data use", "Only confirmed data categories needed for an approved purpose should be requested."],
                    ["Event-based family context", "Private wellness details should not become an unrestricted continuous family feed."],
                    ["Published retention rules", "Storage, access, deletion, support, and account-disconnection terms should be visible before launch."],
                  ].map(([title, description]) => (
                    <article key={title} className="bg-[#0A5B84] p-7 sm:p-8 lg:p-9">
                      <CheckCircle2 className="h-6 w-6 text-[#9FE8B8]" aria-hidden="true" />
                      <h3 className="mt-5 text-xl font-bold">{title}</h3>
                      <p className="mt-3 leading-relaxed text-[#D9F2FC]">{description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#006A9C]">Available now</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                You do not need to wait for Oura support to explore MySentry.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#475569]">
                Start with the current safety features and compatibility information. Confirm your device, permissions, plan, region, and monitoring eligibility before enrollment.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {currentOptions.map(({ icon: Icon, title, description, href }) => (
                <Link key={title} href={href} className="group rounded-3xl border border-[#DCE8E2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#007BC2]/45 hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F2F8] text-[#006A9C]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0F172A]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569]">{description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#006A9C]">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F2F8F5] py-20 lg:py-28">
          <div className="container grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#006A9C]">Oura Ring FAQ</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
                Clear answers before any connection exists.
              </h2>
              <p className="mt-5 leading-relaxed text-[#475569]">
                These answers describe the page's current status and the standards MySentry would need to meet before presenting Oura support as available.
              </p>
            </div>

            <Accordion type="single" collapsible className="rounded-[2rem] border border-[#DCE8E2] bg-white px-6 shadow-lg shadow-[#004F7B]/5 sm:px-8">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="border-[#DCE8E2]">
                  <AccordionTrigger className="py-6 text-left text-base font-bold text-[#0F172A] hover:text-[#006A9C] hover:no-underline sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-[#475569]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="container">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#DFF3E7] to-[#E3F1F8] p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#6AD990]/25 blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#255044] shadow-sm">
                    <MessagesSquare className="h-4 w-4" aria-hidden="true" />
                    A future idea. Current support today.
                  </div>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl lg:text-5xl">
                    Build your current MySentry safety plan while we evaluate what comes next.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#475569]">
                    Review current features and eligibility now, or ask our team about supported wearable options. We will only present Oura support as available after it is verified and released.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link href="/pricing#pricing-plans" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#006A9C] px-7 py-3 font-bold text-white transition hover:bg-[#004F7B]">
                    Review Plans and Eligibility
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#386758] bg-white px-7 py-3 font-bold text-[#255044] transition hover:bg-[#F2F8F5]">
                    Ask a Compatibility Question
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
