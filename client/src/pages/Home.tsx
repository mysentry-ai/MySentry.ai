import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Watch, Smartphone, Activity, HeartPulse, ShieldAlert, Video, CheckCircle2, Star, AlertTriangle, MapPin, Play, Users, Lock } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import SafetySimulation from "@/components/SafetySimulation";

export default function Home() {
  const testimonials = [
    {
      name: "Margaret Chen",
      role: "Daughter of Senior",
      quote: "Mom fell. Help arrived in 3 minutes. That's the difference between recovery and permanent damage.",
      avatar: "MC"
    },
    {
      name: "James Rodriguez",
      role: "Construction Manager",
      quote: "We went from hoping someone finds an injured worker to knowing instantly. That's peace of mind.",
      avatar: "JR"
    },
    {
      name: "Sarah Williams",
      role: "Active Senior",
      quote: "I can hike alone again. My family knows I'm safe. That's freedom."
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Home" 
        description="MySentry turns your smartwatch into a 24/7 personal safety device with professional monitoring, fall detection, and health alerts. Live freedom without fear."
      />
      {/* Hero Section - PEACE: The Answer */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#e8f5e9] to-white pt-20">
        {/* Modern Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-primary/10 to-secondary/5 blur-[120px] animate-pulse" style={{animationDuration: '8s'}} />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-blue-400/10 to-primary/5 blur-[100px] animate-pulse" style={{animationDuration: '10s'}} />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-[#1a1a1a]">
              Don’t face a health or safety emergency alone.
            </h1>
            
            <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
              MySentry turns your smartwatch and phone into real-time safety and health monitoring. It detects falls, crashes, and abnormal Health Vitals and sends live video, location, and Health Vitals to 24/7 responders so help can be dispatched fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-primary text-black hover:bg-primary/90 transition-all hover:scale-105 font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1" onClick={() => window.scrollTo(0, 0)}>
                  Start 7-Day Free Trial
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
            
            <div className="flex items-center gap-6 pt-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>No Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Cancel Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content - The Solution */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] lg:h-[800px] w-full block perspective-1000 mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 flex items-start pt-10 justify-center transform hover:rotate-y-2 transition-transform duration-700">
               {/* Main Visual - Rapid Response Monitoring Center */}
               <div className="relative w-[300px] h-[220px] lg:w-[550px] lg:h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white z-10 group">
                 <img 
                   src="/images/home-protection-bubble.png" 
                   alt="MySentry Protection Bubble" 
                   className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                 
                 {/* Floating UI Elements */}
                 <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 flex items-center gap-2">
                   <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-white text-xs font-bold tracking-wider">LIVE MONITORING</span>
                 </div>

                 
               </div>

               {/* Connection Lines */}
               <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] z-0 pointer-events-none overflow-visible opacity-60">
                 <path d="M 100 100 Q 350 50 600 200" fill="none" stroke="url(#gradient-line)" strokeWidth="3" strokeDasharray="8 8" className="animate-[dash_3s_linear_infinite]" />
                 <defs>
                   <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
                     <stop offset="50%" stopColor="#22c55e" stopOpacity="1" />
                     <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                   </linearGradient>
                 </defs>
               </svg>

               {/* Event Card - Fall Detection */}
               <div className="absolute top-0 left-0 lg:top-12 lg:-left-8 w-[240px] lg:w-[280px] bg-white/90 backdrop-blur-xl p-3 lg:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 z-30 animate-[float_6s_ease-in-out_infinite] scale-90 lg:scale-100 origin-top-left">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-100 p-2 rounded-xl">
                        <Activity className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Fall Detected</h4>
                        <p className="text-xs text-gray-500">Today, 2:41 PM</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-white bg-red-500 px-2 py-1 rounded-full shadow-red-200 shadow-lg">CRITICAL</span>
                  </div>
                  <div className="space-y-2 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Heart Rate</span>
                      <span className="font-bold text-gray-900">120 BPM</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full w-[85%] rounded-full"></div>
                    </div>
                  </div>
               </div>

               {/* Event Card - Crash Detection */}
               <div className="absolute top-24 -right-4 lg:top-40 lg:-right-12 w-[240px] lg:w-[280px] bg-white/90 backdrop-blur-xl p-3 lg:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 z-30 animate-[float_5s_ease-in-out_infinite_1s] scale-90 lg:scale-100 origin-top-right">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-orange-100 p-2 rounded-xl">
                        <AlertTriangle className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Crash Detected</h4>
                        <p className="text-xs text-gray-500">Today, 5:12 PM</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-white bg-orange-500 px-2 py-1 rounded-full shadow-orange-200 shadow-lg">ALERT</span>
                  </div>
                  <div className="space-y-2 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Impact Force</span>
                      <span className="font-bold text-gray-900">4.5 G</span>
                    </div>
                    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-orange-500 h-full w-[60%] rounded-full"></div>
                    </div>
                  </div>
               </div>

               {/* Event Card - Health Scare */}
               <div className="absolute bottom-32 -left-4 lg:bottom-48 lg:-left-12 w-[240px] lg:w-[280px] bg-white/90 backdrop-blur-xl p-3 lg:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 z-30 animate-[float_7s_ease-in-out_infinite_2s] scale-90 lg:scale-100 origin-bottom-left">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-xl">
                        <HeartPulse className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">Health Alert</h4>
                        <p className="text-xs text-gray-500">Today, 9:30 AM</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-white bg-blue-500 px-2 py-1 rounded-full shadow-blue-200 shadow-lg">INFO</span>
                  </div>
                  <div className="space-y-2 bg-gray-50 p-3 rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Irregular Rhythm</span>
                      <span className="font-bold text-gray-900">Detected</span>
                    </div>
                  </div>
               </div>

               {/* Emergency Contacts Card */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] lg:w-[320px] bg-white/90 backdrop-blur-xl p-3 lg:p-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 z-30 animate-[float_8s_ease-in-out_infinite_0.5s] scale-90 lg:scale-100 origin-bottom">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-2 rounded-xl">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">5 Emergency Contacts</h4>
                      <p className="text-xs text-green-600 font-medium">Notified Instantly</p>
                    </div>
                  </div>
                  <div className="flex -space-x-2 overflow-hidden">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-600">
                        {i}
                      </div>
                    ))}
                    <div className="h-8 w-8 rounded-full ring-2 ring-white bg-green-500 flex items-center justify-center text-white text-[10px] font-bold">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  </div>
               </div>

               {/* Response Card */}
               <div className="absolute bottom-12 -right-4 w-[280px] bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 z-30 animate-[float_7s_ease-in-out_infinite_1s]">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-md">
                        <img src="/images/agent-avatar.jpg" alt="Agent" className="h-full w-full object-cover" onError={(e) => e.currentTarget.src = 'https://ui-avatars.com/api/?name=Agent&background=0D8ABC&color=fff'} />
                      </div>
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Agent Sarah</p>
                      <p className="text-xs text-green-600 font-medium">Connected (0:02)</p>
                    </div>
                  </div>
                  <div className="bg-blue-50/50 p-3 rounded-xl border border-blue-100/50">
                    <p className="text-xs text-gray-700 font-medium leading-relaxed">"I've received your alert. EMS has been dispatched to your location."</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Simulation */}
      <SafetySimulation />

      {/* PEACE: The Problem & Empathy */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">The Reality</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              When seconds count, <br/>
              <span className="text-gray-400">silence is dangerous.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We all worry about the "what ifs." What if I fall and can't reach my phone? What if my heart rate spikes while I'm sleeping? What if my loved one wanders off? The anxiety of the unknown can be paralyzing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                color: "text-orange-500",
                bg: "bg-orange-50",
                title: "Unnoticed Accidents",
                desc: "Falls and crashes often leave victims unable to call for help. Hours can pass before anyone knows."
              },
              {
                icon: Activity,
                color: "text-red-500",
                bg: "bg-red-50",
                title: "Silent Health Crises",
                desc: "Heart attacks and strokes don't wait. Without immediate detection, the window for recovery closes fast."
              },
              {
                icon: Lock,
                color: "text-purple-500",
                bg: "bg-purple-50",
                title: "Vulnerable Isolation",
                desc: "Working or living alone shouldn't mean being defenseless. But without a lifeline, you are on your own."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`h-14 w-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-7 w-7 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PEACE: The Change & End Result */}
      <section className="py-32 bg-[#064e3b] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-10"></div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Transformation</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                From Vulnerable to <span className="text-primary">Invincible.</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Imagine a life where you never have to worry about being alone. Where help is always just a heartbeat away. MySentry replaces fear with confidence, giving you the freedom to live your life fully.
              </p>
              
              <div className="space-y-6">
                {[
                  "24/7 Professional Monitoring Center",
                  "Instant Voice Connection to Agents",
                  "Automatic Family Notifications",
                  "Works on the Watch You Already Own"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/pricing">
                  <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-white text-black hover:bg-gray-100 font-bold shadow-lg hover:shadow-white/20 transition-all" onClick={() => window.scrollTo(0, 0)}>
                    Start 7-Day Free Trial
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src="/images/happy-senior-hiking.jpg" alt="Senior hiking with confidence" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">SW</div>
                      <div>
                        <p className="font-bold text-white">Sarah Williams</p>
                        <p className="text-primary-foreground/80 text-sm">Active Senior</p>
                      </div>
                    </div>
                    <p className="text-lg text-white italic leading-relaxed">
                      "I can hike alone again. My family knows I'm safe. That's freedom."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Your safety can't wait.
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
            Join thousands of families who have chosen peace of mind. Try MySentry risk-free today.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-black hover:bg-gray-100 font-bold shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1" onClick={() => window.scrollTo(0, 0)}>
              Start 7-Day Free Trial
            </Button>
          </Link>
          <p className="mt-6 text-white/70 text-sm">
            Cancel anytime
          </p>
        </div>
      </section>
    </Layout>
  );
}
