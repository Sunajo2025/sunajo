'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

export default function ContactSection() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    projectDetails: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your actual EmailJS keys
    const SERVICE_ID = 'service_qfgdwoj';
    const TEMPLATE_ID = 'template_u5dqgyl';
    const PUBLIC_KEY = '6n6UJoZUeE_-7JkJs';

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      company_name: formData.companyName,
      phone_number: formData.phoneNumber,
      selected_service: selectedService || 'Not specified',
      selected_budget: selectedBudget || 'Not specified',
      message: formData.projectDetails,
    };

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log('SUCCESS:', result.text);
      alert('✅ Your inquiry has been sent successfully!');

      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phoneNumber: '',
        projectDetails: '',
      });
    } catch (error) {
      console.error('FAILED:', error);
      alert('❌ Something went wrong. Please try again later.');
    }
  };

  const handleScrollToNext = () => {
    const nextSection = document.getElementById('footer');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative overflow-hidden flex items-center py-16 sm:py-20 px-4 sm:px-8"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#001233]/30 via-transparent to-transparent"></div>
      <div className="absolute -bottom-20 right-1/3 w-96 h-96 bg-royalblue/10 blur-3xl rounded-full animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8 animate-slideUp">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight">
              Tell us about your<br />project
            </h2>

            {/* Bullet points */}
            <div className="space-y-3 sm:space-y-4">
              {[
                'We will respond to you within 12 hours',
                "We'll sign an NDA if requested",
                'Access to dedicated consultant specialists',
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-royalblue to-white flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{text}</p>
                </div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8 space-y-3 sm:space-y-4">
              <a
                href="mailto:sunajo@gmail.com"
                className="text-white text-base sm:text-lg hover:text-royalblue transition-colors block"
              >
                sunajo@gmail.com
              </a>

              <div className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <p>Always busy and want to book</p>
                <p>an exact time to call?</p>
              </div>

              {/* Book a free call button */}
              <div
                className="w-full md:w-auto flex justify-start animate-slideUp pt-3 sm:pt-4"
                style={{ animationDelay: '0.4s' }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleScrollToNext}
                  className="cursor-pointer relative inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition transform text-sm sm:text-base tracking-wide group overflow-visible"
                  style={{
                    background: 'linear-gradient(to right, royalblue, black)',
                    fontFamily: '"Inter", system-ui, sans-serif',
                  }}
                >
                  <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none" style={{ padding: '2px' }}>
                    <div className="absolute inset-0 animate-border-rotate">
                      <div
                        className="absolute w-16 h-full"
                        style={{
                          background: 'linear-gradient(90deg, transparent, white, rgba(65, 105, 225, 0.9), transparent)',
                          filter: 'blur(8px)',
                        }}
                      />
                    </div>
                    <div className="absolute inset-[2px] rounded-full" style={{ background: 'linear-gradient(to right, royalblue, black)' }} />
                  </div>

                  <span
                    className="z-10 relative"
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
                    className="z-10 relative transition-transform group-hover:translate-x-1"
                    style={{
                      background: 'linear-gradient(to right, white, royalblue)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    →
                  </span>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              {/* Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-white text-sm sm:text-base mb-2 block">Full name*</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-royalblue transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-white text-sm sm:text-base mb-2 block">Email*</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-royalblue transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Company Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="text-white text-sm sm:text-base mb-2 block">Company Name*</label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-royalblue transition-colors"
                    placeholder="Enter your company name"
                    required
                  />
                </div>
                <div>
                  <label className="text-white text-sm sm:text-base mb-2 block">Phone Number*</label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-royalblue transition-colors"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="text-white text-sm sm:text-base mb-2 block">Project details*</label>
                <textarea
                  rows={4}
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  className="w-full px-4 py-3 sm:py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-royalblue transition-colors resize-none"
                  placeholder="Tell us about your project"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full font-medium transition-all hover:scale-[1.02] transform text-sm sm:text-base"
              >
                Submit inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Animations */}
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

        @keyframes border-rotate {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        .animate-border-rotate {
          animation: border-rotate 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
