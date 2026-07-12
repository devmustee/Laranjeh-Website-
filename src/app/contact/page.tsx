"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { siteConfig } from "@/data/siteData";
import { CustomMap } from "@/components/ui/CustomMap";
import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

// Form validation schema with Zod
const contactSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormInput = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormInput) => {
    setApiError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit message");
      }
      setSubmitted(true);
      reset();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setApiError(msg);
    }
  };

  // WhatsApp prefilled message
  const whatsappMsg = encodeURIComponent(
    "Hello Leranjeh Nigeria Limited, I would like to get a consultation support for your services."
  );
  const whatsappUrl = `https://wa.me/${siteConfig.phones.support}?text=${whatsappMsg}`;

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-brand-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
            alt="Office exterior details backdrop"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-green/90" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Contact Us
          </h1>
          <p className="text-brand-gold-light font-medium tracking-widest text-xs uppercase sm:text-sm">
            Reach Out to Our Development Teams
          </p>
        </div>
      </section>

      {/* 2. Main Contact Coordinates Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Branch Offices Info & Direct Communication */}
          <div className="lg:col-span-6 space-y-10 text-left">
            <div className="space-y-4">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-gold-dark block">
                Office Coordinates
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-brand-green">
                Get In Touch With Us
              </h2>
              <p className="text-gray-650 text-sm leading-relaxed">
                Have questions about our signature layouts, verified land banking opportunities, 
                or structural engineering consultancies? Connect with our branch operations directly.
              </p>
            </div>

            {/* Offices Details Cards */}
            <div className="space-y-8">
              {/* Abuja Headquarters */}
              <div className="bg-brand-gray/30 border border-brand-gray-dark p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-brand-green">
                  <MapPin size={18} className="text-brand-gold shrink-0" />
                  <h3 className="font-heading font-extrabold text-base">{siteConfig.offices.abuja.title}</h3>
                </div>
                <p className="text-gray-700 text-xs pl-6 leading-relaxed">
                  {siteConfig.offices.abuja.address}
                </p>
                <div className="flex items-center gap-2 pl-6 text-xs text-gray-500 font-semibold">
                  <Clock size={14} className="text-brand-gold" />
                  <span>{siteConfig.offices.abuja.hours}</span>
                </div>
              </div>

              {/* Yola Office */}
              <div className="bg-brand-gray/30 border border-brand-gray-dark p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-brand-green">
                  <MapPin size={18} className="text-brand-gold shrink-0" />
                  <h3 className="font-heading font-extrabold text-base">{siteConfig.offices.yola.title}</h3>
                </div>
                <p className="text-gray-700 text-xs pl-6 leading-relaxed">
                  {siteConfig.offices.yola.address}
                </p>
                <div className="flex items-center gap-2 pl-6 text-xs text-gray-500 font-semibold">
                  <Clock size={14} className="text-brand-gold" />
                  <span>{siteConfig.offices.yola.hours}</span>
                </div>
              </div>
            </div>

            {/* General Corporate Support Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t">
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-xs uppercase text-brand-gold-dark tracking-wider">
                  Direct Email Support:
                </h4>
                <a
                  href={`mailto:${siteConfig.emails.primary}`}
                  className="text-brand-green hover:text-brand-gold font-bold text-xs block"
                >
                  {siteConfig.emails.primary}
                </a>
                <a
                  href={`mailto:${siteConfig.emails.backup}`}
                  className="text-gray-500 font-semibold text-xs block"
                >
                  {siteConfig.emails.backup}
                </a>
              </div>

              <div className="space-y-2">
                <h4 className="font-heading font-bold text-xs uppercase text-brand-gold-dark tracking-wider">
                  Direct Phone Support:
                </h4>
                <a
                  href={`tel:${siteConfig.phones.support}`}
                  className="text-brand-green hover:text-brand-gold font-bold text-xs block"
                >
                  {siteConfig.phones.supportFormatted} (Support & WA)
                </a>
                <span className="text-gray-500 font-semibold text-2xs block">
                  Ops: {siteConfig.phones.admin1Formatted} | {siteConfig.phones.admin2Formatted}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Request Form */}
          <div className="lg:col-span-6 bg-white border-2 border-brand-gray p-8 rounded-2xl shadow-md text-left space-y-6">
            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-lg text-brand-green">
                Send a Message
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Submit the enquiry form below. An asset manager or structural estimator 
                will reply to your mail within 24 operational hours.
              </p>
            </div>

            {submitted ? (
              <div className="bg-brand-gold/10 border border-brand-gold/25 p-8 rounded-xl text-center space-y-4 py-12">
                <CheckCircle2 size={42} className="text-brand-green mx-auto" />
                <h4 className="font-heading font-extrabold text-base text-brand-green">
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-650 text-xs leading-relaxed">
                  Thank you for contacting Leranjeh Nigeria Limited. Our operations department 
                  has received your message.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-brand-gold-dark hover:text-brand-green font-bold underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {apiError && (
                  <div className="bg-red-50 text-red-600 border border-red-200 p-4 rounded-xl text-xs text-left leading-relaxed">
                    {apiError}
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-3xs font-extrabold uppercase text-gray-500 tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter full name"
                      {...register("name")}
                      className={`w-full bg-white border rounded-lg py-2 px-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none ${
                        errors.name ? "border-red-400 focus:border-red-400" : "border-brand-gray-dark focus:border-brand-green"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-red-400 text-3xs mt-1 block font-semibold">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-3xs font-extrabold uppercase text-gray-500 tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Enter phone number"
                      {...register("phone")}
                      className={`w-full bg-white border rounded-lg py-2 px-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none ${
                        errors.phone ? "border-red-400 focus:border-red-400" : "border-brand-gray-dark focus:border-brand-green"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-red-400 text-3xs mt-1 block font-semibold">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-3xs font-extrabold uppercase text-gray-500 tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    {...register("email")}
                    className={`w-full bg-white border rounded-lg py-2 px-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none ${
                      errors.email ? "border-red-400 focus:border-red-400" : "border-brand-gray-dark focus:border-brand-green"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-red-400 text-3xs mt-1 block font-semibold">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-3xs font-extrabold uppercase text-gray-500 tracking-wider mb-1">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="E.g., Land acquisition, BOQ estimate request"
                    {...register("subject")}
                    className={`w-full bg-white border rounded-lg py-2 px-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none ${
                      errors.subject ? "border-red-400 focus:border-red-400" : "border-brand-gray-dark focus:border-brand-green"
                    }`}
                  />
                  {errors.subject && (
                    <span className="text-red-400 text-3xs mt-1 block font-semibold">
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-3xs font-extrabold uppercase text-gray-500 tracking-wider mb-1">
                    Message Body
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Enter message or outline construction requirements..."
                    {...register("message")}
                    className={`w-full bg-white border rounded-lg py-2 px-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none resize-none ${
                      errors.message ? "border-red-400 focus:border-red-400" : "border-brand-gray-dark focus:border-brand-green"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-red-400 text-3xs mt-1 block font-semibold">
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-brand-green hover:bg-brand-gold hover:text-brand-charcoal text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={13} />
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Direct Instant Channels */}
            <div className="pt-4 border-t border-brand-gray grid grid-cols-2 gap-3 text-xs font-semibold">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3.5 bg-[#25D366] text-white rounded-xl hover:bg-[#20ba5a] transition-colors shadow-xs"
              >
                <MessageSquare size={14} />
                <span>WhatsApp support</span>
              </a>
              <a
                href={`tel:${siteConfig.phones.support}`}
                className="flex items-center justify-center gap-1.5 py-3.5 border border-brand-gray-dark bg-brand-gray/50 hover:bg-brand-green hover:text-white text-gray-700 rounded-xl transition-all"
              >
                <Phone size={14} className="text-brand-gold" />
                <span>Call support</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Maps Section */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <h3 className="font-heading font-extrabold text-xl text-brand-green text-center">
          Branch Location Maps
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CustomMap
            embedUrl={siteConfig.offices.abuja.mapEmbedUrl}
            address={siteConfig.offices.abuja.address}
            title={siteConfig.offices.abuja.title}
          />
          <CustomMap
            embedUrl={siteConfig.offices.yola.mapEmbedUrl}
            address={siteConfig.offices.yola.address}
            title={siteConfig.offices.yola.title}
          />
        </div>
      </section>
    </div>
  );
}
