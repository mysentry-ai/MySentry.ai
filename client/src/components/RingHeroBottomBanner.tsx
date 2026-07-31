import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Premium Ring Appstore offer banner placed at the bottom of the hero section.
 * Not a marquee. Not black. Premium, clean, soft, rounded, floating design.
 * Communicates the $4.99/month Ring Appstore offer with 67% savings.
 */
export default function RingHeroBottomBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full max-w-2xl mx-auto px-4 -mt-8 relative z-10"
    >
      <div className="bg-white/95 backdrop-blur-md border border-primary/15 rounded-2xl px-6 py-5 md:px-8 md:py-6 shadow-lg hover:shadow-xl transition-shadow">
        {/* Content wrapper */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Text */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-sm md:text-base font-semibold text-gray-700 leading-snug">
              Ring users can get MySentry for <span className="text-primary font-bold">$4.99/month</span> on the Ring Appstore.
            </p>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              Save 67% on personal emergency response.
            </p>
          </div>

          {/* Right: CTA */}
          <Link
            href="/ring"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold rounded-full px-6 py-2.5 hover:bg-primary/90 transition-all hover:scale-105 shadow-md text-sm whitespace-nowrap shrink-0"
          >
            Explore More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
