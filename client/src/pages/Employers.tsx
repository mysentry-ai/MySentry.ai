import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { Link } from "wouter";
import ResponsiveImage from "@/components/ResponsiveImage";
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
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/xeEOSVembFXLEvcM.jpg",
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
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/PXvJZfCsLMkaKlOl.jpg",
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
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/ygjcYkgKzWhbNlUG.jpg",
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
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/UeCHohfvBfhNbbyg.jpg",
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
        title="Lone Worker Safety App for Employers | Fall Detection & Panic Button | MySentry" 
        description="Protect your workforce with MySentry. 24/7 fall detection, panic buttons, health monitoring, and live video response for lone workers and field employees. Reduce liability and comply with OSHA."
        canonical="https://mysentry.ai/employers"
      />
      
      <HeroSection
        label="Workforce Protection"
        title={<>Protect Your<br/><span className="text-gray-600">Greatest Asset.</span></>}
        description="Workplace accidents happen fast. MySentry detects falls, crashes, and health emergencies instantly, alerting 24/7 professional monitoring with live video so help arrives fast. We provide objective evidence to protect your business from liability while ensuring your team gets home safe."
        imageSrc="/images/business-meeting-happy.jpg"
        imageAlt="Diverse team having a productive meeting"
        ctaText="BOOK A DEMO"
        ctaLink="#"
      />

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

      {/* Industry Tabs Section */}
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

          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Industry List */}
            <div className="lg:w-1/3 space-y-2">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 text-left ${
                    activeIndustry.id === industry.id
                      ? "bg-white shadow-lg border-l-4 border-primary"
                      : "hover:bg-white/50 text-gray-600"
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    activeIndustry.id === industry.id ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-500"
                  }`}>
                    <industry.icon className="h-6 w-6" />
                  </div>
                  <span className={`font-bold text-lg ${
                    activeIndustry.id === industry.id ? "text-[#1a1a1a]" : "text-gray-600"
                  }`}>
                    {industry.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100 h-full"
                >
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6 flex items-center gap-3">
                      <activeIndustry.icon className="h-8 w-8 text-primary" />
                      {activeIndustry.title}
                    </h3>
                    
                    <div className="bg-red-50 rounded-2xl p-6 mb-8 border border-red-100">
                      <h4 className="text-red-800 font-bold uppercase tracking-wider text-sm mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4" />
                        The Challenge
                      </h4>
                      <ul className="space-y-3">
                        {activeIndustry.peace.problems.map((problem, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-gray-400 font-bold uppercase tracking-wider text-sm mb-2">The Reality</h4>
                        <p className="text-xl text-gray-600 italic">"{activeIndustry.peace.empathy}"</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-primary font-bold uppercase tracking-wider text-sm mb-2">The Solution</h4>
                          <p className="text-gray-700">{activeIndustry.peace.answer}</p>
                        </div>
                        <div>
                          <h4 className="text-green-600 font-bold uppercase tracking-wider text-sm mb-2">The Result</h4>
                          <p className="text-gray-700">{activeIndustry.peace.endResult}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <p className="text-gray-500 font-medium">Ready to protect your team?</p>
                    <Button 
                      onClick={() => setIsDemoModalOpen(true)}
                      className="bg-primary text-white hover:bg-primary/90 px-8 rounded-full font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
                    >
                      Book a Demo
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6 uppercase tracking-tighter">
              Protect your workforce today.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic">
              Reduce liability and ensure employee safety with MySentry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10" />

            {[
              {
                icon: CheckCircle2,
                title: "Schedule a Demo",
                description: "See how MySentry works for your specific industry needs.",
                color: "bg-[#6AD990]"
              },
              {
                icon: Users,
                title: "Customize Your Plan",
                description: "Select the features and device mix that fits your workforce.",
                color: "bg-[#386758]"
              },
              {
                icon: Shield,
                title: "Deploy & Protect",
                description: "Onboard your team and start monitoring safety instantly.",
                color: "bg-[#004F7B]"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full">
                  <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-bold mb-4">
                    Step {index + 1}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-12 h-20 text-xl transition-all hover:scale-105 shadow-xl flex items-center justify-center mx-auto gap-3" 
              onClick={() => setIsDemoModalOpen(true)}
            >
              BOOK A DEMO
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <EmployerDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </Layout>
  );
}
