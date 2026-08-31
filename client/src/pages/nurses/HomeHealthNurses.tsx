import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { SectionHeading, BodyText, LabelText } from "@/components/ui/typography";
import HeroSection from "@/components/HeroSection";
import { Link } from "wouter";
import GetStartedSection from "@/components/GetStartedSection";
import { motion } from "framer-motion";
import { AlertCircle, Heart, Clock, MapPin, ArrowRight, Zap, Activity, Users, Home } from "lucide-react";

const HERO_IMAGE = "/images/cdn/brsrMeZqzKnRPjcC.jpg";
const LOGIN_URL = "https://dashboard.mysentry.ai/website-auth?redirect_url=login";

const problems = [
  { icon: Home, color: "bg-red-100 text-red-600", title: "1. Solo visits in unknown environments.", body: "You walk into homes you have never seen before, often without knowing what to expect inside. No security desk. No coworker down the hall. Just you and the patient." },
  { icon: AlertCircle, color: "bg-blue-100 text-blue-600", title: "2. No colleague nearby if something goes wrong.", body: "If a patient becomes agitated, if you fall, or if you feel unsafe, there is no one to call out to. The closest backup could be miles away." },
  { icon: MapPin, color: "bg-purple-100 text-purple-600", title: "3. Delayed help in residential areas.", body: "Emergency response times in residential neighborhoods can be significantly longer than at a hospital. Every minute matters when you are alone and something goes wrong." }
];

const features = [
  { icon: Clock, title: "MeetSafe Check-Ins", body: "Set a timer before each home visit. If you don't check in when the visit ends, your emergency contacts and monitoring agents are notified automatically." },
  { icon: Zap, title: "Panic Alarm", body: "One press on your phone or watch sends your GPS location and live video to 24/7 monitoring agents. No unlocking. No dialing." },
  { icon: Activity, title: "Fall Detection", body: "Your phone and watch detect sudden falls and trigger an alert if you don't respond within 30 seconds." },
  { icon: Users, title: "Emergency Contacts", body: "Up to five contacts receive real-time alerts with your location and live status whenever an alert is triggered." },
  { icon: Heart, title: "24/7 Monitoring", body: "Trained agents review every alert, verify the situation, and dispatch emergency services when needed, day or night." }
];

const steps = [
  { step: "1", title: "Alert is triggered", body: "You press the panic button, a fall is detected, or a check-in timer expires at the end of a visit." },
  { step: "2", title: "Agents are notified promptly", body: "24/7 monitoring agents receive your GPS location, live video, and audio within seconds." },
  { step: "3", title: "Situation is assessed", body: "Agents verify the alert and attempt to reach you. If there is no response, they escalate immediately." },
  { step: "4", title: "The alert is reviewed for possible escalation", body: "Emergency services are contacted with your exact location and situation details. Your emergency contacts are also notified." }
];

const faqs = [
  { q: "How do check-in timers work?", a: "Before a home visit, you set a timer for how long the visit should take. When the timer expires, MySentry sends you a check-in prompt. If you don't respond within a set window, your emergency contacts and monitoring agents are notified automatically." },
  { q: "What if I'm in a rural area?", a: "MySentry works wherever you have a cellular data connection. In areas with weak signal, alerts queue and send as soon as connectivity is restored. We recommend keeping the app open during visits in low-coverage areas." },
  { q: "Does it work without Wi-Fi?", a: "Yes. MySentry uses your phone's cellular data connection. Wi-Fi is not required." },
  { q: "Can my agency see my location?", a: "No. Your location is only shared with your chosen emergency contacts and with 24/7 monitoring agents when an alert is triggered. Your employer does not have access to your location data." },
  { q: "What if a patient becomes aggressive?", a: "Press the panic button on your phone or watch. The alarm can be triggered silently so it doesn't escalate the situation. Monitoring agents receive your location and live audio immediately and can contact emergency services when appropriate." },
  { q: "Is this the same as a lone worker device?", a: "MySentry provides lone worker protection through check-in timers, panic alarms, and 24/7 monitoring, similar to dedicated lone worker devices. It also adds health monitoring, crash detection, and emergency contact alerts, all in the phone and watch you already carry." }
];

export default function HomeHealthNurses() {
  return (
    <Layout>
      <SEO
        schema={{ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) }}
      />
      <HeroSection label="Home Health Nurse Safety" title={<>Safety for Home Health Nurses<br /><span className="text-gray-600">Working Alone</span></>} subtitle="Check-in timers, panic alarm, and real-time location sharing for nurses making solo home visits. If you don't check in on time, the alert is reviewed for possible escalation automatically." imageSrc={HERO_IMAGE} imageAlt="Home health nurse at patient's front door" ctaText="Review Plans and Eligibility" ctaLink={LOGIN_URL} />

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is a home health nurse safety device?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">A home health nurse safety device is a tool that gives nurses who work alone in patient homes a way to call for help, share their location, and check in automatically at the end of each visit. MySentry turns your phone and smartwatch into a full lone worker safety system with 24/7 professional monitoring, so you are never truly working without a backup plan.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {[{ label: "Check-in timers", value: "Automatic alerts" }, { label: "Response time", value: "Timing varies" }, { label: "Monitoring", value: "24/7 professional agents" }].map((s, i) => (
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
            <SectionHeading>Home health nursing is deeply rewarding.<br /><span className="text-muted-foreground">It is also one of the most isolated jobs in healthcare.</span></SectionHeading>
            <BodyText className="text-xl">You provide care in places where no one else is watching. That takes courage. It also takes a backup plan.</BodyText>
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
            <LabelText className="text-primary">Every Visit, Every Home</LabelText>
            <SectionHeading>What MySentry does for home health nurses</SectionHeading>
            <BodyText>Five tools that work together so you always have a backup plan, no matter whose door you knock on.</BodyText>
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
            <a href={LOGIN_URL}><Button className="bg-primary text-white hover:bg-primary/90 font-bold rounded-full px-8 h-12">Review Plans and Eligibility <ArrowRight className="ml-2 h-4 w-4" /></Button></a>
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
            {[{ label: "Panic Button App", href: "/features/panic-button-app" }, { label: "24/7 Professional Monitoring", href: "/features/24-7-professional-monitoring" }, { label: "Emergency Contacts", href: "/features/emergency-contacts" }, { label: "MeetSafe Check-Ins", href: "/features/safety-check-in-app" }, { label: "Health Monitoring", href: "/features/health-monitoring" }, { label: "All Nurse Safety", href: "/nurses" }, { label: "Pricing", href: "/pricing" }].map((l, i) => (
              <Link key={i} href={l.href}><span className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium hover:bg-primary/5 transition-colors">{l.label} <ArrowRight className="h-3 w-3" /></span></Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-12"><LabelText className="text-primary">Common Questions</LabelText><SectionHeading>Home health nurse safety FAQ</SectionHeading></div>
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
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8 uppercase tracking-tight">You Go In Alone. You Should Never Be Alone.</h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">Review current plans, eligibility, billing terms, and enrollment requirements.</p>
              <a href={LOGIN_URL}><Button className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-12 h-16 text-lg transition-all hover:scale-105 shadow-xl">Review Plans and Eligibility</Button></a>
              <p className="text-gray-400 text-sm mt-6">Secure checkout. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
