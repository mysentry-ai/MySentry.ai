import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import GetStartedSection from "@/components/GetStartedSection";
import { Link } from "wouter";
import { Shield, MapPin, Bell, Heart, Phone, CheckCircle, ArrowRight, BookOpen, Users, Clock } from "lucide-react";

const faqs = [
  {
    q: "Is MySentry good for college students living alone?",
    a: "Yes. MySentry is designed for exactly this situation. A student living alone can set up emergency contacts (parents, roommates, friends), enable fall detection, and use the panic button if they feel unsafe walking back to their dorm or apartment at night. The 24/7 monitoring team receives live video and GPS location the moment an alert is triggered.",
  },
  {
    q: "Does MySentry work without a parent nearby?",
    a: "MySentry works anywhere with a cellular or Wi-Fi signal. Emergency contacts receive real-time GPS location, SMS alerts, and push notifications the moment an incident is detected. Parents do not need to be nearby — they are notified instantly no matter where they are.",
  },
  {
    q: "Can students use MySentry on an iPhone or Android?",
    a: "Yes. MySentry is available on both iOS (iPhone) and Android. It also works with Apple Watch (Series 4 and later) and Samsung Galaxy Watch (Watch 4 and later) for wrist-based fall detection and panic alerts.",
  },
  {
    q: "What happens if a student is in a car accident?",
    a: "MySentry's crash detection monitors GPS speed data and accelerometer impact patterns. If a crash is detected, MySentry automatically alerts emergency contacts and the 24/7 monitoring team with the student's GPS location.",
  },
  {
    q: "How much does MySentry cost for a student?",
    a: "The Individual plan starts at $15/month or $144/year (saving two months). There is a 7-day free trial with no charge if cancelled within the trial period. No additional hardware is required beyond a smartphone.",
  },
  {
    q: "Can a student add their parents as emergency contacts?",
    a: "Yes. Students can add up to three emergency contacts — parents, siblings, friends, or a resident advisor. Each contact receives SMS, push notification, and email alerts with real-time GPS location during an emergency.",
  },
];

const features = [
  {
    icon: <Bell className="w-6 h-6 text-primary" />,
    title: "Panic Button",
    desc: "One tap or voice command sends a silent SOS with live video and GPS to the monitoring team and emergency contacts.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Real-Time Location",
    desc: "Parents and emergency contacts see live GPS location the moment an alert fires — no guessing, no delay.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Fall Detection",
    desc: "Automatic fall detection via phone and smartwatch. If a student falls and cannot respond, MySentry alerts the monitoring team within 2 minutes.",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "MeetSafe Check-Ins",
    desc: "Set a safety timer before a late-night walk, a rideshare, or a first date. If the student does not check in, contacts are alerted automatically.",
  },
  {
    icon: <Heart className="w-6 h-6 text-primary" />,
    title: "Health Monitoring",
    desc: "Tracks heart rate, HRV, and SpO2 via Apple Watch or Samsung Galaxy Watch. Alerts fire if readings fall outside safe ranges.",
  },
  {
    icon: <Phone className="w-6 h-6 text-primary" />,
    title: "Crash Detection",
    desc: "Detects vehicle crashes automatically. Sends GPS location and an alert to emergency contacts and the monitoring team without the student needing to act.",
  },
];

const comparisonRows = [
  { feature: "Panic button", mysentry: true, findMy: false, lifeAlert: false },
  { feature: "Fall detection", mysentry: true, findMy: false, lifeAlert: true },
  { feature: "24/7 professional monitoring", mysentry: true, findMy: false, lifeAlert: true },
  { feature: "Live video to responders", mysentry: true, findMy: false, lifeAlert: false },
  { feature: "Crash detection", mysentry: true, findMy: false, lifeAlert: false },
  { feature: "MeetSafe check-in timers", mysentry: true, findMy: false, lifeAlert: false },
  { feature: "Health monitoring (HRV, SpO2)", mysentry: true, findMy: false, lifeAlert: false },
  { feature: "Works on existing iPhone/Android", mysentry: true, findMy: true, lifeAlert: false },
  { feature: "No extra hardware required", mysentry: true, findMy: true, lifeAlert: false },
  { feature: "Plans from $15/month", mysentry: true, findMy: "Free", lifeAlert: false },
];

