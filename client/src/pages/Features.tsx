import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, Activity, Car, HeartPulse, Video, Smartphone, Watch, Check, ArrowRight, AlertTriangle, MapPin, Zap, CheckCircle2, Lock, Users, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <Layout>
      <SEO 
        title="Features" 
        description="Explore the 8 powerful features of MySentry: Panic Alarm, Fall Detection, Health Monitoring, Crash Detection, and more."
      />
      {/* Hero Section - PEACE: The Answer */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-b from-[#e8f5e9] to-white pt-20">
        {/* Modern Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-primary/10 to-green-200/20 blur-[100px] animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-blue-100/30 to-primary/5 blur-[100px] animate-pulse" style={{animationDuration: '10s'}} />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
              Everything you need for real time safety and health monitoring.
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              MySentry detects falls, crashes, and abnormal Health Vitals using your smartwatch and phone, then alerts 24/7 responders with live video, location, and Health Vitals so help can be dispatched fast.
            </p>
            
            <Link href="/pricing">
              <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature 1: Panic Alarm */}
      <section className="py-24 border-t border-gray-100 bg-white relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square rounded-[3rem] bg-gray-50 border border-gray-100 flex items-center justify-center relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-50" />
              <ShieldAlert className="h-48 w-48 text-red-500/20 group-hover:scale-110 transition-transform duration-700" />
              
              {/* Floating UI */}
              <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/50 animate-[float_5s_ease-in-out_infinite]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Panic Activated</p>
                    <p className="text-sm text-gray-600">Agent connecting in 2s...</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldAlert className="h-3 w-3" />
                Feature 01
              </div>
              <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
                Help with one tap. <br/>
                <span className="text-gray-400">Or one word.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Panic button on your phone or watch. Voice activation works even when your screen is locked. An agent answers in seconds. No waiting. No confusion. Just help.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "One-tap panic button on phone and watch",
                "Voice activation ('Help' or 'MySentry') in 6 languages",
                "Instant live video connection with agent",
                "Automatic location sent to emergency contacts"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-red-500" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="text-gray-600 italic leading-relaxed">
                <strong className="text-gray-900 not-italic">💡 Did you know?</strong> Voice activation works even when your phone is locked or in your pocket. No fumbling. No delays.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature 2: Fall Detection */}
      <section className="py-24 border-t border-gray-100 bg-[#f8fafc] relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Activity className="h-3 w-3" />
                Feature 02
              </div>
              <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
                Your watch detects falls. <br/>
                <span className="text-gray-400">Automatically.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hard fall? Your <strong>watch and phone</strong> know in 2 seconds and call for help. You don't have to do anything. You don't have to press a button. The system responds for you.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "2 Second Detection", desc: "Faster than you can press a button." },
                { title: "15 Second Countdown", desc: "Cancel if it was a false alarm." },
                { title: "Works at Any Angle", desc: "Standing, sitting, or lying down." },
                { title: "Live Video Instantly", desc: "Agent sees exactly what happened." }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <h4 className="font-bold text-gray-900 mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <p className="text-gray-600 italic leading-relaxed">
                <strong className="text-gray-900 not-italic">💡 The Reality:</strong> Most falls happen when no one is around. By the time someone finds you, hours have passed. MySentry detects falls instantly.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-[3rem] bg-white border border-gray-100 flex items-center justify-center relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-50" />
              <Activity className="h-48 w-48 text-orange-500/20 group-hover:scale-110 transition-transform duration-700" />
              
              {/* Floating UI */}
              <div className="absolute top-1/3 right-12 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-lg border border-white/50 animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Impact Detected</p>
                    <p className="text-xs text-gray-500">G-Force: 4.2g</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature 3: Near-Fall Detection */}
      <section className="py-24 border-t border-gray-100 bg-white relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square rounded-[3rem] bg-gray-50 border border-gray-100 flex items-center justify-center relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-50" />
              <AlertTriangle className="h-48 w-48 text-yellow-500/20 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-wider mb-6">
                <TrendingDown className="h-3 w-3" />
                Feature 03
              </div>
              <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
                Prevent falls <br/>
                <span className="text-gray-400">before they happen.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your watch detects a sudden drop in heart rate while you're walking—a sign you might lose balance. MySentry alerts you immediately so you can steady yourself.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Real-Time Heart Rate Monitoring while walking",
                "Immediate Alert to steady yourself",
                "Monitoring Team alerted and standing by",
                "Proactive prevention, not just reaction"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Feature 4: Crash Detection */}
      <section className="py-24 border-t border-gray-100 bg-[#f8fafc] relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Car className="h-3 w-3" />
                Feature 04
              </div>
              <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
                Crash detection <br/>
                <span className="text-gray-400">for every driver.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your phone detects high-speed impacts. If you don't respond, it sends your location to emergency services and your family. Works for teen drivers, elderly parents, and everyone in between.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <p className="text-gray-600 italic leading-relaxed">
                <strong className="text-gray-900 not-italic">💡 Did you know?</strong> Car crashes are the #1 cause of accidental death for teens. MySentry ensures they get help instantly, even if they can't call.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square rounded-[3rem] bg-white border border-gray-100 flex items-center justify-center relative overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50" />
              <Car className="h-48 w-48 text-blue-500/20 group-hover:scale-110 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Ready to feel safe?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Experience all 8 features risk-free. No contracts. Cancel anytime.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-primary hover:bg-gray-100 font-bold shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
