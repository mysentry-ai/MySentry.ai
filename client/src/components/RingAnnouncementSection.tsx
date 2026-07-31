import { Link } from "wouter";
import { motion } from "framer-motion";
import { Camera, MapPin, Radio, Users, Shield, ArrowRight } from "lucide-react";

/**
 * Main Ring Appstore announcement section with premium two-column layout.
 * Left: Approved copy with badge, headline, subheadline, body, offer line, CTA, trust line.
 * Right: Layered visual composition with emotional background and floating cards showing numbered response journey.
 * Uses visual assets: Group1000007974(1).png (emotional background).
 */

const floatingCards = [
  {
    id: "panic",
    number: "1",
    icon: Shield,
    label: "Panic Alarm Triggered",
    position: "top-0 left-0",
    delay: 0.1,
    color: "bg-red-50 text-red-600 border-red-100",
  },
  {
    id: "broadcast",
    number: "2",
    icon: Radio,
    label: "Live Broadcast Started",
    position: "top-1/4 right-0",
    delay: 0.3,
    color: "bg-green-50 text-green-600 border-green-100",
  },
  {
    id: "location",
    number: "3",
    icon: MapPin,
    label: "Live Location Shared",
    position: "bottom-1/3 left-4",
    delay: 0.5,
    color: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    id: "team",
    number: "4",
    icon: Users,
    label: "Monitoring Team Notified",
    position: "bottom-0 right-2",
    delay: 0.7,
    color: "bg-purple-50 text-purple-600 border-purple-100",
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

          {/* ── Right Column: Layered Visual Composition ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-[500px] md:h-[600px] flex items-center justify-center"
          >
            {/* Background emotional visual - direct image placement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute inset-0 flex items-center justify-center z-0 rounded-3xl overflow-hidden"
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/lBpMTERFjfzPUjYU.png"
                alt="Emergency response moment with MySentry and Ring"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating numbered cards around the visual */}
            {floatingCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
                className={`absolute ${card.position} z-20 w-44 md:w-52`}
              >
                <div className={`${card.color} border rounded-2xl px-4 py-3 shadow-lg backdrop-blur-sm flex items-start gap-3`}>
                  {/* Number badge */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white font-bold text-sm shrink-0">
                    {card.number}
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-800 leading-tight">{card.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Soft connecting lines (subtle) */}
            <svg
              className="absolute inset-0 w-full h-full z-5 pointer-events-none"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))" }}
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(26, 107, 255, 0.2)" />
                  <stop offset="100%" stopColor="rgba(26, 107, 255, 0.05)" />
                </linearGradient>
              </defs>
              {/* Subtle connecting lines - kept minimal for premium feel */}
              <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.3" />
              <line x1="50%" y1="50%" x2="75%" y2="35%" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.2" />
              <line x1="50%" y1="50%" x2="25%" y2="65%" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.2" />
              <line x1="50%" y1="50%" x2="70%" y2="80%" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.2" />
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
