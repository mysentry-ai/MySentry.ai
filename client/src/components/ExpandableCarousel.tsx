import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import HeartRateWidget from "./HeartRateWidget";

export interface CarouselItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag?: string;
  link?: string;
  ctaText?: string;
  icon?: any;
  widget?: "heart-rate" | "map" | "none";
}

interface ExpandableCarouselProps {
  items: CarouselItem[];
}

export default function ExpandableCarousel({ items }: ExpandableCarouselProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [, setLocation] = useLocation();

  // Check scroll position to toggle arrow visibility
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      // Initial check
      checkScroll();
      // Check on resize
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340; // Approximate card width + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleLinkClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation();
    e.preventDefault();
    
    // Parse the link to check for hash
    const [path, hash] = link.split('#');
    
    // Navigate to the path
    setLocation(path);
    
    // If there's a hash, we need to handle scrolling after navigation
    if (hash) {
      // Small timeout to allow page transition to complete
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="relative group">
      {/* Left Navigation Arrow */}
      <button
        onClick={() => scroll("left")}
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-4 md:-ml-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none",
          canScrollLeft ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 pointer-events-none"
        )}
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={() => scroll("right")}
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-4 md:-mr-12 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none",
          canScrollRight ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        )}
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 pb-12 pt-4 px-4 snap-x snap-mandatory scrollbar-hide -mx-4 md:mx-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => handleCardClick(item.id)}
            className={cn(
              "relative flex-shrink-0 rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-500 snap-center",
              expandedId === item.id 
                ? "w-[85vw] md:w-[600px] h-[500px] md:h-[600px]" 
                : "w-[280px] md:w-[320px] h-[400px] md:h-[450px] hover:shadow-xl"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className={cn(
                "absolute inset-0 transition-opacity duration-500",
                expandedId === item.id 
                  ? "bg-black/60" 
                  : "bg-gradient-to-b from-black/10 via-transparent to-black/80"
              )} />
            </div>

            {/* Content Container */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white">
              {/* Top Section */}
              <div className="flex justify-between items-start">
                {item.tag && (
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider border border-white/10">
                    {item.tag}
                  </span>
                )}
                <button
                  className={cn(
                    "w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transition-transform duration-300 hover:bg-white/30",
                    expandedId === item.id ? "rotate-45" : "rotate-0"
                  )}
                >
                  <Plus className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Bottom Section */}
              <div className="relative z-10">
                <motion.h3 
                  layoutId={`title-${item.id}`}
                  className={cn(
                    "font-heading font-bold leading-tight mb-2",
                    expandedId === item.id ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                  )}
                >
                  {item.title}
                </motion.h3>
                
                <AnimatePresence>
                  {expandedId === item.id ? (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                        {item.description}
                      </p>
                      
                      {item.widget === "heart-rate" && (
                        <div className="mb-6">
                          <HeartRateWidget />
                        </div>
                      )}

                      {item.link && (
                        <button 
                          className="bg-white hover:bg-gray-100 rounded-full px-8 py-3 font-bold uppercase tracking-wider text-black flex items-center gap-2 transition-colors"
                          style={{ color: "#000000", opacity: 1 }}
                          onClick={(e) => handleLinkClick(e, item.link!)}
                        >
                          <span className="text-black font-bold" style={{ color: "#000000" }}>{item.ctaText || "Learn More"}</span>
                          <ArrowRight className="ml-2 w-4 h-4 text-black" style={{ color: "#000000" }} />
                        </button>
                      )}
                    </motion.div>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-gray-300 font-medium line-clamp-2"
                    >
                      {item.subtitle}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
