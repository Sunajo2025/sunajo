'use client';

import { InlineWidget } from 'react-calendly';

export default function CalendlyBookingSection() {
  return (
    <section
      id="CalendlyBookingSection"
      className="relative py-24 md:py-32 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-black via-[#0b0b14] to-[#000814] text-white overflow-hidden"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-royalblue/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 max-w-7xl mx-auto animate-slideUp">
        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Book a{' '}
          <span
            style={{
              background: 'linear-gradient(to right, white, royalblue)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: '"Playfair Display", serif',
            }}
            className="italic font-normal"
          >
            Call
          </span>{' '}
          with Sunajo
        </h1>

        {/* Subtext */}
        <p
          className="text-gray-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          Let’s discuss your vision, goals, or project ideas.  
          Choose a convenient time and we’ll connect to turn your thoughts into results.
        </p>

        {/* Calendly Embed — full width */}
        <div className="w-full max-w-7xl bg-[#101018]/70 backdrop-blur-lg shadow-2xl rounded-2xl p-4 sm:p-8 border border-white/10 hover:border-royalblue/40 transition-all duration-500">
          <InlineWidget
            url="https://calendly.com/gokulsunajo/30min"
            styles={{ height: '700px', width: '100%' }}
          />
        </div>
      </div>

      {/* Styles */}
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

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.9s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
