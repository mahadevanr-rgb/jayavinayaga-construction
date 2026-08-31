import React from 'react';
import { ShieldCheck, Clock, HardHat, FileCheck } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#C5A059]" />,
  Clock: <Clock className="w-6 h-6 text-[#C5A059]" />,
  HardHat: <HardHat className="w-6 h-6 text-[#C5A059]" />,
  FileCheck: <FileCheck className="w-6 h-6 text-[#C5A059]" />
};

export const TrustBar: React.FC = () => {
  return (
    <section
      id="trust-strip"
      className="bg-[#121212] border-y border-[#262626] text-white py-10 relative z-20"
      aria-label="Core Quality Commitments"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#262626]">
          {COMPANY_DATA.trustPillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              id={`trust-pillar-${idx + 1}`}
              className={`flex items-start gap-4 text-left group transition-all duration-200 ${
                idx > 0 ? 'pt-6 sm:pt-0 sm:pl-6' : ''
              }`}
            >
              <div className="flex-shrink-0 p-3 bg-[#1A1A1A] border border-[#333333] group-hover:border-[#C5A059] transition-colors duration-200">
                {iconMap[pillar.icon] || <ShieldCheck className="w-6 h-6 text-[#C5A059]" />}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white tracking-wider uppercase group-hover:text-[#C5A059] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {pillar.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
