import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

interface ComparisonReviewPageProps {
  competitor: string;
  canonical?: string;
}

const questions = [
  "Which phones, watches, and operating systems are currently supported?",
  "How is an alert started, reviewed, canceled, and closed?",
  "Is professional monitoring included, optional, or unavailable?",
  "What context can be shared, with whom, and under which permissions?",
  "What happens when connectivity, location, audio, or video is unavailable?",
  "Which pricing, billing, cancellation, device, and regional terms apply today?",
];

export default function ComparisonReviewPage({ competitor, canonical }: ComparisonReviewPageProps) {
  const title = `${competitor} and MySentry Comparison Under Review`;

  return (
    <Layout>
      <SEO
        title={title}
        description={`The ${competitor} and MySentry comparison is being reviewed against current official product, pricing, compatibility, and policy sources.`}
        canonical={canonical}
        noindex
        nofollow={false}
      />

      <main className="bg-[#f7faf8] pb-24 pt-32">
        <section className="container max-w-5xl">
          <div className="rounded-[2rem] border border-[#386758]/15 bg-white p-8 shadow-sm md:p-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#004F7B]/10 px-4 py-2 text-sm font-bold text-[#004F7B]">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Evidence review in progress
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#0F172A] md:text-[52px]">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#475569]">
              We are reviewing this page against current official sources before publishing feature, price, compatibility, privacy, or performance comparisons. We will not present an unverified statement as a fact.
            </p>

            <div className="mt-10 rounded-3xl bg-[#eaf6ef] p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#0F172A]">Questions to verify before choosing a safety service</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {questions.map((question) => (
                  <div key={question} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-[#334155]">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#255044]" aria-hidden="true" />
                    <p className="leading-relaxed text-[#334155]">{question}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-[#475569]">
              Published comparisons will explain the verified alert workflow, available context, monitoring role, setup requirements, and current service conditions for each product.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/features" className="inline-flex items-center gap-2 rounded-full bg-[#004F7B] px-6 py-3 font-bold text-white hover:bg-[#003A5B]">
                Review Current MySentry Features <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/compare" className="inline-flex items-center gap-2 rounded-full border-2 border-[#255044] bg-white px-6 py-3 font-bold text-[#255044] hover:bg-[#eaf6ef]">
                Return to Comparison Guide <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
