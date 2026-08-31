import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Shield, Activity, Heart, Briefcase, Building2, Home, Scale, Lock, BookOpen, Users, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { getMySentryLoginUrl } from "@/const";

// ─── Mega-menu data ─────────────────────────────────────────────────────────────

const megaMenuSections = [
  {
    id: "features",
    label: "FEATURES",
    header: "PRODUCT FEATURES",
    columns: [
      {
        title: "Safety & Emergency",
        icon: <Shield className="w-5 h-5 text-primary" />,
        items: [
          { name: "Panic Button App", desc: "One-tap silent SOS with live video", href: "/features/panic-button-app" },
          { name: "Fall Detection", desc: "Automatic fall alerts with GPS", href: "/features/fall-detection-app" },
          { name: "Crash Detection", desc: "Eligible device crash signals", href: "/features/crash-detection" },
          { name: "Alert Video Context", desc: "Permitted video during supported alerts", href: "/features/live-video-response" },
        ],
      },
      {
        title: "Monitoring & Wellness",
        icon: <Activity className="w-5 h-5 text-primary" />,
        items: [
          { name: "24/7 Professional Monitoring", desc: "Trained agents for eligible alerts", href: "/features/24-7-professional-monitoring" },
          { name: "Wellness Signals", desc: "Supported wearable context", href: "/features/health-monitoring" },
          { name: "Safety Checks", desc: "Timed check-ins and follow-up alerts", href: "/features/safety-check-in-app" },
        ],
      },
    ],
    footer: { label: "View all features", href: "/features" },
  },
  {
    id: "protect",
    label: "WHO WE PROTECT",
    header: "WHO WE PROTECT",
    columns: [
      {
        title: "Individuals & Families",
        icon: <Heart className="w-5 h-5 text-primary" />,
        items: [
          { name: "Women", desc: "Panic alerts, check-ins, and trusted contacts", href: "/use-cases/safety-app-for-women" },
          { name: "Older Adults", desc: "Supported fall alerts and safety checks", href: "/use-cases/medical-alert-app-for-seniors" },
          { name: "Families", desc: "Permission-based family safety tools", href: "/use-cases/family-safety-app" },
          { name: "Teen Drivers", desc: "Eligible crash signals and alert context", href: "/use-cases/teen-driver-safety" },
        ],
      },
      {
        title: "Workers & Employers",
        icon: <Briefcase className="w-5 h-5 text-primary" />,
        items: [
          { name: "Employers", desc: "Supplemental workforce safety tools", href: "/employers" },
          { name: "Nurses & Healthcare", desc: "Safety for nurses and healthcare workers", href: "/nurses" },
          { name: "Lone Workers", desc: "Check-ins, alerts, and response planning", href: "/use-cases/lone-worker-safety-app" },
          { name: "Travel Nurses", desc: "Safety planning for every new assignment", href: "/nurses/travel-nurses" },
        ],
      },
    ],
    footer: { label: "See all use cases", href: "/use-cases" },
  },
  {
    id: "solutions",
    label: "INDUSTRIES",
    header: "INDUSTRIES",
    columns: [
      {
        title: "Field & Outdoor",
        icon: <Building2 className="w-5 h-5 text-primary" />,
        items: [
          { name: "Construction", desc: "Supplemental job-site safety tools", href: "/industries/construction" },
          { name: "Real Estate", desc: "Agent safety on property visits", href: "/industries/real-estate" },
          { name: "Delivery & Drivers", desc: "Road and route worker safety", href: "/solutions/delivery-drivers" },
          { name: "Security Guarding", desc: "Guard tour and lone patrol safety", href: "/industries/security-guarding" },
        ],
      },
      {
        title: "Care & Service",
        icon: <Home className="w-5 h-5 text-primary" />,
        items: [
          { name: "Home Healthcare", desc: "In-home caregiver protection", href: "/industries/home-healthcare" },
          { name: "Hospitality", desc: "Hotel and restaurant staff safety", href: "/industries/hospitality" },
          { name: "Retail", desc: "Store worker panic and safety alerts", href: "/industries/retail" },
          { name: "Education", desc: "Campus and school safety", href: "/industries/education" },
        ],
      },
    ],
    footer: { label: "View all industries", href: "/industries" },
  },
  {
    id: "compare",
    label: "COMPARE",
    header: "HOW WE COMPARE",
    columns: [
      {
        title: "Comparison Resources",
        icon: <Scale className="w-5 h-5 text-primary" />,
        items: [
          { name: "Comparison Guide", desc: "Questions to verify before choosing", href: "/compare" },
          { name: "Current MySentry Features", desc: "Review supported capabilities and limits", href: "/features" },
          { name: "Plans and Eligibility", desc: "Review current plan information", href: "/pricing" },
        ],
      },
      {
        title: "Category Reviews",
        icon: <Lock className="w-5 h-5 text-primary" />,
        items: [
          { name: "Fitness Wearables Review", desc: "Compare wellness and safety categories", href: "/compare/fitness-wearables-vs-mysentry" },
          { name: "Traditional Alert Review", desc: "Compare equipment and service models", href: "/compare/traditional-medical-alerts-vs-mysentry" },
          { name: "Apple Watch Compatibility", desc: "Review eligible MySentry support", href: "/integrations/apple-watch" },
          { name: "Samsung Watch Compatibility", desc: "Review eligible MySentry support", href: "/integrations/samsung-galaxy-watch" },
        ],
      },
    ],
    footer: { label: "See all comparisons", href: "/compare" },
  },
  {
    id: "learn",
    label: "LEARN",
    header: "RESOURCES & GUIDES",
    columns: [
      {
        title: "Guides & Research",
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        items: [
          { name: "Lone Worker Safety Guide", desc: "Hazards, check-ins, roles, and limitations", href: "/guides/lone-worker-safety" },
          { name: "Blog", desc: "Safety tips and expert articles", href: "/blogs" },
          { name: "How It Works", desc: "See MySentry in action", href: "/how-it-works" },
        ],
      },
      {
        title: "Company",
        icon: <Users className="w-5 h-5 text-primary" />,
        items: [
          { name: "About Us", desc: "Our mission and story", href: "/about-us" },
          { name: "Our Team", desc: "Meet the people behind MySentry", href: "/team" },
          { name: "Partners", desc: "Become a reseller or partner", href: "/partners" },
          { name: "Contact Us", desc: "Get in touch with our team", href: "/contact" },
        ],
      },
    ],
    footer: { label: "Visit the blog", href: "/blogs" },
  },
];

