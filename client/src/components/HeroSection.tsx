import { Link } from "wouter";
import { motion } from "framer-motion";
import ResponsiveImage from "@/components/ResponsiveImage";
import { HeroHeading, HeroText, LabelText } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { trackLeadEvent } from "@/lib/metaPixel";

interface HeroSectionProps {
  label: string;
  title: React.ReactNode;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  showCta?: boolean;
  children?: React.ReactNode;
}

export default function HeroSection({
  label,
  title,
  description,
  imageSrc,
  imageAlt,
  ctaText = "START 7-DAY FREE TRIAL",
  ctaLink = "/pricing#pricing-plans",
  className,
  showCta = true,
  children
}: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-screen flex items-center bg-[#e8f5e9] pt-24 pb-20 overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
         <ResponsiveImage 
           src={imageSrc} 
           alt={imageAlt} 
           className="absolute inset-0 w-full h-full object-cover opacity-60"
           loading="eager"
           fetchPriority="high"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-[#e8f5e9] via-[#e8f5e9]/90 to-transparent z-10" />
      </div>

      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <LabelText variant="primary" className="mb-4 block">
            {label}
          </LabelText>
          <HeroHeading className="text-[#1a1a1a] mb-8">
            {title}
          </HeroHeading>
          <HeroText className="text-gray-800 mb-10 font-medium">
            {description}
          </HeroText>
          
          {children ? (
            children
          ) : showCta && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={ctaLink}
                onClick={trackLeadEvent}
                className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center" 
              >
                {ctaText}
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
