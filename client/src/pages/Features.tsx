import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, Activity, Car, HeartPulse, Video, Smartphone, Watch, Check, ArrowRight, AlertTriangle, MapPin, Zap, CheckCircle2, Lock, Users, TrendingDown, Play, Phone, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <Layout>
      <SEO 
        title="Features" 
        description="Explore the 8 powerful features of MySentry: Panic Alarm, Fall Detection, Health Monitoring, Crash Detection, and more."
      />
      
      {/* HERO SECTION - Light Green Theme with Relatable Image */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Relatable Hero Image */}
           <img 
             src="/images/happy-senior-watch.jpg" 
             alt="Happy senior checking smartwatch" 
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
              Advanced Protection System
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8 text-[#1a1a1a]">
              Everything You Need<br/>
              <span className="text-gray-600">For Total Safety.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              MySentry detects falls, crashes, and abnormal Health Vitals using your smartwatch and phone, then alerts 24/7 professional monitoring with live video, location, and Health Vitals so help can be dispatched fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing">
                <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl">
                  Start 7-Day Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE 1: PANIC ALARM */}
      <section className="py-24 bg-white">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-red-600"></span>
              <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Feature 01</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
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
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
              <img src="/images/feature-panic.jpg" alt="Panic Alarm" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: FALL DETECTION */}
      <section className="py-24 bg-[#e8f5e9]">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-green-200">
              <img src="/images/feature-fall.jpg" alt="Fall Detection" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Feature 02</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              Detects Falls.<br/>
              <span className="text-gray-500">Automatically.</span>
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Hard fall? Your watch and phone know in 2 seconds and call for help. You don't have to do anything. The system responds for you.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "2 Second", desc: "Detection Speed" },
                { title: "Hands-Free", desc: "Auto-Activation" },
                { title: "Any Angle", desc: "360° Monitoring" },
                { title: "Live Video", desc: "Instant Context" }
              ].map((item, i) => (
                <div key={i} className="border border-green-200 bg-white/50 p-6 rounded-xl hover:bg-white transition-colors shadow-sm">
                  <h4 className="text-3xl font-bold text-[#1a1a1a] mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 3: NEAR-FALL DETECTION */}
      <section className="py-24 bg-white">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-orange-600"></span>
              <span className="text-orange-600 font-bold uppercase tracking-widest text-sm">Feature 03</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              Near-Fall<br/>Detection.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We don't just detect falls. We predict them. Identify instability before an accident happens by monitoring walking patterns and balance.
            </p>
            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
              <div className="flex items-start gap-4">
                <TrendingDown className="h-8 w-8 text-orange-600 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-[#1a1a1a] mb-2">Proactive Prevention</h4>
                  <p className="text-gray-600">Get alerts when your gait shows signs of shuffling or asymmetry, allowing you to take action before a fall occurs.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
              <img src="/images/feature-near-fall.jpg" alt="Near-Fall Detection" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: CRASH DETECTION */}
      <section className="py-24 bg-[#e8f5e9]">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-green-200">
              <img src="/images/feature-crash.png" alt="Crash Detection" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Feature 04</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              Crash Detection.<br/>
              Instant Response.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Driving alone? If you crash, MySentry detects the impact and calls for help instantly. We send your exact GPS location to first responders when every second counts.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-green-200 shadow-sm">
                <Car className="h-5 w-5 text-blue-600" />
                <span className="font-bold uppercase tracking-wide text-sm text-[#1a1a1a]">Auto-Activate</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-green-200 shadow-sm">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="font-bold uppercase tracking-wide text-sm text-[#1a1a1a]">GPS Pinpoint</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 5: SMART CONNECTIVITY */}
      <section className="py-24 bg-white">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-purple-600"></span>
              <span className="text-purple-600 font-bold uppercase tracking-widest text-sm">Feature 05</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              Smart<br/>Connectivity.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              MySentry works seamlessly with the devices you already own. No clunky pendants. No stigma. Just powerful protection on your wrist.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <Watch className="h-8 w-8 text-purple-600 mt-1" />
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-wide mb-2 text-[#1a1a1a]">Apple Watch & WearOS</h4>
                  <p className="text-gray-600">Compatible with leading smartwatches for discreet, always-on protection.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Smartphone className="h-8 w-8 text-purple-600 mt-1" />
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-wide mb-2 text-[#1a1a1a]">iOS & Android</h4>
                  <p className="text-gray-600">Full functionality across both major mobile platforms.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
              <img src="/images/feature-connectivity.webp" alt="Smart Connectivity" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 6: REAL-TIME HEALTH MONITORING */}
      <section className="py-24 bg-[#e8f5e9]">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-green-200">
              <img src="/images/feature-health.jpg" alt="Health Monitoring" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-pink-600"></span>
              <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Feature 06</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              Real-Time<br/>Health Vitals.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Monitor heart rate, oxygen levels, and more in real-time. Get alerts for abnormal readings so you can seek help before a medical emergency occurs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["Heart Rate", "Oxygen Levels", "Sleep Quality", "Activity Levels"].map((metric, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/60 p-4 rounded-xl border border-green-100">
                  <HeartPulse className="h-5 w-5 text-pink-600" />
                  <span className="font-bold text-[#1a1a1a]">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 7: 24/7 PROFESSIONAL MONITORING */}
      <section className="py-24 bg-white">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-blue-800"></span>
              <span className="text-blue-800 font-bold uppercase tracking-widest text-sm">Feature 07</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              24/7 Professional<br/>Monitoring.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Our certified agents are always there. Day or night, weekends or holidays. When an alert is triggered, a real person responds instantly to get you the help you need.
            </p>
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <div className="flex items-start gap-4">
                <Phone className="h-8 w-8 text-blue-800 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-[#1a1a1a] mb-2">Always On Call</h4>
                  <p className="text-gray-600">Live agents ready to dispatch police, fire, or EMS to your exact location immediately.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
              <img src="/images/feature-monitoring.jpg" alt="Professional Monitoring" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 8: VIDEO EVIDENCE */}
      <section className="py-24 bg-[#e8f5e9]">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-green-200">
              <img src="/images/feature-video.jpg" alt="Video Evidence" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-teal-600"></span>
              <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Feature 08</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              Live Video<br/>Evidence.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              In an emergency, context is everything. MySentry streams live video to responders, providing crucial information that voice alone cannot convey.
            </p>
            <div className="flex items-center gap-4 bg-white/80 p-6 rounded-2xl border border-green-200 shadow-sm">
              <Video className="h-10 w-10 text-teal-600" />
              <div>
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-1">Visual Verification</h4>
                <p className="text-gray-600">Responders see exactly what's happening, ensuring the right help arrives faster.</p>
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
