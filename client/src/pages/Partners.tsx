import { ArrowRight, Building2, Handshake, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";

const partnerPaths = [
  {
    icon: Building2,
    title: "Employer and Program Partners",
    description: "Explore how eligible MySentry safety tools could supplement an existing workforce or member safety program, subject to scope, policy, privacy, and technical review.",
  },
  {
    icon: Handshake,
    title: "Channel Partners",
    description: "Discuss referral, reseller, or service opportunities only after commercial terms, support responsibilities, geography, and approved product status are confirmed.",
  },
  {
    icon: ShieldCheck,
    title: "Technology Partners",
    description: "Evaluate integrations against supported devices, permissions, data boundaries, reliability requirements, security review, and a documented launch status.",
  },
];

export default function Partners() {
  return (
    <Layout>
      <SEO />
      <HeroSection
        label="Partnerships"
        title={<>Build a Clearer Safety Program<br /><span className="text-gray-600">With Defined Roles and Limits</span></>}
        subtitle="MySentry evaluates partnership opportunities through product fit, approved feature status, privacy boundaries, response responsibilities, and current commercial terms."
        imageSrc="/images/partner-hero-800w.jpg"
        imageAlt="Business partners reviewing a safety program together"
        ctaText="Contact the Partnership Team"
        ctaLink="/contact"
      />

      <main>
        <section className="border-b border-slate-200 bg-white py-16">
          <div className="container max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">Direct answer</p>
            <h2 className="mt-4 text-4xl font-bold text-[#0b2f4f]">What is a MySentry partnership?</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-700">
              A MySentry partnership is a documented commercial or technical arrangement built around an approved use case. The evaluation should define the audience, supported features, device and plan requirements, data access, support ownership, emergency boundaries, commercial terms, and launch status before anything is promoted publicly.
            </p>
          </div>
        </section>

        <section className="bg-[#f5faf7] py-20">
          <div className="container max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0b6848]">Partnership paths</p>
              <h2 className="mt-4 text-4xl font-bold text-[#0b2f4f]">Start with the operating model</h2>
              <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-slate-700">
                Availability is not assumed. Each opportunity is reviewed against current product status, evidence, privacy, service coverage, and implementation requirements.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {partnerPaths.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <Icon className="h-9 w-9 text-[#0b6848]" aria-hidden="true" />
                  <h3 className="mt-5 text-2xl font-bold text-[#0b2f4f]">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container max-w-5xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#007bc2]">Before launch</p>
                <h2 className="mt-4 text-4xl font-bold text-[#0b2f4f]">Confirm the facts that customers will rely on</h2>
                <p className="mt-5 leading-relaxed text-slate-700">
                  Public copy should follow the approved agreement and current support documentation. Planned features, unverified proof, guaranteed outcomes, and unsupported compatibility statements should not be published.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Audience, geography, eligibility, and current plan",
                  "Supported devices, features, settings, and permissions",
                  "Privacy, data access, security, and retention boundaries",
                  "Monitoring, escalation, emergency, and support responsibilities",
                  "Pricing, billing, cancellation, equipment, and partner terms",
                  "Approved launch status, training, claims, and review process",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-[#edf8f1] p-4 text-slate-700">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0b6848]" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e8f3fb] py-20">
          <div className="container max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-[#0b2f4f]">Discuss a Partnership</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-700">
              Tell us about the audience, use case, region, devices, program requirements, and intended timeline. The team can then assess fit and define the next review step.
            </p>
            <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#0b6848] px-7 py-3 font-bold text-white hover:bg-[#084f38]">
              Contact the Partnership Team <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
