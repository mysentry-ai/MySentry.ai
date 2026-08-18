import { Link } from "wouter";
import { ArrowRight, Stethoscope, HardHat, ShoppingCart, Hotel, Home, GraduationCap, ShieldCheck } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import GetStartedSection from "@/components/GetStartedSection";

const industries = [
  {
    title: "Home Healthcare",
    description: "Protect lone workers visiting patients at home with panic alerts, GPS tracking, and 24/7 professional monitoring.",
    href: "/industries/home-healthcare",
    icon: Stethoscope,
  },
  {
    title: "Construction",
    description: "Ensure safety for workers on hazardous job sites with fall detection, crash alerts, and instant emergency response.",
    href: "/industries/construction",
    icon: HardHat,
  },
  {
    title: "Retail",
    description: "Support staff safety during late hours and in large stores with discreet panic buttons and live video verification.",
    href: "/industries/retail",
    icon: ShoppingCart,
  },
  {
    title: "Hospitality",
    description: "Provide peace of mind for hotel and event staff working alone in rooms, hallways, and remote areas.",
    href: "/industries/hospitality",
    icon: Hotel,
  },
  {
    title: "Real Estate",
    description: "Keep agents safe during property viewings and open houses with silent panic alerts and location sharing.",
    href: "/industries/real-estate",
    icon: Home,
  },
  {
    title: "Education",
    description: "Enhance safety for teachers and staff on campus with emergency alerts, check-ins, and professional monitoring.",
    href: "/industries/education",
    icon: GraduationCap,
  },
  {
    title: "Security Guarding",
    description: "Equip security personnel with a reliable alert system for patrols, lone shifts, and high-risk assignments.",
    href: "/industries/security-guarding",
    icon: ShieldCheck,
  },
];

export default function IndustriesHub() {
  return (
    <Layout>
      <SEO />
      {/* Hero — title + subtitle + CTA only */}
      <section className="min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-b from-[#e8f5e9] to-white">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Industries</span>
            <h1 className="text-4xl md:text-[55px] leading-tight font-heading font-bold text-[#1a1a1a] mb-3 uppercase tracking-tighter">
              Industry Safety Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Protect your lone workers and staff with 24/7 monitoring.
            </p>
            <a href="/pricing">
              <button className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all inline-flex items-center gap-2">
                Book a Demo <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <Link key={ind.href} href={ind.href} onClick={() => window.scrollTo(0, 0)}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <ind.icon className="w-10 h-10 text-primary mb-4" />
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">{ind.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{ind.description}</p>
                  <span className="inline-flex items-center text-primary font-bold text-sm">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <GetStartedSection ctaText="Book a Demo" ctaLink="/contact" />
    </Layout>
  );
}
