import { Link } from "wouter";
import { ArrowRight, Scale } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import GetStartedSection from "@/components/GetStartedSection";

const comparisons = [
  {
    title: "Noonlight vs MySentry",
    description: "Compare Noonlight and MySentry on panic button features, monitoring, fall detection, health tracking, and live video response.",
    href: "/compare/noonlight-vs-mysentry",
  },
  {
    title: "Life360 vs MySentry",
    description: "See how Life360's location sharing stacks up against MySentry's emergency response, health monitoring, and professional monitoring.",
    href: "/compare/life360-vs-mysentry",
  },
  {
    title: "FallCall vs MySentry",
    description: "Both target seniors, but MySentry adds live video, health monitoring, crash detection, and MeetSafe check-ins.",
    href: "/compare/fallcall-vs-mysentry",
  },
  {
    title: "Google Personal Safety vs MySentry",
    description: "Google offers free crash detection, but MySentry provides 24/7 professional monitoring, health tracking, and more.",
    href: "/compare/google-personal-safety-vs-mysentry",
  },
  {
    title: "SOSecure / ADT vs MySentry",
    description: "Compare traditional professional monitoring from SOSecure/ADT with MySentry's modern, app-based safety approach.",
    href: "/compare/sosecure-adt-vs-mysentry",
  },
];

export default function CompareHub() {
  return (
    <Layout>
      <SEO />
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#e8f5e9] to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Comparisons</span>
            <h1 className="text-4xl md:text-[55px] leading-tight font-heading font-bold text-[#1a1a1a] mb-6 uppercase tracking-tighter">
              How MySentry Compares
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in transparency. See how MySentry stacks up against other safety apps so you can make the best choice for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {comparisons.map((comp) => (
              <Link key={comp.href} href={comp.href} onClick={() => window.scrollTo(0, 0)}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <Scale className="w-10 h-10 text-primary mb-4" />
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">{comp.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{comp.description}</p>
                  <span className="inline-flex items-center text-primary font-bold text-sm">
                    Read Comparison <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <GetStartedSection />
    </Layout>
  );
}
