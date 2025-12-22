import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  // Handle scroll effect for transparent to solid transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "FEATURES", href: "/features" },
    { name: "FEMALES", href: "/females" },
    { name: "SENIORS", href: "/seniors" },
    { name: "FAMILIES", href: "/families" },
    { name: "EMPLOYERS", href: "/employers" },
    { name: "PRICING", href: "/pricing" },
  ];

  const isActive = (path: string) => location === path;
  const isHome = location === "/";
  const isFeatures = location === "/features";

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo - Cleaned up to remove duplication */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <a className="flex items-center gap-3 group">
              {/* Only show the image logo, remove text duplication if logo contains text */}
              {/* Apply brightness-0 invert filter when on transparent background (home) to make logo white */}
              <img 
                src="/images/logo.png" 
                alt="MySentry" 
                className={cn(
                  "h-14 w-auto transition-all duration-300 group-hover:scale-105",
                  !scrolled && isHome ? "brightness-0 invert" : ""
                )} 
              />
            </a>
          </Link>
        </div>

        {/* Desktop Nav - Increased Size & Visibility */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-lg font-bold tracking-widest transition-all hover:text-primary relative group font-heading uppercase",
                  // Logic for text color: 
                  // If scrolled -> Dark text
                  // If NOT scrolled AND on Home page -> White text (for video background)
                  // If NOT scrolled AND NOT on Home page -> Dark text (default)
                  scrolled ? "text-gray-900" : (isHome ? "text-white hover:text-white/80" : "text-gray-900"),
                  isActive(link.href) ? "text-primary" : ""
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-2 left-0 w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full",
                  isActive(link.href) ? "w-full" : ""
                )} />
              </a>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link href="/pricing">
            <Button 
              className={cn(
                "font-bold uppercase tracking-wider rounded-full px-8 h-12 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300",
                  scrolled 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : (isHome ? "bg-white text-black hover:bg-gray-100" : "bg-primary text-white hover:bg-primary/90")
              )}
            >
              Start 7-Day Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors",
            scrolled ? "text-gray-900" : (isHome ? "text-white" : "text-gray-900")
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8 text-gray-900" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Nav Overlay - Full Screen Style */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 animate-in slide-in-from-right duration-300 lg:hidden">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "block text-3xl font-heading font-bold uppercase tracking-tight transition-colors hover:text-primary border-b border-gray-100 pb-4",
                    isActive(link.href) ? "text-primary" : "text-gray-900"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <div className="pt-8">
              <Link href="/pricing">
                <Button className="w-full bg-primary text-white rounded-full h-14 text-lg font-bold uppercase tracking-wider" onClick={() => setIsOpen(false)}>
                  Start 7-Day Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
