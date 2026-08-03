import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Radio, MapPin, Users } from "lucide-react";

/**
 * Later homepage reminder banner for Ring Appstore offer.
 * Left: Copy and CTA.
 * Right: Mobile mockup (247PersonalSafety...) with animated flow cards showing the response journey.
 * Flow cards have icons, numbers, and prominent animations.
 * No background image - mobile mockup only.
 */

const flowSteps = [
  {
    id: "panic",
    number: "1",
    icon: Shield,
    label: "Panic Alarm Triggered",
    position: "top-8 -left-12 md:left-0",
    delay: 0.1,
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
  },
  {
    id: "broadcast",
    number: "2",
    icon: Radio,
    label: "Live Broadcast Started",
    position: "top-1/3 -right-10 md:right-0",
    delay: 0.3,
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
  },
  {
    id: "location",
    number: "3",
    icon: MapPin,
    label: "Live Location Shared",
    position: "bottom-1/3 -left-12 md:left-0",
    delay: 0.5,
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    id: "team",
    number: "4",
    icon: Users,
    label: "Monitoring Team Notified",
    position: "bottom-8 -right-10 md:right-0",
    delay: 0.7,
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600",
  },
];

export default function RingReminderBanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-white to-[#f7faf8] border-t border-gray-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* ── Left: Copy and CTA ── */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-gray-800 mb-4 leading-tight max-w-sm">
                Complete Your Safety Setup with MySentry
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Your Ring cameras support home security. MySentry adds personal emergency response that goes with you. Ring users can access MySentry through the Ring Appstore for $4.99/month.
              </p>

              <p className="text-sm font-semibold text-primary mb-8">
                Save 67% with the Ring Appstore offer.
              </p>

              <Link
                href="/ring"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold rounded-full px-7 py-3.5 hover:bg-primary/90 transition-all hover:scale-105 shadow-md text-[14px] w-fit"
              >
                Explore More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* ── Right: Mobile Mockup with Animated Flow Cards ── */}
            <div className="relative bg-gradient-to-br from-[#f7faf8] to-white p-8 md:p-12 flex items-center justify-center min-h-[500px] md:min-h-[600px]">

              {/* Mobile mockup - centered, no background */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative z-10 w-48 md:w-56"
              >
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/nnMAAKsVbJPcoFWV.png"
                  alt="MySentry app home screen showing PANIC button, emergency contacts, and health monitoring"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </motion.div>

              {/* Animated flow cards with icons and numbers */}
              {flowSteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: step.delay,
                      type: "spring",
                      stiffness: 100,
                      damping: 12
                    }}
                    whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                    className={`absolute ${step.position} z-20 w-44 md:w-52`}
                  >
                    <div className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl px-4 py-3 shadow-xl backdrop-blur-sm flex items-start gap-3 hover:shadow-2xl transition-shadow`}>
                      
                      {/* Icon and Number Container */}
                      <div className="relative shrink-0">
                        {/* Number badge - positioned absolutely over icon */}
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white font-bold text-sm shadow-md absolute -top-2 -right-2 z-10 border-2 border-white">
                          {step.number}
                        </div>
                        {/* Icon */}
                        <div className={`${step.iconColor} p-2 bg-white rounded-lg shadow-sm`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Label */}
                      <div className="flex-1 pt-1">
                        <p className={`${step.textColor} text-sm font-bold leading-tight`}>
                          {step.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Floating pricing card - positioned absolutely */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute bottom-8 right-4 md:bottom-12 md:right-8 z-20 w-56 md:w-64"
              >
                <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden backdrop-blur-sm">

                  {/* Card header */}
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 border-b border-gray-100">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary"></p>
                  </div>

                  {/* Regular price */}
                  <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                    <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-2">Regular Price</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-gray-400 line-through">$15</span>
                      <span className="text-xs text-gray-400 font-medium">/month</span>
                    </div>
                  </div>

                  {/* Ring Appstore price - highlighted */}
                  <div className="px-6 py-5 bg-gradient-to-r from-primary/8 to-transparent border-b border-primary/10">
                    <p className="text-[11px] font-semibold text-primary uppercase tracking-wide mb-2">Ring Appstore Price</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black text-primary">$4.99</span>
                      <span className="text-sm text-gray-600 font-semibold">/month</span>
                    </div>
                  </div>

                  {/* Savings badge */}
                  <div className="px-6 py-4 bg-primary text-center">
                    <p className="text-white text-sm font-black tracking-wide">You Save 67%</p>
                  </div>

                </div>
              </motion.div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
