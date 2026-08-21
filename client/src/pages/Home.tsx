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
import AppDashboardShowcase from "@/components/AppDashboardShowcase";
import ChatbotNudge from "@/components/ChatbotNudge";
import RingTopBanner from "@/components/RingTopBanner";
import RingAnnouncementSection from "@/components/RingAnnouncementSection";
import RingReminderBanner from "@/components/RingReminderBanner";


export default function Home() {
  return (
    <Layout>
      <SEO />

      {/* Hero with ICP Selector and app screenshot */}
      <HeroSection
        label="Personal Safety and Health Monitoring with 24/7 Emergency Response"
        title="Always Someone Watching Over You."
        imageSrc="/images/cdn/hero-family-multigenerational-E2GoJdiP8d3vSnxHi3L9fP.webp"
        imageAlt="Multi-generational family including grandmother, parents, and teenagers enjoying time together outdoors"
        phoneMockupSrc="/images/cdn/BzgBcDcalRQkMtut.webp"
        phoneMockupAlt="MySentry app on multiple devices showing personal safety features, health monitoring, and emergency response capabilities"
      >
        <ICPSelector className="mt-2" />
      </HeroSection>

      {/* Ring Appstore offer banner - premium announcement at bottom of hero */}
      <RingTopBanner />

      {/* Trust Signals Banner */}
      <TrustBanner />

      {/* MySentry x Ring Integration - main announcement section */}
      <RingAnnouncementSection />

      {/* App Dashboard Showcase - core monitoring story */}
      <AppDashboardShowcase />

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

      {/* Ring Appstore reminder - later in page, price comparison card */}
      <RingReminderBanner />

      {/* Chatbot nudge - encourage questions */}
      <ChatbotNudge />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Comparison Section */}
      <ComparisonSection />
    </Layout>
  );
}
