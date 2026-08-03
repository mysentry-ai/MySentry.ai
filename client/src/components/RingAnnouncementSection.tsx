import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Main Ring Appstore announcement section with premium two-column layout.
 * Left: Approved copy with badge, headline, subheadline, body, offer line, CTA, trust line.
 * Right: Visual area with previous design elements.
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
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-6">
              Available on the Ring Appstore
            </span>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-gray-800 mb-4 leading-tight">
              Ring protects your home. MySentry helps protect you wherever you go.
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p className="text-sm font-light text-gray-500">
                Now available on the Ring App Store, MySentry gives Ring users access to a complete safety solution that connects home security with personal safety.
              </p>
              <p className="text-sm font-light text-gray-500">
                When you trigger a MySentry Panic Alarm, your live location, audio and video broadcast, battery status, and connected Ring camera feed can be shared with the monitoring team and emergency contacts.
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
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-full px-8 py-4 hover:bg-primary/90 transition-all hover:scale-105 shadow-lg text-sm"
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

          {/* ── Right Column: Visual Area ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative h-[500px] md:h-[600px] flex items-center justify-center"
          >
            {/* Placeholder for visual - can be customized */}
            <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-sm font-medium">Visual Area</p>
                <p className="text-xs">Previous design elements</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
