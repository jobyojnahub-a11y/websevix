'use client'

import { motion } from 'framer-motion'
import { ExternalLink, TrendingUp, Users, Clock } from 'lucide-react'

const caseStudies = [
  {
    title: 'TechStart Solutions',
    category: 'SaaS Platform',
    description: 'Complete digital transformation for a B2B SaaS startup, resulting in 300% increase in lead generation.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    results: [
      { icon: TrendingUp, metric: '300%', label: 'Lead Increase' },
      { icon: Users, metric: '150%', label: 'User Engagement' },
      { icon: Clock, metric: '5 Days', label: 'Delivery Time' }
    ],
    tags: ['SaaS', 'B2B', 'Lead Generation'],
    link: '#'
  },
  {
    title: 'GreenEarth Organics',
    category: 'E-commerce',
    description: 'Modern e-commerce platform for organic products with integrated inventory management and payment processing.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop',
    results: [
      { icon: TrendingUp, metric: '250%', label: 'Sales Growth' },
      { icon: Users, metric: '400%', label: 'Online Orders' },
      { icon: Clock, metric: '4 Days', label: 'Launch Time' }
    ],
    tags: ['E-commerce', 'Organic', 'Retail'],
    link: '#'
  },
  {
    title: 'MedCare Clinic',
    category: 'Healthcare',
    description: 'Professional healthcare website with appointment booking, patient portal, and telemedicine integration.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
    results: [
      { icon: TrendingUp, metric: '180%', label: 'Appointments' },
      { icon: Users, metric: '90%', label: 'Patient Satisfaction' },
      { icon: Clock, metric: '3 Days', label: 'Development' }
    ],
    tags: ['Healthcare', 'Booking', 'Portal'],
    link: '#'
  }
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-dark-bg-primary">
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
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-lg text-dark-text-secondary leading-relaxed">
            See how we&apos;ve helped businesses across industries achieve their digital goals with our AI-powered solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl"></div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover rounded-2xl border border-dark-border group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-dark-bg-tertiary/90 text-secondary-400 text-sm font-medium rounded-full border border-secondary-500/30">
                      {study.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  {study.title}
                </h3>
                <p className="text-lg text-dark-text-secondary leading-relaxed mb-8">
                  {study.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {study.results.map((result, idx) => {
                    const Icon = result.icon
                    return (
                      <div key={idx} className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 border border-primary-500/30">
                          <Icon className="w-6 h-6 text-primary-400" />
                        </div>
                        <div className="text-2xl font-bold text-white mb-1">
                          {result.metric}
                        </div>
                        <div className="text-sm text-dark-text-secondary">
                          {result.label}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-bg-secondary text-dark-text-primary text-sm rounded-full border border-dark-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={study.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-secondary hover:scale-105 transition-all duration-300"
                >
                  View Case Study
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-dark-bg-secondary rounded-2xl p-8 border border-dark-border">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-dark-text-secondary mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with a professional, results-driven website.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg rounded-xl hover:shadow-secondary hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}