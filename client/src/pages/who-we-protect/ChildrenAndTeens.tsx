import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import GetStartedSection from "@/components/GetStartedSection";
import { Link } from "wouter";
import { Shield, MapPin, Bell, Heart, Car, CheckCircle, ArrowRight, Clock } from "lucide-react";

const faqs = [
  {
    q: "Can parents track their child's location with MySentry?",
    a: "Yes. Emergency contacts on a child's MySentry account receive real-time GPS location alerts whenever an incident is detected, whether a fall, a crash, a panic alarm, or a missed check-in. MySentry is not a passive tracking app; it is an active safety system that alerts parents when something goes wrong.",
  },
  {
    q: "Does MySentry have teen driver safety features?",
    a: "Yes. MySentry's crash detection monitors GPS speed data and accelerometer impact patterns. If a teen is in a vehicle crash, MySentry automatically alerts parents and the 24/7 monitoring team with the teen's GPS location, without the teen needing to do anything.",
  },
  {
    q: "What age is MySentry designed for?",
    a: "MySentry is designed for teenagers and young adults who carry a smartphone. The app works on any iPhone (iOS 15+) or Android (10+) and pairs with Apple Watch (Series 4+) and Samsung Galaxy Watch (Watch 4+). Parents typically set up the account and add themselves as emergency contacts.",
  },
  {
    q: "How does MySentry differ from Find My or Life360 for teens?",
    a: "Find My and Life360 show location but do not respond to emergencies. MySentry adds a panic button, fall detection, crash detection, and a 24/7 professional monitoring team that takes action when an alert fires. Location sharing alone does not help if a teen cannot reach their phone.",
  },
  {
    q: "Can a teen trigger a silent panic alarm without drawing attention?",
    a: "Yes. The MySentry panic button can be triggered silently via a voice command or a discreet tap on an Apple Watch or Samsung Galaxy Watch. The alarm sends live video and GPS to the monitoring team and emergency contacts without making noise.",
  },
  {
    q: "How much does MySentry cost for a family with teens?",
    a: "The Family plan covers multiple family members at $30/month or $288/year. The Individual plan starts at $15/month. Both plans include a 7-day free trial. No hardware purchase is required.",
  },
];

const features = [
  {
    icon: <Car className="w-6 h-6 text-primary" />,
    title: "Crash Detection",
    desc: "Detects vehicle crashes automatically. Parents receive GPS location and an alert the moment a crash is detected. No action required from the teen.",
  },
  {
    icon: <Bell className="w-6 h-6 text-primary" />,
    title: "Panic Button",
    desc: "One tap or voice command sends a silent SOS with live video and GPS to the monitoring team and parents. Works on phone and smartwatch.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-primary" />,
    title: "Real-Time Location",
    desc: "Emergency contacts see live GPS location the moment an alert fires. No guessing, no delay.",
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Fall Detection",
    desc: "Automatic fall detection via phone and smartwatch. If a teen falls and cannot respond, MySentry alerts parents and the monitoring team within 2 minutes.",
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "MeetSafe Check-Ins",
    desc: "Set a safety timer before a sports practice, a social event, or a solo outing. If the teen does not check in, parents are alerted automatically.",
  },
  {
    icon: <Heart className="w-6 h-6 text-primary" />,
    title: "Health Monitoring",
    desc: "Tracks heart rate, HRV, and SpO2 via Apple Watch or Samsung Galaxy Watch. Alerts fire if readings fall outside safe ranges.",
  },
];

const comparisonRows = [
  { feature: "Panic button", mysentry: true, findMy: false, life360: false },
  { feature: "Crash detection", mysentry: true, findMy: false, life360: true },
  { feature: "Fall detection", mysentry: true, findMy: false, life360: false },
  { feature: "24/7 professional monitoring", mysentry: true, findMy: false, life360: false },
  { feature: "Live video to responders", mysentry: true, findMy: false, life360: false },
  { feature: "MeetSafe check-in timers", mysentry: true, findMy: false, life360: false },
  { feature: "Health monitoring (HRV, SpO2)", mysentry: true, findMy: false, life360: false },
  { feature: "Real-time GPS location alerts", mysentry: true, findMy: true, life360: true },
  { feature: "Works on existing iPhone/Android", mysentry: true, findMy: true, life360: true },
  { feature: "No extra hardware required", mysentry: true, findMy: true, life360: true },
];

