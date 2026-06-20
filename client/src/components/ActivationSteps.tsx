import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, User, Users, Building2, Smartphone, Mail, CreditCard, ShieldCheck, Bell, RefreshCw, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

type UserType = "families" | "seniors" | "females" | "employers";

export default function ActivationSteps() {
  const [activeTab, setActiveTab] = useState<UserType>("families");

  const tabs = [
    { id: "families", label: "Families & Individuals", icon: Users },
    { id: "seniors", label: "Seniors", icon: User },
    { id: "females", label: "Females", icon: Heart },
    { id: "employers", label: "Employers", icon: Building2 },
  ];

  const steps = {
    families: [
      {
        step: "01",
        title: "Pick Your Plan",
        description: "Individual or Family. Monthly or Yearly. Takes 60 seconds.",
        icon: CreditCard,
        details: [
          "Go to Pricing and choose Individual or Family",
          "Save 20% with annual billing",
          "Essential Safety or Longevity & Wellness",
          "7-day free trial, cancel any time"
        ]
      },
      {
        step: "02",
        title: "Download the App",
        description: "Available on iPhone and Android. Works with Apple Watch and Samsung Galaxy Watch.",
        icon: Smartphone,
        details: [
          "Download MySentry from the App Store or Google Play",
          "Log in with your new account",
          "Grant location, camera, and notification permissions",
          "Connect your smartwatch for full protection"
        ]
      },
      {
        step: "03",
        title: "Add Your Safety Circle",
        description: "Add up to 3 emergency contacts. They get alerts when it matters.",
        icon: ShieldCheck,
        details: [
          "Add up to 3 trusted emergency contacts",
          "Contacts receive alerts with your location and live video",
          "Test your PANIC button in Test Mode first",
          "You are now protected 24/7"
        ]
      }
    ],
    seniors: [
      {
        step: "01",
        title: "Pick Your Plan",
        description: "Simple pricing, no hidden fees. Cancel any time.",
        icon: CreditCard,
        details: [
          "Go to Pricing and choose Individual or Family",
          "Save 20% with annual billing",
          "Essential Safety or Longevity & Wellness",
          "7-day free trial, cancel any time"
        ]
      },
      {
        step: "02",
        title: "Set Up in Minutes",
        description: "Works on the phone you already have. No new hardware required.",
        icon: Smartphone,
        details: [
          "Download MySentry from the App Store or Google Play",
          "Log in and complete your safety profile",
          "Pair your Apple Watch or Samsung Watch (optional)",
          "Grant location and notification permissions"
        ]
      },
      {
        step: "03",
        title: "Live Confidently",
        description: "Fall detection, health monitoring, and a PANIC button always on your wrist.",
        icon: ShieldCheck,
        details: [
          "Add a family member or caregiver as emergency contact",
          "Fall detection activates automatically, no setup needed",
          "Test your PANIC button in Test Mode",
          "24/7 professional monitoring is active from day one"
        ]
      }
    ],
    females: [
      {
        step: "01",
        title: "Pick Your Plan",
        description: "Protection that fits your life and your budget.",
        icon: CreditCard,
        details: [
          "Go to Pricing and choose Individual or Family",
          "Save 20% with annual billing",
          "Essential Safety or Longevity & Wellness",
          "7-day free trial, cancel any time"
        ]
      },
      {
        step: "02",
        title: "Download and Connect",
        description: "On your iPhone or Android in under 5 minutes.",
        icon: Smartphone,
        details: [
          "Download MySentry from the App Store or Google Play",
          "Connect your Apple Watch or Samsung Watch",
          "Grant location, camera, and notification permissions",
          "Enable voice activation for hands-free panic"
        ]
      },
      {
        step: "03",
        title: "Go Anywhere Safely",
        description: "MeetSafe, voice-activated panic, and live video. You are never alone.",
        icon: ShieldCheck,
        details: [
          "Add up to 3 trusted emergency contacts",
          "Use MeetSafe to share a live check-in with friends",
          "Test your PANIC button in Test Mode",
          "Voice-activate panic with 'Hey Siri, I need help'"
        ]
      }
    ],
    employers: [
      {
        step: "01",
        title: "Get a Quote",
        description: "Volume pricing for teams of any size. Instant estimate.",
        icon: Building2,
        details: [
          "Go to Pricing and switch to the Organizations tab",
          "Enter your team size for instant volume pricing",
          "Choose monthly or annual billing",
          "Request a demo or start directly"
        ]
      },
      {
        step: "02",
        title: "Set Up Your Account",
        description: "Admin dashboard ready in minutes.",
        icon: Mail,
        details: [
          "Enter company and billing details",
          "Complete purchase and receive admin access",
          "Upload your employee list via CSV or manual entry",
          "Employees receive invite emails automatically"
        ]
      },
      {
        step: "03",
        title: "Monitor Your Team",
        description: "See who is protected and who needs attention.",
        icon: Users,
        details: [
          "Employees download MySentry and activate",
          "Monitor adoption and safety status from your dashboard",
          "Receive alerts when any employee triggers a panic or fall",
          "Generate duty-of-care reports for compliance"
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
          <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 p-1 rounded-[2rem] border border-gray-200">
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
            <div className="flex flex-wrap gap-2 text-sm font-bold text-blue-700">
              <span className="bg-white/50 px-3 py-1 rounded-full">Day 3 Care Call</span>
              <span className="bg-white/50 px-3 py-1 rounded-full">Day 7 Feedback</span>
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
            <div className="flex flex-wrap gap-2 text-sm font-bold text-green-700">
              <span className="bg-white/50 px-3 py-1 rounded-full">10 Days Before Renewal</span>
              <span className="bg-white/50 px-3 py-1 rounded-full">30 Days Before Renewal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
