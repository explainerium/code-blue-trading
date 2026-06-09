import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--navy-deep)] text-primary-foreground">
      <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:px-8 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground font-bold text-sm">
              CB
            </span>
            <span className="font-semibold tracking-tight">Code Blue Trading FZE</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Your Trusted Trading &amp; Consultancy Partner in JAFZA, UAE.
          </p>
          <p className="mt-4 text-sm italic text-accent/90">
            Connecting Global Markets Through Quality, Reliability, and Innovation.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/90">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/divisions" className="hover:text-accent">Trading Divisions</Link></li>
            <li><Link to="/consultancy" className="hover:text-accent">Consultancy Services</Link></li>
            <li><Link to="/leadership" className="hover:text-accent">Leadership Team</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/90">Business Areas</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>Vape &amp; E-Cigarette Trading</li>
            <li>FMCG Products</li>
            <li>Clothing &amp; Fashion Products</li>
            <li>Accessories Trading</li>
            <li>Business Consultancy Services</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/90">Location</h4>
          <div className="mt-4 flex items-start gap-2 text-sm text-primary-foreground/70">
            <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
            <p>
              Jebel Ali Free Zone (JAFZA)
              <br />Dubai, United Arab Emirates
            </p>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm text-primary-foreground/70">
            <Mail className="h-4 w-4 text-accent shrink-0" />
            <a href="mailto:info@codebluefze.com" className="hover:text-accent transition-colors">info@codebluefze.com</a>
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/70">
            <Phone className="h-4 w-4 text-accent shrink-0" />
            <a href="tel:+971563779922" className="hover:text-accent transition-colors">+971 56 377 9922</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col gap-2 px-4 sm:px-6 lg:px-8 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Code Blue Trading FZE. All rights reserved.</span>
          <span>Jebel Ali Free Zone, Dubai, UAE</span>
        </div>
      </div>
    </footer>
  );
}