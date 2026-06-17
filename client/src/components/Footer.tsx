import { useState } from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Youtube, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { trackLeadEvent } from "@/lib/metaPixel";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // tRPC mutation for newsletter subscription
  const newsletterMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: (data) => {
      setIsSubmitting(false);
      if (data.alreadySubscribed) {
        toast.info("You're already subscribed to our newsletter!");
      } else if (data.reactivated) {
        toast.success("Welcome back! Your subscription has been reactivated.");
      } else {
        toast.success("Thank you for subscribing to our newsletter!");
      }
      setEmail("");
    },
    onError: (error) => {
      setIsSubmitting(false);
      toast.error(error.message || "Failed to subscribe. Please try again.");
    }
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setIsSubmitting(true);
    newsletterMutation.mutate({
      email,
      source: "footer"
    });
  };

  return (
    <footer className="bg-[#e8f5e9] border-t border-primary/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link onClick={() => window.scrollTo(0, 0)} href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="MySentry" className="h-12 w-auto" />
            </Link>
            <p className="text-base text-gray-900 leading-relaxed font-medium">
              24/7 Safety and Health Monitoring for everyone with Emergency Response.
            </p>
            <div className="flex gap-4 pt-2">
              <a 
                href="https://www.facebook.com/MySentryAi" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="MySentry on Facebook"
                className="text-gray-900 hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/mysentry.ai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="MySentry on Instagram"
                className="text-gray-900 hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/mysentryai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="MySentry on LinkedIn"
                className="text-gray-900 hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.youtube.com/@MySentry" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="MySentry on YouTube"
                className="text-gray-900 hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-wide">Solutions</h3>
            <ul className="space-y-3 text-base font-medium">
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/features" className="text-gray-900 hover:text-primary transition-colors">
                  All Features
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/seniors" className="text-gray-900 hover:text-primary transition-colors">
                  For Seniors
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/families" className="text-gray-900 hover:text-primary transition-colors">
                  For Families
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/employers" className="text-gray-900 hover:text-primary transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/females" className="text-gray-900 hover:text-primary transition-colors">
                  For Females
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/use-cases" className="text-gray-900 hover:text-primary transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/industries" className="text-gray-900 hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/how-it-works" className="text-gray-900 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/pricing" className="text-gray-900 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/compare" className="text-gray-900 hover:text-primary transition-colors">
                  Compare
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-3 text-base font-medium">
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/about-us" className="text-gray-900 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/team" className="text-gray-900 hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/partner" className="text-gray-900 hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blogs" className="text-gray-900 hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link onClick={() => { trackLeadEvent(); window.scrollTo(0, 0); }} href="/contact" className="text-gray-900 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/privacy" className="text-gray-900 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/terms" className="text-gray-900 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Safety Resources */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-wide">Safety Resources</h3>
            <ul className="space-y-3 text-base font-medium">
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/safety-for/seniors-aging-in-place" className="text-gray-900 hover:text-primary transition-colors">
                  Seniors Aging in Place
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/safety-for/solo-travelers" className="text-gray-900 hover:text-primary transition-colors">
                  Solo Traveler Safety
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/safety-for/women-living-alone" className="text-gray-900 hover:text-primary transition-colors">
                  Women Living Alone
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/case-studies/home-healthcare" className="text-gray-900 hover:text-primary transition-colors">
                  Home Healthcare Case Study
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/case-studies/real-estate" className="text-gray-900 hover:text-primary transition-colors">
                  Real Estate Case Study
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/case-studies/field-services" className="text-gray-900 hover:text-primary transition-colors">
                  Field Services Case Study
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/integrations/apple-watch" className="text-gray-900 hover:text-primary transition-colors">
                  Apple Watch Integration
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/integrations/samsung-galaxy-watch" className="text-gray-900 hover:text-primary transition-colors">
                  Samsung Galaxy Watch Integration
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/integrations/oura-ring" className="text-gray-900 hover:text-primary transition-colors">
                  Oura Ring Integration
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/resources/employer-one-pager" className="text-gray-900 hover:text-primary transition-colors">
                  Employer Safety Overview
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-wide">Stay Updated</h3>
            <p className="text-base text-gray-900 mb-4 font-medium">
              Subscribe to our newsletter for the latest safety tips and product updates.
            </p>
            <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg bg-white border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center text-sm">
          <p className="text-black font-medium">&copy; 2026 MySentry.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
