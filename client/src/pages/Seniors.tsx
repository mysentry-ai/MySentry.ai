import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, AlertCircle, Activity, TrendingDown, Shield, Clock, CheckCircle2, ArrowRight, Zap, Play, UserCheck, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

export default function Seniors() {
  return (
    <Layout>
      <SEO 
        title="Seniors" 
        description="Stay independent and safe with MySentry. 24/7 fall detection, health monitoring, and emergency response for active seniors."
      />
      {/* Hero Section - PEACE: The Answer */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#e8f5e9] to-white pt-20">
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
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
              Stay Independent. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">With help ready when you can't call.</span>
            </h1>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">The Problem</h3>
                  <p className="text-gray-600 leading-relaxed">Falls and sudden health events can leave seniors unable to reach a phone or press a button.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <Heart className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">The Fear</h3>
                  <p className="text-gray-600 leading-relaxed">That vulnerability is frightening for seniors and the people who love them.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <Shield className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">The Answer</h3>
                  <p className="text-gray-600 leading-relaxed">MySentry watches for falls, crashes, and abnormal vitals using your watch and phone.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Zap className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">The Change</h3>
                  <p className="text-gray-600 leading-relaxed">Alerts trigger automatically, 24/7 responders can dispatch help, and family stays informed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <UserCheck className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">The Result</h3>
                  <p className="text-gray-600 leading-relaxed">More independence for seniors and more peace of mind for families.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 font-semibold backdrop-blur-sm">
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  See How It Works
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative perspective-1000"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white transform hover:rotate-y-2 transition-transform duration-700 group">
              <img 
                src="/images/senior-watch-happy.jpg" 
                alt="Active senior woman checking her smart watch" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Floating UI Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/50 animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
                    <Activity className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-bold text-gray-900 text-lg">Vitals Normal</p>
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex gap-4 text-xs font-medium text-gray-600">
                      <span className="flex items-center gap-1"><HeartPulse className="h-3 w-3" /> 72 BPM</span>
                      <span className="flex items-center gap-1"><Zap className="h-3 w-3" /> 98% O2</span>
                    </div>
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

      {/* PEACE: The Solution (Feature 1) */}
      <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <Activity className="h-3 w-3" />
                  Proactive Health
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
                  Your smart wearables know your body better than you do.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  MySentry doesn't just wait for an emergency. It learns YOUR baseline. Your normal heart rate. Your normal oxygen levels. Then it watches for changes, 24/7.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What MySentry monitors:</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Resting Heart Rate", desc: "Detects irregular patterns that signal heart problems" },
                    { title: "Heart Rate Variability (HRV)", desc: "Measures your heart's ability to adapt—a key health indicator" },
                    { title: "Blood Oxygen (SpO₂)", desc: "Alerts if oxygen levels drop, indicating respiratory distress" },
                    { title: "Wrist Temperature", desc: "Detects fever and inflammation before you feel sick" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="mt-1 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white">
                <img 
                  src="/images/senior-gardening.jpg" 
                  alt="Senior gardening with peace of mind" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-lg font-medium italic">"I don't worry about my heart anymore. My watch does that for me."</p>
                  <p className="text-sm opacity-80 mt-2">— Robert, 74</p>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-100 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PEACE: The Change (Feature 2) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white">
                <img 
                  src="/images/senior-hiking.jpg" 
                  alt="Senior hiking confidently" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">GPS Active</span>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-100 rounded-full blur-3xl -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <Shield className="h-3 w-3" />
                  Total Confidence
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
                  Go where you want. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Help follows you.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're in the garden, at the grocery store, or on a trail, MySentry goes with you. No base stations. No range limits. Just pure freedom.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                  <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                    <TrendingDown className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Fall Detection</h4>
                  <p className="text-sm text-gray-600">Detects hard falls and automatically calls for help if you don't move.</p>
                </div>
                <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                  <div className="h-10 w-10 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                    <Activity className="h-5 w-5 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Near Fall Detection</h4>
                  <p className="text-sm text-gray-600">Detects sudden drops in heart rate while walking to warn you before a fall happens.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - PEACE: The End Result */}
      <section className="py-32 bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
            Reclaim your independence today.
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Don't let fear make your world smaller. With MySentry, you can live fully, knowing help is always just a heartbeat away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/pricing">
              <Button size="lg" className="h-16 px-12 text-lg rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 font-bold shadow-xl hover:shadow-primary/20">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            Try it risk-free for 7 days. No credit card required.
          </p>
        </div>
      </section>
    </Layout>
  );
}
