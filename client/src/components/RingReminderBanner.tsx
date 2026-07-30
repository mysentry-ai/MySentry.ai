import { Link } from "wouter";
import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";

/**
 * Later homepage reminder banner for the Ring Appstore offer.
 * Placed 2-3 sections after the main Ring announcement section.
 * Includes a clean price comparison card. Single CTA: Explore More.
 */
export default function RingReminderBanner() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#f7faf8] border border-primary/20 rounded-3xl px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 shadow-sm"
        >
          {/* Left: Copy */}
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
              <Camera className="w-3 h-3" />
              Ring Appstore Offer
            </span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#1a1a1a] mb-3 leading-tight">
              Complete Your Safety Setup with MySentry
            </h3>
            <p className="text-gray-600 leading-relaxed mb-3">
              Your Ring cameras support home security. MySentry adds personal emergency response that goes with you. Ring users can access MySentry through the Ring Appstore for $4.99/month instead of the regular $15/month plan.
            </p>
            <p className="text-sm font-semibold text-primary mb-6">
              Save 67% with the Ring Appstore offer.
            </p>
            <Link
              href="/ring"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold rounded-full px-7 py-3.5 hover:bg-primary/90 transition-all hover:scale-105 shadow-md text-[14px]"
            >
              Explore More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Price comparison card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-64 shrink-0"
          >
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md overflow-hidden">
              {/* Card header */}
              <div className="bg-[#1a1a1a] px-5 py-3 text-center">
                <p className="text-white text-xs font-bold uppercase tracking-widest">MySentry Pricing</p>
              </div>

              {/* Regular price */}
              <div className="px-5 py-4 border-b border-gray-100">
                <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-1">Regular Price</p>
                <p className="text-2xl font-bold text-gray-400 line-through">$15<span className="text-base font-medium">/month</span></p>
              </div>

              {/* Ring Appstore price */}
              <div className="px-5 py-4 bg-primary/5">
                <p className="text-[11px] font-semibold text-primary uppercase tracking-wide mb-1">Ring Appstore Price</p>
                <p className="text-3xl font-black text-primary">$4.99<span className="text-base font-semibold text-gray-600">/month</span></p>
              </div>

              {/* Savings badge */}
              <div className="px-5 py-3 bg-primary text-center">
                <p className="text-white text-sm font-black tracking-wide">You Save 67%</p>
              </div>

              {/* Mobile mockup placeholder */}
              <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-center bg-gray-50 h-16">
                <p className="text-[11px] text-gray-400 font-medium text-center">Mobile mockup - to be added</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
