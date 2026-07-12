"use client";

import React, { useState } from "react";
import { MapPin, ExternalLink, RefreshCw } from "lucide-react";

interface CustomMapProps {
  embedUrl: string;
  address: string;
  title: string;
}

export const CustomMap: React.FC<CustomMapProps> = ({
  embedUrl,
  address,
  title,
}) => {
  const [loading, setLoading] = useState(true);

  // Generate external Google Maps link
  const query = encodeURIComponent(address);
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border-2 border-brand-gray bg-brand-gray/20 shadow-md h-[350px] md:h-[400px] group">
      
      {/* Loading indicator */}
      {loading && (
        <div className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center gap-2">
          <RefreshCw size={24} className="animate-spin text-brand-gold" />
          <span className="text-xs text-gray-500 font-medium">Loading Map Coordinates...</span>
        </div>
      )}

      {/* Actual IFrame map element */}
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${title} Map Location`}
        onLoad={() => setLoading(false)}
        className="w-full h-full grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
      />

      {/* Styled top overlay layout */}
      <div className="absolute bottom-4 left-4 right-4 z-20 glass-card p-4 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-brand-charcoal text-xs">
        <div className="flex items-start gap-2.5">
          <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold font-heading text-sm text-brand-green leading-none mb-1">
              {title}
            </h4>
            <p className="text-gray-600 line-clamp-1 max-w-[280px]">
              {address}
            </p>
          </div>
        </div>

        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-brand-green text-white hover:bg-brand-gold hover:text-brand-charcoal px-3 py-2 rounded-lg font-bold transition-all shadow-sm shrink-0"
        >
          <span>Navigate</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
};
