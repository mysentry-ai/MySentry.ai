import { AlertTriangle, ArrowRight, ClipboardCheck, FileSearch, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

interface EvidenceStatusPageProps {
  title: string;
  description: string;
  canonical: string;
  subject: string;
}

export default function EvidenceStatusPage({ title, description, canonical, subject }: EvidenceStatusPageProps) {
  return (
    <Layout>
      <SEO title={title} description={description} canonical={canonical} noindex />
      <main className="min-h-[70vh] bg-gradient-to-br from-white via-[#f3faf6] to-[#e8f3fb] px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#117a54]/20 bg-white px-4 py-2 text-sm font-bold text-[#0b6848] shadow-sm">
            <FileSearch className="h-4 w-4" aria-hidden="true" />
            Evidence review in progress
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-[#0b2f4f] sm:text-5xl">
            {subject} Case Study Is Under Review
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
            Previously published customer figures and outcome statements for this case study are not supported by the evidence currently available to the website team. They have been removed rather than presented as verified results.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: ClipboardCheck, title: "Evidence required", copy: "Publication requires a named source, methodology, measurement period, sample details, and documented approval." },
              { icon: ShieldCheck, title: "Claims controlled", copy: "No customer quotation, rating, certification, ROI figure, incident reduction, or response-time claim will be restored without approval." },
              { icon: AlertTriangle, title: "Page held from indexing", copy: "This route is temporarily marked noindex while the evidence review remains open." },
            ].map(({ icon: Icon, title: itemTitle, copy }) => (
              <section key={itemTitle} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Icon className="h-7 w-7 text-[#007bc2]" aria-hidden="true" />
                <h2 className="mt-4 text-xl font-bold text-[#0b2f4f]">{itemTitle}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{copy}</p>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-3xl bg-[#0b2f4f] p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold">Evaluate MySentry for your organization</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-slate-200">
              Discuss current features, eligibility, device requirements, privacy considerations, and workflow limitations with the MySentry team instead of relying on unverified historical results.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#76e6a5] px-6 py-3 font-bold text-[#063b2a] transition hover:bg-[#8cf0b5] focus:outline-none focus:ring-2 focus:ring-white">
                Book a Demo <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/employers" className="inline-flex items-center justify-center rounded-xl border border-white/60 px-6 py-3 font-bold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white">
                Review Employer Safety
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
