import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CarouselItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  icon?: React.ElementType;
  tag?: string;
  link?: string;
  ctaText?: string;
}

interface ExpandableCarouselProps {
  items: CarouselItem[];
  className?: string;
}

export default function ExpandableCarousel({ items, className }: ExpandableCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  return (
    <div 
      className={cn("w-full py-10", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full max-w-6xl mx-auto h-[600px] overflow-hidden rounded-[3rem] shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <img 
              src={items[activeIndex].image} 
              alt={items[activeIndex].title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center p-12 md:p-24 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {items[activeIndex].tag && (
                  <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6">
                    {items[activeIndex].tag}
                  </span>
                )}
                
                <h3 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">
                  {items[activeIndex].title}
                </h3>
                
                <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                  {items[activeIndex].description}
                </p>
                
                {items[activeIndex].link && (
                  <Button 
                    className="bg-white text-black hover:bg-gray-100 rounded-full px-8 h-14 text-lg font-bold uppercase tracking-wider"
                    onClick={() => window.location.href = items[activeIndex].link!}
                  >
                    {items[activeIndex].ctaText || "Learn More"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex ? "w-12 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
