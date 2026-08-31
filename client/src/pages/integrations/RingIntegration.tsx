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
    title: "Camera Context During Eligible Alerts",
    body: "When supported and permitted, selected Ring camera context may be available to the monitoring workflow during an active Panic Alarm.",
  },
  {
    icon: Shield,
    title: "Layered Home Security",
    body: "Combine Ring home-camera context with MySentry's user-activated Panic Alarm, supported-device detection, wellness signals, trusted contacts, and eligible monitoring.",
  },
  {
    icon: Users,
    title: "Permission-Based Context",
    body: "Trusted contacts receive only the alert context supported by the integration and allowed by your account, camera, and sharing settings.",
  },
];

const faqs = [
  {
    q: "How much does the Ring integration cost?",
    a: "Review the current Ring App Store listing during enrollment. Pricing, billing, eligible plans, supported devices, and promotional terms are controlled by the active offer and can change.",
  },
  {
    q: "Do I need a MySentry subscription to use the Ring integration?",
    a: "Eligibility depends on the current Ring listing and MySentry plan requirements shown during enrollment. Confirm both before purchasing or activating the integration.",
  },
  {
    q: "How do I get started with the Ring integration?",
    a: "Open the MySentry listing in the Ring App Store, review current eligibility and terms, and follow the account-linking instructions shown during enrollment.",
  },
  {
    q: "Why can't I see my Ring camera in MySentry?",
    a: "A supported camera may appear only after the required entitlement, account linking, permissions, and supported-device setup are active. Check the Ring listing and MySentry account settings or contact support if it does not appear.",
  },
  {
    q: "Which Ring cameras are supported?",
    a: "MySentry supports Ring cameras that are compatible with the Ring App Store integration. Check the Ring App Store listing for the current list of supported devices.",
  },
  {
    q: "Can my emergency contacts always see my Ring camera?",
    a: "No. Camera access is not described as continuous contact access. Any alert-time context depends on current integration support and the account, camera, and sharing permissions you enable.",
  },
];

export default function RingIntegration() {
  return (
    <Layout>
      <SEO
        title="Ring Camera Integration | MySentry"
        description="Review current eligibility, setup, permission, camera-context, monitoring, and billing requirements for the MySentry listing in the Ring App Store."
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
              Connect eligible Ring camera context to a MySentry Panic Alarm workflow. When supported and permitted, selected camera context may help the monitoring team understand an active alert.
            </p>
            <p className="text-base text-gray-500 max-w-xl mx-auto mb-8">
              Current pricing, eligible plans, supported devices, and promotional terms are confirmed in the Ring App Store during enrollment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ring.com/appstore/mysentry?q=mysen"
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
              <strong>Offer note:</strong> Review the active Ring App Store listing before enrollment. Pricing, billing, plan eligibility, device support, account linking, and promotional terms can change.
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
              { step: "1", title: "Review the Ring Listing", desc: "Open the MySentry listing in the Ring App Store and confirm current pricing, eligibility, supported devices, billing, and terms." },
              { step: "2", title: "Link Eligible Accounts and Devices", desc: "Follow the current Ring and MySentry instructions to activate the entitlement, connect your account, and configure supported cameras." },
              { step: "3", title: "Choose Alert-Time Permissions", desc: "Enable only the camera and context permissions you want available during a supported MySentry alert workflow." },
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
              "A MySentry plan eligible under the current Ring listing",
              "A Ring camera compatible with the Ring App Store",
              "An active Ring integration entitlement under the current offer terms",
              "Ring account connected to MySentry via the Ring App Store",
              "The MySentry app on a currently supported smartphone and software version",
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

      <GetStartedSection ctaText="Review Plans and Eligibility" />
    </Layout>
  );
}
