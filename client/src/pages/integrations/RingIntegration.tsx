import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import GetStartedSection from "@/components/GetStartedSection";
import { motion } from "framer-motion";
import { Camera, Shield, Users, Video, AlertTriangle, CheckCircle, Info } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Camera Visible in MySentry",
    body: "Your Ring camera appears inside the MySentry app once you have an active entitlement and Ring has connected the device to your account.",
  },
  {
    icon: Video,
    title: "Live Broadcast During Emergencies",
    body: "When a Panic Alarm is active, your Ring camera broadcast is automatically shared with your emergency contacts and the 24/7 monitoring team.",
  },
  {
    icon: Shield,
    title: "Layered Home Security",
    body: "Combine Ring's home camera coverage with MySentry's personal safety features: Panic Alarm, Fall Detection, Health Monitoring, and professional response.",
  },
  {
    icon: Users,
    title: "Emergency Contacts See Your Home",
    body: "During an active emergency, your trusted contacts can view your Ring camera feed in real time, giving them situational awareness to respond appropriately.",
  },
];

const faqs = [
  {
    q: "How much does the Ring integration cost?",
    a: "$4.99 per camera per month. This is billed exclusively through the Ring App Store. MySentry does not handle Ring payments directly.",
  },
  {
    q: "Do I need a MySentry subscription to use the Ring integration?",
    a: "Yes. You need an active MySentry subscription (Individual or Family plan) in addition to the Ring integration entitlement. The Ring integration is a separate add-on billed through Ring.",
  },
  {
    q: "How do I get started with the Ring integration?",
    a: "Purchase the MySentry integration through the Ring App Store. If you are a first-time MySentry user, your MySentry account will be automatically provisioned on your first Ring purchase. If you already have a MySentry account, the integration will be linked to your existing account.",
  },
  {
    q: "Why can't I see my Ring camera in MySentry?",
    a: "Your Ring camera will only appear in MySentry if two conditions are met: (1) you have an active Ring integration entitlement, and (2) Ring has connected the device to your MySentry account. Check both the Ring App Store and your MySentry account settings if the camera is not appearing.",
  },
  {
    q: "Which Ring cameras are supported?",
    a: "MySentry supports Ring cameras that are compatible with the Ring App Store integration. Check the Ring App Store listing for the current list of supported devices.",
  },
  {
    q: "Can my emergency contacts always see my Ring camera?",
    a: "No. Your Ring camera feed is only shared with emergency contacts and the monitoring team during an active Panic Alarm. Outside of emergencies, your camera feed remains private.",
  },
];

export default function RingIntegration() {
  return (
    <Layout>
      <SEO
        title="Ring Camera Integration | MySentry"
        description="Connect your Ring camera to MySentry. During an active emergency, your Ring camera broadcast is automatically shared with your emergency contacts and 24/7 monitoring team. $4.99/camera/month through the Ring App Store."
        canonical="https://mysentry.ai/integrations/ring"
      />

      {/* Hero */}
      <section className="relative bg-[#f5faf7] pt-32 pb-20 overflow-hidden">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#2E7D6F] font-bold tracking-widest uppercase text-sm mb-4">
              Integration
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight text-[#1a1a1a] mb-6 leading-tight">
              Ring + MySentry.<br />
              <span className="text-[#2E7D6F]">Your Home. Your Safety.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
              Connect your Ring camera to MySentry. When a Panic Alarm is triggered, your Ring camera broadcast is automatically shared with your emergency contacts and the 24/7 monitoring team.
            </p>
            <p className="text-base text-gray-500 max-w-xl mx-auto mb-8">
              $4.99 per camera per month, billed through the Ring App Store.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ring.com/app-store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#2E7D6F] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#245f54] transition-colors"
              >
                <Camera className="w-5 h-5" />
                Get Started via Ring App Store
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a1a] font-bold px-8 py-4 rounded-xl border border-gray-200 hover:border-[#2E7D6F] transition-colors"
              >
                View MySentry Plans
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-sm text-amber-800 font-medium">
              <strong>Billing note:</strong> The Ring integration is purchased and billed exclusively through the Ring App Store at $4.99 per camera per month. MySentry does not process Ring payments. You will need a separate active MySentry subscription to use this integration.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#2E7D6F] font-bold tracking-widest uppercase text-sm mb-3 block">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-[#1a1a1a]">
              Home Camera + Personal Safety
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "1", title: "Purchase via Ring App Store", desc: "Find MySentry in the Ring App Store and purchase the integration at $4.99/camera/month. Your MySentry account is automatically provisioned if you're new." },
              { step: "2", title: "Camera Appears in MySentry", desc: "Once your entitlement is active and Ring has connected your device, your Ring camera appears inside the MySentry app." },
              { step: "3", title: "Automatic Sharing in Emergencies", desc: "When a Panic Alarm is triggered, your Ring camera broadcast is automatically shared with your emergency contacts and the 24/7 monitoring team." },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#f5faf7] rounded-2xl p-7"
              >
                <div className="w-10 h-10 bg-[#2E7D6F] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#f5faf7]">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-[#2E7D6F] font-bold tracking-widest uppercase text-sm mb-3 block">What You Get</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tight text-[#1a1a1a]">
              Ring + MySentry Features
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#e8f5e9] rounded-xl flex items-center justify-center mb-4">
                  <feat.icon className="w-6 h-6 text-[#2E7D6F]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{feat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#2E7D6F] font-bold tracking-widest uppercase text-sm mb-3 block">Requirements</span>
            <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-[#1a1a1a]">
              What You Need
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "An active MySentry Individual or Family plan subscription",
              "A Ring camera compatible with the Ring App Store",
              "Ring integration purchased through the Ring App Store ($4.99/camera/month)",
              "Ring account connected to MySentry via the Ring App Store",
              "MySentry app installed on your smartphone (iOS 15+ or Android 12+)",
            ].map((req) => (
              <div key={req} className="flex items-start gap-3 bg-[#f5faf7] rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-[#2E7D6F] mt-0.5 shrink-0" />
                <span className="text-sm font-medium text-[#334155]">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-[#f5faf7]">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[#2E7D6F] font-bold tracking-widest uppercase text-sm mb-3 block">FAQ</span>
            <h2 className="text-3xl font-heading font-bold uppercase tracking-tight text-[#1a1a1a]">
              Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-7 border border-gray-100">
                <h3 className="font-bold text-[#1a1a1a] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetStartedSection ctaText="Start 7-Day Free Trial" />
    </Layout>
  );
}
