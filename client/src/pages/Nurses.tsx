import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SectionHeading, BodyText, LabelText } from "@/components/ui/typography";
import HeroSection from "@/components/HeroSection";
import { Link } from "wouter";
import GetStartedSection from "@/components/GetStartedSection";
import { motion } from "framer-motion";
import {
  Shield, AlertCircle, Heart, Clock, MapPin, Video,
  CheckCircle2, ArrowRight, Zap, Activity, Users, Phone,
  Stethoscope, Car, Moon, Building2
} from "lucide-react";

const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/UMhRglgqUKBlLDfM.jpg";
const LOGIN_URL = "https://dashboard.mysentry.ai/website-auth?redirect_url=login";

const nurseChallenges = [
  {
    icon: AlertCircle,
    color: "red",
    title: "1. Workplace violence is rising.",
    body: "Healthcare workers face more on-the-job assaults than any other profession. When a patient or visitor becomes aggressive, you need a way to call for backup in seconds, not minutes."
  },
  {
    icon: MapPin,
    color: "blue",
    title: "2. Lone visits leave you exposed.",
    body: "Home health and community nurses often work solo in unfamiliar homes with no colleague nearby. If something goes wrong, no one automatically knows where you are or what happened."
  },
  {
    icon: Heart,
    color: "purple",
    title: "3. Burnout hides serious health signals.",
    body: "Long shifts, irregular sleep, and chronic stress push your body hard. Abnormal heart rate or SpO2 readings can go unnoticed until they become a real problem."
  }
];

const features = [
  {
    icon: Zap,
    title: "Panic Alarm",
    body: "One press on your phone or watch sends a live alert with your GPS location and video to 24/7 professional monitoring. No unlocking. No dialing."
  },
  {
    icon: Clock,
    title: "MeetSafe Check-Ins",
    body: "Set a timer before a solo home visit. If you don't check in, your emergency contacts and monitoring agents are notified automatically."
  },
  {
    icon: Activity,
    title: "Fall and Crash Detection",
    body: "Your phone and watch detect sudden falls or impacts and trigger an alert if you don't respond within 30 seconds."
  },
  {
    icon: Heart,
    title: "Health Alerts",
    body: "Continuous monitoring of heart rate, HRV, and SpO2 flags abnormal readings so you can act before a health issue escalates."
  },
  {
    icon: Users,
    title: "Emergency Contacts",
    body: "Your chosen contacts get real-time alerts with your location and live video so they always know you are safe."
  },
  {
    icon: Video,
    title: "24/7 Professional Monitoring",
    body: "Trained agents review every alert, verify the situation, and dispatch emergency services when needed, day or night."
  }
];

const steps = [
  { step: "1", title: "Alert is triggered", body: "You press the panic button, a fall is detected, or a check-in timer expires." },
  { step: "2", title: "Agents are notified instantly", body: "24/7 monitoring agents receive your GPS location, live video, and audio within seconds." },
  { step: "3", title: "Situation is assessed", body: "Agents verify the alert and attempt to reach you. If there is no response, they escalate immediately." },
  { step: "4", title: "Help is dispatched", body: "Emergency services are contacted with your exact location and situation details. Your emergency contacts are also notified." }
];

const bestFor = [
  { icon: Car, label: "Home Health Nurses", link: "/nurses/home-health" },
  { icon: Building2, label: "Travel Nurses", link: "/nurses/travel-nurses" },
  { icon: Stethoscope, label: "ER and Trauma Nurses", link: "/nurses/er-trauma" },
  { icon: Moon, label: "Night Shift Nurses", link: "/nurses/night-shift" }
];

const faqs = [
  {
    q: "What happens when I press the panic button?",
    a: "Your GPS location, live video, and audio are sent to 24/7 monitoring agents within seconds. Agents assess the situation and dispatch emergency services if needed. Your emergency contacts are also notified."
  },
  {
    q: "Will my family get notified?",
    a: "Yes. You choose up to five emergency contacts. They receive real-time alerts with your location and a link to your live status whenever an alert is triggered."
  },
  {
    q: "Does this work on Apple Watch or Samsung Galaxy Watch?",
    a: "Yes. MySentry works on both Apple Watch and Samsung Galaxy Watch. You can trigger a panic alarm directly from your wrist without touching your phone."
  },
  {
    q: "What if I lose cell service during a home visit?",
    a: "MySentry works on cellular signal. No Wi-Fi is required. Even with a weak signal, the app sends a text alert with your GPS coordinates. Alerts queue and send as soon as signal is restored."
  },
  {
    q: "Is a safety app the same as a medical alert system?",
    a: "No. Medical alert systems are designed for fall detection in the home, typically for seniors. MySentry is a full safety and health monitoring platform built for active professionals, covering panic alarms, crash detection, health alerts, and 24/7 monitoring in any environment."
  },
  {
    q: "Does it protect me during my commute too?",
    a: "Yes. MySentry is active anywhere you have your phone or watch. The panic button, crash detection, and location sharing all work during your commute, in parking lots, and on public transit."
  },
  {
    q: "Can I use it during a shift without it draining my battery?",
    a: "MySentry is designed to run efficiently in the background. Battery usage depends on how often location is updated and whether video is active. Most users see 10 to 15 percent additional daily battery use."
  },
  {
    q: "Is my health data private?",
    a: "Yes. Your health data is encrypted and never shared with your employer or third parties. It is used only to generate alerts for you and your chosen emergency contacts."
  }
];

