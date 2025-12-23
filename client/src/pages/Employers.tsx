import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, TrendingUp, Users, DollarSign, AlertCircle, Video, Shield, Clock, CheckCircle2, ArrowRight, Zap, Car, Activity, BarChart3, Award, AlertTriangle, Building2 } from "lucide-react";
import WhyChooseCarousel from "@/components/WhyChooseCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { industries } from "@/data/industries";

export default function Employers() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  return (
    <Layout>
      <SEO 
        title="Employers" 
        description="Protect your workforce and reduce liability with MySentry. 24/7 monitoring, fall detection, and panic buttons for every industry."
      />
      
      {/* HERO SECTION - Standardized with Features Page Style */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Relatable Hero Image */}
           <img 
             src="/images/business-meeting-happy.jpg" 
             alt="Diverse team having a productive meeting" 
             className="absolute inset-0 w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#e8f5e9] via-[#e8f5e9]/90 to-transparent z-10" />
        </div>

        <div className="container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Workforce Protection
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8 text-[#1a1a1a]">
              Protect Your<br/>
              <span className="text-gray-600">Greatest Asset.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              Workplace accidents happen fast. MySentry detects falls, crashes, and health emergencies instantly, alerting 24/7 professional monitoring with live video so help arrives fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing">
                <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center" onClick={() => window.scrollTo(0, 0)}>
                  START 7-DAY FREE TRIAL
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PEACE: The Problem & Empathy */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">The Business Reality</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              Your employees are your <br/>
              <span className="text-gray-400">greatest asset.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              But injuries, health crises, and accidents create expensive downtime, turnover, and lost productivity. Employees who feel unprotected become disengaged. They leave.
            </p>
          </div>

          <WhyChooseCarousel />
        </div>
      </section>

      {/* Industries Section - PEACE: The Solution per Industry */}
      <section className="py-32 bg-[#f8fafc] border-t border-gray-100 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Industry Solutions</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
              Tailored Protection for <br/>
              <span className="text-gray-400">Every Industry</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every workplace has unique risks. MySentry adapts to yours. Select your industry to see how we solve your specific safety challenges.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className={`px-5 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 border ${
                  activeIndustry.id === industry.id
                    ? "bg-primary text-white border-primary shadow-lg scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                <industry.icon className="h-4 w-4" />
                {industry.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-2xl overflow-hidden relative min-h-[700px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-16 items-center h-full"
              >
                <div className="space-y-8 relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                      <activeIndustry.icon className="h-3 w-3" />
                      {activeIndustry.title}
                    </div>
                    
                    {/* 3 Core Problems */}
                    <div className="mb-8 space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge:</h3>
                      {activeIndustry.peace.problems.map((problem, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100">
                          <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                          <p className="text-gray-700 font-medium text-sm">{problem}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm">
                      <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        The MySentry Solution
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {activeIndustry.peace.answer}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <p className="text-xs text-gray-500 uppercase font-bold mb-1">The Change</p>
                        <p className="text-sm text-gray-900 font-medium">{activeIndustry.peace.change}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <p className="text-xs text-gray-500 uppercase font-bold mb-1">End Result</p>
                        <p className="text-sm text-gray-900 font-medium">{activeIndustry.peace.endResult}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <img 
                    src={activeIndustry.image} 
                    alt={activeIndustry.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/50 z-20 animate-[float_5s_ease-in-out_infinite]">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Protected 24/7</p>
                        <p className="text-sm text-gray-600">Zero incidents this month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-[#1a1a1a] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary blur-[150px]" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 uppercase tracking-tight">
                Protect Your Team Today.
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Reduce liability, improve morale, and keep your workforce safe.
              </p>
              <Link href="/pricing">
                <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-12 h-20 text-xl transition-all hover:scale-105 shadow-xl" onClick={() => window.scrollTo(0, 0)}>
                  START 7-DAY FREE TRIAL
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
