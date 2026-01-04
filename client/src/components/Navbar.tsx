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
    { name: "HOW IT WORKS", href: "/how-it-works" },
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
          ? "bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm" 
          : "bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm lg:bg-transparent lg:border-transparent lg:py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.png" 
              alt="MySentry" 
              className={cn(
                "h-14 w-auto transition-all duration-300 group-hover:scale-105",
                // Logo logic: Keep original colors unless specifically needed otherwise
                ""
              )} 
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-lg font-bold tracking-widest transition-all hover:text-primary relative group font-heading uppercase",
                // Logic for text color: Always dark text (foreground) to match other pages
                "text-foreground",
                isActive(link.href) ? "text-primary" : ""
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-2 left-0 w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full",
                isActive(link.href) ? "w-full" : ""
              )} />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link 
            href="/pricing"
            className={cn(
              "inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-full px-8 h-12 text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300",
              // Button logic: Always primary (greenish) background with white text
              "bg-primary text-white hover:bg-primary/90"
            )}
          >
            Start 7-Day Free Trial
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "lg:hidden p-2 transition-colors",
            "text-black"
          )}
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-8 w-8 text-black" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col animate-in slide-in-from-right duration-300 lg:hidden overflow-y-auto h-[100dvh] w-screen">
          <div className="container py-6 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-10">
             <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <img src="/images/logo.png" alt="MySentry" className="h-12 w-auto" />
             </Link>
             <button onClick={() => setIsOpen(false)} className="p-2">
               <X className="h-8 w-8 text-black" />
             </button>
          </div>
          <div className="flex flex-col p-6 space-y-6">
            <Link 
              href="/"
              className={cn(
                "block text-3xl font-heading font-bold uppercase tracking-tight transition-colors hover:text-primary border-b border-gray-100 pb-4",
                isActive("/") ? "text-primary" : "text-foreground"
              )}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "block text-3xl font-heading font-bold uppercase tracking-tight transition-colors hover:text-primary border-b border-gray-100 pb-4",
                  isActive(link.href) ? "text-primary" : "text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8">
              <Link 
                href="/pricing" 
                className="inline-flex items-center justify-center w-full bg-primary text-white rounded-full h-14 text-lg font-bold uppercase tracking-wider" 
                onClick={() => setIsOpen(false)}
              >
                Start 7-Day Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
