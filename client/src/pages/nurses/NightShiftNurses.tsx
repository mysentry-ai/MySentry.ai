import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SectionHeading, BodyText, LabelText } from "@/components/ui/typography";
import HeroSection from "@/components/HeroSection";
import { Link } from "wouter";
import GetStartedSection from "@/components/GetStartedSection";
import { motion } from "framer-motion";
import { AlertCircle, Heart, Clock, MapPin, ArrowRight, Zap, Activity, Users, Moon, Car } from "lucide-react";

const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/eAqkYaznpJbyFziv.jpg";
const LOGIN_URL = "https://dashboard.mysentry.ai/website-auth?redirect_url=login";

const problems = [
  { icon: Moon, color: "bg-indigo-100 text-indigo-600", title: "1. Empty parking lots and dark commutes.", body: "Leaving a hospital at 3am means walking through parking structures and streets that are mostly empty. The same route that feels normal at noon feels completely different at 3am." },
  { icon: Heart, color: "bg-red-100 text-red-600", title: "2. Fatigue and health strain from night shifts.", body: "Night shift nurses face higher rates of cardiovascular strain, sleep disruption, and fatigue-related health events. Your body is working against its natural rhythm every time you clock in." },
  { icon: Car, color: "bg-blue-100 text-blue-600", title: "3. Drowsy driving after long shifts.", body: "Driving home after a 12-hour night shift is one of the most dangerous parts of the job. If something goes wrong on the road, you need a system that notices and responds." }
];

const features = [
  { icon: Zap, title: "Panic Alarm", body: "One press on your phone or watch sends your GPS location and live video to 24/7 monitoring agents. No unlocking. No dialing." },
  { icon: Activity, title: "Crash Detection", body: "Your phone detects significant vehicle impacts and triggers an alert automatically if you don't respond within 30 seconds." },
  { icon: Heart, title: "Health Alerts", body: "Continuous monitoring of heart rate and SpO2 flags abnormal readings during and after long night shifts." },
  { icon: Clock, title: "MeetSafe Check-Ins", body: "Set a timer for your commute home. If you don't check in when you arrive, your emergency contacts and monitoring agents are notified automatically." },
  { icon: Users, title: "Emergency Contacts", body: "Up to five contacts receive real-time alerts with your location and live status whenever an alert is triggered." }
];

const steps = [
  { step: "1", title: "Alert is triggered", body: "You press the panic button, a crash is detected, or a check-in timer expires on your commute home." },
  { step: "2", title: "Agents are notified instantly", body: "24/7 monitoring agents receive your GPS location, live video, and audio within seconds." },
  { step: "3", title: "Situation is assessed", body: "Agents verify the alert and attempt to reach you. If there is no response, they escalate immediately." },
  { step: "4", title: "Help is dispatched", body: "Emergency services are contacted with your exact location and situation details. Your emergency contacts are also notified." }
];

const faqs = [
  { q: "Does crash detection work while driving home?", a: "Yes. MySentry's crash detection is active whenever your phone is with you. If it detects a significant impact consistent with a vehicle collision and you don't respond within 30 seconds, an alert is sent to 24/7 monitoring agents and your emergency contacts." },
  { q: "Can I use it for my commute home?", a: "Yes. You can set a MeetSafe check-in timer before you start driving. If you don't check in when you arrive home, your emergency contacts and monitoring agents are notified automatically." },
  { q: "Does it monitor fatigue?", a: "MySentry monitors heart rate and SpO2 continuously. Abnormal readings that may indicate physical stress or fatigue trigger a notification to you. It is not a medical device and does not diagnose conditions." },
  { q: "Does it work on Apple Watch?", a: "Yes. MySentry works on Apple Watch and Samsung Galaxy Watch. You can trigger a panic alarm directly from your wrist without touching your phone, which is useful when you are walking to your car." },
  { q: "What if I fall asleep at the wheel?", a: "MySentry does not detect drowsiness directly. However, if you are involved in a crash, crash detection triggers automatically. Setting a check-in timer for your drive home means that if you don't arrive within the expected time, an alert is sent." },
  { q: "Is there a family plan?", a: "Yes. MySentry's Family Plan covers up to five family members under one subscription. If your family wants to stay connected to your safety during night shifts, the Family Plan is the most cost-effective option." }
];

