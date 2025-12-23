import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function PricingSection() {
  const plans = [
    {
      name: "Individual",
      price: "$29",
      period: "/month",
      description: "Complete protection for one person.",
      features: [
        "24/7 Professional Monitoring",
        "Automatic Fall Detection",
        "Crash Detection",
        "Real-time Health Alerts",
        "Live Video Evidence"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Family",
      price: "$49",
      period: "/month",
      description: "Safety for up to 4 family members.",
      features: [
        "Everything in Individual",
        "Up to 4 Accounts",
        "Family Dashboard",
        "Location Sharing",
        "Check-in Alerts"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Business",
      price: "Custom",
      period: "",
      description: "Scalable safety for your workforce.",
      features: [
        "Centralized Admin Dashboard",
        "Employee Safety Reports",
        "Incident Management",
        "API Integration",
        "Dedicated Support"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Simple Pricing</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6 text-[#1a1a1a]">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border ${
                plan.popular ? "border-primary ring-4 ring-primary/10" : "border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-[#1a1a1a]">{plan.price}</span>
                <span className="text-gray-500 font-medium">{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-8 min-h-[3rem]">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/pricing">
                <Button 
                  className={`w-full h-12 rounded-full font-bold uppercase tracking-wide ${
                    plan.popular 
                      ? "bg-primary text-white hover:bg-primary/90" 
                      : "bg-gray-100 text-[#1a1a1a] hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
