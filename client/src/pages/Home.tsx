import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Activity, HeartPulse, ShieldAlert, CheckCircle2, Play, Star, MapPin, Mic, Wifi, Users, Phone } from "lucide-react";
import ExpandableCarousel from "@/components/ExpandableCarousel";
import HowItWorksDemo from "@/components/HowItWorksDemo";
import PricingSection from "@/components/PricingSection";
import UGCSection from "@/components/UGCSection";
import WhatWeProvide from "@/components/WhatWeProvide";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <SEO 
        title="Home" 
        description="MySentry turns your smartwatch into a 24/7 personal safety device with professional monitoring, fall detection, and health alerts. Live freedom without fear."
      />
      
      {/* HERO SECTION - Whoop Style: Full Screen Video Background */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Darker overlay for better text readability */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/8637185/8637185-sd_640_360_25fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container h-full flex flex-col justify-center items-start pt-32 pb-20 md:pt-20 md:pb-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl space-y-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-heading font-bold leading-[0.95] md:leading-[0.9] tracking-tighter text-white uppercase drop-shadow-lg">
              Don't Face a<br/>
              <span className="text-primary drop-shadow-md">Health or Safety</span><br/>
              Emergency Alone.
            </h1>
            
            <p className="text-xl md:text-2xl text-white max-w-2xl font-medium leading-relaxed drop-shadow-md">
              MySentry turns your phone and smartwatch into a 24/7 safety and health companion. We monitor, detect, and respond so help reaches you fast, even if you can't ask for it.
            </p>
            
            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 pt-8">
<Link href="/pricing">
                <Button className="w-full sm:w-auto bg-white hover:bg-gray-100 font-bold uppercase tracking-wider rounded-full px-8 md:px-10 h-14 md:h-16 text-base md:text-lg transition-all hover:scale-105 shadow-xl text-black" onClick={() => window.scrollTo(0, 0)}>
                  START 7-DAY FREE TRIAL
                </Button>
                <p className="text-xs text-white/80 mt-2 text-center font-medium drop-shadow-sm">
                  Credit card needed for 7-day free trial, but not charged for the first 7 days.
                </p>
              </Link>
              <Link href="/features">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white font-bold uppercase tracking-wider rounded-full px-8 md:px-10 h-14 md:h-16 text-base md:text-lg backdrop-blur-sm shadow-lg transition-colors hover:text-[#004F7B]" onClick={() => window.scrollTo(0, 0)}>
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  See How It Works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS DEMO */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Simple & Effective</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-6 text-[#1a1a1a]">
              Test Your Safety and See How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Experience it for yourself: Test the protection and monitoring features in real time.
            </p>
          </div>
          <HowItWorksDemo />
        </div>
      </section>

      {/* VALUE PROPOSITION - Expandable Carousel */}
      <section className="py-24 bg-[#e8f5e9] text-[#1a1a1a] overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Real Life Scenarios</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tight mb-6 text-[#1a1a1a]">
              Who Is MySentry For?
            </h2>
            <p className="text-xl text-gray-600">
              See how MySentry fits into the lives of families, seniors, and professionals.
            </p>
          </div>
          
          <ExpandableCarousel 
            items={[
              {
                id: "fall-detection",
                title: "Fall Detection",
                subtitle: "Automatic help when you fall",
                description: "Advanced sensors detect hard falls instantly. If you don't respond, we automatically alert our monitoring center and send help to your location.",
                image: "/images/frame-1.png",
                icon: ShieldAlert,
                tag: "Automatic Safety",
                link: "/features",
                ctaText: "Learn More"
              },
              {
                id: "crash-detection",
                title: "Crash Detection",
                subtitle: "Protection on the road",
                description: "MySentry detects severe car crashes and automatically connects you to emergency services, sharing your location even if you can't speak.",
                image: "/images/frame-6.png",
                icon: ShieldAlert,
                tag: "Driving Safety",
                link: "/features",
                ctaText: "Learn More"
              },
              {
                id: "health-monitoring",
                title: "Real-Time Health Monitoring",
                subtitle: "Proactive wellness tracking",
                description: "Continuous monitoring of heart rate and vital signs. We detect abnormalities before they become emergencies, giving you peace of mind.",
                image: "/images/frame-8.png",
                icon: HeartPulse,
                tag: "Health Insights",
                link: "/features",
                ctaText: "Learn More"
              },
              {
                id: "voice-panic",
                title: "Voice Activated Panic Alarm",
                subtitle: "Help is just a word away",
                description: "In an emergency, simply say your safe word to trigger a silent alarm. Our agents will listen in and dispatch help immediately.",
                image: "/images/panic-feature.jpg",
                icon: Mic,
                tag: "Hands-Free",
                link: "/features",
                ctaText: "Learn More"
              },
              {
                id: "smart-connectivity",
                title: "Smart Connectivity",
                subtitle: "Seamless integration",
                description: "MySentry works with your existing smartwatch and smartphone, creating a powerful safety network without needing extra bulky devices.",
                image: "/images/iphone-175.png",
                icon: Wifi,
                tag: "Always Connected",
                link: "/features",
                ctaText: "Learn More"
              },
              {
                id: "meetsafe",
                title: "MeetSafe",
                subtitle: "Date and meet with confidence",
                description: "Set a check-in timer before meeting someone new. If you don't check in, we'll alert your emergency contacts and monitoring center.",
                image: "/images/iphone-168.png",
                icon: Users,
                tag: "Personal Safety",
                link: "/features",
                ctaText: "Learn More"
              },
              {
                id: "emergency-contacts",
                title: "5 Emergency Contacts",
                subtitle: "Keep loved ones in the loop",
                description: "Designate up to 5 family members or friends to be notified instantly during an emergency, keeping your support network informed.",
                image: "/images/emergency-contacts.png",
                icon: Phone,
                tag: "Family Circle",
                link: "/features",
                ctaText: "Learn More"
              },
              {
                id: "professional-monitoring",
                title: "24/7 Professional Monitoring",
                subtitle: "Expert help, always ready",
                description: "Our certified monitoring center is always watching. We dispatch police, fire, or EMS with your exact location and health data.",
                image: "/images/app-home.png",
                icon: Activity,
                tag: "Live Response",
                link: "/features",
                ctaText: "Learn More"
              }
            ]} 
          />
        </div>
      </section>

      <PricingSection />
      
      <UGCSection />

      <WhatWeProvide />

      {/* FEATURE HIGHLIGHT - Split Layout */}
      <section className="py-0 bg-white">
        <div className="grid lg:grid-cols-2 min-h-[80vh]">
          <div className="bg-gray-100 relative overflow-hidden group">
            <img 
              src="/images/marketing-main.png" 
              alt="Live Monitoring" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-12 lg:p-24 space-y-8">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Total Protection</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight uppercase tracking-tight">
              We Watch<br/>So You Can Live.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Most safety devices are reactive. MySentry is proactive. We analyze data from your smartwatch in real-time to identify risks and intervene immediately.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Automatic Fall Detection",
                "24/7 Professional Monitoring",
                "Real-time GPS Location",
                "Live Audio & Video Connection"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-8">
              <Link href="/features">
                <Button className="bg-black text-white hover:bg-gray-800 font-bold uppercase tracking-wider rounded-full px-8 h-14 text-base">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS - Carousel Style */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6">
              Trusted by Families Everywhere
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from people who found peace of mind with MySentry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Mom fell. Help arrived in 3 minutes. That's the difference between recovery and permanent damage.",
                author: "Margaret Chen",
                role: "Daughter of Senior"
              },
              {
                quote: "We went from hoping someone finds an injured worker to knowing instantly. That's peace of mind.",
                author: "James Rodriguez",
                role: "Construction Manager"
              },
              {
                quote: "I can hike alone again. My family knows I'm safe. That's freedom.",
                author: "Sarah Williams",
                role: "Active Senior"
              }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xl font-medium leading-relaxed mb-8 text-gray-800">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-bold text-lg uppercase tracking-wide">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Bold & Direct */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tighter mb-8">
            Start Your Free Trial Today
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Experience the peace of mind that comes with 24/7 professional protection. No contracts, cancel anytime.
          </p>
<Link href="/pricing">
            <Button className="bg-white text-black hover:bg-gray-100 font-bold uppercase tracking-wider rounded-full px-12 h-20 text-xl shadow-2xl hover:scale-105 transition-all" onClick={() => window.scrollTo(0, 0)}>
              START 7-DAY FREE TRIAL
            </Button>
          </Link>
          <p className="mt-6 text-sm font-medium opacity-80 uppercase tracking-widest">
            No credit card required for setup
          </p>
        </div>
      </section>
    </Layout>
  );
}
