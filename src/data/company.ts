import { CompanyConfig } from '../types';

export const COMPANY_DATA: CompanyConfig = {
  name: "Jayavinayaga Construction",
  legalName: "Jayavinayaga Construction & Civil Contractors",
  city: "Rajapalayam",
  state: "Tamil Nadu",
  country: "India",
  fullLocation: "Rajapalayam, Tamil Nadu, India",
  phonePlaceholder: "+91 XXXXX XXXXX",
  emailPlaceholder: "hello@jayavinayagaconstruction.com",
  workingHours: "Mon - Sat: 9:00 AM – 7:00 PM IST",
  
  aboutText: {
    hero: "From Foundation To Finish, We Build With Care.",
    subhero: "ABOUT JAYAVINAYAGA CONSTRUCTION",
    paragraphs: [
      "Jayavinayaga Construction is a dedicated building and civil contracting firm based in Rajapalayam, Tamil Nadu. We specialize in bringing residential houses, modern villas, commercial structures, and quality renovations to life with solid engineering principles.",
      "We believe that a well-built structure is the result of practical planning, durable raw materials, skilled hands-on craftsmanship, and transparent client communication at every construction milestone.",
      "Whether constructing an independent family home or managing a complete turnkey building project, our priority remains the same: structural integrity, honest timelines, and spaces crafted to endure."
    ]
  },

  trustPillars: [
    {
      title: "Quality First",
      subtitle: "Uncompromising standards in civil materials & structural engineering",
      icon: "ShieldCheck"
    },
    {
      title: "On-Time Execution",
      subtitle: "Structured milestone tracking & proactive on-site scheduling",
      icon: "Clock"
    },
    {
      title: "Skilled Workmanship",
      subtitle: "Experienced local masons, engineers, and specialized trades",
      icon: "HardHat"
    },
    {
      title: "Transparent Process",
      subtitle: "Clear cost estimates, regular updates, and no hidden surprises",
      icon: "FileCheck"
    }
  ],

  featureCards: [
    {
      number: "01",
      title: "QUALITY CRAFTSMANSHIP",
      description: "From soil testing and foundation reinforcement to premium masonry and plastering, we adhere strictly to durable construction methods designed for the local climate."
    },
    {
      number: "02",
      title: "RESPONSIBLE EXECUTION",
      description: "Daily site supervision, safety protocols, verified raw materials procurement, and clear progress logs ensure your project progresses steadily without corners cut."
    },
    {
      number: "03",
      title: "CUSTOMER-FIRST APPROACH",
      description: "We work closely with homeowners and business owners to understand design preferences, spatial requirements, and budget boundaries before pouring the first concrete."
    }
  ],

  processSteps: [
    {
      step: "01",
      title: "PLAN",
      duration: "Concept & Estimation",
      description: "Architectural consultation, site boundary survey, material specification review, and transparent cost estimates."
    },
    {
      step: "02",
      title: "BUILD",
      duration: "Structural & Civil Execution",
      description: "Excavation, RCC footing, column framing, brickwork, lintels, roof slab casting, and plumbing/electrical conduits."
    },
    {
      step: "03",
      title: "INSPECT",
      duration: "Quality & Curing Checks",
      description: "Rigorous curing cycles, structural strength checks, plaster alignment audits, and finishing verification."
    },
    {
      step: "04",
      title: "DELIVER",
      duration: "Handover & Support",
      description: "Final walkthrough, utility line commissioning, client handover documentation, and post-completion support."
    }
  ],

  services: [
    {
      id: "residential-construction",
      title: "Residential Construction",
      tagline: "Independent Homes & Duplexes",
      shortDesc: "End-to-end civil construction for independent houses, custom residences, and family duplexes tailored for modern living in Rajapalayam.",
      deliverables: [
        "RCC Frame & Foundation",
        "Quality Brickwork & Masonry",
        "Vastu-aligned Layout Execution",
        "Complete Interior Plastering"
      ],
      icon: "Home",
      featured: true,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "villa-construction",
      title: "Villa Construction",
      tagline: "Modern Architectural Villas",
      shortDesc: "High-spec villa builds featuring double-height spaces, large cantilevered balconies, courtyard integrations, and premium finishing.",
      deliverables: [
        "Architectural Concrete Works",
        "Open-plan Structural Spans",
        "Landscape & Compound Walls",
        "Custom Elevation Detailing"
      ],
      icon: "Castle",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "commercial-construction",
      title: "Commercial Construction",
      tagline: "Retail & Office Buildings",
      shortDesc: "Robust commercial spaces, showroom complexes, and office buildings engineered for heavy footfall and versatile floor utility.",
      deliverables: [
        "Heavy-duty Structural Framing",
        "Open Commercial Spans",
        "Fire & Utility Conduit Provision",
        "Facade & Glazing Support"
      ],
      icon: "Building2",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "renovation-remodeling",
      title: "Renovation & Remodeling",
      tagline: "Restoration & Floor Additions",
      shortDesc: "Structural retrofitting, vertical floor additions, spatial reconfigurations, and modern exterior elevation makeovers.",
      deliverables: [
        "Structural Reinforcement & Column Jacketing",
        "First/Second Floor Additions",
        "Waterproofing & Weatherproofing",
        "Modern Facade Transformation"
      ],
      icon: "Hammer",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "structural-civil-works",
      title: "Structural & Civil Works",
      tagline: "Foundation, RCC & Masonry",
      shortDesc: "Precision civil engineering contracts including pile foundations, retaining walls, underground water sumps, and compound structures.",
      deliverables: [
        "Deep Footings & Pile Caps",
        "Underground RCC Water Tanks",
        "Retaining & Boundary Walls",
        "Heavy Concrete Slab Casting"
      ],
      icon: "Layers",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "turnkey-construction",
      title: "Turnkey Construction",
      tagline: "Concept to Key Handover",
      shortDesc: "Hassle-free, single-point accountability covering everything from approval assistance, civil work, electrical, plumbing, flooring to final painting.",
      deliverables: [
        "Complete Single-source Project Management",
        "Flooring, Joinery & Painting",
        "Sanitaryware & Electrical Fittings",
        "Ready-to-occupy Handover"
      ],
      icon: "KeyRound",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    }
  ],

  projects: [
    {
      id: "project-01",
      code: "PROJECT 01",
      title: "Modern Residence",
      category: "Residential",
      location: "Rajapalayam",
      area: "3,200 sq.ft",
      tagline: "Contemporary two-story family residence with natural ventilation corridors and textured stone cladding.",
      description: "A thoughtfully designed independent residence built on a 40x60 plot featuring double-height living areas, cross-ventilation courtyards suited for Tamil Nadu's climate, and an earthy exterior palette.",
      deliverables: [
        "RCC Framed Structure",
        "Exposed Brick & Stone Facade Elements",
        "Rainwater Harvesting System",
        "Vastu-compliant Space Planning"
      ],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "landscape"
    },
    {
      id: "project-02",
      code: "PROJECT 02",
      title: "Contemporary Villa",
      category: "Villa",
      location: "Tamil Nadu",
      area: "4,600 sq.ft",
      tagline: "Architectural luxury villa boasting cantilevered terraces, expansive glass openings, and landscaped courtyards.",
      description: "Designed for open, airy living with deep overhangs that mitigate midday sun while maintaining panoramic garden views. Built with high-grade M25 concrete framing and custom joinery.",
      deliverables: [
        "Deep Cantilevered Terraces",
        "Thermally Insulated Roof Treatment",
        "Custom Teak Woodwork Finishing",
        "Perimeter Security & Landscaping"
      ],
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "tall"
    },
    {
      id: "project-03",
      code: "PROJECT 03",
      title: "Family Residence",
      category: "Residential",
      location: "Rajapalayam",
      area: "2,800 sq.ft",
      tagline: "Durable multi-generational home with practical utility layout, puja room, and spacious terrace pavilion.",
      description: "An elegant home emphasizing functional durability, thermal comfort, high-quality granite flooring, and robust weather-resistant exterior plastering for year-round ease of maintenance.",
      deliverables: [
        "Multi-generational 4BHK Layout",
        "High-performance Water Proofing",
        "Dedicated Solar Inverter & Water Sump",
        "Covered Roof Garden Pavilion"
      ],
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "square"
    },
    {
      id: "project-04",
      code: "PROJECT 04",
      title: "Modern Commercial Space",
      category: "Commercial",
      location: "Tamil Nadu",
      area: "5,400 sq.ft",
      tagline: "Three-tier commercial building with column-free retail floorplates and modern facade treatment.",
      description: "Commercial facility engineered for high load capacity, column-free showroom spaces on ground and first floors, structured parking, and provisions for elevator installation.",
      deliverables: [
        "Heavy-load Commercial RCC Design",
        "Column-free Flexible Retail Spans",
        "Modern Composite Elevation Panels",
        "Underground Drainage & Fire Compliance"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "landscape"
    },
    {
      id: "project-05",
      code: "PROJECT 05",
      title: "Luxury Villa",
      category: "Villa",
      location: "Rajapalayam",
      area: "5,100 sq.ft",
      tagline: "Exclusive custom villa with private courtyard, ambient cove lighting, and seamless indoor-outdoor transitions.",
      description: "A signature villa concept combining timeless South Indian architectural sensibilities with clean contemporary geometry, custom stone jali screens, and water feature integration.",
      deliverables: [
        "Natural Stone Jali Accent Screens",
        "Central Skylit Courtyard",
        "Premium Italian Marble & Granite Finishes",
        "Integrated Smart Home Wiring"
      ],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "tall"
    },
    {
      id: "project-06",
      code: "PROJECT 06",
      title: "Residential Renovation",
      category: "Renovation",
      location: "Tamil Nadu",
      area: "2,200 sq.ft",
      tagline: "Complete structural overhaul and modern elevation redesign for an existing family property.",
      description: "Transformed an older traditional brick house into an airy modern home with structural column strengthening, modern parapet geometry, new bathroom layouts, and energy-efficient lighting.",
      deliverables: [
        "Structural Jacketing & Wall Removals",
        "Modern Elevation Treatment",
        "Complete Plumbing & Electrical Overhaul",
        "Anti-skid Exterior Tile Paving"
      ],
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      aspectRatio: "square"
    }
  ]
};

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "contact", label: "Contact", href: "#contact" }
];
