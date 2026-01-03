import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, AlertCircle, Activity, TrendingDown, Shield, Clock, CheckCircle2, ArrowRight, Zap, Play, UserCheck, HeartPulse, Watch, Pill, Home, Car, MapPin, Phone, UserPlus, Battery, Bell } from "lucide-react";
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
      image: "/images/watch-sos-lifestyle.png",
      icon: AlertCircle,
      tag: "Instant Help",
      link: "/features",
      ctaText: "See How It Works"
    },
    {
      id: "medication-reminder",
      title: "Medication Reminders",
      subtitle: "Never miss a dose",
      description: "Set custom reminders for your medications directly on your wrist. MySentry helps you stay on track with your health regimen.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2630&auto=format&fit=crop",
      icon: Pill,
      tag: "Health Routine",
      link: "/features",
      ctaText: "Stay Healthy"
    },
    {
      id: "wandering",
      title: "Wandering Prevention",
      subtitle: "Safe boundaries",
      description: "For those with memory concerns, set up safe zones. If you wander outside these areas, family members are notified immediately.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop",
      icon: MapPin,
      tag: "Memory Care",
      link: "/features",
      ctaText: "Stay Safe"
    },
    {
      id: "home-alone",
      title: "Living Alone",
      subtitle: "Independent but connected",
      description: "Enjoy the privacy of your own home with the assurance that if anything happens, help is just a button press or voice command away.",
      image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?q=80&w=2670&auto=format&fit=crop",
      icon: Home,
      tag: "Home Safety",
      link: "/features",
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
      link: "/features",
      ctaText: "Connect"
    },
    {
      id: "scam-protection",
      title: "Scam Protection",
      subtitle: "Verify before you trust",
      description: "Unsure about a caller or visitor? Use MySentry to quickly contact a trusted family member or our support team for verification.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2670&auto=format&fit=crop",
      icon: Shield,
      tag: "Security",
      link: "/features",
      ctaText: "Verify"
    },
    {
      id: "gardening",
      title: "Outdoor Activities",
      subtitle: "Enjoy your hobbies",
      description: "Whether gardening or walking the dog, MySentry goes where you go, providing protection outside the range of traditional home systems.",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=2676&auto=format&fit=crop",
      icon: Zap,
      tag: "Active Life",
      link: "/features",
      ctaText: "Go Outside"
    },
    {
      id: "caregiver-connection",
      title: "Caregiver Connection",
      subtitle: "Seamless updates",
      description: "Grant access to caregivers so they can monitor your vitals and location, ensuring everyone is on the same page about your health.",
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2568&auto=format&fit=crop",
      icon: UserPlus,
      tag: "Care Team",
      link: "/features",
      ctaText: "Share Access"
    },
    {
      id: "low-battery",
      title: "Low Battery Alerts",
      subtitle: "Always powered",
      description: "We notify you and your emergency contacts when your watch battery is low, ensuring you're never without protection.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2680&auto=format&fit=crop",
      icon: Battery,
      tag: "System Health",
      link: "/features",
      ctaText: "Stay Charged"
    },
    {
      id: "weather-alert",
      title: "Severe Weather",
      subtitle: "Stay informed",
      description: "Receive critical weather alerts directly to your wrist, giving you time to prepare or seek shelter during storms or extreme heat.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2670&auto=format&fit=crop",
      icon: Bell,
      tag: "Safety Alerts",
      link: "/features",
      ctaText: "Be Ready"
    },
    {
      id: "telehealth",
      title: "Telehealth Ready",
      subtitle: "Share data easily",
      description: "Easily share your health trends and vitals history with your doctor during appointments for better informed care.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      icon: Phone,
      tag: "Medical Data",
      link: "/features",
      ctaText: "Share Data"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Seniors" 
        description="Stay independent and safe with MySentry. 24/7 fall detection, health monitoring, and emergency response for active seniors."
      />
      
      {/* HERO SECTION - Standardized with Females Page Style */}
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
                One slip in the bathroom or garden can leave you unable to get up. If your phone is in another room, you're stranded.
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
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Silent health risks.</h3>
              <p className="text-gray-600 leading-relaxed">
                Heart issues and infections often start silently. Without monitoring, you might not know something is wrong until it's an emergency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. The burden worry.</h3>
              <p className="text-gray-600 leading-relaxed">
                You hide health concerns because you don't want to worry your kids. But this lack of information actually increases their anxiety.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 15-Card Carousel Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Comprehensive Protection</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6">
              Top 15 Senior Safety Challenges Solved
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From fall detection to medication reminders, see how MySentry supports every aspect of independent living.
            </p>
          </div>
          
          <ExpandableCarousel items={seniorChallenges} />
        </div>
      </section>

      {/* Get Started Section */}
      <GetStartedSection 
        title="Ready to maintain your independence?"
        subtitle="Join thousands of seniors who are living life on their own terms with MySentry."
        ctaText="Start Your 7-Day Free Trial"
        ctaLink="/pricing"
      />
    </Layout>
  );
}