export default function Nurses() {
  return (
    <Layout>
      <SEO
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a }
          }))
        }}
      />

      <HeroSection
        label="Nurse Safety + Health Monitoring"
        title={<>Safety + Health Monitoring<br /><span className="text-gray-600">for Nurses, with Emergency Response</span></>}
        subtitle="One-press panic alarm, fall detection, health monitoring, and 24/7 professional response for nurses working alone, on night shifts, or in high-risk environments."
        imageSrc={HERO_IMAGE}
        imageAlt="Confident nurse in hospital corridor holding smartphone"
        ctaText="Start Free Trial"
        ctaLink={LOGIN_URL}
      />

      {/* AEO Direct Answer Block */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is a nurse safety app?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A nurse safety app is a mobile application that gives nurses a fast way to call for help, share their location, and monitor their own health during shifts. MySentry combines a one-press panic alarm, automatic fall detection, MeetSafe check-in timers, and continuous health monitoring into a single app that works on your phone and smartwatch.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { label: "Response time", value: "Under 60 seconds" },
              { label: "Monitoring", value: "24/7 professional agents" },
              { label: "Devices", value: "Phone + Apple Watch + Galaxy Watch" }
            ].map((stat, i) => (
              <div key={i} className="bg-primary/5 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why nurses need it */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <LabelText className="text-red-500">The Reality</LabelText>
            <SectionHeading>
              Nursing is one of the most<br />
              <span className="text-muted-foreground">physically demanding jobs on earth.</span>
            </SectionHeading>
            <BodyText className="text-xl">
              You care for others all day. But who is watching out for you when you are alone in a patient's home, walking to your car at 2am, or pushing through hour eleven of a twelve-hour shift?
            </BodyText>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {nurseChallenges.map((c, i) => {
              const Icon = c.icon;
              const colorMap: Record<string, string> = {
                red: "bg-red-100 text-red-600",
                blue: "bg-blue-100 text-blue-600",
                purple: "bg-purple-100 text-purple-600"
              };
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${colorMap[c.color]}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{c.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What MySentry does on every shift */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <LabelText className="text-primary">Every Shift, Every Setting</LabelText>
            <SectionHeading>What MySentry does for you on shift</SectionHeading>
            <BodyText>Six tools that work together so you are never without a backup plan.</BodyText>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/features">
              <Button variant="outline" className="rounded-full px-8 h-12 font-semibold border-primary text-primary hover:bg-primary/5">
                Explore All Features
              </Button>
            </Link>
            <a href={LOGIN_URL}>
              <Button className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-12">
                Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What happens after you trigger an alert */}
      <section className="py-32 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <LabelText className="text-primary">Step by Step</LabelText>
            <SectionHeading>What happens after you trigger an alert</SectionHeading>
            <BodyText>From the moment you press the button to the moment help arrives, here is exactly what happens.</BodyText>
          </div>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-6 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-600">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best for / Not ideal for */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Best for
              </h2>
              <div className="space-y-4">
                {bestFor.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <Link key={i} href={b.link} className="flex items-center gap-3 text-gray-700 hover:text-primary transition-colors group">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="font-medium">{b.label}</span>
                      <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="bg-amber-50 rounded-[2rem] p-8 border border-amber-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-500" /> Not ideal for
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3"><span className="text-amber-500 font-bold mt-0.5">•</span><span><strong>No cell signal:</strong> MySentry needs a cellular signal to send alerts. It does not work in areas with zero cell coverage, but Wi-Fi is never required.</span></li>
                <li className="flex gap-3"><span className="text-amber-500 font-bold mt-0.5">•</span><span><strong>Permissions not granted:</strong> Location and microphone access must be enabled for full functionality.</span></li>
                <li className="flex gap-3"><span className="text-amber-500 font-bold mt-0.5">•</span><span><strong>Battery below 10%:</strong> Keep your phone charged during shifts for reliable protection.</span></li>
                <li className="flex gap-3"><span className="text-amber-500 font-bold mt-0.5">•</span><span><strong>Medical diagnosis or treatment:</strong> MySentry monitors wellness signals. It is not a medical device and does not diagnose conditions.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links to related pages */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container max-w-4xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Explore related features</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Panic Button App", href: "/features/panic-button-app" },
              { label: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" },
              { label: "Emergency Contacts", href: "/features/emergency-contacts" },
              { label: "Crash Detection", href: "/features/crash-detection" },
              { label: "Health Monitoring", href: "/features/health-monitoring" },
              { label: "MeetSafe Check-Ins", href: "/features/meetsafe-check-ins" },
              { label: "Pricing", href: "/pricing" }
            ].map((l, i) => (
              <Link key={i} href={l.href}>
                <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/5 transition-colors">
                  {l.label} <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#f8fafc]">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <LabelText className="text-primary">Common Questions</LabelText>
            <SectionHeading>Nurse safety app FAQ</SectionHeading>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
              >
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GetStartedSection />

      {/* Trust / Disclaimer */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container max-w-3xl text-center">
          <p className="text-sm text-gray-500 leading-relaxed">
            MySentry is a personal safety and wellness monitoring tool. It is not a medical device, does not provide medical advice, and is not a substitute for emergency services. Always call 911 in a life-threatening emergency.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-[#003d60] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
              <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary blur-[150px]" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 uppercase tracking-tight">
                You Protect Others.<br />We Protect You.
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Start your 7-day free trial. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={LOGIN_URL}>
                  <Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-12 h-16 text-lg transition-all hover:scale-105 shadow-xl">
                    Start Free Trial
                  </Button>
                </a>
                <Link href="/employers">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold uppercase tracking-wider rounded-full px-12 h-16 text-lg">
                    For Nursing Teams
                  </Button>
                </Link>
              </div>
              <p className="text-gray-400 text-sm mt-6">Secure checkout. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
