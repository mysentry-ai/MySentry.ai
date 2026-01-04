import { Button } from "@/components/ui/button";
import { Check, X, Shield, Zap, Users, Building2, Heart, AlertTriangle, Lock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import EmployerDemoModal from "@/components/EmployerDemoModal";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isFamily, setIsFamily] = useState(false);
  const [employeeCount, setEmployeeCount] = useState(50);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedEmployerPlan, setSelectedEmployerPlan] = useState("");

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

  const currentEmployerRate = isAnnual ? baseEmployerYearlyRate : baseEmployerMonthlyRate;
  const employerTotalPrice = currentEmployerRate * employeeCount * (1 - employerDiscount);

  const consumerPlans = [
    {
      id: "complete",
      name: "Essential Safety",
      tagline: "Safety + Health + Monitoring",
      price: 12.49,
      annualPrice: 119.88,
      description: "Full protection with health monitoring and 24/7 agents.",
      cta: "START 7-DAY FREE TRIAL",
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
        { name: "Mental Health Coach Access (StressGuru.ai)", included: true, link: "https://stressguru.ai" }
      ]
    },
    {
      id: "advanced",
      name: "Longevity & Wellness",
      tagline: "Prevention Through Prediction",
      price: null,
      annualPrice: null,
      description: "Advanced health insights with predictive analytics.",
      cta: "START 7-DAY FREE TRIAL",
      highlighted: false,
      comingSoon: true,
      features: [
        { name: "All Essential Safety Features", included: true },
        { name: "Labs Integration", included: true },
        { name: "Predictive Health Assessments", included: true },
        { name: "Nutrition Guide", included: true },
        { name: "Physical Activity Guide", included: true },
        { name: "Mental Wellness Guide", included: true },
        { name: "Mental Wellness Coaching (StressGuru.ai)", included: true, link: "https://stressguru.ai" },
        { name: "Personalized Prevention Plans", included: true },
        { name: "AI-Powered Health Trends", included: true },
        { name: "Priority Support", included: true }
      ]
    }
  ];

  const employerPlans = [
    {
      id: "employer-complete",
      name: "Complete Protection for Employees",
      tagline: "Employee Safety & Health Monitoring",
      description: "Protect your workforce with comprehensive safety and health monitoring.",
      cta: "BOOK A DEMO",
      highlighted: true,
      comingSoon: false,
      features: [
        { name: "All Essential Safety Features", included: true },
        { name: "Unlimited Team Members", included: true },
        { name: "Team Dashboard", included: true },
        { name: "Incident Reporting & Analytics", included: true },
        { name: "OSHA Compliance Reporting", included: true },
        { name: "Custom Health Thresholds", included: true },
        { name: "Video Evidence for Claims", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "API Integration", included: true },
        { name: "Mental Health Coach Access (StressGuru.ai)", included: true, link: "https://stressguru.ai" }
      ]
    },
    {
      id: "employer-advanced",
      name: "Longevity & Wellness for Employees",
      tagline: "Prevention + Prediction",
      description: "Advanced predictive health for enterprise workforce management.",
      cta: "BOOK A DEMO",
      highlighted: false,
      comingSoon: true,
      features: [
        { name: "All Complete Protection Features", included: true },
        { name: "Labs Integration", included: true },
        { name: "Predictive Health Assessments", included: true },
        { name: "Nutrition Guide", included: true },
        { name: "Physical Activity Guide", included: true },
        { name: "Mental Wellness Guide", included: true },
        { name: "Mental Wellness Coaching (StressGuru.ai)", included: true, link: "https://stressguru.ai" },
        { name: "Workforce Health Trends", included: true },
        { name: "Preventive Health Programs", included: true },
        { name: "Dedicated Health Officer", included: true }
      ]
    }
  ];

  return (
    <Layout>
      {/* HERO SECTION - Standardized with Features Page Style */}
      <section className="relative min-h-[80vh] flex items-center bg-[#e8f5e9] pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
           {/* Relatable Hero Image */}
           <img 
             src="/images/safety-dispenser.png" 
             alt="Safety Dispenser" 
             className="absolute inset-0 w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-[#e8f5e9] via-[#e8f5e9]/90 to-transparent z-10" />
        </div>

        <div className="container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Flexible Plans
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold uppercase leading-[0.9] tracking-tighter mb-8 text-[#1a1a1a]">
              Pricing and Plans<br/>
              <span className="text-gray-600">Within Every Budget.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-2xl font-medium">
              Choose the protection that fits your life. Whether for yourself, your family, or your entire workforce, MySentry offers comprehensive safety at an affordable price.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('pricing-plans')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center"
              >
                START 7-DAY FREE TRIAL
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section id="pricing-plans" className="py-12 bg-[#e8f5e9] border-t border-primary/10">
        <div className="container flex justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-1 bg-[#c8e6c9] rounded-3xl sm:rounded-full inline-flex border border-primary/20 w-full sm:w-auto">
            <button 
              onClick={() => setIsAnnual(false)}
              className={cn(
                "w-full sm:w-auto px-6 py-3 sm:py-2 rounded-full text-sm font-bold transition-all",
                !isAnnual ? "bg-primary text-white" : "text-[#1a1a1a] hover:text-primary"
              )}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={cn(
                "w-full sm:w-auto px-6 py-3 sm:py-2 rounded-full text-sm font-bold transition-all",
                isAnnual ? "bg-primary text-white" : "text-[#1a1a1a] hover:text-primary"
              )}
            >
              Yearly <span className="text-[10px] bg-secondary text-white px-2 py-0.5 rounded-full font-bold ml-1">SAVE 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Consumer Plans */}
      <section className="py-12 bg-[#e8f5e9]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-4 uppercase tracking-tight">For Individuals & Families</h2>
            <p className="text-xl text-gray-600">Choose the protection that's right for you</p>
          </div>

          {/* Plan Type Toggle (Individual vs Family) */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-3xl sm:rounded-full border border-primary/20 inline-flex flex-col sm:flex-row shadow-sm w-full sm:w-auto">
              <button
                onClick={() => setIsFamily(false)}
                className={cn(
                  "w-full sm:w-auto px-8 py-3 rounded-full text-base font-bold transition-all",
                  !isFamily ? "bg-primary text-white shadow-md" : "text-[#1a1a1a] hover:bg-gray-50"
                )}
              >
                Individual
              </button>
              <button
                onClick={() => setIsFamily(true)}
                className={cn(
                  "w-full sm:w-auto px-8 py-3 rounded-full text-base font-bold transition-all",
                  isFamily ? "bg-primary text-white shadow-md" : "text-[#1a1a1a] hover:bg-gray-50"
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
                  "relative p-8 rounded-[2.5rem] border transition-all duration-300 flex flex-col h-full",
                  plan.highlighted 
                    ? "bg-white border-primary shadow-2xl scale-105 z-10" 
                    : "bg-white/50 border-gray-200 hover:border-primary/30 hover:shadow-xl"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{plan.name}</h3>
                  <p className="text-primary font-medium mb-6">{plan.tagline}</p>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    {plan.price !== null ? (
                      <>
                        <span className="text-5xl font-bold text-[#1a1a1a]">
                          ${isAnnual ? currentYearlyRate : currentMonthlyPrice}
                        </span>
                        <span className="text-gray-500 font-medium">/mo</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-[#1a1a1a]">Coming Soon</span>
                    )}
                  </div>
                  
                  {plan.price !== null && isAnnual && (
                    <p className="text-sm text-green-600 font-medium">
                      Billed ${currentAnnualTotal.toFixed(2)} yearly
                    </p>
                  )}
                  
                  <p className="mt-4 text-gray-600 leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex-grow mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 shrink-0">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-primary" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300" />
                          )}
                        </div>
                        <span className={cn("text-sm", feature.included ? "text-gray-700 font-medium" : "text-gray-400")}>
                          {feature.name}
                          {feature.link && (
                            <a href={feature.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                              (Learn more)
                            </a>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className={cn(
                    "w-full h-14 text-lg font-bold rounded-xl transition-all",
                    plan.highlighted 
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-1" 
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  )}
                  disabled={plan.comingSoon}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Plans */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-4 uppercase tracking-tight">For Employers</h2>
            <p className="text-xl text-gray-600">Protect your workforce and reduce costs</p>
          </div>

          {/* Employee Count Slider */}
          <div className="max-w-3xl mx-auto mb-16 bg-[#e8f5e9] p-8 rounded-[2rem] border border-primary/20">
            <label className="block text-center text-lg font-bold text-[#1a1a1a] mb-8">
              Number of Employees: <span className="text-primary text-2xl ml-2">{employeeCount}</span>
            </label>
            <input
              type="range"
              min="10"
              max="10000"
              step="10"
              value={employeeCount}
              onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-4 font-medium">
              <span>10</span>
              <span>10,000+</span>
            </div>
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
                  "relative p-8 rounded-[2.5rem] border transition-all duration-300 flex flex-col h-full",
                  plan.highlighted 
                    ? "bg-white border-primary shadow-2xl scale-105 z-10" 
                    : "bg-white/50 border-gray-200 hover:border-primary/30 hover:shadow-xl"
                )}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{plan.name}</h3>
                  <p className="text-primary font-medium mb-6">{plan.tagline}</p>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-bold text-[#1a1a1a]">
                      ${(employerTotalPrice / employeeCount).toFixed(2)}
                    </span>
                    <span className="text-gray-500 font-medium">/family/mo</span>
                  </div>
                  
                  <p className="text-sm text-green-600 font-medium mb-4">
                    Total: ${employerTotalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {isAnnual ? 'yearly' : 'monthly'}
                  </p>
                  
                  <p className="mt-4 text-gray-600 leading-relaxed">{plan.description}</p>
                </div>

                <div className="flex-grow mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 shrink-0">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-primary" />
                          ) : (
                            <X className="h-5 w-5 text-gray-300" />
                          )}
                        </div>
                        <span className={cn("text-sm", feature.included ? "text-gray-700 font-medium" : "text-gray-400")}>
                          {feature.name}
                          {feature.link && (
                            <a href={feature.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                              (Learn more)
                            </a>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className={cn(
                    "w-full h-14 text-lg font-bold rounded-xl transition-all",
                    plan.highlighted 
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-1" 
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  )}
                  onClick={() => {
                    setSelectedEmployerPlan(plan.name);
                    setIsDemoModalOpen(true);
                  }}
                  disabled={plan.comingSoon}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EmployerDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
        planName={selectedEmployerPlan}
      />
    </Layout>
  );
}
