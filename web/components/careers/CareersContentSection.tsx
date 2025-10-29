'use client';

export default function CultureInnovationSection() {
    const handleScrollTonNext = () => {
    const contactSection = document.getElementById('careers-roles');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section
      id="CareersContentSection"
      className="relative py-24 md:py-32 px-6 sm:px-10 lg:px-16 bg-gradient-to-b from-black via-[#0b0b14] to-[#000814] text-white overflow-hidden"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-royalblue/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Text Section */}
        <div className="md:w-1/2 flex flex-col items-start animate-slideUp space-y-6">
          <h2
            className="text-4xl sm:text-5xl font-light leading-tight"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Building a{' '}
            <span
              className="italic font-normal"
              style={{
                fontFamily: '"Playfair Display", serif',
                background: 'linear-gradient(to right, white, royalblue)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              culture
            </span>{' '}
            of innovation and impact.
          </h2>

          <p
            className="text-gray-400 text-base sm:text-lg font-light leading-relaxed max-w-lg"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            We don’t just create — we transform ideas into experiences that inspire.
            Collaboration and creativity drive everything we do, empowering our teams
            to shape the future of digital innovation together.
          </p>

          {/* Gradient Button */}
          <div className="mt-6">
            <button
            onClick={handleScrollTonNext}
              className="cursor-pointer relative inline-flex items-center gap-2 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full font-medium transition hover:scale-105 transform text-xs sm:text-sm tracking-wide group overflow-visible"
              style={{
                background: 'linear-gradient(to right, royalblue, black)',
                fontFamily: '"Inter", system-ui, sans-serif',
              }}
            >
              <div
                className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
                style={{ padding: '2px' }}
              >
                <div className="absolute inset-0 animate-border-rotate">
                  <div
                    className="absolute w-16 h-full"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, white, rgba(65,105,225,0.9), transparent)',
                      filter: 'blur(8px)',
                    }}
                  />
                </div>
                <div
                  className="absolute inset-[2px] rounded-full"
                  style={{
                    background: 'linear-gradient(to right, royalblue, black)',
                  }}
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
                Explore Roles
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

        {/* Right Interactive Cards */}
        <div className="md:w-1/2 grid sm:grid-cols-2 gap-6 animate-slideRight">
          {[
            {
              title: 'Team First',
              desc: 'We celebrate collaboration — every win is shared, every challenge faced together.',
            },
            {
              title: 'Creative Freedom',
              desc: 'Bold ideas are encouraged, and innovation is at the core of every decision.',
            },
            {
              title: 'Learning Always',
              desc: 'We stay curious, growing through workshops, mentorship, and real projects.',
            },
            {
              title: 'Global Vision',
              desc: 'From local roots to global reach, our work impacts users across the world.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative group p-6 rounded-2xl bg-[#101018]/70 border border-white/10 hover:border-royalblue/40 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-royalblue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-lg font-semibold text-white/90 mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
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

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes border-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.9s ease-out forwards;
          opacity: 0;
        }

        .animate-slideRight {
          animation: slideRight 0.9s ease-out forwards;
          opacity: 0;
        }

        .animate-border-rotate {
          animation: border-rotate 3s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
