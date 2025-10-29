'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) setIsVisible(false);
        else if (currentScrollY < lastScrollY.current) setIsVisible(true);
      } else setIsVisible(true);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
    ${scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}
  `;

  const links = [
    { href: '/services', label: 'Our Services' },
    { href: '/capabilities', label: 'Our Capabilities' },
    { href: '/products', label: 'Our Products' },
    { href: '/careers', label: 'Careers' },
    { href: '/about', label: 'About Us' },
  ];

  return (
    <nav className={navClass}>
      <div className="mx-auto w-[90%] flex items-center justify-between px-3 md:px-6 py-4 transition-all duration-300">
        
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center gap-12 text-gray-300 text-md">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition-all duration-300 group ${
                  isActive
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#4169E1] to-white font-medium'
                    : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#4169E1] hover:to-white'
                }`}
              >
                {link.label}

                {/* Gradient line (ROYAL BLUE → WHITE) only on hover */}
                {!isActive && (
                  <span
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-[#4169E1] to-white transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"
                  ></span>
                )}
              </a>
            );
          })}
        </div>

        {/* Contact Button */}
        <a
          href="/contact"
          className="hidden md:block px-5 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white/10 transition"
        >
          Contact Us
        </a>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-lg z-40 transition-all duration-300 
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 w-10 h-10 flex flex-col items-center justify-center hover:bg-white/10 rounded-lg transition"
          aria-label="Close menu"
        >
          <span className="w-6 h-0.5 bg-white rotate-45 absolute"></span>
          <span className="w-6 h-0.5 bg-white -rotate-45 absolute"></span>
        </button>

        <div className="flex flex-col items-center justify-center h-full gap-10 px-6 text-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-light transition transform hover:scale-105 ${
                pathname === link.href
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#4169E1] to-white'
                  : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#4169E1] hover:to-white'
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-6 px-8 py-3 border border-white/40 rounded-full text-white text-lg hover:bg-white/10 transition transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
