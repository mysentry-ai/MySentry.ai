import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-gray-200 py-2 shadow-sm" 
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <img src="/images/logo.png" alt="MySentry" className="h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className={cn(
                  "font-heading font-bold text-2xl tracking-tighter leading-none",
                  scrolled ? "text-gray-900" : "text-gray-900" // Always dark for visibility unless on dark hero
                )}>
                  MYSENTRY
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-primary">
                  24/7 MONITORING
                </span>
              </div>
            </a>
          </Link>
        </div>

        {/* Desktop Nav - Whoop Style: Uppercase, Bold, Condensed */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-bold tracking-widest transition-all hover:text-primary relative group font-heading uppercase",
                  isActive(link.href) ? "text-primary" : "text-gray-800"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full",
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
              className="bg-primary text-white hover:bg-primary/90 font-bold uppercase tracking-wider rounded-full px-8 h-12 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Start 7-Day Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
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
