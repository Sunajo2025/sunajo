import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import AboutHeroSection from '@/components/about/AboutHeroSection'
import AboutIntroductionSection from '@/components/about/AboutIntroductionSection'
import AboutContentSection from '@/components/about/AboutContentSection'
import MissionSection from '@/components/about/MissionSection'
import LeadershipTeamSection from '@/components/about/LeadershipTeamSection'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHeroSection/>
      <AboutIntroductionSection/>
       <MissionSection/>
      <AboutContentSection/>
      <LeadershipTeamSection/>     
      <Footer />
    </>
  )
}
