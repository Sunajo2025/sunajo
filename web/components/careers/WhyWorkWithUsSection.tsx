'use client';

export default function WhyWorkWithUsSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 sm:px-10 lg:px-16 bg-black text-white overflow-hidden">
     <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000814]/90"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fadeIn">
        <h2
          className="text-4xl sm:text-5xl font-light mb-6"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Why Work{' '}
          <span
            className="italic font-normal"
            style={{
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            With Us
          </span>
        </h2>

        <p
          className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto mb-16"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          At our core, we believe in building people before we build products. 
          We encourage innovation, celebrate diversity, and create a space 
          where ideas turn into impact. Every voice is heard, every contribution valued.
        </p>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {[
            {
              title: 'Growth-Focused',
              desc: 'We offer mentorship, learning sessions, and real-world projects to accelerate your career path.',
            },
            {
              title: 'Innovation-Driven',
              desc: 'Work with cutting-edge technologies and explore creative solutions that make a real difference.',
            },
            {
              title: 'Community Spirit',
              desc: 'Join a family of passionate minds where collaboration, respect, and fun define our culture.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative group border-t border-gray-700 pt-6 hover:border-royalblue transition-all duration-300"
            >
              <h3
                className="text-lg sm:text-xl font-semibold mb-2"
                style={{
                  background: 'linear-gradient(to right, white, royalblue)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>

              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-royalblue to-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
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
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.9s ease-out forwards; opacity: 0; }
        .animate-pulse-slow { animation: pulse 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
