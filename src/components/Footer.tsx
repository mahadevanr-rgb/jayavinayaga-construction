import React from "react";
import {
  Building2,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  ArrowRight,
} from "lucide-react";
import { COMPANY_DATA, NAV_LINKS } from "../data/company";
import logo from "../assets/logo/jayavinayaga-logo.png";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#0A0A0A] text-white border-t border-[#262626] pt-16 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#262626] text-left">
          {/* Brand & Description Column */}
          <div className="lg:col-span-5 space-y-5">
            {/* Company Logo */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Jayavinayaga Construction"
                className="h-12 sm:h-16 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
              Delivering disciplined civil construction, bespoke residential
              homes, modern architectural villas, and commercial buildings
              across Rajapalayam and surrounding areas in Tamil Nadu.
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-neutral-400 bg-[#141414] px-3 py-1.5 border border-[#262626]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Rajapalayam, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Quick Navigation
            </div>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-[#262626] group-hover:bg-[#C5A059] transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Construction Services Scope */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Key Services
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>• Residential House Construction (2BHK / 3BHK / 4BHK)</li>
              <li>• Contemporary Villa Design & Structural Execution</li>
              <li>• Commercial Complexes & Showrooms</li>
              <li>• Structural Framing, Column Jacketing & Renovation</li>
              <li>• Turnkey Contracting & Finishing Management</li>
            </ul>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#C5A059] hover:text-[#D4B370] transition-colors"
              >
                <span>Request Project Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Demo Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 text-center sm:text-left">
          <div>
            <p>© 2026 {COMPANY_DATA.name}. All rights reserved.</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">
              Website designed for demonstration purposes. Content models
              structured for {COMPANY_DATA.city}, {COMPANY_DATA.state}.
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 bg-[#141414] hover:bg-[#C5A059] hover:text-[#0A0A0A] text-neutral-300 text-xs font-medium uppercase tracking-wider border border-[#262626] transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
