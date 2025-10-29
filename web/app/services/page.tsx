import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ServicesHeroSection from '@/components/services/ServicesHeroSection'
import ServiceIntroSection from '@/components/services/ServiceIntroSection'
import WebDevelopmentSection from '@/components/services/WebDevelopmentSection'
import MobileAppDevelopmentSection from '@/components/services/MobileAppDevelopmentSection'
import SocialMediaManagementSection from '@/components/services/SocialMediaManagementSection'
import DigitalMarketingSection from '@/components/services/DigitalMarketingSection'
import AdvertisementCreationSection from '@/components/services/AdvertisementCreationSection'
import AiAutomationSection from '@/components/services/AiAutomationSection'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesHeroSection/>
      <ServiceIntroSection/>
      <AiAutomationSection/>
      <WebDevelopmentSection/>
      <MobileAppDevelopmentSection/>
      <SocialMediaManagementSection/>
      <DigitalMarketingSection/>
      <AdvertisementCreationSection/>
      
      <Footer />
    </>
  )
}
