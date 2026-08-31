import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Building2, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY_DATA } from '../data/company';

interface NavbarProps {
  onOpenConsultation?: (serviceType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for highlight
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#262626] py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Mark */}
          <a
            href="#home"
            id="navbar-brand-logo"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A059] rounded"
          >
            <div className="w-10 h-10 bg-[#C5A059] text-[#0A0A0A] flex items-center justify-center font-bold tracking-tighter border border-[#E5C583] shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-xl font-serif font-bold">JV</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base sm:text-lg font-bold tracking-wider text-white uppercase leading-none font-sans">
                Jayavinayaga
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-[#C5A059] uppercase mt-1">
                Construction · Rajapalayam
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-widest font-semibold transition-colors duration-200 relative ${
                    isActive
                      ? 'text-[#C5A059]'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#C5A059] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              id="navbar-cta-quote"
              href="#contact"
              onClick={(e) => {
                handleNavClick(e, '#contact');
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="inline-flex items-center gap-2 bg-[#C5A059] hover:bg-[#D4B370] text-[#0A0A0A] text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-none transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group border border-[#E5C583]/50"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C5A059] rounded"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#0A0A0A] border-b border-[#262626] px-6 pt-4 pb-6 mt-3 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`py-2 text-sm uppercase tracking-wider font-semibold border-b border-[#1A1A1A] ${
                  activeSection === link.id ? 'text-[#C5A059]' : 'text-neutral-300'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                id="mobile-nav-cta"
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, '#contact');
                  if (onOpenConsultation) onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#C5A059] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider py-3 px-4 transition-colors"
              >
                <span>Get a Quote / Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2 text-xs text-neutral-400 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#C5A059]" />
              <span>Civil Contractors · Rajapalayam, Tamil Nadu</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
