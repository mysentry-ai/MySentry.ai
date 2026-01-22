import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, TrendingUp, Users, DollarSign, AlertCircle, Video, Shield, Clock, CheckCircle2, ArrowRight, Zap, Car, Activity, BarChart3, Award, AlertTriangle, Building2, HardHat, Truck, Stethoscope, Briefcase, Warehouse, Home, Hotel, Utensils, Plane, School, Landmark, Factory } from "lucide-react";
import ExpandableCarousel, { CarouselItem } from "@/components/ExpandableCarousel";
import GetStartedSection from "@/components/GetStartedSection";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { industries } from "@/data/industries";
import EmployerDemoModal from "@/components/EmployerDemoModal";

export default function Employers() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const employerChallenges: CarouselItem[] = [
    {
      id: "lone-worker",
      title: "Lone Worker Safety",
      subtitle: "Never truly alone",
      description: "Protect employees who work alone or in remote locations. Automated check-ins and fall detection ensure they're safe even when no one else is around.",
      image: "/images/challenge-employer-lone-worker.jpg",
      icon: Users,
      tag: "Remote Safety",
      link: "/pricing",
      ctaText: "View Plans"
    },
    {
      id: "health-incidents",
      title: "Health Incidents",
      subtitle: "Immediate medical response",
      description: "Detect heart attacks, heat exhaustion, or other health crises instantly. Our monitoring center dispatches EMS with precise location data to save precious minutes.",
      image: "/images/challenge-employer-health.jpg",
      icon: Heart,
      tag: "Medical Response",
      link: "/pricing",
      ctaText: "Get Started"
    },
    {
      id: "driver-safety",
      title: "Driver Safety",
      subtitle: "Protect your fleet",
      description: "Automatic crash detection for delivery drivers and field agents. We alert emergency services instantly if a severe impact is detected.",
      image: "/images/challenge-senior-crash.jpg",
      icon: Car,
      tag: "Fleet Safety",
      link: "/pricing",
      ctaText: "Learn More"
    },
    {
      id: "liability-protection",
      title: "Liability Protection",
      subtitle: "Objective evidence",
      description: "In the event of an incident, MySentry automatically records video and audio, providing clear evidence to protect your business from false claims.",
      image: "/images/business-meeting-happy.jpg",
      icon: Shield,
      tag: "Risk Management",
      link: "/pricing",
      ctaText: "See Pricing"
    },
    {
      id: "productivity",
      title: "Productivity & Morale",
      subtitle: "Focus on the job",
      description: "When employees feel safe, they focus better. Reduce anxiety and turnover by showing your team that their safety is your top priority.",
      image: "/images/challenge-employer-productivity.jpg",
      icon: TrendingUp,
      tag: "Productivity",
      link: "/pricing",
      ctaText: "Learn More"
    },
    {
      id: "construction",
      title: "Construction Safety",
      subtitle: "High-risk protection",
      description: "Monitor workers on dangerous sites. Fall detection and panic buttons provide an immediate lifeline in case of accidents.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop",
      icon: HardHat,
      tag: "Construction",
      link: "/pricing",
      ctaText: "Site Safety"
    },
    {
      id: "healthcare",
      title: "Healthcare Workers",
      subtitle: "Protecting the protectors",
      description: "Nurses and home health aides often face risks from patients or environments. Give them a discreet way to call for help.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
      icon: Stethoscope,
      tag: "Healthcare",
      link: "/pricing",
      ctaText: "Staff Safety"
    },
    {
      id: "real-estate",
      title: "Real Estate Agents",
      subtitle: "Safe showings",
      description: "Meeting strangers in empty homes carries risk. Agents can trigger a silent alarm if they feel threatened during a showing.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop",
      icon: Home,
      tag: "Real Estate",
      link: "/pricing",
      ctaText: "Agent Safety"
    },
    {
      id: "warehouse",
      title: "Warehouse Safety",
      subtitle: "Industrial monitoring",
      description: "In noisy, busy warehouses, accidents happen. Ensure workers can signal for help even if they can't be heard over machinery.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
      icon: Warehouse,
      tag: "Industrial",
      link: "/pricing",
      ctaText: "Warehouse Safety"
    },
    {
      id: "hospitality",
      title: "Hotel Staff",
      subtitle: "Room service safety",
      description: "Housekeepers and room service staff entering guest rooms alone need protection. Panic buttons provide instant security backup.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
      icon: Hotel,
      tag: "Hospitality",
      link: "/pricing",
      ctaText: "Staff Protect"
    },
    {
      id: "retail",
      title: "Retail Security",
      subtitle: "Store safety",
      description: "Protect staff during opening/closing times or from aggressive customers. A discreet way to summon security or police.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
      icon: Briefcase,
      tag: "Retail",
      link: "/pricing",
      ctaText: "Store Safety"
    },
    {
      id: "utilities",
      title: "Utility Workers",
      subtitle: "Field operations",
      description: "Workers repairing lines or meters often face environmental hazards. Ensure they're monitored and connected at all times.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
      icon: Zap,
      tag: "Utilities",
      link: "/pricing",
      ctaText: "Field Safety"
    },
    {
      id: "logistics",
      title: "Logistics & Trucking",
      subtitle: "Road safety",
      description: "Monitor driver fatigue and health on long hauls. Crash detection automatically alerts emergency services on remote highways.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2670&auto=format&fit=crop",
      icon: Truck,
      tag: "Logistics",
      link: "/pricing",
      ctaText: "Driver Safety"
    },
    {
      id: "education",
      title: "School Staff",
      subtitle: "Campus security",
      description: "Teachers and administrators can instantly alert security during campus emergencies or lockdowns with a single tap.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop",
      icon: School,
      tag: "Education",
      link: "/pricing",
      ctaText: "Campus Safety"
    },
    {
      id: "government",
      title: "Public Sector",
      subtitle: "Civil servant safety",
      description: "Protect social workers, inspectors, and other government employees who interact with the public in uncontrolled environments.",
      image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2666&auto=format&fit=crop",
      icon: Landmark,
      tag: "Government",
      link: "/pricing",
      ctaText: "Public Safety"
    }
  ];

  return (
    <Layout>
      <SEO 
        title="Employers" 
        description="Protect your workforce and reduce liability with MySentry. 24/7 monitoring, fall detection, and panic buttons for every industry."
      />
      
      {/* HERO SECTION - Standardized with Females Page Style */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Relatable Hero Image */}
           <img 
             src="/images/business-meeting-happy.jpg" 
             alt="Diverse team having a productive meeting" 
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
              Workforce Protection
            </span>
            <h1 className="text-[55px] font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8 text-[#1a1a1a]">
              Protect Your<br/>
              <span className="text-gray-600">Greatest Asset.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              Workplace accidents happen fast. MySentry detects falls, crashes, and health emergencies instantly, alerting 24/7 professional monitoring with live video so help arrives fast.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center" 
                onClick={() => setIsDemoModalOpen(true)}
              >
                BOOK A DEMO TODAY
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PEACE: The Problem & Empathy */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">The Business Reality</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              Your employees are your <br/>
              <span className="text-gray-400">greatest asset.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              But when they're working alone or in the field, you can't always be there to protect them. Accidents, health incidents, and liability risks are a constant threat.
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
                <AlertTriangle className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Unseen accidents.</h3>
              <p className="text-gray-600 leading-relaxed">
                Slips, trips, and falls are the leading cause of workplace injury. If a lone worker falls, how long until someone finds them?
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Liability risks.</h3>
              <p className="text-gray-600 leading-relaxed">
                Without objective evidence of an incident, your business is vulnerable to false claims and costly litigation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Health emergencies.</h3>
              <p className="text-gray-600 leading-relaxed">
                Heart attacks and heat stress can happen on the job. Immediate response is critical for survival and recovery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 15-Card Carousel Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Industry Solutions</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6">
              Safety for Every Sector
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how MySentry protects workers across diverse industries, from healthcare to construction.
            </p>
          </div>
          
          <ExpandableCarousel items={employerChallenges} />
        </div>
      </section>

      {/* Get Started Section */}
      <GetStartedSection 
        title="Protect your workforce today."
        subtitle="Reduce liability and ensure employee safety with MySentry."
        ctaText="Book a Demo"
        ctaLink="/pricing"
      />

      {/* Demo Modal */}
      <EmployerDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </Layout>
  );
}
