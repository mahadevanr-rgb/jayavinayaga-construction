/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string | undefined>(undefined);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    scrollToSection('contact');
  };

  const handleConsultProject = (projectTitle: string) => {
    setSelectedServiceForInquiry(`Project Inquiry: ${projectTitle}`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#E5E5E5] font-sans antialiased selection:bg-[#C5A059]/30 selection:text-[#FFFFFF]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenConsultation={() => scrollToSection('contact')} />

      {/* Main Content: Exactly 5 Sections */}
      <main className="flex-grow">
        {/* SECTION 1: HOME (Hero + Trust Strip) */}
        <Hero
          onStartProject={() => scrollToSection('contact')}
          onViewWork={() => scrollToSection('projects')}
        />
        <TrustBar />

        {/* SECTION 2: ABOUT */}
        <AboutSection
          onExploreServices={() => scrollToSection('services')}
        />

        {/* SECTION 3: SERVICES */}
        <ServicesSection
          onSelectService={handleSelectService}
        />

        {/* SECTION 4: PROJECTS (With Integrated Lightbox) */}
        <ProjectsSection
          onConsultProject={handleConsultProject}
        />

        {/* SECTION 5: CONTACT */}
        <ContactSection
          initialService={selectedServiceForInquiry}
        />
      </main>

      {/* Minimal Architectural Footer */}
      <Footer />
    </div>
  );
}
