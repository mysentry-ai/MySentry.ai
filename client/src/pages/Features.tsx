import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, Activity, Car, HeartPulse, Video, Smartphone, Watch, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-white pt-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              How MySentry works.
            </h1>
            <p className="text-xl text-foreground mb-8">
              Six layers of protection. All working together. All the time.
            </p>
            <Link href="/pricing">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-semibold shadow-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Feature 1: Panic Alarm */}
      <section className="py-24 border-t border-primary/10 bg-primary/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
              <ShieldAlert className="h-32 w-32 text-primary" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 01</div>
            <h2 className="text-4xl font-heading font-bold text-foreground">Help with one word.</h2>
            <p className="text-lg text-foreground">
              Say Help or tap the button. An agent answers in seconds. No waiting. No confusion.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"><Smartphone className="h-4 w-4 text-primary" /></div>
                In-app button on phone and watch
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"><Watch className="h-4 w-4 text-primary" /></div>
                Voice activation (6 languages)
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"><Video className="h-4 w-4 text-primary" /></div>
                Instant live video connection
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground italic">
                <strong className="text-primary">Did you know?</strong> Voice activation works even when your phone is locked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Fall Detection */}
      <section className="py-24 border-t border-primary/10 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 02</div>
            <h2 className="text-4xl font-heading font-bold text-foreground">Your watch detects falls automatically.</h2>
            <p className="text-lg text-foreground">
              Hard fall? Your watch knows and calls for help. You don't have to do anything.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-bold text-foreground mb-1">2 Second Detection</h4>
                <p className="text-sm text-foreground">Faster than you can press a button.</p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-bold text-foreground mb-1">15 Second Countdown</h4>
                <p className="text-sm text-foreground">Cancel if it was a false alarm.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground italic">
                <strong className="text-primary">Did you know?</strong> Fall detection works at any angle—standing, sitting, or lying down.
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-3xl bg-primary/5 border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
               <Activity className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Crash Detection */}
      <section className="py-24 border-t border-primary/10 bg-primary/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
              <Car className="h-32 w-32 text-primary" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 03</div>
            <h2 className="text-4xl font-heading font-bold text-foreground">Car crash? We know immediately.</h2>
            <p className="text-lg text-foreground">
              Your phone detects the impact and sends your exact location to emergency services. No waiting. No confusion.
            </p>
            <ul className="space-y-3 pt-4">
              <li className="flex items-start gap-3 text-foreground">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Recognizes the unique impact of a car crash</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Sends GPS coordinates to 911</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>Alerts your emergency contacts</span>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground italic">
                <strong className="text-primary">Did you know?</strong> Distinguishes between a crash and a pothole. No false alarms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Real-Time Health */}
      <section className="py-24 border-t border-primary/10 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 04</div>
            <h2 className="text-4xl font-heading font-bold text-foreground">Your watch learns your normal.</h2>
            <p className="text-lg text-foreground">
              Not a generic average. YOUR baseline. If something is wrong, you know before it becomes an emergency.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3 text-foreground">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span><strong>Heart Rate:</strong> Alerts if your pulse spikes or drops dangerously.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span><strong>Oxygen Levels:</strong> Monitors SpO2 for signs of respiratory distress.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground">
                <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                <span><strong>Passive Alerting:</strong> Calls for help if you become unresponsive.</span>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground italic">
                <strong className="text-primary">Did you know?</strong> Your baseline is unique. We don't use generic thresholds.
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-3xl bg-primary/5 border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
               <HeartPulse className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: 24/7 Monitoring */}
      <section className="py-24 border-t border-primary/10 bg-primary/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg hover-lift">
              <Video className="h-32 w-32 text-primary" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6 fade-in-up">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 05</div>
            <h2 className="text-4xl font-heading font-bold text-foreground">Agents see what is happening.</h2>
            <p className="text-lg text-foreground">
              The game changer. Live video. Real agents. Real help. Every time.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">1</div>
                <div>
                  <h4 className="text-foreground font-bold">Agents See Everything</h4>
                  <p className="text-foreground text-sm">They assess the scene and dispatch the right help immediately.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                <div>
                  <h4 className="text-foreground font-bold">Your Family Sees Too</h4>
                  <p className="text-foreground text-sm">5 emergency contacts get a link to the live video instantly.</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground italic">
                <strong className="text-primary">Did you know?</strong> Average response time: 12 seconds from alert to agent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to be protected?
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
