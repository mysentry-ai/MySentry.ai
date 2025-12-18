import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, AlertCircle, Activity, TrendingDown, Shield, Clock, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Seniors() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#e8f5e9] pt-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c8e6c9] border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              For Active Seniors
            </div>

            <h1 className="text-5xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6">
              Stay independent. Stay healthy. Stay safe.
            </h1>
            <p className="text-xl text-[#1a1a1a] mb-8 leading-relaxed">
              Your watch knows your body better than you do. It detects problems before you feel them. That's how MySentry keeps you living your life, not worrying about it.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 mt-16">
              <div className="fade-in-up">
                <div className="text-3xl font-bold text-primary">2 sec</div>
                <p className="text-sm text-[#1a1a1a]">Fall detection</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <p className="text-sm text-[#1a1a1a]">Health monitoring</p>
              </div>
              <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-3xl font-bold text-primary">12 sec</div>
                <p className="text-sm text-[#1a1a1a]">Agent response</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white rotate-2 hover:rotate-0 transition-all duration-500">
              <img 
                src="/images/senior-watch-happy.jpg" 
                alt="Active senior woman checking her smart watch" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-primary/10">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Activity className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a1a1a]">Vitals Normal</p>
                    <p className="text-xs text-gray-600">Heart Rate: 72 BPM • O2: 98%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* The Problem - Why Seniors Need This */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              The truth about aging.
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              Most health problems don't announce themselves. They whisper. Your watch listens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <AlertCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                Falls happen in seconds.
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                One moment you're fine. The next, you're on the ground. By then, it's too late. MySentry detects it before impact and calls for help immediately.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                Your heart tells the story.
              </h3>
              <p className="text-[#1a1a1a] leading-relaxed">
                Heart attacks, strokes, and arrhythmias don't always feel like emergencies. But your watch sees them coming. It knows your normal. It alerts when something changes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 1: Health Monitoring */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4">Feature 01</div>
                <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
                  Your watch knows your body better than you do.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  MySentry doesn't compare you to strangers. It learns YOUR baseline. Your normal heart rate. Your normal oxygen levels. Your normal temperature. Then it watches for changes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1a1a1a]">What MySentry monitors:</h3>
                <ul className="space-y-3">
                  {[
                    { title: "Resting Heart Rate", desc: "Detects irregular patterns that signal heart problems" },
                    { title: "Heart Rate Variability (HRV)", desc: "Measures your heart's ability to adapt—a sign of overall health" },
                    { title: "Blood Oxygen (SpO₂)", desc: "Alerts if oxygen levels drop, indicating respiratory distress" },
                    { title: "Respiratory Rate", desc: "Monitors breathing patterns for early signs of infection or distress" },
                    { title: "Wrist Temperature", desc: "Detects fever and inflammation before you feel sick" }
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#1a1a1a]">{item.title}:</strong>
                        <p className="text-[#1a1a1a] text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>Did you know?</strong> Most heart attacks are preceded by subtle changes in heart rate variability. Your watch catches them. Your doctor doesn't—not until it's too late.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift"
            >
              <Heart className="h-40 w-40 text-primary/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 2: Near-Fall Detection */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift order-2 lg:order-1"
            >
              <TrendingDown className="h-40 w-40 text-primary/30" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <div>
                <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4">Feature 02</div>
                <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
                  Stop a fall before it happens.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  Your watch detects the early signs of a fall—a sudden drop in heart rate, loss of balance, abnormal movement. It warns you immediately so you can catch yourself. If you can't, help is already on the way.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">1</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">Heart Rate Monitoring</h4>
                    <p className="text-[#1a1a1a] text-sm">Watches for sudden drops in heart rate while you walk—a key indicator of balance loss.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">Instant Alert</h4>
                    <p className="text-[#1a1a1a] text-sm">You get a warning on your watch to take precautions immediately.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">3</div>
                  <div>
                    <h4 className="text-[#1a1a1a] font-bold mb-1">Agent Notified</h4>
                    <p className="text-[#1a1a1a] text-sm">Our monitoring team is alerted so help is ready if you need it.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>Did you know?</strong> A 40-50% drop in heart rate while walking is one of the earliest signs of a fall. Your watch sees it. You can prevent it.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 3: Fall Detection */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4">Feature 03</div>
                <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
                  When you fall, we catch you.
                </h2>
                <p className="text-lg text-[#1a1a1a] leading-relaxed mb-6">
                  Even if you can't press a button. Even if you're unconscious. Your watch detects the fall in 2 seconds and connects you to an agent who sees exactly what's happening.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white border border-primary/10">
                  <h4 className="text-[#1a1a1a] font-bold mb-2">2 Second Detection</h4>
                  <p className="text-[#1a1a1a] text-sm">Faster than you can call for help.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-primary/10">
                  <h4 className="text-[#1a1a1a] font-bold mb-2">Automatic Video</h4>
                  <p className="text-[#1a1a1a] text-sm">Agent sees your location and situation in real time.</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-primary/10">
                  <h4 className="text-[#1a1a1a] font-bold mb-2">Immediate Dispatch</h4>
                  <p className="text-[#1a1a1a] text-sm">Emergency services are called with your exact location.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#c8e6c9] border border-primary/20">
                <p className="text-[#1a1a1a] italic">
                  <strong>Did you know?</strong> The first 3 minutes after a fall are critical. Lying on the ground for hours can cause serious complications. MySentry gets help there in minutes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center shadow-lg hover-lift"
            >
              <AlertCircle className="h-40 w-40 text-primary/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Seniors Choose MySentry */}
      <section className="py-32 bg-[#d4edda] border-t border-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              Independence with peace of mind.
            </h2>
            <p className="text-lg text-[#1a1a1a]">
              You don't want to be a burden. Your family doesn't want to worry. MySentry solves both problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Shield,
                title: "You stay independent",
                desc: "Live your life. Hike. Travel. Exercise. MySentry has your back."
              },
              {
                icon: Heart,
                title: "Your family stops worrying",
                desc: "They see you're safe. They get alerts if something changes. Everyone sleeps better."
              },
              {
                icon: Clock,
                title: "Help arrives in minutes",
                desc: "Not hours. Not days. Minutes. That's the difference between recovery and permanent damage."
              },
              {
                icon: Zap,
                title: "Works automatically",
                desc: "No buttons to remember. No apps to check. Just wear your watch and live your life."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-[#1a1a1a]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-6">
              Real seniors. Real stories.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Dorothy, 72",
                quote: "I fell in the kitchen. My watch called for help. Paramedics arrived in 4 minutes. My daughter says I probably saved my own life by using MySentry.",
                highlight: "Fall Detection"
              },
              {
                name: "Robert, 68",
                quote: "My watch detected an irregular heart rhythm I didn't even feel. Went to the doctor. Turns out I needed treatment. That early warning might have prevented a stroke.",
                highlight: "Health Monitoring"
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">★</span>
                  ))}
                </div>
                <p className="text-[#1a1a1a] mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <strong className="text-[#1a1a1a]">{testimonial.name}</strong>
                  <span className="text-xs font-bold text-primary bg-[#c8e6c9] px-3 py-1 rounded-full">{testimonial.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to live your life again?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            7-day free trial. No credit card. Cancel anytime.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-12 text-lg rounded-full bg-white text-primary hover:bg-white/90 font-bold shadow-xl">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
