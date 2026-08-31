import { Shield, UserCheck, Smartphone, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: UserCheck,
    value: "User-Activated",
    label: "Panic alerts"
  },
  {
    icon: Shield,
    value: "Consent-Based",
    label: "Context sharing"
  },
  {
    icon: Smartphone,
    value: "Supported Devices",
    label: "Phone and watch options"
  },
  {
    icon: Headphones,
    value: "Human Review",
    label: "Monitoring workflow"
  }
];

export default function TrustBanner() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6">
            Designed around clear user controls and connected safety workflows
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <Icon className="w-6 h-6 text-primary mb-1" />
                  <span className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">{stat.value}</span>
                  <span className="text-sm text-gray-600 font-medium">{stat.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
