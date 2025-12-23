import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowRight } from "lucide-react";
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
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close expanded view when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setExpandedId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div ref={containerRef} className={cn("w-full py-10", className)}>
      <div className="flex flex-col lg:flex-row gap-6 overflow-x-auto pb-8 lg:pb-0 snap-x snap-mandatory scrollbar-hide">
        {items.map((item) => {
          const isExpanded = expandedId === item.id;
          
          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => !isExpanded && handleExpand(item.id)}
              className={cn(
                "relative rounded-[2rem] overflow-hidden cursor-pointer shrink-0 snap-center transition-all duration-500 ease-in-out group",
                isExpanded 
                  ? "w-full lg:w-[800px] h-[500px] lg:h-[600px] z-20" 
                  : "w-[300px] lg:w-[350px] h-[400px] lg:h-[500px] hover:w-[320px] lg:hover:w-[370px] z-10 opacity-90 hover:opacity-100"
              )}
              initial={{ borderRadius: "2rem" }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  isExpanded 
                    ? "bg-gradient-to-r from-black/80 via-black/40 to-transparent" 
                    : "bg-gradient-to-t from-black/80 via-transparent to-transparent"
                )} />
              </div>

              {/* Top Tag/Icon */}
              <div className="absolute top-6 left-6 z-20">
                {item.tag && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider">
                    {item.icon && <item.icon className="w-3 h-3" />}
                    {item.tag}
                  </div>
                )}
              </div>

              {/* Expand/Collapse Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleExpand(item.id);
                }}
                className="absolute top-6 right-6 z-30 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                {isExpanded ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </button>

              {/* Content */}
              <div className={cn(
                "absolute z-20 flex flex-col justify-end transition-all duration-500",
                isExpanded 
                  ? "inset-0 p-8 lg:p-12 items-start justify-center max-w-2xl" 
                  : "bottom-0 left-0 right-0 p-8"
              )}>
                <motion.h3 
                  layout="position"
                  className={cn(
                    "font-heading font-bold text-white mb-2 leading-tight",
                    isExpanded ? "text-4xl lg:text-5xl mb-6" : "text-2xl lg:text-3xl"
                  )}
                >
                  {item.title}
                  {item.subtitle && !isExpanded && (
                    <span className="block font-normal text-lg text-gray-300 mt-1 italic font-sans">
                      {item.subtitle}
                    </span>
                  )}
                </motion.h3>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
                        {item.description}
                      </p>
                      
                      {item.link && (
                        <Button 
                          className="bg-white text-black hover:bg-gray-100 rounded-full px-8 h-12 font-bold uppercase tracking-wider"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = item.link!;
                          }}
                        >
                          {item.ctaText || "Learn More"}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
