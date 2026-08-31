import React, { useState } from 'react';
import { Home, Castle, Building2, Hammer, Layers, KeyRound, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { ServiceItem } from '../types';

const iconComponents: Record<string, React.ElementType> = {
  Home: Home,
  Castle: Castle,
  Building2: Building2,
  Hammer: Hammer,
  Layers: Layers,
  KeyRound: KeyRound
};

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="py-24 bg-[#0A0A0A] text-[#E5E5E5] relative border-b border-[#262626]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C5A059] tracking-[0.2em] uppercase">
              <span className="w-4 h-0.5 bg-[#C5A059]" />
              OUR CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Construction Solutions, Built Around Your Vision.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
            From initial excavation and RCC framework to complete turnkey delivery, we provide tailored civil contracting solutions across Rajapalayam and surrounding areas.
          </p>
        </div>

        {/* Bento / Asymmetric Grid for 6 Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_DATA.services.map((service, index) => {
            const IconComponent = iconComponents[service.icon] || Home;
            const isFeatured = service.featured || index === 0;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`group relative bg-[#121212] border border-[#262626] hover:border-[#C5A059]/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Background image preview on hover or for featured card */}
                {isFeatured ? (
                  <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                    {/* Left details for featured */}
                    <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-between z-10 bg-[#121212]">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="w-12 h-12 bg-[#1A1A1A] text-[#C5A059] flex items-center justify-center border border-[#333333] transition-transform duration-300 group-hover:scale-110">
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-extrabold tracking-widest uppercase px-3 py-1 bg-[#1A1A1A] text-[#C5A059] border border-[#C5A059]/30">
                            Primary Focus
                          </span>
                        </div>

                        <div className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-1">
                          {service.tagline}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 group-hover:text-[#C5A059] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                          {service.shortDesc}
                        </p>

                        {/* Deliverables checklist */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                          {service.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                              <Check className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectService(service.title)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C5A059] group-hover:text-[#D4B370] transition-colors self-start"
                      >
                        <span>Discuss This Project</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </div>

                    {/* Right Image for featured */}
                    <div className="md:col-span-5 relative min-h-[240px] md:min-h-full overflow-hidden bg-[#0A0A0A]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-[#0A0A0A]/30 to-[#121212]" />
                    </div>
                  </div>
                ) : (
                  /* Standard Service Card */
                  <div className="p-7 sm:p-8 flex flex-col justify-between h-full relative z-10">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-[#1A1A1A] group-hover:bg-[#C5A059] text-[#C5A059] group-hover:text-[#0A0A0A] flex items-center justify-center border border-[#262626] group-hover:border-[#C5A059] transition-all duration-300 group-hover:scale-110">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-neutral-500">
                          0{index + 1}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-1">
                        {service.tagline}
                      </div>
                      <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#C5A059] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                        {service.shortDesc}
                      </p>

                      <div className="space-y-2 mb-6 border-t border-[#1F1F1F] pt-4">
                        {service.deliverables.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                            <span className="w-1 h-1 bg-[#C5A059] rounded-full flex-shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#262626] flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => onSelectService(service.title)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C5A059] group-hover:text-[#D4B370] transition-colors"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest">
                        Civil Contract
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Civil Advisory Strip */}
        <div className="mt-12 bg-[#121212] border border-[#262626] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left shadow-xl">
          <div className="space-y-1">
            <div className="text-base font-bold text-white tracking-tight">
              Need custom civil estimates or architectural drawing review?
            </div>
            <p className="text-xs sm:text-sm text-neutral-400">
              We offer practical material consultation, structural stage planning, and site evaluations across Rajapalayam.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('General Civil Consultation')}
            className="flex-shrink-0 px-6 py-3 bg-[#C5A059] hover:bg-[#D4B370] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest transition-colors duration-200 shadow-md border border-[#E5C583]/50"
          >
            Request Site Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
