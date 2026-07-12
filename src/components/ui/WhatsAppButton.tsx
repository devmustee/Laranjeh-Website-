"use client";

import React from "react";
import { MessageSquareDot } from "lucide-react";
import { siteConfig } from "@/data/siteData";

export const WhatsAppButton: React.FC = () => {
  // Pre-filled message for WhatsApp inquiry
  const message = encodeURIComponent(
    "Hello Leranjeh Nigeria Limited, I am visiting your website and would like to enquire about your services and properties."
  );
  
  const whatsappUrl = `https://wa.me/${siteConfig.phones.support}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-45 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group hover:bg-[#20ba5a]"
      aria-label="Contact Leranjeh on WhatsApp"
    >
      {/* Floating text helper shown on hover */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-bold pl-0 group-hover:pl-2 group-hover:pr-2 leading-none flex items-center">
        Chat with Us
      </span>
      <MessageSquareDot size={24} className="shrink-0" />
      
      {/* Subtle ping pulse animation indicator */}
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-gold-light"></span>
      </span>
    </a>
  );
};
