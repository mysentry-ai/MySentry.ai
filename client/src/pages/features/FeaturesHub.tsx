
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
    description: "Start a user-activated alert from supported app, watch, or configured voice controls. Routing and shared context depend on plan, permissions, connectivity, and region.",
    href: "/features/panic-button-app",
    icon: ShieldCheck,
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Fall Detection App",
    description: "A supported watch or phone may identify a fall-like event and begin a check-in. Detection and any later escalation depend on device and service conditions.",
    href: "/features/fall-detection-app",
    icon: PersonStanding,
    color: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    title: "Crash Detection",
    description: "Supported phone sensors may identify a crash-like event and begin an alert workflow that can share permitted location context for review.",
    href: "/features/crash-detection",
    icon: Car,
    color: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "24/7 Professional Monitoring",
    description: "Eligible alerts can be reviewed by a professional monitoring team at any time. Contact and escalation timing varies with alert and service conditions.",
    href: "/features/24-7-professional-monitoring",
    icon: Phone,
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    title: "Emergency Contacts",
    description: "Add up to 5 trusted contacts who can receive permitted alert context, such as available location or status, when a safety workflow starts.",
    href: "/features/emergency-contacts",
    icon: Users,
    color: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    title: "Live Video Response",
    description: "When enabled and available, live video can give the monitoring team additional context during an eligible alert. Sharing follows user permissions.",
    href: "/features/live-video-response",
    icon: Video,
    color: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
  {
    title: "Health Monitoring",
    description: "View supported wellness signals such as HRV, blood oxygen, heart rate, and activity from compatible devices. MySentry does not diagnose or predict medical emergencies.",
    href: "/features/health-monitoring",
    icon: HeartPulse,
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "MeetSafe Check-Ins",
    description: "Schedule a check-in for a meeting or activity. If you do not confirm your status, the app can continue the alert flow configured in your settings.",
    href: "/features/safety-check-in-app",
    icon: Activity,
    color: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Family Connectivity",
    description: "Keep up to 5 trusted contacts ready for an alert. Family members receive permitted alert context instead of continuous access to private wellness data.",
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
];

export default function FeaturesHub() {
  return (
    <Layout>
      <SEO />

      {/* Hero Section */}
      <HeroSection
        label="Personal Safety and Health Monitoring"
        title={<>Your Safety Tools,<br/><span className="text-primary">Connected.</span></>}
        imageSrc="/images/features-hero-800w.jpg"
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
              Choose current safety tools that fit your routine, supported devices, permissions, and plan. Each feature has its own eligibility and limitations.
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
              MySentry brings activation, available context, trusted contacts, and eligible monitoring into one configurable workflow.
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
                A user can start a Panic Alarm. Supported devices may also identify fall-like or crash-like events and begin a check-in.
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
                The monitoring team may review the context you permit, including available location, audio, or video, when the feature and connection support it.
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
                Agents may attempt contact, notify trusted contacts, or coordinate with emergency services when appropriate. Response and arrival are not guaranteed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GetStartedSection
        sub
        ctaText="Review Plans and Eligibility"
      />
    </Layout>
  );
}
