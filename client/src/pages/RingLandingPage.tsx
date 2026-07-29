import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  Camera,
  Shield,
  Radio,
  Users,
  MapPin,
  Battery,
  Video,
  Phone,
  ChevronDown,
  Check,
  ArrowRight,
  Mic,
  Watch,
  Car,
  Activity,
  Home,
  Heart,
} from "lucide-react";
import { trackLeadEvent } from "@/lib/metaPixel";

const RING_CTA_LINK = "/pricing#pricing-plans";

function PrimaryCTA({ className = "" }: { className?: string }) {
  return (
    <Link
      href={RING_CTA_LINK}
      onClick={trackLeadEvent}
      className={`inline-flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-full px-8 py-4 hover:bg-primary/90 transition-all hover:scale-105 shadow-lg ${className}`}
    >
      Start Free with Ring
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

function SecondaryCTA({ href = "#how-it-works", label = "See How It Works", className = "" }: { href?: string; label?: string; className?: string }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-[#1a1a1a] font-bold rounded-full px-8 py-4 hover:border-primary hover:text-primary transition-all ${className}`}
    >
      {label}
    </a>
  );
}

const faqs = [
  {
    q: "Does MySentry replace Ring?",
    a: "No. MySentry does not replace Ring. Ring remains your camera system. MySentry works with Ring to add Panic Alarm support, live broadcast, emergency contacts, and monitoring-team visibility during an alarm.",
  },
  {
    q: "What does the MySentry × Ring integration do?",
    a: "It allows eligible Ring users to connect Ring cameras to MySentry. When a Panic Alarm is triggered, the monitoring team can access a live broadcast that may include the user's Ring camera feed along with standard alarm data.",
  },
  {
    q: "What information is shared during a Panic Alarm?",
    a: "The live broadcast can include live location, audio/video stream, user battery percentage, and Ring camera live feed when available.",
  },
  {
    q: "Who can access the live broadcast?",
    a: "The monitoring team and emergency contacts can access the live broadcast during the alarm flow.",
  },
  {
    q: "How can a Panic Alarm be triggered?",
    a: "A Panic Alarm can be triggered by tap, volume button, shake, voice, smartwatch, crash detection, or fall detection.",
  },
  {
    q: "When does the Ring camera feed appear?",
    a: "The Ring camera feed is designed to activate when the alarm is triggered from within the home where the Ring cameras are installed. Standard MySentry broadcast elements such as location, audio/video, and battery status continue to function regardless of the user's location.",
  },
  {
    q: "Does cancelling Ring cancel MySentry?",
    a: "No. Ring and MySentry subscriptions are independent. Cancelling one does not cancel the other.",
  },
  {
    q: "Does cancelling MySentry cancel Ring?",
    a: "No. Your Ring subscription remains separate from your MySentry subscription.",
  },
  {
    q: "How much does MySentry cost for Ring users?",
    a: "MySentry starts from $4.99/month for one connected Ring camera. Pricing increases based on the number of cameras connected, with 4+ cameras moving into a Family Plan.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Ring users can start with a free trial and continue with Ring-user pricing after the trial.",
  },
  {
    q: "Who is this best for?",
    a: "MySentry is useful for Ring users who want an added safety layer for themselves, their family, seniors, caregivers, or anyone who wants live support and emergency context connected to their camera setup.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1a1a1a] text-base group-hover:text-primary transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="pb-5 text-gray-600 leading-relaxed text-sm">{a}</p>
      )}
    </div>
  );
}

