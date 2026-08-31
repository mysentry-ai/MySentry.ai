import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Heart, AlertCircle, Activity, TrendingDown, Shield, Clock, CheckCircle2, ArrowRight, Zap, Play, UserCheck, HeartPulse, Watch, Pill, Home, Car, MapPin, Phone, UserPlus, Battery, Bell } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ExpandableCarousel, { CarouselItem } from "@/components/ExpandableCarousel";
import GetStartedSection from "@/components/GetStartedSection";
import { motion } from "framer-motion";

export default function Seniors() {
  const seniorChallenges: CarouselItem[] = [
    {
      id: "fall-detection",
      title: "Fall Detection",
      subtitle: "Automatic help when you fall",
      description: "If you fall and can't get up, MySentry speaks for you. Our 24/7 monitoring center receives your location and sends help immediately.",
      image: "/images/cdn/gwomKudGCLLDoCXD.jpg",
      icon: Activity,
      tag: "Automatic Alert",
      link: "/how-it-works#fall-detection",
      ctaText: "See How It Works"
    },
    {
      id: "crash-detection",
      title: "Crash Detection",
      subtitle: "Safety on the road",
      description: "Driving is key to independence. MySentry detects severe car crashes and automatically connects you to emergency services, even if you can't respond.",
      image: "/images/cdn/ygjcYkgKzWhbNlUG.jpg",
      icon: Car,
      tag: "Road Safety",
      link: "/how-it-works#crash-detection",
      ctaText: "Learn More"
    },
    {
      id: "near-fall",
      title: "Near-Fall Detection",
      subtitle: "Prevent future accidents",
      description: "We track stability and near-falls to identify balance issues before a serious injury occurs, helping you stay proactive about your mobility.",
      image: "/images/cdn/KLbFzZRpBqFZhnRq.jpg",
      icon: TrendingDown,
      tag: "Prevention",
      link: "/how-it-works#health-monitoring",
      ctaText: "View Features"
    },
    {
      id: "health-monitoring",
      title: "Wellness Insights",
      subtitle: "Understand supported watch signals",
      description: "With permission, MySentry can surface supported smartwatch wellness metrics and configured alerts. These insights are not a medical diagnosis and vary by device and platform.",
      image: "/images/cdn/HXnFbPjpfnTSiaCR.jpg",
      icon: HeartPulse,
      tag: "Proactive Care",
      link: "/how-it-works#health-monitoring",
      ctaText: "Learn More"
    },
    {
      id: "panic-alarm",
      title: "Voice Panic Alarm",
      subtitle: "Start an alert from a supported device",
      description: "Use an available phone or supported-watch trigger to begin the configured alert workflow. Trigger methods depend on device, operating system, permissions, and connectivity.",
      image: "/images/watch-sos-lifestyle.png",
      icon: AlertCircle,
      tag: "User-Activated Alert",
      link: "/how-it-works#voice-panic",
      ctaText: "See How It Works"
    },
    {
      id: "home-alone",
      title: "Living Alone",
      subtitle: "Independent but connected",
      description: "Enjoy the privacy of your own home with the assurance that if anything happens, help is just a button press or voice command away.",
      image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=2670&auto=format&fit=crop",
      icon: Home,
      tag: "Home Safety",
      link: "/how-it-works#voice-panic",
      ctaText: "Live Freely"
    },
    {
      id: "check-in",
      title: "Daily Check-Ins",
      subtitle: "Reassurance for family",
      description: "Automated daily check-ins let your family know you're up and active, reducing their worry without intrusive phone calls.",
      image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2669&auto=format&fit=crop",
      icon: CheckCircle2,
      tag: "Family Peace",
      link: "/how-it-works#check-in",
      ctaText: "Connect"
    },
    {
      id: "gardening",
      title: "Outdoor Activities",
      subtitle: "Enjoy your hobbies",
      description: "Whether gardening or walking the dog, MySentry goes where you go, providing protection outside the range of traditional home systems.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2676&auto=format&fit=crop",
      icon: Zap,
      tag: "Active Life",
      link: "/how-it-works#geo-fencing",
      ctaText: "Go Outside"
    },
    {
      id: "caregiver-connection",
      title: "Caregiver Connection",
      subtitle: "Share selected safety context",
      description: "Choose trusted contacts and control the safety notifications or time-bounded location context they may receive. Continuous health data is not shared by default.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2568&auto=format&fit=crop",
      icon: UserPlus,
      tag: "Care Team",
      link: "/how-it-works#family-dashboard",
      ctaText: "Share Access"
    }
  ];

  return (
    <Layout>
      <SEO />
      
      <HeroSection
        label="Independence & Dignity"
        title={<>Live Life on<br/><span className="text-gray-600">Your Own Terms.</span></>}
        subtitle="Fall detection, health monitoring, and 24/7 emergency response for seniors living independently."
        imageSrc="/images/happy-senior-watch.jpg"
        imageAlt="Active senior enjoying life with smartwatch"
      />

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
                One slip in the bathroom or garden can leave you unable to get up. If your phone is in another room, you're stranded.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Silent health issues.</h3>
              <p className="text-gray-600 leading-relaxed">
                Heart rate spikes or low oxygen levels can signal trouble before you feel symptoms. Without monitoring, you might miss the warning signs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-red-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Every second counts.</h3>
              <p className="text-gray-600 leading-relaxed">
                In an emergency, fumbling for a phone or dialing 911 takes too long. You need a way to get help promptly, hands-free.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CAROUSEL: The Solution */}
      <section className="py-32 bg-[#003d60] text-white overflow-hidden">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Complete Protection</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Safety for Every<br/>
              <span className="text-gray-400">Part of Your Day.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
              From your morning walk to your evening routine, MySentry adapts to your life, providing discreet protection without changing your lifestyle.
            </p>
          </div>
        </div>
        
        <ExpandableCarousel items={seniorChallenges} />
      </section>

      {/* CTA SECTION */}
      <GetStartedSection
        sub
        ctaText="Review Plans and Eligibility"
        image="/images/seniors-hero-800w.jpg"
      />
    </Layout>
  );
}
