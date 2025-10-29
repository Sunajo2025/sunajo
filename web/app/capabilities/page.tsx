import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CapabilitiesHeroSection from '@/components/capabilities/CapabilitiesHeroSection'
import CapabilitiesIntroSection from '@/components/capabilities/CapabilitiesIntroSection'
import CapabilitiesDetailsSection from '@/components/capabilities/CapabilitiesDetailsSection'
import InnovationApproachSection from '@/components/capabilities/InnovationApproachSection'
import ContactCTASection from '@/components/capabilities/ContactCTASection'

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />
      <CapabilitiesHeroSection/>
      <CapabilitiesIntroSection/>
      <CapabilitiesDetailsSection/>
      <InnovationApproachSection/>
      <ContactCTASection/>
      <Footer />
    </>
  )
}

