import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, MapPin, AlertCircle, Video, Shield, Clock, CheckCircle2, ArrowRight, Eye, Smartphone, TrendingDown, Zap, Car, Activity, Watch, Users, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function Females() {
  return (
    <Layout>
      <SEO 
        title="Females" 
        description="Stay safe everywhere with MySentry. Discreet panic button, live location sharing, and 24/7 monitoring for women."
      />
      
      {/* HERO SECTION - Standardized with Features Page Style */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Relatable Hero Image */}
           <img 
             src="/images/females-hero.jpg" 
             alt="Confident woman walking in city" 
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
              Personal Safety Reimagined
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8 text-[#1a1a1a]">
              Freedom To Go<br/>
              <span className="text-gray-600">Anywhere.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              Walking alone at night? Meeting someone new? Traveling solo? MySentry is your silent guardian. Detects threats, shares your location, and alerts 24/7 professional monitoring with live video so help can be dispatched fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing">
                <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center">
                  Start 7-Day Free Trial
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
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">The Reality</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              Safety shouldn't be a <br/>
              <span className="text-gray-400">constant worry.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              You check your surroundings. You hold your keys. You share your location. But if something actually happens, who will help you in that split second?
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Phones are too slow.</h3>
              <p className="text-gray-600 leading-relaxed">
                In an emergency, you don't have time to unlock your phone and dial 911. You need a way to call for help instantly and discreetly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Solo activities feel risky.</h3>
              <p className="text-gray-600 leading-relaxed">
                Running alone? Taking an Uber late at night? Meeting a stranger from an app? The "what if" is always in the back of your mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Location isn't enough.</h3>
              <p className="text-gray-600 leading-relaxed">
                Sharing your location is great, but it doesn't stop an attack. You need someone who can see what's happening and send police immediately.
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6">
                  <Shield className="h-3 w-3" />
                  Discreet Protection
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
                  Help is just a <br/>
                  tap away.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Feel unsafe? Tap your watch or phone discreetly. No loud alarms. No obvious calls. Just an instant connection to a professional who can see what's happening and send help.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center animate-pulse">
                    <Eye className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">MeetSafe Mode</h3>
                    <p className="text-sm text-gray-500">For Dates & Meetings</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Set a safety timer before a meeting",
                    "If you don't check in, we alert your contacts",
                    "Live audio/video streams to monitoring center",
                    "GPS location tracked in real-time"
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
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-50" />
                <img 
                  src="/images/meetsafe-app.jpg" 
                  alt="MeetSafe app interface" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Alert Card */}
                <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/50 animate-[float_5s_ease-in-out_infinite]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse"></div>
                      <span className="font-bold text-purple-600 text-sm uppercase tracking-wider">Safety Timer</span>
                    </div>
                    <span className="text-xs text-gray-500">Active</span>
                  </div>
                  <p className="font-bold text-gray-900 text-lg">Check-in Required</p>
                  <p className="text-sm text-gray-600">In 15 minutes</p>
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
              From cautious to <br/>
              <span className="text-primary">confident.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Don't let fear hold you back. With MySentry, you can live your life fully, knowing that you're never truly alone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Total Protection",
                desc: "Panic button, crash detection, and MeetSafe mode for every situation."
              },
              {
                icon: Video,
                title: "Live Evidence",
                desc: "Video and audio are recorded and streamed to agents, providing crucial evidence."
              },
              {
                icon: Heart,
                title: "Peace of Mind",
                desc: "Your loved ones know you're safe, and you know help is always there."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
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
                Take Back Your Freedom.
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Start your 7-day free trial. Safety that fits your lifestyle.
              </p>
              <Link href="/pricing">
                <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-12 h-20 text-xl transition-all hover:scale-105 shadow-xl">
                  Start My Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
