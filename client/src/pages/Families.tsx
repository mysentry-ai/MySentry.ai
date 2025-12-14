import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Video, Users, Bell, MapPin, Heart, CheckCircle2 } from "lucide-react";

export default function Families() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">
              <Users className="h-3 w-3 fill-current" />
              Family Care Circle
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight">
              Be There When It Matters Most.
            </h1>
            
            <p className="text-xl text-foreground leading-relaxed">
              When an emergency happens, a text message isn't enough. MySentry connects you to your loved one via <strong>Live Video</strong> the second an alarm is triggered.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary text-white hover:bg-primary/90 font-semibold">
                  Protect Your Family
                </Button>
              </Link>
            </div>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-foreground italic">
                <strong className="text-primary">Did you know?</strong> In emergencies, family presence reduces patient anxiety by 40%.
              </p>
            </div>
          </div>
          <div className="relative">
            {/* Video Call Simulation */}
            <div className="aspect-video rounded-3xl bg-primary/5 border-4 border-primary/20 overflow-hidden relative shadow-lg">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                 <div className="text-center space-y-4">
                   <div className="h-20 w-20 rounded-full bg-primary/20 mx-auto flex items-center justify-center animate-pulse">
                     <Video className="h-10 w-10 text-primary" />
                   </div>
                   <p className="text-foreground text-sm">Connecting to Emergency Stream...</p>
                 </div>
               </div>
               {/* Overlay UI */}
               <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                 <div className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-white animate-pulse">
                   SOS ACTIVE
                 </div>
                 <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-foreground flex items-center gap-2">
                   <MapPin className="h-3 w-3" />
                   123 Main St, Apt 4B
                 </div>
               </div>
               <div className="absolute bottom-4 left-4 right-4 z-10">
                 <div className="flex -space-x-2">
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-primary/40" />
                   ))}
                   <div className="h-8 w-8 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                     +2
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem: The Information Gap */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
              The "Missed Call" Panic
            </h2>
            <p className="text-lg text-foreground">
              We've all felt it. Mom doesn't answer. Dad's phone goes to voicemail. Your mind races to the worst-case scenario.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-Time Status",
                desc: "Open the app and see 'Mom is Active' or 'Dad is Sleeping' instantly. No need to call and disturb them.",
                icon: Bell
              },
              {
                title: "Location History",
                desc: "Know they made it home safely from the doctor's appointment without having to ask.",
                icon: MapPin
              },
              {
                title: "Health Trends",
                desc: "Spot declining health early. See if their resting heart rate is creeping up over weeks.",
                icon: Heart
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-primary/10 hover:border-primary/30 transition-colors shadow-sm hover:shadow-md">
                <item.icon className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature: The Family Bundle */}
      <section className="py-24 border-t border-primary/10 bg-white">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold text-foreground">
              One Plan. <br/>
              <span className="text-primary">Whole Family Protected.</span>
            </h2>
            <p className="text-lg text-foreground">
              Safety isn't just for seniors. It's for your teenager driving for the first time, your spouse on a business trip, and you on your morning run.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span><strong>Crash Detection</strong> for new drivers.</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span><strong>Panic Button</strong> for college students walking home.</span>
              </li>
              <li className="flex items-center gap-3 text-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span><strong>Health Monitoring</strong> for aging parents.</span>
              </li>
            </ul>
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 mt-6">
              <p className="text-foreground font-bold mb-2">Family Bundle Pricing</p>
              <p className="text-foreground text-sm">
                Add up to 4 additional members for just <span className="text-primary font-bold">$5/user/month</span>.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-foreground italic">
                <strong className="text-primary">💡</strong> Each family member has their own privacy settings and emergency contacts.
              </p>
            </div>
          </div>
          <div>
             <div className="grid grid-cols-2 gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="aspect-square rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center hover:border-primary/30 transition-colors">
                   <Users className="h-12 w-12 text-primary/30" />
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Live Video Advantage */}
      <section className="py-24 bg-primary/5 border-t border-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-8">
              When Seconds Matter
            </h2>
            <p className="text-lg text-foreground mb-12">
              Live video response means your family can see what's happening and help coordinate the right response—faster than any text or phone call.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-primary/10">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-bold">1</div>
                <h3 className="font-bold text-foreground mb-2">Alarm Triggered</h3>
                <p className="text-sm text-foreground">Fall, crash, panic, or health alert detected.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-primary/10">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-bold">2</div>
                <h3 className="font-bold text-foreground mb-2">Live Video Starts</h3>
                <p className="text-sm text-foreground">Agent and family join instantly.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-primary/10">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary font-bold">3</div>
                <h3 className="font-bold text-foreground mb-2">Help Dispatched</h3>
                <p className="text-sm text-foreground">EMS or police sent to exact location.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Peace of Mind is Priceless.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            (But we made it affordable.)
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-primary hover:bg-white/90 shadow-xl font-bold">
              See Family Plans
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
