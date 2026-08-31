import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight, Building, AlertCircle } from 'lucide-react';
import { COMPANY_DATA } from '../data/company';

interface ContactSectionProps {
  initialService?: string;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  budgetRange: string;
  projectLocation: string;
  message: string;
}

const PROJECT_TYPES = [
  'Residential Construction (Independent Home)',
  'Villa Construction',
  'Commercial Construction',
  'Renovation & Remodeling',
  'Structural & Civil Works',
  'Turnkey Construction (Design & Build)',
  'Plot Evaluation & Consultation'
];

const BUDGET_RANGES = [
  'Under ₹25 Lakhs',
  '₹25 Lakhs – ₹50 Lakhs',
  '₹50 Lakhs – ₹1 Crore',
  '₹1 Crore – ₹2.5 Crores',
  'Above ₹2.5 Crores',
  'Flexible / To Be Estimated'
];

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Construction (Independent Home)',
    budgetRange: '₹25 Lakhs – ₹50 Lakhs',
    projectLocation: 'Rajapalayam',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      const matched = PROJECT_TYPES.find(t => t.toLowerCase().includes(initialService.toLowerCase()));
      setFormData(prev => ({
        ...prev,
        projectType: matched || initialService,
        message: prev.message || `Inquiry regarding: ${initialService}`
      }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.phone.trim() || formData.phone.length < 7) newErrors.phone = 'Please provide a valid contact number.';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Please provide a valid email address.';
    if (!formData.projectLocation.trim()) newErrors.projectLocation = 'Please specify plot/project location.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate professional processing response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: 'Residential Construction (Independent Home)',
      budgetRange: '₹25 Lakhs – ₹50 Lakhs',
      projectLocation: 'Rajapalayam',
      message: ''
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#0A0A0A] text-[#E5E5E5] relative border-b border-[#262626]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C5A059] tracking-[0.2em] uppercase">
            <span className="w-4 h-0.5 bg-[#C5A059]" />
            START YOUR CONVERSATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build Something Great Together.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Have a project in mind? Tell us what you're planning and our team can help you take the next step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Information & Local Focus */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="bg-[#121212] border border-[#262626] p-8 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white tracking-tight uppercase border-b border-[#262626] pb-4">
                Office & Project Inquiries
              </h3>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#1A1A1A] text-[#C5A059] border border-[#333333] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Location
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {COMPANY_DATA.fullLocation}
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      Serving Rajapalayam, Srivilliputhur, Sivakasi & Surrounding Districts
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#1A1A1A] text-[#C5A059] border border-[#333333] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Phone (Placeholder)
                    </div>
                    <div className="text-sm font-bold text-[#C5A059] mt-0.5 font-mono">
                      {COMPANY_DATA.phonePlaceholder}
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      Direct consultation line / site visits
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#1A1A1A] text-[#C5A059] border border-[#333333] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Email (Placeholder)
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {COMPANY_DATA.emailPlaceholder}
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      Send architectural plans & inquiries
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#1A1A1A] text-[#C5A059] border border-[#333333] flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                      Working Hours
                    </div>
                    <div className="text-sm font-semibold text-neutral-300 mt-0.5">
                      {COMPANY_DATA.workingHours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Placeholder Disclaimer Box */}
              <div className="p-4 bg-[#181818] border border-[#262626] text-xs text-neutral-400 space-y-1">
                <div className="font-bold text-white flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-[#C5A059]" />
                  <span>Demonstration Portfolio Notice</span>
                </div>
                <p>
                  Contact details and company parameters are configurable via <code className="bg-[#0A0A0A] px-1 py-0.5 text-[#C5A059] font-mono text-[11px] border border-[#262626]">company.ts</code> to connect live business channels.
                </p>
              </div>

            </div>

            {/* Quick Guarantees Pill */}
            <div className="p-6 bg-[#121212] text-white border border-[#262626] space-y-3">
              <div className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">
                Our Consultation Process
              </div>
              <ul className="text-xs text-neutral-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A059]" />
                  <span>Prompt review of site boundary and building requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A059]" />
                  <span>Transparent itemized civil material estimates</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C5A059]" />
                  <span>No obligation technical site feasibility advice</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Professional Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121212] border border-[#262626] p-8 sm:p-10 shadow-xl text-left relative">
              
              {isSubmitted ? (
                /* Success State */
                <div id="contact-form-success" className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-[#1A1A1A] border border-[#C5A059] text-[#C5A059] mx-auto flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-[#C5A059]" />
                  </div>
                  
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. Your project inquiry for <strong className="text-white">{formData.projectType}</strong> in <strong className="text-white">{formData.projectLocation}</strong> has been logged.
                    </p>
                  </div>

                  {/* Summary card */}
                  <div className="bg-[#181818] border border-[#262626] p-6 max-w-md mx-auto text-left text-xs space-y-2">
                    <div className="font-bold text-[#C5A059] uppercase tracking-wider mb-2 border-b border-[#262626] pb-2">
                      Inquiry Summary
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Contact:</span>
                      <span className="font-mono text-white">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Email:</span>
                      <span className="text-white">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Est. Budget:</span>
                      <span className="text-[#C5A059] font-semibold">{formData.budgetRange}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 bg-[#C5A059] hover:bg-[#D4B370] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest transition-colors border border-[#E5C583]/50 shadow-md"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Inquiry Form */
                <form id="inquiry-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  <div className="border-b border-[#262626] pb-4">
                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      Project Consultation Form
                    </h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Fill in your project details to schedule a site evaluation and preliminary budget discussion.
                    </p>
                  </div>

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Full Name <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        id="form-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full px-4 py-3 bg-[#181818] border text-sm text-white placeholder-neutral-500 rounded-none transition-colors focus:bg-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#C5A059] ${
                          errors.name ? 'border-red-500 bg-red-900/10' : 'border-[#2D2D2D] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="form-phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Contact Phone <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        id="form-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98400 XXXXX"
                        className={`w-full px-4 py-3 bg-[#181818] border text-sm text-white placeholder-neutral-500 rounded-none transition-colors focus:bg-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#C5A059] ${
                          errors.phone ? 'border-red-500 bg-red-900/10' : 'border-[#2D2D2D] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Project Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Email Address <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        id="form-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@gmail.com"
                        className={`w-full px-4 py-3 bg-[#181818] border text-sm text-white placeholder-neutral-500 rounded-none transition-colors focus:bg-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#C5A059] ${
                          errors.email ? 'border-red-500 bg-red-900/10' : 'border-[#2D2D2D] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="form-location" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Project Location / Plot Area <span className="text-[#C5A059]">*</span>
                      </label>
                      <input
                        id="form-location"
                        name="projectLocation"
                        type="text"
                        value={formData.projectLocation}
                        onChange={handleChange}
                        placeholder="e.g. Tenkasi Road, Rajapalayam"
                        className={`w-full px-4 py-3 bg-[#181818] border text-sm text-white placeholder-neutral-500 rounded-none transition-colors focus:bg-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#C5A059] ${
                          errors.projectLocation ? 'border-red-500 bg-red-900/10' : 'border-[#2D2D2D] focus:border-[#C5A059]'
                        }`}
                      />
                      {errors.projectLocation && (
                        <p className="text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.projectLocation}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Project Type & Budget Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="form-projectType" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Project Type
                      </label>
                      <select
                        id="form-projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#181818] border border-[#2D2D2D] text-sm text-white rounded-none focus:bg-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type} className="bg-[#181818] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="form-budgetRange" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Target Budget Range
                      </label>
                      <select
                        id="form-budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#181818] border border-[#2D2D2D] text-sm text-white rounded-none focus:bg-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
                      >
                        {BUDGET_RANGES.map((b) => (
                          <option key={b} value={b} className="bg-[#181818] text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Project Requirements & Timeline (Optional)
                    </label>
                    <textarea
                      id="form-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about your built-up area (sq.ft), number of floors, planned start date, or specific preferences..."
                      className="w-full px-4 py-3 bg-[#181818] border border-[#2D2D2D] text-sm text-white placeholder-neutral-500 rounded-none transition-colors focus:bg-[#1E1E1E] focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="form-submit-cta"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 bg-[#C5A059] hover:bg-[#D4B370] active:scale-98 text-[#0A0A0A] text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-xl flex items-center justify-center gap-3 disabled:opacity-75 group border border-[#E5C583]/50"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Request a Consultation</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-neutral-500 text-center mt-3">
                      We respect your privacy. Inquiries are handled with confidentiality for site assessment.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
