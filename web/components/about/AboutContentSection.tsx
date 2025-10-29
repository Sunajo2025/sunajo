'use client';

import { Code, Shield, Users, Zap } from 'lucide-react';

export default function AboutContentSection() {
  const values = [
    {
      icon: Code,
      title: 'Innovation First',
      description:
        'We leverage cutting-edge technologies and creative thinking to deliver solutions that empower businesses to grow faster and operate smarter. Innovation drives every project we create.',
    },
    {
      icon: Shield,
      title: 'Security Focused',
      description:
        'We take data protection seriously — implementing top-tier encryption, regular audits, and secure development practices to ensure your business remains safe and compliant.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description:
        'Our team believes in long-term partnerships. We collaborate closely with clients to understand their goals, ensuring every project reflects their vision and exceeds expectations.',
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      description:
        'We embrace an agile mindset — adapting quickly, iterating efficiently, and delivering high-quality results within rapid timelines, ensuring flexibility at every stage.',
    },
  ];

  return (
    <section className="relative md:py-24 py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-royalblue/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/40 to-[#000814]/90"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-20 animate-slideUp">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6"
            style={{ fontFamily: '"Poppins", system-ui, sans-serif' }}
          >
            Why Choose{' '}
            <span
              className="italic font-normal"
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Us
            </span>
          </h2>
          <p
            className="text-base md:text-lg text-gray-400 max-w-3xl font-light"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            We combine deep technical expertise with a forward-thinking approach
            to create impactful digital experiences. Our dedication, creativity,
            and professionalism make us your perfect technology partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-28">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl backdrop-blur-xl border border-white/20  overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`,
                background:
                  'linear-gradient(135deg, rgba(65,105,225,0.3), rgba(255,255,255,0.05))',
                boxShadow: '0 8px 32px 0 rgba(65, 105, 225, 0.25)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-royalblue/10 opacity-50"></div>

              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-royalblue/40 to-white/20 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:from-royalblue/60 group-hover:to-white/30 transition-all border border-white/30">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-lg md:text-xl font-medium text-white mb-3"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm text-gray-300 leading-relaxed"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {value.description}
                </p>
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

       
        }
      `}</style>
    </section>
  );
}
