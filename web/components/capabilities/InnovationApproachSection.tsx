'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function InnovationApproachSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const accordionData = [
    {
      title: 'Research & Discovery',
      content:
        'We start by deeply understanding your goals, audience, and challenges — setting a strategic foundation that guides every creative decision.',
    },
    {
      title: 'Strategic Planning',
      content:
        'We connect creativity with performance by defining clear strategies that ensure every design and idea aligns with your business objectives.',
    },
    {
      title: 'Design & Development',
      content:
        'Our creative and technical teams collaborate seamlessly to transform ideas into high-performing, visually refined digital experiences.',
    },
    {
      title: 'Optimization & Growth',
      content:
        'We continuously analyze, refine, and enhance our work to drive measurable success and long-term growth.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 md:py-32 px-6 sm:px-10 lg:px-20 bg-black text-white overflow-hidden">
      {/* Background pattern & gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/40 to-[#000814]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <div className="space-y-6 animate-slideUp">
          <h2
            className="text-3xl md:text-5xl font-light leading-tight"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Our Approach to{' '}
            <span
              className="italic font-normal"
              style={{
                fontFamily: '"Playfair Display", serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Innovation
            </span>
          </h2>
          <p
            className="text-gray-400 text-base md:text-lg font-light"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Innovation is at the core of what we do - combining strategy, creativity, and technology to deliver transformative outcomes.
          </p>
        </div>

        {/* Right Section - Line Accordion */}
        <div className="space-y-0 border-l border-gray-800 animate-fadeUp">
          {accordionData.map((item, index) => (
            <div key={index} className="group">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full cursor-pointer flex justify-between items-center py-6 px-6 border-b border-gray-800 text-left transition-all duration-300"
              >
                <span
                  className={`text-lg font-light transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-r from-[#4169E1] to-white bg-clip-text text-transparent'
                      : 'text-gray-300 group-hover:bg-gradient-to-r group-hover:from-[#4169E1] group-hover:to-white group-hover:bg-clip-text group-hover:text-transparent'
                  }`}
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {item.title}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-[#4169E1]' : 'group-hover:text-[#4169E1]'
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p
                  className="text-gray-400 text-sm md:text-base leading-relaxed py-2"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&display=swap');

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

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeUp {
          animation: fadeUp 1.2s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