export default function NightShiftNurses() {
  return (
    <Layout>
      <SEO
        title="Night Shift Nurse Safety App | Crash Detection & 24/7 Monitoring | MySentry"
        description="MySentry protects night shift nurses during late-night commutes, parking lot walks, and post-shift drives home. Crash detection, panic alarm, and 24/7 monitoring. Start free."
        canonical="https://mysentry.ai/nurses/night-shift"
        schema={{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }}
      />
      <HeroSection label="Night Shift Nurse Safety" title={<>Safety for Night Shift Nurses<br /><span className="text-gray-600">Before, During, and After</span></>} description="The shift ends at 3am. The parking lot is empty. The drive home is long. MySentry gives you crash detection, a panic alarm, and 24/7 monitoring so the hardest part of your day doesn't become the most dangerous." imageSrc={HERO_IMAGE} imageAlt="Nurse walking to car in hospital parking lot at night" ctaText="Start Free Trial" ctaLink={LOGIN_URL} />

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What safety tools do night shift nurses need?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">Night shift nurses face safety risks that extend beyond the hospital walls. The walk to the car, the drive home after a 12-hour shift, and the fatigue that builds over a rotation all create real vulnerabilities. MySentry addresses all three with a panic alarm for the parking lot, crash detection for the drive home, and health monitoring for the shift itself, all connected to 24/7 professional monitoring agents.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {[{ label: "Crash detection", value: "Automatic alerts" }, { label: "Response time", value: "Under 60 seconds" }, { label: "Monitoring", value: "24/7 professional agents" }].map((s, i) => (
              <div key={i} className="bg-primary/5 rounded-xl px-5 py-3 text-center flex-1 min-w-[140px]">
                <div className="text-xl font-bold text-primary">{s.value}</div>
                <div className="text-xs text-gray-600 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <LabelText className="text-red-500">The Reality</LabelText>
            <SectionHeading>Night shift nursing takes a toll most people don't see.<br /><span className="text-muted-foreground">The risks don't stop when the shift ends.</span></SectionHeading>
            <BodyText className="text-xl">You give everything during your shift. The commute home shouldn't be the most dangerous part of your day.</BodyText>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problems.map((p, i) => { const Icon = p.icon; return (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${p.color}`}><Icon className="h-7 w-7" /></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 leading-relaxed">{p.body}</p>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#f8fafc]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <LabelText className="text-primary">Before, During, and After Every Shift</LabelText>
            <SectionHeading>What MySentry does for night shift nurses</SectionHeading>
            <BodyText>Five tools that cover the parking lot, the drive home, and the shift itself.</BodyText>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => { const Icon = f.icon; return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5"><Icon className="h-6 w-6 text-primary" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </motion.div>
            ); })}
          </div>
          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/nurses"><Button variant="outline" className="rounded-full px-8 h-12 font-semibold border-primary text-primary hover:bg-primary/5">All Nurse Safety Features</Button></Link>
            <a href={LOGIN_URL}><Button className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-12">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-16"><LabelText className="text-primary">Step by Step</LabelText><SectionHeading>What happens after you trigger an alert</SectionHeading></div>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex gap-6 items-start bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shrink-0">{s.step}</div>
                <div><h3 className="text-lg font-bold text-gray-900 mb-1">{s.title}</h3><p className="text-gray-600">{s.body}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc] border-y border-gray-100">
        <div className="container max-w-4xl">
          <h2 className="text-lg font-bold text-gray-900 mb-5 text-center">Explore related features</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[{ label: "Panic Button App", href: "/features/panic-button-app" }, { label: "Crash Detection", href: "/features/crash-detection" }, { label: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" }, { label: "Emergency Contacts", href: "/features/emergency-contacts" }, { label: "MeetSafe Check-Ins", href: "/features/meetsafe-check-ins" }, { label: "All Nurse Safety", href: "/nurses" }, { label: "Pricing", href: "/pricing" }].map((l, i) => (
              <Link key={i} href={l.href}><span className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/5 transition-colors">{l.label} <ArrowRight className="h-3 w-3" /></span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-12"><LabelText className="text-primary">Common Questions</LabelText><SectionHeading>Night shift nurse safety app FAQ</SectionHeading></div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GetStartedSection />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="bg-[#003d60] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"><div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary blur-[150px]" /></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8 uppercase tracking-tight">The Shift Ends. Your Safety Doesn't.</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">Start your 7-day free trial. No credit card required.</p>
              <a href={LOGIN_URL}><Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-12 h-16 text-lg transition-all hover:scale-105 shadow-xl">Start Free Trial</Button></a>
              <p className="text-gray-400 text-sm mt-6">Secure checkout. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
