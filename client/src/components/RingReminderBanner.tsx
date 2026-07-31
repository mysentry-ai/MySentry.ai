import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Later homepage reminder banner for Ring Appstore offer.
 * Premium split layout with copy on left, Group1000007976.png and price card on right.
 * Refined (not harsh) price comparison showing $15 vs $4.99 with 67% savings.
 * No placeholder text. Uses real visual asset.
 */
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
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-4 leading-tight">
                Complete Your Safety Setup with MySentry
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Your Ring cameras support home security. MySentry adds personal emergency response that goes with you. Ring users can access MySentry through the Ring Appstore for $4.99/month instead of the regular $15/month plan.
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

            {/* ── Right: Visual + Price Card ── */}
            <div className="relative bg-gradient-to-br from-[#f7faf8] to-white p-8 md:p-12 flex flex-col items-center justify-center gap-8">

              {/* Supporting visual - Group1000007976.png */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full max-w-sm"
              >
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/LawJSBlijHQLelUI.png"
                  alt="Live location, contact view, battery level, and Ring camera feed integration"
                  className="w-full h-auto rounded-2xl shadow-md"
                />
              </motion.div>

              {/* Elegant price comparison card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full max-w-sm"
              >
                <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">

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

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
