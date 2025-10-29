'use client';

import { Handshake, Users, Briefcase } from 'lucide-react';

export default function ProductVelaimateSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black text-white overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000814]/90"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 animate-slideUp">

        {/* Left Side – Product Intro */}
        <div className="flex-1 text-left">
          <h2
            className="text-4xl sm:text-5xl font-light mb-6 leading-tight"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Empowering catering services with{' '}
            <span
              className="italic font-normal relative inline-block"
              style={{
                fontFamily: '"Playfair Display", serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Velaimate
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-royalblue to-white"></span>
            </span>
          </h2>

          <p
            className="text-base sm:text-lg text-gray-400 font-light mb-10 max-w-2xl leading-relaxed"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            <strong className="text-white/90 font-medium">Velaimate</strong> is a smart brokerage application 
            that bridges the gap between catering vendors and individuals seeking temporary jobs.  
            It simplifies event workforce management by connecting skilled professionals, such as cooks, 
            servers, and helpers, with businesses and events that need their expertise — all in a transparent, 
            organized, and opportunity-driven ecosystem.
          </p>

          <div className="h-[2px] w-24 bg-gradient-to-r from-royalblue to-white rounded-full"></div>
        </div>

        {/* Right Side – Key Features */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-1 gap-y-10 text-gray-300">

          <div>
            <div className="flex items-center gap-3 mb-2">
              <Handshake className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Vendor–Worker Connection</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Velaimate connects catering businesses with verified temporary workers, ensuring 
              that every event has the right people available at the right time.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Empowering Local Workforce</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Provides flexible work opportunities for cooks, servers, and other staff members, 
              creating a reliable income source for skilled individuals.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Transparent Brokerage Platform</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Ensures smooth coordination between vendors and workers with clear bookings, 
              payments, and performance tracking — all managed from one secure platform.
            </p>
          </div>

        </div>
      </div>

      {/* Fonts & Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&display=swap');

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.9s ease-out forwards;
          opacity: 0;
        }

        .text-royalblue {
          color: #4169E1;
        }
      `}</style>
    </section>
  );
}
