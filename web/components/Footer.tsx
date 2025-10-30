'use client';

import { useState } from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const royalBlueHover = 'hover:text-[#4169E1] transition-colors duration-300';

  return (
    <footer className="bg-black/95 text-gray-300 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
          
          {/* Logo & About */}
          <div className="flex -mt-3 flex-col space-y-4">
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
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="/services" className={royalBlueHover}>Our Services</a></li>
              <li><a href="/capabilities" className={royalBlueHover}>Our Capabilities</a></li>
              <li><a href="/products" className={royalBlueHover}>Our Products</a></li>
              <li><a href="/careers" className={royalBlueHover}>Careers</a></li>
              <li><a href="about" className={royalBlueHover}>About Us</a></li>
              <li><a href="/contact" className={royalBlueHover}>Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Get In Touch</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Email: info@sunajo.com <br />
              Phone: 7010437899
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Follow Us</h3>
            <div className="flex items-center gap-6">
              <a href="#" className={royalBlueHover}><Twitter size={22} /></a>
              <a href="#" className={royalBlueHover}><Instagram size={22} /></a>
              <a href="#" className={royalBlueHover}><Linkedin size={22} /></a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm gap-3">
          <span className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </span>

          <div className="flex gap-6">
            <a href="/privacy" className={royalBlueHover}>Privacy Policy</a>
            <a href="/terms" className={royalBlueHover}>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
