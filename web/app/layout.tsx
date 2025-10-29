import ScrollToTopButton from '@/components/ScrollToTopButton'
import PageTransitionLoader from '@/components/PageTransitionLoader'
import './globals.css'
import { Raleway, Poppins } from 'next/font/google'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

export const metadata = {
  title: 'Sunajo',
  description: 'Sunajo - Innovative IT Solutions providing SaaS products, development services, and digital capabilities worldwide.',
   icons: {
    icon: '/sunajo_icon.png', 
  },
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} ${poppins.className} bg-[#0a1420] text-white antialiased`}
      >
        <PageTransitionLoader />
        <main>{children}</main>
        <ScrollToTopButton/>
      </body>
    </html>
  )
}
