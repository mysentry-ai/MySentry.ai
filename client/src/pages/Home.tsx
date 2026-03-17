import SEO from "@/components/SEO";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import ICPSelector from "@/components/ICPSelector";
import TrustBanner from "@/components/TrustBanner";
import WhoWeProtectTabs from "@/components/WhoWeProtectTabs";
import HowItWorksDemo from "@/components/HowItWorksDemo";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhatWeProvide from "@/components/WhatWeProvide";


export default function Home() {
  return (
    <Layout>
      <SEO 
        title="MySentry - Safety & Health Monitoring App with 24/7 Response"
        description="MySentry turns your smartphone into a 24/7 safety companion. Panic alarm, fall detection, crash detection, health monitoring, and live video emergency response for individuals, families, seniors, and employers. Start your free trial today."
        canonical="https://mysentry.ai/"
      />

      {/* Hero with ICP Selector */}
      <HeroSection
        label="24/7 Personal Safety & Health Monitoring with Emergency Response"
        title={<>Never Face a Safety or<br/><span className="text-gray-600">Health Emergency Alone.</span></>}
        description="MySentry turns your smart phone and smart wearables into 24/7 safety and health monitoring so help is dispatched fast when you can't respond."
        imageSrc="/images/families-hero.jpg"
        imageAlt="Family safety and connection"
      >
        <ICPSelector className="mt-2" />
      </HeroSection>

      {/* Trust Signals Banner */}
      <TrustBanner />

      {/* How It Works Demo */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">How It Works</span>
            <h2 className="text-4xl md:text-[2.75rem] font-heading font-bold text-[#1a1a1a]">
              Protection in 4 Simple Steps
            </h2>
          </div>
          <HowItWorksDemo />
        </div>
      </section>

      {/* Who We Protect (4 Tabbed Cards) */}
      <WhoWeProtectTabs />

      {/* What We Provide */}
      <WhatWeProvide />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Comparison Section */}
      <ComparisonSection />
    </Layout>
  );
}
