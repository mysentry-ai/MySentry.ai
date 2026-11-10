import { Link } from "wouter";
import { ArrowRight, Check, AlertTriangle, ChevronDown, Smartphone, Watch, Wifi, Battery, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import GetStartedSection from "@/components/GetStartedSection";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface Step {
  title: string;
  description: string;
}

interface ProofBlock {
  claim: string;
  detail: string;
}

interface SEOPageTemplateProps {
  // SEO
  seoTitle: string;
  seoDescription: string;
  canonical?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];

  // Hero Section
  label: string;
  h1: string;
  /** Optional subtitle shown below the h1 in a smaller, lighter style */
  h1Sub?: string;
  /** Short 1-2 line description shown below subtitle, above CTAs */
  heroDescription?: string;
  problem: string;
  empathy: string;
  steps: Step[];
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };

  // GEO Answer Block
  directAnswer: string;
  howItWorks: string[];
  afterAlert: string[];
  bestFor: string[];
  notIdealFor: string[];
  keyTakeaways: string[];
  faqs: FAQ[];

  // Setup / Requirements (AEO Phase 3)
  setupRequirements?: {
    devices: string;
    permissions: string;
    connectivity: string;
    limitations: string;
  };

  // Cite-ready proof blocks (GEO Phase 4)
  proofBlocks?: ProofBlock[];


   // Optional comparison table for AEO/GEO
  comparisonTable?: {
    heading: string;
    columns: string[];
    rows: { feature: string; values: string[] }[];
  };
  // Internal links
  relatedLinks: { text: string; href: string }[];
  // Optional hero visual
  heroImage?: string;
  heroImageAlt?: string;
  heroImagePresentation?: "editorial" | "app-screen";
}

