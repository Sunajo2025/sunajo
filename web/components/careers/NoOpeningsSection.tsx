'use client';

export default function NoOpeningsSection() {
  return (
    <section
     id="careers-roles"
      className="relative py-24 md:py-32 px-6 sm:px-10 lg:px-16 bg-black text-white overflow-hidden"
    >
     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000814]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center animate-fadeIn">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-light mb-5"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          No Current{' '}
          <span
            className="italic font-normal"
            style={{
              fontFamily: '"Playfair Display", serif',
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Openings
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-gray-400 text-base sm:text-lg max-w-5xl mb-12"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          We don’t have any active openings right now, but we’re always on the lookout for passionate, 
          creative, and driven individuals to join our growing team. Keep an eye on this space for 
          future opportunities or reach out if you think you’d be a great fit!
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="/contact"
            className="cursor-pointer relative inline-flex items-center gap-2 px-8 py-3 sm:py-3.5 rounded-full font-medium transition hover:scale-105 transform text-sm sm:text-base group overflow-visible"
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
              Get in Touch
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
          </a>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&display=swap');

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(40px);
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

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.9s ease-out forwards;
          opacity: 0;
        }

        .animate-border-rotate {
          animation: border-rotate 3s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