// ─── Component ──────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [location] = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveMega(null);
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location === path || (path !== "/" && location.startsWith(path + "/"));

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 border-b",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-gray-200 py-3 shadow-sm"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo + Tagline */}
        <Link href="/" className="flex flex-col items-start group flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="MySentry"
            className="h-10 md:h-12 lg:h-14 w-auto transition-all duration-300 group-hover:scale-105"
            width="360"
            height="160"
            loading="eager"
          />
          <span className="hidden lg:block text-[8px] font-semibold uppercase tracking-widest text-[#255044] mt-0.5">
            Live Safe. Stay Healthy.
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-0 2xl:gap-1">
          {/* Static: How It Works */}
          <Link
            href="/how-it-works"
            className={cn(
              "px-3 py-2 text-[12px] font-semibold tracking-wider transition-all hover:text-primary relative group font-heading uppercase whitespace-nowrap !text-black",
              isActive("/how-it-works") ? "!text-primary" : ""
            )}
          >
            HOW IT WORKS
            <span className={cn("absolute -bottom-1 left-3 right-3 h-[2px] bg-primary transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left", isActive("/how-it-works") ? "scale-x-100" : "")} />
          </Link>

          {/* Static: Pricing */}
          <Link
            href="/pricing"
            className={cn(
              "px-3 py-2 text-[12px] font-bold tracking-wider transition-all hover:text-primary relative group font-heading uppercase whitespace-nowrap !text-black",
              isActive("/pricing") ? "!text-primary" : ""
            )}
          >
            PRICING
            <span className={cn("absolute -bottom-1 left-3 right-3 h-[2px] bg-primary transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left", isActive("/pricing") ? "scale-x-100" : "")} />
          </Link>

          {/* Mega-menu triggers */}
          {megaMenuSections.map((section) => (
            <button
              key={section.id}
              onMouseEnter={() => setActiveMega(section.id)}
              onClick={() => setActiveMega(activeMega === section.id ? null : section.id)}
              className={cn(
                "flex items-center gap-1 px-3 py-2 text-[12px] font-bold tracking-wider transition-all hover:text-primary font-heading uppercase whitespace-nowrap !text-black",
                activeMega === section.id ? "!text-primary" : ""
              )}
            >
              {section.label}
              <ChevronDown className={cn("w-3 h-3 transition-transform duration-200", activeMega === section.id ? "rotate-180 text-primary" : "")} />
            </button>
          ))}

          {/* Static: Ring */}
          <Link
            href="/integrations/ring"
            className={cn(
              "px-3 py-2 text-[12px] font-semibold tracking-wider transition-all hover:text-primary relative group font-heading uppercase whitespace-nowrap",
              isActive("/integrations/ring") ? "!text-[#004F7B]" : "!text-[#007BC2]"
            )}
          >
            Ring
            <span className={cn("absolute -bottom-1 left-3 right-3 h-[2px] bg-primary transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-left", isActive("/integrations/ring") ? "scale-x-100" : "")} />
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
          <Link
            href="/pricing#pricing-plans"
            className="inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-full px-5 h-10 text-xs shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-[#004F7B] text-white hover:bg-[#003A5B] whitespace-nowrap"
          >
            Review Plans and Eligibility
          </Link>
          <a
            href={getMySentryLoginUrl()}
            className="inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-full px-5 h-10 text-xs transition-all duration-300 border-2 border-[#004F7B] bg-white/95 text-[#004F7B] hover:bg-[#004F7B] hover:text-white whitespace-nowrap shadow-sm"
          >
            Login
          </a>
        </div>

        {/* Mobile controls */}
        <div className="xl:hidden flex items-center gap-2">
          <a
            href={getMySentryLoginUrl()}
            className="inline-flex items-center justify-center font-bold uppercase tracking-wider rounded-full px-4 h-9 text-xs transition-all duration-300 border-2 border-[#004F7B] bg-white/95 text-[#004F7B] hover:bg-[#004F7B] hover:text-white shadow-sm"
          >
            Login
          </a>
          <button className="p-2" onClick={() => setIsOpen(true)}>
            <Menu className="h-8 w-8 text-black" />
          </button>
        </div>
      </div>

      {/* ── Mega-menu panel (desktop) ── */}
      {activeMega && (
        <div
          className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-2xl z-50 hidden xl:block"
          onMouseLeave={() => setActiveMega(null)}
        >
          {megaMenuSections.map((section) => {
            if (section.id !== activeMega) return null;
            return (
              <div key={section.id} className="container py-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                  {section.header}
                </p>
                <div className="grid grid-cols-2 gap-10">
                  {section.columns.map((col) => (
                    <div key={col.title}>
                      <div className="flex items-center gap-2 mb-4">
                        {col.icon}
                        <span className="text-sm font-bold text-gray-800 uppercase tracking-wide">{col.title}</span>
                      </div>
                      <div className="space-y-0.5">
                        {col.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={() => setActiveMega(null)}
                          >
                            <span className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">{item.name}</span>
                            <span className="text-xs text-gray-500 mt-0.5">{item.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                {section.footer && (
                  <div className="mt-6 pt-5 border-t border-gray-100">
                    <Link
                      href={section.footer.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                      onClick={() => setActiveMega(null)}
                    >
                      {section.footer.label}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── Mobile Nav Overlay ── */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-white flex flex-col xl:hidden overflow-y-auto h-[100dvh] w-screen animate-in slide-in-from-right duration-300">
          <div className="container py-6 flex items-center justify-between border-b border-gray-100 bg-white sticky top-0 z-10">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <img src="/images/logo.png" alt="MySentry" className="h-10 w-auto" width="360" height="160" loading="eager" />
            </Link>
            <button onClick={() => setIsOpen(false)} className="p-2">
              <X className="h-8 w-8 text-black" />
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-1">
            <Link
              href="/"
              className={cn("block text-[18px] font-heading font-bold uppercase tracking-tight transition-colors hover:text-primary border-b border-gray-100 py-4 text-black", isActive("/") ? "text-primary" : "")}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/how-it-works"
              className={cn("block text-[18px] font-heading font-bold uppercase tracking-tight transition-colors hover:text-primary border-b border-gray-100 py-4 text-black", isActive("/how-it-works") ? "text-primary" : "")}
              onClick={() => setIsOpen(false)}
            >
              HOW IT WORKS
            </Link>
            <Link
              href="/pricing"
              className={cn("block text-[18px] font-heading font-bold uppercase tracking-tight transition-colors hover:text-primary border-b border-gray-100 py-4 text-black", isActive("/pricing") ? "text-primary" : "")}
              onClick={() => setIsOpen(false)}
            >
              PRICING
            </Link>
            <Link
              href="/integrations/ring"
              className={cn("text-[18px] font-heading font-bold uppercase tracking-tight transition-colors hover:text-primary border-b border-gray-100 py-4 block", isActive("/integrations/ring") ? "text-primary" : "text-black")}
              onClick={() => setIsOpen(false)}
            >
              Ring Appstore
            </Link>

            {/* Expandable mega sections */}
            {megaMenuSections.map((section) => (
              <div key={section.id} className="border-b border-gray-100">
                <button
                  className="w-full flex items-center justify-between py-4 text-[18px] font-heading font-bold uppercase tracking-tight text-black hover:text-primary transition-colors"
                  onClick={() => setMobileExpanded(mobileExpanded === section.id ? null : section.id)}
                >
                  {section.label}
                  <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", mobileExpanded === section.id ? "rotate-180 text-primary" : "")} />
                </button>
                {mobileExpanded === section.id && (
                  <div className="pb-4 space-y-4">
                    {section.columns.map((col) => (
                      <div key={col.title}>
                        <div className="flex items-center gap-2 mb-2 px-2">
                          {col.icon}
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{col.title}</p>
                        </div>
                        {col.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="text-[15px] font-semibold text-gray-800 hover:text-primary">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                    {section.footer && (
                      <Link
                        href={section.footer.href}
                        className="inline-flex items-center gap-2 px-2 text-sm font-semibold text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {section.footer.label} <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-8 pb-12 space-y-4">
              <Link
                href="/pricing#pricing-plans"
                className="inline-flex items-center justify-center w-full bg-[#004F7B] text-white rounded-full h-14 text-lg font-bold uppercase tracking-wider hover:bg-[#003A5B]"
                onClick={() => setIsOpen(false)}
              >
                Review Plans and Eligibility
              </Link>
              <a
                href={getMySentryLoginUrl()}
                className="inline-flex items-center justify-center w-full border-2 border-[#004F7B] text-[#004F7B] bg-white rounded-full h-14 text-lg font-bold uppercase tracking-wider hover:bg-[#004F7B] hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
