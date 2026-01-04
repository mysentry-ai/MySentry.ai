import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, Activity, Car, HeartPulse, Video, Smartphone, Watch, Check, ArrowRight, AlertTriangle, MapPin, Zap, CheckCircle2, Lock, Users, TrendingDown, Play, Phone, Heart } from "lucide-react";
import AlertDemo from "@/components/AlertDemo";
import { motion } from "framer-motion";
import ActivationSteps from "@/components/ActivationSteps";

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
             src="/images/flyer-main.png" 
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
                <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl" onClick={() => window.scrollTo(0, 0)}>
                  START 7-DAY FREE TRIAL
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACTIVATION STEPS - 3-Step Process */}
      <ActivationSteps />

      {/* FEATURE 1: PANIC ALARM */}
      <section id="panic-alarm" className="py-24 bg-white scroll-mt-20">
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
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 relative group">
              <img src="/images/panic-feature.jpg" alt="Panic Alarm" className="w-full h-full object-cover" />
              <AlertDemo type="panic" className="absolute inset-0" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 2: FALL DETECTION */}
      <section id="fall-detection" className="py-24 bg-[#e8f5e9] scroll-mt-20">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-green-200 relative group">
              <img src="/images/frame-1.png" alt="Fall Detection" className="w-full h-full object-cover" />
              <AlertDemo type="fall" className="absolute inset-0" />
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
      <section id="near-fall-detection" className="py-24 bg-white scroll-mt-20">
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
              <img src="/images/frame-8.png" alt="Near-Fall Detection" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 4: CRASH DETECTION */}
      <section id="crash-detection" className="py-24 bg-[#e8f5e9] scroll-mt-20">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-green-200 relative group">
              <img src="/images/frame-6.png" alt="Crash Detection" className="w-full h-full object-cover" />
              <AlertDemo type="crash" className="absolute inset-0" />
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
      <section id="smart-connectivity" className="py-24 bg-white scroll-mt-20">
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
              Stay connected to your family without intrusive calls. See location, battery status, and activity levels in real-time.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                <Smartphone className="h-8 w-8 text-purple-600 mb-4" />
                <h4 className="font-bold text-[#1a1a1a] mb-2">Real-Time GPS</h4>
                <p className="text-sm text-gray-600">Know where they are, always.</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                <Users className="h-8 w-8 text-purple-600 mb-4" />
                <h4 className="font-bold text-[#1a1a1a] mb-2">Emergency Contacts</h4>
                <p className="text-sm text-gray-600">Share status with loved ones.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
              <img src="/images/feature-smart-connectivity.jpg" alt="Smart Connectivity" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 6: HEALTH MONITORING */}
      <section id="health-monitoring" className="py-24 bg-[#e8f5e9] scroll-mt-20">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-green-200 relative group">
              <img src="/images/feature-health.jpg" alt="Health Monitoring" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-pink-600"></span>
              <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Feature 06</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              Health Vitals<br/>Monitoring.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Your heart tells a story. We listen. Continuous monitoring of heart rate, oxygen levels, and HRV detects silent issues before they become emergencies.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Heart Rate", "SpO2 Oxygen", "HRV Stress", "Sleep Quality", "Activity"].map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white rounded-full border border-green-200 text-sm font-bold text-gray-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 7: LIVE VIDEO */}
      <section id="live-video" className="py-24 bg-white scroll-mt-20">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-indigo-600"></span>
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Feature 07</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              Live Video<br/>Streaming.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              During an emergency, seeing is believing. MySentry automatically streams live video to our monitoring center, giving agents critical context to dispatch the right help.
            </p>
            <div className="bg-indigo-50 p-8 rounded-2xl border border-indigo-100 flex items-center gap-6">
              <Video className="h-10 w-10 text-indigo-600" />
              <div>
                <h4 className="text-xl font-bold text-[#1a1a1a] mb-1">Evidence Capture</h4>
                <p className="text-gray-600">Video is securely recorded and can be used as evidence for accidents or assaults.</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
              <img src="/images/feature-video.jpg" alt="Live Video Streaming" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 8: MEETSAFE */}
      <section id="meetsafe" className="py-24 bg-[#e8f5e9] scroll-mt-20">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border border-green-200 relative group">
              <img src="/images/feature-meetsafe.jpg" alt="MeetSafe" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-teal-600"></span>
              <span className="text-teal-600 font-bold uppercase tracking-widest text-sm">Feature 08</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              MeetSafe<br/>Timer.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Meeting someone new? Set a timer. If you don't cancel it, we'll call to check on you. If you don't answer, we send help to your last known location.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <Lock className="h-5 w-5 text-teal-600" />
                </div>
                <span className="text-lg font-medium text-gray-800">Set timer for dates or sales</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-teal-600" />
                </div>
                <span className="text-lg font-medium text-gray-800">Automatic check-in call</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                  <ShieldAlert className="h-5 w-5 text-teal-600" />
                </div>
                <span className="text-lg font-medium text-gray-800">Escalation to emergency services</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#1a1a1a] text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter mb-8">
            Ready for Total Protection?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of users who trust MySentry for their safety and health monitoring.
          </p>
          <Link href="/pricing">
            <Button className="bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider rounded-full px-12 h-20 text-xl transition-all hover:scale-105 shadow-2xl">
              Start Your 7-Day Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
