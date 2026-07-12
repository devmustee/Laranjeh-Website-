"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Form validation schema with Zod
const careerSchema = z.object({
  fullName: z.string().min(3, { message: "Name must be at least 3 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  position: z.string().min(1, { message: "Please select a position." }),
  coverLetter: z.string().min(10, { message: "Brief message/intro must be at least 10 characters." }),
});

type CareerFormInput = z.infer<typeof careerSchema>;

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CareerFormInput>({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      position: "",
      coverLetter: "",
    },
  });

  const onSubmit = async (data: CareerFormInput) => {
    console.log("Career application submitted:", data);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    reset();
  };

  const openPositions = [
    {
      title: "Senior Project Manager (Civil)",
      location: "Abuja HQ",
      type: "Full-Time",
      requirements: "COREN registration, 6+ years site supervision on medium/high-rise developments.",
    },
    {
      title: "Real Estate Sales Consultant",
      location: "Yola Branch Office",
      type: "Commission-Based / Full-Time",
      requirements: "Proven record in land banking layouts, strong network in northern investment hubs.",
    },
    {
      title: "Design Architect",
      location: "Abuja HQ",
      type: "Full-Time",
      requirements: "ARCON certification, high proficiency in contemporary African architectural styling, BIM / Revit.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-brand-green text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1200&auto=format&fit=crop"
            alt="Corporate office team collaboration"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-brand-green/90" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
            Careers with Us
          </h1>
          <p className="text-brand-gold-light font-medium tracking-widest text-xs uppercase sm:text-sm">
            Build Your Future with Leranjeh
          </p>
        </div>
      </section>

      {/* 2. Open Positions */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Careers List */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-gold-dark block">
                Join the Team
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-brand-green">
                Current Open Positions
              </h2>
              <p className="text-gray-650 text-sm leading-relaxed">
                We are always searching for experienced architects, project administrators, and sales advisors. 
                Below are the positions we are currently recruiting for.
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((pos) => (
                <div
                  key={pos.title}
                  className="bg-brand-gray/30 border border-brand-gray-dark p-6 rounded-2xl space-y-4 shadow-2xs hover:border-brand-gold transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3 className="font-heading font-extrabold text-base text-brand-charcoal">
                      {pos.title}
                    </h3>
                    <span className="bg-brand-green text-white text-3xs font-extrabold px-3 py-1 rounded-full w-fit uppercase">
                      {pos.location}
                    </span>
                  </div>

                  <p className="text-gray-650 text-xs md:text-sm leading-relaxed">
                    <strong className="text-brand-green">Requirements:</strong> {pos.requirements}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                    <span>{pos.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Apply Form */}
          <div className="lg:col-span-5 bg-white border-2 border-brand-gray p-8 rounded-2xl shadow-md text-left space-y-6">
            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-lg text-brand-green">
                Submit Your Application
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Fill the fields below to submit your details. Our human resources department will 
                contact you if you fit our requirements.
              </p>
            </div>

            {submitted ? (
              <div className="bg-brand-gold/10 border border-brand-gold/25 p-6 rounded-xl text-center space-y-4 py-10">
                <CheckCircle2 size={40} className="text-brand-green mx-auto" />
                <h4 className="font-heading font-extrabold text-base text-brand-green">
                  Application Received!
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Thank you for applying. We have saved your details and our team will review your profile.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-brand-gold-dark hover:text-brand-green font-bold underline"
                >
                  Apply for another position
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                {/* Full name input */}
                <div>
                  <label htmlFor="fullName" className="block text-3xs font-extrabold uppercase text-gray-500 tracking-wider mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter full name"
                    {...register("fullName")}
                    className={`w-full bg-white border rounded-lg py-2 px-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none ${
                      errors.fullName ? "border-red-400 focus:border-red-400" : "border-brand-gray-dark focus:border-brand-green"
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-red-400 text-3xs mt-1 block font-semibold">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>

                {/* Email input */}
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

                {/* Phone input */}
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

                {/* Position selection */}
                <div>
                  <label htmlFor="position" className="block text-3xs font-extrabold uppercase text-gray-500 tracking-wider mb-1">
                    Position Applied For
                  </label>
                  <select
                    id="position"
                    {...register("position")}
                    className={`w-full bg-white border rounded-lg py-2.5 px-3 text-xs text-gray-800 focus:outline-none ${
                      errors.position ? "border-red-400 focus:border-red-400" : "border-brand-gray-dark focus:border-brand-green"
                    }`}
                  >
                    <option value="">Select a role...</option>
                    <option value="project-manager">Senior Project Manager (Civil)</option>
                    <option value="sales-consultant">Real Estate Sales Consultant</option>
                    <option value="architect">Design Architect</option>
                    <option value="other">Other / General Application</option>
                  </select>
                  {errors.position && (
                    <span className="text-red-400 text-3xs mt-1 block font-semibold">
                      {errors.position.message}
                    </span>
                  )}
                </div>

                {/* Cover letter text */}
                <div>
                  <label htmlFor="coverLetter" className="block text-3xs font-extrabold uppercase text-gray-500 tracking-wider mb-1">
                    Brief Cover Message / Experience Summary
                  </label>
                  <textarea
                    id="coverLetter"
                    rows={4}
                    placeholder="Briefly describe your experience and qualifications..."
                    {...register("coverLetter")}
                    className={`w-full bg-white border rounded-lg py-2 px-3 text-xs text-gray-800 placeholder-gray-400 focus:outline-none resize-none ${
                      errors.coverLetter ? "border-red-400 focus:border-red-400" : "border-brand-gray-dark focus:border-brand-green"
                    }`}
                  />
                  {errors.coverLetter && (
                    <span className="text-red-400 text-3xs mt-1 block font-semibold">
                      {errors.coverLetter.message}
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
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
