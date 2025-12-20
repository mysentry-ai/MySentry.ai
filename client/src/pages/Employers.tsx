import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, TrendingUp, Users, DollarSign, AlertCircle, Video, Shield, Clock, CheckCircle2, ArrowRight, Zap, Car, Activity, BarChart3, Award, AlertTriangle } from "lucide-react";
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
      {/* Hero Section - PEACE: The Answer */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-[#e8f5e9] to-white pt-20">
        {/* Modern Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-primary/10 to-green-200/20 blur-[100px] animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-blue-100/30 to-primary/5 blur-[100px] animate-pulse" style={{animationDuration: '10s'}} />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">For Employers</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
              Protect your people when minutes matter and they cannot call for help.
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Workplace accidents and health emergencies happen fast. Often, the employee cannot call for help. MySentry detects falls, crashes, and abnormal Health Vitals and alerts 24/7 responders with live video, location, and Health Vitals so help can be dispatched fast and you stay informed.
            </p>
            
            <Link href="/pricing">
              <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Get Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="fade-in-up">
                <div className="text-3xl font-bold text-primary">$47K</div>
                <p className="text-sm text-gray-600 font-medium">Avg. cost per injury</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary">2 sec</div>
                <p className="text-sm text-gray-600 font-medium">Emergency detection</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">100%</div>
                <p className="text-sm text-gray-600 font-medium">Hands-off for you</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block relative perspective-1000 mt-12 lg:mt-0 w-full"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white transform hover:rotate-y-2 transition-transform duration-700 group">
              <img 
                src="/images/business-meeting-happy.jpg" 
                alt="Diverse team having a productive meeting" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 bg-white/90 backdrop-blur-xl p-3 lg:p-5 rounded-2xl shadow-lg border border-white/50 animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base lg:text-lg">Workforce Protected</p>
                    <p className="text-sm text-gray-600">Safety Score: 98/100 • Incidents: 0</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <DollarSign className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Downtime costs explode.</h3>
              <p className="text-gray-600 leading-relaxed">
                One workplace injury = lost productivity, medical costs, workers' comp claims, and replacement worker expenses. Average cost: $47,000 per incident.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retention plummets.</h3>
              <p className="text-gray-600 leading-relaxed">
                Employees who don't feel protected leave. Replacing a single employee costs 50-200% of their salary. Your best people walk out the door.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance premiums rise.</h3>
              <p className="text-gray-600 leading-relaxed">
                More claims = higher premiums. Fewer incidents = lower rates. MySentry reduces both the incidents and the claims.
              </p>
            </motion.div>
          </div>
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
                  <div className="absolute bottom-8 left-8 right-8 z-20">
                    <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 inline-flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <span className="font-bold text-gray-900 text-sm">Protected by MySentry</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PEACE: The Change & End Result */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-white/80 font-bold tracking-wider uppercase text-sm mb-4 block">The Transformation</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
              From liability to <br/>
              <span className="text-green-200">leadership.</span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Imagine a workplace where safety isn't just a policy—it's a guarantee. Where every employee knows they are valued and protected. That's the MySentry standard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "24/7 Monitoring",
                desc: "MySentry takes care of your Employees Safety and Health Monitoring 24/7 and Emergency responses."
              },
              {
                icon: Award,
                title: "Top Employer",
                desc: "Attract the best talent by proving you care about their well-being."
              },
              {
                icon: BarChart3,
                title: "Higher Profits",
                desc: "Lower costs + higher productivity = a healthier bottom line."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/pricing">
              <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-primary hover:bg-gray-100 font-bold shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1">
                Secure Your Workforce
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
