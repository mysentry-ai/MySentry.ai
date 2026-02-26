import { Link } from "wouter";
import { ArrowRight, Shield, Users, Heart, Briefcase, Stethoscope } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import GetStartedSection from "@/components/GetStartedSection";

const useCases = [
  {
    title: "Safety App for Women",
    description: "Feel safer on dates, runs, or walking alone. Share your location, trigger a silent alarm, and get immediate help when you need it most.",
    href: "/use-cases/safety-app-for-women",
    icon: Shield,
  },
  {
    title: "Family Safety App",
    description: "Keep your loved ones safe with location sharing, automatic crash detection, and an easy way for family members to call for help.",
    href: "/use-cases/family-safety-app",
    icon: Users,
  },
  {
    title: "Medical Alert App for Seniors",
    description: "Live independently and confidently. Automatic fall detection and 24/7 monitoring provide a safety net for seniors living alone.",
    href: "/use-cases/medical-alert-app-for-seniors",
    icon: Heart,
  },
  {
    title: "Lone Worker Safety App",
    description: "Protect employees working alone. MySentry provides check-ins, a panic button, and 24/7 monitoring to ensure their safety in the field.",
    href: "/use-cases/lone-worker-safety-app",
    icon: Briefcase,
  },
  {
    title: "Home Healthcare Worker Safety",
    description: "Keep home health aides, visiting nurses, and in-home caregivers safe with panic alerts, GPS tracking, and professional monitoring.",
    href: "/use-cases/home-healthcare-worker-safety",
    icon: Stethoscope,
  },
];

export default function UseCasesHub() {
  return (
    <Layout>
      <SEO
        title="Who Uses MySentry | Safety App Use Cases"
        description="Discover how MySentry protects women, families, seniors, lone workers, and healthcare workers with 24/7 safety monitoring and emergency response."
        canonical="https://mysentry.ai/use-cases"
      />
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#e8f5e9] to-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Use Cases</span>
            <h1 className="text-4xl md:text-[55px] leading-tight font-heading font-bold text-[#1a1a1a] mb-6 uppercase tracking-tighter">
              Who Uses MySentry
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From women walking alone to seniors living independently, MySentry provides 24/7 safety and health monitoring tailored to your life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <Link key={uc.href} href={uc.href} onClick={() => window.scrollTo(0, 0)}>
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
