import { motion } from "framer-motion";
import { HeartPulse, MapPin, Users, ShieldAlert, Activity, Thermometer } from "lucide-react";
import { Link } from "wouter";

const vitals = [
  { label: "SpO2", value: "96%", icon: Activity, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Heart Rate", value: "72 bpm", icon: HeartPulse, color: "text-red-500", bg: "bg-red-50" },
  { label: "HRV", value: "42 ms", icon: Activity, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Activity", value: "7,240 steps", icon: Thermometer, color: "text-orange-600", bg: "bg-orange-50" },
];

const features = [
  {
    icon: HeartPulse,
    title: "Supported Wellness Signals",
    desc: "Review supported wearable signals such as heart rate, HRV, blood oxygen, and activity. Availability depends on the connected device and permissions.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Users,
    title: "Emergency Contact Group",
    desc: "Add up to 5 trusted contacts who can receive permitted alert context, such as location or live video, when an alert workflow starts.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: MapPin,
    title: "Family Connectivity",
    desc: "Keep trusted contacts informed during an alert without giving them continuous access to private wellness data. Sharing depends on your settings and permissions.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: ShieldAlert,
    title: "One-Tap PANIC Button",
    desc: "Start a user-activated alert from a supported phone or watch. Monitoring and shared context depend on plan, device, permissions, connectivity, and region.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

export default function AppDashboardShowcase() {
  return (
    <section className="py-24 bg-[#f0f9f0]">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
            The MySentry Dashboard
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6">
            Personal Safety and Health Monitoring, Right on Your Screen
          </h2>
          <p className="text-xl text-gray-600">
            Open MySentry to review your safety setup, trusted contacts, supported wellness signals, and Panic Alarm controls in one place.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Phone screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full scale-90" />
              {/* Phone frame */}
              <div className="relative z-10 bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl">
                <img
                  src="/images/app-home.png"
                  alt="MySentry app home screen showing the PANIC button, emergency contacts, Family Connectivity, and Health Monitoring with Watch Connected"
                  className="w-[280px] rounded-[2.5rem]"
                  loading="lazy"
                  width="280" height="606"
                />
              </div>
              {/* Floating vitals badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -right-8 top-16 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 z-20"
              >
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Example Signals</p>
                <div className="flex flex-col gap-2">
                  {vitals.slice(0, 2).map((v) => {
                    const Icon = v.icon;
                    return (
                      <div key={v.label} className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${v.bg}`}>
                          <Icon className={`w-4 h-4 ${v.color}`} />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">{v.label}</p>
                          <p className="text-sm font-bold text-[#1a1a1a]">{v.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
              {/* Floating PANIC badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -left-8 bottom-24 bg-red-600 text-white rounded-2xl shadow-xl px-4 py-3 z-20"
              >
                <p className="text-xs font-bold uppercase tracking-wider">PANIC</p>
                <p className="text-xs opacity-90">Starts alert flow</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5 items-start"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${f.bg}`}>
                    <Icon className={`w-6 h-6 ${f.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            <div className="pt-4">
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-lg"
              >
                See all features in detail
                <span aria-hidden="true">&#8594;</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Vitals strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {vitals.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.label}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${v.bg}`}>
                  <Icon className={`w-6 h-6 ${v.color}`} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{v.label}</p>
                  <p className="text-2xl font-bold text-[#1a1a1a]">{v.value}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-5 text-center text-sm text-gray-600">
          Readings shown are illustrative. MySentry is not a medical device and does not diagnose, treat, cure, or prevent medical conditions.
        </p>
      </div>
    </section>
  );
}
