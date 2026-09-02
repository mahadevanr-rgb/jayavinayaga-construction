import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Compass,
  Hammer,
  ShieldCheck,
  Award,
} from "lucide-react";
import { COMPANY_DATA } from "../data/company";

interface AboutSectionProps {
  onExploreServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onExploreServices,
}) => {
  return (
    <section
      id="about"
      className="py-24 bg-[#0D0D0D] text-[#E5E5E5] relative border-b border-[#262626] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Layout: Image on Left, Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Imagery Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              {/* Primary Architectural Image */}
              <div className="relative overflow-hidden border border-[#262626] shadow-2xl bg-[#141414]">
                <img
                  src="https://www.gsussoftwares.com/_next/static/media/rajapalayam.bdebb9e5.png"
                  alt="Jayavinayaga Construction civil engineering and structural site work in Tamil Nadu"
                  className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent" />

                {/* Image Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#C5A059] uppercase tracking-widest mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Rajapalayam & Regional Projects</span>
                  </div>
                  <div className="text-sm text-neutral-300 font-medium">
                    Civil Framing, Residential Execution & Turnkey Contracts
                  </div>
                </div>
              </div>

              {/* Accent Floating Architectural Tag */}
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#121212] text-white p-5 border border-[#262626] shadow-2xl max-w-[220px]">
                <div className="text-2xl font-black text-[#C5A059] tracking-tight font-sans">
                  STANDARDS
                </div>
                <div className="text-xs text-neutral-300 font-medium uppercase tracking-wider mt-0.5">
                  Engineered For Durability & Structural Longevity
                </div>
              </div>
            </div>

            {/* Quick Civil Competencies List */}
            <div className="bg-[#141414] border border-[#262626] p-5 space-y-3">
              <div className="text-xs font-bold text-[#C5A059] tracking-widest uppercase">
                Construction Focus Areas
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>RCC Footing & Framing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Quality Brick Masonry</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Weather-Shield Plaster</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                  <span>Turnkey Coordination</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Eyebrow & Feature Cards */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Eyebrow & Main Section Headline */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C5A059] tracking-[0.2em] uppercase">
                <span className="w-4 h-0.5 bg-[#C5A059]" />
                {COMPANY_DATA.aboutText.subhero}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                {COMPANY_DATA.aboutText.hero}
              </h2>
            </div>

            {/* Explanatory Paragraphs */}
            <div className="space-y-4 text-base text-neutral-300 leading-relaxed">
              {COMPANY_DATA.aboutText.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            {/* 3 Small Feature Cards (01, 02, 03) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {COMPANY_DATA.featureCards.map((card) => (
                <div
                  key={card.number}
                  id={`about-feature-card-${card.number}`}
                  className="bg-[#141414] border border-[#262626] p-5 hover:border-[#C5A059]/60 transition-colors duration-200 shadow-md group text-left"
                >
                  <div className="text-2xl font-extrabold text-[#C5A059] font-sans tracking-tight mb-2">
                    {card.number}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide uppercase mb-2 group-hover:text-[#C5A059] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Our Approach Timeline: PLAN → BUILD → INSPECT → DELIVER */}
            <div className="pt-6 border-t border-[#262626] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                  Our Approach
                </span>
                <span className="text-xs text-neutral-400">
                  Predictable, transparent construction lifecycle
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {COMPANY_DATA.processSteps.map((step, idx) => (
                  <div
                    key={step.step}
                    id={`approach-step-${step.step}`}
                    className="bg-[#141414] border border-[#262626] p-4 relative group hover:bg-[#1A1A1A] hover:border-[#C5A059]/60 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-[#C5A059] tracking-widest">
                        {step.step}
                      </span>
                      {idx < 3 && (
                        <span className="text-xs text-[#C5A059] hidden md:inline font-bold">
                          →
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-[#C5A059] uppercase tracking-wider mb-1">
                      {step.title}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-medium">
                      {step.duration}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Action */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A059] hover:text-[#D4B370] uppercase tracking-widest transition-colors group"
              >
                <span>Explore Full Range Of Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
