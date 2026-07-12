import React from "react";
import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4 text-left space-y-8">
        
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 hover:text-brand-green transition-all"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 border-b pb-4">
          <div className="w-12 h-12 bg-brand-green/10 text-brand-green rounded-xl flex items-center justify-center">
            <FileText size={24} />
          </div>
          <div>
            <h1 className="font-heading font-extrabold text-2xl text-brand-green">Terms & Conditions</h1>
            <p className="text-gray-500 text-xs mt-0.5">Last updated: July 12, 2026</p>
          </div>
        </div>

        <div className="text-gray-650 text-xs sm:text-sm space-y-6 leading-relaxed">
          <p>
            Welcome to Leranjeh Nigeria Limited! These terms and conditions outline the rules and regulations for the use of Leranjeh Nigeria Limited&apos;s Website, located at https://leranjeh.com.
          </p>

          <p>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Leranjeh Nigeria Limited&apos;s website if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h3 className="font-heading font-bold text-base text-brand-green">1. Intellectual Property Rights</h3>
          <p>
            Other than the content you own, under these Terms, Leranjeh Nigeria Limited and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted a limited license only for purposes of viewing the material contained on this Website.
          </p>

          <h3 className="font-heading font-bold text-base text-brand-green">2. Property Listings & Land banking Disclaimers</h3>
          <p>
            The properties, land layouts, pricing and availability statistics shown on this website are for general marketing and initial investment guidance only. While we verify all titles under strict legal standards, final sales terms, payment plans, and survey allocations are governed solely by signed contracts (Deeds of Assignment / Purchase Covenants).
          </p>

          <h3 className="font-heading font-bold text-base text-brand-green">3. Architectural & Engineering Consultations</h3>
          <p>
            Any initial architectural renders, project case studies, or design blogs shown represent past achievements and concepts. Concrete civil works require site-specific soil tests, customized Bills of Quantities (BOQ), and localized structural detailing certified by our COREN/ARCON registered professionals.
          </p>

          <h3 className="font-heading font-bold text-base text-brand-green">4. Limitation of Liability</h3>
          <p>
            In no event shall Leranjeh Nigeria Limited, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website. Leranjeh Nigeria Limited, including its officers, directors, and employees, shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
          </p>

          <h3 className="font-heading font-bold text-base text-brand-green">5. Governing Law & Jurisdiction</h3>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Nigeria for the resolution of any disputes.
          </p>
        </div>
      </div>
    </div>
  );
}
