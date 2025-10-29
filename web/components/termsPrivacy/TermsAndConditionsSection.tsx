'use client';

export default function TermsContent() {
  return (
    <section
      id="terms-and-conditions-details"
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
              Terms & Conditions
            </span>{' '}
            of Service
          </h2>

          <p
            className="text-gray-400 text-base md:text-lg max-w-3xl font-light"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            These Terms & Conditions outline the rules, responsibilities, and mutual
            trust that govern your use of our products and services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              1. Acceptance of Terms
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              By accessing or using our platform, you agree to comply with these terms. 
              If you disagree with any part, please discontinue use of our services immediately.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              2. User Responsibilities
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              Users are expected to provide accurate details and maintain ethical communication 
              when connecting with vendors, clients, or temporary workers through our applications.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              3. Vendor & Service Conduct
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              Vendors and partners must follow professional standards and deliver services as promised. 
              Misrepresentation, fraud, or misconduct will result in account suspension or termination.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              4. Payment & Transactions
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              All transactions must be completed securely through our approved channels. 
              We are not responsible for losses from unauthorized or external payment activities.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              5. Limitation of Liability
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              While we strive to provide a seamless experience, we are not liable for indirect damages, 
              vendor disputes, or unforeseen service interruptions.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              6. Modifications to Terms
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              We may update these terms periodically to reflect business or legal changes. 
              Continued use after updates implies your acceptance of the revised conditions.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-light" style={{ fontFamily: '"Poppins", sans-serif' }}>
              7. Contact & Support
            </h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-4xl" style={{ fontFamily: '"Inter", sans-serif' }}>
              For any questions regarding our terms or your account, please reach out to our 
              support team through official communication channels listed on our website.
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
