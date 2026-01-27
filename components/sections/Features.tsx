'use client'

import { Sparkles, Zap, Shield, Palette, Headphones, Globe, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Sparkles,
    title: 'Intelligent AI Builder',
    description: 'Our advanced AI understands your requirements through natural conversation and generates professional websites automatically. Simply describe what you need - business type, style preferences, features - and watch as our AI creates complete pages, layouts, and content tailored specifically for your business. No coding or design skills required.',
  },
  {
    icon: Zap,
    title: 'Launch in Minutes, Not Weeks',
    description: 'Traditional website development takes weeks or months. With Websevix, go from idea to live website in under 15 minutes. Our AI handles everything - design, content generation, responsive layouts, and deployment. Save thousands of dollars and countless hours while still getting a professional, custom website.',
  },
  {
    icon: Shield,
    title: 'Built-In Security & Protection',
    description: 'Every website comes with enterprise-level security features. Automatic SSL certificates, DDoS protection, regular security patches, encrypted data storage, and automatic backups ensure your website and data stay safe. Compliant with GDPR, SOC 2, and industry standards out of the box.',
  },
  {
    icon: Palette,
    title: 'Complete Design Control',
    description: 'Start with AI-generated designs, then customize everything to match your brand. Change colors, fonts, layouts, add custom code, integrate third-party tools, and modify any element. Our visual editor provides real-time preview while you edit. Export clean code or use our hosting - complete flexibility.',
  },
  {
    icon: Headphones,
    title: 'Always-Available Support Team',
    description: 'Our dedicated support team is available 24/7 via chat, email, and phone. Get help with technical issues, design guidance, custom development, SEO optimization, and more. Average response time under 2 minutes for chat, with escalation to senior engineers for complex issues. Your success is our priority.',
  },
  {
    icon: Globe,
    title: 'Worldwide Speed & Reliability',
    description: 'Your website loads fast everywhere in the world. We use a global CDN with 200+ edge locations, automatic image optimization, lazy loading, and advanced caching. 99.99% uptime SLA, automatic scaling during traffic spikes, and real-time performance monitoring ensure your site is always available and fast.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-primary-600 font-semibold mb-4">
            Why Choose Websevix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
            Everything You Need to Build Amazing Websites
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
            Powered by advanced AI technology, our platform provides all the tools you need to create, launch, and grow your online presence.
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
                className="group bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-2 hover:border-primary-300 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-display font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 group-hover:gap-3 transition-all"
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
