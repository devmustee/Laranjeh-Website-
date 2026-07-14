// Centralized data file representing Leranjeh Nigeria Limited CMS data

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  iconName: string;
  description: string;
  benefits: string[];
  ctaText: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  location: string;
  startingPrice: string;
  image: string;
  highlights: string[];
  description: string;
  features: string[];
  mapUrl: string;
  availability: string;
  category: "Residential" | "Commercial" | "Land Banking" | "Infrastructure";
  gallery?: string[];
  imagePosition?: string;
}

export interface PropertyItem {
  id: string;
  title: string;
  price: string;
  rawPrice: number;
  location: string;
  landSize: string;
  features: string[];
  investmentPotential: string;
  availability: "Available" | "Selling Fast" | "Sold Out" | "Limited";
  image: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
}

export interface BlogItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
  bodyHTML?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    slug: "civil-structural-construction",
    title: "Civil and Structural Construction",
    iconName: "Building2",
    description: "Premium execution of civil engineering and heavy construction works. From multi-story residential towers to commercial hubs, we build with precision, structural integrity, and durability.",
    benefits: [
      "End-to-end structural construction using grade-A reinforced concrete.",
      "Strict compliance with Nigerian Society of Engineers (NSE) standards.",
      "Advanced seismic and environmental load testing."
    ],
    ctaText: "Request Building Consultation"
  },
  {
    id: "2",
    slug: "architectural-design",
    title: "Architectural Design",
    iconName: "Palette",
    description: "Sleek, contemporary, and culture-aware architectural masterpieces. We specialize in modern African architecture that balances aesthetic grandeur with ecological sustainability.",
    benefits: [
      "Photorealistic 3D visualization and Virtual Reality walkthroughs.",
      "Space-efficient, biophilic, and highly functional layouts.",
      "Custom designs tailored to premium luxury preferences."
    ],
    ctaText: "Consult Our Architects"
  },
  {
    id: "3",
    slug: "structural-engineering",
    title: "Structural Engineering",
    iconName: "Ruler",
    description: "Robust structural designs, detailing, and analysis. We ensure your buildings are safe, sustainable, and structurally optimized using cutting-edge computer-aided engineering modeling.",
    benefits: [
      "Advanced stress analysis and optimization for tall buildings.",
      "Material optimization to cut construction costs without losing safety.",
      "Comprehensive structural stability vetting & certifications."
    ],
    ctaText: "Consult Structural Engineer"
  },
  {
    id: "4",
    slug: "mechanical-electrical-engineering",
    title: "Mechanical & Electrical Engineering",
    iconName: "Cpu",
    description: "Integrated building services engineering (MEP). We deliver smart power distribution, lighting design, plumbing networks, ventilation, and premium fire protection systems.",
    benefits: [
      "Energy-efficient smart lighting and solar power integrations.",
      "Premium plumbing layout with rainwater harvesting systems.",
      "Comprehensive fire alarms & centralized suppression layouts."
    ],
    ctaText: "Get MEP Consultation"
  },
  {
    id: "5",
    slug: "property-development",
    title: "Property Development",
    iconName: "Home",
    description: "Creating world-class residential estates and commercial assets. We manage the development lifecycle from land acquisition to final premium architectural finishes.",
    benefits: [
      "Elite smart homes with premium luxury finishes.",
      "Secure, fully-serviced modern estate communities.",
      "Appreciation rates outpacing inflation (double-digit ROI)."
    ],
    ctaText: "View Current Properties"
  },
  {
    id: "6",
    slug: "infrastructure-development",
    title: "Infrastructure Development",
    iconName: "Milestone",
    description: "Civil infrastructure solutions including asphalt roads, modern drainage channels, power distribution networks, and community water supply systems.",
    benefits: [
      "Master-planned civil works with standard load bearings.",
      "Eco-friendly underground storm-water drainage channels.",
      "High-durability public and private community engineering projects."
    ],
    ctaText: "Partner with Us"
  },
  {
    id: "7",
    slug: "real-estate-investment",
    title: "Real Estate Investment",
    iconName: "TrendingUp",
    description: "High-yield investment programs backed by physical assets. We structure fractional or full property investments that guarantee capital preservation and regular rental yield.",
    benefits: [
      "Double-digit annual appreciation returns.",
      "Secure portfolio diversification in stable real assets.",
      "Passive income streams through managed rental pools."
    ],
    ctaText: "Talk to Investment Advisor"
  },
  {
    id: "8",
    slug: "verified-land-banking",
    title: "Verified Land Banking",
    iconName: "ShieldCheck",
    description: "Acquiring strategically located lands with legally verified titles. We help clients purchase, secure, and hold parcels in fast-growing appreciation corridors across Nigeria.",
    benefits: [
      "100% verified legal titles (C of O, Deed of Assignment).",
      "Proximity to massive government infrastructure projects.",
      "Protected from 'omo-onile' (land grabbers) via strict fencing and security."
    ],
    ctaText: "View Available Plots"
  },
  {
    id: "9",
    slug: "property-renovation",
    title: "Property Renovation",
    iconName: "Wrench",
    description: "Modernizing older buildings to contemporary standards. We overhaul aesthetics, reinforce structural systems, and upgrade building utilities to boost market value.",
    benefits: [
      "Instant boost in property appraisal and rental value.",
      "Eco-friendly, energy-efficient fixture retrofitting.",
      "Total interior and exterior architectural transformation."
    ],
    ctaText: "Request Renovation Quote"
  },
  {
    id: "10",
    slug: "facility-management",
    title: "Facility Management",
    iconName: "Briefcase",
    description: "Comprehensive maintenance services for residential estates and commercial plazas. We keep facilities clean, secure, functional, and value-optimized.",
    benefits: [
      "24/7 dedicated onsite facility managers and quick maintenance support.",
      "Preventive maintenance schedules for elevators, generators, and pumps.",
      "Stable service-charge management and audit transparency."
    ],
    ctaText: "Enquire About Services"
  },
  {
    id: "11",
    slug: "project-management",
    title: "Project Management",
    iconName: "Calendar",
    description: "Delivering construction projects on time, within scope, and under budget. We provide rigorous supervision, cost engineering, and risk mitigation.",
    benefits: [
      "Rigorous quality control and onsite testing at every milestone.",
      "Strict schedule enforcement to prevent cost overruns.",
      "Regular transparent progress reports with photographic/drone evidence."
    ],
    ctaText: "Consult Our PMs"
  },
  {
    id: "12",
    slug: "construction-consultancy",
    title: "Construction Consultancy",
    iconName: "FileText",
    description: "Feasibility studies, bills of quantities (BOQ), valuation, structural integrity assessments, and planning approvals facilitation across Nigeria.",
    benefits: [
      "Accurate cost estimation & Bills of Quantities prepared by experts.",
      "Swift processing of building approvals with government bodies.",
      "Detailed soil testing, EIA, and structural stability audits."
    ],
    ctaText: "Hire Our Consultants"
  }
];

