import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import TemplateShowcase from '@/components/sections/TemplateShowcase'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <TemplateShowcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
