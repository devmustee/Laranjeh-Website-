import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData } from "@/data/siteData";
import { SafeImage } from "@/components/ui/SafeImage";
import { Clock, Calendar, ArrowLeft, ArrowRight, User } from "lucide-react";

// Pre-generate static routes for all blog posts
export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get other posts for related reading sidebar
  const relatedPosts = blogData.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Sub-Header breadcrumbs */}
      <section className="bg-brand-gray/40 border-b border-brand-gray-dark py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-green transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Insights Blog</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <span className="text-2xs font-extrabold uppercase bg-brand-green/10 text-brand-green border border-brand-green/20 px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Article Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-brand-green leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 font-bold border-b pb-6 border-brand-gray">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-brand-gold" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-gold" />
              <span>{post.readTime}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-brand-gold" />
              <span>By Leranjeh Media</span>
            </span>
          </div>
        </div>
      </section>

      {/* 3. Hero Image Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-[250px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-md border">
          <SafeImage
            src={post.image}
            fallbackSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* 4. Article Core Grid (Content & Sidebar) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Body HTML text */}
          <div className="lg:col-span-8 space-y-6 text-left text-gray-650 text-sm sm:text-base leading-relaxed font-body">
            {post.bodyHTML ? (
              <div 
                className="prose prose-green max-w-none space-y-6"
                dangerouslySetInnerHTML={{ __html: post.bodyHTML }} 
              />
            ) : (
              <p>{post.content}</p>
            )}
            
            {/* Action Card at End */}
            <div className="mt-12 p-8 rounded-2xl bg-brand-gray/30 border border-brand-gray-dark space-y-4">
              <h4 className="font-heading font-extrabold text-lg text-brand-green">
                Smart Investments Start with Informed Decisions
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Whether you want to bank land with zero-litigation layout guarantees or require 
                geotechnical structural development, our directors and engineering teams are ready to help.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-gold hover:text-brand-charcoal text-white font-bold text-xs px-6 py-3 rounded-full transition-all"
                >
                  <span>Request Corporate Consultation</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4 space-y-8 text-left">
            
            {/* Related posts */}
            <div className="p-6 bg-brand-gray/20 border border-brand-gray-dark rounded-2xl space-y-6">
              <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-brand-green border-b pb-3 border-brand-gray-dark">
                Related Reading
              </h4>
              
              <div className="space-y-6">
                {relatedPosts.map((related) => (
                  <Link 
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block group space-y-2"
                  >
                    <div className="relative h-28 rounded-lg overflow-hidden border">
                      <SafeImage
                        src={related.image}
                        fallbackSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop"
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase text-brand-gold-dark block pt-1">
                      {related.category}
                    </span>
                    <h5 className="font-heading font-bold text-xs text-brand-charcoal group-hover:text-brand-green transition-colors line-clamp-2 leading-snug">
                      {related.title}
                    </h5>
                  </Link>
                ))}
              </div>
            </div>

            {/* Premium CTA banner */}
            <div className="relative overflow-hidden rounded-2xl bg-brand-green text-white p-6 shadow-sm flex flex-col justify-between h-[220px]">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-extrabold tracking-widest text-brand-gold">
                  Explore Portfolios
                </span>
                <h4 className="font-heading font-extrabold text-lg leading-tight">
                  Verified Property Investments
                </h4>
                <p className="text-white/80 text-3xs leading-relaxed">
                  Browse our verified properties in Jabi, Idu-Abuja, and Karewa-Yola Adamawa State.
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/properties"
                  className="inline-flex items-center gap-1 bg-brand-gold text-brand-charcoal hover:bg-white hover:text-brand-green font-bold text-2xs px-4 py-2 rounded-lg transition-all"
                >
                  <span>View Properties</span>
                  <ArrowRight size={10} />
                </Link>
              </div>
            </div>

          </aside>

        </div>
      </section>

    </div>
  );
}
