export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface TrustPillar {
  title: string;
  subtitle: string;
  icon: string;
}

export interface FeatureCard {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  deliverables: string[];
  icon: string;
  featured?: boolean;
  image: string;
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  category: 'Residential' | 'Villa' | 'Commercial' | 'Renovation' | 'Structural';
  location: string;
  area: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  aspectRatio: 'landscape' | 'portrait' | 'square' | 'tall';
}

export interface CompanyConfig {
  name: string;
  legalName: string;
  city: string;
  state: string;
  country: string;
  fullLocation: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  workingHours: string;
  aboutText: {
    hero: string;
    subhero: string;
    paragraphs: string[];
  };
  trustPillars: TrustPillar[];
  featureCards: FeatureCard[];
  processSteps: ProcessStep[];
  services: ServiceItem[];
  projects: ProjectItem[];
}
