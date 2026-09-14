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
  /** Removes a legacy background visual when an app screen is the primary hero visual. */
  showBackgroundImage?: boolean;
  /** Keeps a supplied app screen visible beneath the copy on small screens. */
  showPhoneMockupOnMobile?: boolean;
}

export default function HeroSection({
  label,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  ctaText = "REVIEW PLANS AND ELIGIBILITY",
  ctaLink = "/pricing#pricing-plans",
  className,
  showCta = true,
  children,
  phoneMockupSrc,
  phoneMockupAlt = "MySentry app dashboard",
  showBackgroundImage = true,
  showPhoneMockupOnMobile = false,
}: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-screen flex items-center bg-[#e8f5e9] pt-32 md:pt-40 lg:pt-24 pb-20 overflow-hidden", className)}>
      {showBackgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            loading="eager"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#e8f5e9] via-[#e8f5e9]/90 to-transparent" />
        </div>
      )}

      <div className="container relative z-20 mt-8 md:mt-12 lg:mt-0">
        <div className={cn("flex items-center gap-12", phoneMockupSrc ? "flex-col lg:grid lg:grid-cols-2" : "")}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl pt-4 md:pt-8"
          >
            <LabelText variant="primary" className="mb-6 block text-xs font-medium w-full max-w-sm">
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
              className={cn(
                "justify-center items-end",
                showPhoneMockupOnMobile ? "flex mt-4 lg:mt-0" : "hidden lg:flex"
              )}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Subtle glow behind the phone */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
                <img
                  src={phoneMockupSrc}
                  alt={phoneMockupAlt}
                  className={cn(
                    "relative z-10 drop-shadow-2xl rounded-[2.5rem]",
                    showPhoneMockupOnMobile
                      ? "w-[240px] sm:w-[300px] md:w-[360px] lg:w-[420px] xl:w-[480px] -mb-8 lg:-mb-[145px]"
                      : "w-[350px] md:w-[400px] lg:w-[420px] xl:w-[480px] -mb-[145px]"
                  )}
                  loading="eager"
                  width="480" height="1040"
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
