import { ArrowRight, CheckCircle2, ClipboardCheck, Scale, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const evaluationQuestions = [
  "Which phones, watches, operating systems, and regions are currently supported?",
  "How is an alert started, reviewed, canceled, and closed?",
  "Is professional monitoring included, optional, or unavailable?",
  "What information can be shared, with whom, and under which permissions?",
  "What happens when a device, battery, permission, app state, or connection is unavailable?",
  "Which current price, billing, cancellation, equipment, and eligibility terms apply?",
];

const categoryReviews = [
  {
    title: "Fitness and Wellness Wearables",
    description: "Compare the purpose of a wellness wearable with a personal safety workflow without assuming that one replaces the other.",
    href: "/compare/fitness-wearables-vs-mysentry",
  },
  {
    title: "Traditional Medical Alert Services",
    description: "Compare equipment, monitoring, portability, setup, pricing, and limitations using current official information.",
    href: "/compare/traditional-medical-alerts-vs-mysentry",
  },
];

export default function CompareHub() {
  return (
    <Layout>
      <SEO />
      <main>
        <section className="bg-gradient-to-br from-[#eaf6ef] via-white to-[#e8f3fb] pb-20 pt-36">
          <div className="container max-w-6xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b6848]">Comparison guide</p>
            <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-tight text-[#0b2f4f] md:text-[55px]">
              Compare Safety Services With Better Questions
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
              Product names do not tell you whether a service fits your device, plan, privacy expectations, daily routine, or emergency procedure. Verify the current facts that affect real use.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/features" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b6848] px-7 py-3 font-bold text-white hover:bg-[#084f38]">
                Review Current Features <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0b6848] bg-white px-7 py-3 font-bold text-[#0b6848] hover:bg-[#edf8f1]">
                Review Plans and Eligibility
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <ClipboardCheck className="h-10 w-10 text-[#007bc2]" aria-hidden="true" />
                <h2 className="mt-5 text-4xl font-bold text-[#0b2f4f]">Six questions to verify</h2>
                <p className="mt-4 leading-relaxed text-slate-700">
                  Use current official product, support, pricing, privacy, and policy sources. Recheck time-sensitive details before deciding.
                </p>
              </div>
              <div className="grid gap-4">
                {evaluationQuestions.map((question) => (
                  <div key={question} className="flex gap-3 rounded-2xl border border-slate-200 bg-[#f8fbf9] p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0b6848]" aria-hidden="true" />
                    <p className="leading-relaxed text-slate-700">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5faf7] py-20">
          <div className="container max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">Category reviews</p>
              <h2 className="mt-4 text-4xl font-bold text-[#0b2f4f]">Compare service models, not slogans</h2>
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-700">
                These category pages provide an evaluation framework. Product-specific assertions remain held until they are verified against current official sources.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
              {categoryReviews.map((review) => (
                <Link key={review.href} href={review.href} className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <Scale className="h-9 w-9 text-[#0b6848]" aria-hidden="true" />
                  <h3 className="mt-5 text-2xl font-bold text-[#0b2f4f]">{review.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{review.description}</p>
                  <span className="mt-6 inline-flex items-center font-bold text-[#0b6848]">
                    Open Review Framework <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container max-w-4xl">
            <div className="rounded-3xl border border-[#0b6848]/20 bg-[#edf8f1] p-8 sm:p-10">
              <ShieldCheck className="h-9 w-9 text-[#0b6848]" aria-hidden="true" />
              <h2 className="mt-5 text-3xl font-bold text-[#0b2f4f]">What MySentry adds to the comparison</h2>
              <p className="mt-4 leading-relaxed text-slate-700">
                MySentry connects supported device events and user-triggered Panic Alarms to configured contacts, permitted incident context, and eligible 24/7 professional monitoring. Each comparison explains the device, setup, permission, connectivity, plan, region, and service conditions that apply.
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
