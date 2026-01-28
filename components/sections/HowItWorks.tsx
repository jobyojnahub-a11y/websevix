'use client'

import { MessageSquare, Sparkles, Rocket, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    title: 'Tell Us Your Needs',
    description: 'Share your business details and website requirements. We&apos;ll discuss your goals and create a plan that fits your needs perfectly.',
    features: [
      'Quick consultation call',
      'Understand your business',
      'Define project scope',
      'Set timeline and budget',
    ],
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'We Build with AI',
    description: 'Our team creates your website using AI technology. Professional design, quality content, and all the features you need for success.',
    features: [
      'AI-powered design',
      'Custom content creation',
      'Mobile-friendly layout',
      'Fast loading speed',
    ],
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Launch & Support',
    description: 'Review your website, request changes if needed, then we launch it live. Includes hosting, security, and ongoing support.',
    features: [
      'Quick delivery (3-5 days)',
      'Free revisions',
      'Domain & hosting setup',
      'Ongoing support',
    ],
    icon: Rocket,
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-dark-bg-secondary">
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
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Get Your Website in 3 Easy Steps
          </h2>
          <p className="text-lg sm:text-xl text-dark-text-secondary">
            From idea to live website in just a few days
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Step Number & Icon */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl border-4 border-white">
                    {step.number}
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-dark-bg-tertiary rounded-2xl p-8 shadow-md -mt-10 lg:mt-0 border border-dark-border">
                  <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-dark-text-secondary mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success-400 flex-shrink-0 mt-0.5" />
                        <span className="text-dark-text-primary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-secondary hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </Link>
          <p className="text-sm text-dark-text-secondary mt-4">
            Contact us now • Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