export default function SEOPageTemplate({
  seoTitle,
  seoDescription,
  canonical,
  schema,
  label,
  h1,
  h1Sub,
  heroDescription,
  problem,
  empathy,
  steps,
  primaryCta,
  secondaryCta,
  directAnswer,
  howItWorks,
  afterAlert,
  bestFor,
  notIdealFor,
  keyTakeaways,
  faqs,
  setupRequirements,
  proofBlocks,
  comparisonTable,
  relatedLinks,
  heroImage,
  heroImageAlt,
  heroImagePresentation = "editorial",
}: SEOPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const showHeroLabel = label.trim().toLowerCase() !== "feature";

  // Build FAQPage schema
  const faqSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Build HowTo schema from steps
  const howToSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": h1,
    "description": directAnswer,
    "step": steps.map((step, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": step.title,
      "text": step.description
    }))
  };

  const allSchemas = schema 
    ? (Array.isArray(schema) ? [faqSchema, howToSchema, ...schema] : [faqSchema, howToSchema, schema]) 
    : [faqSchema, howToSchema];

  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        schema={allSchemas}
      />

      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-80px)] items-start bg-gradient-to-b from-[#e8f5e9] to-white pt-32 sm:pt-36 lg:min-h-[calc(100vh-96px)] lg:items-center lg:pt-36 xl:pt-40">
        <div className="container mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {showHeroLabel && (
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{label}</span>
              )}
              <h1 className="text-4xl md:text-[55px] leading-tight font-heading font-bold text-[#1a1a1a] mb-3 uppercase tracking-tighter">
                {h1}
              </h1>
              {h1Sub && (
                <p className="text-lg md:text-xl font-sans font-medium text-gray-600 mb-4 leading-snug">
                  {h1Sub}
                </p>
              )}
              {heroDescription && (
                <p className="text-base text-gray-500 mb-8 leading-relaxed max-w-lg">
                  {heroDescription}
                </p>
              )}
              {!heroDescription && h1Sub && <div className="mb-4" />}

              {/* CTAs  -  immediately after subtitle, fully visible above fold */}
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href={primaryCta.href} className="w-full sm:w-auto">
                  <Button size="lg" className="h-auto min-h-14 w-full whitespace-normal rounded-full bg-[#6AD990] px-5 py-4 text-center text-base font-bold uppercase tracking-wider text-[#1a1a1a] hover:bg-[#5bc97e] sm:w-auto sm:px-8 sm:text-lg">
                    {primaryCta.text}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                {secondaryCta && (
                  <Link href={secondaryCta.href} className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="h-auto min-h-14 w-full whitespace-normal rounded-full border-2 border-[#1a1a1a] px-5 py-4 text-center text-base font-bold uppercase tracking-wider text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white sm:w-auto sm:px-8 sm:text-lg">
                      {secondaryCta.text}
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {heroImage && (
              <div className="flex w-full justify-center">
                {heroImagePresentation === "app-screen" ? (
                  <div className="flex min-h-[320px] w-full max-w-[360px] items-center justify-center sm:min-h-[380px] lg:min-h-[460px] lg:max-w-[410px]">
                    <img
                      src={heroImage}
                      alt={heroImageAlt ?? h1}
                      className="max-h-[440px] w-auto max-w-full object-contain drop-shadow-2xl sm:max-h-[500px] lg:max-h-[560px]"
                      loading="eager"
                      width={600}
                      height={900}
                    />
                  </div>
                ) : (
                  <img
                    src={heroImage}
                    alt={heroImageAlt ?? h1}
                    className="w-full max-w-[560px] rounded-3xl object-cover shadow-2xl"
                    loading="eager"
                    width={600}
                    height={400}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Problem + Empathy + Steps  -  first section below the fold */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">{problem}</p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed italic">{empathy}</p>

          {/* 3-Step Plan */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-[#1a1a1a] text-lg">{step.title}</p>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GEO Direct Answer Block */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-[#f0f9f4] border border-primary/20 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-4">
              Quick Answer
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{directAnswer}</p>
          </div>

          {/* Cite-Ready Proof Blocks (GEO) */}
          {proofBlocks && proofBlocks.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-6">
                How MySentry Works: Verified Facts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {proofBlocks.map((block, i) => (
                  <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-[#1a1a1a] mb-1">{block.claim}</p>
                        <p className="text-sm text-gray-600">{block.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How It Works */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-6">
              How It Works
            </h2>
            <ul className="space-y-3">
              {howItWorks.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What Happens After an Alert */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-6">
              What Happens After an Alert
            </h2>
            <div className="space-y-4">
              {afterAlert.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#004F7B] text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Setup / Requirements Section (AEO) */}
          {setupRequirements && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-6">
                Setup and Requirements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-[#1a1a1a]">Device Compatibility</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{setupRequirements.devices}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Watch className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-[#1a1a1a]">Permissions Needed</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{setupRequirements.permissions}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Wifi className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-[#1a1a1a]">Connectivity</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{setupRequirements.connectivity}</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Battery className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-[#1a1a1a]">Limitations</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{setupRequirements.limitations}</p>
                </div>
              </div>
            </div>
          )}

          {/* Best For / Not Ideal For */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#f0f9f4] rounded-2xl p-6">
              <h2 className="text-xl font-heading font-bold text-[#1a1a1a] mb-4">Best For</h2>
              <ul className="space-y-2">
                {bestFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-xl font-heading font-bold text-[#1a1a1a] mb-4">Not Ideal For</h2>
              <ul className="space-y-2">
                {notIdealFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-6">
              Key Takeaways
            </h2>
            <div className="bg-[#004F7B] text-white rounded-2xl p-8">
              <ul className="space-y-4">
                {keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#6AD990] shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-[#1a1a1a] pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>


          {/* Comparison Table (AEO/GEO) */}
          {comparisonTable && (
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-6">
                {comparisonTable.heading}
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#004F7B] text-white">
                      <th className="text-left px-5 py-4 font-bold">Feature</th>
                      {comparisonTable.columns.map((col, i) => (
                        <th key={i} className={`text-left px-5 py-4 font-bold ${col === 'MySentry' ? 'text-[#6AD990]' : ''}`}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-5 py-3 font-medium text-[#1a1a1a]">{row.feature}</td>
                        {row.values.map((val, j) => (
                          <td key={j} className="px-5 py-3 text-gray-700">{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Related Links */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="font-bold text-[#1a1a1a] mb-4">Explore More</h3>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link, i) => (
                <Link key={i} href={link.href} onClick={() => window.scrollTo(0, 0)}>
                  <span className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 hover:bg-primary/10 text-gray-700 hover:text-primary rounded-full text-sm font-medium transition-colors cursor-pointer">
                    {link.text}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <GetStartedSection />
    </Layout>
  );
}
