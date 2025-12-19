import { Button } from "@/components/ui/button";
import { Check, X, Shield, Zap, Users, Building2, Heart, AlertTriangle, Lock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isFamily, setIsFamily] = useState(false);
  const [employeeCount, setEmployeeCount] = useState(50);

  // Static pricing logic
  // Individual: $12.49/mo (Monthly) or $9.99/mo (Yearly)
  // Family (up to 6): $24.99/mo (Monthly) or $19.99/mo (Yearly)
  
  const individualMonthly = 12.49;
  const individualYearlyRate = 9.99;
  const individualAnnualTotal = individualYearlyRate * 12;

  const familyMonthly = 24.99;
  const familyYearlyRate = 19.99;
  const familyAnnualTotal = familyYearlyRate * 12;

  const currentMonthlyPrice = isFamily ? familyMonthly : individualMonthly;
  const currentYearlyRate = isFamily ? familyYearlyRate : individualYearlyRate;
  const currentAnnualTotal = isFamily ? familyAnnualTotal : individualAnnualTotal;

  // Calculate employer plan price (Based on Family rates)
  // Base: $24.99/mo (Monthly) or $19.99/mo (Yearly) per employee family
  const baseEmployerMonthlyRate = 24.99;
  const baseEmployerYearlyRate = 19.99;
  
  let employerDiscount = 0;
  if (employeeCount >= 5000) {
    employerDiscount = 0.5;
  } else if (employeeCount >= 500) {
    employerDiscount = 0.35;
  }

  const employerMonthlyPrice = baseEmployerMonthlyRate * employeeCount * (1 - employerDiscount);
  const employerAnnualPrice = baseEmployerYearlyRate * 12 * employeeCount * (1 - employerDiscount);

  const consumerPlans = [

    {
      id: "complete",
      name: "Complete Protection",
      tagline: "Safety + Health + Monitoring",
      price: 12.49,
      annualPrice: 119.88,
      description: "Full protection with health monitoring and 24/7 agents.",
      cta: "Start 7-Day Free Trial",
      highlighted: true,
      comingSoon: false,
      features: [
        { name: "Panic Alarm (Voice, Button, Watch)", included: true },
        { name: "Fall Detection", included: true },
        { name: "Crash Detection", included: true },
        { name: "Real-Time Personalized Health Monitoring", included: true },
        { name: "24/7 Professional Monitoring", included: true },
        { name: "Live Video Response", included: true },
        { name: "Automated Location Sharing", included: true },
        { name: "5 Emergency Contacts", included: true },
        { name: "MeetSafe (Optional)", included: true },
        { name: "Automated Call (Optional)", included: true },
        { name: "Mental Health Coach Access (DrNur.ai)", included: true, link: "https://drnur.ai" }
      ]
    },
    {
      id: "advanced",
      name: "Predictive Care",
      tagline: "Prevention Through Prediction",
      price: null,
      annualPrice: null,
      description: "Advanced health insights with predictive analytics.",
      cta: "Start 7-Day Free Trial",
      highlighted: false,
      comingSoon: true,
      features: [
        { name: "All Complete Protection Features (including MeetSafe & Automated Call)", included: true },
        { name: "Predictive Health Analytics", included: true },
        { name: "Physical, Mental & Nutritional Insights", included: true },
        { name: "Labs Integration", included: true },
        { name: "Personalized Prevention Plans", included: true },
        { name: "AI-Powered Health Trends", included: true },
        { name: "Advanced Baseline Monitoring", included: true },
        { name: "Priority Support", included: true },
        { name: "Custom Health Thresholds", included: true },
        { name: "Mental Health Coach Access (DrNur.ai)", included: true, link: "https://drnur.ai" }
      ]
    }
  ];

  const employerPlans = [
    {
      id: "employer-complete",
      name: "Complete Protection for Employees",
      tagline: "Employee Safety & Health",
      description: "Protect your workforce with comprehensive safety and health monitoring.",
      cta: "Request Demo",
      highlighted: true,
      comingSoon: false,
      features: [
        { name: "All Complete Protection Features (including MeetSafe & Automated Call)", included: true },
        { name: "Unlimited Team Members", included: true },
        { name: "Team Dashboard", included: true },
        { name: "Incident Reporting & Analytics", included: true },
        { name: "OSHA Compliance Reporting", included: true },
        { name: "Custom Health Thresholds", included: true },
        { name: "Video Evidence for Claims", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "API Integration", included: true },
        { name: "Mental Health Coach Access (DrNur.ai)", included: true, link: "https://drnur.ai" }
      ]
    },
    {
      id: "employer-advanced",
      name: "Predictive Care for Employees",
      tagline: "Prevention + Prediction",
      description: "Advanced predictive health for enterprise workforce management.",
      cta: "Start 7-Day Free Trial",
      highlighted: false,
      comingSoon: true,
      features: [
        { name: "All Complete Protection Features (including MeetSafe & Automated Call)", included: true },
        { name: "Predictive Health Analytics", included: true },
        { name: "Workforce Health Trends", included: true },
        { name: "Preventive Health Programs", included: true },
        { name: "Mental Health Monitoring", included: true },
        { name: "Nutritional Insights", included: true },
        { name: "Labs Integration", included: true },
        { name: "Advanced Reporting & Insights", included: true },
        { name: "Dedicated Health Officer", included: true },
        { name: "Mental Health Coach Access (DrNur.ai)", included: true, link: "https://drnur.ai" }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-[#e8f5e9] pt-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-secondary/5 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#d4edda] blur-[100px]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6">
              Safety and Health Monitoring for Everyone within Every Budget
            </h1>
            <p className="text-xl text-[#1a1a1a] mb-8">
              
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-6 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container">
          <div className="flex items-center justify-center gap-2 p-1 bg-[#c8e6c9] rounded-full inline-flex border border-primary/20 mx-auto">
            <button 
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all",
                !isAnnual ? "bg-primary text-white" : "text-[#1a1a1a] hover:text-primary"
              )}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-bold transition-all",
                isAnnual ? "bg-primary text-white" : "text-[#1a1a1a] hover:text-primary"
              )}
            >
              Yearly <span className="text-[10px] bg-secondary text-white px-2 py-0.5 rounded-full font-bold ml-1">SAVE 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Consumer Plans */}
      <section className="py-12 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#1a1a1a] mb-4">For Individuals & Families</h2>
            <p className="text-lg text-[#1a1a1a]">Choose the protection that's right for you</p>
          </div>

          {/* Plan Type Toggle (Individual vs Family) */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-full border border-primary/20 inline-flex">
              <button
                onClick={() => setIsFamily(false)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  !isFamily ? "bg-primary text-white shadow-md" : "text-[#1a1a1a] hover:bg-gray-100"
                )}
              >
                Individual
              </button>
              <button
                onClick={() => setIsFamily(true)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-bold transition-all",
                  isFamily ? "bg-primary text-white shadow-md" : "text-[#1a1a1a] hover:bg-gray-100"
                )}
              >
                Family (up to 6)
              </button>
            </div>
          </div>

          {/* Consumer Plans Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {consumerPlans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={cn(
                  "relative rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col",
                  plan.comingSoon 
                    ? "opacity-60 border-primary/10 bg-[#f0f0f0]"
                    : plan.highlighted 
                    ? "border-primary/50 bg-[#d4edda] shadow-lg" 
                    : "border-primary/10 bg-white hover:border-primary/30 shadow-sm hover:shadow-md"
                )}
              >
                {/* Badge */}
                {plan.highlighted && !plan.comingSoon && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                {plan.comingSoon && (
                  <div className="absolute top-4 right-4 bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Lock className="h-3 w-3" /> Coming Soon
                  </div>
                )}

                {/* Header */}
                <div className="p-8 border-b border-primary/10">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{plan.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-6">{plan.tagline}</p>
                  
                  {plan.id === "complete" ? (
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-primary">
                          ${isAnnual ? currentYearlyRate.toFixed(2) : currentMonthlyPrice.toFixed(2)}
                        </span>
                        <span className="text-[#1a1a1a]">/month</span>
                      </div>
                      {isAnnual && (
                        <p className="text-xs text-[#1a1a1a] mt-2">
                          Billed ${currentAnnualTotal.toFixed(2)} annually
                        </p>
                      )}
                      <p className="text-xs text-primary font-semibold mt-1">
                        {isFamily ? 'Covers up to 6 family members' : 'Per user'}
                      </p>
                    </div>
                  ) : plan.id === "advanced" ? (
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-gray-400">Custom Pricing</p>
                      <p className="text-xs text-gray-400 mt-2">Contact for quote</p>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-primary">${plan.price}</span>
                        <span className="text-[#1a1a1a]">/month</span>
                      </div>
                      {isAnnual && plan.price && plan.price > 0 && (
                        <p className="text-xs text-[#1a1a1a] mt-2">
                          Billed ${plan.annualPrice} annually
                        </p>
                      )}
                    </div>
                  )}

                  <p className="text-sm text-[#1a1a1a] mb-6">{plan.description}</p>

                  {!plan.comingSoon && (
                    <Link href="/pricing">
                      <Button 
                        className={cn(
                          "w-full h-12 rounded-full font-bold transition-all",
                          plan.highlighted
                            ? "bg-primary text-white hover:bg-primary/90"
                            : "bg-[#c8e6c9] text-primary hover:bg-primary/20 border border-primary/20"
                        )}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  )}
                  {plan.comingSoon && (
                    <Button disabled className="w-full h-12 rounded-full font-bold bg-gray-300 text-gray-500 cursor-not-allowed">
                      {plan.cta}
                    </Button>
                  )}
                </div>

                {/* Features */}
                <div className="p-8 space-y-4 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
                      )}
                      {feature.link ? (
                        <a href={feature.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          {feature.name}
                        </a>
                      ) : (
                        <span className={cn(
                          "text-sm",
                          feature.included ? "text-[#1a1a1a]" : "text-gray-400"
                        )}>
                          {feature.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Plans */}
      <section className="py-24 bg-[#d4edda] border-t border-primary/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-[#1a1a1a] mb-4">For Employers</h2>
            <p className="text-lg text-[#1a1a1a]">Protect your workforce and boost productivity</p>
          </div>

          {/* Employee Count Selector */}
          <div className="max-w-md mx-auto mb-12 p-6 rounded-2xl bg-white border border-primary/10">
            <label className="block text-sm font-bold text-[#1a1a1a] mb-3">
              How many employee families to protect?
            </label>
            <input 
              type="number"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full p-3 rounded-lg border border-primary/20 text-[#1a1a1a] font-semibold bg-[#e8f5e9]"
              min="1"
            />
            {employeeCount >= 500 && (
              <p className="text-xs text-primary font-semibold mt-2">
                🎉 You qualify for {employeeCount >= 5000 ? '50%' : '35%'} discount!
              </p>
            )}
          </div>

          {/* Employer Plans Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {employerPlans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={cn(
                  "relative rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col",
                  plan.comingSoon 
                    ? "opacity-60 border-primary/10 bg-[#f0f0f0]"
                    : plan.highlighted 
                    ? "border-primary/50 bg-white shadow-lg" 
                    : "border-primary/10 bg-white hover:border-primary/30 shadow-sm hover:shadow-md"
                )}
              >
                {/* Badge */}
                {plan.highlighted && !plan.comingSoon && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                    MOST POPULAR
                  </div>
                )}
                {plan.comingSoon && (
                  <div className="absolute top-4 right-4 bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Lock className="h-3 w-3" /> Coming Soon
                  </div>
                )}

                {/* Header */}
                <div className="p-8 border-b border-primary/10">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{plan.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-6">{plan.tagline}</p>
                  
                  {!plan.comingSoon ? (
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-primary">
                          ${isAnnual ? (employerAnnualPrice / 12 / employeeCount).toFixed(2) : (employerMonthlyPrice / employeeCount).toFixed(2)}
                        </span>
                        <span className="text-[#1a1a1a]">/family/month</span>
                      </div>
                      <p className="text-sm text-[#1a1a1a] mt-2 font-semibold">
                        Total: ${isAnnual ? (employerAnnualPrice / 12).toFixed(2) : employerMonthlyPrice.toFixed(2)}/month
                      </p>
                      {isAnnual && (
                        <p className="text-xs text-[#1a1a1a] mt-1">
                          Billed ${employerAnnualPrice.toFixed(2)} annually
                        </p>
                      )}
                      {employeeCount >= 500 && (
                        <p className="text-xs text-primary font-semibold mt-1">
                          {employeeCount >= 5000 ? '50%' : '35%'} volume discount applied
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="mb-4">
                      <p className="text-2xl font-bold text-gray-400">Custom Pricing</p>
                      <p className="text-xs text-gray-400 mt-2">Contact for quote</p>
                    </div>
                  )}

                  <p className="text-sm text-[#1a1a1a] mb-6">{plan.description}</p>

                  {!plan.comingSoon && (
                    <Link href="/pricing">
                      <Button 
                        className={cn(
                          "w-full h-12 rounded-full font-bold transition-all",
                          plan.highlighted
                            ? "bg-primary text-white hover:bg-primary/90"
                            : "bg-[#c8e6c9] text-primary hover:bg-primary/20 border border-primary/20"
                        )}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  )}
                  {plan.comingSoon && (
                    <Button disabled className="w-full h-12 rounded-full font-bold bg-gray-300 text-gray-500 cursor-not-allowed">
                      {plan.cta}
                    </Button>
                  )}
                </div>

                {/* Features */}
                <div className="p-8 space-y-4 flex-1">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
                      )}
                      {feature.link ? (
                        <a href={feature.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          {feature.name}
                        </a>
                      ) : (
                        <span className={cn(
                          "text-sm",
                          feature.included ? "text-[#1a1a1a]" : "text-gray-400"
                        )}>
                          {feature.name}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
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
    </Layout>
  );
}
