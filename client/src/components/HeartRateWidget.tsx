import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, Heart } from "lucide-react";

export default function HeartRateWidget() {
  const [heartRate, setHeartRate] = useState(72);
  const [history, setHistory] = useState<number[]>(Array(20).fill(72));

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        const newValue = Math.min(Math.max(prev + change, 60), 100);
        
        setHistory((prevHistory) => {
          const newHistory = [...prevHistory.slice(1), newValue];
          return newHistory;
        });
        
        return newValue;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate SVG path for the graph
  const getPath = () => {
    const max = 100;
    const min = 60;
    const range = max - min;
    const width = 100;
    const height = 40;
    
    const points = history.map((val, i) => {
      const x = (i / (history.length - 1)) * width;
      const y = height - ((val - min) / range) * height;
      return `${x},${y}`;
    });

    return `M ${points.join(" L ")}`;
  };

  return (
    <div className="bg-primary backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-primary/20 w-full max-w-xs">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-white/20 rounded-full">
            <Heart className="w-4 h-4 text-white fill-white animate-pulse" />
          </div>
          <span className="text-sm font-bold text-white !text-white" style={{ color: 'white' }}>Live Heart Rate</span>
        </div>
        <span className="text-2xl font-mono font-bold text-white !text-white" style={{ color: 'white' }}>{heartRate} <span className="text-xs text-white !text-white font-sans font-bold" style={{ color: 'white' }}>BPM</span></span>
      </div>
      
      <div className="relative h-12 w-full overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
          <path
            d={getPath()}
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d={`${getPath()} L 100,40 L 0,40 Z`}
            fill="url(#gradient)"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="flex justify-between mt-2 text-[10px] text-white/80 !text-white/80 font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.8)' }}>
        <span>Resting</span>
        <span>Active</span>
      </div>
    </div>
  );
}
