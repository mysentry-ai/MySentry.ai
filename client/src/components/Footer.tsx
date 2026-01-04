import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#e8f5e9] border-t border-primary/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="MySentry" className="h-12 w-auto" />
            </Link>
            <p className="text-base text-foreground leading-relaxed font-medium">
              24/7 Safety and Health Monitoring for everyone with Emergency Response.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4 uppercase tracking-wide">Solutions</h3>
            <ul className="space-y-3 text-base font-medium">
              <li>
                <Link href="/seniors" className="text-foreground hover:text-primary transition-colors">
                  For Seniors
                </Link>
              </li>
              <li>
                <Link href="/families" className="text-foreground hover:text-primary transition-colors">
                  For Families
                </Link>
              </li>
              <li>
                <Link href="/employers" className="text-foreground hover:text-primary transition-colors">
                  For Employers
                </Link>
              </li>
              <li>
                <Link href="/females" className="text-foreground hover:text-primary transition-colors">
                  For Females
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-3 text-base font-medium">
              <li>
                <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/partner" className="text-foreground hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-foreground hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h3 className="font-bold text-lg text-foreground mb-4 uppercase tracking-wide">Stay Updated</h3>
            <p className="text-base text-foreground mb-4 font-medium">
              Subscribe to our newsletter for the latest safety tips and product updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-3 py-2 rounded-lg bg-white border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center text-sm text-foreground">
          <p>&copy; {new Date().getFullYear()} MySentry.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
