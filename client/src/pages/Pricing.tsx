import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle, Shield, Zap, Users, Building2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <Layout>
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
              Safety for Everyone.
            </h1>
            <p className="text-xl text-white/60 mb-8">
              Start your 7-day free trial. No hardware to buy. Cancel anytime.
            </p>
            
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 p-1 bg-white/5 rounded-full inline-flex border border-white/10">
              <button 
                onClick={() => setIsAnnual(false)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  !isAnnual ? "bg-white text-black" : "text-white/60 hover:text-white"
                )}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2",
                  isAnnual ? "bg-white text-black" : "text-white/60 hover:text-white"
                )}
              >
                Yearly <span className="text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded-full">SAVE 20%</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Free Plan */}
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Basic</h3>
                <p className="text-white/60">Essential connection for peace of mind.</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">$0</span>
                <span className="text-white/60">/mo</span>
              </div>
              <Button variant="outline" className="w-full h-12 rounded-full text-lg mb-8 border-white/20 text-white hover:bg-white hover:text-black">
                Get Started
              </Button>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white/80">Basic Activity Tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white/80">1 Emergency Contact</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white/80">Daily Check-in Notification</span>
                </li>
                <li className="flex items-start gap-3 opacity-40">
                  <X className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white/80">Professional Monitoring</span>
                </li>
                <li className="flex items-start gap-3 opacity-40">
                  <X className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white/80">Fall & Crash Detection</span>
                </li>
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="relative p-8 rounded-3xl border-2 border-white bg-black shadow-[0_0_40px_rgba(255,255,255,0.1)] transform lg:-translate-y-4 flex flex-col z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Safety & Health</h3>
                <p className="text-white/60">Complete protection for you and your family.</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">
                  ${isAnnual ? "9.99" : "12.99"}
                </span>
                <span className="text-white/60">/mo</span>
                {isAnnual && <p className="text-sm text-green-400 font-medium mt-2">Billed ${9.99 * 12} yearly</p>}
              </div>
              <Button size="lg" className="w-full h-12 rounded-full text-lg mb-8 bg-white text-black hover:bg-white/90 font-bold">
                Start 7-Day Free Trial
              </Button>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-green-500/20 text-green-500">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium text-white">24/7 Professional Monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-green-500/20 text-green-500">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium text-white">Live Video Response</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-green-500/20 text-green-500">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium text-white">Fall & Crash Detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-green-500/20 text-green-500">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium text-white">Real-time Health Vitals</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-green-500/20 text-green-500">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium text-white">Unlimited Emergency Contacts</span>
                </li>
              </ul>
              
              {/* Family Add-on */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-lg text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Family Bundle</h4>
                    <p className="text-sm text-white/60">Add up to 4 members</p>
                  </div>
                  <div className="ml-auto font-bold text-white">
                    +$5<span className="text-xs font-normal text-white/60">/user/mo</span>
                  </div>
                </div>
                <p className="text-xs text-white/40">
                  Protect the whole household. Includes all premium features for every member.
                </p>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-white/60">For workforce safety and compliance.</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">Custom</span>
              </div>
              <Button variant="outline" className="w-full h-12 rounded-full text-lg mb-8 border-white/20 text-white hover:bg-white hover:text-black">
                Contact Sales
              </Button>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white/80">Centralized Manager Dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white/80">Incident Reporting & Analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white/80">API Integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white/80">Dedicated Account Manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white shrink-0 mt-0.5" />
                  <span className="text-white/80">Volume Discounts</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-24 grid md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-16">
            <div className="p-6">
              <Shield className="h-10 w-10 text-white mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">30-Day Money-Back</h3>
              <p className="text-white/60 text-sm">If you don't feel safer, we'll refund every penny. No questions asked.</p>
            </div>
            <div className="p-6">
              <HelpCircle className="h-10 w-10 text-white mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">No Contracts</h3>
              <p className="text-white/60 text-sm">We believe in earning your trust every month. Cancel anytime.</p>
            </div>
            <div className="p-6">
              <Zap className="h-10 w-10 text-white mx-auto mb-4" />
              <h3 className="font-bold text-white mb-2">Instant Setup</h3>
              <p className="text-white/60 text-sm">Download the app, pair your watch, and you're protected in minutes.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
