'use client';
import CalendlyBookingSection from '@/components/calendly/CalendlyBookingSection';
import CalendlyHeroSection from '@/components/calendly/calendlyHeroSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';


export default function CalendlyPage() {
  return (
   <>
   <Navbar/>
   <CalendlyHeroSection/>
    <CalendlyBookingSection/>
    <Footer/>
   </>
  );
}
