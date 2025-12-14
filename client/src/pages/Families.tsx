import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Video, Users, Bell, MapPin, Heart, CheckCircle2 } from "lucide-react";

export default function Families() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium uppercase tracking-wider">
              <Users className="h-3 w-3 text-blue-500 fill-current" />
              Family Care Circle
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              Be There. <br/>
              <span className="text-white/40">Instantly.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              When an emergency happens, a text message isn't enough. MySentry connects you to your loved one via <strong>Live Video</strong> the second an alarm is triggered.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-white/90 font-semibold">
                  Protect Your Family
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            {/* Video Call Simulation */}
            <div className="aspect-video rounded-3xl bg-black border-4 border-white/10 overflow-hidden relative shadow-2xl">
               <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                 <div className="text-center space-y-4">
                   <div className="h-20 w-20 rounded-full bg-white/10 mx-auto flex items-center justify-center animate-pulse">
                     <Video className="h-10 w-10 text-white" />
                   </div>
                   <p className="text-white/40">Connecting to Emergency Stream...</p>
                 </div>
               </div>
               {/* Overlay UI */}
               <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                 <div className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold text-white animate-pulse">
                   SOS ACTIVE
                 </div>
                 <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-2">
                   <MapPin className="h-3 w-3" />
                   123 Main St, Apt 4B
                 </div>
               </div>
               <div className="absolute bottom-4 left-4 right-4">
                 <div className="flex -space-x-2">
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="h-8 w-8 rounded-full border-2 border-black bg-gray-700" />
                   ))}
                   <div className="h-8 w-8 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                     +2
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem: The Information Gap */}
      <section className="py-24 bg-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              The "Missed Call" Panic
            </h2>
            <p className="text-lg text-white/60">
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
              <div key={idx} className="p-8 rounded-3xl bg-black border border-white/10">
                <item.icon className="h-10 w-10 text-white mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature: The Family Bundle */}
      <section className="py-24 border-t border-white/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-heading font-bold text-white">
              One Plan. <br/>
              Whole Family Protected.
            </h2>
            <p className="text-lg text-white/60">
              Safety isn't just for seniors. It's for your teenager driving for the first time, your spouse on a business trip, and you on your morning run.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span><strong>Crash Detection</strong> for new drivers.</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span><strong>Panic Button</strong> for college students walking home.</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span><strong>Health Monitoring</strong> for aging parents.</span>
              </li>
            </ul>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mt-6">
              <p className="text-white font-bold mb-2">Family Bundle Pricing</p>
              <p className="text-white/60 text-sm">
                Add up to 4 additional members for just <span className="text-white font-bold">$5/user/month</span>.
              </p>
            </div>
          </div>
          <div>
             <div className="grid grid-cols-2 gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                   <Users className="h-12 w-12 text-white/20" />
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold text-white mb-8">
            Peace of Mind is Priceless. <br/>
            <span className="text-white/40">(But we made it affordable).</span>
          </h2>
          <Link href="/pricing">
            <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-black hover:bg-white/90 shadow-2xl hover:scale-105 transition-transform">
              See Family Plans
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
