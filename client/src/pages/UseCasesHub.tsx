import { Link } from "wouter";
import { ArrowRight, Shield, Users, Heart, Briefcase, Stethoscope, Home } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import GetStartedSection from "@/components/GetStartedSection";

const useCases = [
  {
    title: "Safety App for Women",
    description: "Prepare for dates, runs, commutes, and time alone with supported alerts, Safety Checks, and trusted contacts.",
    href: "/use-cases/safety-app-for-women",
    icon: Shield,
  },
  {
    title: "Family Safety App",
    description: "Coordinate consent-based check-ins, trusted contacts, and supported alerts for the moments your family chooses.",
    href: "/use-cases/family-safety-app",
    icon: Users,
  },
  {
    title: "Medical Alert App for Seniors",
    description: "Support independent routines with agreed contacts, Safety Checks, eligible fall checks, and current plan limitations.",
    href: "/use-cases/medical-alert-app-for-seniors",
    icon: Heart,
  },
  {
    title: "Lone Worker Safety App",
    description: "Add supported check-ins and alerts within employer hazard controls, training, supervision, and emergency procedures.",
    href: "/use-cases/lone-worker-safety-app",
    icon: Briefcase,
  },
  {
    title: "Home Healthcare Worker Safety",
    description: "Plan for solo visits, changing homes, travel between appointments, employer procedures, and supported alerts.",
    href: "/use-cases/lone-worker-safety-app",
    icon: Stethoscope,
  },
  {
    title: "Safety for People Living Alone",
    description: "Build an independent-living routine with scheduled check-ins, trusted contacts, supported alerts, and a disconnected backup.",
    href: "/safety-for/people-living-alone",
    icon: Shield,
  },
  {
    title: "Personal Safety for Renters",
    description: "Add a portable personal-safety layer for apartments, shared spaces, transit, parking, and time away from home.",
    href: "/use-cases/personal-safety-app-for-renters",
    icon: Home,
  },
];

export default function UseCasesHub() {
  return (
    <Layout>
      <SEO />
      {/* Hero  -  title + subtitle + CTA only */}
      <section className="min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-b from-[#e8f5e9] to-white">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Use Cases</span>
            <h1 className="text-4xl md:text-[55px] leading-tight font-heading font-bold text-[#1a1a1a] mb-3 uppercase tracking-tighter">
              Who Uses MySentry
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              24/7 safety and health monitoring tailored to your life.
            </p>
            <a href="/pricing">
              <button className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all inline-flex items-center gap-2">
                Review Plans and Eligibility <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Use Case Cards */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <Link key={uc.title} href={uc.href} onClick={() => window.scrollTo(0, 0)}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <uc.icon className="w-10 h-10 text-primary mb-4" />
                  <h2 className="text-xl font-bold text-[#1a1a1a] mb-3">{uc.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{uc.description}</p>
                  <span className="inline-flex items-center text-primary font-bold text-sm">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
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
