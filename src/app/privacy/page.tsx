import React from "react";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
            <Shield size={24} />
          </div>
          <div>
            <h1 className="font-heading font-extrabold text-2xl text-brand-green">Privacy Policy</h1>
            <p className="text-gray-500 text-xs mt-0.5">Last updated: July 12, 2026</p>
          </div>
        </div>

        <div className="text-gray-650 text-xs sm:text-sm space-y-6 leading-relaxed">
          <p>
            At Leranjeh Nigeria Limited, accessible from https://leranjeh.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Leranjeh Nigeria Limited and how we use it.
          </p>

          <h3 className="font-heading font-bold text-base text-brand-green">Consent</h3>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h3 className="font-heading font-bold text-base text-brand-green">Information We Collect</h3>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly or fill forms (such as consultation, inspection or job application forms), we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h3 className="font-heading font-bold text-base text-brand-green">How We Use Your Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our website and property catalog.</li>
            <li>Improve, personalize, and expand our website layout.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Develop new products, services, features, and functionality.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
            <li>Send you emails or contact you via WhatsApp for scheduled inspections.</li>
            <li>Find and prevent fraud.</li>
          </ul>

          <h3 className="font-heading font-bold text-base text-brand-green">Contact Us</h3>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at info@leranjeh.com.
          </p>
        </div>
      </div>
    </div>
  );
}
