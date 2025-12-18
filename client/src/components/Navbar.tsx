import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Females", href: "/females" },
    { name: "Seniors", href: "/seniors" },
    { name: "Families", href: "/families" },
    { name: "Employers", href: "/employers" },
    { name: "Pricing", href: "/pricing" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/10 bg-[#e8f5e9]/95 backdrop-blur-sm shadow-sm" style={{ color: '#1a1a1a' }}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/images/mysentry-logo.png" alt="MySentry" className="h-8 w-auto" />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-all hover:text-primary",
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "text-foreground"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/pricing">
            <Button className="bg-primary text-white hover:bg-primary/90 font-semibold rounded-full px-6">
              Start Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#1a1a1a]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-primary/10 bg-[#e8f5e9] p-4 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "block text-base font-medium transition-colors hover:text-primary",
                    isActive(link.href) ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/pricing">
              <Button className="w-full bg-primary text-white rounded-full" onClick={() => setIsOpen(false)}>
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
