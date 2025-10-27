'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    projectDetails: '',
    file: null
  });

  const handleSubmit = () => {
    console.log('Form submitted:', { ...formData, selectedService, selectedBudget });
  };

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden flex items-center py-16 sm:py-20 px-4 sm:px-8">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-royalblue/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 animate-slideUp">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              Tell us about your<br />project
            </h2>

            {/* Tick points */}
            <div className="space-y-3 sm:space-y-4">
              {[
                "We will respond to you within 12 hours",
                "We'll sign an NDA if requested",
                "Access to dedicated consultant specialists"
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-royalblue to-white flex items-center justify-center mt-1 flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{text}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8 space-y-3 sm:space-y-4">
              <a href="mailto:hello@asiaagency@gmail.com" className="text-white text-base sm:text-lg hover:text-royalblue transition-colors block">
                sunajo@gmail.com
              </a>

              <div className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <p>Always busy and want to book</p>
                <p>an exact time to call?</p>
              </div>

              {/* Book a free call button */}
              <div className="animate-slideUp pt-3 sm:pt-4" style={{ animationDelay: '0.4s' }}>
                <button
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition shadow-lg hover:shadow-xl hover:scale-105 transform text-sm sm:text-base tracking-wide text-white"
                  style={{
                    background: 'linear-gradient(to right, royalblue, black)',
                  }}
                >
                  <span
                    style={{
                      background: 'linear-gradient(to right, white, royalblue)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: '600',
                    }}
                  >
                    Book a free call
                  </span>
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    style={{
                      background: 'linear-gradient(to right, white, royalblue)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4 sm:space-y-6">

              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-white text-sm sm:text-base mb-2 block">Full name*</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-royalblue transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="text-white text-sm sm:text-base mb-2 block">Email*</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-royalblue transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="text-white text-sm sm:text-base mb-2 block">Project details*</label>
                <textarea
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({...formData, projectDetails: e.target.value})}
                  className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-royalblue transition-colors resize-none"
                  placeholder="Tell us about your project"
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="text-white text-sm sm:text-base mb-3 block">Attach a file(optional)</label>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-6 sm:p-8 text-center hover:border-royalblue/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={(e) => setFormData({...formData, file: e.target.files[0]})}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-gray-400 text-sm sm:text-base">
                      Choose a file or drag and drop here
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-3.5 sm:py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-medium transition-all hover:scale-[1.02] transform text-sm sm:text-base"
              >
                Submit inquiry
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"></div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
