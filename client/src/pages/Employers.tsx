import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { HardHat, Truck, Factory, Building2, AlertTriangle, TrendingDown, ShieldCheck } from "lucide-react";

export default function Employers() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs font-medium uppercase tracking-wider">
              <Building2 className="h-3 w-3 text-yellow-500 fill-current" />
              Enterprise Safety Solution
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
              Protect Your <br/>
              <span className="text-white/40">Most Valuable Asset.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Workplace injuries cost billions. MySentry turns the smartwatches your employees already own into a proactive safety net that prevents accidents before they happen.
            </p>
            <div className="flex gap-4 pt-4">
              <Link href="/pricing">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-white/90 font-semibold">
                  View Enterprise Plans
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
               {/* Dashboard Mockup */}
               <div className="absolute inset-0 p-8 grid grid-cols-2 gap-4 opacity-50">
                 <div className="bg-white/5 rounded-xl"></div>
                 <div className="bg-white/5 rounded-xl"></div>
                 <div className="bg-white/5 rounded-xl col-span-2"></div>
               </div>
               <div className="relative z-10 text-center">
                 <ShieldCheck className="h-20 w-20 text-yellow-500 mx-auto mb-4" />
                 <h3 className="text-2xl font-bold text-white">Zero Incidents</h3>
                 <p className="text-white/60">Current Status: Safe</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-24 bg-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Tailored for High-Risk Environments
            </h2>
            <p className="text-lg text-white/60">
              Every industry has unique dangers. MySentry adapts to yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: "Manufacturing",
                challenge: "The Challenge: Heat Stress & Fatigue",
                solution: "MySentry monitors heart rate variability and body temperature trends to predict exhaustion before an accident occurs."
              },
              {
                icon: HardHat,
                title: "Construction",
                challenge: "The Challenge: Falls from Height",
                solution: "Our military-grade fall detection instantly alerts site supervisors with exact GPS coordinates of the incident."
              },
              {
                icon: Truck,
                title: "Logistics",
                challenge: "The Challenge: Driver Drowsiness",
                solution: "Biometric monitoring detects signs of sleep onset and alerts the driver to pull over immediately."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-black border border-white/10 hover:border-white/30 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <p className="text-sm font-bold text-red-400">{item.challenge}</p>
                </div>
                <p className="text-white/60 leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The ROI (Business Challenge) */}
      <section className="py-24 border-t border-white/5">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-heading font-bold text-white">
              Safety is an Investment, <br/>
              <span className="text-white/40">Not an Expense.</span>
            </h2>
            <p className="text-lg text-white/60">
              The cost of a single workplace injury goes far beyond medical bills. It impacts morale, productivity, and insurance premiums.
            </p>
            <div className="grid gap-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-white font-medium">Avg. Cost of Injury</span>
                <span className="text-red-500 font-bold">$42,000</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-white font-medium">MySentry Annual Cost</span>
                <span className="text-green-500 font-bold">$120/user</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/40 text-sm">
              <TrendingDown className="h-4 w-4" />
              <span>Reduce insurance premiums by up to 15%</span>
            </div>
          </div>
          <div className="relative">
             <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
               <h3 className="text-xl font-bold text-white mb-6">Manager Dashboard</h3>
               <div className="space-y-4">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-black/40 border border-white/5">
                     <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 text-xs font-bold">OK</div>
                     <div>
                       <p className="text-white text-sm font-bold">Team Alpha</p>
                       <p className="text-white/40 text-xs">All vitals normal</p>
                     </div>
                     <div className="ml-auto text-white/40 text-xs">12 Active</div>
                   </div>
                 ))}
                 <div className="flex items-center gap-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                     <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xs font-bold">!</div>
                     <div>
                       <p className="text-white text-sm font-bold">Team Bravo</p>
                       <p className="text-red-400 text-xs">1 High Heart Rate Alert</p>
                     </div>
                     <div className="ml-auto">
                       <Button size="sm" variant="destructive" className="h-7 text-xs">View</Button>
                     </div>
                   </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-white text-black">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Secure Your Workforce.
          </h2>
          <p className="text-xl text-black/60 mb-8">
            Schedule a demo to see how MySentry integrates with your existing safety protocols.
          </p>
          <Link href="/pricing">
            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-black text-white hover:bg-black/80 shadow-xl">
              See Enterprise Pricing
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
