import { Link } from "wouter";
import { motion } from "framer-motion";
import { HeroHeading, HeroText, LabelText } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { trackLeadEvent } from "@/lib/metaPixel";

interface HeroSectionProps {
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
  showCta?: boolean;
  children?: React.ReactNode;
  /** Optional phone mockup image shown on the right side of the hero */
  phoneMockupSrc?: string;
  phoneMockupAlt?: string;
}

export default function HeroSection({
  label,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  ctaText = "START 7-DAY FREE TRIAL",
  ctaLink = "/pricing#pricing-plans",
  className,
  showCta = true,
  children,
  phoneMockupSrc,
  phoneMockupAlt = "MySentry app dashboard",
}: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-screen flex items-center bg-[#e8f5e9] pt-24 pb-20 overflow-hidden", className)}>
      <div className="absolute inset-0 z-0">
         <img
           src={imageSrc}
           alt={imageAlt}
           className="absolute inset-0 w-full h-full object-cover opacity-60"
           loading="eager"
           fetchPriority="high"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-[#e8f5e9] via-[#e8f5e9]/90 to-transparent z-10" />
      </div>

      <div className="container relative z-20">
        <div className={cn("flex items-center gap-12", phoneMockupSrc ? "lg:grid lg:grid-cols-2" : "")}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <LabelText variant="primary" className="mb-4 block">
              {label}
            </LabelText>
            <HeroHeading className="text-[#1a1a1a] mb-4">
              {title}
            </HeroHeading>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                {subtitle}
              </p>
            )}
            
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

          {phoneMockupSrc && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="hidden lg:flex justify-center items-end"
            >
              <div className="relative">
                {/* Subtle glow behind the phone */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
                <img
                  src={phoneMockupSrc}
                  alt={phoneMockupAlt}
                  className="relative z-10 w-[280px] xl:w-[320px] drop-shadow-2xl rounded-[2.5rem]"
                  loading="eager"
                  width="320" height="693"
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
