import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Later homepage reminder banner for Ring Appstore offer.
 * Displays Ring + MySentry logo above heading.
 * Left: Copy and CTA.
 * Right: Mother-with-phone image, full bleed.
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
            <div className="p-8 md:p-12 flex flex-col justify-center min-h-[500px] md:min-h-[627px]">
              {/* Ring + MySentry Logo */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <img
                  src="/images/cdn/tBeRfeegjUlLnzcw.png"
                  alt="Ring and MySentry logos"
                  className="h-[70px] w-auto"
                  width="85"
                  height="64"
                  loading="lazy"
                />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-heading font-semibold text-gray-800 mb-4 leading-tight max-w-sm">
                Complete Your Safety Setup with MySentry
              </h3>

              <p className="text-gray-600 leading-relaxed mb-4">
                Your Ring cameras support home security. MySentry adds user-activated personal safety tools, trusted contacts, and eligible professional monitoring that can go with you. Ring users can review current eligibility, pricing, and availability through the Ring App Store.
              </p>

              <p className="text-sm font-semibold text-[#255044] mb-8">
                Third-party offer terms can change and are confirmed during enrollment.
              </p>

              <Link
                href="/integrations/ring"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold rounded-full px-7 py-3.5 hover:bg-primary/90 transition-all hover:scale-105 shadow-md text-[14px] w-fit"
              >
                Explore Ring Integration
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* ── Right: Mother with Phone Image ── */}
            <div className="relative overflow-hidden min-h-[500px] md:min-h-[627px]">
              <motion.img
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                src="/images/cdn/PpLEDwHxoIbVfWhh.png"
                alt="Woman holding phone showing MySentry app"
                className="absolute inset-0 w-full h-full object-cover object-top"
                width="1086"
                height="1448"
                loading="lazy"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
