import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Features", href: "/features" },
    { name: "Seniors", href: "/seniors" },
    { name: "Families", href: "/families" },
    { name: "Employers", href: "/employers" },
    { name: "Pricing", href: "/pricing" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-heading text-xl font-bold text-foreground hover:opacity-90 transition-opacity">
            <ShieldCheck className="h-8 w-8 text-white" />
            <span className="tracking-tight">
              MySentry<span className="text-white/50">.ai</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-all hover:text-white",
                  isActive(link.href)
                    ? "text-white font-semibold"
                    : "text-white/60"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <Link href="/pricing">
            <Button variant="default" className="bg-white text-black hover:bg-white/90 font-semibold rounded-full px-6">
              Start Free Trial
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-background p-4 shadow-2xl animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={cn(
                    "block text-base font-medium transition-colors hover:text-white",
                    isActive(link.href) ? "text-white" : "text-white/60"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <Link href="/pricing">
              <Button className="w-full bg-white text-black rounded-full" onClick={() => setIsOpen(false)}>
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
