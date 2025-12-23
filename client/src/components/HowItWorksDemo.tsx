import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Watch, Smartphone, Phone, CheckCircle2, AlertTriangle, Bell, Timer, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowItWorksDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [timer, setTimer] = useState(30);

  const steps = [
    {
      id: 0,
      title: "Step 1: Fall Detected",
      description: "MySentry detects a fall and starts a 30-second timer.",
      icon: AlertTriangle,
      color: "text-orange-500",
      bgColor: "bg-orange-100"
    },
    {
      id: 1,
      title: "Step 2: User Response",
      description: "You have 30 seconds to confirm you're okay. If you're not, help will be triggered.",
      icon: Timer,
      color: "text-blue-500",
      bgColor: "bg-blue-100"
    },
    {
      id: 2,
      title: "Step 3: Panic Alarm Triggered",
      description: "If no response, the panic alarm is automatically activated.",
      icon: Bell,
      color: "text-red-500",
      bgColor: "bg-red-100"
    },
    {
      id: 3,
      title: "Step 4: Help Dispatched",
      description: "Your location, battery status, & live audio/video are shared with emergency contacts & the monitoring team.",
      icon: ShieldCheck,
      color: "text-green-600",
      bgColor: "bg-green-100"
    }
  ];

  // Auto-advance steps logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (activeStep === 1) {
      // Countdown timer for Step 2
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setActiveStep(2);
            return 30;
          }
          return prev - 1;
        });
      }, 100); // Speed up timer for demo purposes (100ms = 1s real time)
    } else {
      // Normal step transition
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
        if (activeStep === 0) setTimer(30); // Reset timer when loop restarts
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
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
              className="relative w-48 h-56 bg-gray-900 rounded-[2.5rem] border-4 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden shrink-0"
            >
              {/* Watch Strap Hints */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-t-xl -z-10" />
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-16 bg-gray-800 rounded-b-xl -z-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-black text-white"
                >
                  {activeStep === 0 && (
                    <>
                      <AlertTriangle className="h-12 w-12 text-orange-500 mb-2 animate-bounce" />
                      <h3 className="font-bold text-lg">FALL DETECTED</h3>
                    </>
                  )}
                  {activeStep === 1 && (
                    <>
                      <div className="text-4xl font-bold text-blue-500 mb-2">{timer}s</div>
                      <p className="text-sm text-gray-300">I'm OK</p>
                      <Button size="sm" className="mt-2 bg-gray-700 hover:bg-gray-600 text-xs h-8">Cancel</Button>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <Bell className="h-12 w-12 text-red-500 mb-2 animate-pulse" />
                      <h3 className="font-bold text-lg text-red-500">ALARM ACTIVE</h3>
                    </>
                  )}
                  {activeStep === 3 && (
                    <>
                      <Phone className="h-12 w-12 text-green-500 mb-2" />
                      <h3 className="font-bold text-lg text-green-500">HELP ON WAY</h3>
                      <p className="text-xs text-gray-400 mt-1">Agent Connected</p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
