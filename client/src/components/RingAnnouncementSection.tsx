import { Link } from "wouter";
import { motion } from "framer-motion";
import { Camera, Shield, Users, Radio, ArrowRight } from "lucide-react";

/**
 * Homepage announcement section for the MySentry × Ring integration.
 * Two-column layout: copy on left, visual flow diagram on right.
 */
export default function RingAnnouncementSection() {
  const flowItems = [
    { icon: Camera, label: "Ring Camera", color: "bg-[#1a6bff]/10 text-[#1a6bff]" },
    { icon: Shield, label: "MySentry Panic Alarm", color: "bg-primary/10 text-primary" },
    { icon: Radio, label: "Live Broadcast", color: "bg-orange-100 text-orange-600" },
    { icon: Users, label: "Monitoring Team + Contacts", color: "bg-purple-100 text-purple-600" },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5">
              <Camera className="w-3.5 h-3.5" />
              New Integration
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-4 leading-tight">
              MySentry Now Works with Ring
            </h2>
            <p className="text-lg text-gray-600 mb-3 font-medium">
              Add a live safety response layer to your Ring camera setup with MySentry.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ring helps you see what's happening around your home. MySentry helps you act when it matters. With the MySentry × Ring integration, Ring users can connect their cameras to MySentry and activate a Panic Alarm that shares live safety information with the monitoring team and emergency contacts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/ring"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-full px-8 py-4 hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                Activate MySentry with Ring
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ring#how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-[#1a1a1a] font-bold rounded-full px-8 py-4 hover:border-primary hover:text-primary transition-all"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual flow diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">When a Panic Alarm is triggered</p>
            {flowItems.map((item, idx) => (
              <div key={item.label} className="w-full max-w-sm">
                <div className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-4 hover:shadow-md transition-shadow">
                  <span className={`flex items-center justify-center w-10 h-10 rounded-xl ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </span>
                  <span className="font-semibold text-[#1a1a1a]">{item.label}</span>
                </div>
                {idx < flowItems.length - 1 && (
                  <div className="flex justify-center my-1">
                    <div className="w-0.5 h-5 bg-gray-200 rounded-full" />
                  </div>
                )}
              </div>
            ))}
            <p className="text-xs text-gray-400 mt-3 text-center max-w-xs">
              Available for eligible Ring users through the Ring appstore.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
