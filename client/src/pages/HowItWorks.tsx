import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ResponsiveImage from "@/components/ResponsiveImage";
import { ShieldAlert, Activity, Car, HeartPulse, Video, Smartphone, Watch, Check, ArrowRight, AlertTriangle, MapPin, Zap, CheckCircle2, Lock, Users, TrendingDown, Play, Phone, Heart } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AlertDemo from "@/components/AlertDemo";
import { motion } from "framer-motion";
import ActivationSteps from "@/components/ActivationSteps";
import FAQs from "@/components/FAQs";

export default function Features() {
  return (
    <Layout>
      <SEO
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Set Up MySentry for 24/7 Safety Monitoring",
            "description": "Get started with MySentry in 3 simple steps: create your account online, download the app, and activate 24/7 professional monitoring.",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Create Your Account Online",
                "text": "Visit mysentry.ai, choose your plan, and create your account online in under 2 minutes. Then download the MySentry app from the App Store or Google Play."
              },
              {
                "@type": "HowToStep",
                "name": "Pair Your Watch",
                "text": "Connect your Apple Watch (Series 6+) or Samsung Galaxy Watch (Watch 6+) to start real-time health and safety monitoring."
              },
              {
                "@type": "HowToStep",
                "name": "Activate Protection",
                "text": "Enable 24/7 professional monitoring, set up emergency contacts, and customize your safety preferences."
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How is MySentry different from the health tracking my Apple Watch or Samsung Watch already does?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your watch collects vitals. MySentry explains what they mean and alerts you when something's wrong. We use AI to learn your personal baseline and detect anomalies in real-time, connected to 24/7 professional monitoring."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to buy a new device to use MySentry?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No! MySentry works with Apple Watch (Series 6+) and Samsung Galaxy Watch (Watch 6+). No expensive, stigmatizing hardware required."
                }
              },
              {
                "@type": "Question",
                "name": "Can I use MySentry if I don't have a smartwatch?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, you can use the MySentry app on your smartphone for Panic Button, MeetSafe Timer, and Crash Detection. However, Fall Detection and Health Monitoring require a compatible smartwatch."
                }
              },
              {
                "@type": "Question",
                "name": "How does the Fall Detection work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "MySentry uses motion sensors in your smartwatch to detect hard falls. If you don't respond within 2 minutes or mark yourself unsafe, emergency contacts and 24/7 monitoring are notified immediately with your location."
                }
              },
              {
                "@type": "Question",
                "name": "Is my health data private and secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All health information is stored on encrypted servers, never shared with third parties without permission, and accessed only when you explicitly allow it."
                }
              }
            ]
          }
        ]}
      />
      
      <HeroSection
        label="Advanced Protection System"
        title={<>Your Smartwatch Collects Data.<br/><span className="text-gray-600">MySentry Gives You Answers.</span></>}
        imageSrc="/images/hero-section.svg"
        imageAlt="Happy senior checking smartwatch"
      />

      {/* ACTIVATION STEPS - 3-Step Process */}
      <ActivationSteps />

      {/* SECTION SEPARATOR - Wave */}
      <div className="w-full overflow-hidden leading-[0] rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* SUPPORTED DEVICES SECTION */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Universal Compatibility
            </span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-6 text-[#1a1a1a]">
              Use The Devices<br/>
              <span className="text-gray-500">You Already Own.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              No need to buy expensive, stigmatizing medical alert hardware. MySentry works seamlessly with the technology you use every day.
            </p>
          </div>

          <div className="space-y-20 mb-16">
            {/* Smartphones Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-1">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary text-white p-3 rounded-xl">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#1a1a1a]">Smartphones</h3>
                  </div>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Full support for both major platforms. Your phone is the hub of your safety network, connecting you to help instantly.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-800 flex items-center gap-2 shadow-sm">
                      <Smartphone className="h-4 w-4" /> iOS
                    </span>
                    <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-800 flex items-center gap-2 shadow-sm">
                      <Smartphone className="h-4 w-4" /> Android
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-2">
                <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 relative group">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/tWbqvldwXwmZtLzQ.jpg" 
                    alt="Supported Smartphones" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width="1280" height="720"
                  />
                </div>
              </div>
            </div>

            {/* Smartwatches Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1 lg:order-2">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary text-white p-3 rounded-xl">
                      <Watch className="h-6 w-6" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#1a1a1a]">Smartwatches</h3>
                  </div>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    Advanced health monitoring and fall detection right on your wrist. Works independently or with your phone.
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-800 flex items-center gap-2 shadow-sm">
                      <Watch className="h-4 w-4" /> Apple Watch
                    </span>
                    <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-bold text-gray-800 flex items-center gap-2 shadow-sm">
                      <Watch className="h-4 w-4" /> Galaxy Watch
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-2 lg:order-1">
                <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 relative group">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/IElpNKDyEyZQAZJG.jpg" 
                    alt="Supported Smartwatches" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width="1280" height="720"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Future Support Banner */}
          <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-wider">Coming Soon</span>
                </div>
                <h3 className="text-3xl font-bold mb-2">Expanding Our Ecosystem</h3>
                <p className="text-gray-400 max-w-xl">
                  We are actively developing support for smart rings and fitness bands to give you even more ways to stay protected.
                </p>
              </div>
              <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                 <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 mx-auto border border-white/10">
                      <div className="w-8 h-8 rounded-full border-4 border-white/40" />
                    </div>
                    <span className="text-xs font-medium tracking-wider uppercase">Smart Rings</span>
                 </div>
                 <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 mx-auto border border-white/10">
                      <div className="w-10 h-6 rounded-full border-2 border-white/40" />
                    </div>
                    <span className="text-xs font-medium tracking-wider uppercase">Fit Bands</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION SEPARATOR - Wave */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* FEATURES HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center bg-[#f8fafc] overflow-hidden">
        <div className="absolute inset-0 z-0">
           <ResponsiveImage 
             src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/fSRwJPgxLWLxasuV.jpg" 
             alt="Active senior lifestyle" 
             className="absolute inset-0 w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
        </div>

        <div className="container relative z-20 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Comprehensive Protection
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8 text-white">
              Advanced Features<br/>
              <span className="text-gray-300">For Peace of Mind.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-2xl font-medium">
              Explore the powerful technology that keeps you safe, connected, and independent every single day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION SEPARATOR - Wave */}
      <div className="w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

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
          <motion.div 
            className="order-1 lg:order-2 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full">
              <img src="/images/frame-1.png" alt="MySentry PANIC button screen on iPhone showing one-tap emergency activation" className="w-full h-auto object-contain max-h-[600px]" loading="lazy" width="390" height="844" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE 2: FALL DETECTION */}
      <section id="fall-detection" className="py-24 bg-[#e8f5e9] scroll-mt-20">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full">
              <img src="/images/frame-6.png" alt="MySentry fall detection alert screen showing automatic detection and 2-minute response window" className="w-full h-auto object-contain max-h-[600px]" loading="lazy" width="390" height="844" />
            </div>
          </motion.div>
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
              Hard fall? Your watch and phone detect it and call for help if you don't respond within 2 minutes. Need help sooner? Trigger the panic alarm instantly with your voice or a tap.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Instant", desc: "Panic Alarm" },
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
          <motion.div 
            className="order-1 lg:order-2 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full">
              <img src="/images/near-fall-detection-feature.svg" alt="Near-Fall Detection - Phone and Watch showing stumble alert" className="w-full h-auto object-contain max-h-[600px]" loading="lazy" width="259" height="302" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE 4: CRASH DETECTION */}
      <section id="crash-detection" className="py-24 bg-[#e8f5e9] scroll-mt-20">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full">
              <img src="/images/crash-detection-feature.svg" alt="Crash Detection - Phone and Watch showing crash detected alert" className="w-full h-auto object-contain max-h-[600px]" loading="lazy" width="258" height="301" />
            </div>
          </motion.div>
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
      <section id="family-connectivity" className="py-24 bg-white scroll-mt-20">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-purple-600"></span>
              <span className="text-purple-600 font-bold uppercase tracking-widest text-sm">Feature 05</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              Family<br/>Connectivity.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Know your family is safe without a single phone call. Share live location with up to 2 trusted contacts, and they can see your location too. Battery status and activity levels update in real time so you always know they are okay.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                <Smartphone className="h-8 w-8 text-purple-600 mb-4" />
                <h4 className="font-bold text-[#1a1a1a] mb-2">Live GPS Sharing</h4>
                <p className="text-sm text-gray-600">Share location with up to 2 trusted contacts.</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-2xl border border-purple-100">
                <Users className="h-8 w-8 text-purple-600 mb-4" />
                <h4 className="font-bold text-[#1a1a1a] mb-2">Emergency Contacts</h4>
                <p className="text-sm text-gray-600">Instant alerts sent to your chosen contacts.</p>
              </div>
            </div>
          </div>
          <motion.div 
            className="order-1 lg:order-2 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full">
              <img src="/images/iphone-175.png" alt="MySentry Family Connectivity screen showing live location sharing and emergency contacts" className="w-full h-auto object-contain max-h-[600px]" loading="lazy" width="390" height="844" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE 6: HEALTH MONITORING */}
      <section id="health-monitoring" className="py-24 bg-[#e8f5e9] scroll-mt-20">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full">
              <img src="/images/frame-8.png" alt="MySentry health monitoring screen showing real-time SpO2, heart rate, HRV, and personalized health insights" className="w-full h-auto object-contain max-h-[600px]" loading="lazy" width="390" height="844" />
            </div>
          </motion.div>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-pink-600"></span>
              <span className="text-pink-600 font-bold uppercase tracking-widest text-sm">Feature 06</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold uppercase leading-none tracking-tight mb-8 text-[#1a1a1a]">
              Personalized<br/>Health Insights.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              MySentry establishes your unique "normal" for key vitals using AI. Instead of generic ranges, you get insights tailored to YOUR body.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              <strong>Heart Rate Anomaly Detection:</strong> We continuously compare your live heart rate against your baseline. If we detect a "Risky Zone" pattern, you get an alert. If it hits the "Critical Zone," we notify emergency contacts immediately.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Personalized Baselines", "Anomaly Detection", "SpO2 Oxygen", "HRV Stress", "Sleep Quality"].map((tag, i) => (
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
          <motion.div 
            className="order-1 lg:order-2 relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full">
              <img src="/images/iphone-168.png" alt="MySentry live video streaming screen showing emergency video call to monitoring agent" className="w-full h-auto object-contain max-h-[600px]" loading="lazy" width="390" height="844" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURE 8: MEETSAFE */}
      <section id="meetsafe" className="py-24 bg-[#e8f5e9] scroll-mt-20">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="w-full">
              <img src="/images/WebMysentry(11).svg" alt="MeetSafe - Meetings and Meet Safe with Voice" className="w-full h-auto object-contain max-h-[600px]" loading="lazy" width="255" height="313" />
            </div>
          </motion.div>
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

      {/* FAQs Section */}
      <FAQs />

      {/* CTA Section */}
      <section className="py-32 bg-[#003d60] text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter mb-8">
            Ready for Total Protection?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of users who trust MySentry for their safety and health monitoring.
          </p>
          <Link href="/pricing#pricing-plans">
            <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-8 md:px-12 h-16 md:h-20 text-lg md:text-xl transition-all hover:scale-105 shadow-2xl w-full md:w-auto whitespace-normal md:whitespace-nowrap">
              Start Your 7-Day Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
