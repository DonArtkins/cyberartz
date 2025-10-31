import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Font configuration
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// Metadata configuration for SEO
export const metadata: Metadata = {
  title: {
    default: 'Opiyo Don | Cybersecurity Portfolio',
    template: '%s | Opiyo Don',
  },
  description:
    'Cybersecurity enthusiast and full-stack developer specializing in web security, penetration testing, and secure application development.',
  keywords: [
    'cybersecurity',
    'penetration testing',
    'web security',
    'ethical hacking',
    'CTF',
    'security researcher',
    'full-stack developer',
    'Opiyo Don',
  ],
  authors: [{ name: 'Opiyo Don', url: 'https://opiyodon.vercel.app' }],
  creator: 'Opiyo Don',
  publisher: 'Opiyo Don',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cybersec-opiyodon.vercel.app',
    title: 'Opiyo Don | Cybersecurity Portfolio',
    description:
      'Cybersecurity enthusiast and full-stack developer specializing in web security and secure application development.',
    siteName: 'Opiyo Don Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opiyo Don | Cybersecurity Portfolio',
    description:
      'Cybersecurity enthusiast and full-stack developer specializing in web security.',
    creator: '@opiyodon',
  },
  verification: {
    google: 'verification_token',
  },
  alternates: {
    canonical: 'https://cybersec-opiyodon.vercel.app',
  },
}

/**
 * Root layout component
 * Wraps all pages with consistent structure
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        {/* Navigation header */}
        <Header />

        {/* Main content area */}
        <main className="grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Background grid pattern */}
        <div className="fixed inset-0 -z-10 grid-pattern opacity-30 pointer-events-none" />
      </body>
    </html>
  )
}