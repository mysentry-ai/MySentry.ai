import { Link } from "wouter";
import { motion } from "framer-motion";
import { Camera, MapPin, Radio, Users, Shield, ArrowRight } from "lucide-react";

/**
 * Main homepage Ring Appstore announcement section.
 * Two-column layout: approved copy on left, animated infographic on right.
 * Uses $4.99/month pricing. Does NOT use "Works with Ring" phrase.
 */

const infographicSteps = [
  {
    icon: Shield,
    label: "Panic Alarm Triggered",
    sub: "One tap on phone or watch",
    color: "bg-red-50 text-red-600 border-red-100",
    pulse: true,
  },
  {
    icon: Radio,
    label: "Live Broadcast Started",
    sub: "Audio and video stream begins",
    color: "bg-orange-50 text-orange-600 border-orange-100",
    pulse: false,
  },
  {
    icon: MapPin,
    label: "Live Location Shared",
    sub: "Real-time GPS sent to contacts",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    pulse: false,
  },
  {
    icon: Camera,
    label: "Ring Camera Feed Added",
    sub: "Connected Ring camera streams in",
    color: "bg-[#1a6bff]/10 text-[#1a6bff] border-[#1a6bff]/20",
    pulse: false,
  },
  {
    icon: Users,
    label: "Monitoring Team Notified",
    sub: "24/7 team and emergency contacts alerted",
    color: "bg-primary/10 text-primary border-primary/20",
    pulse: false,
  },
];

export default function RingAnnouncementSection() {
  return (
    <section className="py-20 bg-[#f7faf8] border-t border-gray-100" id="ring-announcement">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Approved copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
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
            <h2 className="text-3xl md:text-[2.25rem] font-heading font-bold text-[#1a1a1a] mb-4 leading-tight">
              Home Security Meets Personal Emergency Response
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-gray-700 font-semibold mb-5 leading-snug">
              Ring protects your home. MySentry helps protect you wherever you go.
            </p>

            {/* Body copy */}
            <div className="space-y-3 text-gray-600 leading-relaxed mb-6">
              <p>
                Ring helps you monitor what is happening around your home. MySentry adds personal emergency response for you and your loved ones.
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

            {/* Offer line */}
            <div className="inline-flex flex-wrap items-center gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 mb-7 shadow-sm">
              <span className="text-sm text-gray-500 line-through">Regular price: $15/month</span>
              <span className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span className="text-sm font-bold text-primary">Ring Appstore: $4.99/month</span>
              <span className="w-px h-4 bg-gray-200 hidden sm:block" />
              <span className="text-xs font-black text-white bg-primary rounded-full px-2.5 py-0.5">Save 67%</span>
            </div>

            {/* Single CTA */}
            <div className="mb-5">
              <Link
                href="/ring"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-full px-8 py-4 hover:bg-primary/90 transition-all hover:scale-105 shadow-lg text-[15px]"
              >
                Learn in Detail
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust line */}
            <p className="text-xs text-gray-400 font-medium">
              Available for Ring users through the Ring Appstore.
            </p>
          </motion.div>

          {/* Right: Animated infographic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center"
          >
            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-5">
              When a Panic Alarm is triggered
            </p>

            <div className="w-full max-w-sm space-y-0">
              {infographicSteps.map((step, idx) => (
                <div key={step.label}>
                  {/* Step card */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.12 }}
                    className={`relative flex items-start gap-4 bg-white rounded-2xl border shadow-sm px-5 py-4 hover:shadow-md transition-shadow ${step.color.split(" ").find(c => c.startsWith("border-")) ?? "border-gray-100"}`}
                  >
                    {/* Pulse ring for first step */}
                    {step.pulse && (
                      <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-60" />
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500" />
                      </span>
                    )}

                    <span className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 border ${step.color}`}>
                      <step.icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="font-bold text-[#1a1a1a] text-sm leading-tight">{step.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{step.sub}</p>
                    </div>
                  </motion.div>

                  {/* Connector line */}
                  {idx < infographicSteps.length - 1 && (
                    <div className="flex justify-center">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 + idx * 0.12 }}
                        className="w-0.5 h-6 bg-gradient-to-b from-gray-300 to-gray-100 rounded-full origin-top"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile mockup placeholder */}
            <div className="mt-8 w-full max-w-sm bg-white border-2 border-dashed border-gray-200 rounded-2xl h-32 flex items-center justify-center text-gray-400 text-xs font-medium">
              Mobile mockup screen - to be added
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
