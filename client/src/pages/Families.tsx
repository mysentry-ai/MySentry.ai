import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, MapPin, AlertCircle, Video, Shield, Clock, CheckCircle2, ArrowRight, Eye, Smartphone, TrendingDown, Zap, Car, Activity, Watch, Users, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Families() {
  return (
    <Layout>
      <SEO 
        title="Families" 
        description="Protect your whole family with one subscription. MySentry works across iOS, Android, Apple Watch, and Samsung Watch."
      />
      {/* Hero Section - PEACE: The Answer */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#e8f5e9] to-white pt-20">
        {/* Modern Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-blue-100/30 to-primary/5 blur-[100px] animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-purple-100/30 to-primary/5 blur-[100px] animate-pulse" style={{animationDuration: '10s'}} />
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
              <span className="text-xs font-bold uppercase tracking-wider text-primary">For Modern Families</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold text-[#1a1a1a] mb-6 leading-[1.1] tracking-tight">
              One Subscription. <br/>
              Any Device. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Total Protection.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your family is unique. Your devices are mixed. MySentry bridges the gap, connecting <strong>smartphones and smartwatches</strong> (iOS, Android, Apple Watch, Samsung Watch) into one seamless safety network. No one gets left behind.
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
                  <Users className="mr-2 h-5 w-5" />
                  Family Features
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="fade-in-up">
                <div className="text-3xl font-bold text-primary">2 sec</div>
                <p className="text-sm text-gray-600 font-medium">Emergency alert</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <p className="text-sm text-gray-600 font-medium">Health monitoring</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">All OS</div>
                <p className="text-sm text-gray-600 font-medium">iOS & Android</p>
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
                src="/images/family-hero-base.jpg" 
                alt="Happy family using different devices" 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Device Compatibility Overlay */}
              <div className="absolute top-8 right-8 flex flex-col gap-3">
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 animate-[slideInRight_1s_ease-out]">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Smartphone className="h-4 w-4 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">iOS & Android</p>
                    <p className="text-[10px] text-gray-500">Fully Compatible</p>
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 animate-[slideInRight_1s_ease-out_0.2s]">
                  <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <Watch className="h-4 w-4 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">Apple & Samsung</p>
                    <p className="text-[10px] text-gray-500">Smart Watches</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/50 animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs font-bold shadow-sm">Dad</div>
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-pink-100 flex items-center justify-center text-xs font-bold shadow-sm">Mom</div>
                      <div className="h-10 w-10 rounded-full border-2 border-white bg-green-100 flex items-center justify-center text-xs font-bold shadow-sm">Sam</div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">All Devices Connected</p>
                      <p className="text-xs text-gray-600">iPhone 15 • Galaxy S24 • Apple Watch</p>
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center shadow-green-200 shadow-lg">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </motion.div>
        </div>
      </section>

      {/* PEACE: The Problem & Empathy */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">The Reality</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              You can't be everywhere <br/>
              <span className="text-gray-400">at once.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your teenager is driving. Your parent is home alone. Your spouse is traveling. The worry is constant. "Are they safe?" "Did they get there?" "Why aren't they answering?" It's exhausting.
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
                <AlertCircle className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety happens in seconds.</h3>
              <p className="text-gray-600 leading-relaxed">
                A fall. A crash. A panic. By the time you hear about it, precious minutes are gone. MySentry alerts you instantly so you can act.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">Health problems whisper.</h3>
              <p className="text-gray-600 leading-relaxed">
                A stroke doesn't announce itself. An irregular heartbeat goes unnoticed. But your <strong>watch and phone</strong> see it. And alert you before it becomes critical.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mixed devices? No problem.</h3>
              <p className="text-gray-600 leading-relaxed">
                Mom has an iPhone. Dad has Android. Kids have Samsung watches. MySentry connects everyone seamlessly. No "green bubble" drama—just safety.
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
                  Instant Response
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
                  One tap. <br/>
                  Instant help.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Your teenager in danger. Your parent needs help. Your child scared. One tap on their watch or phone. You're alerted. An agent responds. Emergency services are dispatched. All in seconds.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center animate-pulse">
                    <AlertCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Panic Alarm</h3>
                    <p className="text-sm text-gray-500">Activated via Watch or Phone</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Live audio/video connection to agents",
                    "GPS location sent to family instantly",
                    "Silent mode for discreet alerts",
                    "Works even if phone is out of reach"
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
                  src="/images/panic-alarm-watch.jpg" 
                  alt="Panic alarm on watch" 
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
                  <p className="font-bold text-gray-900 text-lg">Panic Button Pressed</p>
                  <p className="text-sm text-gray-600">Location shared with family & EMS</p>
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
              From constant worry to <br/>
              <span className="text-primary">total peace of mind.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Imagine knowing your family is safe without having to ask. Imagine sleeping soundly knowing you'll be alerted if anything happens. MySentry gives you that freedom.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Secure Connection",
                desc: "Bank-level encryption keeps your family's data private and safe."
              },
              {
                icon: Users,
                title: "Everyone Included",
                desc: "Add grandparents, kids, and partners. One plan covers the whole family."
              },
              {
                icon: Zap,
                title: "Always On",
                desc: "24/7 monitoring means you never have to worry about missing an alert."
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
                Protect Your Family Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
