import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeartRateWidget from "./HeartRateWidget";

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
  widget?: "heart-rate" | "none";
}

interface ExpandableCarouselProps {
  items: CarouselItem[];
  className?: string;
}

export default function ExpandableCarousel({ items, className }: ExpandableCarouselProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className={cn("w-full py-10", className)}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1400px] mx-auto px-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            className="relative group cursor-pointer overflow-hidden rounded-3xl bg-gray-900 shadow-xl min-h-[400px]"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Image */}
            <motion.img
              layoutId={`image-${item.id}`}
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

            {/* Top UI Elements */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
              {item.tag && (
                <motion.span 
                  layoutId={`tag-${item.id}`}
                  className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider"
                >
                  {item.tag}
                </motion.span>
              )}
              <motion.div 
                layoutId={`btn-${item.id}`}
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black shadow-lg"
              >
                <Plus className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <motion.h3 
                layoutId={`title-${item.id}`}
                className="text-3xl font-heading font-bold text-white leading-[0.9] mb-3 drop-shadow-lg"
              >
                {item.title}
              </motion.h3>
              <motion.p 
                layoutId={`subtitle-${item.id}`}
                className="text-white/80 font-serif italic text-base leading-snug drop-shadow-md"
              >
                {item.subtitle}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative w-full max-w-6xl h-[90vh] bg-[#f3f1eb] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(null);
                }}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center transition-colors shadow-lg border border-white/20"
              >
                <X className="w-6 h-6 text-black" />
              </button>

              {/* Left: Image Section */}
              <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
                <motion.img
                  layoutId={`image-${selectedId}`}
                  src={items.find(i => i.id === selectedId)?.image}
                  alt="Feature"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                
                {/* Widget Overlay */}
                {items.find(i => i.id === selectedId)?.widget === "heart-rate" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-8 left-8 right-8 md:right-auto md:w-80 z-20"
                  >
                    <HeartRateWidget />
                  </motion.div>
                )}
              </div>

              {/* Right: Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#f3f1eb] text-[#1a1a1a] overflow-y-auto">
                <motion.div layoutId={`tag-${selectedId}`} className="self-start mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-black/60 text-xs font-bold uppercase tracking-wider">
                    {items.find(i => i.id === selectedId)?.tag}
                  </span>
                </motion.div>

                <motion.h3 
                  layoutId={`title-${selectedId}`}
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#1a1a1a] leading-[0.95] mb-4"
                >
                  {items.find(i => i.id === selectedId)?.title}
                </motion.h3>

                <motion.p 
                  layoutId={`subtitle-${selectedId}`}
                  className="text-xl md:text-2xl font-serif italic text-gray-500 mb-8"
                >
                  {items.find(i => i.id === selectedId)?.subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="prose prose-lg text-gray-700 leading-relaxed mb-10">
                    <p>{items.find(i => i.id === selectedId)?.description}</p>
                  </div>

                  <Button 
                    className="bg-[#1a1a1a] text-white hover:bg-black rounded-full px-8 h-14 text-lg font-bold uppercase tracking-wider w-full md:w-auto shadow-xl transition-transform hover:scale-105"
                    onClick={() => window.location.href = items.find(i => i.id === selectedId)?.link || '#'}
                  >
                    {items.find(i => i.id === selectedId)?.ctaText || "Learn More"}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
