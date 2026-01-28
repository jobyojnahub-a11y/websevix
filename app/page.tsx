import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import TrustBar from '@/components/sections/TrustBar'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import TemplateShowcase from '@/components/sections/TemplateShowcase'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import ContactForm from '@/components/sections/ContactForm'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg-primary">
      <Navigation />
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <TemplateShowcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </main>
  )
}
