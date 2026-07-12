"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TestimonialItem } from "@/data/siteData";

interface CarouselProps {
  items: TestimonialItem[];
  autoplay?: boolean;
  autoplayInterval?: number; // milliseconds
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoplay = true,
  autoplayInterval = 6000,
}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = useCallback(() => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, nextSlide]);

  const activeItem = items[index];

  // Slide transition configurations
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 md:px-12 py-10 select-none">
      
      {/* Absolute background quote icon */}
      <div className="absolute top-0 left-6 text-brand-gold/10 pointer-events-none">
        <Quote size={120} className="fill-brand-gold/10" />
      </div>

      <div className="relative overflow-hidden min-h-[300px] md:min-h-[220px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
            className="w-full text-center space-y-6 px-2 md:px-6"
          >
            {/* Stars rating */}
            <div className="flex justify-center items-center gap-1">
              {[...Array(activeItem.rating)].map((_, i) => (
                <Star key={i} size={18} className="text-brand-gold fill-brand-gold" />
              ))}
            </div>

            {/* Testimonial body text */}
            <blockquote className="text-lg md:text-xl font-medium text-gray-700 italic leading-relaxed font-body">
              &ldquo;{activeItem.text}&rdquo;
            </blockquote>

            {/* Author info */}
            <div>
              <cite className="not-italic font-heading font-bold text-base md:text-lg text-brand-green block">
                {activeItem.name}
              </cite>
              <span className="text-xs md:text-sm text-brand-gold-dark font-semibold">
                {activeItem.role} {activeItem.company ? `• ${activeItem.company}` : ""}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider controls */}
      <div className="flex justify-between items-center mt-8">
        
        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="p-2.5 rounded-full border border-brand-gray-dark bg-white text-brand-green hover:bg-brand-gold hover:text-brand-charcoal hover:border-brand-gold transition-all duration-300 shadow-sm"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Bullet indicators */}
        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-brand-gold" : "w-2.5 bg-brand-gray-dark hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2.5 rounded-full border border-brand-gray-dark bg-white text-brand-green hover:bg-brand-gold hover:text-brand-charcoal hover:border-brand-gold transition-all duration-300 shadow-sm"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};
