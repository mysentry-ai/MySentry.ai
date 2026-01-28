import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  variant?: "default" | "primary" | "secondary" | "muted" | "white" | "dark";
}

export function HeroHeading({ children, className, as: Component = "h1", variant = "default", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading font-bold uppercase leading-[1.1] tracking-tight mb-6",
        "text-[2.5rem] sm:text-[3rem] md:text-[3.5rem]", // Responsive sizing, max ~56px
        variant === "white" ? "text-white" : "text-foreground",
        variant === "primary" && "text-primary",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({ children, className, as: Component = "h2", variant = "default", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading font-bold uppercase leading-[1.2] tracking-tight mb-4",
        "text-[2rem] md:text-[2.5rem]", // ~32px to 40px
        variant === "white" ? "text-white" : "text-foreground",
        variant === "primary" && "text-primary",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardHeading({ children, className, as: Component = "h3", variant = "default", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-heading font-bold uppercase leading-tight mb-3",
        "text-[1.5rem] md:text-[1.75rem]", // ~24px to 28px
        variant === "white" ? "text-white" : "text-foreground",
        variant === "primary" && "text-primary",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function HeroText({ children, className, as: Component = "p", variant = "default", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans font-normal leading-relaxed mb-8 max-w-2xl",
        "text-lg md:text-xl", // ~18px to 20px
        variant === "white" ? "text-white/90" : "text-muted-foreground",
        variant === "dark" && "text-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function BodyText({ children, className, as: Component = "p", variant = "default", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-sans font-normal leading-relaxed mb-4",
        "text-base md:text-lg", // ~16px to 18px
        variant === "white" ? "text-white/80" : "text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export function LabelText({ children, className, as: Component = "span", variant = "default", ...props }: TypographyProps) {
  return (
    <Component
      className={cn(
        "font-bold tracking-widest uppercase text-sm mb-4 block",
        variant === "primary" ? "text-primary" : "text-muted-foreground",
        variant === "white" && "text-white/90",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
