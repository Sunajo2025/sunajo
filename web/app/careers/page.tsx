import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CareersIntroSection from '@/components/careers/CareersHeroSection'
import CareersIntroductionSection from '@/components/careers/CareersIntroductionSection'
import CareersContentSection from '@/components/careers/CareersContentSection'
import OpenRolesSection from '@/components/careers/OpenRolesSection'
import NoOpeningsSection from '@/components/careers/NoOpeningsSection'
import WhyWorkWithUsSection from '@/components/careers/WhyWorkWithUsSection'

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <CareersIntroSection/>
      <CareersIntroductionSection/>
      <CareersContentSection/>
      <WhyWorkWithUsSection/>
      <NoOpeningsSection/>
      {/* <OpenRolesSection/> */}
      <Footer />
    </>
  )
}
