'use client';

import { Code, Shield, Users, Zap } from 'lucide-react';

export default function AboutContentSection() {
  const values = [
    {
      icon: Code,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technologies to deliver solutions that keep you ahead of the competition.'
    },
    {
      icon: Shield,
      title: 'Security Focused',
      description: 'Your data protection is our priority. We implement industry-leading security measures in every project.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work alongside you as partners, understanding your vision and delivering beyond expectations.'
    },
    {
      icon: Zap,
      title: 'Agile Delivery',
      description: 'Fast-paced development cycles ensure rapid deployment without compromising on quality.'
    }
  ];

  return (
    <section className="relative md:py-10 py-10 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      
      <div className="absolute inset-0 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-royalblue/10 to-transparent"></div>
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-50"></div>
      
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
            We combine technical expertise with business acumen to deliver solutions that drive real results. Our commitment to excellence sets us apart.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-28">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl backdrop-blur-xl border border-white/20 hover:border-royalblue/50 transition-all duration-300 group animate-slideUp overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: '0 8px 32px 0 rgba(65, 105, 225, 0.1)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-royalblue/5 opacity-50"></div>
              
              <div className="relative">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-royalblue/30 to-white/10 backdrop-blur-sm flex items-center justify-center mb-5 group-hover:from-royalblue/40 group-hover:to-white/20 transition-all border border-white/20">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 
                  className="text-lg md:text-xl font-medium text-white mb-3"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-sm text-gray-400 leading-relaxed"
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

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}