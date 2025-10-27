'use client';

import { Laptop, TrendingUp, MessageSquare, Smartphone } from 'lucide-react';

export default function HomeHeroSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: 'SaaS Products', icon: Laptop },
    { name: 'Digital Marketing', icon: TrendingUp },
    { name: 'Social Media Management', icon: MessageSquare },
    { name: 'App Development', icon: Smartphone }
  ];

  return (
    <section className="min-h-screen h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-8">
      {/* Hero Content */}
      <div className="max-w-5xl mx-auto w-full text-center z-10">
        <div className="space-y-4 sm:space-y-6 animate-fadeIn">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight animate-slideUp tracking-tight">
            <span className="font-normal" style={{ fontFamily: '"Poppins", system-ui, -apple-system, sans-serif' }}>
              Transform Your Business with
            </span>
            <br />
            <span
              className="italic font-normal"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Innovative IT Solutions
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto font-light animate-slideUp tracking-wide px-4"
            style={{ 
              animationDelay: '0.2s',
              fontFamily: '"Inter", system-ui, -apple-system, sans-serif'
            }}
          >
            Qualified IT specialists for modernizing infrastructure and protecting your data.
          </p>

          {/* CTA Button */}
          <div className="animate-slideUp pt-2 sm:pt-4" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={handleScrollToContact}
              className="relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium transition hover:scale-105 transform text-xs sm:text-sm tracking-wide group overflow-visible"
              style={{
                background: 'linear-gradient(to right, royalblue, black)',
                fontFamily: '"Inter", system-ui, sans-serif',
              }}
            >
              {/* Animated border wrapper */}
              <div 
                className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
                style={{ padding: '2px' }}
              >
                <div className="absolute inset-0 animate-border-rotate">
                  <div 
                    className="absolute w-16 h-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, white, rgba(65, 105, 225, 0.9), transparent)',
                      filter: 'blur(8px)',
                    }}
                  />
                </div>
                {/* Inner mask to create border effect */}
                <div 
                  className="absolute inset-[2px] rounded-full"
                  style={{ background: 'linear-gradient(to right, royalblue, black)' }}
                />
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
                Let's Build Together
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
            </button>
          </div>

          {/* Services Section */}
          <div className="animate-slideUp pt-4 sm:pt-6" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-gray-400 text-sm sm:text-base md:text-lg px-4">
              {services.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  <Icon 
                    className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                    style={{ 
                      stroke: 'url(#gradient)',
                      filter: 'drop-shadow(0 0 2px rgba(65, 105, 225, 0.5))'
                    }}
                  />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="royalblue" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background & floating elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]"></div>
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"></div>
      <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 sm:bottom-40 left-20 sm:left-40 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-2 h-2 bg-cyan-300/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
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
        @keyframes rotateGlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes star-btn {
          0% {
            offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .rotating-border {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            white 90deg,
            rgba(65, 105, 225, 0.9) 180deg,
            transparent 270deg,
            transparent 360deg
          );
          animation: rotateGlow 3s linear infinite;
          border-radius: 9999px;
        }
        .animate-star-btn {
          animation: star-btn calc(var(--duration) * 1s) linear infinite;
        }
      `}</style>
    </section>
  );
}