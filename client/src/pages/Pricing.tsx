import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your life. No hidden fees. Cancel anytime.
            </p>
            
            {/* Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={cn("text-sm font-medium", !isAnnual ? "text-primary" : "text-muted-foreground")}>Monthly</span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 rounded-full bg-primary/10 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <div className={cn(
                  "absolute top-1 left-1 w-6 h-6 rounded-full bg-primary transition-transform shadow-sm",
                  isAnnual ? "translate-x-8" : "translate-x-0"
                )} />
              </button>
              <span className={cn("text-sm font-medium", isAnnual ? "text-primary" : "text-muted-foreground")}>
                Yearly <span className="text-secondary text-xs font-bold ml-1">(2 Months Free)</span>
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="relative p-8 rounded-3xl border border-border bg-card hover:shadow-lg transition-shadow">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Basic Companion</h3>
                <p className="text-muted-foreground">Essential connection for peace of mind.</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-primary">$0</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <Button variant="outline" className="w-full h-12 rounded-full text-lg mb-8 border-primary/20 hover:bg-primary/5 hover:text-primary">
                Get Started Free
              </Button>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Basic Activity Tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">1 Emergency Contact</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Daily Check-in Notification</span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Professional Monitoring</span>
                </li>
                <li className="flex items-start gap-3 opacity-50">
                  <X className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Fall Detection</span>
                </li>
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="relative p-8 rounded-3xl border-2 border-primary bg-background shadow-2xl transform scale-105 z-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-md">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Safety & Health</h3>
                <p className="text-muted-foreground">Complete protection for you and your family.</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-bold text-primary">
                  ${isAnnual ? "9.99" : "12.99"}
                </span>
                <span className="text-muted-foreground">/mo</span>
                {isAnnual && <p className="text-sm text-secondary font-medium mt-2">Billed ${9.99 * 12} yearly</p>}
              </div>
              <Button size="lg" className="w-full h-12 rounded-full text-lg mb-8 shadow-lg shadow-primary/20">
                Start Free Trial
              </Button>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-secondary/20 text-secondary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium text-primary">24/7 Professional Monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-secondary/20 text-secondary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium text-primary">Automatic Fall Detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-secondary/20 text-secondary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium text-primary">Real-time Vitals & Health Trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-secondary/20 text-secondary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium text-primary">Unlimited Emergency Contacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-secondary/20 text-secondary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="font-medium text-primary">GPS Location Tracking</span>
                </li>
              </ul>
              
              {/* Family Add-on */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/5 rounded-lg text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Family Bundle</h4>
                    <p className="text-sm text-muted-foreground">Add up to 5 members</p>
                  </div>
                  <div className="ml-auto font-bold text-primary">
                    +${isAnnual ? "19.99" : "24.99"}/mo
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Protect the whole household. Includes all premium features for every member.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ / Trust */}
          <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">30-Day Guarantee</h3>
              <p className="text-muted-foreground text-sm">Try it risk-free. If you don't feel safer, get a full refund.</p>
            </div>
            <div className="p-6">
              <HelpCircle className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">No Contracts</h3>
              <p className="text-muted-foreground text-sm">We believe in earning your trust every month. Cancel anytime.</p>
            </div>
            <div className="p-6">
              <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-primary mb-2">Instant Setup</h3>
              <p className="text-muted-foreground text-sm">Devices arrive pre-paired. Just turn them on and you're protected.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
