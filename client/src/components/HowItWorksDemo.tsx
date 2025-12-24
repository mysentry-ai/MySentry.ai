import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Bell, HeartPulse, Car, ShieldCheck, Phone, Activity, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

type ScenarioType = "fall" | "crash" | "panic" | "health";

export default function HowItWorksDemo() {
  const [activeScenario, setActiveScenario] = useState<ScenarioType>("fall");
  const [activeStep, setActiveStep] = useState(0);
  const [timer, setTimer] = useState(30);

  const scenarios = [
    { id: "fall", label: "Fall Detection", icon: AlertTriangle },
    { id: "crash", label: "Crash Detection", icon: Car },
    { id: "panic", label: "Panic Alarm", icon: Bell },
    { id: "health", label: "Health Monitoring", icon: HeartPulse },
  ];

  // Define steps for each scenario
  const getSteps = (scenario: ScenarioType) => {
    switch (scenario) {
      case "fall":
        return [
          {
            title: "Step 1: Fall Detected",
            description: "MySentry detects a fall and starts a 30-second timer.",
            icon: AlertTriangle,
            color: "text-orange-500",
            bgColor: "bg-orange-100"
          },
          {
            title: "Step 2: User Response",
            description: "You have 30 seconds to confirm you're okay. If you're not, help will be triggered.",
            icon: Timer,
            color: "text-blue-500",
            bgColor: "bg-blue-100"
          },
          {
            title: "Step 3: Panic Alarm Triggered",
            description: "If no response, the panic alarm is automatically activated.",
            icon: Bell,
            color: "text-red-500",
            bgColor: "bg-red-100"
          },
          {
            title: "Step 4: Help Dispatched",
            description: "Your location, battery status, & live audio/video are shared with emergency contacts & the monitoring team.",
            icon: ShieldCheck,
            color: "text-green-600",
            bgColor: "bg-green-100"
          }
        ];
      case "crash":
        return [
          {
            title: "Step 1: Crash Detected",
            description: "Sensors detect a high-impact collision instantly.",
            icon: Car,
            color: "text-red-500",
            bgColor: "bg-red-100"
          },
          {
            title: "Step 2: Check Driver Status",
            description: "We attempt to contact you immediately via the device.",
            icon: Phone,
            color: "text-blue-500",
            bgColor: "bg-blue-100"
          },
          {
            title: "Step 3: Emergency Alert",
            description: "If no response, emergency services are notified with your exact location.",
            icon: Bell,
            color: "text-orange-500",
            bgColor: "bg-orange-100"
          },
          {
            title: "Step 4: Help Arrives",
            description: "First responders are dispatched to the crash site.",
            icon: ShieldCheck,
            color: "text-green-600",
            bgColor: "bg-green-100"
          }
        ];
      case "panic":
        return [
          {
            title: "Step 1: SOS Triggered",
            description: "You press the SOS button or use a voice command.",
            icon: Bell,
            color: "text-red-500",
            bgColor: "bg-red-100"
          },
          {
            title: "Step 2: Instant Connection",
            description: "No waiting. You are immediately connected to an agent.",
            icon: Phone,
            color: "text-blue-500",
            bgColor: "bg-blue-100"
          },
          {
            title: "Step 3: Live Monitoring",
            description: "Agent listens in and views live video/location.",
            icon: Activity,
            color: "text-purple-500",
            bgColor: "bg-purple-100"
          },
          {
            title: "Step 4: Help Dispatched",
            description: "Police or EMS are sent to your location immediately.",
            icon: ShieldCheck,
            color: "text-green-600",
            bgColor: "bg-green-100"
          }
        ];
      case "health":
        return [
          {
            title: "Step 1: Vitals Monitored",
            description: "Continuous tracking of heart rate and oxygen levels.",
            icon: HeartPulse,
            color: "text-pink-500",
            bgColor: "bg-pink-50"
          },
          {
            title: "Step 2: Anomaly Detected",
            description: "Irregular heart rate or low oxygen detected.",
            icon: Activity,
            color: "text-orange-500",
            bgColor: "bg-orange-50"
          },
          {
            title: "Step 3: User Alert",
            description: "You receive a notification to check your status.",
            icon: Bell,
            color: "text-blue-500",
            bgColor: "bg-blue-50"
          },
          {
            title: "Step 4: Professional Review",
            description: "If critical, our medical team reviews data and contacts you.",
            icon: ShieldCheck,
            color: "text-green-600",
            bgColor: "bg-green-50"
          }
        ];
    }
  };

  const currentSteps = getSteps(activeScenario);

  // Auto-advance steps logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    // Special logic for Fall Detection timer
    if (activeScenario === "fall" && activeStep === 1) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setActiveStep(2);
            return 30;
          }
          return prev - 1;
        });
      }, 100); // Speed up timer for demo
    } else {
      // Normal step transition for all scenarios
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % currentSteps.length);
        if (activeStep === 0) setTimer(30); // Reset timer when loop restarts
      }, 3000); // 3 seconds per step
    }

    return () => clearInterval(interval);
  }, [activeStep, activeScenario, currentSteps.length]);

  const handleScenarioChange = (id: ScenarioType) => {
    setActiveScenario(id);
    setActiveStep(0);
    setTimer(30);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          {/* Scenario Tabs */}
          <div className="flex flex-wrap justify-center gap-4 p-8 border-b border-gray-100 bg-white">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => handleScenarioChange(scenario.id as ScenarioType)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${
                  activeScenario === scenario.id 
                    ? "bg-[#66d48f] text-white shadow-lg scale-105" 
                    : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <scenario.icon className="h-4 w-4" />
                {scenario.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2">
            {/* Left Side: Steps List */}
            <div className="p-8 md:p-12 bg-white flex flex-col justify-center relative z-10 order-2 lg:order-1">
              <div className="space-y-4">
                {currentSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-6 p-6 rounded-3xl transition-all duration-500 ${
                      activeStep === index 
                        ? "bg-white shadow-lg border border-gray-100 transform scale-100 z-10" 
                        : "opacity-40 scale-95"
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
            <div className="relative bg-[#e8f5e9] p-8 md:p-12 flex items-center justify-center overflow-hidden min-h-[500px] order-1 lg:order-2">
              {/* Background Pulse */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-[500px] h-[500px] bg-[#66d48f]/20 rounded-full blur-3xl"
                />
              </div>

              <div className="flex items-center justify-center gap-8 relative z-10">
                {/* WATCH DEVICE */}
                <motion.div 
                  className="relative w-56 h-64 bg-black rounded-[2.5rem] border-4 border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden shrink-0"
                >
                  {/* Watch Strap Hints */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-16 bg-gray-800 rounded-t-xl -z-10" />
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-28 h-16 bg-gray-800 rounded-b-xl -z-10" />
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeScenario}-${activeStep}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-black text-white"
                    >
                      {/* DYNAMIC WATCH CONTENT BASED ON SCENARIO */}
                      
                      {/* FALL DETECTION */}
                      {activeScenario === "fall" && (
                        <>
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
                              <h3 className="font-bold text-lg text-red-500">ALARM SENT</h3>
                              <p className="text-xs text-gray-400 mt-1">Contacting...</p>
                            </>
                          )}
                          {activeStep === 3 && (
                            <>
                              <ShieldCheck className="h-12 w-12 text-green-500 mb-2" />
                              <h3 className="font-bold text-lg text-green-500">HELP ON WAY</h3>
                              <p className="text-xs text-gray-400 mt-1">Live Video Active</p>
                            </>
                          )}
                        </>
                      )}

                      {/* CRASH DETECTION */}
                      {activeScenario === "crash" && (
                        <>
                          {activeStep === 0 && (
                            <>
                              <Car className="h-12 w-12 text-red-500 mb-2 animate-pulse" />
                              <h3 className="font-bold text-lg">CRASH DETECTED</h3>
                            </>
                          )}
                          {activeStep === 1 && (
                            <>
                              <Phone className="h-12 w-12 text-blue-500 mb-2 animate-bounce" />
                              <h3 className="font-bold text-lg">CHECKING IN</h3>
                              <p className="text-xs text-gray-400 mt-1">Are you okay?</p>
                            </>
                          )}
                          {activeStep === 2 && (
                            <>
                              <Bell className="h-12 w-12 text-orange-500 mb-2 animate-pulse" />
                              <h3 className="font-bold text-lg text-orange-500">ALERTING EMS</h3>
                              <p className="text-xs text-gray-400 mt-1">Sending Location...</p>
                            </>
                          )}
                          {activeStep === 3 && (
                            <>
                              <ShieldCheck className="h-12 w-12 text-green-500 mb-2" />
                              <h3 className="font-bold text-lg text-green-500">HELP SENT</h3>
                              <p className="text-xs text-gray-400 mt-1">EMS Dispatched</p>
                            </>
                          )}
                        </>
                      )}

                      {/* PANIC ALARM */}
                      {activeScenario === "panic" && (
                        <>
                          {activeStep === 0 && (
                            <>
                              <Bell className="h-12 w-12 text-red-500 mb-2 animate-pulse" />
                              <h3 className="font-bold text-lg">SOS TRIGGERED</h3>
                            </>
                          )}
                          {activeStep === 1 && (
                            <>
                              <Phone className="h-12 w-12 text-blue-500 mb-2 animate-bounce" />
                              <h3 className="font-bold text-lg">CONNECTING...</h3>
                            </>
                          )}
                          {activeStep === 2 && (
                            <>
                              <Activity className="h-12 w-12 text-purple-500 mb-2 animate-pulse" />
                              <h3 className="font-bold text-lg text-purple-500">LIVE MONITORING</h3>
                              <p className="text-xs text-gray-400 mt-1">Agent Listening</p>
                            </>
                          )}
                          {activeStep === 3 && (
                            <>
                              <ShieldCheck className="h-12 w-12 text-green-500 mb-2" />
                              <h3 className="font-bold text-lg text-green-500">POLICE SENT</h3>
                              <p className="text-xs text-gray-400 mt-1">Location Shared</p>
                            </>
                          )}
                        </>
                      )}

                      {/* HEALTH MONITORING */}
                      {activeScenario === "health" && (
                        <>
                          {activeStep === 0 && (
                            <>
                              <HeartPulse className="h-12 w-12 text-pink-500 mb-2 animate-pulse" />
                              <h3 className="font-bold text-lg">MONITORING</h3>
                              <p className="text-xs text-gray-400 mt-1">HR: 72 BPM</p>
                            </>
                          )}
                          {activeStep === 1 && (
                            <>
                              <Activity className="h-12 w-12 text-white mb-2" />
                              <h3 className="font-bold text-lg text-white">ALERT</h3>
                              <p className="text-xs text-white mt-1">Irregular Rhythm</p>
                            </>
                          )}
                          {activeStep === 2 && (
                            <>
                              <Bell className="h-12 w-12 text-blue-500 mb-2 animate-bounce" />
                              <h3 className="font-bold text-lg text-blue-500">CHECK STATUS</h3>
                              <p className="text-xs text-gray-400 mt-1">Notification Sent</p>
                            </>
                          )}
                          {activeStep === 3 && (
                            <>
                              <ShieldCheck className="h-12 w-12 text-green-500 mb-2" />
                              <h3 className="font-bold text-lg text-green-500">REVIEWING</h3>
                              <p className="text-xs text-gray-400 mt-1">Medical Team Notified</p>
                            </>
                          )}
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
