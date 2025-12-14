import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Watch, Heart, ShieldCheck, Battery, Smartphone, Check } from "lucide-react";

export default function Seniors() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
              <Heart className="h-3 w-3 fill-current" />
              Independence Matters
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight">
              Your Safety. Your Way.
            </h1>
            
            <p className="text-xl text-foreground/70 leading-relaxed">
              Forget the bulky, embarrassing "help" buttons. MySentry runs on the beautiful Apple or Samsung Watch you actually want to wear. Stay independent. Stay protected.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-semibold">
                  Start Free Trial
                </Button>
              </Link>
            </div>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-foreground/70 italic">
                <strong className="text-primary">Did you know?</strong> 80% of seniors say they'd wear a smartwatch, but only 20% would wear a medical alert pendant.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] bg-primary/5 border-2 border-primary/20 overflow-hidden relative shadow-lg">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground/10 z-10" />
               <div className="absolute bottom-8 left-8 right-8 z-20">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                     <Watch className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <p className="text-foreground font-bold">Apple Watch Series 9</p>
                     <p className="text-foreground/60 text-sm">Fully Compatible</p>
                   </div>
                 </div>
                 <p className="text-foreground/80 italic text-sm">"I love that it just looks like a normal watch. My grandkids don't even know it's keeping me safe."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem: Why Independence Matters */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              The Device You Wear <br/>
              <span className="text-primary">Is the One That Saves You</span>
            </h2>
            <p className="text-lg text-foreground/70">
              Traditional medical alerts end up in a drawer because they make you feel "old." Smart watches are modern, functional, and stylish—meaning you'll actually wear them 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "No Bulky Pendants",
                desc: "Replace the plastic necklace with a sleek device that tracks steps, calls grandkids, and saves your life.",
                icon: ShieldCheck
              },
              {
                title: "Automatic Charging",
                desc: "You already charge your phone and watch daily. It fits your routine, not the other way around.",
                icon: Battery
              },
              {
                title: "Works Everywhere",
                desc: "Not tethered to a home base station. You are protected at the grocery store, on a walk, or on vacation.",
                icon: Smartphone
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-primary/10 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
                <item.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight: Passive Monitoring */}
      <section className="py-24 border-t border-primary/10 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
               <h3 className="text-lg font-bold text-foreground mb-6">Automatic Alerts Triggered By:</h3>
               <ul className="space-y-4">
                 {[
                   { trigger: "Heart Rate drops below 40 BPM", icon: "❤️" },
                   { trigger: "Sudden impact detected (Fall)", icon: "⬇️" },
                   { trigger: "No movement for 1 hour (customizable)", icon: "⏱️" },
                   { trigger: "Oxygen levels drop below 90%", icon: "💨" }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-primary/10">
                     <div className="text-2xl">{item.icon}</div>
                     <span className="text-foreground font-mono text-sm">{item.trigger}</span>
                     <span className="ml-auto text-primary text-xs font-bold uppercase">Alert</span>
                   </div>
                 ))}
               </ul>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-heading font-bold text-foreground">
              It Speaks When You Can't.
            </h2>
            <p className="text-lg text-foreground/70">
              The scariest emergencies are the ones where you can't press a button. MySentry's passive monitoring watches your vitals and movement patterns constantly.
            </p>
            <p className="text-lg text-foreground/70">
              If something is wrong, we don't wait for you to ask for help. We call <strong>you</strong>. If you don't answer, we send the cavalry.
            </p>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 mt-6">
              <p className="text-sm text-foreground/70 italic">
                <strong className="text-primary">💡</strong> Your watch learns your normal heart rate and alerts if it spikes dangerously.
              </p>
            </div>
            <div className="pt-4">
              <Link href="/features">
                <Button variant="link" className="text-primary p-0 h-auto font-semibold hover:text-primary/80">
                  See how Fall Detection works &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8 text-center">
              Your Family Gets Peace of Mind Too
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-primary/10">
                <h3 className="font-bold text-foreground mb-3">Real-Time Status</h3>
                <p className="text-foreground/60 text-sm">
                  Your family can see you're active and safe without having to call and interrupt your day.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white border border-primary/10">
                <h3 className="font-bold text-foreground mb-3">Location History</h3>
                <p className="text-foreground/60 text-sm">
                  Know you made it home safely from the doctor's appointment without having to ask.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white border border-primary/10">
                <h3 className="font-bold text-foreground mb-3">Health Trends</h3>
                <p className="text-foreground/60 text-sm">
                  Spot declining health early. See if your resting heart rate is creeping up over weeks.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white border border-primary/10">
                <h3 className="font-bold text-foreground mb-3">Live Video Response</h3>
                <p className="text-foreground/60 text-sm">
                  If an emergency happens, your family joins a live video call with you and the agent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Independence is a Choice.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Choose the solution that respects your dignity and your freedom.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-primary hover:bg-white/90 shadow-xl font-bold">
              View Plans & Pricing
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
