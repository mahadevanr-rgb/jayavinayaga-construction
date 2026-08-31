import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2, Check, ArrowRight, Building, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  allProjects: ProjectItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onConsultSimilar: (projectTitle: string) => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  allProjects,
  isOpen,
  onClose,
  onSelectProject,
  onConsultSimilar
}) => {
  const currentIndex = project ? allProjects.findIndex((p) => p.id === project.id) : -1;

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      onSelectProject(allProjects[currentIndex - 1]);
    } else {
      onSelectProject(allProjects[allProjects.length - 1]);
    }
  }, [currentIndex, allProjects, onSelectProject]);

  const handleNext = useCallback(() => {
    if (currentIndex < allProjects.length - 1) {
      onSelectProject(allProjects[currentIndex + 1]);
    } else {
      onSelectProject(allProjects[0]);
    }
  }, [currentIndex, allProjects, onSelectProject]);

  // Keyboard navigation: ESC to close, Left/Right for pagination
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !project) return null;

  return (
    <div
      id="project-lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#0A0A0A]/95 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-project-title"
    >
      <div
        id="project-lightbox-modal"
        className="relative bg-[#121212] text-white border border-[#262626] max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl z-10 flex flex-col md:flex-row animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="lightbox-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2.5 bg-[#0A0A0A]/90 hover:bg-[#C5A059] text-white hover:text-[#0A0A0A] border border-[#262626] hover:border-[#C5A059] transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Showcase */}
        <div className="md:w-7/12 relative bg-[#0A0A0A] flex items-center justify-center min-h-[300px] md:min-h-[500px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover max-h-[70vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent pointer-events-none" />

          {/* Sample concept badge */}
          <div className="absolute top-4 left-4 z-20 bg-[#0A0A0A]/90 border border-[#262626] text-[10px] uppercase font-bold tracking-widest text-[#C5A059] px-3 py-1">
            Sample Concept Model
          </div>

          {/* Image Navigation Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300 pointer-events-auto">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 bg-[#0A0A0A]/90 hover:bg-[#C5A059] hover:text-[#0A0A0A] border border-[#262626] transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2 bg-[#0A0A0A]/90 hover:bg-[#C5A059] hover:text-[#0A0A0A] border border-[#262626] transition-colors"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <span className="font-mono text-neutral-400">
              0{currentIndex + 1} / 0{allProjects.length}
            </span>
          </div>
        </div>

        {/* Right Column: Architectural Details */}
        <div className="md:w-5/12 p-6 sm:p-8 flex flex-col justify-between text-left space-y-6 bg-[#121212]">
          <div className="space-y-4">
            
            {/* Category & Location Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold text-[#0A0A0A] bg-[#C5A059] px-2.5 py-0.5 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-neutral-300 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                {project.location}
              </span>
              <span className="text-neutral-600">•</span>
              <span className="text-xs text-neutral-400 font-mono">
                {project.area}
              </span>
            </div>

            {/* Title */}
            <div>
              <div className="text-xs font-mono text-neutral-500 tracking-wider mb-1">
                {project.code}
              </div>
              <h3 id="lightbox-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            {/* Tagline & Description */}
            <p className="text-sm font-medium text-[#C5A059] leading-snug">
              {project.tagline}
            </p>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.description}
            </p>

            {/* Scope / Key Deliverables */}
            <div className="pt-2 space-y-2 border-t border-[#262626]">
              <div className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                Key Scope & Structural Features
              </div>
              <div className="space-y-1.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Action CTA */}
          <div className="pt-4 border-t border-[#262626] space-y-3">
            <button
              id="lightbox-consult-btn"
              type="button"
              onClick={() => {
                onClose();
                onConsultSimilar(project.title);
              }}
              className="w-full py-3 px-5 bg-[#C5A059] hover:bg-[#D4B370] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 border border-[#E5C583]/50 shadow-md"
            >
              <span>Consult On Similar Build</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-neutral-500 text-center">
              Sample structural design for demonstration. Replace with real site records anytime.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
