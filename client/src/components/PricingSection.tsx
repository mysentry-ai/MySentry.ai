import { Button } from "@/components/ui/button";
import { CheckCircle2, Users } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [employeeCount, setEmployeeCount] = useState(50);

  // Pricing Constants
  const individualMonthly = 12.49;
  const individualYearlyRate = 9.99;
  
  const familyMonthly = 24.99;
  const familyYearlyRate = 19.99;

  // Employer Pricing Logic
  const baseEmployerMonthlyRate = 24.99;
  const baseEmployerYearlyRate = 19.99;
  
  let employerDiscount = 0;
  if (employeeCount >= 5000) employerDiscount = 0.5;
  else if (employeeCount >= 500) employerDiscount = 0.35;

  const employerPricePerUser = isAnnual 
    ? baseEmployerYearlyRate * (1 - employerDiscount)
    : baseEmployerMonthlyRate * (1 - employerDiscount);

  const plans = [
    {
      name: "Individual",
      price: isAnnual ? `$${individualYearlyRate}` : `$${individualMonthly}`,
      period: "/month",
      billing: isAnnual ? "Billed annually" : "Billed monthly",
      description: "Complete Protection\nSafety + Health + Monitoring",
      features: [
        "24/7 Professional Monitoring",
        "Automatic Fall Detection",
        "Crash Detection",
        "Real-time Health Alerts",
        "Live Video Evidence"
      ],
      cta: "Start Free Trial",
      popular: false,
      highlightColor: "primary"
    },
    {
      name: "Family",
      price: isAnnual ? `$${familyYearlyRate}` : `$${familyMonthly}`,
      period: "/month",
      billing: isAnnual ? "Billed annually" : "Billed monthly",
      description: "Complete Protection\nSafety + Health + Monitoring\n(Up to 6 members)",
      features: [
        "Everything in Individual",
        "Up to 6 Accounts",
        "Family Dashboard",
        "Location Sharing",
        "Check-in Alerts"
      ],
      cta: "Start Free Trial",
      popular: true,
      highlightColor: "#66d48f"
    },
    {
      name: "Employers",
      price: `$${employerPricePerUser.toFixed(2)}`,
      period: "/user/mo",
      billing: isAnnual ? "Billed annually" : "Billed monthly",
      description: "Complete Protection for Employees\nEmployee Safety & Health",
      features: [
        "Centralized Admin Dashboard",
        "Employee Safety Reports",
        "Incident Management",
        "API Integration",
        "Dedicated Support"
      ],
      cta: "Contact Sales",
      popular: false,
      highlightColor: "primary",
      isEmployer: true
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Simple Pricing</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight mb-6 text-[#1a1a1a]">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="inline-flex bg-white p-1 rounded-full border border-gray-200 shadow-sm mb-8">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all",
                !isAnnual ? "bg-primary text-white shadow-md" : "text-gray-600 hover:text-primary"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2",
                isAnnual ? "bg-primary text-white shadow-md" : "text-gray-600 hover:text-primary"
              )}
            >
              Yearly <span className="bg-[#66d48f] text-white text-[10px] px-2 py-0.5 rounded-full">SAVE 20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-xl border transition-all duration-300 hover:shadow-2xl flex flex-col ${
                plan.popular ? "border-[#66d48f] ring-4 ring-[#66d48f]/20 scale-105 z-10" : "border-gray-100 hover:border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#66d48f] text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{plan.name}</h3>
              
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold text-[#1a1a1a]">{plan.price}</span>
                <span className="text-gray-500 font-medium">{plan.period}</span>
              </div>
              <p className="text-sm text-gray-400 font-medium mb-4">{plan.billing}</p>

              {/* Employer Employee Count Slider */}
              {plan.isEmployer && (
                <div className="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                      <Users className="h-4 w-4" /> Employees
                    </span>
                    <span className="text-sm font-bold text-primary">{employeeCount.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="10000"
                    step="10"
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                    <span>10</span>
                    <span>10k+</span>
                  </div>
                </div>
              )}

              <p className="text-gray-600 mb-8 min-h-[4.5rem] whitespace-pre-line font-medium leading-relaxed">
                {plan.description}
              </p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${plan.popular ? "text-[#66d48f]" : "text-primary"}`} />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/pricing">
                <Button 
                  className={`w-full h-12 rounded-full font-bold uppercase tracking-wide transition-all ${
                    plan.popular 
                      ? "bg-[#66d48f] text-white hover:bg-[#5bc482] shadow-lg hover:shadow-xl" 
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
