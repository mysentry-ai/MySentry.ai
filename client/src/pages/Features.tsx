import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, Activity, Car, HeartPulse, Video, Smartphone, Watch, Check } from "lucide-react";

export default function Features() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-white text-center">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-8">
            How MySentry Keeps You Safe
          </h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Five intelligent systems working silently in the background to detect emergencies the moment they happen.
          </p>
        </div>
      </section>

      {/* Feature 1: Panic Alarm */}
      <section className="py-24 border-t border-primary/10 bg-primary/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg">
              <ShieldAlert className="h-32 w-32 text-primary" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 01</div>
            <h2 className="text-4xl font-heading font-bold text-foreground">Help Is One Touch Away</h2>
            <p className="text-lg text-foreground/70">
              Whether you feel unsafe or are experiencing a medical emergency, trigger the alarm instantly. No fumbling. No delays.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"><Smartphone className="h-4 w-4 text-primary" /></div>
                In-App Button (Phone & Watch)
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"><Watch className="h-4 w-4 text-primary" /></div>
                Voice Activation ("Help Me")
              </li>
              <li className="flex items-center gap-3 text-foreground/80">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"><Video className="h-4 w-4 text-primary" /></div>
                Instantly Opens Live Video
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground/70 italic">
                <strong className="text-primary">Did you know?</strong> Voice activation works even when your phone is locked or in your pocket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Fall Detection */}
      <section className="py-24 border-t border-primary/10 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 02</div>
            <h2 className="text-4xl font-heading font-bold text-foreground">Detects Falls Before You Can Call</h2>
            <p className="text-lg text-foreground/70">
              Your watch knows the difference between a stumble and a dangerous fall. When it detects a hard impact, it automatically calls for help.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-bold text-foreground mb-1">Auto-Trigger</h4>
                <p className="text-sm text-foreground/60">If no movement detected after impact.</p>
              </div>
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h4 className="font-bold text-foreground mb-1">Countdown</h4>
                <p className="text-sm text-foreground/60">15-second buffer to cancel false alarms.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground/70 italic">
                <strong className="text-primary">💡</strong> Fall detection works at any angle—standing, sitting, or lying down.
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-3xl bg-primary/5 border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg">
               <Activity className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Crash Detection */}
      <section className="py-24 border-t border-primary/10 bg-primary/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg">
              <Car className="h-32 w-32 text-primary" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 03</div>
            <h2 className="text-4xl font-heading font-bold text-foreground">Knows When You've Been in a Crash</h2>
            <p className="text-lg text-foreground/70">
              Driving alone? MySentry monitors speed differentials and G-force impact. If a crash is detected, we alert emergency services with your exact GPS coordinates immediately.
            </p>
            <p className="text-foreground/60 text-sm italic">
              *Works on both iOS and Android smartphones.
            </p>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground/70 italic">
                <strong className="text-primary">💡</strong> Distinguishes between a car crash and a pothole—no false alarms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: Real-Time Health */}
      <section className="py-24 border-t border-primary/10 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 04</div>
            <h2 className="text-4xl font-heading font-bold text-foreground">Your Watch Understands Your Body</h2>
            <p className="text-lg text-foreground/70">
              We don't just track vitals; we understand <strong>your</strong> norms. MySentry learns your baseline heart rate, oxygen levels, and HRV.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3 text-foreground/80">
                <Check className="h-5 w-5 text-primary mt-1" />
                <span><strong>High/Low Heart Rate:</strong> Alerts if your pulse spikes or drops dangerously while resting.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <Check className="h-5 w-5 text-primary mt-1" />
                <span><strong>Oxygen Saturation:</strong> Monitors SpO2 levels for signs of respiratory distress.</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/80">
                <Check className="h-5 w-5 text-primary mt-1" />
                <span><strong>Passive Alerting:</strong> If you become unresponsive due to a health event, we call for help automatically.</span>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground/70 italic">
                <strong className="text-primary">💡</strong> Your baseline is unique—we don't use generic thresholds.
              </p>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-3xl bg-primary/5 border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg">
               <HeartPulse className="h-32 w-32 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: 24/7 Monitoring */}
      <section className="py-24 border-t border-primary/10 bg-primary/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-white border-2 border-primary/20 flex items-center justify-center relative overflow-hidden shadow-lg">
              <Video className="h-32 w-32 text-primary" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="text-primary font-mono text-sm tracking-widest uppercase font-bold">Feature 05</div>
            <h2 className="text-4xl font-heading font-bold text-foreground">Live Agents See What's Happening</h2>
            <p className="text-lg text-foreground/70">
              The game changer. When any alarm is triggered, MySentry automatically initiates a live video call to our 24/7 monitoring center.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">1</div>
                <div>
                  <h4 className="text-foreground font-bold">Professional Agents</h4>
                  <p className="text-foreground/60 text-sm">Certified operators assess the scene visually and dispatch EMS.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                <div>
                  <h4 className="text-foreground font-bold">5 Emergency Contacts</h4>
                  <p className="text-foreground/60 text-sm">Your family receives a link to join the live video stream instantly.</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground/70 italic">
                <strong className="text-primary">💡</strong> Average response time: 12 seconds from alert to agent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-8">
            Ready to Upgrade Your Safety?
          </h2>
          <Link href="/pricing">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-primary text-white hover:bg-primary/90 shadow-lg hover:scale-105 transition-transform font-bold">
              Start 7-Day Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
