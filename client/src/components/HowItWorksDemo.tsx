import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Watch, Smartphone, Server, Phone, CheckCircle2, AlertTriangle, Activity, Car, Bell, HeartPulse, Video, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

type ScenarioType = "fall" | "crash" | "panic" | "health";

export default function HowItWorksDemo() {
  const [activeScenario, setActiveScenario] = useState<ScenarioType>("fall");
  const [activeStep, setActiveStep] = useState(0);

  const scenarios = [
    { id: "fall", label: "Fall Detection", icon: AlertTriangle },
    { id: "crash", label: "Crash Detection", icon: Car },
    { id: "panic", label: "Panic Alarm", icon: Bell },
    { id: "health", label: "Health Alert", icon: HeartPulse },
  ];

  const steps = [
    {
      id: 0,
      title: "Detection",
      description: activeScenario === "fall" ? "Smartwatch detects a hard fall instantly." :
                   activeScenario === "crash" ? "Sensors detect high-impact collision." :
                   activeScenario === "panic" ? "You press the SOS button on Watch or Phone." :
                   "Abnormal heart rate or vitals detected.",
      icon: activeScenario === "fall" || activeScenario === "health" ? Watch : Smartphone,
      color: "text-orange-500",
      bgColor: "bg-orange-100"
    },
    {
      id: 1,
      title: "Analysis",
      description: "AI confirms emergency severity in milliseconds.",
      icon: Activity,
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      id: 2,
      title: "Transmission",
      description: "Sending Live Video, GPS Location & Health Vitals.",
      icon: Server,
      color: "text-purple-500",
      bgColor: "bg-purple-100"
    },
    {
      id: 3,
      title: "Response",
      description: "Agent speaks to you & dispatches help.",
      icon: Phone,
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  // Auto-advance steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeScenario]);

  const showPhone = activeScenario === "crash" || activeScenario === "panic";
  const showWatch = true; // Watch is always involved or primary

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
      {/* Scenario Tabs */}
      <div className="flex flex-wrap justify-center gap-4 p-8 border-b border-gray-100 bg-gray-50/50">
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => { setActiveScenario(scenario.id as ScenarioType); setActiveStep(0); }}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${
              activeScenario === scenario.id 
                ? "bg-primary text-white shadow-lg scale-105" 
                : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            <scenario.icon className="h-4 w-4" />
            {scenario.label}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2">
        {/* Left Side: Steps List */}
        <div className="p-6 md:p-12 bg-white flex flex-col justify-center relative z-10 order-2 lg:order-1">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-start gap-6 p-6 rounded-3xl transition-all duration-500 ${
                  activeStep === index 
                    ? "bg-gray-50 shadow-inner border border-gray-100 transform scale-105" 
                    : "opacity-40"
                }`}
              >
                <div className={`p-4 rounded-2xl ${step.bgColor} shrink-0`}>
                  <step.icon className={`h-8 w-8 ${step.color}`} />
                </div>
                <div>
                  <h4 className={`font-bold text-xl mb-2 ${activeStep === index ? "text-[#1a1a1a]" : "text-gray-500"}`}>
                    {step.title}
                  </h4>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Step 2 Extra Details */}
                  {index === 2 && activeStep === 2 && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="flex gap-3 mt-3"
                    >
                      <span className="flex items-center gap-1 text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md">
                        <Video className="h-3 w-3" /> Video
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md">
                        <MapPin className="h-3 w-3" /> GPS
                      </span>
                      <span className="flex items-center gap-1 text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md">
                        <HeartPulse className="h-3 w-3" /> Vitals
                      </span>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Simulation */}
        <div className="relative bg-[#e8f5e9] p-8 md:p-12 flex items-center justify-center overflow-hidden min-h-[400px] md:min-h-[600px] order-1 lg:order-2">
          {/* Background Pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
            />
          </div>

          <div className="flex items-center justify-center gap-8 relative z-10">
            {/* WATCH DEVICE */}
            <motion.div 
              animate={{ 
                x: showPhone ? -10 : 0,
                scale: showPhone ? 0.8 : 1
              }}
              className="relative w-36 h-44 md:w-48 md:h-56 bg-gray-900 rounded-[2rem] md:rounded-[2.5rem] border-4 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden shrink-0"
            >
              {/* Watch Strap Hints */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-t-xl -z-10" />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-b-xl -z-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeScenario}-${activeStep}-watch`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full"
                >
                  {activeStep === 0 && (
                    <img 
                      src={activeScenario === "panic" ? "/images/watch-panic.png" : "/images/watch-home.png"} 
                      alt="Watch Screen" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {activeStep === 1 && (
                    <img 
                      src="/images/watch-notifications.png" 
                      alt="Analyzing" 
                      className="w-full h-full object-cover"
                    />
                  )}
                  {activeStep >= 2 && (
                    <img 
                      src="/images/watch-vitals.png" 
                      alt="Vitals" 
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* PHONE DEVICE (Conditional) */}
            <AnimatePresence>
              {showPhone && (
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="relative w-48 h-[380px] md:w-64 md:h-[500px] bg-gray-900 rounded-[2rem] md:rounded-[3rem] border-4 md:border-8 border-gray-800 shadow-2xl overflow-hidden flex flex-col shrink-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20" />
                  
                  <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeScenario}-${activeStep}-phone`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="w-full"
                      >
                        {activeStep === 0 && (
                          <>
                            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Bell className="h-10 w-10 text-red-500" />
                            </div>
                            <h3 className="text-white font-bold text-xl">SOS Triggered</h3>
                            <p className="text-gray-400 text-sm mt-2">Connecting...</p>
                          </>
                        )}
                        
                        {activeStep === 2 && (
                          <div className="space-y-4">
                            <div className="bg-gray-800 rounded-xl p-3 flex items-center gap-3">
                              <Video className="h-5 w-5 text-purple-400" />
                              <div className="text-left">
                                <div className="text-xs text-gray-400">Camera</div>
                                <div className="text-sm text-white font-bold">Streaming</div>
                              </div>
                              <div className="ml-auto w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            </div>
                            <div className="bg-gray-800 rounded-xl p-3 flex items-center gap-3">
                              <MapPin className="h-5 w-5 text-blue-400" />
                              <div className="text-left">
                                <div className="text-xs text-gray-400">Location</div>
                                <div className="text-sm text-white font-bold">Sent to EMS</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {activeStep === 3 && (
                          <>
                            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-500/30">
                              <Phone className="h-10 w-10 text-white" />
                            </div>
                            <h3 className="text-white font-bold text-xl mb-1">Agent Active</h3>
                            <p className="text-green-400 text-sm">Help dispatched</p>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
