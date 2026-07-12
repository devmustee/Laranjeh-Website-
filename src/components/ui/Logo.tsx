import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  light?: boolean; // If true, logo text will be white. If false, dark/charcoal.
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  light = false,
  showText = true,
}) => {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* SVG Icon part of Logo */}
      <svg
        width="42"
        height="42"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-500 group-hover:scale-105"
        aria-label="Leranjeh Building Logo Icon"
      >
        {/* Black circular background (optional, but makes it stand out premium) */}
        <circle cx="50" cy="50" r="48" fill="#111111" stroke="#C5A059" strokeWidth="1" />
        
        {/* Outer circular gold accents */}
        <path
          d="M 12,50 A 38,38 0 0 1 88,50"
          stroke="#C5A059"
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.6"
        />
        
        {/* Left white stylized hook (continuous path) */}
        <path
          d="M 48 15 L 35 25 L 35 72 L 50 59"
          stroke="#FFFFFF"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right white stylized hook (continuous path) */}
        <path
          d="M 52 15 L 65 25 L 65 60"
          stroke="#FFFFFF"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Center gold stacked chevrons (4 nested paths) */}
        <path
          d="M 41 29 L 50 22 L 59 29"
          stroke="#C5A059"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 41 39 L 50 32 L 59 39"
          stroke="#C5A059"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 41 49 L 50 42 L 59 49"
          stroke="#C5A059"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 41 59 L 50 52 L 59 59"
          stroke="#C5A059"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />


      </svg>

      {/* Typography part of Logo */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span
            className={`font-heading font-extrabold text-[1.4rem] tracking-[0.08em] leading-none transition-colors duration-300 ${
              light ? "text-white" : "text-brand-charcoal"
            }`}
          >
            LERANJEH
          </span>
          <span
            className={`font-sans font-semibold text-[0.45rem] tracking-[0.16em] uppercase mt-0.5 leading-none transition-colors duration-300 ${
              light ? "text-brand-gold-light" : "text-brand-gold-dark"
            }`}
          >
            INVESTMENT & ASSET CORRIDOR
          </span>
        </div>
      )}
    </Link>
  );
};
