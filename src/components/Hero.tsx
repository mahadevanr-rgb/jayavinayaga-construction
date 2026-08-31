import React from 'react';
import { ArrowRight, ChevronDown, MapPin, Building, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

interface HeroProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewWork }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white pt-24 pb-16 overflow-hidden"
    >
      {/* Background Architectural Image with Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern architectural residence construction in Tamil Nadu by Jayavinayaga Construction"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Subtle Architectural Obsidian Gradients for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/85 to-[#0A0A0A]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/70" />
        {/* Architectural Grid Accent Texture */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            {/* Small Eyebrow with location context */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] rounded-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                BUILDING WITH PURPOSE
              </span>
              <span className="text-[#C5A059]/40">|</span>
              <span className="text-xs text-neutral-300 font-medium hidden sm:inline flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#C5A059]" />
                Rajapalayam, Tamil Nadu
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-sans">
              Building Spaces <br className="hidden sm:inline" />
              <span className="text-[#D4D4D4] font-light">That Stand The</span> <br className="hidden sm:inline" />
              <span className="text-[#C5A059]">Test Of Time.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#A3A3A3] max-w-2xl font-normal leading-relaxed">
              Jayavinayaga Construction delivers thoughtful construction solutions for homes, villas and commercial spaces across Rajapalayam and surrounding areas.
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-cta-start-project"
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-3 bg-[#C5A059] hover:bg-[#D4B370] text-[#0A0A0A] text-xs font-bold tracking-widest uppercase px-8 py-4 transition-all duration-200 shadow-md hover:shadow-xl active:scale-98 group border border-[#E5C583]/50"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-cta-view-work"
                type="button"
                onClick={onViewWork}
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white border border-[#333333] hover:border-[#C5A059]/60 text-xs font-bold tracking-widest uppercase px-7 py-4 transition-all duration-200"
              >
                <span>View Our Work</span>
              </button>
            </div>

            {/* Micro Highlights Pill */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 border-t border-[#262626]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span className="tracking-wide">Civil & Turnkey Contracting</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#C5A059]" />
                <span className="tracking-wide">Villas · Residences · Commercial</span>
              </div>
            </div>

          </div>

          {/* Right Floating Specs Showcase Badge (Architectural Card) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#121212]/95 backdrop-blur-md border border-[#262626] p-7 text-left space-y-5 shadow-2xl relative">
              <div className="absolute -top-3 right-6 bg-[#C5A059] text-[#0A0A0A] text-[10px] font-extrabold uppercase tracking-widest px-3 py-0.5 border border-[#E5C583]">
                Local Focus
              </div>

              <div className="space-y-1">
                <div className="text-xs text-[#C5A059] font-semibold uppercase tracking-wider">
                  Region of Operation
                </div>
                <div className="text-xl font-bold text-white tracking-tight">
                  Rajapalayam & Surrounding Regions
                </div>
                <p className="text-xs text-neutral-400">
                  Virudhunagar District, Tamil Nadu
                </p>
              </div>

              <div className="h-px bg-[#262626]" />

              <div className="space-y-3">
                <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                  Core Construction Capabilities
                </div>
                <ul className="text-xs text-neutral-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-none" />
                    <span>Independent Houses & Custom Villas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-none" />
                    <span>Structural Framing & Concrete Engineering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-none" />
                    <span>Commercial Complex & Showroom Civil Works</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-none" />
                    <span>Renovation, Additions & Facade Upgrades</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onStartProject}
                  className="w-full py-2.5 px-4 bg-[#1A1A1A] hover:bg-[#C5A059] hover:text-[#0A0A0A] text-neutral-200 text-xs font-bold uppercase tracking-wider border border-[#333333] transition-colors flex items-center justify-between group"
                >
                  <span>Request Site Visit</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-neutral-400 hover:text-[#C5A059] transition-colors text-xs uppercase tracking-widest cursor-pointer group"
        aria-label="Scroll down to About section"
      >
        <span className="text-[10px] font-semibold text-neutral-500 group-hover:text-[#C5A059] transition-colors">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A059]" />
      </a>
    </section>
  );
};
