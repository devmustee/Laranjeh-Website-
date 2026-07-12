"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Briefcase, Building } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";

interface SiteVisitCardProps {
  imgSrc: string;
  fallbackSrc: string;
  title: string;
  desc: string;
}

const SiteVisitCard: React.FC<SiteVisitCardProps> = ({ imgSrc, fallbackSrc, title, desc }) => {
  const [imgUrl, setImgUrl] = useState(imgSrc);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-brand-gray-dark shadow-sm hover:shadow-xl transition-all duration-300 group text-left flex flex-col">
      <div className="relative h-64 w-full overflow-hidden shrink-0 bg-brand-gray">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onError={() => {
            setImgUrl(fallbackSrc);
          }}
        />
      </div>
      <div className="p-6 space-y-2">
        <h4 className="font-heading font-extrabold text-base text-brand-green">
          {title}
        </h4>
        <p className="text-gray-500 text-xs leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default function LeadershipPage() {
  const milestones = [
    {
      role: "Founder & Group CEO",
      company: "Leranjeh Nigeria Limited",
      period: "2015 - Present",
      icon: <Building className="text-brand-gold" size={20} />,
      details: "Steering the firm's strategic focus, overseeing development pipelines for signature estates like Aso Royale, and directing institutional architecture consultations across West Africa."
    },
    {
      role: "Founder & Architect",
      company: "DME Estates",
      period: "Prior Years",
      icon: <Briefcase className="text-brand-gold" size={20} />,
      details: "Pioneered luxury residential structures in Abuja and developed high-end boutique properties, establishing a baseline of quality in real estate execution."
    },
    {
      role: "Company Architect",
      company: "Wiser Estate",
      period: "Prior Years",
      icon: <Briefcase className="text-brand-gold" size={20} />,
      details: "Directed layout planning, architectural styling, building approvals, and project handovers for multiple premium gated communities."
    },
    {
      role: "Project Manager",
      company: "Brains and Hammers Limited",
      period: "Prior Years",
      icon: <Briefcase className="text-brand-gold" size={20} />,
      details: "Supervised high-density housing projects and managed massive infrastructure layouts, budgeting, material sourcing, and contractor teams."
    }
  ];

  const highlights = [
    { number: "200+", label: "Completed Projects", desc: "Successfully directed and handed over architectural, civil, and property development projects." },
    { number: "1", label: "Personality of the Year", desc: "Awarded the prestigious Real Estate Personality Hero of the Year Award for trust and leadership." },
    { number: "10+", label: "Years Experience", desc: "Pioneering contemporary African architectural trends and large estate management systems." }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-brand-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
            alt="Executive portrait background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-green/95" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Executive Leadership
          </h1>
          <p className="text-brand-gold-light font-medium tracking-widest text-xs uppercase sm:text-sm">
            Steered by Professional Visionaries
          </p>
        </div>
      </section>

      {/* 2. Executive Profile Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Executive Portrait & Award Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-brand-gray-dark group">
              <SafeImage
                src="/images/ceo-portrait.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Architect Kashawa Daniel Mbororo, Founder & Group CEO of Leranjeh"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <span className="bg-brand-gold text-brand-charcoal text-2xs font-extrabold px-3 py-1 rounded uppercase tracking-wider mb-2 inline-block">
                  Founder & Group CEO
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white leading-none">
                  Arch. Kashawa Daniel Mbororo
                </h3>
                <p className="text-brand-gold-light text-xs font-semibold uppercase mt-1 tracking-wider">
                  Contemporary African Architect
                </p>
              </div>
            </div>

            {/* Achievement Award Card */}
            <div className="p-6 bg-brand-gold/10 border border-brand-gold/25 rounded-2xl text-left flex items-start gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-brand-gold text-brand-charcoal flex items-center justify-center shrink-0">
                <Award size={24} />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-base text-brand-green">
                  Personality Hero of the Year
                </h4>
                <p className="text-gray-700 text-xs leading-relaxed">
                  Received the **Award of Excellence: Real Estate Personality Hero of the Year** from the **Dream Youth Center of Nigeria**, recognizing leadership, integrity, and youth empowerment.
                </p>
              </div>
            </div>
          </div>

          {/* Biography and History */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-gold-dark block">
                Executive Profile
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-brand-green">
                Architect Kashawa Daniel Mbororo
              </h2>
              <h3 className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed">
                Pioneering trust and design excellence across Abuja and Adamawa State.
              </h3>
            </div>

            <div className="text-gray-650 text-sm md:text-base space-y-4 leading-relaxed font-body">
              <p>
                Architect Kashawa Daniel Mbororo is a contemporary African architect and real estate 
                visionary with a proven record of designing and delivering over 200 construction projects. 
                His design ethos balances luxury minimalism with local environmental conditions, 
                maximizing layout ventilation, smart space utilisation, and durable building integrity.
              </p>
              <p>
                Prior to founding Leranjeh Nigeria Limited, Arch. Daniel served as a Company Architect at 
                **Wiser Estate**, overseeing extensive planning approvals and layouts. He later served as a 
                senior Project Manager at **Brains and Hammers Limited**, managing large construction teams, 
                site budgeting, and complex logistics operations. This deep technical and management background 
                guarantees that every Leranjeh project complies with rigorous engineering standards.
              </p>
            </div>

            {/* CEO Award of Excellence Quote */}
            <div className="p-6 border-l-4 border-brand-gold bg-brand-gray/50 rounded-r-2xl italic space-y-3">
              <p className="text-gray-705 text-xs sm:text-sm leading-relaxed">
                &ldquo;Honored and deeply humbled to receive the Award of Excellence Recognition as the Real Estate Personality Hero of the Year from the Dream Youth Center of Nigeria. This recognition is more than an award &mdash; it is a reminder that integrity, vision, and service leave lasting footprints. I dedicate this honor to my incredible team, our clients, partners, and every young person who believes that excellence is built one decision at a time.&rdquo;
              </p>
              <cite className="block text-2xs font-extrabold text-brand-green uppercase not-italic">
                &mdash; Arch. Kashawa Daniel Mbororo (GMD, Leranjeh)
              </cite>
            </div>

            {/* Achievements Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-brand-gray border-b pb-8">
              {highlights.map((item) => (
                <div key={item.label} className="space-y-1.5">
                  <span className="text-brand-gold font-heading text-3xl font-extrabold block">
                    {item.number}
                  </span>
                  <h4 className="font-heading font-bold text-sm text-brand-green">
                    {item.label}
                  </h4>
                  <p className="text-gray-500 text-2xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Timeline Experience Cards */}
            <div className="space-y-6">
              <h4 className="font-heading font-bold text-lg text-brand-green border-b pb-2">
                Professional Leadership Timeline
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {milestones.map((item) => (
                  <div
                    key={item.company}
                    className="p-5 bg-brand-gray/30 border border-brand-gray-dark rounded-xl flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div className="space-y-1 text-left">
                      <span className="text-gray-400 text-2xs font-semibold uppercase tracking-wider block">
                        {item.period}
                      </span>
                      <h5 className="font-heading font-bold text-sm text-brand-charcoal">
                        {item.role}
                      </h5>
                      <span className="text-brand-green text-xs font-bold block">
                        {item.company}
                      </span>
                      <p className="text-gray-500 text-3xs leading-relaxed pt-1">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CEO Site Inspections & Field Gallery */}
      <section className="py-24 bg-brand-gray/30 border-t border-b border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-gold-dark block">
              Active Project Supervision
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-brand-green">
              GMD Site Inspections & Field Operations
            </h2>
            <p className="text-gray-650 text-sm leading-relaxed">
              Arch. Kashawa Daniel Mbororo believes in hands-on quality enforcement. From soil excavation 
              to concrete load trials, structural framework audits, and hosting client/investor tours, our GMD actively directs operations on-site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: "visit-1",
                imgSrc: "/images/site-visit-1.jpg",
                fallbackSrc: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
                title: "Structural Tolerance Audits",
                desc: "Inspecting core frame dimensions and scaffolding safety parameters alongside engineering staff."
              },
              {
                id: "visit-2",
                imgSrc: "/images/site-visit-2.jpg",
                fallbackSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
                title: "Estate Infrastructure Laying",
                desc: "Supervising multi-family block foundations and access roads charting in our key residential estates."
              },
              {
                id: "visit-3",
                imgSrc: "/images/site-visit-3.jpg",
                fallbackSrc: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop",
                title: "Operations Quality Audits",
                desc: "Reviewing spatial plans and structural drawings directly with site foremen on our branded service unit truck."
              },
              {
                id: "visit-4",
                imgSrc: "/images/investor-visit-1.jpg",
                fallbackSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
                title: "Investor Layout Inspections",
                desc: "Arch. Kashawa Daniel Mbororo pointing out partition plans and construction phases to international real estate partners."
              },
              {
                id: "visit-5",
                imgSrc: "/images/investor-visit-2.jpg",
                fallbackSrc: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop",
                title: "Building Integrity Review",
                desc: "Discussing framework alignment and load-bearing concrete specs inside the active structure with prospective investors."
              },
              {
                id: "visit-6",
                imgSrc: "/images/investor-visit-3.jpg",
                fallbackSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
                title: "On-Site Design Consultation",
                desc: "Answering specific spatial layout and biophilic ventilation design queries directly on the development floor."
              }
            ].map((item) => (
              <SiteVisitCard
                key={item.id}
                imgSrc={item.imgSrc}
                fallbackSrc={item.fallbackSrc}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Alliances & Alliances Quote */}
      <section className="py-24 bg-white border-t border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Quote Block */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-gold-dark block">
                Executive Ideology
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-brand-green">
                Strategic Alliances as Corporate Capital
              </h2>
              <div className="p-6 border-l-4 border-brand-gold bg-brand-gray/50 rounded-r-2xl italic space-y-4">
                <p className="text-gray-705 text-xs sm:text-sm leading-relaxed font-body">
                  &ldquo;Real growth is rarely built in isolation. Networking with visionary business leaders creates access to ideas, opportunities, structure, and influence. Strong alliances are not just about connections &mdash; they are about shared value, trust, and collective progress. In today’s world, strategic relationships are a form of capital.&rdquo;
                </p>
                <cite className="block text-2xs font-extrabold text-brand-green uppercase not-italic">
                  &mdash; Arch. Kashawa Daniel Mbororo (GMD, Leranjeh)
                </cite>
              </div>
            </div>

            {/* Photos Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    id: "net-1",
                    imgSrc: "/images/network-1.jpg",
                    fallbackSrc: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
                    title: "Visionary Business Leader Alignments",
                    desc: "Collaborating with local and regional developers to unlock large land tracts."
                  },
                  {
                    id: "net-2",
                    imgSrc: "/images/network-2.jpg",
                    fallbackSrc: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=800&auto=format&fit=crop",
                    title: "Strategic Roundtables",
                    desc: "Fostering joint ventures built on mutual integrity, shared goals, and execution success."
                  }
                ].map((item) => (
                  <SiteVisitCard
                    key={item.id}
                    imgSrc={item.imgSrc}
                    fallbackSrc={item.fallbackSrc}
                    title={item.title}
                    desc={item.desc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance Callout */}
      <section className="bg-brand-charcoal text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold">
            Commitment to Built Environment Ethics
          </h3>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Our leadership operates under strict registration codes with the Architects Registration 
            Council of Nigeria (ARCON) and the Council for the Regulation of Engineering in Nigeria (COREN).
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
