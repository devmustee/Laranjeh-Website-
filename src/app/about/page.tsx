"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Target, Eye, ShieldCheck, HeartHandshake, Compass } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  } as const;

  const coreValues = [
    {
      title: "Quality",
      description: "We deploy premium materials, qualified engineers, and strict site controls to build structures that stand the test of time.",
      icon: <Award className="text-brand-gold" size={24} />,
    },
    {
      title: "Integrity",
      description: "Transparency in documentation, billing (BOQ), and legal title disclosures is our baseline. What we promise is what we build.",
      icon: <ShieldCheck className="text-brand-gold" size={24} />,
    },
    {
      title: "Innovation",
      description: "Integrating smart technology, biophilic architecture, and modern eco-friendly materials into classical Nigerian layout models.",
      icon: <Compass className="text-brand-gold" size={24} />,
    },
    {
      title: "Professionalism",
      description: "Our workforce is composed of certified COREN engineers, NIA architects, and PMI project managers operating at world-class standards.",
      icon: <CheckCircle2 className="text-brand-gold" size={24} />,
    },
    {
      title: "Attention to Detail",
      description: "As our slogan states: 'Excellent and attention to detail is our culture.' We review structural tolerances down to the millimeter.",
      icon: <HeartHandshake className="text-brand-gold" size={24} />,
    },
    {
      title: "Customer Satisfaction",
      description: "Delivering responsive communication, legal protection for investments, and lifetime customer service support for estates.",
      icon: <Target className="text-brand-gold" size={24} />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-brand-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop"
            alt="Real estate architectural rendering background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-green/90" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            About Leranjeh Nigeria Limited
          </h1>
          <p className="text-brand-gold-light font-medium tracking-widest text-xs uppercase sm:text-sm">
            Excellent and attention to detail is our culture
          </p>
        </div>
      </section>

      {/* 2. Overview, Mission & Vision */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Company Brief Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-gold-dark block">
              Who We Are
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-brand-green">
              Africa&apos;s Emerging Partner in Sustainable Development
            </h2>
            <p className="text-gray-650 text-sm md:text-base leading-relaxed">
              Leranjeh Nigeria Limited is a premier corporate conglomerate focusing on civil construction, 
              contemporary architectural design, mechanical-electrical-structural engineering, property layout 
              developments, and high-yield real estate investments. Founded by professional builders 
              and designers, we bridge the gap between design theory and durable building execution.
            </p>
            <p className="text-gray-650 text-sm md:text-base leading-relaxed">
              With offices in Abuja and Yola, we have successfully managed residential layouts, verified 
              large-scale land banking systems, and public civil infrastructure. We represent transparency, 
              legal protection, and premium aesthetics in the Nigerian built environment.
            </p>
            
            <div className="relative h-[250px] rounded-2xl overflow-hidden mt-6 border border-brand-gray-dark shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
                alt="Construction workers inspecting site"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-5 space-y-8">
            {/* Mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-brand-gray/50 p-8 rounded-2xl border border-brand-gray-dark text-left space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-green">Our Mission</h3>
              <p className="text-gray-650 text-xs md:text-sm leading-relaxed">
                To deliver innovative construction and real estate solutions that create lasting value 
                for individuals, families, businesses, and communities. We focus on structural durability 
                and verified title security to guarantee investment peace of mind.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-brand-gray/50 p-8 rounded-2xl border border-brand-gray-dark text-left space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center">
                <Eye size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-brand-green">Our Vision</h3>
              <p className="text-gray-650 text-xs md:text-sm leading-relaxed">
                To become Africa&apos;s most trusted construction and real estate development company, 
                synonymous with premium architectural quality, legal integrity, and structural excellence.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-24 bg-brand-gray/40 border-y border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-gold-dark block">
              Our Principles
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-brand-green">
              Our Core Corporate Values
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              Our growth is guided by an unwavering adherence to values that put structural security, 
              design innovation, and absolute honesty above quick profits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="bg-white p-8 rounded-2xl shadow-sm border border-brand-gray-dark text-left space-y-4 premium-shadow-hover"
              >
                <div className="w-10 h-10 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="font-heading font-bold text-lg text-brand-charcoal">{val.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline / Milestones */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
        <div className="space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-gold-dark block">
            Progress Over The Years
          </span>
          <h2 className="text-3xl font-extrabold font-heading text-brand-green">
            Key Corporate Milestones
          </h2>
        </div>

        <div className="relative border-l border-brand-gray-dark max-w-3xl mx-auto text-left pl-6 sm:pl-10 space-y-10">
          {[
            {
              year: "2015",
              title: "Foundation & Inception",
              desc: "Founded by professional built environment specialists in Abuja, undertaking private architectural consultations and structural designs.",
            },
            {
              year: "2018",
              title: "Branch Expansion to Yola",
              desc: "Established Karewa regional operations to service infrastructural demands and land banking programs in Adamawa and surrounding northern hubs.",
            },
            {
              year: "2021",
              title: "Signature Estates Launch",
              desc: "Acquired and master-planned Aso Royale Estate, providing elite residential solutions and starting transparent land title certifications.",
            },
            {
              year: "2024",
              title: "Uncle Pikin PR Partnership",
              desc: "Launched a nation-wide public campaign with Uncle Pikin to advocate for verified land banking and structural standards in Nigerian real estate.",
            },
          ].map((milestone) => (
            <div key={milestone.year} className="relative">
              <span className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-brand-gold border-4 border-white flex items-center justify-center shadow-md" />
              <div className="bg-brand-gray/30 p-6 rounded-xl border border-brand-gray-dark">
                <span className="font-heading font-extrabold text-brand-gold-dark text-lg block mb-1">
                  {milestone.year}
                </span>
                <h4 className="font-heading font-bold text-base text-brand-green mb-2">
                  {milestone.title}
                </h4>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Wrapper */}
      <section className="bg-brand-green text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold">
            Want to Collaborate with Our Professional Team?
          </h3>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            From geotechnical soil testing to final architectural key handover, 
            our professionals are standing by.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-8 py-3 bg-brand-gold text-brand-charcoal hover:bg-white hover:text-brand-green font-bold text-sm tracking-wide rounded-full transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
