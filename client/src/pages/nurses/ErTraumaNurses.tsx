import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SectionHeading, BodyText, LabelText } from "@/components/ui/typography";
import HeroSection from "@/components/HeroSection";
import { Link } from "wouter";
import GetStartedSection from "@/components/GetStartedSection";
import { motion } from "framer-motion";
import { AlertCircle, Heart, Clock, MapPin, ArrowRight, Zap, Activity, Users, Car, Moon } from "lucide-react";

const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/CdUihnsjRgcMzrEo.jpg";
const LOGIN_URL = "https://dashboard.mysentry.ai/website-auth?redirect_url=login";

const problems = [
  { icon: AlertCircle, color: "bg-red-100 text-red-600", title: "1. Patient and visitor aggression.", body: "ER nurses experience higher rates of workplace violence than almost any other profession. When a situation escalates, you need a way to call for backup in seconds, not minutes." },
  { icon: Heart, color: "bg-blue-100 text-blue-600", title: "2. Fatigue and health strain on long shifts.", body: "Twelve-hour shifts with no breaks push your body hard. Abnormal heart rate or SpO2 readings can go unnoticed when you are focused entirely on your patients." },
  { icon: Car, color: "bg-purple-100 text-purple-600", title: "3. Parking lot and commute risks after night shifts.", body: "Walking to your car at 3am after a grueling shift, often in a large hospital parking structure, is a real safety risk that doesn't end when your shift does." }
];

const features = [
  { icon: Zap, title: "Discreet Panic Alarm", body: "Trigger a silent alarm from your phone or watch without alerting the person who is threatening you. Monitoring agents receive your location and live audio immediately." },
  { icon: Activity, title: "Fall Detection", body: "Your phone and watch detect sudden falls and trigger an alert if you don't respond within 30 seconds." },
  { icon: Heart, title: "Health Alerts", body: "Continuous monitoring of heart rate and SpO2 flags abnormal readings during long or high-stress shifts so you can act before a health issue escalates." },
  { icon: Users, title: "Emergency Contacts", body: "Up to five contacts receive real-time alerts with your location and live status whenever an alert is triggered." },
  { icon: Clock, title: "24/7 Monitoring", body: "Trained agents review every alert, verify the situation, and dispatch emergency services when needed, day or night." }
];

const steps = [
  { step: "1", title: "Alert is triggered", body: "You press the panic button silently, a fall is detected, or a health alert fires." },
  { step: "2", title: "Agents are notified instantly", body: "24/7 monitoring agents receive your GPS location, live video, and audio within seconds." },
  { step: "3", title: "Situation is assessed", body: "Agents verify the alert and attempt to reach you. If there is no response, they escalate immediately." },
  { step: "4", title: "Help is dispatched", body: "Emergency services are contacted with your exact location and situation details. Your emergency contacts are also notified." }
];

const faqs = [
  { q: "Can I trigger it silently?", a: "Yes. MySentry has a silent alarm mode that sends an alert to monitoring agents without making any sound on your phone or watch. This is designed for situations where triggering an audible alarm could escalate the situation." },
  { q: "Does it work on my watch?", a: "Yes. MySentry works on Apple Watch and Samsung Galaxy Watch. You can trigger a silent panic alarm directly from your wrist without touching your phone." },
  { q: "What about patient privacy?", a: "MySentry only activates video and audio when you trigger an alert or when a fall is detected. It does not record continuously. Patient information is never captured or stored by MySentry." },
  { q: "Does it monitor fatigue?", a: "MySentry monitors heart rate and SpO2 continuously. Abnormal readings that may indicate physical stress or fatigue trigger a notification to you. It is not a medical device and does not diagnose conditions." },
  { q: "What if I'm in a restricted area?", a: "MySentry uses GPS for location. In areas with limited GPS signal, such as deep inside a building, it uses cell tower triangulation as a fallback. Monitoring agents will still receive your last known location and can work with hospital security to locate you." },
  { q: "Is this covered by my employer?", a: "Some healthcare employers offer MySentry as part of their workplace safety program. Ask your HR or safety officer. If your employer does not cover it, individual plans start at $14.99 per month." }
];

export default function ErTraumaNurses() {
  return (
    <Layout>
      <SEO
        title="ER Nurse Safety App | Duress Alarm & Incident Monitoring | MySentry"
        description="MySentry gives ER and trauma nurses a discreet duress alarm, fall detection, and 24/7 monitoring for high-pressure shifts. Start free."
        canonical="https://mysentry.ai/nurses/er-trauma"
        schema={{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }}
      />
      <HeroSection label="ER and Trauma Nurse Safety" title={<>Safety for ER and Trauma Nurses<br /><span className="text-gray-600">When Every Second Counts</span></>} description="ER nurses face the highest rates of workplace violence in healthcare. MySentry gives you a discreet panic alarm, fall detection, and 24/7 monitoring so you can focus on your patients, not your own safety." imageSrc={HERO_IMAGE} imageAlt="ER nurse in hospital corridor" ctaText="Start Free Trial" ctaLink={LOGIN_URL} />

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is a duress alarm for nurses?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">A duress alarm for nurses is a discreet way to call for help when a patient or visitor becomes threatening, without making a sound that could escalate the situation. MySentry's silent panic alarm sends your GPS location and live audio to 24/7 monitoring agents the moment you press the button on your phone or watch, so backup is on the way before the situation gets worse.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {[{ label: "Silent alarm mode", value: "No audible sound" }, { label: "Response time", value: "Under 60 seconds" }, { label: "Monitoring", value: "24/7 professional agents" }].map((s, i) => (
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
            <SectionHeading>ER nursing demands everything you have.<br /><span className="text-muted-foreground">You deserve protection that matches that commitment.</span></SectionHeading>
            <BodyText className="text-xl">You run toward emergencies. You stay calm when everyone else is panicking. But you shouldn't have to handle your own safety alone.</BodyText>
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
            <LabelText className="text-primary">Every Shift, Every Unit</LabelText>
            <SectionHeading>What MySentry does for ER and trauma nurses</SectionHeading>
            <BodyText>Five tools that work together so you have a backup plan for every situation, from aggressive patients to post-shift commutes.</BodyText>
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
            {[{ label: "Panic Button App", href: "/features/panic-button-app" }, { label: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" }, { label: "Emergency Contacts", href: "/features/emergency-contacts" }, { label: "MeetSafe Check-Ins", href: "/features/meetsafe-check-ins" }, { label: "Health Monitoring", href: "/features/health-monitoring" }, { label: "All Nurse Safety", href: "/nurses" }, { label: "Pricing", href: "/pricing" }].map((l, i) => (
              <Link key={i} href={l.href}><span className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/5 transition-colors">{l.label} <ArrowRight className="h-3 w-3" /></span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-12"><LabelText className="text-primary">Common Questions</LabelText><SectionHeading>ER nurse safety app FAQ</SectionHeading></div>
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
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8 uppercase tracking-tight">You Handle the Emergencies. We Handle Your Safety.</h2>
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