export default function RingLandingPage() {
  const steps = [
    { icon: Camera, title: "Connect Your Ring Camera", desc: "Link your eligible Ring camera to MySentry through the Ring appstore experience." },
    { icon: Shield, title: "Activate MySentry", desc: "Start your free trial and set up your Panic Alarm, emergency contacts, and safety preferences." },
    { icon: Phone, title: "Trigger a Panic Alarm", desc: "Use tap, volume button, shake, voice, smartwatch, crash detection, or fall detection to trigger an alarm." },
    { icon: Radio, title: "Live Broadcast Starts", desc: "After the countdown, MySentry activates a live broadcast with key safety information." },
    { icon: Users, title: "Monitoring Team and Contacts Get Context", desc: "The monitoring team and emergency contacts can access the live broadcast, including location, audio/video, battery status, and Ring camera feed when available." },
  ];

  const benefits = [
    { icon: Shield, title: "Live Panic Alarm Support", desc: "Trigger a Panic Alarm using tap, volume button, shake, voice, smartwatch, crash detection, or fall detection." },
    { icon: Radio, title: "Real-Time Safety Broadcast", desc: "When the alarm activates, MySentry starts a live broadcast with key safety information." },
    { icon: Camera, title: "Ring Camera Context", desc: "Your connected Ring camera feed can be included during the alarm flow, helping the monitoring team and emergency contacts better understand what is happening." },
    { icon: Users, title: "Emergency Contacts Included", desc: "Your emergency contacts can receive the live broadcast, giving trusted people visibility when it matters." },
    { icon: Home, title: "Built for Everyday Safety", desc: "Whether you are home, alone, with family, or supporting a loved one, MySentry helps keep safety action closer." },
  ];

  const connectedItems = [
    { icon: Shield, label: "Panic Alarm", color: "bg-primary/10 text-primary" },
    { icon: MapPin, label: "Live Location", color: "bg-blue-100 text-blue-600" },
    { icon: Video, label: "Audio/Video Broadcast", color: "bg-orange-100 text-orange-600" },
    { icon: Battery, label: "Battery Status", color: "bg-yellow-100 text-yellow-600" },
    { icon: Users, label: "Emergency Contacts", color: "bg-purple-100 text-purple-600" },
    { icon: Activity, label: "Monitoring Team", color: "bg-green-100 text-green-600" },
    { icon: Camera, label: "Ring Camera Feed", color: "bg-[#1a6bff]/10 text-[#1a6bff]" },
  ];

  const useCases = [
    { icon: Home, title: "At Home", desc: "You trigger a Panic Alarm while inside your home, and your connected Ring camera feed can help provide additional context during the live broadcast." },
    { icon: Heart, title: "For Loved Ones", desc: "Family members and emergency contacts can receive critical safety information when an alarm is triggered." },
    { icon: Car, title: "During a Fall or Crash", desc: "MySentry supports fall and crash detection as part of the Panic Alarm trigger flow." },
    { icon: Mic, title: "When You Cannot Speak", desc: "The alarm can be triggered through multiple methods, including tap, shake, voice, volume button, and smartwatch." },
    { icon: Watch, title: "When Every Detail Matters", desc: "Location, live audio/video, battery status, and camera context can help the monitoring team and emergency contacts understand the situation faster." },
  ];

  const familyUses = ["Families", "Seniors living independently", "Caregivers", "Parents", "People living alone", "Shared households"];

  const pricingRows = [
    { cameras: "1 camera", price: "$4.99/mo", plan: "Individual — 1 user" },
    { cameras: "2 cameras", price: "$9.98/mo", plan: "Individual — 1 user" },
    { cameras: "3 cameras", price: "$14.97/mo", plan: "Individual — 1 user" },
    { cameras: "4+ cameras", price: "Tiered accordingly", plan: "Family — up to 6 users" },
  ];

  return (
    <Layout>
      <SEO
        title="MySentry for Ring Users | Add Live Safety Response to Your Ring Cameras"
        description="Connect your Ring cameras to MySentry. Add a live Panic Alarm, emergency contacts, monitoring team visibility, and Ring camera feed to your safety setup. Start free."
        canonical="https://mysentry.ai/ring"
      />

      {/* ─── 1. HERO ─── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#e8f5e9] via-white to-[#f0f7ff] pt-24 pb-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5 shadow-sm">
                <Camera className="w-3.5 h-3.5" /> MySentry for Ring Users
              </span>
              <h1 className="text-4xl md:text-[3.2rem] font-heading font-bold text-[#1a1a1a] leading-tight mb-5">
                Add Live Safety Response to Your Ring Cameras
              </h1>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Your Ring cameras help you see what's happening. MySentry helps you act when it matters by connecting your Panic Alarm, live broadcast, monitoring team, emergency contacts, and Ring camera feed into one safety flow.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                Built for Ring users, MySentry adds an active safety layer to your existing camera setup.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <PrimaryCTA />
                <SecondaryCTA href="#how-it-works" label="How It Works" />
              </div>
              <p className="text-xs text-gray-400">Available for eligible Ring users through the Ring appstore.</p>
            </motion.div>

            {/* Visual dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 max-w-sm mx-auto">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-xs text-gray-400 ml-2 font-mono">MySentry × Ring</span>
                </div>
                {/* Panic button card */}
                <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mb-3 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1a1a] text-sm">Panic Alarm Active</p>
                    <p className="text-xs text-gray-500">Live broadcast started</p>
                  </div>
                </div>
                {/* Ring camera card */}
                <div className="bg-[#1a6bff]/5 border border-[#1a6bff]/20 rounded-2xl p-4 mb-3 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1a6bff]/10 flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[#1a6bff]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-sm">Ring Camera Feed</p>
                    <p className="text-xs text-green-600 font-medium">Live — Front Door</p>
                  </div>
                </div>
                {/* Location card */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-3 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-sm">Live Location</p>
                    <p className="text-xs text-gray-500">Shared with monitoring team</p>
                  </div>
                </div>
                {/* Contacts card */}
                <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a1a1a] text-sm">Emergency Contacts</p>
                    <p className="text-xs text-gray-500">3 contacts notified</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 2. WHY ADD MYSENTRY TO RING? ─── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">The Value</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] max-w-2xl mx-auto">
              Ring Shows You What's Happening. MySentry Helps You Respond.
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Your Ring cameras are already an important part of your home security. MySentry does not replace them. It works with them.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. HOW IT WORKS ─── */}
      <section id="how-it-works" className="py-20 bg-[#f8faf8]">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Step by Step</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a]">
              One Panic Alarm. More Context. Faster Support.
            </h2>
          </div>
          {/* Desktop horizontal timeline */}
          <div className="hidden md:flex items-start gap-4 mb-12">
            {steps.map((step, i) => (
              <div key={step.title} className="flex-1 flex flex-col items-center text-center">
                <div className="relative flex items-center w-full mb-4">
                  <div className="flex-1 h-0.5 bg-gray-200" style={{ visibility: i === 0 ? "hidden" : "visible" }} />
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-md flex-shrink-0 z-10">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 h-0.5 bg-gray-200" style={{ visibility: i === steps.length - 1 ? "hidden" : "visible" }} />
                </div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Step {i + 1}</span>
                <h3 className="font-bold text-[#1a1a1a] text-sm mb-1">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          {/* Mobile vertical timeline */}
          <div className="md:hidden flex flex-col gap-6 mb-12">
            {steps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md flex-shrink-0">
                    <step.icon className="w-4 h-4 text-white" />
                  </div>
                  {i < steps.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-2" />}
                </div>
                <div className="pb-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Step {i + 1}</span>
                  <h3 className="font-bold text-[#1a1a1a] mt-0.5 mb-1">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* CTA block */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center max-w-lg mx-auto">
            <h3 className="font-bold text-[#1a1a1a] text-xl mb-4">Ready to add MySentry to your Ring setup?</h3>
            <PrimaryCTA />
          </div>
        </div>
      </section>

      {/* ─── 4. MORE THAN A CAMERA ALERT ─── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">The Full Picture</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-4">
              More Than a Camera Alert
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              A camera alert can tell you something happened. MySentry helps create an action flow around that moment.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {connectedItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col items-center gap-3 bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow text-center"
              >
                <span className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </span>
                <span className="font-semibold text-[#1a1a1a] text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-lg font-bold text-[#1a1a1a]">
            See the situation. Share the context. Activate support.
          </p>
        </div>
      </section>

      {/* ─── 5. PRICING ─── */}
      <section id="pricing" className="py-20 bg-[#f8faf8]">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-3">
              Start Free. Continue with Ring-User Pricing.
            </h2>
            <p className="text-gray-600">
              MySentry is available to eligible Ring users with special Ring-integrated pricing.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100 px-6 py-3 text-xs font-bold uppercase tracking-widest text-gray-400">
              <span>Ring Cameras</span>
              <span className="text-center">Monthly Price</span>
              <span className="text-right">Plan Type</span>
            </div>
            {pricingRows.map((row, i) => (
              <div key={row.cameras} className={`grid grid-cols-3 px-6 py-4 items-center ${i < pricingRows.length - 1 ? "border-b border-gray-50" : ""}`}>
                <span className="font-semibold text-[#1a1a1a]">{row.cameras}</span>
                <span className="text-center font-bold text-primary">{row.price}</span>
                <span className="text-right text-gray-500 text-sm">{row.plan}</span>
              </div>
            ))}
          </div>
          {/* Pricing note */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8 text-sm text-yellow-800">
            <strong>Note:</strong> Pricing details are subject to final confirmation. Please verify the exact public pricing language before publishing.
          </div>
          <div className="text-center">
            <PrimaryCTA className="mb-3" />
            <p className="text-xs text-gray-400 mt-3">Cancel anytime. Ring and MySentry subscriptions are separate.</p>
          </div>
        </div>
      </section>

      {/* ─── 6. FAMILY SAFETY ─── */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Family Plan</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-5">
                Protect More Than One Person
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                For homes with multiple Ring cameras and multiple people to protect, MySentry supports a Family Plan for up to 6 members when 4 or more cameras are connected.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">This makes MySentry useful for:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {familyUses.map((use) => (
                  <span key={use} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    {use}
                  </span>
                ))}
              </div>
              <Link
                href="/families"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bold rounded-full px-7 py-3 hover:bg-primary hover:text-white transition-all"
              >
                Explore Family Protection
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#e8f5e9] to-[#f0f7ff] rounded-3xl p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <p className="font-bold text-[#1a1a1a] text-sm">Family Plan</p>
                  <p className="text-xs text-gray-500">Up to 6 members with 4+ cameras</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                <Camera className="w-8 h-8 text-[#1a6bff]" />
                <div>
                  <p className="font-bold text-[#1a1a1a] text-sm">Multiple Ring Cameras</p>
                  <p className="text-xs text-gray-500">Connect 4+ cameras for full coverage</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm">
                <Shield className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-bold text-[#1a1a1a] text-sm">Everyone Protected</p>
                  <p className="text-xs text-gray-500">Seniors, caregivers, parents, and more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. USE CASES ─── */}
      <section className="py-20 bg-[#f8faf8]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Use Cases</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a]">
              When MySentry Can Help
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <uc.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-[#1a1a1a] mb-2">{uc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{uc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. FINAL CTA ─── */}
      <section className="py-24 bg-gradient-to-br from-[#1a3a1a] to-[#1e5c2e] text-white">
        <div className="container text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Camera className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
              Turn Your Ring Setup Into a Connected Safety System
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Your Ring cameras are already helping you monitor your home. MySentry adds a live safety response layer when you need action, context, and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={RING_CTA_LINK}
                onClick={trackLeadEvent}
                className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-full px-8 py-4 hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
              >
                Activate MySentry with Ring
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={RING_CTA_LINK}
                onClick={trackLeadEvent}
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold rounded-full px-8 py-4 hover:bg-white/20 transition-all"
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 9. FAQ ─── */}
      <section className="py-20 bg-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a]">
              Common Questions
            </h2>
          </div>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 px-6">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          {/* Final bottom CTA */}
          <div className="text-center mt-14">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">Ready to Add MySentry to Your Ring Setup?</h3>
            <p className="text-gray-600 mb-6">Start your free trial today and connect your Ring cameras to MySentry's live safety response system.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <PrimaryCTA />
              <SecondaryCTA href="#how-it-works" label="See How It Works" />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-3">
        <Link
          href={RING_CTA_LINK}
          onClick={trackLeadEvent}
          className="flex items-center justify-center gap-2 bg-primary text-white font-bold rounded-full w-full py-4 text-base hover:bg-primary/90 transition-all"
        >
          Start Free with Ring
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Layout>
  );
}
