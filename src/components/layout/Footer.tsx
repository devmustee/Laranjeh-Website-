"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/data/siteData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Email address is required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate success API subscription
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t-2 border-brand-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="space-y-6">
            <Logo light={true} />
            <p className="text-gray-400 text-sm leading-relaxed">
              Leranjeh Nigeria Limited is Africa&apos;s premier construction, architecture, 
              engineering, and real estate development company. Excellent and attention 
              to detail is our culture.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-green border border-brand-gold/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300"
                aria-label="Follow Leranjeh on Facebook"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5.5 h-5.5">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-green border border-brand-gold/20 flex items-center justify-center hover:bg-brand-gold hover:text-brand-charcoal transition-all duration-300"
                aria-label="Follow Leranjeh on Instagram"
              >
                <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Branch Offices */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-[1.1rem] tracking-wider text-brand-gold-light border-b border-gray-800 pb-2">
              Our Offices
            </h3>
            
            {/* Abuja HQ */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin size={14} className="text-brand-gold" />
                <span>{siteConfig.offices.abuja.title}</span>
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed pl-6">
                {siteConfig.offices.abuja.address}
              </p>
            </div>

            {/* Yola Office */}
            <div className="space-y-2 pt-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <MapPin size={14} className="text-brand-gold" />
                <span>{siteConfig.offices.yola.title}</span>
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed pl-6">
                {siteConfig.offices.yola.address}
              </p>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-[1.1rem] tracking-wider text-brand-gold-light border-b border-gray-800 pb-2">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Leadership", href: "/leadership" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Properties", href: "/properties" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-brand-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-[1.1rem] tracking-wider text-brand-gold-light border-b border-gray-800 pb-2">
              Newsletter & Support
            </h3>
            
            {/* Direct support coordinates */}
            <div className="space-y-3 text-sm text-gray-300">
              <a
                href={`mailto:${siteConfig.emails.primary}`}
                className="flex items-center gap-2 hover:text-brand-gold transition-colors text-xs"
              >
                <Mail size={14} className="text-brand-gold" />
                <span>{siteConfig.emails.primary}</span>
              </a>
              <a
                href={`tel:${siteConfig.phones.support}`}
                className="flex items-center gap-2 hover:text-brand-gold transition-colors text-xs"
              >
                <Phone size={14} className="text-brand-gold" />
                <span>{siteConfig.phones.supportFormatted} (Support)</span>
              </a>
              <div className="flex items-start gap-2 text-xs">
                <Clock size={14} className="text-brand-gold mt-0.5" />
                <span className="text-gray-400">Mon - Sat: 8:00 AM - 5:00 PM</span>
              </div>
            </div>

            {/* Sub Form */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <label htmlFor="footer-email" className="block text-xs font-semibold text-gray-400">
                Subscribe for real estate updates:
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="footer-email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-brand-charcoal-light border border-gray-800 rounded-lg py-2 px-3 pr-10 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-gold transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-brand-gold text-brand-charcoal hover:bg-brand-gold-light rounded-md flex items-center justify-center transition-all"
                  aria-label="Subscribe"
                >
                  <Send size={12} />
                </button>
              </div>

              {/* Feedback messages */}
              {subscribed && (
                <p className="text-brand-gold-light text-xs flex items-center gap-1.5 mt-1 font-semibold">
                  <CheckCircle2 size={12} />
                  <span>Subscribed successfully!</span>
                </p>
              )}
              {error && <p className="text-red-400 text-xs mt-1 font-semibold">{error}</p>}
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-850 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Leranjeh Nigeria Limited. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
