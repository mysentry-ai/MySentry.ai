import { motion } from "framer-motion";
import { Check, Smartphone, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface GetStartedSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

export default function GetStartedSection({ 
  title = "Get Started in Minutes", 
  subtitle = "Three simple steps to 24/7 peace of mind.",
  ctaText = "Start Your Free Trial",
  ctaLink = "/pricing"
}: GetStartedSectionProps) {
  const steps = [
    {
      icon: Check,
      title: "Sign Up for Free Trial",
      description: "Start your 7-day free trial with no commitment. Cancel anytime.",
      color: "bg-[#6AD990]"
    },
    {
      icon: Smartphone,
      title: "Set Up Your Account",
      description: "Create your profile and download the MySentry mobile app.",
      color: "bg-[#386758]"
    },
    {
      icon: ShieldCheck,
      title: "Use MySentry",
      description: "Activate protection and start using safety features immediately.",
      color: "bg-[#004F7B]"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#1a1a1a] mb-6 uppercase tracking-tighter">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-serif italic">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-10 h-10 text-white" />
              </div>
              
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full">
                <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-bold mb-4">
                  Step {index + 1}
                </span>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href={ctaLink}>
            <Button 
              size="lg" 
              className="bg-[#1a1a1a] text-white hover:bg-black text-xl px-12 py-8 h-auto font-bold uppercase tracking-wider rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {ctaText}
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
