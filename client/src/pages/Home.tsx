import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Activity, HeartPulse, Users } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - StoryBrand: The Hook (Curiosity) */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-primary/5 blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-secondary/10 blur-[80px]" />
        </div>

        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-10 pb-20">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary-foreground text-sm font-semibold backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Zero Cognitive Load Safety
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-tight tracking-tight text-primary">
              Stop Worrying.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Start Living.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              The constant fear of "what if" is stealing your peace. MySentry is your Vital Companion that watches over your loved ones so you don't have to.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all hover:scale-105">
                  Get Peace of Mind
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/seniors">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 border-primary/10 hover:bg-primary/5 hover:border-primary/30 text-primary">
                  How It Works
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by 10,000+ families</p>
            </div>
          </motion.div>

          {/* Visual Content - Split Screen Concept */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full hidden lg:block"
          >
            {/* Main Image Card */}
            <div className="absolute top-0 right-0 w-[90%] h-[85%] rounded-3xl overflow-hidden shadow-2xl border border-white/20 z-10">
              <img 
                src="/images/hero-senior-monitoring.png" 
                alt="Senior Safety Monitoring" 
                className="w-full h-full object-cover"
              />
              {/* Overlay UI Element */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl flex items-center gap-4 animate-in slide-in-from-bottom-10 duration-1000 delay-500 fill-mode-forwards opacity-0">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Vitals Status</p>
                  <p className="text-lg font-bold text-primary">Normal • 72 BPM</p>
                </div>
                <div className="ml-auto">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                </div>
              </div>
            </div>
            
            {/* Floating Element - Fall Detection */}
            <div className="absolute bottom-10 left-0 w-[280px] glass-card p-5 rounded-2xl z-20 animate-bounce-slow">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-primary">Fall Detected</h3>
                  <p className="text-xs text-muted-foreground mt-1">Alert sent to emergency contacts in 0.5s</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem (StoryBrand: The Villain) */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              The World is Unpredictable. <br/>
              <span className="text-destructive">Your Safety Shouldn't Be.</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We all face the same silent enemy: <strong>Uncertainty</strong>. Whether it's an aging parent living alone, a lone worker in a factory, or your own health, the fear of the unknown creates a heavy cognitive load that drains your energy every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "For Families",
                problem: "Constant Worry",
                desc: "Is Mom okay? Did Dad take his meds? The anxiety of not knowing never truly leaves you.",
                link: "/families"
              },
              {
                icon: Shield,
                title: "For Seniors",
                problem: "Loss of Independence",
                desc: "The fear of falling or a medical emergency can turn a home into a prison.",
                link: "/seniors"
              },
              {
                icon: Activity,
                title: "For Employers",
                problem: "Hidden Risks",
                desc: "Workplace accidents and health incidents cost billions and destroy lives.",
                link: "/employers"
              }
            ].map((item, idx) => (
              <Link key={idx} href={item.link}>
                <div className="group relative bg-background border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <div className="mb-4 inline-block px-3 py-1 rounded-md bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wide">
                    Problem: {item.problem}
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {item.desc}
                  </p>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-2 transition-transform">
                    See the Solution <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution (StoryBrand: The Guide) */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
                <img src="/images/family-connection.png" alt="Family Connection" className="w-full" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
                We Are Your <span className="text-secondary">Vital Companion</span>.
              </h2>
              <p className="text-lg text-muted-foreground">
                MySentry isn't just a gadget; it's a promise. We understand the weight of responsibility you carry because we've carried it too. We've built the system that lifts that burden off your shoulders.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Real-Time Vitals Monitoring",
                    desc: "Heart rate, oxygen levels, and stress metrics tracked every second."
                  },
                  {
                    title: "Intelligent Fall Detection",
                    desc: "AI-powered sensors distinguish between a stumble and a fall instantly."
                  },
                  {
                    title: "Zero-Touch Connection",
                    desc: "No buttons to press. No apps to open. It just works."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Link href="/pricing">
                  <Button size="lg" className="rounded-full px-8">
                    Start Your Free Plan
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Plan (StoryBrand: The Plan) */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Safety in 3 Simple Steps
            </h2>
            <p className="text-lg text-primary-foreground/80">
              You don't need a manual to feel safe. We've made it effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                step: "01",
                title: "Choose Your Device",
                desc: "Select the wearable that fits your lifestyle—watch, pendant, or clip."
              },
              {
                step: "02",
                title: "Connect in Seconds",
                desc: "Turn it on. It automatically pairs with our secure global network."
              },
              {
                step: "03",
                title: "Live Fearlessly",
                desc: "Go about your day. We'll alert your circle only if something happens."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="text-6xl font-heading font-black text-white/10 absolute top-4 right-4 select-none">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10">{item.title}</h3>
                <p className="text-primary-foreground/70 relative z-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/pricing">
              <Button size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full shadow-xl hover:scale-105 transition-transform">
                Get Started Now
              </Button>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/60">
              30-day money-back guarantee. No questions asked.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
