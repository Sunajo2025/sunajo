'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ContactCTASection() {
  const handleScrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/contact');
  };

  return (
    <section className="relative py-28 px-6 sm:px-10 lg:px-20 bg-black text-white overflow-hidden">
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/40 to-[#000814]/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fadeUp">
        <h2
          className="text-3xl md:text-5xl font-light leading-tight"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          Let’s Build Something{' '}
          <span
            className="italic font-normal"
            style={{
              fontFamily: '"Playfair Display", serif',
              background: 'linear-gradient(to right, royalblue, white)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Extraordinary
          </span>
        </h2>

        <p
          className="text-gray-400 text-base md:text-lg font-light max-w-2xl mx-auto"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Ready to elevate your digital presence? Our team is here to collaborate, innovate, and deliver impactful solutions tailored for your vision.
        </p>

        {/* Animated Gradient Button */}
        <div
          className="w-full md:w-auto flex justify-center mt-6 animate-slideUp"
          style={{ animationDelay: '0.3s' }}
        >
          <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleNavigate}
      className="cursor-pointer relative inline-flex items-center gap-2 px-8 py-3 sm:py-3.5 rounded-full font-medium transition transform text-sm sm:text-base tracking-wide group overflow-visible"
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
        Contact Us
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
    </motion.button>
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

        @keyframes border-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1.2s ease-out forwards;
          opacity: 0;
        }

        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-border-rotate {
          animation: border-rotate 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
