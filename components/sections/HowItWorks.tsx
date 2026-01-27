'use client'

import { MessageSquare, Sparkles, Rocket, Check } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Share Your Requirements',
    description: 'Login to your dashboard and start a conversation with our AI assistant. Describe your business, target audience, and website goals. Our AI will ask intelligent questions to understand your needs perfectly.',
    features: [
      'Conversational AI that understands context',
      'Asks clarifying questions automatically',
      'Saves progress - continue anytime',
      'Supports uploading reference images',
      'Multi-language support',
    ],
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Review AI-Generated Designs',
    description: 'Based on your requirements, our AI creates 3-5 unique website designs in real-time. Each design is complete with pages, content, images, and functionality. Preview them all and select your favorite.',
    features: [
      '3-5 unique designs per session',
      'Complete with sample content',
      'Mobile and desktop previews',
      'Regenerate unlimited times',
      'Compare designs side-by-side',
    ],
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Perfect It & Go Live',
    description: 'Use our intuitive visual editor to customize your chosen design. Edit text, swap images, change colors, add pages, or modify layouts. See changes instantly. When ready, launch your website with one click.',
    features: [
      'Real-time visual editor',
      'No code required - all visual',
      'Unlimited revisions before launch',
      'Choose custom domain or subdomain',
      'Automatic SSL and hosting included',
    ],
    icon: Rocket,
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white">
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
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
            Create Your Website in Three Easy Steps
          </h2>
          <p className="text-lg sm:text-xl text-neutral-600">
            From idea to live website in under 15 minutes
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
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-md -mt-10 lg:mt-0">
                  <h3 className="text-2xl sm:text-3xl font-display font-semibold text-neutral-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{feature}</span>
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
          <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold text-lg rounded-xl shadow-primary hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Building Now
          </button>
          <p className="text-sm text-neutral-600 mt-4">
            No credit card required • Free 14-day trial
          </p>
        </motion.div>
      </div>
    </section>
  )
}
