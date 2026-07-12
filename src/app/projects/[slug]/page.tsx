import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData, siteConfig } from "@/data/siteData";
import { CustomMap } from "@/components/ui/CustomMap";
import { SafeImage } from "@/components/ui/SafeImage";
import { MapPin, Phone, ShieldCheck, Tag, Info, ArrowLeft } from "lucide-react";

// Pre-generate static routes for the projects
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Pre-filled WhatsApp messages based on project details
  const whatsappMsg = encodeURIComponent(
    `Hello Leranjeh Nigeria Limited, I am interested in investing in "${project.title}" located at ${project.location}. Please send me the availability list and purchase application forms.`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.phones.support}?text=${whatsappMsg}`;

  // Image collage placeholders for the gallery block
  const galleryImages = (project.gallery && project.gallery.length >= 3)
    ? project.gallery
    : [
        project.image,
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
      ];

  const fallbackGallery = [
    project.image,
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Back link & Title Banner */}
      <section className="bg-brand-gray/40 border-b border-brand-gray-dark py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-brand-green transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Projects</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <span className="text-2xs font-extrabold uppercase bg-brand-green/10 text-brand-green border border-brand-green/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-2xs font-extrabold uppercase bg-brand-gold/10 text-brand-gold-dark border border-brand-gold/20 px-3 py-1 rounded-full">
              {project.availability}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Main Media Banner & Basic Specs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Gallery Block */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-brand-green text-left">
              {project.title}
            </h1>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 text-left">
              <MapPin size={14} className="text-brand-gold" />
              <span>{project.location}</span>
            </div>

            {/* Premium Photo Grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-3 relative h-[380px] rounded-2xl overflow-hidden shadow-sm border">
                <SafeImage
                  src={galleryImages[0]}
                  fallbackSrc={fallbackGallery[0]}
                  alt={`${project.title} Render Master`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative h-32 rounded-xl overflow-hidden shadow-xs border">
                <SafeImage
                  src={galleryImages[1]}
                  fallbackSrc={fallbackGallery[1]}
                  alt={`${project.title} Layout View`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 rounded-xl overflow-hidden shadow-xs border">
                <SafeImage
                  src={galleryImages[2]}
                  fallbackSrc={fallbackGallery[2]}
                  alt={`${project.title} Construction Detail`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-brand-gray/50 rounded-xl border border-brand-gray-dark flex flex-col justify-center items-center text-center p-4">
                <span className="text-brand-gold-dark font-heading font-extrabold text-lg block">
                  3+ Renders
                </span>
                <span className="text-2xs text-gray-500">More details onsite</span>
              </div>
            </div>

            {/* Overview / Description */}
            <div className="text-left space-y-4 pt-4">
              <h3 className="font-heading font-bold text-lg text-brand-charcoal border-b pb-2 flex items-center gap-2">
                <Info size={18} className="text-brand-green" />
                <span>Project Overview</span>
              </h3>
              <p className="text-gray-650 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Estate Infrastructure Features list */}
            <div className="text-left space-y-4 pt-4">
              <h3 className="font-heading font-bold text-lg text-brand-charcoal border-b pb-2 flex items-center gap-2">
                <ShieldCheck size={18} className="text-brand-green" />
                <span>Estate Features & Amenities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 bg-brand-gray/20 p-3 rounded-xl border border-brand-gray-dark/40">
                    <ShieldCheck size={16} className="text-brand-green shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Interactive Map Block */}
            <div className="text-left space-y-4 pt-6">
              <h3 className="font-heading font-bold text-lg text-brand-charcoal border-b pb-2">
                Physical Coordinates Map
              </h3>
              <CustomMap
                embedUrl={project.mapUrl}
                address={project.location}
                title={project.title}
              />
            </div>
          </div>

          {/* Sidebar Inquiry Card & Details */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Investment Outline Box */}
            <div className="bg-brand-green text-white p-8 rounded-2xl border border-brand-gold/20 shadow-xl text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-bl-full pointer-events-none" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-brand-gold-light font-bold text-2xs uppercase tracking-wider">
                  <Tag size={12} />
                  <span>Exclusive Launch Pricing</span>
                </div>
                <div>
                  <span className="text-2xs text-gray-300 uppercase tracking-widest block">
                    Plots Selling From
                  </span>
                  <span className="font-heading font-black text-3xl sm:text-4xl text-brand-gold block mt-1">
                    {project.startingPrice}
                  </span>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Minimum Plot Size:</span>
                    <span className="font-bold text-white">450 - 500 sqm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Verification coordinates:</span>
                    <span className="font-bold text-white">Registry Ready</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Survey Approval Status:</span>
                    <span className="font-bold text-white">Approved Layout</span>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                  >
                    <span>Enquire via WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phones.support}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 border border-white/20 hover:bg-white/5 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                  >
                    <Phone size={14} className="text-brand-gold" />
                    <span>Call operations support</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Contact Form */}
            <div className="bg-brand-gray/30 border border-brand-gray-dark p-6 rounded-2xl text-left space-y-4">
              <h4 className="font-heading font-bold text-base text-brand-green">
                Book Layout Inspection
              </h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                Fill the details below. Our corporate real estate executives will contact you 
                to schedule physical or virtual live coordinates boundaries inspection.
              </p>
              
              <form className="space-y-3.5">
                <div>
                  <label className="block text-3xs font-extrabold uppercase text-gray-500 tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    className="w-full bg-white border border-brand-gray-dark rounded-lg py-2 px-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-green"
                  />
                </div>
                <div>
                  <label className="block text-3xs font-extrabold uppercase text-gray-500 tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    className="w-full bg-white border border-brand-gray-dark rounded-lg py-2 px-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-green"
                  />
                </div>
                <div>
                  <label className="block text-3xs font-extrabold uppercase text-gray-500 tracking-wider mb-1">
                    Message Summary
                  </label>
                  <textarea
                    rows={3}
                    defaultValue={`I want to schedule site inspection for ${project.title}.`}
                    className="w-full bg-white border border-brand-gray-dark rounded-lg py-2 px-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-brand-green resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-green hover:bg-brand-gold hover:text-brand-charcoal text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
                >
                  Request Inspection
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
