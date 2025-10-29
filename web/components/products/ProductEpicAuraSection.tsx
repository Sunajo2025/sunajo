'use client';

import { Sparkles } from 'lucide-react';

export default function ProductEpicAuraSection() {
  return (
    <section
      id="products-details"
      className="relative py-10 md:py-20 px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >
    {/* Same grid background effect as previous section */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000814]/90"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl text-center space-y-10 animate-slideUp">
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-5 py-2 border border-royalblue/40 rounded-full backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-royalblue" />
          <span
            className="text-sm font-medium tracking-widest"
            style={{
              background: 'linear-gradient(to right, white, royalblue)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            Epic Aura – Event Management Application
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
          style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}
        >
          Plan. Connect. Celebrate{' '}
          <span
            className="italic font-normal"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            effortlessly.
          </span>
        </h2>

        {/* Description */}
        <p
          className="text-gray-400 text-base sm:text-lg leading-relaxed font-light max-w-3xl mx-auto"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          <strong className="text-white/90 font-medium">Epic Aura</strong> is a smart event management platform 
          that allows people to plan and execute their events — from weddings and parties to conferences — all in one place.  
          With access to premium <strong>Gold</strong> and <strong>Silver</strong> vendors at the best offer prices, 
          Epic Aura ensures your events are fully organized, well-coordinated, and stress-free.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[
            {
              title: 'Plan Every Detail',
              desc: 'Create and manage event timelines, schedules, and tasks easily with clear overviews and reminders to keep everything on track.',
            },
            {
              title: 'Connect with Vendors',
              desc: 'Choose from premium Gold and Silver vendors offering services like catering, decoration, and photography  all with the best offers.',
            },
            {
              title: 'Organize with Ease',
              desc: 'Get everything in one dashboard  bookings, payments, guest lists, and progress tracking  making event planning seamless.',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="p-8 text-left space-y-3"
            >
              <h3
                className="text-xl font-semibold"
                style={{
                  background: 'linear-gradient(to right, white, royalblue)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: '"Poppins", system-ui, sans-serif',
                }}
              >
                {card.title}
              </h3>
              <p
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-12">
          <button
            className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform group"
            style={{
              background: 'linear-gradient(to right, royalblue, black)',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(to right, white, royalblue)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Learn More About Epic Aura
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
        </div> */}
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
      `}</style>
    </section>
  );
}
