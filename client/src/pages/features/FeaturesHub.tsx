
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import GetStartedSection from "@/components/GetStartedSection";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ShieldCheck,
  Activity,
  HeartPulse,
  Users,
  Video,
  Phone,
  Car,
  PersonStanding,
  ArrowRight,
  MapPin,
  PhoneCall,
  Route,
} from "lucide-react";

const features = [
  {
    title: "Panic Button App",
    description: "Instantly alert our 24/7 team and emergency contacts with a single tap or voice command. Silent, fast, and reliable when you need help most.",
    href: "/features/panic-button-app",
    icon: ShieldCheck,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Fall Detection App",
    description: "Automatic alerts if a fall is detected, even if you can't respond. Your smartwatch senses the impact and sends help immediately.",
    href: "/features/fall-detection-app",
    icon: PersonStanding,
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Crash Detection",
    description: "Detects car accidents using your phone's sensors and automatically sends for help with your precise location.",
    href: "/features/crash-detection",
    icon: Car,
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "24/7 Professional Monitoring",
    description: "Our certified team is always ready to respond to any alert. Real people, real-time, around the clock.",
    href: "/features/24-7-professional-monitoring",
    icon: Phone,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Emergency Contacts",
    description: "Keep your trusted friends and family informed during an emergency. They receive instant alerts with your live location.",
    href: "/features/emergency-contacts",
    icon: Users,
    color: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    title: "Live Video Response",
    description: "Share live video with our monitoring team to get the right help, faster. Visual verification means a more accurate response.",
    href: "/features/live-video-response",
    icon: Video,
    color: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Health Monitoring",
    description: "Track key health metrics like HRV, SpO2, and heart rate in real time. Get alerts before a health event becomes an emergency.",
    href: "/features/health-monitoring",
    icon: HeartPulse,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "MeetSafe Check-Ins",
    description: "Schedule a meeting. When it ends, MySentry sends you a Safety Check Alert. If you don't respond, your Panic Alarm is triggered automatically.",
    href: "/features/meetsafe-check-ins",
    icon: Activity,
    color: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Family Connectivity",
    description: "Share your location on a schedule or in real time. Request a trusted contact's location when you're worried. Up to 5 emergency contacts.",
    href: "/features/family-connectivity",
    icon: MapPin,
    color: "bg-cyan-100",
    iconColor: "text-cyan-600",
  },
  {
    title: "Automated Call",
    description: "Schedule a realistic fake incoming call to help you exit any uncomfortable or unsafe situation, discreetly and without confrontation.",
    href: "/features/automated-call",
    icon: PhoneCall,
    color: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    title: "Secure Route",
    description: "Set a route before your journey. MySentry monitors for major deviations and checks on you if you drift off path.",
    href: "/features/secure-route",
    icon: Route,
    color: "bg-lime-100",
    iconColor: "text-lime-600",
  },
];

export default function FeaturesHub() {
  return (
    <Layout>
      <SEO />

      {/* Hero Section */}
      <HeroSection
        label="Personal Safety and Health Monitoring"
        title={<>Your Life,<br/><span className="text-primary">Fully Protected.</span></>}
        imageSrc="/images/hero-section.svg"
        imageAlt="MySentry safety features overview"
      />

      {/* Features Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Everything You Need
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6 text-[#1a1a1a]">
              Safety & Health Features
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Each feature is designed to work seamlessly together, creating a comprehensive safety net that adapts to your life.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={feature.href}
                  className="block group"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <div className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full">
                    <div className="flex items-start gap-6">
                      <div className={`h-14 w-14 rounded-2xl ${feature.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className={`h-7 w-7 ${feature.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {feature.description}
                        </p>
                        <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                          Learn More <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="py-24 bg-[#e8f5e9] relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Seamless Integration
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6 text-[#1a1a1a]">
              How They Work Together
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              MySentry's features don't work in isolation. They form a connected safety ecosystem that protects you from every angle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Detect</h3>
              <p className="text-gray-600 leading-relaxed">
                Falls, crashes, health anomalies, and panic triggers are detected automatically by your phone and smartwatch sensors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <Video className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Verify</h3>
              <p className="text-gray-600 leading-relaxed">
                Live video response lets our monitoring team see what's happening in real time, ensuring the right type of help is dispatched.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Respond</h3>
              <p className="text-gray-600 leading-relaxed">
                Our 24/7 professional team coordinates with emergency services and your contacts to get you the help you need, fast.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GetStartedSection
        sub
        ctaText="Start Your 7-Day Free Trial"
      />
    </Layout>
  );
}