export default function Students() {
  return (
    <Layout>
      <SEO
        title="Safety App for Students | MySentry"
        description="MySentry keeps college students safe on and off campus. Panic button, fall detection, crash detection, and 24/7 professional monitoring — all on their existing iPhone or Android."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        }}
      />

      {/* Hero — title + subtitle + CTAs only */}
      <section className="min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-br from-[#e8f5e9] via-white to-[#f0fdf4]">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Students</span>
            <h1 className="text-4xl md:text-[55px] leading-tight font-heading font-bold text-[#1a1a1a] mb-3 uppercase tracking-tighter">
              Navigate Campus Life Safely.
            </h1>
            <p className="text-xl text-primary font-semibold mb-8">
              Your safety net, wherever you go.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing">
                <button className="bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2">
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/how-it-works">
                <button className="border-2 border-primary text-primary font-bold px-8 py-4 rounded-full hover:bg-primary/5 transition-all">
                  See How It Works
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview — moved from hero */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Late-night walks, rideshares alone, living off campus for the first time. MySentry gives students a panic button, fall detection, crash detection, and a 24/7 monitoring team, all on the phone they already carry.
          </p>
          <div className="bg-[#f0f9f4] border-l-4 border-primary rounded-xl p-5 shadow-sm">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Quick Answer</p>
            <p className="text-gray-700 leading-relaxed">
              MySentry is a personal safety app for students that combines a panic button, fall detection, crash detection, real-time GPS location sharing, and 24/7 professional monitoring in one app. It works on any iPhone or Android and requires no extra hardware. Plans start at $15/month with a 7-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-6 uppercase tracking-tighter">
                Campus Safety Is Not Enough
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Campus security covers the quad. It does not cover the walk home at midnight, the rideshare back from a party, or the apartment a student rents three blocks off campus. Most safety incidents happen in the gaps that campus systems cannot reach.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Parents worry. Students want independence. MySentry bridges that gap — giving students a discreet safety net they control, and giving parents real-time visibility when it matters most.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "1 in 5 college women experience sexual assault during their time at university",
                  "Car crashes are the leading cause of death for people aged 16 to 24",
                  "Most students do not call 911 because they are unsure if the situation is serious enough",
                ].map((stat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#e8f5e9] to-[#f0fdf4] rounded-3xl p-8">
              <div className="space-y-4">
                {[
                  { label: "Walking alone at night", icon: "🌙" },
                  { label: "Rideshares and late-night transport", icon: "🚗" },
                  { label: "Living off campus for the first time", icon: "🏠" },
                  { label: "Studying or working late alone", icon: "📚" },
                  { label: "Attending social events", icon: "🎓" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 flex items-center gap-4 shadow-sm">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-[#1a1a1a]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-4 uppercase tracking-tighter">
              Every Safety Feature Students Need
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MySentry works on the phone students already carry. No lanyard. No separate device. No monthly hardware fee.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[#1a1a1a] text-lg mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Students */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-4 uppercase tracking-tighter">
              Set Up in Under 5 Minutes
            </h2>
          </div>
          <div className="space-y-6">
            {[
              { step: "1", title: "Download the app", desc: "Available on iOS and Android. Pairs with Apple Watch (Series 4+) and Samsung Galaxy Watch (Watch 4+) for wrist-based alerts." },
              { step: "2", title: "Add emergency contacts", desc: "Add up to 3 contacts — parents, siblings, a roommate, or a trusted friend. They receive SMS, push notification, and email alerts with live GPS location." },
              { step: "3", title: "Choose a plan", desc: "Individual plan from $15/month. 7-day free trial included. No hardware to buy, no contract to sign." },
              { step: "4", title: "Go anywhere with confidence", desc: "Fall detection and health monitoring run in the background. Panic button is one tap away. MeetSafe timers keep contacts informed on late-night outings." },
            ].map((s, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] text-lg mb-1">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-4 uppercase tracking-tighter">
              MySentry vs. Other Options
            </h2>
            <p className="text-gray-600">How MySentry compares to Find My Friends and traditional medical alert devices for students.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-[#1a1a1a]">Feature</th>
                  <th className="text-center p-4 font-bold text-primary">MySentry</th>
                  <th className="text-center p-4 font-bold text-gray-600">Find My / Life360</th>
                  <th className="text-center p-4 font-bold text-gray-600">Medical Alert Device</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.mysentry === true ? <span className="text-primary font-bold text-lg">✓</span> : <span className="text-gray-400 font-bold">✗</span>}
                    </td>
                    <td className="p-4 text-center">
                      {row.findMy === true ? <span className="text-green-600 font-bold text-lg">✓</span> : row.findMy === "Free" ? <span className="text-gray-600 text-sm font-medium">Free</span> : <span className="text-gray-400 font-bold">✗</span>}
                    </td>
                    <td className="p-4 text-center">
                      {row.lifeAlert === true ? <span className="text-green-600 font-bold text-lg">✓</span> : <span className="text-gray-400 font-bold">✗</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-[#1a1a1a] mb-10 uppercase tracking-tighter text-center">
            Common Questions from Students and Parents
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-100 pb-6">
                <h3 className="font-bold text-[#1a1a1a] mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-[#1a1a1a] mb-8 uppercase tracking-tighter text-center">Related Pages</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Panic Button App", href: "/features/panic-button-app", desc: "One-tap silent SOS with live video" },
              { title: "MeetSafe Check-Ins", href: "/features/meetsafe-check-ins", desc: "Safety timers for solo outings" },
              { title: "Crash Detection", href: "/features/crash-detection", desc: "Automatic vehicle crash alerts" },
              { title: "Safety App for Women", href: "/females", desc: "Personal safety for women on the go" },
              { title: "Personal Safety App", href: "/personal-safety-app", desc: "The all-in-one safety app overview" },
              { title: "Pricing", href: "/pricing", desc: "Plans from $15/month" },
            ].map((link, i) => (
              <Link key={i} href={link.href}>
                <div className="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-md transition-all cursor-pointer">
                  <p className="font-bold text-primary text-sm mb-1 flex items-center gap-1">{link.title} <ArrowRight className="w-3 h-3" /></p>
                  <p className="text-gray-500 text-xs">{link.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GetStartedSection />
    </Layout>
  );
}
