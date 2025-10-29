'use client';

export default function OpenRolesSection() {
  return (
    <section
      id="careers-roles"
      className="relative py-24 md:py-32 px-6 sm:px-10 lg:px-16 bg-black text-white overflow-hidden"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#001233]/30 via-transparent to-transparent"></div>
      <div className="absolute -bottom-20 right-1/3 w-96 h-96 bg-royalblue/10 blur-3xl rounded-full animate-pulse-slow"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center flex flex-col items-center animate-fadeIn">
        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl font-light mb-4"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Discover Your{' '}
          <span
            className="italic font-normal"
            style={{
              fontFamily: '"Playfair Display", serif',
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Next Role
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className="text-gray-400 text-base sm:text-lg max-w-2xl mb-16"
          style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
        >
          We’re looking for creative thinkers, passionate developers, and problem solvers who are
          ready to shape the future of technology with us. Explore our open positions and join a
          community where innovation never stops.
        </p>

        {/* Roles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {[
            {
              title: 'React Developer',
              level: 'Intern / Fresher',
              desc: 'Work on dynamic web interfaces, create responsive designs, and collaborate on live client projects.',
            },
            {
              title: 'UI/UX Designer',
              level: 'Full-time / Remote',
              desc: 'Design seamless experiences and craft visually striking interfaces that make an impact.',
            },
            {
              title: 'Backend Engineer',
              level: 'Full-time',
              desc: 'Build and optimize scalable server-side applications using Node.js and modern APIs.',
            },
            {
              title: 'Project Coordinator',
              level: 'Intern',
              desc: 'Assist project teams, track deliverables, and ensure smooth execution of product cycles.',
            },
            {
              title: 'QA Tester',
              level: 'Full-time / Hybrid',
              desc: 'Ensure the quality of every release through detailed testing and performance checks.',
            },
            {
              title: 'Marketing Associate',
              level: 'Intern / Fresher',
              desc: 'Collaborate with teams to plan, execute, and track creative campaigns across platforms.',
            },
          ].map((role, i) => (
            <div
              key={i}
              className="relative group border-t border-gray-700 pt-6 hover:border-royalblue transition-all duration-300 text-left"
            >
              <h3
                className="text-lg sm:text-xl font-semibold mb-1 group-hover-text"
                style={{
                  background: 'linear-gradient(to right, white, royalblue)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'all 0.3s ease',
                }}
              >
                {role.title}
              </h3>
              <span className="text-sm text-gray-500">{role.level}</span>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">{role.desc}</p>

              {/* Hover Line Animation */}
              <div className="absolute left-0 bottom-0 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-white to-royalblue transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16">
          <button
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
              View All Openings
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
