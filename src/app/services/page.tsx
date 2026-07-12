"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData } from "@/data/siteData";
import {
  Building2,
  Palette,
  Ruler,
  Cpu,
  Home,
  Milestone,
  TrendingUp,
  ShieldCheck,
  Wrench,
  Briefcase,
  Calendar,
  FileText,
  Check,
  ArrowRight,
  HelpCircle
} from "lucide-react";

// Icon mapping function for Lucide React
const getIcon = (iconName: string) => {
  switch (iconName) {
    case "Building2":
      return <Building2 size={24} />;
    case "Palette":
      return <Palette size={24} />;
    case "Ruler":
      return <Ruler size={24} />;
    case "Cpu":
      return <Cpu size={24} />;
    case "Home":
      return <Home size={24} />;
    case "Milestone":
      return <Milestone size={24} />;
    case "TrendingUp":
      return <TrendingUp size={24} />;
    case "ShieldCheck":
      return <ShieldCheck size={24} />;
    case "Wrench":
      return <Wrench size={24} />;
    case "Briefcase":
      return <Briefcase size={24} />;
    case "Calendar":
      return <Calendar size={24} />;
    case "FileText":
      return <FileText size={24} />;
    default:
      return <HelpCircle size={24} />;
  }
};

export default function ServicesPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-brand-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
            alt="Corporate Engineering Blueprint Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-green/90" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Professional Services
          </h1>
          <p className="text-brand-gold-light font-medium tracking-widest text-xs uppercase sm:text-sm">
            End-to-End Civil & Real Estate Solutions
          </p>
        </div>
      </section>

      {/* 2. Intro Text */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-4">
        <span className="text-xs uppercase font-extrabold tracking-widest text-brand-gold-dark block">
          What We Offer
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-green">
          Precision Construction & Premium Investments
        </h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          At Leranjeh Nigeria Limited, we deploy specialized units to handle design blueprints, 
          structural engineering Detailing, physical civil works, and legally verified real estate 
          investment structures. Explore our 12 primary capability points below.
        </p>
      </section>

      {/* 3. Services Animated Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <motion.div
              key={service.slug}
              variants={fadeInUp}
              className="bg-white p-8 rounded-2xl shadow-sm border border-brand-gray-dark text-left flex flex-col justify-between h-full hover:shadow-xl transition-all duration-300 group premium-shadow-hover relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full transition-all duration-300 group-hover:bg-brand-gold/15" />
              
              <div className="space-y-5">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-brand-green text-white flex items-center justify-center shadow-sm">
                  {getIcon(service.iconName)}
                </div>
                
                {/* Title */}
                <h3 className="font-heading font-extrabold text-lg text-brand-charcoal group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits List */}
                <div className="pt-2 space-y-2">
                  <span className="text-2xs font-extrabold uppercase text-brand-gold-dark tracking-wider block">
                    Key Value Points:
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-700">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check size={14} className="text-brand-green shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 border-t border-brand-gray mt-6">
                <Link
                  href={{
                    pathname: "/contact",
                    query: { service: service.slug }
                  }}
                  className="inline-flex items-center gap-2 w-full justify-center py-3 bg-brand-green text-white hover:bg-brand-gold hover:text-brand-charcoal font-bold text-xs tracking-wide rounded-xl transition-all shadow-sm"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Corporate Certifications Banner */}
      <section className="bg-brand-charcoal text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="text-xl sm:text-2xl font-heading font-extrabold">
            Need a Custom Architecture or Engineering Quote?
          </h3>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Our cost estimators and structural project managers are ready to prepare a detailed 
            Bill of Quantities (BOQ) tailored to your exact land dimensions and building targets.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-8 py-3 bg-brand-gold text-brand-charcoal hover:bg-white hover:text-brand-green font-bold text-sm tracking-wide rounded-full transition-all"
            >
              Contact Our Consultants
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
