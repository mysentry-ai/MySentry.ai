import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isHome = location === "/";

  // Handle scroll effect for transparent to solid transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "HOW IT WORKS", href: "/how-it-works" },
    { name: "FEMALES", href: "/females" },
    { name: "SENIORS", href: "/seniors" },
    { name: "FAMILIES", href: "/families" },
    { name: "EMPLOYERS", href: "/employers" },
    { name: "PRICING", href: "/pricing" },
  ];

  const moreLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Partners", href: "/partner" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        (scrolled || !isHome)
          ? "bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm" 
          : "bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm xl:bg-transparent xl:border-transparent xl:py-6"
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
                "h-10 md:h-12 lg:h-14 w-auto transition-all duration-300 group-hover:scale-105",
                ""
              )} 
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-4 2xl:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "nav-link text-[11px] font-bold tracking-wider transition-all hover:text-primary relative group font-heading uppercase",
                (scrolled || !isHome) ? "!text-black" : "text-black xl:text-white",
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

          {/* More Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={cn(
                "flex items-center gap-1 nav-link text-[11px] font-bold tracking-wider transition-all font-heading uppercase !text-black"
              )}
            >
              MORE <ChevronDown className={cn("w-4 h-4 transition-transform", moreOpen ? "rotate-180" : "")} />
            </button>
            
            {moreOpen && (
              <div className="absolute top-full right-0 mt-4 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="py-2">
                  {moreLinks.map((link) => (
                    <Link 
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "block px-6 py-3 text-base font-medium transition-colors hover:bg-gray-50 hover:text-primary",
                        isActive(link.href) ? "text-primary bg-gray-50" : "text-gray-700"
                      )}
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden xl:flex items-center">
          <Link 
            href="/pricing"
            className={cn(
              "inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-full px-6 h-10 text-xs shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300",
              "bg-primary text-white hover:bg-primary/90"
            )}
          >
            Start 7-Day Free Trial
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "xl:hidden p-2 transition-colors",
            "text-black"
          )}
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-8 w-8 text-black" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col animate-in slide-in-from-right duration-300 xl:hidden overflow-y-auto h-[100dvh] w-screen">
          <div className="container py-6 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-10">
             <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
                <img src="/images/logo.png" alt="MySentry" className="h-10 w-auto" />
             </Link>
             <button onClick={() => setIsOpen(false)} className="p-2">
               <X className="h-8 w-8 text-black" />
             </button>
          </div>
          <div className="flex flex-col p-6 space-y-6">
            <Link 
              href="/"
              className={cn(
                "block text-[18px] font-heading font-bold uppercase tracking-tight transition-colors hover:text-primary border-b border-gray-100 pb-4 text-black",
                isActive("/") ? "text-primary" : "text-black"
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
                  "block text-[18px] font-heading font-bold uppercase tracking-tight transition-colors hover:text-primary border-b border-gray-100 pb-4 text-black",
                  isActive(link.href) ? "text-primary" : "text-black"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="border-t border-gray-100 pt-6">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">More</p>
              {moreLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={cn(
                    "block text-[20px] font-heading font-bold transition-colors hover:text-primary py-2 text-gray-700",
                    isActive(link.href) ? "text-primary" : "text-gray-700"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-8 pb-12">
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
