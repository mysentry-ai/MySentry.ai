import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, User, Users, Building2, Smartphone, Mail, CreditCard, ShieldCheck, Bell, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

type UserType = "families" | "seniors" | "employers";

export default function ActivationSteps() {
  const [activeTab, setActiveTab] = useState<UserType>("families");

  const tabs = [
    { id: "families", label: "Families & Individuals", icon: Users },
    { id: "seniors", label: "Seniors", icon: User },
    { id: "employers", label: "Employers", icon: Building2 },
  ];

  const steps = {
    families: [
      {
        step: "01",
        title: "Choose Your Plan",
        description: "Select the protection that fits your life.",
        icon: CreditCard,
        details: [
          "Visit Pricing & Plans page",
          "Choose 'Individuals & Families' tab",
          "Select Monthly or Yearly (Save 20%) billing",
          "Pick the plan that suits your needs"
        ]
      },
      {
        step: "02",
        title: "Create Account",
        description: "Securely set up your profile and payment.",
        icon: User,
        details: [
          "Enter your name, email, and phone",
          "Provide secure payment details",
          "Review and accept terms",
          "Receive instant confirmation email"
        ]
      },
      {
        step: "03",
        title: "Activate & Protect",
        description: "Download the app and invite your circle.",
        icon: ShieldCheck,
        details: [
          "Download MySentry app (iOS/Android)",
          "Log in with your new account",
          "Invite family members to join",
          "Grant permissions for full protection"
        ]
      }
    ],
    seniors: [
      {
        step: "01",
        title: "Select Senior Plan",
        description: "Simple, affordable protection for independence.",
        icon: CreditCard,
        details: [
          "Visit Pricing & Plans page",
          "Choose 'Individuals & Families' tab",
          "Select Monthly or Yearly (Save 20%) billing",
          "Choose the plan with Fall Detection"
        ]
      },
      {
        step: "02",
        title: "Easy Setup",
        description: "Quick and secure account creation.",
        icon: User,
        details: [
          "Enter your contact information",
          "Add payment method securely",
          "Confirm your subscription",
          "Check email for activation link"
        ]
      },
      {
        step: "03",
        title: "Stay Independent",
        description: "Connect your devices and live confidently.",
        icon: ShieldCheck,
        details: [
          "Download MySentry on your phone",
          "Pair your smartwatch (optional)",
          "Add emergency contacts",
          "Enjoy 24/7 professional monitoring"
        ]
      }
    ],
    employers: [
      {
        step: "01",
        title: "Define Your Needs",
        description: "Tailored solutions for your workforce.",
        icon: Building2,
        details: [
          "Visit Pricing & Plans page",
          "Switch to 'Organizations' tab",
          "Input number of seats required",
          "View volume discounts instantly"
        ]
      },
      {
        step: "02",
        title: "Company Setup",
        description: "Streamlined onboarding for your business.",
        icon: Mail,
        details: [
          "Enter company & billing details",
          "Apply any discount codes",
          "Complete purchase securely",
          "Receive admin dashboard access"
        ]
      },
      {
        step: "03",
        title: "Deploy & Manage",
        description: "Roll out protection to your team.",
        icon: Users,
        details: [
          "Log in to Admin Dashboard",
          "Upload employee list (CSV or manual)",
          "Employees receive invite emails",
          "Monitor adoption and safety status"
        ]
      }
    ]
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">
            Get Started in 3 Steps
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            HOW IT WORKS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Activation is simple. Choose your path below to see how easy it is to get protected.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-100 p-1 rounded-full border border-gray-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as UserType)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-white text-primary shadow-md scale-105"
                      : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Steps Display */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {steps[activeTab].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="relative group">
                    {/* Connector Line (Desktop only) */}
                    {idx < 2 && (
                      <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gray-100 -z-10">
                        <div className="h-full bg-primary/20 w-0 group-hover:w-full transition-all duration-700 delay-200" />
                      </div>
                    )}
                    
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-gray-50 px-4 py-2 rounded-bl-2xl text-xs font-black text-gray-300">
                        STEP {step.step}
                      </div>

                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8" />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 font-medium mb-6">
                        {step.description}
                      </p>

                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Follow-up & Renewal Info */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-blue-900">We Follow Up</h4>
            </div>
            <p className="text-blue-800/80 mb-4">
              We ensure you're fully protected. If you haven't activated within 3 days, we'll reach out with a care call and "how-to" guide.
            </p>
            <div className="flex gap-2 text-sm font-bold text-blue-700">
              <span className="bg-white/50 px-3 py-1 rounded-full">T+3 Care Call</span>
              <span className="bg-white/50 px-3 py-1 rounded-full">T+7 Feedback</span>
            </div>
          </div>

          <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <RefreshCw className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-green-900">Simple Renewals</h4>
            </div>
            <p className="text-green-800/80 mb-4">
              No surprises. We send renewal notices well in advance so you always know the status of your protection.
            </p>
            <div className="flex gap-2 text-sm font-bold text-green-700">
              <span className="bg-white/50 px-3 py-1 rounded-full">T-10 Monthly Notice</span>
              <span className="bg-white/50 px-3 py-1 rounded-full">T-30 Yearly Notice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
