'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react' 

export default function ScrollToTopButton() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const SCROLL_THRESHOLD = 300 

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    
    const progress = documentHeight > 0 
      ? Math.min((currentScrollY / documentHeight) * 100, 100) 
      : 0
      
    setScrollProgress(progress)
    setIsVisible(currentScrollY > SCROLL_THRESHOLD)
  }, [])

  useEffect(() => {
    handleScroll() 
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const radius = 26 
  const strokeWidth = 4 
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (scrollProgress / 100) * circumference

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed cursor-pointer bottom-12 right-12 z-50 w-16 h-16 
                     rounded-full flex items-center justify-center 
                     transition-shadow duration-300 focus:outline-none"
          
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 30 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <div className="relative w-full h-full">
            
            <svg
              className="absolute top-0 left-0 w-full h-full transform -rotate-90"
              viewBox="0 0 56 56"
            >
              <defs>
                <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" /> 
                  <stop offset="100%" stopColor="#ffffff" /> 
                </linearGradient>

                {/* Gradient for the ArrowUp icon */}
                <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a8a" /> 
                  <stop offset="100%" stopColor="#ffffff" /> 
                </linearGradient>
              </defs>

              <circle
                cx="28" 
                cy="28" 
                r={radius}
                stroke="rgba(255, 255, 255, 0.15)" 
                strokeWidth={strokeWidth}
                fill="none"
              />
              
              <circle
                cx="28"
                cy="28"
                r={radius}
                stroke="url(#gradientStroke)" 
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.3s ease' }}
              />
            </svg>

            <div 
              className="absolute inset-2 bg-black rounded-full 
                         flex items-center justify-center 
                         shadow-xl transition-all duration-300
                         hover:scale-[1.03] hover:shadow-2xl" 
            >
              <ArrowUp 
                size={24} 
                style={{ stroke: 'url(#arrowGradient)' }} 
                fill="none" 
              />
            </div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}