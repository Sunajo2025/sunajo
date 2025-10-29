import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import TermsHeroSection from '@/components/termsPrivacy/TermsHeroSection'
import TermsAndConditionsSection from '@/components/termsPrivacy/TermsAndConditionsSection'


export default function CareersPage() {
  return (
    <>
      <Navbar />
      <TermsHeroSection/>
      <TermsAndConditionsSection/>
      <Footer />
    </>
  )
}
