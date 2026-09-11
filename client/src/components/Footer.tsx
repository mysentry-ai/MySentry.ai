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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link onClick={() => window.scrollTo(0, 0)} href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="MySentry" className="h-12 w-auto" width="360" height="160" loading="lazy" />
            </Link>
            <p className="text-sm font-bold text-[#255044] uppercase tracking-wider mb-1">Live Safe. Stay Healthy.</p>
            <p className="text-base text-gray-900 leading-relaxed font-medium">
              Personal Safety and Health Monitoring with 24/7 Emergency Response.
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
                  For Women
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
                <Link onClick={() => window.scrollTo(0, 0)} href="/partners" className="text-gray-900 hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/nurses" className="text-gray-900 hover:text-primary transition-colors">
                  Nurse Safety
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
                <Link onClick={() => window.scrollTo(0, 0)} href="/account-deletion" className="text-gray-900 hover:text-primary transition-colors">
                  Account Deletion
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
                <Link onClick={() => window.scrollTo(0, 0)} href="/use-cases/medical-alert-app-for-seniors" className="text-gray-900 hover:text-primary transition-colors">
                  Seniors Aging in Place
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/guides/aging-in-place-checklist" className="text-gray-900 hover:text-primary transition-colors">
                  Aging in Place Checklist
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/safety-for/solo-travelers" className="text-gray-900 hover:text-primary transition-colors">
                  Solo Traveler Safety
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/safety-for/people-living-alone" className="text-gray-900 hover:text-primary transition-colors">
                  Safety for People Living Alone
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/use-cases/safety-app-for-women" className="text-gray-900 hover:text-primary transition-colors">
                  Women Living Alone
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/use-cases/personal-safety-app-for-renters" className="text-gray-900 hover:text-primary transition-colors">
                  Personal Safety for Renters
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
                  Oura Ring Status
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/resources/employer-one-pager" className="text-gray-900 hover:text-primary transition-colors">
                  Employer Safety Overview
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/features/24-7-professional-monitoring" className="text-gray-900 hover:text-primary transition-colors">
                  Professional Monitoring Guide
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/solutions/delivery-drivers" className="text-gray-900 hover:text-primary transition-colors">
                  Delivery Driver Safety
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/solutions/utility-workers" className="text-gray-900 hover:text-primary transition-colors">
                  Utility and Field Worker Safety
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Guides */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-wide">Featured Guides</h3>
            <ul className="space-y-3 text-base font-medium">
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/guides/family-safety-without-constant-tracking" className="text-gray-900 hover:text-primary transition-colors">
                  Family Safety and Privacy
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/guides/wearable-fall-detection-limitations" className="text-gray-900 hover:text-primary transition-colors">
                  Wearable Fall Detection Limits
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/guides/night-shift-nurse-safety-checklist" className="text-gray-900 hover:text-primary transition-colors">
                  Night Shift Nurse Checklist
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blog/how-to-build-a-lone-worker-safety-program" className="text-gray-900 hover:text-primary transition-colors">
                  Build a Lone-Worker Safety Program
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blog/what-is-a-lone-worker-definition-risks-and-legal-duties" className="text-gray-900 hover:text-primary transition-colors">
                  Lone-Worker Risks and Duties
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blog/how-does-fall-detection-work-on-a-phone-or-watch" className="text-gray-900 hover:text-primary transition-colors">
                  How Fall Detection Works
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blog/family-park-safety-guide" className="text-gray-900 hover:text-primary transition-colors">
                  Family Park Safety Guide
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blog/how-to-set-up-emergency-contacts-on-your-phone" className="text-gray-900 hover:text-primary transition-colors">
                  Set Up Emergency Contacts
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blog/women-working-alone-safety-guide" className="text-gray-900 hover:text-primary transition-colors">
                  Working Alone Safety Guide
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blog/incident-reporting-safety-app-why-your-team-needs-one" className="text-gray-900 hover:text-primary transition-colors">
                  Incident Reporting and Safety
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blog/senior-outdoor-safety-summer-walking-plan" className="text-gray-900 hover:text-primary transition-colors">
                  Senior Outdoor Safety Plan
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blog/lone-worker-heat-safety" className="text-gray-900 hover:text-primary transition-colors">
                  Lone Worker Heat Safety
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blog/vacation-rental-safety-families" className="text-gray-900 hover:text-primary transition-colors">
                  Vacation Rental Safety
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} href="/blog/power-outage-safety-for-seniors" className="text-gray-900 hover:text-primary transition-colors">
                  Power Outage Safety for Seniors
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
          <p className="mx-auto mb-4 max-w-5xl text-xs leading-relaxed text-gray-700">
            MySentry connects supported safety alerts, trusted contacts, permitted incident context, and eligible 24/7 professional monitoring. Feature operation depends on plan, supported device, operating system, permissions, connectivity, account eligibility, and region. Wellness information is not a medical diagnosis.
          </p>
          <p className="text-black font-medium">&copy; 2026 MySentry.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
