import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SectionHeading, BodyText, LabelText } from "@/components/ui/typography";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Bell, Heart, Activity, Shield, ArrowRight, Clock } from "lucide-react";
import GetStartedSection from "@/components/GetStartedSection";

const HERO_IMAGE = "/images/cdn/hero-oura-ring-integration-gVAVE7WXQAwHMQbbzBA9nB.webp";

const plannedFeatures = [
  { icon: Heart, title: "Health Data Sync", body: "MySentry will securely access your Oura Ring's health data including HRV, SpO2, heart rate, and body temperature for early health change detection." },
  { icon: Activity, title: "Smart Health Alerts", body: "When your Oura Ring detects unusual patterns in your vitals, MySentry will alert our 24/7 monitoring agents to check on you." },
  { icon: Shield, title: "24/7 Emergency Response", body: "Adds fall detection, panic alarm, and professional monitoring on top of your Oura Ring's health tracking." },
  { icon: Bell, title: "Family Notifications", body: "Your chosen emergency contacts will be notified when health anomalies are detected or alerts are triggered." },
  { icon: Clock, title: "Sleep Pattern Monitoring", body: "MySentry will use Oura's sleep data to understand your patterns and detect irregularities that may signal a health concern." },
  { icon: ArrowRight, title: "Seamless Setup", body: "Simply connect your Oura account in the MySentry app via the secure Oura API. No extra hardware needed." },
];

const faqs = [
  { q: "When will the Oura Ring integration be available?", a: "We are actively developing the Oura Ring integration. Join the waitlist to be notified as soon as it launches. We expect availability in the coming months." },
  { q: "Will it replace my Oura Ring app?", a: "No. MySentry will work alongside your Oura Ring app. You will keep using Oura for your detailed health insights, sleep analysis, and activity tracking. MySentry adds the safety and emergency response layer." },
  { q: "Which Oura Ring models will be supported?", a: "We plan to support Oura Ring Generation 3 and newer models that provide the full suite of health sensors." },
  { q: "Will my health data be safe?", a: "Yes. We will use the official Oura API with end-to-end encryption. Your data will only be used for safety monitoring and will never be shared with third parties." },
  { q: "Do I need my smartphone for it to work?", a: "Yes. Your Oura Ring connects to your smartphone, and the MySentry app will run in the background to receive health data and send alerts when needed." },
];

export default function OuraRingIntegration() {
  return (
    <Layout>
      <SEO
        title="Oura Ring Integration Coming Soon | MySentry"
        description="MySentry + Oura Ring integration is coming soon. Add 24/7 emergency response, fall detection, and professional monitoring to your Oura Ring's health tracking."
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Oura Ring with health monitoring app"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8f5e9] via-[#e8f5e9]/90 to-transparent z-10" />
        </div>

        <div className="container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <LabelText variant="primary" className="mb-4 block">
              Integration - Coming Soon
            </LabelText>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#1a1a1a] mb-4">
              Oura Ring +<br />
              <span className="text-gray-600">MySentry</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-lg">
              We are building an integration that adds 24/7 emergency response and professional monitoring to your Oura Ring's health tracking. Be the first to know when it launches.
            </p>
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-5 py-2 mb-8">
              <Clock className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">Coming Soon</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/pricing#pricing-plans"
                className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center"
              >
                Join the Waitlist
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <LabelText className="text-primary">What We're Building</LabelText>
            <SectionHeading>Turn your Oura Ring into a personal safety device</SectionHeading>
            <BodyText className="text-xl">Your Oura Ring already tracks your health. MySentry will add the safety layer that responds when something goes wrong.</BodyText>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plannedFeatures.map((f, i) => { const Icon = f.icon; return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:shadow-lg transition-all">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5"><Icon className="h-6 w-6 text-primary" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>

      {/* How It Will Work */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <LabelText className="text-primary">How It Will Work</LabelText>
            <SectionHeading>Simple setup, powerful protection</SectionHeading>
          </div>
          <div className="space-y-6">
            {[
              { step: "1", title: "Download MySentry", body: "Get the app on your smartphone from the App Store or Google Play." },
              { step: "2", title: "Connect Your Oura Ring", body: "Link your Oura account in the MySentry app via the secure Oura API. Your data stays encrypted." },
              { step: "3", title: "Enable Health Monitoring", body: "Allow MySentry to access your health data for early anomaly detection and emergency alerting." },
              { step: "4", title: "Enjoy Peace of Mind", body: "MySentry works quietly in the background. If something goes wrong, our 24/7 agents respond immediately." },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-6 items-start bg-white rounded-2xl p-6 border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">{s.step}</div>
                <div><h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3><p className="text-gray-600">{s.body}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <LabelText className="text-primary">Common Questions</LabelText>
            <SectionHeading>Oura Ring integration FAQ</SectionHeading>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Integrations */}
      <section className="py-16 bg-[#f8fafc] border-y border-gray-100">
        <div className="container max-w-4xl">
          <h2 className="text-lg font-bold text-gray-900 mb-5 text-center">Available integrations today</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Apple Watch Integration", href: "/integrations/apple-watch" },
              { label: "Samsung Galaxy Watch", href: "/integrations/samsung-galaxy-watch" },
              { label: "All Features", href: "/features" },
              { label: "How It Works", href: "/how-it-works" },
              { label: "Pricing", href: "/pricing" },
            ].map((l, i) => (
              <Link key={i} href={l.href}><span className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/5 transition-colors">{l.label} <ArrowRight className="h-3 w-3" /></span></Link>
            ))}
          </div>
        </div>
      </section>

      <GetStartedSection />

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-[#003d60] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"><div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary blur-[150px]" /></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-amber-50/10 border border-amber-200/30 rounded-full px-5 py-2 mb-8">
                <Clock className="h-4 w-4 text-amber-300" />
                <span className="text-sm font-medium text-amber-200">Coming Soon</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-tight">Be the First to Know When Oura Ring Integration Launches.</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">Join the waitlist and we will notify you the moment it is available.</p>
              <Link href="/pricing#pricing-plans"><Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-12 h-16 text-lg transition-all hover:scale-105 shadow-xl">Join the Waitlist</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
