import { Link } from "wouter";
import { ArrowRight, Check, AlertTriangle, ChevronDown } from "lucide-react";
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

interface SEOPageTemplateProps {
  // SEO
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];

  // Hero / StoryBrand
  label: string;
  h1: string;
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

  // Trust
  disclaimer?: string;

  // Internal links
  relatedLinks: { text: string; href: string }[];

  // Optional image
  heroImage?: string;
}

export default function SEOPageTemplate({
  seoTitle,
  seoDescription,
  canonical,
  schema,
  label,
  h1,
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
  disclaimer,
  relatedLinks,
  heroImage,
}: SEOPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const allSchemas = schema ? (Array.isArray(schema) ? [faqSchema, ...schema] : [faqSchema, schema]) : [faqSchema];

  return (
    <Layout>
      <SEO
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        schema={allSchemas}
      />

      {/* Hero / StoryBrand Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#e8f5e9] to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">{label}</span>
              <h1 className="text-4xl md:text-[55px] leading-tight font-heading font-bold text-[#1a1a1a] mb-6 uppercase tracking-tighter">
                {h1}
              </h1>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">{problem}</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed italic">{empathy}</p>

              {/* 3-Step Plan */}
              <div className="space-y-4 mb-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-[#1a1a1a]">{step.title}</p>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href={primaryCta.href}>
                  <Button size="lg" className="bg-[#6AD990] hover:bg-[#5bc97e] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full uppercase tracking-wider">
                    {primaryCta.text}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                {secondaryCta && (
                  <Link href={secondaryCta.href}>
                    <Button variant="outline" size="lg" className="border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold text-lg px-8 py-6 rounded-full uppercase tracking-wider hover:bg-[#1a1a1a] hover:text-white">
                      {secondaryCta.text}
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {heroImage && (
              <div className="hidden lg:block">
                <img
                  src={heroImage}
                  alt={h1}
                  className="rounded-3xl shadow-2xl w-full object-cover"
                  loading="eager"
                  width={600}
                  height={400}
                />
              </div>
            )}
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

          {/* Trust + Safety Disclaimer */}
          {disclaimer && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">{disclaimer}</p>
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
