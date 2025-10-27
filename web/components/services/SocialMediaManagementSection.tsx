'use client';

import { Megaphone, BarChart3, Users, Clock } from 'lucide-react';

export default function SocialMediaManagementSection() {
  return (
    <section className="relative py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black text-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000814]/90"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center animate-slideUp">
        
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-light mb-6 leading-tight text-center"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Amplify your brand with{' '}
          <span
            className="italic font-normal"
            style={{
              fontFamily: '"Playfair Display", serif',
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Social Media Management
          </span>
        </h2>

        <p
          className="text-base sm:text-lg text-gray-400 font-light mb-16 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          Build meaningful connections, enhance your online presence, and grow your audience 
          through data-driven strategies. Our expert team crafts content that resonates with 
          your brand voice and keeps your followers engaged.
        </p>

        {/* Plain Text Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left text-gray-300">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Megaphone className="w-5 h-5 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Content Strategy</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Curated and consistent social media plans that align with your business goals.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="w-5 h-5 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Analytics & Growth</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Data-backed insights to monitor performance and refine engagement strategies.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Community Engagement</h4>
            </div>
            <p className="text-sm leading-relaxed">
              We help foster authentic connections with your audience to build brand loyalty.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-royalblue" />
              <h4 className="text-white font-medium text-lg">24/7 Monitoring</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Real-time responses and engagement tracking to keep your brand always active.
            </p>
          </div>
        </div>
      </div>

      {/* Animation & Font */}
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
