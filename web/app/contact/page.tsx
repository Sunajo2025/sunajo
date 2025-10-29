import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ContactHeroSection from '@/components/contact/ContactHeroSection'
import ContactCTASection from '@/components/capabilities/ContactCTASection'
import ContactSection from '@/components/ContactSection'

export default function ContactPage() {
  return (
    <>
      <Navbar />
       <ContactHeroSection/>
       <ContactSection/>
      <Footer />
    </>
  )
}

