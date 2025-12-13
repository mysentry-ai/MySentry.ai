import { Link } from "wouter";
import { ShieldCheck, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/">
              <a className="flex items-center gap-2 font-heading text-xl font-bold text-primary">
                <ShieldCheck className="h-6 w-6 text-secondary" />
                <span>MySentry.ai</span>
              </a>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your Vital Companion. Advanced health and safety monitoring for peace of mind, every second of the day.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/seniors">
                  <a className="text-muted-foreground hover:text-primary transition-colors">For Seniors</a>
                </Link>
              </li>
              <li>
                <Link href="/families">
                  <a className="text-muted-foreground hover:text-primary transition-colors">For Families</a>
                </Link>
              </li>
              <li>
                <Link href="/employers">
                  <a className="text-muted-foreground hover:text-primary transition-colors">For Employers</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>support@mysentry.ai</li>
              <li>1-800-SENTRY-AI</li>
              <li>123 Innovation Drive,<br />Tech City, TC 90210</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MySentry.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
