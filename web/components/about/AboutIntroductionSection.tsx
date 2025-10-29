'use client';

import { ArrowRight } from 'lucide-react';

export default function AboutIntroductionSection() {
   const handleScrollTonNext = () => {
    const contactSection = document.getElementById('AboutContentSection');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 flex justify-center overflow-hidden bg-black">
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-royalblue/10 to-transparent"></div>

      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"></div>
      
      {/* Content Container */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative z-10">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col text-left w-full md:w-auto md:flex-1 animate-slideUp">
          
          {/* Tagline/Metadata */}
          <div className="mb-4 sm:mb-6">
            <span 
              className="inline-block px-4 py-2 text-xs sm:text-sm font-medium tracking-wider backdrop-blur-sm"
              style={{ 
                fontFamily: '"Inter", system-ui, sans-serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                border: '1px solid rgba(65, 105, 225, 0.3)',
                borderRadius: '9999px'
              }}
            >
              Innovators. Engineers. Strategists. Creators.
            </span>
          </div>

          {/* Main Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white mb-6"
            style={{ fontFamily: '"Poppins", system-ui, -apple-system, sans-serif' }}
          >
            Empowering businesses with{' '}
            <span 
              className="italic font-normal"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              innovative
            </span>
            {' '}IT solutions
          </h1>
          
          {/* Subtext */}
          <p 
            className="text-base sm:text-lg text-gray-400 font-light max-w-2xl leading-relaxed"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            We are a technology-driven company passionate about transforming ideas into powerful digital solutions. Our team of qualified IT specialists delivers cutting-edge SaaS products, innovative app development, and comprehensive digital strategies that drive measurable results for businesses worldwide.
          </p>

          
        </div>

        {/* Right Side: Action Button */}
        <div className="w-full md:w-auto flex justify-start md:justify-end mt-6 md:mt-0 animate-slideUp" style={{ animationDelay: '0.2s' }}>
          <button
          onClick={handleScrollTonNext}
            className="cursor-pointer relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium transition hover:scale-105 transform text-xs sm:text-sm tracking-wide group overflow-visible"
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
              Learn More
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
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
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

        @keyframes border-rotate {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-border-rotate {
          animation: border-rotate 3s linear infinite;
        }
      `}</style>
    </section>
  );
}