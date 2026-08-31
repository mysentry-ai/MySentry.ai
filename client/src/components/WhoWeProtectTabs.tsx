import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, Shield, Building2, ArrowRight, Check } from "lucide-react";
import ResponsiveImage from "@/components/ResponsiveImage";
import { cn } from "@/lib/utils";

type TabId = "seniors" | "families" | "females" | "employers";

interface TabContent {
  id: TabId;
  label: string;
  icon: typeof Heart;
  headline: string;
  description: string;
  image: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const tabs: TabContent[] = [
  {
    id: "seniors",
    label: "Seniors",
    icon: Heart,
    headline: "Age Independently, Live Confidently",
    description: "MySentry helps seniors stay in the home they love with fall detection, health monitoring, and 24/7 professional response. No stigmatizing lanyard needed. Just your phone and smartwatch working together to keep you safe.",
    image: "/images/cdn/aLIErUBBQTfmnErS.jpg",
    features: [
      "Fall and near-fall detection with automatic alerts",
      "24/7 heart rate, HRV, and SpO2 monitoring",
      "Voice-activated panic alarm for hands-free help",
      "Automated check-ins so family worries less"
    ],
    ctaText: "Explore Senior Safety",
    ctaLink: "/seniors"
  },
  {
    id: "families",
    label: "Families",
    icon: Users,
    headline: "Protect the People Who Matter Most",
    description: "From teen drivers to aging parents, MySentry gives your whole family a safety net. Crash detection, panic alarms, and real-time location sharing keep everyone connected when it counts. You only get alerts when something actually needs your attention.",
    image: "/images/cdn/ILNBARpWjhgDooYL.jpg",
    features: [
      "Crash detection with prompt family notification",
      "User-activated panic alarm for children and teens",
      "GPS location sharing during emergencies",
      "Smart alerts that notify you only when it matters"
    ],
    ctaText: "Explore Family Plans",
    ctaLink: "/families"
  },
  {
    id: "females",
    label: "Women",
    icon: Shield,
    headline: "Walk, Run, and Live with Confidence",
    description: "MySentry gives women a discreet, always-on safety companion. Whether you are running solo, commuting late, or meeting someone new, a single voice command or watch tap connects you to live professional monitoring with video evidence.",
    image: "/images/cdn/xVvXipIagbMzyabU.jpg",
    features: [
      "Discreet panic button via voice, phone, or watch",
      "Live video and audio evidence for responders",
      "MeetSafe for dating and meeting strangers",
      "24/7 professional monitoring that travels with you"
    ],
    ctaText: "Explore Women's Safety",
    ctaLink: "/females"
  },
  {
    id: "employers",
    label: "Employers",
    icon: Building2,
    headline: "Duty of Care, Delivered Automatically",
    description: "Your lone workers face unpredictable environments with no backup. MySentry provides panic buttons, fall detection, and health monitoring that connect directly to your security team or 911. Reduce liability and protect your people with objective evidence.",
    image: "/images/cdn/eqjbpbDEheKCczzG.jpg",
    features: [
      "Lone worker protection with panic and fall detection",
      "Live video and audio for incident documentation",
      "Health vitals monitoring for heat stress and cardiac events",
      "Automatic incident reporting for compliance"
    ],
    ctaText: "Book a Demo",
    ctaLink: "/contact"
  }
];

export default function WhoWeProtectTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("seniors");
  const activeContent = tabs.find(t => t.id === activeTab)!;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
            Who We Protect
          </span>
          <h2 className="text-4xl md:text-[2.75rem] font-heading font-bold text-[#1a1a1a] mb-6">
            Safety for Every Stage of Life
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you are an active senior, a concerned parent, or an employer, MySentry adapts to your specific safety needs.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 md:px-7 py-3 md:py-3.5 rounded-full border-2 transition-all duration-200 font-semibold text-sm md:text-base",
                  isActive
                    ? "border-primary bg-primary text-white shadow-lg"
                    : "border-gray-300 bg-white text-gray-700 hover:border-primary/50 hover:bg-primary/5"
                )}
              >
                <Icon className="w-4.5 h-4.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-64 md:h-[480px] overflow-hidden">
              <ResponsiveImage
                src={activeContent.image}
                alt={activeContent.headline}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-4">
                {activeContent.headline}
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                {activeContent.description}
              </p>

              <ul className="space-y-3 mb-8">
                {activeContent.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={activeContent.ctaLink}
                className={cn(
                  "inline-flex items-center gap-2 font-bold uppercase tracking-wider rounded-full px-8 py-4 text-base transition-all hover:scale-105 shadow-md",
                  activeContent.id === "employers"
                    ? "bg-[#1a1a1a] text-white hover:bg-[#333]"
                    : "bg-primary text-white hover:bg-primary/90"
                )}
              >
                {activeContent.ctaText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
