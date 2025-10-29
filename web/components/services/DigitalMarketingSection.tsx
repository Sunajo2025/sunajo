'use client';

import { Target, Globe, TrendingUp, MousePointer } from 'lucide-react';

export default function DigitalMarketingSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black text-white overflow-hidden">
      
      {/* Same grid background effect as previous section */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000814]/90"></div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 animate-slideUp">
        
        {/* Left side text */}
        <div className="flex-1 text-left">
          <h2
            className="text-4xl sm:text-5xl font-light mb-6 leading-tight"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Elevate your business with{' '}
            <span
              className="italic font-normal relative inline-block"
              style={{
                fontFamily: '"Playfair Display", serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Digital Marketing
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-royalblue to-white"></span>
            </span>
          </h2>

          <p
            className="text-base sm:text-lg text-gray-400 font-light mb-10 max-w-2xl leading-relaxed"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            We craft data-driven digital marketing strategies that attract the right audience, 
            boost brand visibility, and drive conversions. From SEO to paid ads, every campaign 
            is built to deliver measurable growth and engagement.
          </p>

          <div className="h-[2px] w-24 bg-gradient-to-r from-royalblue to-white rounded-full"></div>
        </div>

        {/* Right side list */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-14 text-gray-300">
          
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">SEO Optimization</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Improve visibility and organic ranking with advanced keyword research and technical SEO.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Global Reach</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Expand your presence across markets with region-based campaigns and localization strategies.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Performance Ads</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Deliver impactful ROI through PPC, social ads, and smart bidding strategies.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <MousePointer className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Conversion Tracking</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Monitor user behavior in real time and fine-tune strategies for maximum impact.
            </p>
          </div>

        </div>
      </div>

      {/* Animation and Fonts */}
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
