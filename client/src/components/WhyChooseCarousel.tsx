import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, DollarSign, Users, TrendingUp, Clock, Shield } from "lucide-react";

const slides = [
  {
    id: 1,
    icon: DollarSign,
    color: "red",
    title: "Downtime costs explode.",
    description: "One workplace injury = lost productivity, medical costs, workers' comp claims, and replacement worker expenses. Average cost: $47,000 per incident."
  },
  {
    id: 2,
    icon: Users,
    color: "orange",
    title: "Retention plummets.",
    description: "Employees who don't feel protected leave. Replacing a single employee costs 50-200% of their salary. Your best people walk out the door."
  },
  {
    id: 3,
    icon: TrendingUp,
    color: "blue",
    title: "Insurance premiums rise.",
    description: "More claims = higher premiums. Fewer incidents = lower rates. MySentry reduces both the incidents and the claims."
  },
  {
    id: 4,
    icon: Clock,
    color: "purple",
    title: "Lone Worker Risks.",
    description: "Employees working alone are vulnerable. Automated Check-ins ensure they are safe without constant supervision."
  },
  {
    id: 5,
    icon: Shield,
    color: "indigo",
    title: "Liability Concerns.",
    description: "\"Did we do enough?\" Family Connectivity automatically logs location and safety status, providing a digital paper trail that proves your duty of care."
  }
];

export default function WhyChooseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const CurrentIcon = slides[currentIndex].icon;

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="relative h-[400px] md:h-[300px] overflow-hidden rounded-[2.5rem] bg-white shadow-xl border border-gray-100">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-8 md:p-12 gap-8"
          >
            <div className={`shrink-0 h-24 w-24 rounded-3xl bg-${slides[currentIndex].color}-100 flex items-center justify-center shadow-inner`}>
              <CurrentIcon className={`h-12 w-12 text-${slides[currentIndex].color}-600`} />
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {slides[currentIndex].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {slides[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10 border border-gray-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10 border border-gray-100"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "bg-primary w-8" 
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
