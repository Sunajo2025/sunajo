'use client';

import { Linkedin } from 'lucide-react';

export default function LeadershipTeamSection() {
  const leaders = [
    {
      name: 'Gokulasigamani N',
      image: '/Team/gokul.jpg',
      linkedin: 'https://linkedin.com/in/gokulasigamani',
      role: 'Founding Member',
    },
    {
      name: 'Gowthaman C',
      image: '/Team/gowthaman.jpg',
      linkedin: 'https://linkedin.com/in/rajiv',
       role: 'Founding Member',
    },
    {
      name: 'Harini S',
      image: '/Team/Harini.jpg',
      linkedin: 'https://www.linkedin.com/in/harini-subramaniam-21b192226/',
       role: 'Founding Member',
    },
    {
      name: 'Kirubhasan',
      image: '/Team/kirubha.png',
      linkedin: 'https://linkedin.com/in/ravi',
       role: 'Founding Member',
    },
    {
      name: 'Dharani S.D',
      image: '/Team/dharani.jpg',
      linkedin: 'https://linkedin.com/in/ravi',
       role: 'Founding Member',
    },
    {
      name: 'Harini G',
      image: '/Team/hariniG.png',
      linkedin: 'https://linkedin.com/in/sneha',
       role: 'Founding Member',
    },
    {
      name: 'Dhinesh',
      image: '/Team/dhinesh.jpg',
      linkedin: 'https://linkedin.com/in/dhineshgg',
       role: 'Founding Member',
    },
     {
      name: 'Midun',
      image: '/Team/midun.png',
      linkedin: 'https://linkedin.com/in/dhineshgg',
       role: 'Design Lead',
    },
  ];

  return (
    <section className="relative py-10 md:py-10 md:pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="absolute inset-0 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000814]/90"></div>


      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-4 animate-slideUp">
          <span
            className="inline-block px-4 py-2 text-xs sm:text-sm font-medium tracking-wider backdrop-blur-sm mb-8"
            style={{
              fontFamily: '"Inter", system-ui, sans-serif',
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              border: '1px solid rgba(65, 105, 225, 0.3)',
              borderRadius: '9999px',
            }}
          >
            Company
          </span>
        </div>

        <div
          className="text-center mb-12 md:mb-16 animate-slideUp"
          style={{ animationDelay: '0.1s' }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6"
            style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}
          >
            About Our Company and{' '}
            <span
              className="italic font-normal"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Leadership Team
            </span>
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg text-gray-400 max-w-4xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Founded in 2023, <span className="text-white font-medium">SUNAJO</span> is a modern technology company built by passionate innovators focused on redefining digital experiences. Our founding members share a single vision — to create impactful, accessible, and futuristic digital solutions for the modern world.
          </p>
        </div>

        {/* GRID UPDATED */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="relative group animate-slideUp"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div
                className="relative rounded-2xl overflow-hidden backdrop-blur-xl border border-white/20 hover:border-royalblue/50 transition-all duration-500"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  boxShadow: '0 8px 32px 0 rgba(65, 105, 225, 0.1)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-royalblue/5 opacity-50"></div>

                <div className="relative aspect-[7/8] bg-gradient-to-br from-slate-800 to-slate-900">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                    <div className="mb-2 sm:mb-3">
                      <h3
                        className="text-lg sm:text-xl md:text-2xl font-light text-white"
                        style={{ fontFamily: '"Poppins", sans-serif' }}
                      >
                        {leader.name}
                      </h3>
                      <p
                        className="text-[10px] sm:text-xs md:text-sm tracking-widest uppercase mt-1"
                        style={{
                          fontFamily: '"Inter", system-ui, sans-serif',
                          background: 'linear-gradient(to right, royalblue, white)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                       {leader.role} 
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/20">
                      <div
                        className="text-[10px] sm:text-xs tracking-widest uppercase"
                        style={{
                          fontFamily: '"Inter", sans-serif',
                          background: 'linear-gradient(to right, royalblue, white)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        SUNAJO
                      </div>

                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-royalblue transition-colors"
                      >
                        <Linkedin size={16} className="sm:w-5 sm:h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
