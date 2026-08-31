import React, { useState } from 'react';
import { MapPin, Eye, ArrowUpRight, Filter, Sparkles, Building2 } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';
import { ProjectItem } from '../types';
import { ProjectLightbox } from './ProjectLightbox';

interface ProjectsSectionProps {
  onConsultProject: (projectTitle: string) => void;
}

const CATEGORIES = ['All', 'Residential', 'Villa', 'Commercial', 'Renovation'] as const;

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onConsultProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredProjects = selectedCategory === 'All'
    ? COMPANY_DATA.projects
    : COMPANY_DATA.projects.filter(p => p.category === selectedCategory);

  const handleOpenProject = (project: ProjectItem) => {
    setActiveProject(project);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section
      id="projects"
      className="py-24 bg-[#0D0D0D] text-white relative border-b border-[#262626] overflow-hidden"
    >
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #C5A059 1px, transparent 1px), linear-gradient(to bottom, #C5A059 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C5A059] tracking-[0.2em] uppercase">
              <span className="w-4 h-0.5 bg-[#C5A059]" />
              PORTFOLIO SHOWCASE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-neutral-400 font-normal">
              A glimpse into the kind of spaces we aim to create.
            </p>
          </div>

          {/* Sample Content Disclosure Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#141414] border border-[#262626] text-neutral-400 text-xs self-start md:self-end">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span>Sample Architectural Models · Demonstration Portfolio</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-1 focus:ring-[#C5A059] ${
                  isSelected
                    ? 'bg-[#C5A059] text-[#0A0A0A] shadow-md border border-[#E5C583]'
                    : 'bg-[#141414] text-neutral-300 hover:text-white hover:bg-[#1A1A1A] border border-[#262626]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric / Masonry Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {filteredProjects.map((project, idx) => {
            // Asymmetric layout heights based on project.aspectRatio
            const heightClass = 
              project.aspectRatio === 'tall' 
                ? 'h-[440px] md:h-[480px]' 
                : project.aspectRatio === 'landscape' 
                ? 'h-[320px] md:h-[360px]' 
                : 'h-[360px] md:h-[400px]';

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => handleOpenProject(project)}
                className="group relative bg-[#121212] border border-[#262626] hover:border-[#C5A059] transition-all duration-300 cursor-pointer overflow-hidden shadow-xl flex flex-col justify-end text-left"
              >
                {/* Image Container */}
                <div className={`w-full ${heightClass} relative overflow-hidden bg-[#0A0A0A]`}>
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} construction in ${project.location}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay for Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Top Badge: Code & Category */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#C5A059] bg-[#0A0A0A]/85 px-2.5 py-1 border border-[#262626]">
                      {project.code}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#0A0A0A] bg-[#C5A059] px-2.5 py-0.5 border border-[#E5C583]">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Quick Action Icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <div className="px-4 py-2 bg-[#C5A059] text-[#0A0A0A] font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-2xl border border-[#E5C583]">
                      <Eye className="w-4 h-4" />
                      <span>View Project Details</span>
                    </div>
                  </div>

                  {/* Bottom Content Card Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-neutral-400 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{project.location}</span>
                      <span className="text-neutral-600">•</span>
                      <span className="font-mono text-neutral-400">{project.area}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-[#C5A059] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </h3>

                    <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Portfolio CTA */}
        <div className="mt-14 pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="text-xs text-neutral-400">
            Have a custom architectural plan or plot in Rajapalayam? We can assist with structural feasibility and detailed billing.
          </div>
          <button
            type="button"
            onClick={() => onConsultProject('Custom Architectural Project')}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A059] hover:text-[#D4B370] uppercase tracking-widest transition-colors"
          >
            <span>Discuss Your Site Requirements</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Accessible Project Lightbox Dialog */}
      <ProjectLightbox
        project={activeProject}
        allProjects={COMPANY_DATA.projects}
        isOpen={lightboxOpen}
        onClose={handleCloseLightbox}
        onSelectProject={(p) => setActiveProject(p)}
        onConsultSimilar={(title) => {
          handleCloseLightbox();
          onConsultProject(title);
        }}
      />
    </section>
  );
};
