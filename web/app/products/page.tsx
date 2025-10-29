import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProductsHeroSection from '@/components/products/ProductsHeroSection'
import ProductsIntroSection from '@/components/products/ProductsIntroSection'
import ProductEpicAuraSection from '@/components/products/ProductEpicAuraSection'
import ProductVelaimateSection from '@/components/products/ProductVelaimateSection'
import ProductKaramSection from '@/components/products/ProductKaramSection'


export default function CareersPage() {
  return (
    <>
      <Navbar />
      <ProductsHeroSection/>
      <ProductsIntroSection/>
      <ProductEpicAuraSection/>
      <ProductVelaimateSection/>
      <ProductKaramSection/>
      <Footer />
    </>
  )
}
