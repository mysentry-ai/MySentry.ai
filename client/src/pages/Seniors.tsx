import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Watch, Heart, ShieldCheck, Battery, Smartphone, Check } from "lucide-react";

export default function Seniors() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium uppercase tracking-wider">
              <Heart className="h-3 w-3 text-red-500 fill-current" />
              Dignity First Design
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              Safety Without <br/>
              <span className="text-white/40">The Stigma.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Forget the bulky, embarrassing "help" buttons. MySentry runs on the beautiful Apple or Samsung Watch you actually <em>want</em> to wear.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-white/90 font-semibold">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] bg-white/5 border border-white/10 overflow-hidden relative">
               {/* Placeholder for Senior with Apple Watch */}
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
               <div className="absolute bottom-8 left-8 right-8 z-20">
                 <div className="flex items-center gap-4 mb-4">
                   <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                     <Watch className="h-6 w-6 text-white" />
                   </div>
                   <div>
                     <p className="text-white font-bold">Apple Watch Series 9</p>
                     <p className="text-white/60 text-sm">Fully Compatible</p>
                   </div>
                 </div>
                 <p className="text-white/80 italic">"I love that it just looks like a normal watch. No one knows I'm being monitored unless I need help."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem: Stigma & Compliance */}
      <section className="py-24 bg-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              The Device You Wear <br/>
              <span className="text-white/40">Is the One That Saves You.</span>
            </h2>
            <p className="text-lg text-white/60">
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
              <div key={idx} className="p-8 rounded-3xl bg-black border border-white/10">
                <item.icon className="h-10 w-10 text-white mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight: Passive Monitoring */}
      <section className="py-24 border-t border-white/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
               <ul className="space-y-6">
                 {[
                   "Heart Rate drops below 40 BPM",
                   "Sudden impact detected (Fall)",
                   "No movement for 1 hour (customizable)",
                   "Oxygen levels drop below 90%"
                 ].map((trigger, i) => (
                   <li key={i} className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                     <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                     <span className="text-white font-mono text-sm">{trigger}</span>
                     <span className="ml-auto text-red-500 text-xs font-bold uppercase">Alert</span>
                   </li>
                 ))}
               </ul>
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-4xl font-heading font-bold text-white">
              It Speaks When You Can't.
            </h2>
            <p className="text-lg text-white/60">
              The scariest emergencies are the ones where you can't press a button. MySentry's passive monitoring watches your vitals and movement patterns constantly.
            </p>
            <p className="text-lg text-white/60">
              If something is wrong, we don't wait for you to ask for help. We call <strong>you</strong>. If you don't answer, we send the cavalry.
            </p>
            <div className="pt-4">
              <Link href="/features">
                <Button variant="link" className="text-white p-0 h-auto font-semibold hover:text-white/80">
                  See how Fall Detection works &rarr;
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-white text-black">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Independence is a Choice.
          </h2>
          <p className="text-xl text-black/60 mb-8">
            Choose the solution that respects your dignity and your freedom.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-black text-white hover:bg-black/80 shadow-xl">
              View Plans & Pricing
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
