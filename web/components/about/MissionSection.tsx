'use client';

export default function MissionSection() {
  return (
    <section
      id="AboutContentSection"
      className="relative py-10 md:py-20 px-6 sm:px-10 lg:px-20 overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/40 to-[#000814]/90"></div>

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-16 animate-fadeUp">

        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2
            className="text-4xl md:text-5xl font-light leading-tight"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Our{' '}
            <span
              className="italic font-normal"
              style={{
                fontFamily: '"Playfair Display", serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mission & Vision
            </span>
          </h2>
          <p
            className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            We aim to bridge innovation with human connection — building digital experiences that inspire, empower, and create lasting impact.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h3
              className="text-2xl md:text-3xl font-light"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Purpose-Driven Excellence
            </h3>
            <p
              className="text-gray-400 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Our mission is to redefine how people experience digital ecosystems. We believe that technology should not just solve problems — it should inspire possibilities. Every solution we build focuses on efficiency, usability, and long-term value.
            </p>
            <p
              className="text-gray-400 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              From crafting seamless user interfaces to building scalable applications, our goal is to empower brands and individuals to thrive in an ever-evolving digital landscape.
            </p>
          </div>

          {/* Right content */}
          <div className="space-y-6">
            <h3
              className="text-2xl md:text-3xl font-light"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Our Vision for the Future
            </h3>
            <p
              className="text-gray-400 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              We envision a world where technology and creativity move hand in hand — simplifying lives and enhancing meaningful human experiences. Our long-term vision is to become a trusted global partner for innovation-led growth and digital excellence.
            </p>
            <p
              className="text-gray-400 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              With a culture built on collaboration, transparency, and adaptability, we continuously push boundaries to ensure that every project we deliver makes a tangible difference.
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
