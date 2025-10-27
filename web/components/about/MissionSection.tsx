'use client';

export default function MissionSection() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 flex justify-center overflow-hidden bg-black">
      
      <div className="absolute inset-0 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-royalblue/10 to-transparent"></div>
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="animate-slideUp">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 md:mb-12"
            style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}
          >
            Our{' '}
            <span 
              className="italic font-normal"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mission
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <p 
              className="text-base md:text-lg text-gray-400 leading-relaxed"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              To empower businesses with innovative technology solutions that transform challenges into opportunities. We believe in creating lasting partnerships built on trust, transparency, and exceptional results.
            </p>
            <p 
              className="text-base md:text-lg text-gray-400 leading-relaxed"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            >
              Our team of dedicated professionals works tirelessly to stay at the forefront of technological advancement, ensuring that our clients always have access to the best solutions available.
            </p>
          </div>
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