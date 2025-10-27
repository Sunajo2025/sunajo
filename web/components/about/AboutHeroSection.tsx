'use client';

import { X, Linkedin, Instagram } from 'lucide-react';

export default function BannerComponent() {
  return (
    <section className="relative h-80 md:h-90 lg:h-100 w-full flex items-end overflow-hidden text-white">
      
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 30%, royalblue 100%)',
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 1px, transparent 1px), 
            repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 4px),
            linear-gradient(135deg, #000000, #0a0a0a)
          `,
          backgroundSize: '20px 20px',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[85%] mx-auto flex justify-between items-end pb-8 md:pb-12">
        
        <div className="text-left max-w-lg space-y-2">

            <p 
                className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug"
                style={{ fontFamily: '"Poppins", sans-serif' }}
            >
                Innovative solutions <br />
                for dynamic industries
            </p>
        </div>

        <div className="flex flex-col items-end space-y-2">
          <span className="text-sm text-gray-400 mr-1">Quick Contact With Us!</span>
          
          <div className="flex gap-2">
            <a
              href="#"
              aria-label="Follow us on X"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-slate-900 transition-colors hover:bg-royalblue hover:text-white"
            >
              <X className="w-4 h-4" />
            </a>
            
            <a
              href="#"
              aria-label="Follow us on LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-slate-900 transition-colors hover:bg-royalblue hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <a
              href="#"
              aria-label="Follow us on Instagram"
              className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-slate-900 transition-colors hover:bg-royalblue hover:text-white"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap');
      `}</style>
    </section>
  );
}