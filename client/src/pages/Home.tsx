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
      quote: "Mom fell. Help arrived in 3 minutes. That's the difference between recovery and permanent damage.",
      avatar: "MC"
    },
    {
      name: "James Rodriguez",
      role: "Construction Manager",
      quote: "We went from hoping someone finds an injured worker to knowing instantly. That's peace of mind.",
      avatar: "JR"
    },
    {
      name: "Sarah Williams",
      role: "Active Senior",
      quote: "I can hike alone again. My family knows I'm safe. That's freedom."
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Zero Cognitive Load */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#e8f5e9] pt-16">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#d4edda] blur-[100px]" />
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
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight tracking-tight text-foreground fade-in-up">
              Get help fast in a safety or health emergency.
            </h1>
            
            <p className="text-xl text-foreground max-w-lg leading-relaxed fade-in-up" style={{animationDelay: '0.1s'}}>
              Your watch detects falls. Your phone detects crashes. Your heart rate triggers alerts. Agents see everything live and dispatch help immediately.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 fade-in-up" style={{animationDelay: '0.2s'}}>
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105 font-semibold shadow-lg hover:shadow-xl">
                  Start 7-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-primary/30 text-primary hover:bg-[#d4edda] hover:border-primary/50 hover-lift">
                  See How It Works
                </Button>
              </Link>
            </div>
            
            {/* Curiosity Sound Bite */}
            <div className="pt-8 p-4 rounded-2xl bg-[#d4edda] border border-primary/10 fade-in-up glow-effect" style={{animationDelay: '0.3s'}}>
              <p className="text-sm text-foreground italic">
                <strong className="text-primary">Did you know?</strong> Fall detection works in under 2 seconds. That's faster than you can press a button.
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
               <div className="relative w-[350px] h-[600px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-[3rem] border-8 border-primary/10 shadow-2xl overflow-hidden hover-lift">
                 <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white opacity-40 z-10"></div>
                 {/* UI Mockup */}
                 <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center space-y-6">
                    <div className="h-24 w-24 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                      <ShieldAlert className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">Fall Detected</h3>
                      <p className="text-foreground mt-2">Connecting to Agent...</p>
                    </div>
                    <div className="w-full bg-[#c8e6c9] rounded-xl p-4 flex items-center gap-4 border border-primary/20">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Video className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-foreground">Live Video Active</p>
                        <p className="text-xs text-foreground">Sharing location & vitals</p>
                      </div>
                    </div>
                 </div>
               </div>
               {/* Watch Mockup Floating */}
               <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-[200px] h-[200px] bg-[#e8f5e9] rounded-full border-4 border-primary/20 shadow-2xl z-30 flex items-center justify-center float-animation pulse-glow">
                  <div className="text-center">
                    <HeartPulse className="h-8 w-8 text-primary mx-auto mb-2 animate-pulse" />
                    <p className="text-3xl font-bold text-foreground">120</p>
                    <p className="text-xs text-foreground uppercase tracking-widest">BPM Alert</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem (Zero Cognitive Load) */}
      <section className="py-32 bg-[#d4edda] relative">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8">
              When seconds matter, you need help fast.
            </h2>
            <p className="text-xl text-foreground leading-relaxed">
              A fall. A crash. A heart attack. In emergencies, the first 5 minutes are critical. Most alert systems are too slow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Button Alerts Are Too Slow",
                desc: "You have to press a button. But what if you can't?",
                icon: ShieldAlert
              },
              {
                title: "Trackers Don't Know Your Health",
                desc: "Step counters don't save lives. Heart rate monitoring does.",
                icon: Activity
              },
              {
                title: "Text Alerts Aren't Enough",
                desc: "Agents need to see what's happening. Not guess.",
                icon: Video
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#e8f5e9] border border-primary/10 hover:border-primary/30 transition-all shadow-sm hover:shadow-md hover-lift fade-in-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <item.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution - 5 Core Components */}
      <section className="py-32 bg-[#e8f5e9] border-y border-primary/10">
        <div className="container">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Five ways MySentry saves lives.
            </h2>
            <p className="text-xl text-foreground max-w-2xl">
              Your watch and phone already have the sensors. MySentry just makes them work together.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                id: '01',
                title: 'Panic Alarm',
                desc: 'Say Help or tap a button. Agents answer instantly.',
                detail: 'Works even if your phone is out of reach.',
                curiosity: 'Voice activation works in 6 languages.'
              },
              {
                id: '02',
                title: 'Fall Detection',
                desc: 'Your watch knows when you fall. Calls for help automatically.',
                detail: 'Distinguishes between a stumble and a fall.',
                curiosity: 'Detects falls in under 2 seconds.'
              },
              {
                id: '03',
                title: 'Crash Detection',
                desc: 'Car crash? Your phone knows. Help is on the way.',
                detail: 'Alerts emergency services with your GPS location.',
                curiosity: 'Recognizes the unique impact of a car crash.'
              },
              {
                id: '04',
                title: 'Health Monitoring',
                desc: 'Your watch learns your normal. Alerts you if something is wrong.',
                detail: 'Monitors heart rate, oxygen, and stress 24/7.',
                curiosity: 'Understands YOUR baseline, not generic averages.'
              },
              {
                id: '05',
                title: '24/7 Live Agents',
                desc: 'Real people. Real video. Real help. Every time.',
                detail: 'We stay on the line until you are safe.',
                curiosity: 'Average response time: 12 seconds.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative p-8 md:p-12 rounded-3xl bg-[#e8f5e9] border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md hover-lift fade-in-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="absolute top-0 right-0 p-8 opacity-5 font-heading font-bold text-8xl text-primary group-hover:opacity-10 transition-opacity">
                  {feature.id}
                </div>
                <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <h3 className="text-3xl font-bold text-primary mb-2">{feature.title}</h3>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-lg text-foreground">{feature.desc}</p>
                  </div>
                  <div className="md:col-span-1">
                    <div className="space-y-2">
                      <p className="text-sm text-foreground font-mono border-l-2 border-primary/20 pl-4">
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
      <section className="py-32 bg-[#d4edda] relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Agents see the scene. Not just the alert.
              </h2>
              <p className="text-lg text-foreground mb-8">
                When you press the panic button, we don't just get a notification. We get a live video feed. We see exactly what's happening. We dispatch the right help.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Faster help.</strong> Agents see the situation and dispatch the right resources immediately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Better outcomes.</strong> Immediate medical intervention means fewer permanent injuries.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground"><strong>Peace of mind.</strong> Your family sees the same video. They know you're getting help.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-video rounded-3xl bg-[#c8e6c9] border-2 border-primary/20 overflow-hidden relative shadow-lg flex items-center justify-center">
                <Video className="h-24 w-24 text-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Real people. Real stories.
            </h2>
            <p className="text-xl text-foreground">
              This isn't a nice-to-have. This saves lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-[#d4edda] border border-primary/10 hover:border-primary/30 transition-all shadow-sm hover:shadow-md hover-lift fade-in-up" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Don't wait for an emergency to get help.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            7-day free trial. No credit card. Cancel anytime.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-12 text-lg rounded-full bg-[#e8f5e9] text-primary hover:bg-[#e8f5e9]/90 shadow-xl font-bold">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
