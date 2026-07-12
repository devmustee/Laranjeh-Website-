"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteData";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Leadership", path: "/leadership" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Properties", path: "/properties" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection to trigger glassmorphic solid background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Determine if navbar is on a dark-hero page (e.g. homepage initial view) or standard page
  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav py-3 shadow-md border-b"
          : isHome
          ? "bg-transparent py-5 border-b border-transparent"
          : "bg-white py-4 border-b border-brand-gray/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Logo light={isHome && !scrolled} />

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-sans text-xs xl:text-[0.9rem] font-medium transition-colors duration-300 relative py-1 group shrink-0 ${
                    isActive
                      ? isHome && !scrolled
                        ? "text-brand-gold-light"
                        : "text-brand-green"
                      : isHome && !scrolled
                      ? "text-white/80 hover:text-white"
                      : "text-gray-600 hover:text-brand-green"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isHome && !scrolled ? "bg-brand-gold-light" : "bg-brand-green"
                    } ${isActive ? "w-full" : ""}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/contact"
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[0.85rem] font-semibold tracking-wide transition-all duration-300 shrink-0 ${
                isHome && !scrolled
                  ? "bg-brand-gold text-brand-charcoal hover:bg-white hover:text-brand-green"
                  : "bg-brand-green text-white hover:bg-brand-gold hover:text-brand-charcoal"
              }`}
            >
              <span>Get Consultation</span>
              <ArrowRight size={14} className="shrink-0" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors focus:outline-none"
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? (
              <X
                size={26}
                className={isHome && !scrolled ? "text-white" : "text-brand-charcoal"}
              />
            ) : (
              <Menu
                size={26}
                className={isHome && !scrolled ? "text-white" : "text-brand-charcoal"}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-white shadow-xl border-t border-gray-100 lg:hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-brand-green/5 text-brand-green border-l-4 border-brand-gold"
                        : "text-gray-700 hover:bg-gray-50 hover:text-brand-green"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-gray-100 px-4 space-y-4">
                <a
                  href={`tel:${siteConfig.phones.support}`}
                  className="flex items-center gap-3 text-base font-semibold text-gray-700 hover:text-brand-green"
                >
                  <Phone size={18} className="text-brand-gold" />
                  <span>Call support: {siteConfig.phones.supportFormatted}</span>
                </a>
                
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-green text-white rounded-xl text-base font-bold shadow-md hover:bg-brand-gold hover:text-brand-charcoal transition-all"
                >
                  <span>Get Consultation</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
