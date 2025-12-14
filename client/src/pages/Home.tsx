import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Watch, Smartphone, Activity, HeartPulse, ShieldAlert, Video, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - StoryBrand: The Hook (Curiosity) */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-white/5 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-secondary/10 blur-[100px]" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium backdrop-blur-md uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Compatible with Apple & Samsung
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight tracking-tight text-white">
              The Guardian <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                On Your Wrist.
              </span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-lg leading-relaxed font-light">
              You don't need another device. You need a smarter way to use the one you already own. Turn your Apple or Samsung Watch into a 24/7 life-saving companion.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-white/90 transition-all hover:scale-105 font-semibold">
                  Start 7-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                  Explore Features
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 flex items-center gap-6 text-sm text-white/40 font-medium">
              <div className="flex items-center gap-2">
                <Watch className="h-5 w-5" />
                <span>Apple Watch</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <Watch className="h-5 w-5" />
                <span>Samsung Galaxy</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                <span>iOS & Android</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content - Device Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[700px] w-full hidden lg:block"
          >
            {/* Main Device Image Placeholder - To be replaced with generated asset */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative w-[350px] h-[600px] bg-black rounded-[3rem] border-8 border-white/10 shadow-2xl overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80 z-10"></div>
                 {/* UI Mockup */}
                 <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center space-y-6">
                    <div className="h-24 w-24 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                      <ShieldAlert className="h-12 w-12 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Fall Detected</h3>
                      <p className="text-white/60 mt-2">Connecting to Agent...</p>
                    </div>
                    <div className="w-full bg-white/10 rounded-xl p-4 flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Video className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-white">Live Video Active</p>
                        <p className="text-xs text-white/50">Sharing location & vitals</p>
                      </div>
                    </div>
                 </div>
               </div>
               {/* Watch Mockup Floating */}
               <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-[200px] h-[200px] bg-black rounded-full border-4 border-white/10 shadow-2xl z-30 flex items-center justify-center">
                  <div className="text-center">
                    <HeartPulse className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <p className="text-3xl font-bold text-white">120</p>
                    <p className="text-xs text-white/50 uppercase tracking-widest">BPM Alert</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem (PEACE: Problem & Empathy) */}
      <section className="py-32 bg-background relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
              The Silent Anxiety of <br/>
              <span className="text-white/40">"What If?"</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed">
              Whether it's an aging parent living alone, a spouse with a health condition, or your own safety on a late-night run, the cognitive load of worry is exhausting. You shouldn't have to choose between freedom and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Passive Monitoring",
                desc: "Traditional alarms require you to press a button. But what if you can't?",
                icon: ShieldAlert
              },
              {
                title: "Blind Spots",
                desc: "Most trackers only count steps. They don't know when your heart rate spikes dangerously.",
                icon: Activity
              },
              {
                title: "Slow Response",
                desc: "Text alerts aren't enough. In an emergency, you need eyes on the scene instantly.",
                icon: Video
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <item.icon className="h-10 w-10 text-white/80 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution (PEACE: Answer) - 5 Core Components */}
      <section className="py-32 bg-white/5 border-y border-white/5">
        <div className="container">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              5 Layers of Protection. <br/>
              <span className="text-white/40">One Seamless App.</span>
            </h2>
            <p className="text-xl text-white/60 max-w-2xl">
              MySentry transforms the sensors in your watch and phone into a military-grade safety system.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                id: "01",
                title: "Panic Alarm",
                desc: "Triggered by voice, app, or watch button. Instant connection.",
                detail: "Works even if your phone is out of reach."
              },
              {
                id: "02",
                title: "Fall Detection",
                desc: "Smart watch sensors detect hard falls and auto-call for help.",
                detail: "Distinguishes between a stumble and a fall."
              },
              {
                id: "03",
                title: "Crash Detection",
                desc: "Uses accelerometer data to detect vehicle collisions instantly.",
                detail: "Alerts emergency services with your GPS coordinates."
              },
              {
                id: "04",
                title: "Real-Time Health",
                desc: "Learns your vitals norms. Triggers alarm if thresholds are breached.",
                detail: "Monitors heart rate, oxygen, and stress levels 24/7."
              },
              {
                id: "05",
                title: "24/7 Pro Monitoring",
                desc: "Live agents respond to every alert via video or voice.",
                detail: "We stay on the line until you are safe."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative p-8 md:p-12 rounded-3xl bg-black border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 font-heading font-bold text-8xl text-white group-hover:opacity-20 transition-opacity">
                  {feature.id}
                </div>
                <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <h3 className="text-3xl font-bold text-white mb-2">{feature.title}</h3>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-lg text-white/80">{feature.desc}</p>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-sm text-white/40 font-mono border-l border-white/20 pl-4">
                      {feature.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The "Live Video" Differentiator */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video flex items-center justify-center">
                {/* Placeholder for Video Call UI */}
                <div className="absolute inset-0 bg-gray-900">
                   <div className="absolute top-4 left-4 bg-red-500 px-3 py-1 rounded-full text-xs font-bold text-white animate-pulse">LIVE EMERGENCY</div>
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-blue-500 border-2 border-white"></div>
                        <div>
                          <p className="text-white font-bold">Agent Sarah</p>
                          <p className="text-white/60 text-sm">Dispatching EMS to your location...</p>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                Eyes on the Scene. <br/>
                <span className="text-white/40">Instantly.</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed">
                When an alarm triggers (passive or active), MySentry automatically initiates a <strong>Live Video Call</strong> to our 24/7 monitoring center and your 5 emergency contacts.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                  <span className="text-white/80">Agents can see the situation and dispatch the right help.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                  <span className="text-white/80">Family members can join the call immediately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                  <span className="text-white/80">GPS location is shared in real-time.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PEACE: Change & End Result */}
      <section className="py-32 bg-white text-black text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
            From Vulnerable to <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-500">Invincible.</span>
          </h2>
          <p className="text-2xl text-black/60 mb-12 leading-relaxed">
            Stop worrying about the "what ifs." Equip yourself and your loved ones with the most advanced safety software ever built.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-black text-white hover:bg-black/80 shadow-2xl hover:scale-105 transition-transform">
              Start Your 7-Day Free Trial
            </Button>
          </Link>
          <p className="mt-6 text-sm text-black/40 font-medium">
            30-Day Money-Back Guarantee • Cancel Anytime
          </p>
        </div>
      </section>
    </Layout>
  );
}
