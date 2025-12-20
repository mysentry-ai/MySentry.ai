import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, AlertTriangle, Phone, CheckCircle2, MapPin, Video, Shield, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SafetySimulation() {
  const [status, setStatus] = useState<"idle" | "detecting" | "alerting" | "connected">("idle");
  const [activeScenario, setActiveScenario] = useState<"fall" | "panic" | null>(null);
  const [progress, setProgress] = useState(0);

  const startSimulation = (scenario: "fall" | "panic") => {
    setStatus("detecting");
    setActiveScenario(scenario);
    setProgress(0);
  };

  const resetSimulation = () => {
    setStatus("idle");
    setActiveScenario(null);
    setProgress(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (status === "detecting") {
      timer = setTimeout(() => {
        setStatus("alerting");
      }, 1500);
    } else if (status === "alerting") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setStatus("connected");
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    }

    return () => clearTimeout(timer);
  }, [status]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
            Interactive Demo
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1a1a1a] mb-6">
            See MySentry in Action
          </h2>
          <p className="text-xl text-gray-600">
            Experience how our system responds in seconds when you need help the most.
            Click a button below to simulate an emergency.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-2xl relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Controls */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a]">1. Choose a Scenario</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => startSimulation("fall")}
                    disabled={status !== "idle"}
                    className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 group ${
                      activeScenario === "fall"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200 bg-white hover:border-red-200 hover:shadow-lg"
                    } ${status !== "idle" && activeScenario !== "fall" ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 transition-colors ${
                      activeScenario === "fall" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600 group-hover:bg-red-50 group-hover:text-red-500"
                    }`}>
                      <Activity className="h-6 w-6" />
                    </div>
                    <div className="font-bold text-lg text-[#1a1a1a] mb-1">Simulate Fall</div>
                    <div className="text-sm text-gray-500">Hard impact detected</div>
                  </button>

                  <button
                    onClick={() => startSimulation("panic")}
                    disabled={status !== "idle"}
                    className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 group ${
                      activeScenario === "panic"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 bg-white hover:border-orange-200 hover:shadow-lg"
                    } ${status !== "idle" && activeScenario !== "panic" ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-4 transition-colors ${
                      activeScenario === "panic" ? "bg-orange-100 text-orange-600" : "bg-gray-100 text-gray-600 group-hover:bg-orange-50 group-hover:text-orange-500"
                    }`}>
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <div className="font-bold text-lg text-[#1a1a1a] mb-1">Panic Alert</div>
                    <div className="text-sm text-gray-500">Manual SOS trigger</div>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1a1a1a]">2. System Response</h3>
                <div className="space-y-3">
                  <ResponseStep 
                    active={status !== "idle"} 
                    completed={status === "alerting" || status === "connected"}
                    icon={Shield}
                    label="Event Detected"
                    desc="Sensors identify emergency instantly"
                  />
                  <ResponseStep 
                    active={status === "alerting" || status === "connected"} 
                    completed={status === "connected"}
                    icon={MapPin}
                    label="Data Transmitted"
                    desc="Location & Vitals sent to cloud"
                  />
                  <ResponseStep 
                    active={status === "connected"} 
                    completed={status === "connected"}
                    icon={Phone}
                    label="Agent Connected"
                    desc="Live voice & video link established"
                  />
                </div>
              </div>

              {status === "connected" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Button 
                    onClick={resetSimulation}
                    className="w-full h-14 rounded-xl text-lg font-bold bg-[#1a1a1a] text-white hover:bg-black shadow-lg"
                  >
                    Reset Simulation
                  </Button>
                </motion.div>
              )}
            </div>

            {/* Visualizer */}
            <div className="relative h-[500px] bg-[#1a1a1a] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#1a1a1a]">
              {/* Map Background */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(#4ade80_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
              </div>

              {/* Central Device */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.div
                      key="idle"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="text-center"
                    >
                      <div className="h-24 w-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <Shield className="h-10 w-10 text-primary" />
                      </div>
                      <p className="text-white/60 font-mono text-sm">SYSTEM ARMED</p>
                      <p className="text-white/40 text-xs mt-1">Monitoring active...</p>
                    </motion.div>
                  )}

                  {status === "detecting" && (
                    <motion.div
                      key="detecting"
                      initial={{ scale: 1.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      className="text-center"
                    >
                      <div className={`h-32 w-32 rounded-full flex items-center justify-center mx-auto mb-6 ${
                        activeScenario === "fall" ? "bg-red-500/20" : "bg-orange-500/20"
                      }`}>
                        <div className={`h-24 w-24 rounded-full flex items-center justify-center animate-ping ${
                          activeScenario === "fall" ? "bg-red-500" : "bg-orange-500"
                        }`}>
                          {activeScenario === "fall" ? (
                            <Activity className="h-10 w-10 text-white" />
                          ) : (
                            <AlertTriangle className="h-10 w-10 text-white" />
                          )}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {activeScenario === "fall" ? "FALL DETECTED" : "PANIC ALERT"}
                      </h3>
                      <p className="text-white/60">Analyzing sensor data...</p>
                    </motion.div>
                  )}

                  {(status === "alerting" || status === "connected") && (
                    <motion.div
                      key="alerting"
                      className="w-full h-full flex flex-col"
                    >
                      {/* Header */}
                      <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#1a1a1a]/90 backdrop-blur-md z-20">
                        <div className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-white font-bold tracking-wider text-sm">LIVE EMERGENCY</span>
                        </div>
                        <div className="text-white/60 font-mono text-xs">ID: #8829-A</div>
                      </div>

                      {/* Map View */}
                      <div className="flex-1 relative">
                        {/* Radar Scan Effect */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-64 w-64 border border-primary/30 rounded-full animate-[ping_2s_linear_infinite]" />
                          <div className="h-48 w-48 border border-primary/40 rounded-full animate-[ping_2s_linear_infinite_0.5s]" />
                        </div>
                        
                        {/* User Location */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="relative">
                            <div className="h-4 w-4 bg-blue-500 rounded-full border-2 border-white shadow-lg z-10 relative" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 bg-blue-500/30 rounded-full animate-pulse" />
                            
                            {/* Connection Line */}
                            <svg className="absolute top-2 left-2 w-32 h-32 overflow-visible">
                              <path 
                                d="M 0 0 L 80 -60" 
                                stroke="#22c55e" 
                                strokeWidth="2" 
                                strokeDasharray="4 4"
                                className="animate-[dash_1s_linear_infinite]"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* Agent Card */}
                        <motion.div 
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 w-48"
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden border-2 border-green-500">
                              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Agent" />
                            </div>
                            <div>
                              <div className="text-white text-sm font-bold">Agent Sarah</div>
                              <div className="text-green-400 text-[10px] font-bold">CONNECTED</div>
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 w-3/4 animate-pulse" />
                            </div>
                            <div className="flex justify-between text-[10px] text-white/60">
                              <span>Voice</span>
                              <span>Video</span>
                              <span>Vitals</span>
                            </div>
                          </div>
                        </motion.div>

                        {/* Vitals Card */}
                        <motion.div 
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 w-48"
                        >
                          <div className="flex items-center gap-2 mb-2 text-white/80 text-xs font-bold uppercase">
                            <HeartPulse className="h-3 w-3 text-red-500" />
                            Live Vitals
                          </div>
                          <div className="flex justify-between items-end">
                            <div>
                              <div className="text-2xl font-bold text-white">118</div>
                              <div className="text-[10px] text-white/60">BPM</div>
                            </div>
                            <div className="h-8 w-20 flex items-end gap-1">
                              {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                                <div key={i} style={{ height: `${h}%` }} className="w-full bg-red-500/50 rounded-sm" />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResponseStep({ active, completed, icon: Icon, label, desc }: { active: boolean; completed: boolean; icon: any; label: string; desc: string }) {
  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
      active ? "bg-white shadow-md border border-primary/10 scale-105" : "bg-transparent opacity-50"
    }`}>
      <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-500 ${
        completed ? "bg-green-100 text-green-600" : active ? "bg-primary/10 text-primary" : "bg-gray-100 text-gray-400"
      }`}>
        {completed ? <CheckCircle2 className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
      </div>
      <div>
        <div className={`font-bold text-sm transition-colors duration-500 ${active ? "text-[#1a1a1a]" : "text-gray-400"}`}>
          {label}
        </div>
        <div className="text-xs text-gray-500">{desc}</div>
      </div>
    </div>
  );
}
