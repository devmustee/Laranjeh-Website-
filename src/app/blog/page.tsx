"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/data/siteData";
import { Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-brand-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
            alt="Real estate blog updates background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-green/90" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Corporate Insights & Blog
          </h1>
          <p className="text-brand-gold-light font-medium tracking-widest text-xs uppercase sm:text-sm">
            Construction, Engineering & Investment Updates
          </p>
        </div>
      </section>

      {/* 2. Blog Posts List */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl overflow-hidden border border-brand-gray-dark shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              {/* Photo Panel */}
              <div className="relative h-52 w-full overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-75 group-hover:scale-101"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-brand-green text-white text-3xs font-extrabold uppercase px-3 py-1 rounded-full shadow-sm tracking-wider">
                  {post.category}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-3xs text-gray-500 font-bold">
                    <span className="text-brand-gold-dark">{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base text-brand-charcoal group-hover:text-brand-green transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="border-t border-brand-gray pt-4 flex items-center justify-between mt-auto">
                  <span className="text-3xs font-bold text-gray-400">
                    By Leranjeh Media
                  </span>
                  
                  {/* Since this is a CMS demo, we redirect to contact for inquiries on blogs */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-gold-dark hover:text-brand-green transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
