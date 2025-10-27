'use client';

import { Linkedin } from 'lucide-react';

export default function LeadershipTeamSection() {
  const leaders = [
    {
      name: 'Gokulasigamani N',
      role: 'CHAIRMAN AND CO-FOUNDER',
      image: '/Team/gokul.jpg',
      linkedin: 'https://linkedin.com/in/gokulasigamani',
    },
    {
      name: 'Gowthaman C',
      role: 'CO-FOUNDER',
      image: '/Team/rajiv.jpg',
      linkedin: 'https://linkedin.com/in/rajiv',
    },
    {
      name: 'Harini S',
      role: 'CHIEF OPERATING OFFICER',
      image: '/Team/ananya.jpg',
      linkedin: 'https://linkedin.com/in/ananya',
    },
    {
      name: 'Kirubhasan',
      role: 'CHIEF TECHNOLOGY OFFICER',
      image: '/Team/ravi.jpg',
      linkedin: 'https://linkedin.com/in/ravi',
    },
    {
      name: 'Dharani S',
      role: 'CHIEF TECHNOLOGY OFFICER',
      image: '/Team/ravi.jpg',
      linkedin: 'https://linkedin.com/in/ravi',
    },
    {
      name: 'Harini G',
      role: 'HEAD OF MARKETING',
      image: '/Team/sneha.jpg',
      linkedin: 'https://linkedin.com/in/sneha',
    },
    {
      name: 'Dhinesh',
      role: 'DIRECTOR OF ENGINEERING',
      image: '/Team/arjun.jpg',
      linkedin: 'https://linkedin.com/in/arjun',
    },
    
  ];

  return (
    <section className="relative py-10 md:py-10 md:pb-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="absolute inset-0 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-royalblue/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"></div>

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
            Founded in 2017, Quantum Data Technologies is a self-funded, bootstrapped company serving Global Fortune 500 customers. Our commitment to innovation and excellence has positioned us as leaders in the AI and machine learning industry.
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

                <div className="relative aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                    <div className="mb-2 sm:mb-3">
                      <p
                        className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wider uppercase mb-1 sm:mb-2"
                        style={{
                          fontFamily: '"Inter", system-ui, sans-serif',
                          background: 'linear-gradient(to right, royalblue, white)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {leader.role}
                      </p>
                      <h3
                        className="text-lg sm:text-xl md:text-2xl font-light text-white"
                        style={{ fontFamily: '"Poppins", sans-serif' }}
                      >
                        {leader.name}
                      </h3>
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
