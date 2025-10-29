'use client';

export default function CapabilitiesContentSection() {
  return (
    <section id="capabilities-details" className="relative py-1O md:py-10 px-6 sm:px-10 lg:px-20 bg-black overflow-hidden text-white">
      
      {/* Background pattern & gradient (updated to match MobileAppDevelopmentSection) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/40 to-[#000814]/90"></div>

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto text-left space-y-12 md:space-y-16 animate-fadeUp">

        {/* Section Heading */}
        <div className="space-y-4 ">
          <h2 
            className="text-3xl md:text-5xl font-light leading-tight"
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
              Capabilities
            </span>{' '}
            that drive innovation
          </h2>
          <p 
            className="text-gray-400 text-base md:text-lg max-w-3xl  font-light"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            We blend creativity, strategy, and technology to craft experiences that redefine digital excellence. 
            Our approach focuses on results, ensuring that every product we deliver empowers your brand to stand tall in the modern market.
          </p>
        </div>

        {/* Detailed Content */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 
              className="text-2xl md:text-3xl font-light"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              1. Strategic Thinking
            </h3>
            <p 
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Every project begins with understanding your goals. We analyze, plan, and develop strategies that align with your brand vision — ensuring every digital move is impactful and purposeful.
            </p>
          </div>

          <div className="space-y-4">
            <h3 
              className="text-2xl md:text-3xl font-light"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              2. Creative Design & Development
            </h3>
            <p 
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Our design and development teams collaborate to build visually engaging, performance-driven solutions. From interactive websites to dynamic applications, we merge form and function beautifully.
            </p>
          </div>

          <div className="space-y-4">
            <h3 
              className="text-2xl md:text-3xl font-light"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              3. Scalable Technology
            </h3>
            <p 
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              We use cutting-edge technologies and frameworks to deliver scalable, secure, and future-ready solutions — ensuring your digital presence evolves with the ever-changing landscape.
            </p>
          </div>

          <div className="space-y-4">
            <h3 
              className="text-2xl md:text-3xl font-light"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              4. Measurable Impact
            </h3>
            <p 
              className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Beyond visuals and code, our focus is on results. We track performance, engagement, and growth metrics to ensure that your investment translates into real-world success.
            </p>
          </div>
        </div>
      </div>

      {/* Animations and fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeUp {
          animation: fadeUp 1.2s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
