import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Watch, Smartphone, Server, Phone, CheckCircle2, AlertTriangle, Activity } from "lucide-react";

export default function HowItWorksDemo() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Detection",
      description: "Smartwatch detects a fall, crash, or health anomaly.",
      icon: Watch,
      color: "text-orange-500",
      bgColor: "bg-orange-100",
      alert: true
    },
    {
      id: 1,
      title: "Analysis",
      description: "AI analyzes data instantly to confirm the emergency.",
      icon: Smartphone,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      alert: false
    },
    {
      id: 2,
      title: "Connection",
      description: "System connects to 24/7 Monitoring Center.",
      icon: Server,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
      alert: false
    },
    {
      id: 3,
      title: "Response",
      description: "Agent speaks to you and dispatches help.",
      icon: Phone,
      color: "text-green-600",
      bgColor: "bg-green-100",
      alert: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
      <div className="grid lg:grid-cols-2">
        {/* Left Side: Steps List */}
        <div className="p-12 bg-gray-50 flex flex-col justify-center">
          <h3 className="text-3xl font-heading font-bold uppercase mb-8 text-[#1a1a1a]">
            How Protection Works
          </h3>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 ${
                  activeStep === index 
                    ? "bg-white shadow-lg scale-105 border border-gray-100" 
                    : "opacity-50 hover:opacity-80"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`p-3 rounded-full ${step.bgColor}`}>
                  <step.icon className={`h-6 w-6 ${step.color}`} />
                </div>
                <div>
                  <h4 className={`font-bold text-lg ${activeStep === index ? "text-[#1a1a1a]" : "text-gray-500"}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-tight">
                    {step.description}
                  </p>
                </div>
                {activeStep === index && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="ml-auto"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Simulation */}
        <div className="relative bg-[#e8f5e9] p-12 flex items-center justify-center overflow-hidden">
          {/* Background Pulse Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-96 h-96 bg-primary/20 rounded-full blur-3xl"
            />
          </div>

          {/* Device Mockup */}
          <div className="relative z-10 w-64 h-[500px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col items-center justify-center p-6 text-center"
              >
                {/* Dynamic Content based on Step */}
                {activeStep === 0 && (
                  <>
                    <div className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center mb-6 animate-pulse">
                      <AlertTriangle className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Fall Detected!</h3>
                    <p className="text-gray-400 text-sm">Analyzing movement patterns...</p>
                  </>
                )}

                {activeStep === 1 && (
                  <>
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                      <Activity className="h-12 w-12 text-white animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Verifying...</h3>
                    <p className="text-gray-400 text-sm">AI confirming emergency status</p>
                  </>
                )}

                {activeStep === 2 && (
                  <>
                    <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center mb-6">
                      <Server className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Connecting...</h3>
                    <p className="text-gray-400 text-sm">Sending GPS & Health Data</p>
                    <div className="mt-4 flex gap-2 justify-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                      <span className="text-xs text-green-500">Data Encrypted</span>
                    </div>
                  </>
                )}

                {activeStep === 3 && (
                  <>
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6">
                      <Phone className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Agent Active</h3>
                    <p className="text-gray-400 text-sm">"This is MySentry. Help is on the way."</p>
                    <div className="mt-6 bg-white/10 px-4 py-2 rounded-full">
                      <span className="text-xs text-white font-mono">00:12</span>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
