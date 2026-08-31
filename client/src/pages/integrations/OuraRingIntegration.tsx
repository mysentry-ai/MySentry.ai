import { ArrowRight, CirclePause, HeartPulse } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

export default function OuraRingIntegration() {
  return (
    <Layout>
      <SEO noindex />
      <main className="min-h-[75vh] bg-gradient-to-b from-[#e8f5e9] to-white px-5 pb-24 pt-32">
        <div className="container max-w-4xl">
          <div className="rounded-[2rem] border border-[#386758]/20 bg-white p-8 shadow-xl shadow-[#004F7B]/5 md:p-14">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#004F7B]/10 text-[#004F7B]">
              <HeartPulse className="h-8 w-8" aria-hidden="true" />
            </div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#386758]/25 bg-[#e8f5e9] px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#255044]">
              <CirclePause className="h-4 w-4" aria-hidden="true" />
              Integration not currently available
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#0F172A] md:text-[55px]">
              Oura Ring support is under evaluation.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#334155]">
              MySentry does not currently represent a production Oura Ring connection as available. No Oura account connection, supported-model list, launch date, health-data workflow, or emergency-response behavior is promised on this page.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#475569]">
              If a supported integration is released, MySentry will publish confirmed eligibility, permissions, privacy terms, regional availability, device requirements, and limitations before presenting it as a current feature.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/features" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#004F7B] px-7 py-3 font-bold text-white transition-colors hover:bg-[#003A5B]">
                Explore Current Features <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/integrations/apple-watch" className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#386758] px-7 py-3 font-bold text-[#255044] transition-colors hover:bg-[#e8f5e9]">
                Review Apple Watch Support
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
