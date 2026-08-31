import { Link } from "wouter";
import { ArrowRight, Building2, Car, CheckCircle2, Moon, ShieldCheck, Stethoscope } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";

const specializations = [
  {
    id: "home-health",
    href: "/nurses/home-health",
    icon: Car,
    title: "Home Health Nurses",
    description: "Prepare Panic Alarm access, Safety Checks, trusted contacts, and an agency response plan before entering unfamiliar or isolated locations.",
  },
  {
    id: "travel-nurses",
    href: "/nurses/travel-nurses",
    icon: Building2,
    title: "Travel Nurses",
    description: "Review device support, local contacts, parking and commute plans, permissions, and connectivity when starting a new assignment.",
  },
  {
    id: "er-trauma",
    href: "/nurses/er-trauma",
    icon: Stethoscope,
    title: "ER and Trauma Nurses",
    description: "Use personal safety tools as a supplement to employer procedures, security resources, training, and workplace violence controls.",
  },
  {
    id: "night-shift",
    href: "/nurses/night-shift",
    icon: Moon,
    title: "Night Shift Nurses",
    description: "Plan check-ins and trusted-contact workflows for quieter corridors, parking areas, commutes, and other after-hours transitions.",
  },
];

const faqs = [
  {
    question: "What is a nurse safety app?",
    answer: "A nurse safety app can provide a user-activated alert, check-in workflow, trusted contacts, and other supported safety tools. It should supplement, not replace, employer policies, security teams, training, supervision, or emergency procedures.",
  },
  {
    question: "What can MySentry share during an alert?",
    answer: "Available context depends on the feature, device, settings, permissions, app state, plan, and connection. It may include location and other supported alert information. Continuous family or employer access to private wellness data is not implied.",
  },
  {
    question: "Does MySentry work without connectivity?",
    answer: "Alert delivery and shared context require an available supported network connection. Nurses and employers should maintain a separate procedure for disconnected areas.",
  },
  {
    question: "Does MySentry diagnose fatigue or another medical condition?",
    answer: "No. MySentry is not a medical device and does not diagnose, predict, treat, or prevent a condition. Supported wearable signals are informational wellness context only.",
  },
  {
    question: "Does an alert guarantee emergency response?",
    answer: "No. Detection, delivery, monitoring contact, escalation, emergency-service response, and arrival are not guaranteed. Call 911 or local emergency services directly whenever it is safe and appropriate.",
  },
];

export default function Nurses() {
  return (
    <Layout>
      <SEO
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />

      <HeroSection
        label="Personal Safety Tools for Nurses"
        title={<>A Practical Safety Layer<br /><span className="text-gray-600">for Nurses on the Move</span></>}
        subtitle="MySentry can supplement workplace safety procedures with a Panic Alarm, Safety Checks, eligible incident detection, trusted contacts, and professional monitoring options."
        imageSrc="/images/cdn/hero-home-healthcare-FyAFPcaaseQ5VKXwe2ieTZ.webp"
        imageAlt="Nurse reviewing a personal safety plan on a smartphone"
        ctaText="Review Plans"
        ctaLink="/pricing"
      />

      <section className="border-b border-slate-200 bg-white py-16">
        <div className="container max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">Direct answer</p>
          <h2 className="mt-4 text-3xl font-bold text-[#0b2f4f]">What MySentry can add to a nurse safety plan</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            MySentry is a supplemental personal safety and wellness service for eligible phones and supported watch configurations. It can help a nurse start an alert, run a timed Safety Check, involve selected contacts, and connect an eligible alert to professional monitoring. It does not replace workplace controls, clinical care, or local emergency services.
          </p>
        </div>
      </section>

      <section className="bg-[#f5faf7] py-20">
        <div className="container max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b6848]">Three planning problems</p>
            <h2 className="mt-4 text-4xl font-bold text-[#0b2f4f]">Nurse safety changes with the setting</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Working out of sight", "Home visits, mobile assignments, and isolated areas can place a nurse beyond immediate support."],
              ["Moving between locations", "Parking areas, public spaces, unfamiliar facilities, and commutes create transitions that need their own plan."],
              ["Balancing safety and privacy", "Alert context should follow consent, permissions, policy, and role-based access rather than continuous surveillance."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <ShieldCheck className="h-8 w-8 text-[#0b6848]" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold text-[#0b2f4f]">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">How to prepare</p>
              <h2 className="mt-4 text-4xl font-bold text-[#0b2f4f]">Fit the app to the safety procedure</h2>
              <p className="mt-5 leading-relaxed text-slate-700">Start with the work setting, the employer response plan, and the nurse's preferences. Then confirm the device, plan, contacts, permissions, and connection needed for the selected features.</p>
              <Link href="/guides/lone-worker-safety" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b6848] px-7 py-3 font-bold text-white hover:bg-[#084f38] focus:outline-none focus:ring-2 focus:ring-[#007bc2]">
                Read the Safety Planning Guide
              </Link>
            </div>
            <div className="grid gap-4">
              {[
                "Document when the nurse is considered alone and which employer procedure applies.",
                "Select trusted contacts and define who reviews an alert or missed check-in.",
                "Enable only the permissions required by the approved workflow.",
                "Test the alert and maintain a separate procedure for weak or unavailable connectivity.",
                "Review incidents and update training, contacts, and procedures when conditions change.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-[#edf8f1] p-4 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0b6848]" aria-hidden="true" />
                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7fafc] py-20">
        <div className="container max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b6848]">Nursing settings</p>
            <h2 className="mt-4 text-4xl font-bold text-[#0b2f4f]">One hub for four nurse safety contexts</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {specializations.map(({ id, href, icon: Icon, title, description }) => (
              <Link
                id={id}
                key={id}
                href={href}
                className="group scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#007bc2]/50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007bc2] focus-visible:ring-offset-2"
              >
                <Icon className="h-8 w-8 text-[#007bc2]" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-bold text-[#0b2f4f]">{title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#006a9c]">
                  Explore this nurse setting
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container max-w-4xl">
          <h2 className="text-center text-4xl font-bold text-[#0b2f4f]">Nurse safety FAQ</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-[#f8fbf9] p-6">
                <h3 className="text-lg font-bold text-[#0b2f4f]">{faq.question}</h3>
                <p className="mt-3 leading-relaxed text-slate-700">{faq.answer}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/pricing" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b6848] px-7 py-3 font-bold text-white hover:bg-[#084f38]">Review Plans</Link>
            <Link href="/employers" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#0b6848] px-7 py-3 font-bold text-[#0b6848] hover:bg-[#edf8f1]">For Nursing Teams</Link>
          </div>
          <p className="mt-8 text-center text-sm leading-relaxed text-slate-600">
            Feature availability and outcomes depend on plan, device, settings, permissions, app state, connectivity, region, and third parties. Call 911 or local emergency services directly whenever it is safe and appropriate.
          </p>
        </div>
      </section>
    </Layout>
  );
}
