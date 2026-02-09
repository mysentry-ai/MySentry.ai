import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  fullStory: string;
  image: string;
  video?: string;
  type: "image" | "video";
}

const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "Solo Traveler",
    quote: "MySentry gave me the confidence to explore the world alone.",
    fullStory: "I've always loved solo travel, but my family worried constantly. With MySentry, they can see I'm safe without me having to check in every hour. The panic button feature gives me peace of mind knowing help is just a press away, no matter where I am.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
    type: "image"
  },
  {
    id: "t2",
    name: "David Chen",
    role: "Marathon Runner",
    quote: "It detected my irregular heart rate before I even felt it.",
    fullStory: "During a long training run, my watch alerted me to an unusually high heart rate. I stopped, and within minutes, I felt dizzy. MySentry's health monitoring potentially saved me from a serious cardiac event. I never run without it now.",
    image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&w=2674&auto=format&fit=crop",
    video: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663247484611/DqfaRstTboxXTXIz.mp4",
    type: "video"
  },
  {
    id: "t3",
    name: "Emily & Tom",
    role: "New Parents",
    quote: "The peace of mind for our latchkey kid is priceless.",
    fullStory: "Our son walks home from school, and the anxiety was overwhelming. Now, we get a notification when he leaves school and when he arrives home. The live video check-in lets us see he's safe inside. It's changed our lives.",
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=2535&auto=format&fit=crop",
    type: "image"
  },
  {
    id: "t4",
    name: "Robert Wilson",
    role: "Senior Living Independently",
    quote: "I can stay in my own home without being a burden.",
    fullStory: "I didn't want to move to a facility, but my falls were a concern. MySentry's fall detection is so accurate, and the fact that it alerts my daughter only when necessary preserves my dignity and independence. It's the best companion I could ask for.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop",
    type: "image"
  }
];

export default function TestimonialSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#f3f1eb]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#232020] mb-6 uppercase tracking-tighter">
            Stories of Safety
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic">
            Real people, real protection. See how MySentry changes lives every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-[600px]">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              layoutId={`card-${testimonial.id}`}
              onClick={() => setSelectedId(testimonial.id)}
              className="relative group cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              {/* Background Image */}
              <motion.img
                layoutId={`image-${testimonial.id}`}
                src={testimonial.image}
                alt={testimonial.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {testimonial.type === "video" && (
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-5 h-5 text-white fill-white" />
                  </div>
                )}
                
                <motion.div layoutId={`content-${testimonial.id}`}>
                  <Quote className="w-8 h-8 text-[#6AD990] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0" />
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    "{testimonial.quote}"
                  </h3>
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-[1px] w-8 bg-[#6AD990]" />
                    <p className="text-sm font-bold text-white/90 uppercase tracking-wider">
                      {testimonial.name}
                    </p>
                  </div>
                  <p className="text-xs text-white/60 mt-1 ml-10">
                    {testimonial.role}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Modal */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              />
              
              <motion.div
                layoutId={`card-${selectedId}`}
                className="relative w-full max-w-5xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(null);
                  }}
                  className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/10 hover:bg-black/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-black" />
                </button>

                {/* Media Side */}
                <div className="w-full md:w-3/5 relative bg-black h-[40vh] md:h-auto">
                  {testimonials.find(t => t.id === selectedId)?.type === "video" ? (
                    <video
                      autoPlay
                      controls
                      className="w-full h-full object-cover"
                      src={testimonials.find(t => t.id === selectedId)?.video}
                    />
                  ) : (
                    <motion.img
                      layoutId={`image-${selectedId}`}
                      src={testimonials.find(t => t.id === selectedId)?.image}
                      alt="Testimonial"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                  <motion.div layoutId={`content-${selectedId}`}>
                    <Quote className="w-12 h-12 text-[#386758] mb-6" />
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#232020] mb-6 leading-tight">
                      "{testimonials.find(t => t.id === selectedId)?.quote}"
                    </h3>
                    <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed">
                      <p>{testimonials.find(t => t.id === selectedId)?.fullStory}</p>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-lg font-bold text-[#232020]">
                        {testimonials.find(t => t.id === selectedId)?.name}
                      </p>
                      <p className="text-sm text-[#386758] font-medium uppercase tracking-wide">
                        {testimonials.find(t => t.id === selectedId)?.role}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
