'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Globe, Award, Clock, Shield } from 'lucide-react'

const stats = [
  {
    icon: TrendingUp,
    number: '500+',
    label: 'Projects Completed',
    description: 'Successfully delivered websites across industries'
  },
  {
    icon: Users,
    number: '200+',
    label: 'Happy Clients',
    description: 'Businesses trust us with their digital presence'
  },
  {
    icon: Globe,
    number: '25+',
    label: 'Countries Served',
    description: 'Global reach with local expertise'
  },
  {
    icon: Award,
    number: '98%',
    label: 'Success Rate',
    description: 'Projects delivered on time and within budget'
  },
  {
    icon: Clock,
    number: '3-5',
    label: 'Days Delivery',
    description: 'Average project completion time'
  },
  {
    icon: Shield,
    number: '99.9%',
    label: 'Uptime SLA',
    description: 'Enterprise-grade reliability guarantee'
  }
]

export default function CompanyStats() {
  return (
    <section className="section-padding bg-dark-bg-secondary">
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
            Company Performance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-dark-text-secondary leading-relaxed">
            Since our founding, we&apos;ve been committed to delivering exceptional results. Here&apos;s what we&apos;ve achieved together with our clients.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary-500/30 group-hover:border-primary-400/50 transition-all duration-300">
                  <Icon className="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors" />
                </div>
                <div className="text-4xl sm:text-5xl font-display font-black text-white mb-2 group-hover:text-secondary-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-dark-text-primary mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-dark-text-secondary leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-dark-bg-tertiary rounded-2xl p-8 border border-dark-border">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-dark-text-secondary mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss your project and see how we can help transform your business with a professional website.
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