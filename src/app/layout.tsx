import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig } from "@/data/siteData";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL("https://leranjeh.com"),
  keywords: [
    "Leranjeh Nigeria Limited",
    "Leranjeh Construction",
    "Real Estate Abuja",
    "Real Estate Yola",
    "Property Development Nigeria",
    "Contemporary African Architects",
    "Land Banking Abuja",
    "Civil Engineering Nigeria",
    "Brains and Hammers",
    "Kashawa Daniel Mbororo",
    "Brains and Hammers Architect"
  ],
  authors: [{ name: "Leranjeh Nigeria Limited" }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://leranjeh.com",
    siteName: "Leranjeh Nigeria Limited",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Leranjeh Nigeria Limited Construction Site",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Leranjeh Nigeria Limited",
    "image": "https://leranjeh.com/images/aso-royale-gate.png",
    "telephone": "+234 706 793 9919",
    "email": "info@leranjeh.com",
    "url": "https://leranjeh.com",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "No. 11 Emmanuel Adiele Street, Jabi",
        "addressLocality": "Abuja",
        "addressRegion": "FCT",
        "addressCountry": "NG"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Adjacent Children's Home, Old GRA, Karewa",
        "addressLocality": "Jimeta-Yola",
        "addressRegion": "Adamawa State",
        "addressCountry": "NG"
      }
    ]
  };

  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} flex flex-col min-h-screen antialiased`}>
        {/* Main Header navigation */}
        <Navbar />
        
        {/* Content body wrapper */}
        <main className="flex-grow pt-[70px] lg:pt-[80px]">
          {children}
        </main>
        
        {/* Main Footer */}
        <Footer />

        {/* Instant floating communication nodes */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
