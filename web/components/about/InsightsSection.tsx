'use client';

export default function InsightsSection() {
  const articles = [
    {
      title: 'Building the Future of Digital Innovation',
      description:
        'Discover how SUNAJO is redefining digital experiences through modern technologies and forward-thinking design practices.',
      date: 'October 2025',
      link: '#',
    },
    {
      title: 'The Power of Remote Collaboration',
      description:
        'Our team shares how remote work has enhanced creativity, communication, and global teamwork at SUNAJO.',
      date: 'September 2025',
      link: '#',
    },
    {
      title: 'Designing with Purpose and Simplicity',
      description:
        'A closer look at how our design philosophy blends minimalism with function to deliver meaningful experiences.',
      date: 'August 2025',
      link: '#',
    },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-10 lg:px-20 bg-black overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000814]/90"></div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        {/* Header */}
        <span
          className="inline-block px-4 py-2 text-xs sm:text-sm font-medium tracking-wider mb-6 border rounded-full"
          style={{
            borderColor: 'rgba(65, 105, 225, 0.4)',
            background: 'linear-gradient(to right, royalblue, white)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: '"Inter", system-ui, sans-serif',
          }}
        >
          Insights & Updates
        </span>

        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-6"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Latest{' '}
          <span
            className="italic font-normal"
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Articles & Newsletters
          </span>
        </h2>

        <p
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light mb-16"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          Stay updated with our latest stories, company insights, and thoughts on technology,
          innovation, and culture — straight from the SUNAJO team.
        </p>

        
        {/* Articles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-2xl p-8 text-left border border-white/10 backdrop-blur-xl border border-white/20 hover:border-royalblue/50 transition-all duration-300"
              style={{
                fontFamily: '"Inter", system-ui, sans-serif',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-royalblue/5 opacity-40 rounded-2xl"></div>
              <div className="relative z-10">
                <p className="text-xs uppercase tracking-widest mb-2 text-gray-400">{item.date}</p>
                <h3
                  className="text-lg sm:text-xl font-medium mb-3"
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    background: 'linear-gradient(to right, royalblue, white)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed"
                  style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
                >
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="text-sm font-medium tracking-wide"
                  style={{
                    background: 'linear-gradient(to right, royalblue, white)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-24 max-w-2xl mx-auto text-center">
          <h3
            className="text-xl sm:text-2xl mb-4"
            style={{
              fontFamily: '"Poppins", sans-serif',
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Subscribe to Our Newsletter
          </h3>
          <p
            className="text-gray-400 mb-6 text-sm sm:text-base"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Get the latest updates, insights, and announcements delivered right to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-2/3 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-gray-200 focus:outline-none focus:border-royalblue/50 placeholder-gray-500"
              style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
            />

            {/* Gradient Subscribe Button */}
            <div
              className="w-full sm:w-auto flex justify-center md:justify-end mt-2 md:mt-0 animate-slideUp"
              style={{ animationDelay: '0.2s' }}
            >
              <button
                type="submit"
                className="cursor-pointer relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium transition hover:scale-105 transform text-xs sm:text-sm tracking-wide group overflow-visible"
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
                          'linear-gradient(90deg, transparent, white, rgba(65, 105, 225, 0.9), transparent)',
                        filter: 'blur(8px)',
                      }}
                    />
                  </div>
                  <div
                    className="absolute inset-[2px] rounded-full"
                    style={{ background: 'linear-gradient(to right, royalblue, black)' }}
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
                  Subscribe
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
          </form>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500;600&display=swap');

        @keyframes border-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-border-rotate {
          animation: border-rotate 3s linear infinite;
        }

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
      `}</style>
    </section>
  );
}
