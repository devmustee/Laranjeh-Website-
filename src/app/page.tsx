"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Carousel } from "@/components/ui/Carousel";
import {
  servicesData,
  projectsData,
  testimonialsData,
  siteConfig,
} from "@/data/siteData";
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  TrendingUp,
  MapPin,
  CheckCircle,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  // Grab top 3 services to highlight on Home
  const featuredServices = servicesData.slice(0, 3);
  const featuredProjects = projectsData;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center bg-brand-green-dark text-white overflow-hidden -mt-[70px] lg:-mt-[80px] pt-[118px] lg:pt-[128px]">
        {/* Dynamic Dark Backdrop with cinematic overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1600&auto=format&fit=crop"
            alt="Premium Construction Project Backdrop"
            fill
            priority
            className="object-cover object-center opacity-30 select-none scale-105 animate-[pulse_8s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark via-brand-green-dark/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-bold uppercase tracking-wider">
                <Sparkles size={12} />
                <span>Excellent & Attention to Detail</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] font-heading text-white">
                Building the Future with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold">
                  Excellence
                </span>{" "}
                and Detail
              </h1>
              
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
                {siteConfig.description} We translate complex structural dreams into solid corporate realities.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-brand-gold text-brand-charcoal hover:bg-white hover:text-brand-green font-bold text-sm tracking-wide shadow-lg hover:shadow-brand-gold/25 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Get a Consultation</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                </Link>
                <Link
                  href="/projects"
                  className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-brand-green font-bold text-sm tracking-wide transition-all duration-300"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>

            {/* Hero Right: Trust Indicator Badges Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="glass-card-dark p-8 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="font-heading font-bold text-lg text-brand-gold mb-6 border-b border-white/10 pb-3 uppercase tracking-wider">
                  Verified Trust Indices
                </h3>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div className="space-y-1.5">
                    <span className="text-brand-gold font-heading text-3xl font-extrabold block">
                      <AnimatedCounter value={200} suffix="+" />
                    </span>
                    <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider block">
                      Projects Delivered
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-brand-gold font-heading text-3xl font-extrabold block">
                      <AnimatedCounter value={100} suffix="%" />
                    </span>
                    <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider block">
                      Verified Properties
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-brand-gold font-heading text-3xl font-extrabold block">
                      <AnimatedCounter value={10} suffix="+" />
                    </span>
                    <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider block">
                      Years Experience
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-brand-gold font-heading text-3xl font-extrabold block">
                      Thousands
                    </span>
                    <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider block">
                      Satisfied Clients
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. ABOUT US BRIEF SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Image Collage */}
            <div className="lg:col-span-5 relative h-[450px] rounded-2xl overflow-hidden shadow-2xl group border-2 border-brand-gray">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                alt="Modern Premium Architectural Villa Rendering"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
                <span className="font-heading font-extrabold text-brand-gold text-lg block mb-1">
                  Aso Royale Layout
                </span>
                <span>Abuja&apos;s premier residential architecture</span>
              </div>
            </div>

            {/* Right Text Brief */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-brand-gold-dark block">
                Company Culture & Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-green">
                Excellent and attention to detail is our culture.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Leranjeh Nigeria Limited is a leading Nigerian construction and real estate company
                driven by experienced architects, engineering pioneers, and built environment professionals.
                We deliver high-end quality craftsmanship, innovative structural configurations,
                and legally secured property investment opportunities.
              </p>
              
              {/* Secondary Tagline Callout */}
              <div className="p-5 border-l-4 border-brand-gold bg-brand-gray/50 rounded-r-xl italic">
                <p className="text-gray-800 font-medium text-sm">
                  &ldquo;The future is cheap if you buy it today.&rdquo;
                </p>
                <cite className="text-xs text-brand-gold-dark font-bold uppercase not-italic block mt-1">
                  — Real Estate Investment Philosophy
                </cite>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "100% Legally Verified Titles",
                  "Qualified Engineers & Project Managers",
                  "Contemporary African Architecture Focus",
                  "Robust Structural Guarantee",
                ].map((val) => (
                  <div key={val} className="flex items-center gap-2.5">
                    <CheckCircle className="text-brand-green shrink-0" size={16} />
                    <span className="text-sm text-gray-700 font-medium">{val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-green hover:bg-brand-green hover:text-white text-brand-green font-bold text-sm tracking-wide rounded-full transition-all duration-300"
                >
                  <span>Explore Our History</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DYNAMIC SERVICES GRID */}
      <section className="py-24 bg-brand-gray/40 border-y border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-brand-gold-dark block">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-green">
              Our Professional Services
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We operate across the entire lifecycle of civil construction and asset banking. 
              Our key service units ensure absolute quality at every stage.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredServices.map((service) => (
              <motion.div
                key={service.slug}
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-sm border border-brand-gray-dark text-left relative group overflow-hidden premium-shadow-hover"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full transition-all duration-300 group-hover:bg-brand-gold/15" />
                <div className="w-12 h-12 bg-brand-green text-white rounded-xl flex items-center justify-center mb-6">
                  {/* Select Icon */}
                  {service.iconName === "Building2" && <Building2 size={24} />}
                  {service.iconName === "Palette" && <ShieldCheck size={24} />}
                  {service.iconName === "Ruler" && <TrendingUp size={24} />}
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-charcoal mb-3 group-hover:text-brand-green transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold-dark hover:text-brand-green transition-colors"
                >
                  <span>Learn Benefits</span>
                  <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-green text-white hover:bg-brand-gold hover:text-brand-charcoal font-bold text-sm tracking-wide rounded-full shadow-md transition-all duration-300"
            >
              <span>View All 12 Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. BRAND AMBASSADOR SHOWCASE: UNCLE PIKIN */}
      <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
        {/* Dynamic geometric accents */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Text description */}
            <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold-light text-xs font-bold uppercase tracking-wider">
                <span>Public Relations & Media</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                Ambassador for Integrity: Uncle Pikin
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                In our commitment to drive awareness about verified, legal land acquisitions and 
                world-class engineering standards in Nigeria, Leranjeh Nigeria Limited collaborates 
                with the acclaimed media personality and public icon, **Uncle Pikin**, as our public relations and 
                brand ambassador. 
              </p>
              
              <blockquote className="p-6 border-l-4 border-brand-gold bg-white/5 rounded-r-2xl italic space-y-2">
                <p className="text-gray-200 text-sm font-medium">
                  &ldquo;Leranjeh stands for trust, speed, and real architectural craftsmanship. Before I partnered 
                  with them, I inspected their physical structures and land titles. They are the true 
                  investment corridor.&rdquo;
                </p>
                <cite className="block text-xs font-extrabold text-brand-gold not-italic mt-2">
                  — Uncle Pikin, Brand Ambassador
                </cite>
              </blockquote>

              <div className="flex gap-4 pt-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-gold hover:text-brand-charcoal text-white font-bold text-xs px-5 py-3 rounded-full transition-all"
                >
                  <span>Follow Our Campaign</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>

            {/* Visual media card */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <Image
                  src="/images/uncle-pikin.png"
                  alt="Uncle Pikin, Leranjeh Brand Ambassador Portrait"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center sm:text-left">
                  <div className="bg-brand-gold text-brand-charcoal inline-block text-2xs font-extrabold uppercase px-2.5 py-1 rounded mb-2">
                    Official Ambassador
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-white">
                    Uncle Pikin
                  </h3>
                  <p className="text-gray-300 text-2xs uppercase tracking-widest">
                    Media Influencer & Brand Representative
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FEATURED PORTFOLIO PROJECTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 text-left">
              <span className="font-heading font-bold text-xs uppercase tracking-widest text-brand-gold-dark block">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-green">
                Featured Developments
              </h2>
              <p className="text-gray-600 text-sm max-w-xl">
                Explore our signature residential layouts and land banking portfolios. 
                All properties are 100% verified and secure.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-green hover:text-brand-gold transition-colors shrink-0"
            >
              <span>View All Properties & Layouts</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="bg-white rounded-2xl overflow-hidden border border-brand-gray-dark shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image block */}
                <div className="relative h-60 w-full overflow-hidden shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover ${project.imagePosition || "object-center"} transition-transform duration-700 group-hover:scale-105`}
                  />
                  <div className="absolute top-4 left-4 bg-brand-green text-white text-3xs font-extrabold uppercase px-3 py-1 rounded-full shadow-sm tracking-wider">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-brand-gold text-brand-charcoal text-xs font-bold px-3 py-1 rounded-lg shadow-sm">
                    Starting {project.startingPrice}
                  </div>
                </div>

                {/* Content block */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold">
                      <MapPin size={14} className="text-brand-gold" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-brand-charcoal group-hover:text-brand-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="border-t border-brand-gray pt-4 flex items-center justify-between">
                    <span className="text-2xs font-bold text-brand-green bg-brand-gray px-2 py-1 rounded uppercase tracking-wider">
                      C of O Verified
                    </span>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-gold-dark hover:text-brand-green transition-colors"
                    >
                      <span>Invest Now</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS CAROUSEL */}
      <section className="py-24 bg-brand-gray/40 border-y border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="space-y-4">
            <span className="font-heading font-bold text-xs uppercase tracking-widest text-brand-gold-dark block">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-green">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Our commitment to quality, integrity, and timely delivery has won us the trust 
              of leading corporate partners and private land banking buyers.
            </p>
          </div>

          <Carousel items={testimonialsData} />
        </div>
      </section>

      {/* 7. PREMIUM BANNER CALL-TO-ACTION */}
      <section className="py-20 bg-brand-green text-white relative overflow-hidden">
        {/* Decorative layout elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading tracking-tight">
            Ready to Secure Your Investment?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Whether you want to build a contemporary masterpiece, construct robust civil infrastructure, 
            or acquire verified plots in appreciation zones, our professionals are ready to help.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-gold text-brand-charcoal hover:bg-white hover:text-brand-green font-bold text-sm tracking-wide rounded-full shadow-lg transition-all"
            >
              Get a Free Consultation
            </Link>
            <a
              href={`https://wa.me/${siteConfig.phones.support}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 hover:bg-white/5 text-white font-bold text-sm tracking-wide rounded-full transition-all"
            >
              <MessageSquare size={16} />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
