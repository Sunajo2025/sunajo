'use client';

import { Smartphone, Layers, Shield, Cpu } from 'lucide-react';

export default function MobileAppDevelopmentSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black text-white overflow-hidden">
      {/* Background pattern & gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/40 to-[#000814]/90"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Title and Description */}
        <div className="flex flex-col text-left md:w-1/2 animate-slideUp">
          <h2
            className="text-4xl sm:text-5xl font-light mb-6 leading-tight"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Designing{' '}
            <span
              className="italic font-normal"
              style={{
                fontFamily: '"Playfair Display", serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              seamless
            </span>{' '}
            mobile experiences
          </h2>

          <p
            className="text-base sm:text-lg text-gray-400 font-light mb-10 leading-relaxed max-w-xl"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Our mobile app solutions are crafted to deliver smooth performance, intuitive design,
            and powerful functionality. Whether it's Android, iOS, or cross-platform — we ensure your
            app drives engagement, reliability, and scalability.
          </p>
        </div>

        {/* Right Side - Animated Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/2 animate-slideUp" style={{ animationDelay: '0.15s' }}>
          <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 hover:from-royalblue/10 hover:to-black/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Cross-Platform Apps</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Build once, deploy anywhere — from Android to iOS with optimized performance.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 hover:from-royalblue/10 hover:to-black/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-3">
              <Layers className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Intuitive UI/UX</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our designers focus on creating clean interfaces that feel effortless to use.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 hover:from-royalblue/10 hover:to-black/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Secure Architecture</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Robust data encryption and user authentication ensure total app security.
            </p>
          </div>

          <div className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-black/40 to-black/20 hover:from-royalblue/10 hover:to-black/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-3">
              <Cpu className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">High Performance</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Optimized coding ensures fast, fluid, and reliable mobile experiences.
            </p>
          </div>
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