export const projectsData: ProjectItem[] = [
  {
    slug: "aso-royale-estate",
    title: "Aso Royale Estate",
    location: "Asokoro II, Abuja",
    startingPrice: "₦9 Million",
    image: "/images/aso-royale-gate.png",
    highlights: [
      "Elite residential estate",
      "Premium security systems",
      "High investment return",
      "Certificate of Occupancy (C of O)"
    ],
    description: "Aso Royale Estate is an elite residential estate situated in the prestigious Asokoro II district of Abuja. Designed for individuals seeking unmatched luxury, world-class security, and an exceptionally high return on investment, this master-planned development provides a serene and premium environment.",
    features: [
      "24/7 Smart Security & CCTV Surveillance",
      "Paved Roads & Underground Drainage Channels",
      "Reliable Clean Water Supply & Dedicated Power Grid",
      "Recreational Parks & Elite Clubhouse",
      "Eco-Friendly Landscaping & Perimeter Fencing"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.33617300305!2d7.5028045952086915!3d9.019488349581708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bcf00e23807%3A0xe21f5fb3d0c3be09!2sAsokoro%2C%20Abuja!5e0!3m2!1sen!2sng!4v1689032578990!5m2!1sen!2sng",
    availability: "Selling Fast - Limited Plots Remaining",
    category: "Residential",
    gallery: [
      "/images/aso-royale-gate.png",
      "/images/aso-royale-site-1.png",
      "/images/aso-royale-site-2.jpg",
      "/images/aso-royale-site-3.jpg"
    ]
  },
  {
    slug: "halal-court-layout",
    title: "Halal Court Layout",
    location: "Karewa, Jimeta-Yola, Adamawa State",
    startingPrice: "₦3.5 Million",
    image: "/images/leadership-visit-2.jpg",
    highlights: [
      "Residential community",
      "Northern investment hub",
      "Verified land banking",
      "Deed of Assignment"
    ],
    description: "Located in the heart of Yola, Adamawa State, Halal Court Layout is a premier residential community designed to serve as a high-yield northern investment hub. Perfect for verified land banking, the project offers fully layout-mapped plots with legal assurances.",
    features: [
      "Master-planned layout with secure fencing",
      "Access to main transportation corridors",
      "Verified titles and smooth transfer documentation",
      "High appreciation potential in Karewa/GRA extension",
      "Community borehole and electricity layout ready"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.106560416972!2d12.470008573133379!3d9.215509748956965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11029da9fdfd75cb%3A0x6b4bb5ffbde1a88b!2sJimeta%2C%20Yola!5e0!3m2!1sen!2sng!4v1689032688990!5m2!1sen!2sng",
    availability: "Available",
    category: "Land Banking",
    gallery: [
      "/images/leadership-visit-2.jpg",
      "/images/leadership-visit-4.jpg"
    ]
  },
  {
    slug: "dougerie-hills",
    title: "Dougerie Hills",
    location: "Old GRA, Jimeta-Yola, Adamawa State",
    startingPrice: "₦5.5 Million",
    image: "/images/leadership-visit-3.jpg",
    highlights: [
      "Premium terrain development",
      "Master planned estate",
      "Future infrastructure expansion",
      "Excellent elevated views"
    ],
    description: "Dougerie Hills is an exclusive, master-planned hillside development offering breathtaking elevated views of Jimeta-Yola. Situated on premium terrain, this estate is designed to integrate seamless future infrastructure expansion and high-end residential living.",
    features: [
      "Elevated secure layout with natural drainage",
      "Planned commercial and residential zones",
      "Eco-friendly landscaping & solar streetlighting",
      "Strategic proximity to administrative landmarks",
      "Fenced estate perimeter with controlled gated entry"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31516.21312083394!2d12.480000000000002!3d9.220000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMTMnMTIuMCJOIDEycKwMjgnNDguMCJF!5e0!3m2!1sen!2sng!4v1689032799990!5m2!1sen!2sng",
    availability: "Limited Slots Available",
    category: "Infrastructure",
    gallery: [
      "/images/leadership-visit-3.jpg",
      "/images/leadership-visit-4.jpg"
    ]
  },
  {
    slug: "midas-city-idu",
    title: "MidasCity",
    location: "Idu, Abuja",
    startingPrice: "₦7.5 Million",
    image: "/images/midas-city-billboard.png",
    highlights: [
      "Joint Venture with Midas Touch Assets Hub",
      "Prime location in Idu layout corridor",
      "Flexible plots (250, 500, 750 SQM)",
      "Studio Apartments & residential layouts"
    ],
    description: "MidasCity is a modern mixed-use development in the fast-growing Idu district of Abuja. A joint development with Midas Touch Assets Hub Ltd., the project offers flexible land plots (750 SQM, 500 SQM, 250 SQM) and premium Studio Apartments designed for high returns, modern living, and investment convenience.",
    features: [
      "Flexible plot sizes (750, 500, 250 SQM)",
      "Studio Apartment building spaces",
      "Underground drainage & power layouts",
      "100% dry terrain near administrative lines",
      "Gated perimeter with smart security entry"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3809633215286!2d7.336494775907997!3d9.02896508879577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e71239c09c95d%3A0xcbca95679e0f6cf8!2sIdu%2C%20Abuja!5e0!3m2!1sen!2sng!4v1689032999990!5m2!1sen!2sng",
    availability: "Selling Fast",
    category: "Residential",
    gallery: [
      "/images/midas-city-billboard.png",
      "/images/site-visit-1.jpg",
      "/images/site-visit-2.jpg",
      "/images/site-visit-3.jpg"
    ]
  },
  {
    slug: "doha-layout",
    title: "Döha Layout",
    location: "Ring Road, Jankasa, Jimeta-Yola, Adamawa State",
    startingPrice: "₦2.5 Million",
    image: "/images/doha-billboard.png",
    highlights: [
      "Secure plots in Jankasa corridor",
      "Strategic NYSC Camp proximity",
      "Access Roads & Greenery",
      "100% Secure Smart Investment"
    ],
    description: "Döha Layout is a premier smart investment development situated in Jankasa, Jimeta-Yola, directly adjacent to the new NYSC Camp. Boasting planned access roads, perimeter security, and deliberate ecological greenery, this layout is perfect for forward-thinking investors seeking rapid capital appreciation.",
    features: [
      "450 SQM (₦2.5M) & 900 SQM (₦5M) Plot allocations",
      "Planned Access Road Network",
      "Secured Gated Perimeter & Security Checks",
      "Dedicated Ecological Greenery & Green Zones",
      "Proximity to the new NYSC Camp layout"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.0!2d12.48!3d9.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMTMnMTIuMCJOIDEycKwMjgnNDguMCJF!5e0!3m2!1sen!2sng!4v1689032799990!5m2!1sen!2sng",
    availability: "Selling Fast - Limited Plots Remaining",
    category: "Land Banking",
    gallery: [
      "/images/doha-billboard.png"
    ],
    imagePosition: "object-bottom"
  },
  {
    slug: "jabi-boulevard-office-space",
    title: "Jabi Boulevard Office Space",
    location: "Jabi, Abuja",
    startingPrice: "₦45.0 Million",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    highlights: [
      "Prime commercial office corridor",
      "Main road visibility & access",
      "Fractional investment options",
      "Managed executive rentals"
    ],
    description: "Jabi Boulevard is a premium, contemporary commercial development situated in the heart of Jabi, Abuja. Designed to meet the standards of executive office space and corporate headquarters, the project offers state-of-the-art facilities, central drainage, ample secure parking, and excellent road network access.",
    features: [
      "Multi-level executive office layouts",
      "Advanced security access & CCTV perimeter",
      "High-speed fiber connectivity ready",
      "Dedicated corporate parking spaces",
      "Central power generator and stable utilities"
    ],
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0631627632613!2d7.420803475908298!3d9.067160788339328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7561f748db87%3A0xc48c0b24032d9cbf!2sEmmanuel%20Adiele%20St%2C%20Jabi%2C%20Abuja!5e0!3m2!1sen!2sng!4v1689033000000!5m2!1sen!2sng",
    availability: "Available",
    category: "Commercial",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

export const propertiesData: PropertyItem[] = [
  {
    id: "prop-1",
    title: "Aso Royale Elite Plot",
    price: "₦9,000,000",
    rawPrice: 9000000,
    location: "Asokoro II, Abuja",
    landSize: "500 sqm",
    features: ["Certificate of Occupancy (C of O)", "Pre-cleared dry ground", "Fully gated estate perimeter", "Premium security access"],
    investmentPotential: "Very High (~20% annual capital gain)",
    availability: "Selling Fast",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "prop-2",
    title: "Halal Court Prime Plot",
    price: "₦3,500,000",
    rawPrice: 3500000,
    location: "Karewa GRA Ext, Yola",
    landSize: "450 sqm",
    features: ["Deed of Assignment", "Approved site layout plan", "Immediate development access", "Electricity connection ready"],
    investmentPotential: "High (12-15% annual capital gain)",
    availability: "Available",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "prop-3",
    title: "Dougerie Hills Slope View Plot",
    price: "₦5,500,000",
    rawPrice: 5500000,
    location: "Old GRA, Jimeta-Yola",
    landSize: "600 sqm",
    features: ["Premium elevated layout", "Deed of Conveyance", "Water infrastructure ready", "Solar powered perimeter lights"],
    investmentPotential: "High (15-18% annual capital gain)",
    availability: "Limited",
    image: "https://images.unsplash.com/photo-1524813686514-a57563d77965?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "prop-4",
    title: "Aso Royale Master Duplex Plot",
    price: "₦16,000,000",
    rawPrice: 16000000,
    location: "Asokoro II, Abuja",
    landSize: "750 sqm",
    features: ["C of O", "Corner piece location", "Approved structural plans included", "Central drainage connection"],
    investmentPotential: "Excellent (Exceptional luxury value)",
    availability: "Available",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "prop-5",
    title: "Jabi Boulevard Luxury Office Space (Fractional)",
    price: "₦45,000,000",
    rawPrice: 45000000,
    location: "Jabi, Abuja",
    landSize: "120 sqm (Usable Space)",
    features: ["Corporate Registered Title", "Main road visibility", "Managed rental program", "Dedicated executive parking"],
    investmentPotential: "Outstanding (~10% annual rental yield)",
    availability: "Available",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "prop-6",
    title: "MidasCity Prime Plot (500sqm)",
    price: "₦7,500,000",
    rawPrice: 7500000,
    location: "Idu, Abuja",
    landSize: "500 sqm",
    features: ["Approved Layout Plan", "Corner piece available", "Ready for construction", "100% dry terrain"],
    investmentPotential: "Very High (~22% projected annual appreciation)",
    availability: "Available",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "prop-7",
    title: "MidasCity Studio Apartment Unit",
    price: "₦15,000,000",
    rawPrice: 15000000,
    location: "Idu, Abuja",
    landSize: "85 sqm (Floor Area)",
    features: ["Fully Serviced", "Pre-fitted plumbing & wiring", "Modern finishes", "Dedicated security post"],
    investmentPotential: "Exceptional Rental Yield",
    availability: "Selling Fast",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "prop-8",
    title: "Döha Layout Smart Plot (450 SQM)",
    price: "₦2,500,000",
    rawPrice: 2500000,
    location: "Jankasa, Jimeta-Yola",
    landSize: "450 sqm",
    features: ["Access Road Network", "Gated Security Layout", "Eco-friendly Green Zones", "NYSC Camp layout proximity"],
    investmentPotential: "Very High (~25% projected annual appreciation)",
    availability: "Available",
    image: "/images/doha-billboard.png"
  },
  {
    id: "prop-9",
    title: "Döha Layout Smart Plot (900 SQM)",
    price: "₦5,000,000",
    rawPrice: 5000000,
    location: "Jankasa, Jimeta-Yola",
    landSize: "900 sqm",
    features: ["Access Road Network", "Gated Security Layout", "Double lot capacity", "Eco-friendly Green Zones"],
    investmentPotential: "Exceptional appreciation potential",
    availability: "Selling Fast",
    image: "/images/doha-billboard.png"
  },
  {
    id: "prop-10",
    title: "Aso Royale 4 Bedroom Terrace Duplex",
    price: "₦11,250,000",
    rawPrice: 11250000,
    location: "Asokoro II, Abuja",
    landSize: "200 - 300 sqm",
    features: ["4 Bedrooms", "5 Baths", "Spacious living room", "Central gas line", "Adequate parking space"],
    investmentPotential: "High rental income potential and capital appreciation",
    availability: "Available",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Dr. Ibrahim Danjuma",
    role: "Chairman",
    company: "Capital Properties Alliance",
    text: "Leranjeh Nigeria Limited completed our multi-family project in Abuja ahead of schedule. The quality of concrete work and the precision of their finishes are comparable to standard developments in London or Dubai. Highly recommended for premium works.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Architect Florence Ngozi",
    role: "Principal Design Director",
    company: "Atelier Studio Consultants",
    text: "Partnering with Arch. Kashawa Daniel and his engineering team was an absolute pleasure. Their attention to structural detailing and strict adherence to architectural layout tolerances saved us millions in site re-runs. They understand contemporary African design.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Chief Alhaji Yusuf Bello",
    role: "Diaspora Land Bank Investor",
    company: "Private Investment",
    text: "Buying land in Nigeria from abroad can be terrifying, but Leranjeh was completely transparent. They provided certified C of O copies immediately, conducted physical video boundaries mapping in Karewa, and secured my plots with permanent layout fences. Excellent service!",
    rating: 5
  },
  {
    id: "test-4",
    name: "Barrister Funmi Olayinka",
    role: "Senior Partner",
    company: "Aegis Legal Chambers",
    text: "I scrutinized Leranjeh's land documentation for a corporate group buy at Aso Royale. The legal titles, government survey approvals, and land registry coordinates were 100% spotless. They are a trust-worthy and highly professional brand.",
    rating: 5
  }
];

export const blogData: BlogItem[] = [
  {
    slug: "why-land-banking-is-optimal-hedging-nigeria",
    title: "Why Land Banking is Nigeria's Best Hedge Against Inflation",
    excerpt: "With currencies fluctuating, physical real estate in high-growth corridors like Abuja and Yola remains the ultimate wealth preservation vehicle. Let's analyze the historical data.",
    content: "Over the last decade, real estate assets in fast-growing hubs like Jabi and Asokoro II in Abuja, and premium zones in Jimeta-Yola, have outpaced local inflation rates by up to 25% annually. In this guide, we break down why land banking with verified titles (like a Certificate of Occupancy or C of O) provides absolute asset security, shielding capital from devaluation. We also explore the key steps required to audit titles and secure physical boundaries effectively.",
    date: "July 10, 2026",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    category: "Real Estate Investment",
    readTime: "5 min read",
    bodyHTML: `
      <p class="lead text-lg font-medium text-gray-800">
        In an economy characterized by currency depreciation and shifting monetary policies, physical assets are no longer just an investment option—they are a critical mechanism for wealth preservation. For Nigerian investors, land banking has emerged as the most resilient hedge against inflation.
      </p>
      
      <h3 class="text-xl font-bold font-heading text-brand-green mt-8 mb-4">The Wealth Erosion Dilemma</h3>
      <p>
        Leaving capital in traditional bank savings accounts or short-term treasury bills guarantees a negative real rate of return. With inflation rates hovering at double digits, paper currency yields less purchasing power each passing month. Land, however, possesses inherent scarcity. As urban boundaries expand and populations swell, the intrinsic value of well-located plots naturally adjusts upward, outpacing currency devaluation.
      </p>
      
      <h3 class="text-xl font-bold font-heading text-brand-green mt-8 mb-4">High-Growth Corridors: Abuja and Jimeta-Yola</h3>
      <p>
        The success of land banking depends entirely on location and accessibility. At Leranjeh Nigeria Limited, our strategic layouts are carefully located in high-growth corridors where development is guaranteed:
      </p>
      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>Abuja (Idu and Jabi Expansion):</strong> Districts positioned near administrative boundaries and industrial hubs experience rapid appreciation due to continuous infrastructure mapping.</li>
        <li><strong>Jimeta-Yola (Karewa, Old GRA, and Jankasa):</strong> The Jankasa corridor (adjacent to the new NYSC Camp) represents a premier smart investment destination where plot demands are peaking due to new road accesses and institutional developments.</li>
      </ul>
      
      <h3 class="text-xl font-bold font-heading text-brand-green mt-8 mb-4">The Integrity Safeguard: Verification and Boundaries</h3>
      <p>
        Land banking only hedges inflation if your title is legally secure. Buying land without a verified Certificate of Occupancy (C of O), government survey coordinates, or permanent fencing exposes investors to boundary disputes and title overlaps. 
      </p>
      <p>
        Leranjeh eliminates these risks by conducting rigorous preliminary audits, registering verified titles, and securing all properties with physical layouts. When you bank land with Leranjeh, your wealth is secured by permanent masonry structures and government-verified coordinates.
      </p>
    `
  },
  {
    slug: "contemporary-african-architecture-trends",
    title: "Contemporary African Architecture: Merging Aesthetics & Ecological Integrity",
    excerpt: "Explore how contemporary African architects, led by practitioners like Arch. Kashawa Daniel Mbororo, are designing premium, energy-efficient spaces suited for the modern environment.",
    content: "Modern architectural design in West Africa is moving away from importing European layout designs that don't account for tropical heat. Today, the focus is on contemporary African architecture: leveraging biophilic designs, optimized natural cross-ventilation, shading structures, and materials that offer high thermal mass. Discover how these architectural choices keep buildings cool, reduce air conditioning reliance by up to 35%, and create stunning luxury spaces.",
    date: "June 25, 2026",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    category: "Architecture & Design",
    readTime: "7 min read",
    bodyHTML: `
      <p class="lead text-lg font-medium text-gray-800">
        For decades, African urban skylines imported glass-heavy European blueprints that ignored the realities of the tropical climate. This resulted in "greenhouse" structures dependent on massive HVAC systems. Today, a new wave of contemporary African architecture is redefining luxury by integrating ecological integrity with functional aesthetics.
      </p>
      
      <h3 class="text-xl font-bold font-heading text-brand-green mt-8 mb-4">Designing for the Climate</h3>
      <p>
        Architectural design must respond to its local climate. Passive design strategies focus on how a building is positioned relative to the sun and local wind currents. By orienting structures along the east-west axis, architects minimize direct solar heat gain on large walls, keeping indoor temperatures significantly lower.
      </p>
      
      <h3 class="text-xl font-bold font-heading text-brand-green mt-8 mb-4">Key Principles of Passive Cooling</h3>
      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>Natural Cross-Ventilation:</strong> Aligning windows and courtyards to leverage prevailing evening breezes, flushing out hot indoor air.</li>
        <li><strong>Biophilic Elements:</strong> Integrating vertical gardens, interior water features, and deliberate tree lines that cool air before it enters the building.</li>
        <li><strong>High Thermal Mass Materials:</strong> Using masonry and concrete composites that absorb daytime heat and release it slowly at night, stabilizing indoor temperatures.</li>
      </ul>
      
      <h3 class="text-xl font-bold font-heading text-brand-green mt-8 mb-4">Arch. Kashawa Daniel Mbororo's Vision</h3>
      <p>
        At Leranjeh Nigeria Limited, our GMD, Arch. Daniel Mbororo, champions designs that blend minimalist luxury with local materials. By incorporating extended roof overhangs, custom screens (Mashrabiya-style vents), and ecological courtyards, our residential layouts stay cool and comfortable while reducing air conditioning utility bills by up to 35%. This is the standard of sustainable luxury.
      </p>
    `
  },
  {
    slug: "importance-of-soil-testing-in-high-rise-construction",
    title: "The Importance of Geotechnical Soil Testing in Foundation Engineering",
    excerpt: "Skipping soil tests is the single largest cause of structural structural failure in Nigeria. Learn about the geotechnical processes Leranjeh employs for every project.",
    content: "Before a single concrete column is poured, understanding the load-bearing capacity of the underlying soil strata is crucial. Clay soil, swampy ground, or sloping terrains require distinct foundation engineering approaches (strip, raft, or piling). We explain the soil test procedures, how SPT (Standard Penetration Test) reports are compiled, and why solid foundations protect your real estate investments for generations.",
    date: "May 18, 2026",
    image: "/images/leadership-visit-2.jpg",
    category: "Civil Engineering",
    readTime: "4 min read",
    bodyHTML: `
      <p class="lead text-lg font-medium text-gray-800">
        In structural engineering, the most critical element of a building is the one you never see: the foundation. Skipping geotechnical soil testing is the single largest cause of structural failures, cracked walls, and building collapses in Nigeria.
      </p>
      
      <h3 class="text-xl font-bold font-heading text-brand-green mt-8 mb-4">Why Soil Testing is Mandatory</h3>
      <p>
        The earth is not uniform. Soil strata can vary dramatically, even across a single plot. Clay soils swell when wet and shrink when dry, placing immense structural stress on concrete structures. Sandy soils can shift, while organic soils lack the load-bearing capacity to support multi-storey buildings.
      </p>
      
      <h3 class="text-xl font-bold font-heading text-brand-green mt-8 mb-4">Geotechnical Methods</h3>
      <p>
        Before design calculations begin, Leranjeh's engineering teams conduct two primary diagnostic field tests:
      </p>
      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>Cone Penetrometer Testing (CPT):</strong> Pushing a instrumented steel cone into the ground to measure soil resistance at varying depths.</li>
        <li><strong>Standard Penetration Testing (SPT):</strong> Boring deep holes to extract physical soil samples, determining the moisture levels, density, and bearing capacity of the soil strata.</li>
      </ul>
      
      <h3 class="text-xl font-bold font-heading text-brand-green mt-8 mb-4">Tailoring the Foundation</h3>
      <p>
        The data from these tests dictates the foundation design:
      </p>
      <ul class="list-disc pl-6 space-y-2 my-4">
        <li><strong>Strip Foundations:</strong> Suitable for shallow, load-bearing soils in dry, stable locations.</li>
        <li><strong>Raft Foundations:</strong> Used for clay or unstable soil structures to distribute the building's weight evenly across the entire surface.</li>
        <li><strong>Pile Foundations:</strong> Essential for swampy, deltaic, or waterlogged terrains, driving heavy concrete shafts deep into the earth to rest on solid bedrock.</li>
      </ul>
      <p>
        By insisting on comprehensive soil testing for all Leranjeh developments, we ensure your building remains structurally sound for generations.
      </p>
    `
  }
];

export const siteConfig = {
  name: "Leranjeh Nigeria Limited",
  title: "Leranjeh Nigeria Limited | Premium Construction, Architecture & Real Estate Development",
  description: "Leranjeh Nigeria Limited delivers world-class civil construction, contemporary architectural designs, structural engineering, and legally verified real estate investment solutions in Abuja and Yola, Nigeria.",
  emails: {
    primary: "info@leranjeh.com",
    backup: "Leranjehltd@gmail.com"
  },
  phones: {
    support: "+2347067939919",
    supportFormatted: "+234 706 793 9919",
    admin1: "+2349114417341",
    admin1Formatted: "+234 911 441 7341",
    admin2: "+2347048003113",
    admin2Formatted: "+234 704 800 3113",
    hotline: "+2348036237665",
    hotlineFormatted: "+234 803 623 7665"
  },
  offices: {
    abuja: {
      title: "Abuja Headquarters (Jabi)",
      address: "No. 11 Emmanuel Adiele Street, Jabi (Opposite Police Resource Centre / Off Mike Akhigbe Way), FCT, Abuja, Nigeria.",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM, Sat: 9:00 AM - 2:00 PM",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.0631627632613!2d7.420803475908298!3d9.067160788339893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7561f748db87%3A0xc48c0b24032d9cbf!2sEmmanuel%20Adiele%20St%2C%20Jabi%2C%20Abuja!5e0!3m2!1sen!2sng!4v1689033000000!5m2!1sen!2sng"
    },
    abujaOld: {
      title: "Abuja Office (Wuye)",
      address: "Acacia Grove Estate, Idris Gidado Street Wuye, Abuja, Nigeria.",
      hours: "Mon - Sat: 8:00 AM - 5:00 PM",
      mapEmbedUrl: ""
    },
    yola: {
      title: "Yola Branch Office (Old GRA)",
      address: "Adjacent Children's Home, Old GRA, Karewa, Jimeta-Yola, Adamawa State, Nigeria.",
      hours: "Mon - Fri: 8:30 AM - 5:00 PM, Sat: By Appointment Only",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.525547631317!2d12.477027175908688!3d9.215509788339328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11029db50a789a29%3A0xd68b209bd3de8ab3!2sGRA%20Yola!5e0!3m2!1sen!2sng!4v1689033100000!5m2!1sen!2sng"
    },
    yolaOld: {
      title: "Yola Branch Office (Jabama Plaza)",
      address: "#6 First Floor Jabama Plaza Jimeta Yola, Adamawa State, Nigeria.",
      hours: "Mon - Fri: 8:30 AM - 5:00 PM",
      mapEmbedUrl: ""
    }
  },
  social: {
    facebook: "https://www.facebook.com/leranjeh/",
    instagram: "https://www.instagram.com/leranjehnigeria/"
  }
};
