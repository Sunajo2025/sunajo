'use client';

import { useState } from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const royalBlueHover = 'hover:text-[#4169E1] transition-colors duration-300';

  return (
    <footer className="bg-black/95 text-gray-300 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 items-start">
          
          {/* Logo & About */}
          <div className="flex flex-col items-start space-y-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="object-contain w-32 sm:w-36 md:w-40"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Innovative IT Solutions providing SaaS products, development services, 
              and digital capabilities worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className={royalBlueHover}>Our Services</a></li>
              <li><a href="#" className={royalBlueHover}>Capabilities</a></li>
              <li><a href="#" className={royalBlueHover}>Careers</a></li>
              <li><a href="#" className={royalBlueHover}>About Us</a></li>
              <li><a href="#" className={royalBlueHover}>Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-5">Get In Touch</h3>
            <p className="text-gray-400 text-sm leading-relaxed space-y-2">
              Email: info@yourcompany.com <br />
              Phone: +91 123 456 7890
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col">
            <h3 className="text-white font-semibold mb-5">Follow Us</h3>
            <div className="flex gap-8">
              <a href="#" className={royalBlueHover}><Twitter size={22} /></a>
              <a href="#" className={royalBlueHover}><Instagram size={22} /></a>
              <a href="#" className={royalBlueHover}><Linkedin size={22} /></a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-14 border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <span className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </span>

          <div className="flex gap-6 mt-3 md:mt-0">
            <a href="#" className={royalBlueHover}>Privacy Policy</a>
            <a href="#" className={royalBlueHover}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
