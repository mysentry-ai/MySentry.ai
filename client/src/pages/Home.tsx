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
import { Link } from "wouter";
import { Camera } from "lucide-react";
import RingAnnouncementSection from "@/components/RingAnnouncementSection";


export default function Home() {
  return (
    <Layout>
      <SEO />

      {/* Hero with ICP Selector and app screenshot */}
      <HeroSection
        label="Personal Safety and Health Monitoring with 24/7 Emergency Response"
        title="Always Someone Watching Over You."
        imageSrc="https://d2xsxph8kpxj0f.cloudfront.net/310519663247484611/5pk35fzRuLVvrjtZdt4C3R/hero-family-multigenerational-E2GoJdiP8d3vSnxHi3L9fP.webp"
        imageAlt="Multi-generational family including grandmother, parents, and teenagers enjoying time together outdoors"
        phoneMockupSrc="/images/app-home.png"
        phoneMockupAlt="MySentry app home screen showing the PANIC button, emergency contacts, Family Connectivity, and Health Monitoring with Watch Connected"
      >
        {/* Ring announcement pill banner */}
        <Link
          href="/ring"
          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-primary/30 text-[#1a1a1a] rounded-full px-4 py-2 text-sm font-semibold shadow-md hover:shadow-lg hover:border-primary transition-all mb-5 group"
        >
          <span className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full">
            <Camera className="w-3.5 h-3.5 text-primary" />
          </span>
          <span>New: MySentry now works with Ring</span>
          <span className="text-primary text-xs font-bold group-hover:translate-x-0.5 transition-transform">Learn More →</span>
        </Link>
        <ICPSelector className="mt-2" />
      </HeroSection>

      {/* Trust Signals Banner */}
      <TrustBanner />

      {/* MySentry × Ring Integration Announcement */}
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

      {/* Chatbot nudge - encourage questions */}
      <ChatbotNudge />

      {/* Testimonials */}
      <TestimonialSection />

      {/* Comparison Section */}
      <ComparisonSection />
    </Layout>
  );
}
