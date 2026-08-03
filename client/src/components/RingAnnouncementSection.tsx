import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Main Ring Appstore announcement section with premium two-column layout.
 * Left: Approved copy with badge, headline, subheadline, body, offer line, CTA, trust line.
 * Right: Mother with phone image as primary visual with floating pricing card overlay.
 * Simplified layout without flow cards.
 */

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
              <p className="text-gray-600">
                Ring helps you monitor what's happening around your home. MySentry adds personal emergency response for you and your loved ones.
              </p>
              <p className="text-gray-600">
                Now available on the Ring App Store, MySentry gives Ring users access to a complete safety solution that connects home security with personal safety.
              </p>
              <p className="text-gray-600">
                When you trigger a MySentry Panic Alarm, your live location, audio and video broadcast, battery status, and connected Ring camera feed can be shared with the monitoring team and emergency contacts.
              </p>
              <p className="text-gray-600">
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

          {/* ── Right Column: Mother with Phone Image + Floating Pricing Card ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-[500px] md:h-[650px] flex items-center justify-center"
          >
            {/* Mother with phone image - centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 w-full max-w-xs md:max-w-sm"
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/NgnjiRdpGycUJmmW.png"
                alt="Woman holding phone displaying MySentry app with emergency features and health monitoring"
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Floating pricing card - positioned absolutely bottom-right */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 w-56 md:w-64"
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden backdrop-blur-sm">

                {/* Card header */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 border-b border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">MySentry Pricing</p>
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

          </motion.div>

        </div>
      </div>
    </section>
  );
}
