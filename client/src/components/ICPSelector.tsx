import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { User, Users, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackLeadEvent } from "@/lib/metaPixel";

type ICPOption = "myself" | "family" | "team";

interface ICPSelectorProps {
  className?: string;
}

const options: { id: ICPOption; label: string; icon: typeof User; description: string }[] = [
  {
    id: "myself",
    label: "Myself",
    icon: User,
    description: "User-activated alerts, supported-device detection, wellness signals, trusted contacts, and eligible 24/7 monitoring for everyday situations"
  },
  {
    id: "family",
    label: "My Family",
    icon: Users,
        description: "Build a connected safety plan with user-activated alerts, supported-device detection, trusted contacts, and eligible monitoring workflows"
  },
  {
    id: "team",
    label: "My Team",
    icon: Building2,
        description: "Add personal safety tools and documented alert workflows to support your existing workplace safety program"
  }
];

export default function ICPSelector({ className }: ICPSelectorProps) {
  const [selected, setSelected] = useState<ICPOption>("myself");

  const ctaText = selected === "team" ? "BOOK A DEMO" : "REVIEW PLANS AND ELIGIBILITY";
  const ctaLink = selected === "team" ? "/contact" : "/pricing#pricing-plans";

  return (
    <div className={cn("w-full", className)}>
      {/* Selector Label */}
      <p className="text-sm font-semibold uppercase tracking-wider text-gray-600 mb-4">
        I am looking for safety for...
      </p>

      {/* Option Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {options.map((option) => {
          const Icon = option.icon;
          const isActive = selected === option.id;
          return (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={cn(
                "flex items-center gap-2.5 px-5 py-3 rounded-full border-2 transition-all duration-200 font-semibold text-sm",
                isActive
                  ? "border-[#255044] bg-white text-[#255044] shadow-md ring-2 ring-[#6AD990]/35"
                  : "border-[#78988e] bg-white/90 text-[#1f3e35] hover:border-[#004F7B] hover:text-[#004F7B]"
              )}
            >
              <Icon className="w-4.5 h-4.5" />
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={selected}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="text-gray-600 text-base mb-8"
        >
          {options.find(o => o.id === selected)?.description}
        </motion.p>
      </AnimatePresence>

      {/* Dynamic CTA */}
      <AnimatePresence mode="wait">
        <motion.div
          key={ctaText}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href={ctaLink}
            onClick={trackLeadEvent}
            className={cn(
              "inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-full px-10 h-16 text-lg transition-all hover:scale-105 shadow-xl",
              selected === "team"
                ? "bg-[#255044] text-white hover:bg-[#1d4036]"
                : "bg-[#004F7B] text-white hover:bg-[#003A5B]"
            )}
          >
            {ctaText}
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
