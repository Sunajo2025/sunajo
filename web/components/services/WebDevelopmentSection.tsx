'use client';

import { Code, Globe, Zap } from 'lucide-react';

export default function WebDevelopmentSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/30 to-[#000814]/90"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-slideUp">
        {/* Section Title */}
        <h2
          className="text-4xl sm:text-5xl font-light mb-6 leading-tight"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Crafting{' '}
          <span
            className="italic font-normal"
            style={{
              fontFamily: '"Playfair Display", serif',
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            powerful
          </span>{' '}
          and scalable web experiences
        </h2>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-gray-400 font-light mb-12 max-w-3xl leading-relaxed"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          We specialize in building responsive, high-performance, and visually stunning web applications.
          Our team blends design precision with cutting-edge technologies like React, Node.js, and MongoDB
          to create digital products that not only look amazing but deliver measurable business results.
        </p>

        {/* Service Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl text-left">
          <div className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-1">
            <div className="p-3 rounded-xl bg-royalblue/10 group-hover:bg-royalblue/20 transition-all">
              <Globe className="w-6 h-6 text-royalblue" />
            </div>
            <div>
              <h4 className="text-white font-medium text-lg">Responsive Design</h4>
              <p className="text-gray-400 text-sm">Seamless experiences across all screen sizes and devices.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-1">
            <div className="p-3 rounded-xl bg-royalblue/10 group-hover:bg-royalblue/20 transition-all">
              <Code className="w-6 h-6 text-royalblue" />
            </div>
            <div>
              <h4 className="text-white font-medium text-lg">Modern Tech Stack</h4>
              <p className="text-gray-400 text-sm">Developed using React, Node.js, and scalable APIs.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-1">
            <div className="p-3 rounded-xl bg-royalblue/10 group-hover:bg-royalblue/20 transition-all">
              <Zap className="w-6 h-6 text-royalblue" />
            </div>
            <div>
              <h4 className="text-white font-medium text-lg">Performance Optimized</h4>
              <p className="text-gray-400 text-sm">Faster load times for smoother user experiences.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-1">
            <div className="p-3 rounded-xl bg-royalblue/10 group-hover:bg-royalblue/20 transition-all">
              <Globe className="w-6 h-6 text-royalblue" />
            </div>
            <div>
              <h4 className="text-white font-medium text-lg">SEO & Accessibility</h4>
              <p className="text-gray-400 text-sm">Ensuring visibility and usability for all audiences.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
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

        .bg-royalblue\\/10 {
          background-color: rgba(65, 105, 225, 0.1);
        }
      `}</style>
    </section>
  );
}
