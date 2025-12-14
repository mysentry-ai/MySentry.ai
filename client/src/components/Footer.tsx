import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#e8f5e9] border-t border-primary/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/">
              <a className="flex items-center gap-2">
                <img src="/images/mysentry-logo.png" alt="MySentry" className="h-8 w-auto" />
              </a>
            </Link>
            <p className="text-sm text-foreground leading-relaxed">
              Your Vital Companion. Safety and health monitoring for everyone.
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
            <h3 className="font-bold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/seniors">
                  <a className="text-foreground hover:text-primary transition-colors">For Seniors</a>
                </Link>
              </li>
              <li>
                <Link href="/families">
                  <a className="text-foreground hover:text-primary transition-colors">For Families</a>
                </Link>
              </li>
              <li>
                <Link href="/employers">
                  <a className="text-foreground hover:text-primary transition-colors">For Employers</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-foreground hover:text-primary transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li>support@mysentry.ai</li>
              <li>1-800-SENTRY-AI</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8 text-center text-sm text-foreground">
          <p>&copy; {new Date().getFullYear()} MySentry.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
