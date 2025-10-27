'use client';

import { useState, useEffect, useRef } from 'react';
// import Image from 'next/image'; // Removed the problematic Next.js import

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to control hiding/showing
  const lastScrollY = useRef(0); // Ref to track previous scroll position

  // Effect to add and clean up scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Determine if scrolled past the initial transparent area (e.g., 50px)
      setScrolled(currentScrollY > 50);

      // 2. Hide/Show logic (only trigger after scrolling past a small buffer)
      if (currentScrollY > 100) {
        // Scrolling Down: Hide the navbar
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
        } 
        // Scrolling Up: Show the navbar
        else if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        }
      } else {
          // Always show the navbar at the very top of the page
          setIsVisible(true);
      }
      
      // 3. Update last scroll position
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamic class string for the navbar's visibility and background
  const navClass = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${isVisible ? 'translate-y-0' : '-translate-y-full'} // Hide/Show based on scroll direction
    ${scrolled 
      ? 'bg-black/80 backdrop-blur-lg' // Black/transparent background on scroll
      : 'bg-transparent' // Transparent background at the top
    }
  `;

  return (
    <nav className={navClass}>
      {/* Mobile Padding Fix:
        Changed original 'px-6' to 'px-4' for mobile and retained 'md:px-6' 
        for medium/desktop screens to reduce padding on smaller views. 
      */}
      <div className="mx-auto w-[88%] flex items-center justify-between px-4 md:px-6 py-4 transition-all duration-300">

        {/* Logo replaced with standard <img> tag to maintain compatibility */}
        <a href="/"><div className="flex items-center">
          <img
            src="/logo.png" 
            alt="Logo"
            width={130} 
            height={130}
            className="object-contain"
          />
        </div></a>

        <div className="hidden md:flex flex-1 justify-center gap-14 text-gray-300 text-md">
          <a href="/services" className="hover:text-white transition">Our Services</a>
          <a href="/capabilities" className="hover:text-white transition">Capabilities</a>
          <a href="/careers" className="hover:text-white transition">Careers</a>
          <a href="/about" className="hover:text-white transition">About Us</a>
        </div>

        <a href="/contact" className="hidden md:block px-5 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white/10 transition">
          Contact Us
        </a>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:bg-white/10 rounded-lg transition"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu changed to black/95 background */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex flex-col items-center justify-center hover:bg-white/10 rounded-lg transition z-50"
          aria-label="Close menu"
        >
          <span className="w-6 h-0.5 bg-white rotate-45 absolute"></span>
          <span className="w-6 h-0.5 bg-white -rotate-45 absolute"></span>
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a href="/services" className="text-white text-2xl font-light hover:text-cyan-300 transition transform hover:scale-110" onClick={() => setIsMenuOpen(false)}>Our Services</a>
          <a href="/capabilities" className="text-white text-2xl font-light hover:text-cyan-300 transition transform hover:scale-110" onClick={() => setIsMenuOpen(false)}>Capabilities</a>
          <a href="/careers" className="text-white text-2xl font-light hover:text-cyan-300 transition transform hover:scale-110" onClick={() => setIsMenuOpen(false)}>Careers</a>
          <a href="/about" className="text-white text-2xl font-light hover:text-cyan-300 transition transform hover:scale-110" onClick={() => setIsMenuOpen(false)}>About Us</a>

          <a href="/contact" className="mt-8 px-8 py-3 border-2 border-white/40 rounded-full text-white text-lg hover:bg-white/10 transition transform hover:scale-105" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </a>

          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-cyan-300/60 rounded-full animate-pulse"></div>
        </div>
      </div>
    </nav>
  );
}
