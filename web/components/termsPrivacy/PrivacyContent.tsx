'use client';

export default function PrivacyContent() {
  return (
    <section
      id="privacy-policy-details"
      className="relative py-10 md:py-16 px-6 sm:px-10 lg:px-20 bg-black overflow-hidden text-white"
    >
      {/* Background pattern & gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/40 to-[#000814]/90"></div>

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto text-left space-y-12 md:space-y-16 animate-fadeUp">
        
        {/* Heading */}
        <div className="space-y-4">
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
              Privacy Policy
            </span>{' '}
            & Data Protection
          </h2>

          <p
            className="text-gray-400 text-base md:text-lg max-w-3xl font-light"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Your privacy matters to us. This policy explains how we collect, use, and protect your information when you interact with our products and services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              1. Information We Collect
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              We collect personal information such as your name, email, contact number, and event preferences when you register or use our services. We may also collect non-personal data like browser type and device information for analytics.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              2. How We Use Your Data
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              The information we collect is used to personalize your experience, provide better event recommendations, and improve our services. We may use your email to send updates, offers, or service-related notifications.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              3. Cookies & Tracking
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              Our platform uses cookies to enhance your browsing experience. Cookies help us understand user behavior, remember preferences, and display relevant content. You can disable cookies in your browser settings anytime.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              4. Data Security
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              We implement strong security measures, including encryption and restricted access, to safeguard your personal data from unauthorized use, loss, or disclosure.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              5. Third-Party Sharing
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              We do not sell your data. However, we may share limited information with trusted partners (like payment gateways or service vendors) solely to facilitate your experience.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              6. Your Rights
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              You have full control over your data. You can access, modify, or request deletion of your personal information anytime by contacting our support team.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              7. Policy Updates
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              This policy may be updated periodically to reflect changes in our practices. We encourage users to review it regularly for transparency.
            </p>
          </div>

        </div>
      </div>

      {/* Animation & Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
