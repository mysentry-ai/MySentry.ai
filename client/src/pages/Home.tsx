import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Watch, Smartphone, Activity, HeartPulse, ShieldAlert, Video, CheckCircle2, Star, AlertTriangle, MapPin } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

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
      {/* Hero Section - Zero Cognitive Load */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#e8f5e9] pt-16">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#d4edda] blur-[100px]" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Works with Apple & Samsung Watches
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight tracking-tight text-[#1a1a1a] fade-in-up">
              Get help fast in a safety or health emergency.
            </h1>
            
            <p className="text-xl text-[#1a1a1a] max-w-lg leading-relaxed fade-in-up" style={{animationDelay: '0.1s'}}>
              Your watch detects falls and health problems. Your phone detects crashes. Your heart rate triggers alerts. Agents see everything live and dispatch help immediately. Your family stays connected every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 fade-in-up" style={{animationDelay: '0.2s'}}>
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 font-semibold shadow-lg hover:shadow-xl">
                  Start 7-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-primary/30 text-primary hover:bg-[#d4edda] hover:border-primary/50 hover-lift">
                  See How It Works
                </Button>
              </Link>
            </div>
            
            {/* Curiosity Sound Bite */}
            <div className="pt-8 p-4 rounded-2xl bg-[#d4edda] border border-primary/10 fade-in-up glow-effect" style={{animationDelay: '0.3s'}}>
              <p className="text-sm text-[#1a1a1a] italic">
                <strong className="text-primary">💡 Did you know?</strong> Fall detection works in under 2 seconds. That's faster than you can press a button. And it works even when you're unconscious.
              </p>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[700px] w-full hidden lg:block"
          >
            <div className="absolute inset-0 flex items-center justify-center">
               {/* Main Visual - Monitoring Center */}
               <div className="relative w-[500px] h-[400px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white hover-lift z-20">
                 <img 
                   src="/images/home-monitoring-center.jpg" 
                   alt="24/7 Professional Monitoring Center" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                   <div className="flex items-center gap-3">
                     <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                     <p className="text-white font-bold text-lg">Live Agent Connected</p>
                   </div>
                 </div>
               </div>

               {/* Floating Elements */}
               <div className="absolute -top-10 -right-10 w-[220px] bg-white p-4 rounded-2xl shadow-xl border border-primary/10 z-30 float-animation">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                      <ShieldAlert className="h-5 w-5 text-red-600 animate-pulse" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1a1a1a] text-sm">Fall Detected</p>
                      <p className="text-xs text-gray-500">2 seconds ago</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-primary h-full w-3/4 animate-[shimmer_2s_infinite]"></div>
                  </div>
                  <p className="text-xs text-primary font-bold mt-2 text-right">Dispatching Help...</p>
               </div>

               <div className="absolute -bottom-10 -left-10 w-[200px] bg-white p-4 rounded-2xl shadow-xl border border-primary/10 z-30 float-animation" style={{animationDelay: '1.5s'}}>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Video className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-[#1a1a1a] text-sm">Video Feed Live</p>
                      <p className="text-xs text-gray-500">Sharing with Family</p>
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars Overview */}
      <section className="py-32 bg-[#d4edda] relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-8">
              Safety. Health. Connectivity.
            </h2>
            <p className="text-xl text-[#1a1a1a] leading-relaxed">
              MySentry combines three essential pillars into one integrated solution. Detect emergencies instantly. Monitor your health continuously. Keep your family informed always.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldAlert,
                title: "🛡️ Safety",
                desc: "Instant detection and response when emergencies happen",
                features: ["Panic Alarm (voice or tap)", "Fall Detection (automatic)", "Crash Detection (automatic)", "Live Video Response"]
              },
              {
                icon: HeartPulse,
                title: "❤️ Health",
                desc: "Continuous monitoring of your vital signs 24/7",
                features: ["Real-Time Health Monitoring", "Personalized Baselines", "Near-Fall Detection", "Early Warning Alerts"]
              },
              {
                icon: MapPin,
                title: "🔗 Connectivity",
                desc: "Keep your family informed and connected always",
                features: ["Smart Connectivity Alerts", "5 Emergency Contacts", "Live Video Sharing", "Automated Location Updates"]
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#e8f5e9] border border-primary/10 hover:border-primary/30 transition-all shadow-sm hover:shadow-md hover-lift"
              >
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{pillar.title}</h3>
                <p className="text-[#1a1a1a] mb-6 font-semibold text-primary">{pillar.desc}</p>
                <ul className="space-y-2">
                  {pillar.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#1a1a1a] text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem (Zero Cognitive Load) */}
      <section className="py-32 bg-[#e8f5e9] relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-8">
              When seconds matter, you need help fast.
            </h2>
            <p className="text-xl text-[#1a1a1a] leading-relaxed">
              A fall. A crash. A health emergency. In critical moments, the first 5 minutes determine the outcome. Most alert systems are too slow. Too limited. Too disconnected.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Button Alerts Are Too Slow",
                desc: "You have to press a button. But what if you can't? What if you're unconscious?",
                icon: ShieldAlert
              },
              {
                title: "Trackers Don't Know Your Health",
                desc: "Step counters don't save lives. Real health monitoring does. Knowing YOUR baseline does.",
                icon: Activity
              },
              {
                title: "Text Alerts Aren't Enough",
                desc: "Agents need to see what's happening. Not guess. Not wait. See. Assess. Respond.",
                icon: Video
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-[#d4edda] border border-primary/10 hover:border-primary/30 transition-all shadow-sm hover:shadow-md hover-lift"
              >
                <item.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-[#1a1a1a] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution - 7 Core Features */}
      <section className="py-32 bg-[#d4edda] border-y border-primary/10">
        <div className="container">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6">
              Seven ways MySentry saves lives.
            </h2>
            <p className="text-xl text-[#1a1a1a] max-w-2xl">
              Your watch and phone already have the sensors. MySentry makes them work together to keep you safe, healthy, and connected.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                id: '01',
                title: 'Panic Alarm',
                desc: 'Say Help or tap a button. Agents answer in seconds.',
                detail: 'Works even if your phone is out of reach.',
                curiosity: 'Voice activation works in 6 languages and even when your phone is locked.'
              },
              {
                id: '02',
                title: 'Fall Detection',
                desc: 'Your watch knows when you fall. Calls for help automatically.',
                detail: 'Distinguishes between a stumble and a fall.',
                curiosity: 'Detects falls in under 2 seconds. Works even if you\'re unconscious.'
              },
              {
                id: '03',
                title: 'Near-Fall Detection',
                desc: 'Detects warning signs before you fall. Alerts you to prevent the fall.',
                detail: 'Monitors heart rate while walking for signs of loss of balance.',
                curiosity: 'Prevention is better than response. Catch the problem before it becomes a fall.'
              },
              {
                id: '04',
                title: 'Crash Detection',
                desc: 'Car crash? Your phone knows. Help is on the way.',
                detail: 'Alerts emergency services with your GPS location.',
                curiosity: 'Recognizes the unique impact of a car crash. Distinguishes from potholes.'
              },
              {
                id: '05',
                title: 'Health Monitoring',
                desc: 'Your watch learns YOUR normal. Alerts you if something is wrong.',
                detail: 'Monitors heart rate, oxygen, temperature, and stress 24/7.',
                curiosity: '80% of health emergencies show warning signs 24-48 hours early. We catch them.'
              },
              {
                id: '06',
                title: 'Smart Connectivity',
                desc: 'Your family gets automated location alerts at intervals you choose.',
                detail: 'Set it once. Forget about it. Your family knows you\'re safe.',
                curiosity: 'Families who know their loved one\'s location report 40% less anxiety.'
              },
              {
                id: '07',
                title: '5 Emergency Contacts',
                desc: 'Your family sees everything live. Video. Location. Vitals. All in real-time.',
                detail: 'Set up to 5 emergency contacts who get instant alerts and live video.',
                curiosity: 'Your family doesn\'t just hear about an emergency. They see it. They can help. They\'re there.'
              },
              {
                id: '08',
                title: '24/7 Live Agents',
                desc: 'Real people. Real video. Real help. Every time.',
                detail: 'We stay on the line until you are safe.',
                curiosity: 'Average response time: 12 seconds from alert to agent. 45 seconds to emergency services.'
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative p-8 md:p-12 rounded-3xl bg-[#e8f5e9] border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md hover-lift"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 font-heading font-bold text-8xl text-primary group-hover:opacity-10 transition-opacity">
                  {feature.id}
                </div>
                <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <h3 className="text-3xl font-bold text-primary mb-2">{feature.title}</h3>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-lg text-[#1a1a1a]">{feature.desc}</p>
                  </div>
                  <div className="md:col-span-1">
                    <div className="space-y-2">
                      <p className="text-sm text-[#1a1a1a] font-mono border-l-2 border-primary/20 pl-4">
                        {feature.detail}
                      </p>
                      <p className="text-xs text-primary/70 font-mono border-l-2 border-primary/10 pl-4 italic">
                        💡 {feature.curiosity}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Video Differentiator */}
      <section className="py-32 bg-[#e8f5e9] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6">
                The game changer: Live video.
              </h2>
              <p className="text-xl text-[#1a1a1a] mb-8 leading-relaxed">
                Traditional alert systems send you to a call center. MySentry sends you to an agent who can SEE what's happening. They assess the scene. They dispatch the right help. Your family sees everything live.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Agents see exactly what's happening",
                  "Your 5 emergency contacts see the live video",
                  "Video is recorded for every incident",
                  "Clear evidence for insurance and liability"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg text-[#1a1a1a]">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/features">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg">
                  See All Features
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 shadow-2xl overflow-hidden hover-lift">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Video className="h-32 w-32 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6">
              Real people. Real stories.
            </h2>
            <p className="text-xl text-[#1a1a1a]">
              MySentry has helped thousands of people and families stay safe, healthy, and connected.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-primary/10 hover:border-primary/30 transition-all shadow-sm hover:shadow-md hover-lift"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-[#1a1a1a] mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-primary/10 pt-4">
                  <p className="font-bold text-[#1a1a1a]">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-white/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-white/5 blur-[100px]" />
        </div>

        <div className="container relative z-10 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Ready to be safe, healthy, and connected?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              7-day free trial. No credit card required. Cancel anytime. See for yourself how MySentry keeps you and your family safe.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="h-14 px-12 text-lg rounded-full bg-[#e8f5e9] text-primary hover:bg-[#e8f5e9]/90 font-bold shadow-xl">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
