import { Link } from "wouter";
import { motion } from "framer-motion";
import { Camera, MapPin, Radio, Users, Shield, ArrowRight } from "lucide-react";

/**
 * Main Ring Appstore announcement section with premium two-column layout.
 * Left: Approved copy with badge, headline, subheadline, body, offer line, CTA, trust line.
 * Right: Mobile mockup (247PersonalSafety...) centered with numbered flow cards floating around it.
 * No background image placeholder - only mobile mockup.
 */

const floatingCards = [
  {
    id: "panic",
    number: "1",
    label: "Panic Alarm Triggered",
    position: "top-12 -left-8 md:left-0",
    delay: 0.1,
    bgColor: "bg-red-50",
    textColor: "text-red-700",
    borderColor: "border-red-200",
  },
  {
    id: "broadcast",
    number: "2",
    label: "Live Broadcast Started",
    position: "top-1/3 -right-6 md:right-0",
    delay: 0.3,
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-200",
  },
  {
    id: "location",
    number: "3",
    label: "Live Location Shared",
    position: "bottom-1/3 -left-8 md:left-0",
    delay: 0.5,
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
  },
  {
    id: "team",
    number: "4",
    label: "Monitoring Team Notified",
    position: "bottom-12 -right-6 md:right-0",
    delay: 0.7,
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
  },
];

export default function RingAnnouncementSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100" id="ring-announcement">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Left Column: Approved Copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-6">
              <Camera className="w-3.5 h-3.5" />
              Available on the Ring Appstore
            </span>

            {/* Headline */}
            <h2 className="text-3xl md:text-[2.5rem] font-heading font-bold text-gray-800 mb-4 leading-tight">
              Home Security Meets Personal Emergency Response
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-gray-600 font-semibold mb-6 leading-snug">
              Ring protects your home. MySentry helps protect you wherever you go.
            </p>

            {/* Body Copy */}
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Ring helps you monitor what's happening around your home. MySentry adds personal emergency response for you and your loved ones.
              </p>
              <p>
                Now available on the Ring App Store, MySentry gives Ring users access to a complete safety solution that connects home security with personal safety.
              </p>
              <p>
                When you trigger a MySentry Panic Alarm, your live location, audio and video broadcast, battery status, and connected Ring camera feed can be shared with the monitoring team and emergency contacts.
              </p>
              <p>
                Whether you are at home or on the go, MySentry helps turn an emergency moment into a connected response.
              </p>
            </div>

            {/* Offer Line */}
            <div className="inline-flex flex-wrap items-center gap-3 bg-gradient-to-r from-primary/5 to-transparent border border-primary/20 rounded-2xl px-5 py-3 mb-8 shadow-sm">
              <span className="text-sm text-gray-500 line-through">Regular price: $15/month</span>
              <span className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span className="text-sm font-bold text-primary">Ring Appstore: $4.99/month</span>
              <span className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span className="text-xs font-black text-white bg-primary rounded-full px-2.5 py-0.5">Save 67%</span>
            </div>

            {/* CTA */}
            <div className="mb-6">
              <Link
                href="/ring"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-full px-8 py-4 hover:bg-primary/90 transition-all hover:scale-105 shadow-lg text-[15px]"
              >
                Learn in Detail
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Line */}
            <p className="text-xs text-gray-400 font-medium">
              Available for Ring users through the Ring Appstore.
            </p>
          </motion.div>

          {/* ── Right Column: Mobile Mockup with Numbered Flow Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-[500px] md:h-[600px] flex items-center justify-center"
          >
            {/* Mobile mockup - centered, no background */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 w-48 md:w-56"
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/nnMAAKsVbJPcoFWV.png"
                alt="MySentry app home screen showing PANIC button, emergency contacts, and health monitoring"
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Floating numbered cards around the mobile mockup */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
                className={`absolute ${card.position} z-20 w-40 md:w-48`}
              >
                <div className={`${card.bgColor} ${card.borderColor} border-2 rounded-xl px-3 py-2.5 shadow-lg flex items-center gap-2.5`}>
                  {/* Number badge */}
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white font-bold text-sm shrink-0 shadow-sm">
                    {card.number}
                  </div>
                  {/* Label */}
                  <p className={`${card.textColor} text-xs font-bold leading-tight`}>{card.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
