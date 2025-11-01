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
  title:
    'Sunajo | Innovating Your Digital Future with Smart Solutions',
  description:
    'Sunajo provides businesses with state-of-the-art digital marketing and IT solutions. We integrate creativity, design, and strategy to produce quantifiable digital success in everything from web and app development to AI automation and brand expansion.',
  keywords: [

  // Core location-based IT keywords
  'IT company Karur',
  'IT company Erode',
  'IT company Coimbatore',
  'IT company Trichy',
  'IT company Dindigul',
  'IT company Namakkal',
  'Top IT company in Karur',
  'Best IT company near Karur',
  'Leading IT company Tamil Nadu',
  'Top-rated IT company Karur',

  // Digital marketing keywords
  'Digital marketing Karur',
  'Digital marketing Erode',
  'Digital marketing Coimbatore',
  'Digital marketing Trichy',
  'Digital marketing Dindigul',
  'Digital marketing Namakkal',
  'Best digital marketing company Karur',
  'Top social media agency Karur',
  'Affordable digital marketing Karur',
  'Professional digital marketing team Tamil Nadu',

  // Website and app development keywords
  'Website development Karur',
  'Website development Erode',
  'Website development Coimbatore',
  'Website development Trichy',
  'Website development Dindigul',
  'Website development Namakkal',
  'Web design company Karur',
  'Affordable website design Karur',
  'Mobile app development Karur',
  'Custom software development Karur',
  'Best website developers Tamil Nadu',

  // Service-specific and intent-driven keywords
  'Top IT company Tamil Nadu',
  'Best IT solutions company',
  'Trusted IT agency Karur',
  'Good IT team Karur',
  'Experienced developers Karur',
  'Professional digital marketing team',
  'Top software company in Karur',
  'Affordable website design Coimbatore',
  'Best IT company for startups',
  'Reliable IT services Tamil Nadu',
  'Creative web agency Karur',
  'Top digital marketing experts',
  'Good company for IT projects',
  'Best tech company near me',
  'Leading IT solutions provider in Karur',
  'Top-rated AI automation company',
  'Innovative IT team Karur',
  'Professional website developers Tamil Nadu',
  'Trusted branding and advertisement agency',
  'AI automation services Karur',
  'Cloud solutions provider Karur',

  // Brand-focused keywords
  'Sunajo Technologies Karur',
  'Sunajo Technologies Tamil Nadu',
  'Sunajo IT company Karur',
  'Sunajo digital marketing agency',
  'Sunajo web development Karur',
  'Sunajo Technologies reviews',
  'Sunajo software solutions Karur',

  // Local + intent mix for ranking boost
  'Best IT company in Karur district',
  'Top IT agency near me Karur',
  'Best web development company in Karur',
  'Affordable digital marketing near me',
  'Top technology company in Karur',
  'Local IT experts in Karur',
  'Professional IT services Karur',
  'Full-stack developers Karur',
  'Creative design agency Karur',
  'App development company near Karur',
],

  authors: [{ name: 'Sunajo Technologies', url: 'https://sunajo.com' }],
  creator: 'Sunajo',
  publisher: 'Sunajo',
  openGraph: {
    title:
      'Sunajo | Trusted & Top IT Solutions Company in Karur, Erode, Coimbatore, Trichy, Dindigul & Namakkal',
    description:
      'Work with one of the top IT and digital marketing teams in Tamil Nadu. Sunajo delivers innovative solutions with a passionate, skilled, and customer-focused team.',
    url: 'https://sunajo.com',
    siteName: 'Sunajo',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title:
      'Sunajo | Top IT Solutions & Marketing Experts in Karur, Erode, Coimbatore, Trichy, Dindigul & Namakkal',
    description:
      'Trusted by businesses for quality, innovation, and a good team. Sunajo provides web, AI, and marketing solutions across Tamil Nadu.',
    creator: '@sunajo_official',
  },
  metadataBase: new URL('https://sunajo.com'),
  alternates: {
    canonical: 'https://sunajo.com',
  },
  icons: {
    icon: '/sunajo_icon.png', 
    shortcut: '/sunajo_icon.png',
    apple: '/sunajo_icon.png',
  },
  category: 'technology',
};


type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sunajo_icon.png" sizes="any" />
        <link rel="icon" type="image/png" href="/sunajo_icon.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/sunajo_icon.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/sunajo_icon.png" />
      </head>
      <body
        className={`${raleway.className} ${poppins.className} bg-[#0a1420] text-white antialiased`}
        suppressHydrationWarning
      >
        <PageTransitionLoader />
        <main>{children}</main>
        <ScrollToTopButton/>
      </body>
    </html>
  )
}
