'use client'

import { Sparkles, Zap, Shield, Palette, Headphones, Globe, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Website Creation',
    description: 'Our expert team uses advanced AI tools to create professional, custom websites tailored to your business. We combine AI technology with human expertise to deliver websites that perfectly match your brand and requirements. No technical knowledge needed on your end.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery in Business Days',
    description: 'Traditional website development takes weeks or months. With Websevix, get your professional website delivered in just a few business days. Our AI-powered workflow ensures quality and speed, saving you time and money while delivering exceptional results.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Level Security',
    description: 'Every website comes with enterprise-level security features. Automatic SSL certificates, DDoS protection, regular security patches, encrypted data storage, and automatic backups ensure your website and data stay safe. Compliant with GDPR, SOC 2, and industry standards.',
  },
  {
    icon: Palette,
    title: 'Custom Design & Branding',
    description: 'We create unique designs that match your brand identity. Our team uses AI to generate design concepts, then customizes everything - colors, fonts, layouts, imagery - to perfectly represent your business. Complete design control with professional results.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support Team',
    description: 'Our dedicated support team is available to help you throughout the process. Get assistance with requirements, design feedback, revisions, and post-launch support. We respond within 24 hours and ensure your complete satisfaction with the final product.',
  },
  {
    icon: Globe,
    title: 'Global Performance & Hosting',
    description: 'Your website loads fast everywhere in the world. We use a global CDN with 200+ edge locations, automatic image optimization, and advanced caching. Complete hosting solution with 99.99% uptime SLA, automatic scaling, and real-time performance monitoring.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-dark-bg-primary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-secondary-400 font-semibold mb-4">
            Why Choose Websevix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Professional Websites Built with AI
          </h2>
          <p className="text-lg sm:text-xl text-dark-text-secondary leading-relaxed">
            Our expert team uses advanced AI technology to create custom websites tailored to your business. Get professional results in just a few business days.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-dark-bg-secondary border border-dark-border rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center mb-6 border border-primary-500/30">
                  <Icon className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-text-secondary leading-relaxed mb-4">
                  {feature.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-secondary-400 hover:text-secondary-300 group-hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
