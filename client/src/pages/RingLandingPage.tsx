import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
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
  ChevronLeft,
  ChevronRight,
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

const BANNER_SLIDES = [
  {
    id: 1,
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/ozVYFldRngspjPAZ.svg",
    alt: "Banner 1: Your Ring Camera. Your Choice.",
  },
  {
    id: 2,
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/kCLkvVLDcKZPEDZR.svg",
    alt: "Banner 2: One Tap Starts Your Emergency Response",
  },
  {
    id: 3,
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/SgnJkwkGuzmdMTTK.svg",
    alt: "Banner 3: Stay Connected During the Emergency",
  },
];

function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const prev = useCallback(() => {
    goTo((current - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length, -1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % BANNER_SLIDES.length, 1);
  }, [current, goTo]);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="relative w-full overflow-hidden bg-black select-none">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="w-full"
        >
          <img
            src={BANNER_SLIDES[current].src}
            alt={BANNER_SLIDES[current].alt}
            className="w-full h-auto block"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous banner"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next banner"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators labeled 1, 2, 3 */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {BANNER_SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            aria-label={`Go to banner ${i + 1}`}
            className={`w-7 h-7 rounded-full text-xs font-bold transition-all ${
              i === current
                ? "bg-white text-[#1a1a1a] shadow-md scale-110"
                : "bg-white/40 text-white hover:bg-white/70"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

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
    { icon: Camera, title: "Connect Your Ring Camera", desc: "Link your Ring camera to MySentry through the Ring appstore experience." },
    { icon: Shield, title: "Activate MySentry", desc: "Start your free trial and set up your Panic Alarm, emergency contacts, and safety preferences." },
    { icon: Phone, title: "Trigger a Panic Alarm", desc: "Use tap, volume button, shake, voice, smartwatch, crash detection, or fall detection to trigger an alarm." },
    { icon: Radio, title: "Live Broadcast Starts", desc: "After the countdown, MySentry activates a live broadcast with key safety information." },
    { icon: Users, title: "Monitoring Team + Contacts Get Notified", desc: "The monitoring team and emergency contacts can access the live broadcast, including location, audio/video, battery status, and Ring camera feed when available." },
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
    { cameras: "1 camera", price: "$4.99/mo", plan: "Individual 1 user" },
    { cameras: "2 cameras", price: "$9.98/mo", plan: "Individual 1 user" },
    { cameras: "3 cameras", price: "$14.97/mo", plan: "Individual 1 user" },
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
              {/* Badge — visual editor: mt-[25px] */}
              <span className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-5 shadow-sm mt-[25px]">
                <Camera className="w-3.5 h-3.5" /> Available on the Ring App Store
              </span>
              {/* Headline — visual editor: text-[45px] font-semibold */}
              <h1 className="text-[45px] font-heading font-semibold text-[#1a1a1a] leading-tight mb-5">
                Ring protects your home.{" "}
                <br className="hidden sm:block" />
                MySentry helps protect you wherever you go.
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
              <p className="text-xs text-gray-400">Available for Ring users through the Ring Appstore.</p>
            </motion.div>

            {/* Visual dashboard mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Mock dashboard card */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 max-w-md ml-auto">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                  <span className="text-sm font-bold text-[#1a1a1a]">MySentry — Panic Alarm Active</span>
                </div>
                {/* Info rows */}
                <div className="space-y-3">
                  {/* Location card */}
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <div>
                      <p className="font-semibold text-[#1a1a1a] text-sm">Live Location</p>
                      <p className="text-xs text-gray-500">Sharing with monitoring team</p>
                    </div>
                  </div>
                  {/* Battery */}
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                    <Battery className="w-4 h-4 text-yellow-500" />
                    <div>
                      <p className="font-semibold text-[#1a1a1a] text-sm">Battery Status</p>
                      <p className="text-xs text-gray-500">87% — Shared with team</p>
                    </div>
                  </div>
                  {/* Contacts */}
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                    <Users className="w-4 h-4 text-purple-500" />
                    <div>
                      <p className="font-semibold text-[#1a1a1a] text-sm">Emergency Contacts</p>
                      <p className="text-xs text-gray-500">3 contacts notified</p>
                    </div>
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
            {/* Headline — visual editor: ml-[268px] mr-[258px] (these are centering nudges; keep max-w-2xl mx-auto) */}
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] max-w-2xl mx-auto">
              A Complete Safety Solution for Home and Personal Protection
            </h2>
            {/* Subtext — visual editor: mt-[19px] pr-[41px] max-w-xl mx-auto */}
            <p className="text-gray-600 mt-[19px] max-w-xl mx-auto pr-[41px]">
              Ring supports home security. MySentry adds personal emergency response that goes with you.
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

      {/* ─── 3. HOW IT WORKS — removed per user request ─── */}

      {/* ─── 3b. BANNER SLIDER ─── */}
      <BannerSlider />

      {/* ─── 4. MORE THAN A CAMERA ALERT ─── */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">The Full Picture</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-4">
              More Than a Camera Alert
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              MySentry helps turn an emergency moment into a connected response.
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
          {/* Pricing note removed per visual editor intent */}
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
                Safety for the Whole Household
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The MySentry Family Plan supports up to 6 users under one subscription. Each member has their own Panic Alarm, emergency contacts, and safety profile.
              </p>
              <ul className="space-y-3 mb-8">
                {familyUses.map((use) => (
                  <li key={use} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{use}</span>
                  </li>
                ))}
              </ul>
              <PrimaryCTA />
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-3xl p-8 border border-primary/10">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Up to 6 users", icon: Users },
                  { label: "Shared Ring cameras", icon: Camera },
                  { label: "Individual alarms", icon: Shield },
                  { label: "Separate contacts", icon: Phone },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                    <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <p className="text-xs font-semibold text-[#1a1a1a]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. USE CASES — Humanistic persona cards ─── */}
      <section className="py-24 bg-[#f8faf8]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">When It Matters</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-4">
              Built for Real Situations
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              MySentry is designed for moments when you need more than a camera notification.
            </p>
          </div>

          {/* Row 1: Sarah — large feature card with phone mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#e8f5e9] to-[#d0f0da] rounded-3xl p-8 flex flex-col justify-between min-h-[340px] relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-5">
                  <Home className="w-3 h-3" /> At Home
                </span>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Sarah, 34 — Working from home</p>
                <h3 className="text-2xl font-heading font-bold text-[#1a1a1a] mb-3 leading-snug">
                  "I heard something downstairs. I didn't want to call 911 yet."
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                  Sarah triggered a silent Panic Alarm. Her Ring camera feed and live location were instantly shared with the monitoring team and her husband — without making a sound.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-semibold text-gray-700">Panic Alarm + Ring Camera Feed activated</span>
              </div>
            </motion.div>

            {/* Phone mockup card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#1a1a1a] rounded-3xl p-8 flex items-center justify-center min-h-[340px]"
            >
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/dJtzWYlEKDkYROHg.png"
                alt="MySentry Ring home screen showing Panic button and emergency contacts"
                className="h-[300px] w-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Row 2: Three smaller persona cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-4">
                <Car className="w-3 h-3" /> On the Road
              </span>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Marcus, 28 — Late-night commuter</p>
              <h3 className="font-bold text-[#1a1a1a] mb-2 leading-snug">His car was rear-ended on an empty road.</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Crash detection triggered automatically. His emergency contacts received his live location and audio feed within seconds.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-4">
                <Heart className="w-3 h-3" /> Family
              </span>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Linda, 71 — Living independently</p>
              <h3 className="font-bold text-[#1a1a1a] mb-2 leading-snug">She fell in the kitchen. No one was home.</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Fall detection activated her alarm. Her daughter and the monitoring team were notified with her location and battery status instantly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.19 }}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-flex items-center gap-1.5 bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-4">
                <Mic className="w-3 h-3" /> Voice Trigger
              </span>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">James, 42 — Caregiver</p>
              <h3 className="font-bold text-[#1a1a1a] mb-2 leading-snug">His hands were full. He couldn't reach his phone.</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                A voice command triggered the alarm. The monitoring team received his live audio feed and location without him touching his device.
              </p>
            </motion.div>
          </div>

          {/* Row 3: Wide card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-gradient-to-r from-primary/10 to-blue-50 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-8"
          >
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 bg-white text-primary text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-4 shadow-sm">
                <Watch className="w-3 h-3" /> Smartwatch
              </span>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Priya, 38 — Running solo at night</p>
              <h3 className="text-xl font-heading font-bold text-[#1a1a1a] mb-3 leading-snug">
                "I felt unsafe. I didn't want to stop running to reach my phone."
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-lg">
                A tap on her smartwatch triggered the Panic Alarm. Her emergency contacts received her live GPS location and audio feed — all while she kept moving.
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-md text-center w-36">
                <Watch className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs font-bold text-[#1a1a1a]">Smartwatch Trigger</p>
                <p className="text-[10px] text-gray-400 mt-0.5">One tap. Instant alarm.</p>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-md text-center w-36">
                <MapPin className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                <p className="text-xs font-bold text-[#1a1a1a]">Live Location</p>
                <p className="text-[10px] text-gray-400 mt-0.5">Shared with contacts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 8. FINAL CTA ─── */}
      {/* Visual editor: final backgroundColor was set to #6ad990 — applied as bg-[#6ad990] */}
      <section className="py-24 bg-[#6ad990] text-white">
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
