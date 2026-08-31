import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Bell, Phone, Activity, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

type AlertType = "panic" | "fall" | "crash" | "health";

interface AlertDemoProps {
  type: AlertType;
  className?: string;
}

export default function AlertDemo({ type, className = "" }: AlertDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const demoContent = {
    panic: {
      icon: Bell,
      color: "bg-red-500",
      title: "SOS Alert Sent",
      message: "Connecting to Agent...",
      action: "Cancel",
      sound: true
    },
    fall: {
      icon: AlertTriangle,
      color: "bg-orange-500",
      title: "Fall Detected",
      message: "Calling for help in 10s",
      action: "I'm OK",
      sound: true
    },
    crash: {
      icon: AlertTriangle,
      color: "bg-blue-600",
      title: "Crash Detected",
      message: "Sharing location with EMS",
      action: "I'm OK",
      sound: true
    },
    health: {
      icon: Activity,
      color: "bg-pink-500",
      title: "High Heart Rate",
      message: "140 BPM while resting",
      action: "Dismiss",
      sound: false
    }
  };

  const content = demoContent[type];
  const Icon = content.icon;

  return (
    <div className={`relative ${className}`}>
      {!isPlaying ? (
        <Button 
          onClick={() => setIsPlaying(true)}
          className="absolute bottom-6 right-6 z-20 bg-white/90 text-gray-900 hover:bg-white shadow-lg backdrop-blur-sm gap-2 font-bold uppercase tracking-wide rounded-full pl-4 pr-6 h-12"
        >
          <div className="bg-primary/10 p-1.5 rounded-full">
            <Play className="h-4 w-4 text-primary fill-primary" />
          </div>
          See Live Demo
        </Button>
      ) : (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-[3rem]">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white w-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900 relative"
          >
            {/* Simulated Phone UI */}
            <div className="bg-gray-900 text-white px-4 py-2 text-xs flex justify-between items-center">
              <span>9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-white rounded-full opacity-20"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="p-6 flex flex-col items-center text-center pt-10 pb-8">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className={`w-20 h-20 ${content.color} rounded-full flex items-center justify-center mb-6 shadow-xl`}
              >
                <Icon className="h-10 w-10 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{content.title}</h3>
              <p className="text-gray-500 text-sm mb-8">{content.message}</p>
              
              <div className="w-full space-y-3">
                <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 10, ease: "linear" }}
                    className={`h-full ${content.color}`}
                  />
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
                  className="w-full py-3 rounded-xl bg-gray-100 text-gray-900 font-bold text-sm hover:bg-gray-200 transition-colors"
                >
                  {content.action}
                </button>
              </div>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
              className="absolute top-2 right-2 p-2 text-white/50 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
