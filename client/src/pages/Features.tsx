import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, Activity, Car, HeartPulse, Video, Smartphone, Watch, Check, ArrowRight, AlertTriangle, MapPin, Zap, CheckCircle2, Lock, Users, TrendingDown, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <Layout>
      <SEO 
        title="Features" 
        description="Explore the 8 powerful features of MySentry: Panic Alarm, Fall Detection, Health Monitoring, Crash Detection, and more."
      />
      
      {/* HERO SECTION - High Impact, Dark Theme */}
      <section className="relative min-h-[80vh] flex items-center bg-black text-white pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />
           {/* Abstract background pattern */}
           <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
        </div>

        <div className="container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Advanced Protection System
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8">
              Everything You Need<br/>
              <span className="text-gray-500">For Total Safety.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-medium">
              MySentry detects falls, crashes, and abnormal Health Vitals using your smartwatch and phone, then alerts 24/7 professional monitoring with live video, location, and Health Vitals so help can be dispatched fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing">
                <Button className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl">
                  Start 7-Day Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE 1: PANIC ALARM - Split Layout */}
      <section className="py-0 bg-white">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          <div className="bg-gray-100 relative overflow-hidden flex items-center justify-center p-12">
             <div className="relative z-10 w-full max-w-md aspect-square bg-white rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden border border-gray-100">
                <div className="absolute inset-0 bg-red-50/50" />
                <ShieldAlert className="h-48 w-48 text-red-600 relative z-10" />
                
                {/* Floating UI Element */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 animate-pulse">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500 animate-ping" />
                    <span className="font-bold text-red-600 uppercase tracking-wider text-sm">Panic Signal Active</span>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="flex flex-col justify-center p-12 lg:p-24 bg-white">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-red-600"></span>
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Feature 01</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-black">
              Help With<br/>One Tap.
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Panic button on your phone or watch. Voice activation works even when your screen is locked. An agent answers in seconds. No waiting. No confusion. Just help.
            </p>

            <ul className="space-y-4">
              {[
                "One-tap panic button on phone and watch",
                "Voice activation ('Hey Siri Need Help')",
                "Instant live video connection",
                "Automatic location & health data sharing"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-0">
                  <CheckCircle2 className="h-6 w-6 text-red-600 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-900">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURE 2: FALL DETECTION - Dark Mode */}
      <section className="py-0 bg-black text-white">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          <div className="flex flex-col justify-center p-12 lg:p-24 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Feature 02</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8">
              Detects Falls.<br/>
              <span className="text-gray-500">Automatically.</span>
            </h2>
            
            <p className="text-xl text-gray-400 leading-relaxed mb-10">
              Hard fall? Your watch and phone know in 2 seconds and call for help. You don't have to do anything. The system responds for you.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "2 Second", desc: "Detection Speed" },
                { title: "Hands-Free", desc: "Auto-Activation" },
                { title: "Any Angle", desc: "360° Monitoring" },
                { title: "Live Video", desc: "Instant Context" }
              ].map((item, i) => (
                <div key={i} className="border border-white/10 p-6 rounded-xl hover:bg-white/5 transition-colors">
                  <h4 className="text-3xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 relative overflow-hidden flex items-center justify-center p-12 order-1 lg:order-2">
             <div className="relative z-10 w-full max-w-md aspect-square bg-black rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                <Activity className="h-48 w-48 text-primary relative z-10" />
             </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: NEAR-FALL DETECTION - Light Mode */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4 block">Feature 03</span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter mb-6 text-black">
              Near-Fall Detection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We don't just detect falls. We predict them. Identify instability before an accident happens.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: "Gait Analysis",
                desc: "Monitors walking patterns to detect shuffling or asymmetry."
              },
              {
                icon: Activity,
                title: "Balance Tracking",
                desc: "Identifies subtle sways or instability when standing."
              },
              {
                icon: AlertTriangle,
                title: "Proactive Alerts",
                desc: "Warns you and your family if fall risk increases."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                <item.icon className="h-12 w-12 text-orange-600 mb-6" />
                <h3 className="text-2xl font-bold uppercase tracking-wide mb-4 text-black">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE 4: CRASH DETECTION - High Impact Image */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop" 
            alt="Driving" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-blue-500"></span>
              <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Feature 04</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-none tracking-tight mb-8">
              Crash Detection.<br/>
              Instant Response.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-10">
              Driving alone? If you crash, MySentry detects the impact and calls for help instantly. We send your exact GPS location to first responders when every second counts.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <Car className="h-5 w-5 text-blue-400" />
                <span className="font-bold uppercase tracking-wide text-sm">Auto-Activate</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="font-bold uppercase tracking-wide text-sm">GPS Pinpoint</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: SMART CONNECTIVITY - Grid Layout */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-4 block">Feature 05</span>
              <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-black">
                Smart<br/>Connectivity.
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                MySentry works seamlessly with the devices you already own. No clunky pendants. No stigma. Just powerful protection on your wrist.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <Watch className="h-8 w-8 text-purple-600 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-wide mb-2 text-black">Apple Watch & WearOS</h4>
                    <p className="text-gray-600">Compatible with leading smartwatches for discreet, always-on protection.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Smartphone className="h-8 w-8 text-purple-600 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-wide mb-2 text-black">iOS & Android</h4>
                    <p className="text-gray-600">Full functionality across both major mobile platforms.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-[3rem] p-12 flex items-center justify-center">
               {/* Placeholder for device mockup */}
               <div className="relative w-64 h-64 bg-white rounded-full shadow-xl flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
                 <div className="absolute inset-0 border-4 border-purple-100 rounded-full animate-[ping_3s_ease-in-out_infinite]" />
                 <Users className="h-24 w-24 text-purple-600" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter mb-8">
            Ready for Total Protection?
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands who trust MySentry for their safety and independence.
          </p>
          <Link href="/pricing">
            <Button className="bg-white text-primary hover:bg-gray-100 font-bold uppercase tracking-wider rounded-full px-12 h-20 text-xl shadow-2xl hover:scale-105 transition-all">
              Start 7-Day Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
