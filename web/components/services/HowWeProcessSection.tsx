'use client';

import { Lightbulb, Code, Rocket, CheckCircle } from 'lucide-react';

export default function HowWeProcessSection() {
  const steps = [
    {
      icon: Lightbulb,
      title: '1. Strategy & Planning',
      description:
        'We start by understanding your goals, audience, and brand identity. Then we craft a roadmap for a clear development direction.',
    },
    {
      icon: Code,
      title: '2. Design & Development',
      description:
        'Our creative team designs intuitive UI/UX while our developers turn ideas into seamless, scalable, and efficient solutions.',
    },
    {
      icon: Rocket,
      title: '3. Launch & Optimization',
      description:
        'Once tested and refined, your project goes live — optimized for performance, speed, and conversion from day one.',
    },
    {
      icon: CheckCircle,
      title: '4. Support & Growth',
      description:
        'We ensure long-term success with continuous updates, analytics tracking, and performance-driven enhancements.',
    },
  ];

  return (
    <section className="relative py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/30 to-[#000814]/90"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center animate-fadeUp">
        {/* Title */}
        <h2
          className="text-4xl sm:text-5xl font-light mb-6 leading-tight"
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
            Process
          </span>{' '}
          that drives results
        </h2>

        {/* Gradient Line */}
        <div className="relative w-32 h-[2px] mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-royalblue to-transparent animate-gradientFlow"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-[#0b0b0b]/60 border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-royalblue/60"
            >
              <div className="p-4 rounded-full bg-royalblue/10 group-hover:bg-royalblue/20 transition-all mb-4">
                <step.icon className="w-8 h-8 text-royalblue" />
              </div>
              <h4 className="text-lg font-medium mb-2">{step.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations & Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400&display=swap');

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.9s ease-out forwards;
          opacity: 0;
        }

        .animate-gradientFlow {
          background-size: 200% 100%;
          animation: gradientFlow 2s linear infinite;
        }

        .text-royalblue {
          color: #4169E1;
        }

        .bg-royalblue\\/10 {
          background-color: rgba(65, 105, 225, 0.1);
        }
      `}</style>
    </section>
  );
}
