'use client';

import { X, Linkedin, Instagram } from 'lucide-react';

export default function PrivacyHeroSection() {
  return (
    <section className="relative h-80 md:h-90 lg:h-100 w-full flex items-end overflow-hidden text-white">
      
      {/* Background with gradient and subtle texture */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 30%, royalblue 100%)',
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 1px, transparent 1px), 
            repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 4px),
            linear-gradient(135deg, #000000, #0a0a0a)
          `,
          backgroundSize: '20px 20px',
        }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[85%] mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-end text-center sm:text-left pb-8 md:pb-12">
        
        {/* Left Text */}
        <div className="max-w-lg space-y-2">
          <p 
            className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Our{' '}
            <span
              className="font-normal"
              style={{
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Privacy & Policy
            </span>{' '}
            ensures transparency and trust
          </p>

          <p className="text-sm md:text-base text-gray-400 font-light max-w-md mx-auto sm:mx-0">
            We value your privacy and are committed to safeguarding your personal data. 
            Our policies are designed to ensure that every interaction you have with our platform 
            is secure, transparent, and built on trust.
          </p>
        </div>

        {/* Right Side Social Icons (Hidden on Mobile) */}
        <div className="hidden sm:flex flex-col items-end space-y-2">
          <span className="text-sm text-gray-400 mr-1">Connect With Us!</span>
          
          <div className="flex gap-2">
            <a
              href="https://x.com/sunajo_official?t=dekSagTwMSEr_V-HQDLIwg&s=08"
              aria-label="Follow us on X"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-slate-900 transition-colors hover:bg-[#4169E1] hover:text-white"
            >
              <X className="w-4 h-4" />
            </a>
            
            <a
              href="https://www.linkedin.com/company/sunajo/"
              aria-label="Follow us on LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-slate-900 transition-colors hover:bg-[#4169E1] hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <a
              href="https://www.instagram.com/sunajo.in/tagged/?hl=en"
              aria-label="Follow us on Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-slate-900 transition-colors hover:bg-[#4169E1] hover:text-white"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Font Import */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
      `}</style>
    </section>
  );
}
