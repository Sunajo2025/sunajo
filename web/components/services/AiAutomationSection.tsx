'use client';

import { Brain, Workflow, Zap, BarChart } from 'lucide-react';

export default function AiAutomationSection() {
  return (
    <section id='service-details' className="relative py-20 md:py-28 px-6 sm:px-10 lg:px-16 bg-black text-white overflow-hidden">
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000]/50 to-[#000814]/90"></div>

      {/* Main container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 animate-slideUp">
        
        {/* Left side content */}
        <div className="flex-1 text-left">
          <h2
            className="text-4xl sm:text-5xl font-light mb-6 leading-tight"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Transform your business with{' '}
            <span
              className="italic font-normal relative inline-block"
              style={{
                fontFamily: '"Playfair Display", serif',
                background: 'linear-gradient(to right, royalblue, white)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AI & Automation
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-royalblue to-white"></span>
            </span>
          </h2>

          <p
            className="text-base sm:text-lg text-gray-400 font-light mb-10 max-w-2xl leading-relaxed"
            style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
          >
            Empower your workflows with intelligent automation. Our AI solutions streamline repetitive tasks, 
            enhance decision-making, and help businesses operate faster, smarter, and more efficiently 
            — unlocking the true potential of digital intelligence.
          </p>

          <div className="h-[2px] w-24 bg-gradient-to-r from-royalblue to-white rounded-full"></div>
        </div>

        {/* Right side feature grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-14 text-gray-300">
          
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Brain className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">AI-Powered Insights</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Use machine learning to analyze data, predict trends, and make informed business decisions in real time.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <Workflow className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Smart Workflow Automation</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Automate repetitive business processes to save time, reduce errors, and increase operational efficiency.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Intelligent Chatbots</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Deliver 24/7 customer support with conversational AI that understands and responds naturally.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <BarChart className="w-6 h-6 text-royalblue" />
              <h4 className="text-white font-medium text-lg">Predictive Analytics</h4>
            </div>
            <p className="text-sm leading-relaxed">
              Forecast performance and optimize strategies with AI models tailored to your business needs.
            </p>
          </div>

        </div>
      </div>

      {/* Styles & Animation */}
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

        .animate-slideUp {
          animation: slideUp 0.9s ease-out forwards;
          opacity: 0;
        }

        .text-royalblue {
          color: #4169E1;
        }
      `}</style>
    </section>
  );
}
