import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Watch, Smartphone, Activity, HeartPulse, ShieldAlert, Video, CheckCircle2, Star } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const testimonials = [
    {
      name: "Margaret Chen",
      role: "Daughter of Senior",
      quote: "I sleep better knowing Mom's watch is watching her 24/7. When she fell last month, help arrived in minutes.",
      avatar: "MC"
    },
    {
      name: "James Rodriguez",
      role: "Construction Manager",
      quote: "Our incident reports dropped 40% in the first quarter. MySentry isn't just safety—it's peace of mind.",
      avatar: "JR"
    },
    {
      name: "Sarah Williams",
      role: "Active Senior",
      quote: "Finally, a safety system that doesn't make me feel old. It's just my watch."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - StoryBrand: The Hook */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Works with Apple & Samsung Watches
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight tracking-tight text-foreground">
              Get help fast in a safety or health emergency.
            </h1>
            
            <p className="text-xl text-foreground/70 max-w-lg leading-relaxed font-light">
              Your watch already knows your heart rate. Your phone already has your location. MySentry connects the dots—automatically alerting loved ones and professionals the moment something goes wrong.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 font-semibold">
                  Start 7-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50">
                  See How It Works
                </Button>
              </Link>
            </div>
            
            {/* Curiosity Sound Bite */}
            <div className="pt-8 p-4 rounded-2xl bg-primary/5 border border-primary/10">
              <p className="text-sm text-foreground/60 italic">
                <strong className="text-primary">Did you know?</strong> Fall detection algorithms can identify a hard fall in under 2 seconds—faster than you can press a button.
              </p>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[700px] w-full hidden lg:block"
          >
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="relative w-[350px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] border-8 border-primary/10 shadow-2xl overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white opacity-40 z-10"></div>
                 {/* UI Mockup */}
                 <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center space-y-6">
                    <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                      <ShieldAlert className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Fall Detected</h3>
                      <p className="text-foreground/60 mt-2">Connecting to Agent...</p>
                    </div>
                    <div className="w-full bg-primary/10 rounded-xl p-4 flex items-center gap-4 border border-primary/20">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Video className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-foreground">Live Video Active</p>
                        <p className="text-xs text-foreground/50">Sharing location & vitals</p>
                      </div>
                    </div>
                 </div>
               </div>
               {/* Watch Mockup Floating */}
               <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-[200px] h-[200px] bg-white rounded-full border-4 border-primary/20 shadow-2xl z-30 flex items-center justify-center">
                  <div className="text-center">
                    <HeartPulse className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold text-foreground">120</p>
                    <p className="text-xs text-foreground/50 uppercase tracking-widest">BPM Alert</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem (StoryBrand: Problem & Empathy) */}
      <section className="py-32 bg-primary/5 relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8">
              The Fear Nobody Talks About
            </h2>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Whether it's an aging parent living alone, a spouse with a health condition, or your own safety on a late-night run, the "what if" haunts you. You shouldn't have to choose between independence and safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Delayed Response",
                desc: "Traditional alarms require you to press a button. But what if you can't?",
                icon: ShieldAlert
              },
              {
                title: "Blind Spots",
                desc: "Most trackers only count steps. They don't know when your heart rate spikes dangerously.",
                icon: Activity
              },
              {
                title: "No Eyes on Scene",
                desc: "Text alerts aren't enough. In an emergency, help needs to see what's happening.",
                icon: Video
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-primary/10 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
                <item.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution (StoryBrand: Answer) - 5 Core Components */}
      <section className="py-32 bg-white border-y border-primary/10">
        <div className="container">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Five Layers of Protection. <br/>
              <span className="text-primary">One Seamless App.</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl">
              MySentry transforms the sensors in your watch and phone into a life-saving system that works 24/7.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                id: "01",
                title: "Panic Alarm",
                desc: "Triggered by voice, app, or watch button. Instant connection.",
                detail: "Works even if your phone is out of reach.",
                curiosity: "Voice activation works in 6 languages."
              },
              {
                id: "02",
                title: "Fall Detection",
                desc: "Smart watch sensors detect hard falls and auto-call for help.",
                detail: "Distinguishes between a stumble and a fall.",
                curiosity: "Detects falls from any angle in under 2 seconds."
              },
              {
                id: "03",
                title: "Crash Detection",
                desc: "Uses accelerometer data to detect vehicle collisions instantly.",
                detail: "Alerts emergency services with your GPS coordinates.",
                curiosity: "Recognizes the unique impact signature of a car crash."
              },
              {
                id: "04",
                title: "Real-Time Health",
                desc: "Learns your vitals norms. Triggers alarm if thresholds are breached.",
                detail: "Monitors heart rate, oxygen, and stress levels 24/7.",
                curiosity: "Understands your personal health baseline—not generic averages."
              },
              {
                id: "05",
                title: "24/7 Pro Monitoring",
                desc: "Live agents respond to every alert via video or voice.",
                detail: "We stay on the line until you are safe.",
                curiosity: "Average response time: 12 seconds from alert to agent."
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative p-8 md:p-12 rounded-3xl bg-white border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md">
                <div className="absolute top-0 right-0 p-8 opacity-5 font-heading font-bold text-8xl text-primary group-hover:opacity-10 transition-opacity">
                  {feature.id}
                </div>
                <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <h3 className="text-3xl font-bold text-primary mb-2">{feature.title}</h3>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-lg text-foreground/80">{feature.desc}</p>
                  </div>
                  <div className="md:col-span-1">
                    <div className="space-y-2">
                      <p className="text-sm text-foreground/60 font-mono border-l-2 border-primary/20 pl-4">
                        {feature.detail}
                      </p>
                      <p className="text-xs text-primary/70 font-mono border-l-2 border-primary/10 pl-4 italic">
                        💡 {feature.curiosity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Video Differentiator */}
      <section className="py-32 bg-primary/5 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl bg-white aspect-video flex items-center justify-center">
                {/* Placeholder for Video Call UI */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10">
                   <div className="absolute top-4 left-4 bg-primary px-3 py-1 rounded-full text-xs font-bold text-white">LIVE EMERGENCY</div>
                   <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white to-transparent">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/20 border-2 border-primary"></div>
                        <div>
                          <p className="text-foreground font-bold">Agent Sarah</p>
                          <p className="text-foreground/60 text-sm">Dispatching EMS to your location...</p>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                Eyes on the Scene. <br/>
                <span className="text-primary">Instantly.</span>
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed">
                When an alarm triggers, MySentry automatically initiates a <strong>Live Video Call</strong> to our 24/7 monitoring center and your 5 emergency contacts.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-foreground/80">Agents can see the situation and dispatch the right help.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-foreground/80">Family members can join the call immediately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-foreground/80">GPS location is shared in real-time.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Social Proof) */}
      <section className="py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Trusted by Families & Businesses
            </h2>
            <p className="text-xl text-foreground/70">
              Real people, real emergencies, real peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-foreground/60">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (StoryBrand: Change & End Result) */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
            Stop Worrying. <br/>
            Start Living.
          </h2>
          <p className="text-2xl text-white/80 mb-12 leading-relaxed">
            Equip yourself and your loved ones with the safety system that actually works when it matters most.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-primary hover:bg-white/90 shadow-2xl hover:scale-105 transition-transform font-bold">
              Start Your 7-Day Free Trial
            </Button>
          </Link>
          <p className="mt-6 text-sm text-white/60 font-medium">
            30-Day Money-Back Guarantee • Cancel Anytime • No Credit Card Required
          </p>
        </div>
      </section>
    </Layout>
  );
}
