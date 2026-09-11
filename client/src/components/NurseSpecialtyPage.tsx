import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  ShieldAlert,
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

type ContentCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type WorkflowStep = {
  title: string;
  description: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type NurseSpecialtyPageProps = {
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  label: string;
  h1: string;
  heroDescription: string;
  heroImage: string;
  heroAlt: string;
  directAnswer: string;
  problemsHeading: string;
  problemsIntro: string;
  problems: ContentCard[];
  fitHeading: string;
  fitIntro: string;
  tools: ContentCard[];
  workflowHeading: string;
  workflowIntro: string;
  workflow: WorkflowStep[];
  limitations: string[];
  evidenceText: string;
  faqs: FAQ[];
  relatedLinks: { text: string; href: string }[];
};

const sourceLinks = [
  {
    text: "CDC and NIOSH workplace violence prevention for nurses",
    href: "https://www.cdc.gov/niosh/publications/hcp/numbered/2013-155.html",
  },
  {
    text: "OSHA workplace violence guidance for healthcare",
    href: "https://www.osha.gov/healthcare/workplace-violence",
  },
];

export default function NurseSpecialtyPage({
  seoTitle,
  seoDescription,
  canonical,
  label,
  h1,
  heroDescription,
  heroImage,
  heroAlt,
  directAnswer,
  problemsHeading,
  problemsIntro,
  problems,
  fitHeading,
  fitIntro,
  tools,
  workflowHeading,
  workflowIntro,
  workflow,
  limitations,
  evidenceText,
  faqs,
  relatedLinks,
}: NurseSpecialtyPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        image={heroImage}
        schema={faqSchema}
      />

      <main className="overflow-hidden bg-white text-slate-900">
        <section className="relative bg-gradient-to-br from-[#eaf5ef] via-white to-[#e7f2f8] pb-20 pt-32 lg:pb-28 lg:pt-40">
          <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#0b6848]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[#007bc2]/10 blur-3xl" />
          <div className="container relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#006a9c]">{label}</p>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight text-[#0b2f4f] sm:text-5xl lg:text-[55px]">
                {h1}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 sm:text-xl">
                {heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/pricing"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0b6848] px-7 py-3 font-bold text-white shadow-lg shadow-[#0b6848]/15 transition hover:-translate-y-0.5 hover:bg-[#084f38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2"
                >
                  Review Plans and Setup
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0b6848] bg-white px-7 py-3 font-bold text-[#0b6848] transition hover:bg-[#edf8f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2"
                >
                  See How MySentry Works
                </Link>
              </div>
              <p className="mt-7 max-w-2xl border-l-4 border-[#007bc2] pl-5 text-sm leading-relaxed text-slate-600">
                MySentry works alongside employer policy, workplace controls, security, training, clinical judgment, emergency services, and local support procedures.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-[#0b6848]/15 to-[#007bc2]/15 blur-2xl" />
              <img
                src={heroImage}
                alt={heroAlt}
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
            <h2 className="mt-4 text-3xl font-bold text-[#0b2f4f]">Where MySentry can fit</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">{directAnswer}</p>
          </div>
        </section>

        <section className="bg-[#f5faf7] py-20 lg:py-28">
          <div className="container max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b6848]">Three planning problems</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl lg:text-5xl">
                {problemsHeading}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">{problemsIntro}</p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {problems.map(({ icon: Icon, title, description }) => (
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

        <section className="bg-[#0d3028] py-20 text-white lg:py-28">
          <div className="container max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b7edff]">A connected personal workflow</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{fitHeading}</h2>
              </div>
              <p className="text-lg leading-relaxed text-[#d8e9e3] lg:justify-self-end">{fitIntro}</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {tools.map(({ icon: Icon, title, description }) => (
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
          <div className="container grid max-w-6xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">Plan before the moment</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl lg:text-5xl">
                {workflowHeading}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-700">{workflowIntro}</p>
            </div>
            <ol className="space-y-5">
              {workflow.map((step, index) => (
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

        <section className="bg-[#e7f2f8] py-20 lg:py-24">
          <div className="container grid max-w-6xl gap-8 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-[#004f7b] p-8 text-white shadow-xl sm:p-10">
              <ShieldAlert className="h-10 w-10 text-[#b7edff]" aria-hidden="true" />
              <h2 className="mt-6 text-3xl font-bold">Important limitations</h2>
              <div className="mt-6 space-y-4">
                {limitations.map((limitation) => (
                  <div key={limitation} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#b7edff]" aria-hidden="true" />
                    <p className="leading-relaxed text-[#d9f2fc]">{limitation}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
              <ClipboardCheck className="h-10 w-10 text-[#0b6848]" aria-hidden="true" />
              <h2 className="mt-6 text-3xl font-bold text-[#0b2f4f]">Safety planning context</h2>
              <p className="mt-5 leading-relaxed text-slate-700">{evidenceText}</p>
              <div className="mt-6 space-y-3">
                {sourceLinks.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-2 font-semibold text-[#006a9c] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2]"
                  >
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                    {source.text}
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="bg-white py-20 lg:py-28">
          <div className="container grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">Questions before setup</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl">Nurse safety FAQ</h2>
              <p className="mt-5 leading-relaxed text-slate-600">
                Confirm the current device, plan, permission, connectivity, employer-policy, regional, and service requirements before relying on any feature.
              </p>
            </div>
            <Accordion type="single" collapsible className="rounded-[2rem] border border-slate-200 bg-[#f8fbf9] px-6 shadow-sm sm:px-8">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`} className="border-slate-200">
                  <AccordionTrigger className="py-6 text-left text-base font-bold text-[#0b2f4f] hover:text-[#006a9c] hover:no-underline sm:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-slate-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="bg-[#f5faf7] py-16">
          <div className="container max-w-6xl">
            <h2 className="text-2xl font-bold text-[#0b2f4f]">Continue your nurse safety research</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#0b6848] bg-white px-5 py-2 font-bold text-[#0b6848] transition hover:bg-[#edf8f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2]"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container max-w-6xl">
            <div className="rounded-[2rem] bg-gradient-to-br from-[#dff3e7] to-[#e3f1f8] p-8 sm:p-12 lg:p-16">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b6848]">Choose a setup you understand</p>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0b2f4f] sm:text-4xl lg:text-5xl">
                    Add a personal safety layer to the plan you already use.
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-slate-700">
                    Review current plans, device requirements, permissions, connectivity needs, monitoring eligibility, and limitations before enrollment.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0b6848] px-7 py-3 font-bold text-white transition hover:bg-[#084f38] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                    Review Plans and Setup
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link href="/nurses" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0b6848] bg-white px-7 py-3 font-bold text-[#0b6848] transition hover:bg-[#edf8f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2">
                    Explore All Nurse Settings
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