export default function ChildrenAndTeens() {
  return (
    <Layout>
      <SEO
        title="Safety App for Children and Teens | MySentry"
        description="MySentry gives parents real peace of mind. Crash detection, panic button, fall detection, and 24/7 professional monitoring for teens, all on their existing iPhone or Android."
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

      {/* Hero */}
      <section className="min-h-[calc(100vh-80px)] flex items-center bg-gradient-to-b from-[#e8f5e9] to-white">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Children & Teens</span>
              <h1 className="text-4xl md:text-[55px] leading-tight font-heading font-bold text-[#1a1a1a] mb-3 uppercase tracking-tighter">
                Know Your Teen Is Always Safe.
              </h1>
              <p className="text-lg md:text-xl font-sans font-medium text-gray-600 mb-4 leading-snug">
                Real protection beyond simple location sharing.
              </p>
              <p className="text-base text-gray-500 mb-8 leading-relaxed max-w-lg">
                Crash detection, panic button, fall detection, and 24/7 professional monitoring for teens, all on their existing iPhone or Android.
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
            <div className="hidden lg:block">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663247484611/5pk35fzRuLVvrjtZdt4C3R/hero-children-teens-KQbz7EA8GrpxXTDszpKTfr.webp"
                alt="Teenager getting into car with parent watching from doorway, holding smartphone"
                className="rounded-3xl shadow-2xl w-full object-cover"
                loading="eager"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview — moved from hero */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            New drivers, late-night activities, solo walks home. Teens face real risks and location sharing alone is not enough. MySentry adds crash detection, a panic button, fall detection, and a 24/7 monitoring team to the phone your teen already carries.
          </p>
          <div className="bg-[#f0f9f4] border-l-4 border-primary rounded-xl p-5 shadow-sm">
            <p className="text-sm font-bold text-primary uppercase tracking-wider mb-1">Quick Answer</p>
            <p className="text-gray-700 leading-relaxed">
              MySentry is a safety app for teens that combines crash detection, a panic button, fall detection, real-time GPS location sharing, and 24/7 professional monitoring in one app. It works on any iPhone or Android and requires no extra hardware. Family plans start at $30/month with a 7-day free trial.
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
                Location Sharing Is Not the Same as Safety
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Knowing where your teen is does not help if they are in a crash and cannot call. It does not help if they are in a dangerous situation and cannot speak. It does not help if they fall and lose consciousness.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                MySentry goes beyond location. It detects the emergency automatically, alerts parents and a professional monitoring team, and streams live video and GPS, so help is on the way before anyone has to make a call.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "Car crashes are the leading cause of death for teens aged 15 to 19",
                  "Most teens do not call 911 because they are unsure if the situation is serious enough",
                  "Silent panic alarms let teens get help without escalating a dangerous situation",
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
                  { label: "First time driving alone", icon: "🚗" },
                  { label: "Walking home after school or sports", icon: "🏃" },
                  { label: "Late-night social events", icon: "🌙" },
                  { label: "Solo public transport", icon: "🚌" },
                  { label: "Outdoor activities without adults", icon: "🏕️" },
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
              Built for Teen Safety. Designed for Parental Peace of Mind.
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              MySentry works on the phone teens already carry. No lanyard. No separate device. No monthly hardware fee.
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

      {/* Setup */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1a1a1a] mb-4 uppercase tracking-tighter">
              Parents Set It Up. Teens Carry It Everywhere.
            </h2>
          </div>
          <div className="space-y-6">
            {[
              { step: "1", title: "Download the app on your teen's phone", desc: "Available on iOS (iPhone) and Android. Pairs with Apple Watch (Series 4+) and Samsung Galaxy Watch (Watch 4+) for wrist-based alerts." },
              { step: "2", title: "Add parents as emergency contacts", desc: "Up to 3 emergency contacts. Each receives SMS, push notification, and email alerts with live GPS location during an emergency." },
              { step: "3", title: "Choose a plan", desc: "Family plan from $30/month covers multiple family members. Individual plan from $15/month. 7-day free trial included." },
              { step: "4", title: "Crash detection and fall detection run automatically", desc: "No action needed from your teen. If a crash or fall is detected, MySentry alerts parents and the monitoring team immediately." },
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
              MySentry vs. Find My vs. Life360
            </h2>
            <p className="text-gray-600">Location sharing apps show where your teen is. MySentry responds when something goes wrong.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-4 font-bold text-[#1a1a1a]">Feature</th>
                  <th className="text-center p-4 font-bold text-primary">MySentry</th>
                  <th className="text-center p-4 font-bold text-gray-600">Find My</th>
                  <th className="text-center p-4 font-bold text-gray-600">Life360</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-gray-700">{row.feature}</td>
                    <td className="p-4 text-center">
                      {row.mysentry ? <span className="text-primary font-bold text-lg">✓</span> : <span className="text-gray-400 font-bold">✗</span>}
                    </td>
                    <td className="p-4 text-center">
                      {row.findMy ? <span className="text-green-600 font-bold text-lg">✓</span> : <span className="text-gray-400 font-bold">✗</span>}
                    </td>
                    <td className="p-4 text-center">
                      {row.life360 ? <span className="text-green-600 font-bold text-lg">✓</span> : <span className="text-gray-400 font-bold">✗</span>}
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
            Common Questions from Parents
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
              { title: "Crash Detection", href: "/features/crash-detection", desc: "Automatic vehicle crash alerts" },
              { title: "Panic Button App", href: "/features/panic-button-app", desc: "One-tap silent SOS with live video" },
              { title: "Family Safety", href: "/families", desc: "Whole-family protection plan" },
              { title: "Life360 vs MySentry", href: "/compare/life360-vs-mysentry", desc: "Full feature comparison" },
              { title: "Personal Safety App", href: "/personal-safety-app", desc: "The all-in-one safety app overview" },
              { title: "Pricing", href: "/pricing", desc: "Family plans from $30/month" },
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
