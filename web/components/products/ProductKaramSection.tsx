'use client';

import { HeartHandshake } from 'lucide-react';

export default function ProductKaramSection() {
  return (
    <section
      id="product-karam"
      className="relative py-10 md:py-20 px-6 sm:px-10 lg:px-16 flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* Grid + Gradient Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000814]/90"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl text-center space-y-10 animate-slideUp">
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-5 py-2 border border-royalblue/40 rounded-full backdrop-blur-sm">
          <HeartHandshake className="w-4 h-4 text-royalblue" />
          <span
            className="text-sm font-medium tracking-widest"
            style={{
              background: 'linear-gradient(to right, white, royalblue)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: '"Inter", system-ui, sans-serif',
            }}
          >
            KARAM – Empowering Lives with AI & Compassion
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight"
          style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}
        >
          Empower. Innovate.{' '}
          <span
            className="italic font-normal"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Transform.
          </span>
        </h2>

        {/* Description */}
        <p
          className="text-gray-400 text-base sm:text-lg leading-relaxed font-light max-w-3xl mx-auto"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          <strong className="text-white/90 font-medium">KARAM</strong> is a social-impact initiative 
          designed to uplift communities through technology. Acting as a bridge between NGOs, skilled volunteers, 
          and AI-driven solutions, KARAM empowers people in need with technical expertise and tools 
          to help them rebuild, learn, and grow sustainably.
        </p>

        {/* Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {[
            {
              title: 'Tech for Good',
              desc: 'Using AI and data-driven insights to identify needs, allocate resources efficiently, and amplify community impact.',
            },
            {
              title: 'Bridge of Support',
              desc: 'Connecting skilled individuals, NGOs, and local communities to solve real-world challenges collaboratively.',
            },
            {
              title: 'Sustainable Empowerment',
              desc: 'Providing tools, training, and digital support to help individuals and families become self-reliant through innovation.',
            },
          ].map((card, index) => (
            <div key={index} className="p-8 text-left space-y-3">
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
      </div>

      {/* Animation */}
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
