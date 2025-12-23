import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, AlertCircle, Activity, TrendingDown, Shield, Clock, CheckCircle2, ArrowRight, Zap, Play, UserCheck, HeartPulse, Watch, Pill, Home, Car } from "lucide-react";
import ExpandableCarousel from "@/components/ExpandableCarousel";
import { motion } from "framer-motion";

export default function Seniors() {
  return (
    <Layout>
      <SEO 
        title="Seniors" 
        description="Stay independent and safe with MySentry. 24/7 fall detection, health monitoring, and emergency response for active seniors."
      />
      
      {/* HERO SECTION - Standardized with Features Page Style */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Relatable Hero Image */}
           <img 
             src="/images/happy-senior-watch.jpg" 
             alt="Active senior enjoying life" 
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
              Independence & Dignity
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8 text-[#1a1a1a]">
              Live Life on<br/>
              <span className="text-gray-600">Your Own Terms.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              No bulky pendants. No stigma. Just a stylish smartwatch that protects you 24/7 with fall detection, health monitoring, and instant access to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing">
                <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center" onClick={() => window.scrollTo(0, 0)}>
                  START 7-DAY FREE TRIAL
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
              Independence shouldn't mean <br/>
              <span className="text-gray-400">being alone in an emergency.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              You want to stay in your own home. You don't want to be a burden. But the fear of "what if" is always there. What if I fall? What if I can't reach the phone?
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
                <Activity className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Falls happen fast.</h3>
              <p className="text-gray-600 leading-relaxed">
                1 in 4 seniors falls every year. If you can't get up, you can't call for help. MySentry detects the fall automatically and calls for you.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Health changes silently.</h3>
              <p className="text-gray-600 leading-relaxed">
                High heart rate? Low oxygen? Irregular rhythm? Your watch sees it before you feel it. We alert you and your family instantly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Watch className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. No ugly pendants.</h3>
              <p className="text-gray-600 leading-relaxed">
                Traditional medical alerts are stigmatizing and often left on the nightstand. MySentry works on the Apple or Samsung watch you already love to wear.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PEACE: The Solution (Expandable Carousel) */}
      <section className="py-32 bg-[#f8fafc] relative overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">Complete Protection</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
              Safety Without Compromise
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how MySentry keeps you safe and independent with advanced features designed for your lifestyle.
            </p>
          </div>

          <ExpandableCarousel 
            items={[
              {
                id: "fall-detection",
                title: "Fall Detection",
                subtitle: "Automatic help when you fall",
                description: "If you fall and can't get up, MySentry speaks for you. Our 24/7 monitoring center receives your location and sends help immediately.",
                image: "/images/challenge-senior-fall.jpg",
                icon: Activity,
                tag: "Automatic Alert",
                link: "/features",
                ctaText: "See How It Works"
              },
              {
                id: "crash-detection",
                title: "Crash Detection",
                subtitle: "Safety on the road",
                description: "Driving is key to independence. MySentry detects severe car crashes and automatically connects you to emergency services, even if you can't respond.",
                image: "/images/challenge-senior-crash.jpg",
                icon: Car,
                tag: "Road Safety",
                link: "/features",
                ctaText: "Learn More"
              },
              {
                id: "near-fall",
                title: "Near-Fall Detection",
                subtitle: "Prevent future accidents",
                description: "We track stability and near-falls to identify balance issues before a serious injury occurs, helping you stay proactive about your mobility.",
                image: "/images/challenge-senior-near-fall.jpg",
                icon: TrendingDown,
                tag: "Prevention",
                link: "/features",
                ctaText: "View Features"
              },
              {
                id: "health-monitoring",
                title: "Live Health Monitoring",
                subtitle: "Know before it's an emergency",
                description: "High heart rate? Low oxygen? Irregular rhythm? Your watch sees it before you feel it. We alert you and your family instantly so you can take action.",
                image: "/images/challenge-senior-health-monitoring.jpg",
                icon: HeartPulse,
                tag: "Proactive Care",
                link: "/features",
                ctaText: "Learn More"
              },
              {
                id: "panic-alarm",
                title: "Voice Panic Alarm",
                subtitle: "Help is just a word away",
                description: "In an emergency, just say the word or tap your watch. You're instantly connected to our 24/7 monitoring center, no phone required.",
                image: "/images/challenge-senior-panic.jpg",
                icon: AlertCircle,
                tag: "Instant Help",
                link: "/features",
                ctaText: "See How It Works"
              }
            ]} 
          />
        </div>
      </section>

      {/* PEACE: The Change & End Result */}
      <section className="py-32 bg-[#e8f5e9] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Transformation</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              From worry to <br/>
              <span className="text-primary">confidence.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Imagine going for a walk, gardening, or just living your life without the fear of "what if." MySentry gives you the confidence to live independently, knowing help is always on your wrist.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Total Protection",
                desc: "Falls, crashes, health issues, and panic button. All covered."
              },
              {
                icon: Watch,
                title: "Use Your Own Watch",
                desc: "No need to buy or wear a stigmatizing medical alert pendant."
              },
              {
                icon: Heart,
                title: "Peace of Mind",
                desc: "Your family knows you're safe, and you know help is always there."
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
                Try It Risk-Free.
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Experience the freedom of MySentry with our 7-day free trial. No contracts, cancel anytime.
              </p>
              <Link href="/pricing">
                <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-12 h-20 text-xl transition-all hover:scale-105 shadow-xl" onClick={() => window.scrollTo(0, 0)}>
                  START 7-DAY FREE TRIAL
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
