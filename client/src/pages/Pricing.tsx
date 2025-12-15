import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, X, Shield, Zap, Users, Building2, Heart, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const monthlyPrices = {
    free: 0,
    individual: 9.99,
    family: 19.99,
    enterprise: null
  };

  const annualPrices = {
    free: 0,
    individual: isAnnual ? 99.99 : 119.88,
    family: isAnnual ? 199.99 : 239.88,
    enterprise: null
  };

  const plans = [
    {
      id: "free",
      name: "Free",
      tagline: "Basic Safety",
      price: monthlyPrices.free,
      annualPrice: annualPrices.free,
      description: "Get started with essential safety features.",
      cta: "Start Free",
      highlighted: false,
      features: [
        { name: "Panic Alarm (Voice & Button)", included: true },
        { name: "Fall Detection", included: false },
        { name: "Crash Detection", included: false },
        { name: "Health Monitoring", included: false },
        { name: "24/7 Professional Monitoring", included: false },
        { name: "Live Video Response", included: false },
        { name: "5 Emergency Contacts", included: true },
        { name: "Location Sharing", included: true }
      ]
    },
    {
      id: "individual",
      name: "Safety & Health",
      tagline: "Complete Protection",
      price: monthlyPrices.individual,
      annualPrice: annualPrices.individual,
      description: "Full protection with all safety and health features.",
      cta: "Start Free Trial",
      highlighted: true,
      badge: "Most Popular",
      features: [
        { name: "Panic Alarm (Voice, Button, Watch)", included: true },
        { name: "Fall Detection", included: true },
        { name: "Crash Detection", included: true },
        { name: "Real-Time Health Monitoring", included: true },
        { name: "24/7 Professional Monitoring", included: true },
        { name: "Live Video Response", included: true },
        { name: "5 Emergency Contacts", included: true },
        { name: "Location Sharing & History", included: true },
        { name: "Health Trends & Alerts", included: true }
      ]
    },
    {
      id: "family",
      name: "Family Bundle",
      tagline: "Protect Everyone",
      price: monthlyPrices.family,
      annualPrice: annualPrices.family,
      description: "Up to 4 members. Add more for $5/user/month.",
      cta: "Start Free Trial",
      highlighted: false,
      features: [
        { name: "All Safety & Health Features", included: true },
        { name: "Up to 4 Family Members", included: true },
        { name: "Additional Members ($5/user/month)", included: true },
        { name: "Shared Emergency Contacts", included: true },
        { name: "Family Dashboard", included: true },
        { name: "Individual Health Profiles", included: true },
        { name: "Privacy Controls per Member", included: true },
        { name: "24/7 Professional Monitoring", included: true }
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise",
      tagline: "Workplace Safety",
      price: null,
      annualPrice: null,
      description: "Custom solutions for teams and organizations.",
      cta: "Request Demo",
      highlighted: false,
      features: [
        { name: "All Safety & Health Features", included: true },
        { name: "Unlimited Team Members", included: true },
        { name: "Team Management Dashboard", included: true },
        { name: "Custom Health Thresholds", included: true },
        { name: "Compliance Reporting (OSHA, HIPAA)", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "API Integration", included: true },
        { name: "Custom SLA & Support", included: true }
      ]
    }
  ];

  return (
    <Layout>
      {/* Pricing Cards */}
      <section className="py-24 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6">
              Safety and Health Monitoring for Everyone within Every Budget
            </h1>           <p className="text-xl text-foreground mb-8">
              7-day free trial. No credit card required. 30-day money-back guarantee.
            </p>
            
            {/* Toggle */}
            <div className="flex items-center justify-center gap-2 p-1 bg-[#c8e6c9] rounded-full inline-flex border border-primary/20">
              <button 
                onClick={() => setIsAnnual(false)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  !isAnnual ? "bg-primary text-white" : "text-foreground hover:text-foreground"
                )}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2",
                  isAnnual ? "bg-primary text-white" : "text-foreground hover:text-foreground"
                )}
              >
                Yearly <span className="text-[10px] bg-secondary text-white px-2 py-0.5 rounded-full font-bold">SAVE 2 MONTHS</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={cn(
                  "relative rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col",
                  plan.highlighted 
                    ? "border-primary/50 bg-[#d4edda] shadow-lg scale-105 lg:scale-100" 
                    : "border-primary/10 bg-[#e8f5e9] hover:border-primary/30 shadow-sm hover:shadow-md"
                )}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}

                {/* Header */}
                <div className="p-8 border-b border-primary/10">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-foreground mb-6">{plan.tagline}</p>
                  
                  {plan.price !== null ? (
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-primary">${isAnnual ? (plan.annualPrice / 12).toFixed(2) : plan.price}</span>
                        <span className="text-foreground">/month</span>
                      </div>
                      {isAnnual && (
                        <p className="text-xs text-foreground mt-2">
                          Billed ${plan.annualPrice} annually
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-primary">Custom Pricing</p>
                      <p className="text-xs text-foreground mt-2">Contact for quote</p>
                    </div>
                  )}

                  <p className="text-sm text-foreground mb-6">{plan.description}</p>

                  <Link href="/pricing">
                    <Button 
                      className={cn(
                        "w-full h-12 rounded-full font-bold transition-all",
                        plan.highlighted
                          ? "bg-primary text-white hover:bg-primary/90"
                          : "bg-[#c8e6c9] text-primary hover:bg-primary/20 border border-primary/20"
                      )}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>

                {/* Features */}
                <div className="p-8 space-y-4 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-foreground shrink-0 mt-0.5" />
                      )}
                      <span className={cn(
                        "text-sm",
                        feature.included ? "text-foreground" : "text-foreground"
                      )}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Trust Signals */}
      <section className="py-24 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container">
          <h2 className="text-3xl font-heading font-bold text-[#1a1a1a] mb-16 text-center">
            Why Choose MySentry?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-[#1a1a1a] mb-2">30-Day Money-Back</h3>
              <p className="text-[#1a1a1a] text-sm">Not satisfied? Full refund, no questions asked.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all">
              <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-[#1a1a1a] mb-2">24/7 Live Monitoring</h3>
              <p className="text-[#1a1a1a] text-sm">Real agents respond to every alert in seconds. Not bots.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-[#1a1a1a] mb-2">HIPAA Compliant</h3>
              <p className="text-[#1a1a1a] text-sm">Your health data is encrypted and secure.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-[#1a1a1a] mb-2">Works with Your Devices</h3>
              <p className="text-[#1a1a1a] text-sm">Apple Watch, Samsung Galaxy Watch, iPhone, and Android. No special hardware needed.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-[#1a1a1a] mb-2">5 Emergency Contacts</h3>
              <p className="text-[#1a1a1a] text-sm">Your family sees everything live. Video. Location. Vitals. All in real-time.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-[#1a1a1a] mb-2">Enterprise Ready</h3>
              <p className="text-[#1a1a1a] text-sm">Scales from individuals to organizations with thousands of employees.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all">
              <Check className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-[#1a1a1a] mb-2">7-Day Free Trial</h3>
              <p className="text-[#1a1a1a] text-sm">No credit card required. Experience full protection risk-free.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-[#1a1a1a] mb-2">Video Evidence</h3>
              <p className="text-[#1a1a1a] text-sm">Every incident is recorded for insurance claims and liability protection.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white border border-primary/10 hover:border-primary/30 transition-all">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-[#1a1a1a] mb-2">Personalized Health Baselines</h3>
              <p className="text-[#1a1a1a] text-sm">Learns YOUR normal, not generic averages. Catches problems earlier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#d4edda] border-t border-primary/10">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need to buy a new device?",
                a: "No. MySentry works with Apple Watch Series 4+ and Samsung Galaxy Watch 4+. If you already own one, you're ready to go."
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. Cancel your subscription anytime with no penalties. If you're not satisfied within 30 days, we'll refund your money."
              },
              {
                q: "What if I have multiple family members?",
                a: "Use the Family Bundle. Add up to 4 members for $5/user/month. Each member has their own profile and privacy settings."
              },
              {
                q: "Is my health data private?",
                a: "Absolutely. All data is encrypted end-to-end and HIPAA compliant. Only you and your emergency contacts can see your information."
              },
              {
                q: "What happens if I don't respond to an alert?",
                a: "Our 24/7 monitoring team will attempt to contact you. If you don't respond, we dispatch emergency services to your location."
              },
              {
                q: "Do I get a free trial?",
                a: "Yes. 7-day free trial with full access to all features. No credit card required to start."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#e8f5e9] border border-primary/10">
                <h3 className="font-bold text-foreground mb-3">{item.q}</h3>
                <p className="text-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-primary text-white">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Get Help Fast?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Start your 7-day free trial today. No credit card. No commitment.
          </p>
          <Button size="lg" className="h-14 px-12 text-lg rounded-full bg-[#e8f5e9] text-primary hover:bg-[#e8f5e9]/90 shadow-xl font-bold">
            Start Free Trial
          </Button>
        </div>
      </section>
    </Layout>
  );
}
