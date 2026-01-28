'use client'

import { Sparkles, Zap, Shield, Palette, Headphones, Globe, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Design',
    description: 'Our team uses advanced AI tools to create beautiful, professional websites. Get custom designs that match your brand and business needs.',
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Get your website ready in just 3-5 business days. No more waiting weeks or months for your online presence.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Every website includes SSL certificates, security protection, and automatic backups. Your site stays safe and secure.',
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description: 'Unique designs tailored to your business. We create websites that perfectly represent your brand and vision.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Get help whenever you need it. Our support team is always ready to assist with any questions or updates.',
  },
  {
    icon: Globe,
    title: 'Fast & Global',
    description: 'Your website loads quickly worldwide with our global hosting network. 99.9% uptime guaranteed.',
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
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Everything You Need for Success
          </h2>
          <p className="text-lg sm:text-xl text-dark-text-secondary leading-relaxed">
            Professional websites that help your business grow. Fast, secure, and designed to convert visitors into customers.
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
