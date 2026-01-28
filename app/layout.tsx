import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Websevix - AI-Powered Website Builder | Create Websites in Minutes',
  description: 'Build professional websites using AI technology. No coding required. Get started in minutes with our intelligent website builder.',
  keywords: ['AI website builder', 'website builder', 'no-code', 'web design', 'AI tools'],
  authors: [{ name: 'Websevix' }],
  openGraph: {
    title: 'Websevix - AI-Powered Website Builder',
    description: 'Build professional websites using AI technology. No coding required.',
    type: 'website',
    url: 'https://websevix.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Websevix - AI-Powered Website Builder',
    description: 'Build professional websites using AI technology. No coding required.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} dark`}>
      <body className="dark:bg-dark-bg-primary dark:text-dark-text-primary overflow-x-hidden">{children}</body>
    </html>
  )
}
