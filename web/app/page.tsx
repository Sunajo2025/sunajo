import ContactSection from "@/components/ContactSection"
import HomeHeroSection from "../components/home/HomeHeroSection"
import Navbar from '../components/NavBar'
import Footer from "@/components/Footer"


export default function HomePage() {
  return (
    <>
     <Navbar/>
      <HomeHeroSection />
      <ContactSection/>
      <Footer/>
    </>
  )
}
