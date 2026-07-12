"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "@/data/siteData";
import { MapPin, ArrowRight, ShieldCheck } from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Residential", "Land Banking", "Infrastructure"];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-brand-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop"
            alt="Real estate developments backdrop"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-green/90" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Projects Portfolio
          </h1>
          <p className="text-brand-gold-light font-medium tracking-widest text-xs uppercase sm:text-sm">
            Legally Secured Real Estate Layouts
          </p>
        </div>
      </section>

      {/* 2. Filter Navigation & Intro */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-gold-dark block">
            Signature Layouts
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-green">
            Featured Investment Properties
          </h2>
          <p className="text-gray-650 text-xs sm:text-sm">
            Leranjeh Nigeria Limited manages, secures, and develops premium property tracts. 
            All portfolios include certified government coordinates and verified title records.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center items-center">
          <div className="inline-flex flex-wrap items-center gap-1.5 bg-brand-gray/40 border border-brand-gray-dark p-1 rounded-full shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 xl:px-6 py-2 rounded-full text-2xs font-extrabold uppercase tracking-wider transition-colors duration-350 focus:outline-none ${
                  filter === cat
                    ? "text-white"
                    : "text-gray-500 hover:text-brand-green"
                }`}
              >
                {filter === cat && (
                  <motion.span
                    layoutId="activeProjectCategory"
                    className="absolute inset-0 bg-brand-green rounded-full z-0 shadow-xs"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Projects Grid Display */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.slug}
                className="bg-white rounded-2xl overflow-hidden border border-brand-gray-dark shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image panel */}
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

                {/* Info Content */}
                <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold">
                      <MapPin size={14} className="text-brand-gold" />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-brand-charcoal group-hover:text-brand-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights checks */}
                    <div className="pt-2 space-y-1.5">
                      {project.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-2xs text-gray-700 font-medium">
                          <ShieldCheck size={12} className="text-brand-green" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-brand-gray pt-4 flex items-center justify-between mt-auto">
                    <span className="text-3xs font-extrabold text-brand-green bg-brand-green/5 border border-brand-green/10 px-2 py-1 rounded uppercase tracking-wider">
                      C of O / Layout
                    </span>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand-gold-dark hover:text-brand-green transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Trust factors callout */}
      <section className="bg-brand-gray/30 border-t py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "200+ Projects", desc: "Delivered successfully" },
            { title: "Verified Titles", desc: "100% legal security" },
            { title: "Smart Laying", desc: "Cohesive master plans" },
            { title: "High Returns", desc: "Top location appreciation" }
          ].map((item, i) => (
            <div key={i} className="space-y-1">
              <h4 className="font-heading font-extrabold text-base sm:text-lg text-brand-green">{item.title}</h4>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
