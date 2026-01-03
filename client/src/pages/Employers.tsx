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
      
      {/* HERO SECTION - Standardized with Features Page Style */}
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
            <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8 text-[#1a1a1a]">
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
              But injuries, health crises, and accidents create expensive downtime, turnover, and lost productivity. Employees who feel unprotected become disengaged. They leave.
            </p>
          </div>

          <ExpandableCarousel items={employerChallenges} />
        </div>
      </section>

      {/* Industries Section - PEACE: The Solution per Industry */}
      <section className="py-32 bg-[#f8fafc] border-t border-gray-100 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Industry Solutions</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6 leading-tight">
              Tailored Protection for <br/>
              <span className="text-gray-400">Every Industry</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every workplace has unique risks. MySentry adapts to yours. Select your industry to see how we solve your specific safety challenges.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry)}
                className={`px-5 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 border ${
                  activeIndustry.id === industry.id
                    ? "bg-primary text-white border-primary shadow-lg scale-105"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                }`}
              >
                <industry.icon className="h-4 w-4" />
                {industry.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-2xl overflow-hidden relative min-h-[700px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-16 items-center h-full"
              >
                <div className="space-y-8 relative z-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
                      <activeIndustry.icon className="h-3 w-3" />
                      {activeIndustry.title}
                    </div>
                    
                    {/* 3 Core Problems */}
                    <div className="mb-8 space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge:</h3>
                      {activeIndustry.peace.problems.map((problem, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100">
                          <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                          <p className="text-gray-700 font-medium text-sm">{problem}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm">
                      <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5" />
                        The MySentry Solution
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {activeIndustry.peace.answer}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <p className="text-xs text-gray-500 uppercase font-bold mb-1">The Change</p>
                        <p className="text-sm text-gray-900 font-medium">{activeIndustry.peace.change}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <p className="text-xs text-gray-500 uppercase font-bold mb-1">End Result</p>
                        <p className="text-sm text-gray-900 font-medium">{activeIndustry.peace.endResult}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                  <img 
                    src={activeIndustry.image} 
                    alt={activeIndustry.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/50 z-20 animate-[float_5s_ease-in-out_infinite]">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase font-bold mb-1">Safety Impact</p>
                        <p className="text-gray-900 font-bold leading-tight">
                          Reduced incident response time by 90%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <GetStartedSection />

      {/* PEACE: The Change & End Result */}
      <section className="py-32 bg-[#e8f5e9] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">The Transformation</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-8 leading-tight">
              From liability to <br/>
              <span className="text-primary">leadership.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Transform safety from a compliance headache into a competitive advantage. Show your employees you care, and watch productivity and retention soar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Reduce Costs",
                desc: "Lower insurance premiums and workers' comp claims with proactive safety."
              },
              {
                icon: Shield,
                title: "Mitigate Risk",
                desc: "Objective video evidence protects your business from false liability claims."
              },
              {
                icon: Users,
                title: "Retain Talent",
                desc: "Employees stay where they feel safe and valued. Boost morale instantly."
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
                Secure Your Workforce.
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Schedule a demo to see how MySentry can protect your team and your bottom line.
              </p>
              <Button 
                className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-12 h-20 text-xl transition-all hover:scale-105 shadow-xl" 
                onClick={() => setIsDemoModalOpen(true)}
              >
                BOOK A DEMO
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EmployerDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </Layout>
  );
}
