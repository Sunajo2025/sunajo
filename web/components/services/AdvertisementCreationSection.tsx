'use client';

import { Video, Image, MonitorSmartphone, Sparkles } from 'lucide-react';

export default function AdvertisementCreationSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black text-white overflow-hidden">
      
      {/* Background (same as previous sections) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000814]/90"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center animate-slideFadeUp">

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-light mb-6 leading-tight text-center"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Creative <span
            className="italic font-normal relative inline-block"
            style={{
              fontFamily: '"Playfair Display", serif',
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Advertisement Creations
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-royalblue to-white"></span>
          </span>
        </h2>

        <p
          className="text-base sm:text-lg text-gray-400 font-light mb-16 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          We design visually stunning and emotionally captivating ads that tell your brand’s story, 
          connect with audiences, and boost conversions across all platforms.
        </p>

        {/* Animated feature list - centered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left text-gray-300">
          
          <div className="group transition-transform duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-2">
              <Video className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Video Advertisements</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Engaging promotional and storytelling videos crafted to capture attention instantly.
            </p>
          </div>

          <div className="group transition-transform duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-2">
              <Image className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Graphic Campaigns</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Eye-catching designs tailored for social media, print, and digital displays.
            </p>
          </div>

          <div className="group transition-transform duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-2">
              <MonitorSmartphone className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Cross-Platform Ads</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Optimized ad formats for mobile, desktop, and OTT platforms ensuring seamless reach.
            </p>
          </div>

          <div className="group transition-transform duration-500 hover:-translate-y-2">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Brand Storytelling</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Create emotional connections with your audience through compelling brand visuals.
            </p>
          </div>

        </div>
      </div>

      {/* Animation & Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&display=swap');

        @keyframes slideFadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideFadeUp {
          animation: slideFadeUp 0.9s ease-out forwards;
          opacity: 0;
        }

        .text-royalblue {
          color: #4169E1;
        }
      `}</style>
    </section>
  );
}
