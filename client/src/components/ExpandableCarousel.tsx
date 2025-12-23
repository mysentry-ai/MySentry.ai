import { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
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
  const [direction, setDirection] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 5000); // Increased to 5s for better readability

    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      setDirection(-1);
      setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (info.offset.x < -100) {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % items.length);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <div 
      className={cn("w-full py-10", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full max-w-6xl mx-auto h-[600px] overflow-hidden rounded-[3rem] shadow-2xl bg-black">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          >
            {/* Background Image */}
            <img 
              src={items[activeIndex].image} 
              alt={items[activeIndex].title} 
              className="w-full h-full object-cover"
            />
            
            {/* Enhanced Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center p-12 md:p-24 max-w-3xl pointer-events-none">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="space-y-6"
              >
                {items[activeIndex].tag && (
                  <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                    {items[activeIndex].tag}
                  </span>
                )}
                
                <h3 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[0.9] drop-shadow-2xl">
                  {items[activeIndex].title}
                </h3>
                
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-xl drop-shadow-md font-medium">
                  {items[activeIndex].description}
                </p>
                
                {items[activeIndex].link && (
                  <div className="pt-4 pointer-events-auto">
                    <Button 
                      className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-14 text-lg font-bold uppercase tracking-wider shadow-xl transition-transform hover:scale-105"
                      onClick={() => window.location.href = items[activeIndex].link!}
                    >
                      {items[activeIndex].ctaText || "Learn More"}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
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
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300 shadow-lg",
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
