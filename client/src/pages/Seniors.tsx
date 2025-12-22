import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, AlertCircle, Activity, TrendingDown, Shield, Clock, CheckCircle2, ArrowRight, Zap, Play, UserCheck, HeartPulse, Watch } from "lucide-react";
import { motion } from "framer-motion";

export default function Seniors() {
  return (
    <Layout>
      <SEO 
        title="Seniors" 
        description="Stay independent and safe with MySentry. 24/7 fall detection, health monitoring, and emergency response for active seniors."
      />
      {/* Hero Section - PEACE: The Answer */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#e8f5e9] pt-20">
        {/* Modern Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-green-200/30 to-primary/5 blur-[100px] animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-blue-100/30 to-primary/5 blur-[100px] animate-pulse" style={{animationDuration: '10s'}} />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <Shield className="h-3 w-3" />
              For Active Seniors
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
              Live independently. <br/>
              <span className="text-primary">Stay protected.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              You value your freedom. But a fall or health emergency can change everything in seconds. MySentry detects falls, crashes, and abnormal Health Vitals and alerts 24/7 professional monitoring with live video, location, and Health Vitals so help can be dispatched fast and your family stays informed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing">
                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1" onClick={() => window.scrollTo(0, 0)}>
                  Start 7-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full border-2 border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/40 font-semibold backdrop-blur-sm bg-white/50">
                  <Watch className="mr-2 h-5 w-5" />
                  How It Works
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200/50">
              <div className="fade-in-up">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <p className="text-sm text-gray-600 font-medium">Professional Monitoring</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary">99%</div>
                <p className="text-sm text-gray-600 font-medium">Fall Detection Accuracy</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">0</div>
                <p className="text-sm text-gray-600 font-medium">Equipment to Buy</p>
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
                src="/images/seniors-hero.jpg" 
                alt="Active senior using smartwatch" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 bg-white/90 backdrop-blur-xl p-3 lg:p-5 rounded-2xl shadow-lg border border-white/50 animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-2 lg:gap-4">
                  <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Activity className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base lg:text-lg">Health Vitals Normal</p>
                    <p className="text-sm text-gray-600">Heart Rate: 72 BPM • O2: 98%</p>
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
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">The Reality</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              Independence shouldn't mean <br/>
              <span className="text-gray-400">being alone in an emergency.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              You want to stay in your own home. You don't want to be a burden. But the fear of "what if" is always there. What if I fall? What if I can't reach the phone?
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
                <Activity className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Falls happen fast.</h3>
              <p className="text-gray-600 leading-relaxed">
                1 in 4 seniors falls every year. If you can't get up, you can't call for help. MySentry detects the fall automatically and calls for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Health changes silently.</h3>
              <p className="text-gray-600 leading-relaxed">
                High heart rate? Low oxygen? Irregular rhythm? Your watch sees it before you feel it. We alert you and your family instantly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Watch className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. No ugly pendants.</h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional medical alerts are stigmatizing and often left on the nightstand. MySentry works on the Apple or Samsung watch you already love to wear.
              </p>
            </motion.div>
          </div>
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <Shield className="h-3 w-3" />
                  Automatic Protection
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
                  Help is called <br/>
                  even if you can't speak.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  If you fall and can't get up, MySentry speaks for you. Our 24/7 monitoring center receives your location, health vitals, and live video instantly. We stay on the line until help arrives.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
                    <Activity className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Fall Detection</h3>
                    <p className="text-sm text-gray-500">Automatic & Instant</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Detects hard falls automatically",
                    "Connects to 24/7 agent in seconds",
                    "Shares GPS location with EMS",
                    "Notifies family members instantly"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] bg-white border border-gray-100 shadow-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-50" />
                <img 
                  src="/images/fall-detection-watch.jpg" 
                  alt="Fall detection alert on watch" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Alert Card */}
                <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/50 animate-[float_5s_ease-in-out_infinite]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500 animate-ping"></div>
                      <span className="font-bold text-red-600 text-sm uppercase tracking-wider">Emergency Alert</span>
                    </div>
                    <span className="text-xs text-gray-500">Now</span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">Hard Fall Detected</p>
                  <p className="text-sm text-gray-600">Connecting to Agent...</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PEACE: The Change & End Result */}
      <section className="py-32 bg-[#e8f5e9] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Transformation</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              From worry to <br/>
              <span className="text-primary">confidence.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Imagine going for a walk, gardening, or just living your life without the fear of "what if." MySentry gives you the confidence to live independently, knowing help is always on your wrist.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Total Protection",
                desc: "Falls, crashes, health issues, and panic button. All covered."
              },
              {
                icon: Watch,
                title: "Use Your Own Watch",
                desc: "No need to buy or wear a stigmatizing medical alert pendant."
              },
              {
                icon: Heart,
                title: "Peace of Mind",
                desc: "Your family knows you're safe, and you know help is always there."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-primary/10 hover:shadow-md transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/pricing">
              <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-primary text-white hover:bg-primary/90 font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1" onClick={() => window.scrollTo(0, 0)}>
                Start 7-Day Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
