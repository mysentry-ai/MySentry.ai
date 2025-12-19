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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">For Active Seniors</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
              Stay Independent. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Stay Safe.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              You want to live life on your terms, not be limited by "what ifs." MySentry turns the <strong>watch and phone</strong> you already love into a discreet, powerful safety companion that watches over you 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="fade-in-up">
                <div className="text-3xl font-bold text-primary">2 sec</div>
                <p className="text-sm text-gray-600 font-medium">Fall detection</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <p className="text-sm text-gray-600 font-medium">Health monitoring</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">12 sec</div>
                <p className="text-sm text-gray-600 font-medium">Agent response</p>
              </div>
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

      {/* PEACE: The Problem & Empathy */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">The Reality</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              Aging shouldn't mean <br/>
              <span className="text-gray-400">giving up your freedom.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We know the feeling. You want to stay active, but the worry is always there. "What if I fall?" "What if I can't get to the phone?" It's a silent weight that keeps you from doing the things you love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-10 rounded-[2.5rem] bg-red-50/50 border border-red-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-16 w-16 rounded-2xl bg-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <AlertCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Falls happen in seconds.
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                One moment you're fine. The next, you're on the ground. By then, it's too late to reach for a phone. The average response time for an unwitnessed fall is 18 hours. That's unacceptable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-10 rounded-[2.5rem] bg-orange-50/50 border border-orange-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Silent health crises.
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Heart attacks and strokes don't always announce themselves with pain. Often, they start with subtle changes in your vitals that you can't feel—but your watch can see.
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <Activity className="h-3 w-3" />
                  Proactive Health
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
                  Your devices know your body better than you do.
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
                        <strong className="text-gray-900 block mb-1">{item.title}</strong>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] bg-white border border-gray-100 shadow-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50" />
                <Heart className="h-48 w-48 text-primary/20 group-hover:scale-110 transition-transform duration-700" />
                
                {/* Floating Stats */}
                <div className="absolute top-1/4 right-12 bg-white p-4 rounded-2xl shadow-lg animate-[float_5s_ease-in-out_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                      <HeartPulse className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Heart Rate</p>
                      <p className="text-lg font-bold text-gray-900">72 BPM</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-12 bg-white p-4 rounded-2xl shadow-lg animate-[float_7s_ease-in-out_infinite_1s]">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">HRV Status</p>
                      <p className="text-lg font-bold text-gray-900">Optimal</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PEACE: The Change & End Result */}
      <section className="py-32 bg-[#064e3b] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Transformation</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
              Live without limits. <br/>
              <span className="text-primary">We've got your back.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Imagine going for that walk, gardening in the backyard, or living alone without a second thought. MySentry gives you the confidence to say "yes" to life again.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Total Independence",
                desc: "Live in your own home, on your own terms, for longer."
              },
              {
                icon: UserCheck,
                title: "Family Peace of Mind",
                desc: "Your loved ones stop worrying, knowing they'll be alerted instantly if you need them."
              },
              {
                icon: Zap,
                title: "Instant Response",
                desc: "Help is always 2 seconds away, whether you can press the button or not."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/pricing">
              <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-[#1a1a1a] hover:bg-gray-100 font-bold shadow-lg hover:shadow-white/20 transition-all hover:-translate-y-1">
                Reclaim Your Independence
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
