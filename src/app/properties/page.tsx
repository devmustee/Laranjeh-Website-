"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { propertiesData, siteConfig } from "@/data/siteData";
import { Search, MapPin, Ruler, Star, Phone, MessageSquare, Shield } from "lucide-react";

export default function PropertiesPage() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [priceSort, setPriceSort] = useState("default");

  // Get unique locations list
  const locationsList = useMemo(() => {
    const locations = propertiesData.map((p) => {
      if (p.location.includes("Abuja")) return "Abuja";
      if (p.location.includes("Yola")) return "Yola";
      return "Other";
    });
    return ["All", ...Array.from(new Set(locations))];
  }, []);

  // Filter and sort items
  const filteredAndSortedProperties = useMemo(() => {
    let result = [...propertiesData];

    // Search query match
    if (search.trim() !== "") {
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Location match
    if (locationFilter !== "All") {
      result = result.filter((p) => p.location.includes(locationFilter));
    }

    // Sort order
    if (priceSort === "low-high") {
      result.sort((a, b) => a.rawPrice - b.rawPrice);
    } else if (priceSort === "high-low") {
      result.sort((a, b) => b.rawPrice - a.rawPrice);
    }

    return result;
  }, [search, locationFilter, priceSort]);

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-brand-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
            alt="Real estate properties facade"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-green/90" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Available Properties
          </h1>
          <p className="text-brand-gold-light font-medium tracking-widest text-xs uppercase sm:text-sm">
            Legally Secured Land & Housing Assets
          </p>
        </div>
      </section>

      {/* 2. Interactive Search & Filters */}
      <section className="py-8 bg-brand-gray/30 border-b border-brand-gray-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
                <Search size={16} />
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search properties by title or location..."
                className="w-full bg-white border border-brand-gray-dark rounded-xl py-3 pl-10 pr-4 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-green transition-colors shadow-xs"
              />
            </div>

            {/* Location selector tabs */}
            <div className="md:col-span-4 flex flex-col items-start gap-1.5 w-full">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold-dark">
                Filter by Region:
              </span>
              <div className="flex items-center gap-1 w-full bg-brand-gray/40 border border-brand-gray-dark p-1 rounded-full">
                {locationsList.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocationFilter(loc)}
                    className={`relative flex-1 text-center py-2.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-colors duration-300 focus:outline-none ${
                      locationFilter === loc
                        ? "text-white"
                        : "text-gray-500 hover:text-brand-green"
                    }`}
                  >
                    {locationFilter === loc && (
                      <motion.span
                        layoutId="activePropertyLocation"
                        className="absolute inset-0 bg-brand-green rounded-full z-0"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{loc === "All" ? "All" : loc}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price sort order */}
            <div className="md:col-span-3 flex flex-col items-start gap-1.5 w-full">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold-dark">
                Sort Price:
              </span>
              <select
                id="price-select"
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className="w-full bg-white border border-brand-gray-dark rounded-xl py-3 px-3 text-xs text-gray-800 focus:outline-none focus:border-brand-green shadow-xs"
              >
                <option value="default">Newest First</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Properties Listings Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredAndSortedProperties.length === 0 ? (
          <div className="text-center py-20 space-y-3">
            <h3 className="font-heading font-bold text-lg text-brand-green">No Properties Match Search</h3>
            <p className="text-gray-500 text-xs">Try selecting a different region or adjusting your query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredAndSortedProperties.map((property) => {
              // Pre-filled WhatsApp message for property inquiry
              const propMsg = encodeURIComponent(
                `Hello Leranjeh Nigeria Limited, I am interested in purchasing "${property.title}" located at ${property.location} priced at ${property.price}. Please provide purchase details.`
              );
              const propWhatsappUrl = `https://wa.me/${siteConfig.phones.support}?text=${propMsg}`;

              return (
                <article
                  key={property.id}
                  className="bg-white rounded-2xl overflow-hidden border border-brand-gray-dark shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
                >
                  {/* Photo Panel */}
                  <div className="relative h-56 w-full overflow-hidden shrink-0">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 bg-brand-green text-white text-3xs font-extrabold uppercase px-3 py-1 rounded-full shadow-sm tracking-wider">
                      {property.availability}
                    </div>

                    <div className="absolute bottom-4 right-4 bg-brand-charcoal/95 border border-brand-gold/30 text-brand-gold font-heading font-black text-sm px-3.5 py-1.5 rounded-lg shadow-sm">
                      {property.price}
                    </div>
                  </div>

                  {/* Body Content Details */}
                  <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-5">
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold">
                        <MapPin size={14} className="text-brand-gold" />
                        <span>{property.location}</span>
                      </div>
                      
                      <h3 className="font-heading font-extrabold text-lg text-brand-charcoal group-hover:text-brand-green transition-colors leading-snug">
                        {property.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-2xs text-gray-500 font-bold border-y border-brand-gray py-2.5">
                        <div className="flex items-center gap-1">
                          <Ruler size={13} className="text-brand-gold" />
                          <span>{property.landSize}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={13} className="text-brand-gold fill-brand-gold" />
                          <span className="text-brand-green">Potential: {property.investmentPotential}</span>
                        </div>
                      </div>

                      {/* Feature Bulletpoints */}
                      <div className="space-y-1.5 pt-1">
                        {property.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-2xs text-gray-600">
                            <Shield size={12} className="text-brand-green shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons footer */}
                    <div className="pt-5 border-t border-brand-gray grid grid-cols-2 gap-3 mt-auto">
                      <a
                        href={propWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
                      >
                        <MessageSquare size={13} />
                        <span>WhatsApp</span>
                      </a>
                      
                      <a
                        href={`tel:${siteConfig.phones.support}`}
                        className="flex items-center justify-center gap-1.5 py-3 border border-brand-gray-dark bg-brand-gray/50 hover:bg-brand-green hover:text-white text-gray-700 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                      >
                        <Phone size={13} className="text-brand-gold" />
                        <span>Call Agent</span>
                      </a>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Disclaimers security section */}
      <section className="bg-brand-charcoal text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-brand-gold">
            100% Anti-Fraud Registry Guarantees
          </h3>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Every plot purchased under the Leranjeh corridor is fenced, survey-charted by certified 
            surveyors, and cleared at the Abuja Geographic Information Systems (AGIS) or Yola Land Registry 
            before contract signature.
          </p>
        </div>
      </section>
    </div>
  );
}
