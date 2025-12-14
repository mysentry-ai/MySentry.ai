import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldAlert, Activity, Car, HeartPulse, Video, Smartphone, Watch, Check } from "lucide-react";

export default function Features() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background text-center">
        <div className="container max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8">
            Intelligence That <br/>
            <span className="text-white/40">Saves Lives.</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            MySentry isn't just an app. It's a complex ecosystem of algorithms working silently in the background to detect emergencies the moment they happen.
          </p>
        </div>
      </section>

      {/* Feature 1: Panic Alarm */}
      <section className="py-24 border-t border-white/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent opacity-50" />
              <ShieldAlert className="h-32 w-32 text-red-500 relative z-10" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="text-red-500 font-mono text-sm tracking-widest uppercase">Component 01</div>
            <h2 className="text-4xl font-heading font-bold text-white">Panic Alarm</h2>
            <p className="text-lg text-white/60">
              Help is always one touch or voice command away. Whether you feel unsafe walking home or are experiencing a medical emergency, trigger the alarm instantly.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-white/80">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center"><Smartphone className="h-4 w-4" /></div>
                In-App Button (Phone & Watch)
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center"><Watch className="h-4 w-4" /></div>
                Voice Activation ("Help Me")
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center"><Video className="h-4 w-4" /></div>
                Instantly Opens Live Video
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature 2: Fall Detection */}
      <section className="py-24 border-t border-white/5 bg-white/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-orange-500 font-mono text-sm tracking-widest uppercase">Component 02</div>
            <h2 className="text-4xl font-heading font-bold text-white">Smart Fall Detection</h2>
            <p className="text-lg text-white/60">
              Leveraging the gyroscope and accelerometer in your Apple or Samsung Watch, MySentry distinguishes between a stumble, a workout, and a hard fall.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <h4 className="font-bold text-white mb-1">Auto-Trigger</h4>
                <p className="text-sm text-white/50">If no movement is detected after impact.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <h4 className="font-bold text-white mb-1">Countdown</h4>
                <p className="text-sm text-white/50">15-second buffer to cancel false alarms.</p>
              </div>
            </div>
          </div>
          <div>
            <div className="aspect-square rounded-3xl bg-black border border-white/10 flex items-center justify-center relative overflow-hidden">
               <Activity className="h-32 w-32 text-orange-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Crash Detection */}
      <section className="py-24 border-t border-white/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
              <Car className="h-32 w-32 text-blue-500" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="text-blue-500 font-mono text-sm tracking-widest uppercase">Component 03</div>
            <h2 className="text-4xl font-heading font-bold text-white">Crash Detection</h2>
            <p className="text-lg text-white/60">
              Driving alone? MySentry monitors speed differentials and G-force impact. If a crash is detected, we alert emergency services with your exact GPS coordinates immediately.
            </p>
            <p className="text-white/40 text-sm italic">
              *Works on both iOS and Android smartphones.
            </p>
          </div>
        </div>
      </section>

      {/* Feature 4: Real-Time Health */}
      <section className="py-24 border-t border-white/5 bg-white/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="text-pink-500 font-mono text-sm tracking-widest uppercase">Component 04</div>
            <h2 className="text-4xl font-heading font-bold text-white">Predictive Health Monitoring</h2>
            <p className="text-lg text-white/60">
              We don't just track vitals; we understand <strong>your</strong> norms. MySentry learns your baseline heart rate, oxygen levels, and HRV.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-start gap-3 text-white/80">
                <Check className="h-5 w-5 text-pink-500 mt-1" />
                <span><strong>High/Low Heart Rate:</strong> Alerts if your pulse spikes or drops dangerously while resting.</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Check className="h-5 w-5 text-pink-500 mt-1" />
                <span><strong>Oxygen Saturation:</strong> Monitors SpO2 levels for signs of respiratory distress.</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Check className="h-5 w-5 text-pink-500 mt-1" />
                <span><strong>Passive Alerting:</strong> If you become unresponsive due to a health event, we call for help automatically.</span>
              </li>
            </ul>
          </div>
          <div>
            <div className="aspect-square rounded-3xl bg-black border border-white/10 flex items-center justify-center relative overflow-hidden">
               <HeartPulse className="h-32 w-32 text-pink-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 5: 24/7 Monitoring */}
      <section className="py-24 border-t border-white/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
              <Video className="h-32 w-32 text-green-500" />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div className="text-green-500 font-mono text-sm tracking-widest uppercase">Component 05</div>
            <h2 className="text-4xl font-heading font-bold text-white">Live Video Response</h2>
            <p className="text-lg text-white/60">
              The game changer. When any alarm is triggered, MySentry automatically initiates a live video call.
            </p>
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 text-green-500 font-bold">1</div>
                <div>
                  <h4 className="text-white font-bold">Professional Agents</h4>
                  <p className="text-white/50 text-sm">Certified operators assess the scene visually and dispatch EMS.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 text-green-500 font-bold">2</div>
                <div>
                  <h4 className="text-white font-bold">5 Emergency Contacts</h4>
                  <p className="text-white/50 text-sm">Your family receives a link to join the live video stream instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold text-white mb-8">
            Ready to Upgrade Your Safety?
          </h2>
          <Link href="/pricing">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-black hover:bg-white/90 shadow-2xl hover:scale-105 transition-transform">
              Start 7-Day Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
