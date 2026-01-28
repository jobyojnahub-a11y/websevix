import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import CompanyStats from '@/components/sections/CompanyStats'
import About from '@/components/sections/About'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import CaseStudies from '@/components/sections/CaseStudies'
import Team from '@/components/sections/Team'
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
      <CompanyStats />
      <About />
      <Features />
      <HowItWorks />
      <CaseStudies />
      <Team />
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
