import { Button } from "@/components/ui/button";
import { Check, X, Shield, Zap, Users, Building2, Heart, AlertTriangle, Lock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import EmployerDemoModal from "@/components/EmployerDemoModal";
import { getSignupUrl } from "@/const";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isFamily, setIsFamily] = useState(false);
  const [employeeCount, setEmployeeCount] = useState(50);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedEmployerPlan, setSelectedEmployerPlan] = useState("");

  // Static pricing logic - Updated with 20% yearly discount
  // Individual: $15/mo (Monthly) or $144/yr (Yearly - 20% off, save $36)
  // Family (up to 6): $30/mo (Monthly) or $288/yr (Yearly - 20% off, save $72)
  
  const individualMonthly = 15.00;
  const individualYearlyTotal = 144.00; // 20% off from $180
  const individualYearlySavings = 36.00;

  const familyMonthly = 30.00;
  const familyYearlyTotal = 288.00; // 20% off from $360
  const familyYearlySavings = 72.00;

  const currentMonthlyPrice = isFamily ? familyMonthly : individualMonthly;
  const currentYearlyTotal = isFamily ? familyYearlyTotal : individualYearlyTotal;
  const currentYearlySavings = isFamily ? familyYearlySavings : individualYearlySavings;

  // Generate dynamic signup URL based on plan type and billing cycle
  const getConsumerSignupUrl = () => {
    const planType = isFamily ? 'family' : 'individual';
    const billingCycle = isAnnual ? 'yearly' : 'monthly';
    return getSignupUrl(planType, billingCycle);
  };

  // Longevity Plan Pricing (Double the Essential Safety Plan)
  // Individual: $24.99/mo (Monthly) or $19.99/mo (Yearly)
  // Family: $49.99/mo (Monthly) or $39.99/mo (Yearly)
  const longevityMonthly = isFamily ? 49.99 : 24.99;
  const longevityYearlyRate = isFamily ? 39.99 : 19.99;
  const longevityAnnualTotal = longevityYearlyRate * 12;

  // Calculate employer plan price (Based on Family rates)
  // Complete: $24.99/mo (Monthly) or $19.99/mo (Yearly)
  // Longevity: $49.99/mo (Monthly) or $39.99/mo (Yearly)
  
  let employerDiscount = 0;
  if (employeeCount >= 5000) {
    employerDiscount = 0.5;
  } else if (employeeCount >= 500) {
    employerDiscount = 0.35;
  }

  const discountMultiplier = 1 - employerDiscount;

  const completeBaseRate = isAnnual ? 25.00 : 30.00;
  const longevityBaseRate = isAnnual ? 39.99 : 49.99;

  const completeTotalPrice = completeBaseRate * employeeCount * discountMultiplier;
  const longevityTotalPrice = longevityBaseRate * employeeCount * discountMultiplier;

  const consumerPlans = [
    {
      id: "complete",
      name: "Essential Safety",
      tagline: "24x7 Safety & Health Monitoring with Emergency Response",
      price: currentMonthlyPrice,
      annualPrice: currentYearlyTotal,
      yearlySavings: currentYearlySavings,
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
      price: longevityMonthly,
      annualPrice: longevityAnnualTotal,
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
      name: "Essential Safety for Employees",
      tagline: "Employee Safety & Health Monitoring",
      description: "Protect your workforce with comprehensive safety and health monitoring.",
      cta: "BOOK A DEMO",
      highlighted: true,
      comingSoon: false,
      totalPrice: completeTotalPrice,
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
      totalPrice: longevityTotalPrice,
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
      <HeroSection
        label="Flexible Plans"
        title={<>Pricing and Plans<br/><span className="text-gray-600">Within Every Budget.</span></>}
        description="Choose the protection that fits your life. Whether for yourself, your family, or your entire workforce, MySentry offers comprehensive safety & health monitoring with emergency response at an affordable price."
        imageSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/zhjtYYsGkjNemizw.png"
        imageAlt="Safety Dispenser"
        ctaText="START 7-DAY FREE TRIAL"
        ctaLink="#pricing-plans"
      />

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
      <section id="individuals" className="py-12 bg-[#e8f5e9]">
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

          {/* Family Plan Note */}
          {isFamily && (
            <div className="text-center" style={{ marginTop: '-3px', marginBottom: '60px' }}>
              <p className="text-gray-600 italic text-sm">Invite up to 6 family members to join your plan (1 admin account holder and 5 family members).</p>
            </div>
          )}

          {/* Consumer Plans Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {consumerPlans.map((plan, idx) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={cn(
                  "relative rounded-3xl p-8 border-2 transition-all duration-300 flex flex-col",
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
                    {!plan.comingSoon ? (
                      <>
                        <span className="text-5xl font-bold text-[#1a1a1a]">
                          ${isAnnual ? plan.annualPrice : plan.price}
                        </span>
                        <span className="text-gray-500 font-medium">{isAnnual ? '/year' : '/mo'}</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-[#1a1a1a]">Coming Soon</span>
                    )}
                  </div>
                  
                  {!plan.comingSoon && isAnnual && plan.yearlySavings && (
                    <p className="text-sm text-green-600 font-medium">
                      Save ${plan.yearlySavings.toFixed(0)} with annual billing
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

                {!plan.comingSoon ? (
                  <a 
                    href={getConsumerSignupUrl()}
                    className={cn(
                      "w-full h-14 text-lg font-bold rounded-xl transition-all inline-flex items-center justify-center",
                      plan.highlighted 
                        ? "bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-1" 
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    )}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Button 
                    className={cn(
                      "w-full h-14 text-lg font-bold rounded-xl transition-all",
                      "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    )}
                    disabled
                  >
                    {plan.cta}
                  </Button>
                )}
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
                  "relative rounded-3xl p-8 border-2 transition-all duration-300 flex flex-col",
                  plan.highlighted 
                    ? "bg-white border-primary shadow-2xl scale-105 z-10" 
                    : "bg-white/50 border-gray-200 hover:border-primary/30 hover:shadow-xl"
                )}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    RECOMMENDED
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{plan.name}</h3>
                  <p className="text-primary font-medium mb-6">{plan.tagline}</p>
                  
                  <div className="flex items-baseline gap-1 mb-2">
                    {!plan.comingSoon ? (
                      <>
                        <span className="text-5xl font-bold text-[#1a1a1a]">
                          ${plan.totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <span className="text-gray-500 font-medium">/mo</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-[#1a1a1a]">Coming Soon</span>
                    )}
                  </div>
                  
                  {!plan.comingSoon && employerDiscount > 0 && (
                    <p className="text-sm text-green-600 font-medium">
                      {Math.round(employerDiscount * 100)}% volume discount applied
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
                  onClick={() => {
                    if (!plan.comingSoon) {
                      setSelectedEmployerPlan(plan.name);
                      setIsDemoModalOpen(true);
                    }
                  }}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#e8f5e9]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-[#1a1a1a] mb-4 uppercase tracking-tight">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What's included in the 7-day free trial?",
                a: "Your free trial includes full access to all Essential Safety features including 24/7 professional monitoring, fall detection, crash detection, and real-time health alerts. No credit card required to start."
              },
              {
                q: "Can I switch between Individual and Family plans?",
                a: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll only pay the prorated difference. When downgrading, the change takes effect at your next billing cycle."
              },
              {
                q: "What devices are compatible with MySentry?",
                a: "MySentry works with iPhone (iOS 14+), Android phones (Android 10+), Apple Watch (Series 4+), and most Wear OS smartwatches. Our app is optimized for both smartphones and wearables."
              },
              {
                q: "How does the 24/7 professional monitoring work?",
                a: "When an emergency is detected (fall, crash, panic alarm), our trained monitoring agents are immediately alerted. They can view live video, communicate with you, and dispatch emergency services to your exact location if needed."
              },
              {
                q: "Is there a contract or commitment?",
                a: "No long-term contracts! All plans are month-to-month or annual (with 20% savings). You can cancel anytime with no cancellation fees."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Demo Modal */}
      <EmployerDemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)}
        planName={selectedEmployerPlan}
      />
    </Layout>
  );
}
