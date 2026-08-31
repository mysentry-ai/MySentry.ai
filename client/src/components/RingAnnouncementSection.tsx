import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, AlertCircle, Radio, MapPin, Camera, Users } from "lucide-react";
import { useState } from "react";

/**
 * Main Ring Appstore announcement section.
 * Left column: Approved copy with badge, headline, body, offer line, CTA, trust line.
 * Right column: Two independent sub-columns  -  phone mockup (left) and flow cards (right).
 *
 * Micro-animations:
 * - Phone mockup: fade-in + rises from below (whileInView)
 * - Step cards: staggered top-to-bottom entrance (whileInView with delay)
 * - Save 67% badge: subtle glow pulse (animate + transition as separate props)
 * - CTA arrow: translateX on hover (animate controlled by state)
 * - Mobile responsive: stacked layout on small screens
 */

const flowSteps = [
  {
    number: 1,
    label: "Panic Alarm Triggered",
    icon: AlertCircle,
    color: "bg-red-50 border-red-200 text-red-700",
    iconColor: "text-red-500",
    badgeColor: "bg-red-500",
  },
  {
    number: 2,
    label: "Live Broadcast Started",
    icon: Radio,
    color: "bg-green-50 border-green-200 text-green-700",
    iconColor: "text-green-500",
    badgeColor: "bg-green-500",
  },
  {
    number: 3,
    label: "Live Location Shared",
    icon: MapPin,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    iconColor: "text-blue-500",
    badgeColor: "bg-blue-500",
  },
  {
    number: 4,
    label: "Ring Camera Feed Added",
    icon: Camera,
    color: "bg-amber-50 border-amber-200 text-amber-700",
    iconColor: "text-amber-500",
    badgeColor: "bg-amber-500",
  },
  {
    number: 5,
    label: "Monitoring Team + Emergency Contacts Notified",
    icon: Users,
    color: "bg-purple-50 border-purple-200 text-purple-700",
    iconColor: "text-purple-500",
    badgeColor: "bg-purple-500",
  },
];

export default function RingAnnouncementSection() {
  const [arrowHovered, setArrowHovered] = useState(false);

  return (
    <section className="py-24 bg-white border-t border-gray-100" id="ring-announcement">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ── Left Column: Approved Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-6">
              Available on the Ring Appstore
            </span>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-800 mb-4 leading-tight">
              Ring protects your home. MySentry helps protect you wherever you go.
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 leading-relaxed mb-8">
              <p className="text-sm font-light text-gray-500">
                Now available on the Ring App Store, MySentry gives Ring users access to a complete safety solution that connects home security with personal safety.
              </p>
              <p className="text-sm font-light text-gray-500">
                When you trigger a MySentry Panic Alarm, your live location, audio and video broadcast, battery status, and connected Ring camera feed can be shared with the monitoring team and emergency contacts.
              </p>
            </div>

            {/* Offer Line  -  Save 67% has glow pulse */}
            <div className="inline-flex flex-wrap items-center gap-3 bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-2xl px-5 py-3 mb-8 shadow-sm">
              <span className="text-sm text-gray-500 line-through">Regular price: $15/month</span>
              <span className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span className="text-sm font-bold text-primary">Ring Appstore: $4.99/month</span>
              <span className="w-px h-4 bg-gray-200 hidden sm:block" />
              <motion.span
                animate={{
                  boxShadow: [
                    "0 0 0px 0px rgba(34,197,94,0)",
                    "0 0 10px 4px rgba(34,197,94,0.6)",
                    "0 0 0px 0px rgba(34,197,94,0)",
                  ],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-xs font-black text-white bg-primary rounded-full px-2.5 py-0.5"
              >
                Save 67%
              </motion.span>
            </div>

            {/* CTA  -  arrow slides right on hover */}
            <div className="mb-6">
              <Link
                href="/integrations/ring"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-full px-8 py-4 hover:bg-primary/90 transition-all hover:scale-105 shadow-lg text-sm"
                onMouseEnter={() => setArrowHovered(true)}
                onMouseLeave={() => setArrowHovered(false)}
              >
                Learn in Detail
                <motion.span
                  animate={{ x: arrowHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </div>

            {/* Trust Line */}
            <p className="text-xs text-gray-400 font-medium">
              Available for Ring users through the Ring Appstore.
            </p>
          </motion.div>

          {/* ── Right Column: Phone Mockup + Flow Cards (treated separately) ── */}
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-6 lg:items-start">

            {/* Phone Mockup  -  independent, fades in and rises from below */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
              className="flex-shrink-0 flex justify-center lg:justify-start"
            >
              <img
                src="/images/cdn/zKfQzXtIiNkDQVAL.png"
                alt="MySentry app showing PANIC button, emergency contacts, and health monitoring"
                className="h-auto drop-shadow-xl mr-[3px] ml-[35px] w-[234px]"
                loading="lazy"
              />
            </motion.div>

            {/* Flow Cards  -  independent, staggered top-to-bottom entrance */}
            <div className="flex flex-col gap-2 flex-1 pt-[17px]">
              {flowSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.13, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, x: 4 }}
                    className={`flex items-center gap-3 rounded-xl border pr-[8px] pl-[11px] shadow-sm cursor-default h-[48px] mt-[6px] mb-[6px] ${step.color}`}
                  >
                    {/* Number badge */}
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full ${step.badgeColor} text-white text-[11px] font-black flex items-center justify-center`}>
                      {step.number}
                    </span>
                    {/* Icon */}
                    <Icon className={`w-4 h-4 flex-shrink-0 ${step.iconColor}`} />
                    {/* Label */}
                    <span className="text-[12px] font-normal leading-snug">
                      {step.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
