'use client'

import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    badge: 'Best for Small Business',
    description: 'Perfect for personal projects and small businesses',
    monthlyPrice: 199,
    annualPrice: 179,
    features: [
      { text: '1 Custom AI-powered website', included: true },
      { text: 'Mobile responsive design', included: true },
      { text: 'Custom domain setup', included: true },
      { text: 'SSL certificate included', included: true },
      { text: 'Basic SEO optimization', included: true },
      { text: '2 rounds of revisions', included: true },
      { text: 'Email support', included: true },
      { text: 'Delivery in 3-5 business days', included: true },
      { text: 'E-commerce functionality', included: false },
      { text: 'Advanced features', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'Professional',
    badge: 'Most Popular',
    description: 'For growing businesses and agencies',
    monthlyPrice: 499,
    annualPrice: 449,
    featured: true,
    features: [
      { text: '1 Custom AI-powered website', included: true },
      { text: 'Advanced design & branding', included: true },
      { text: 'Custom domain setup', included: true },
      { text: 'SSL certificate included', included: true },
      { text: 'Full SEO optimization', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: 'Priority support (24h response)', included: true },
      { text: 'Delivery in 2-3 business days', included: true },
      { text: 'E-commerce functionality', included: true },
      { text: 'Advanced AI features', included: true },
      { text: 'Analytics setup', included: true },
      { text: 'Content management system', included: true },
      { text: 'Social media integration', included: true },
      { text: 'Dedicated project manager', included: false },
    ],
  },
  {
    name: 'Enterprise',
    badge: 'For Large Organizations',
    description: 'Custom solutions for enterprise needs',
    monthlyPrice: null,
    annualPrice: null,
    customPricing: true,
    features: [
      { text: 'Multiple custom websites', included: true },
      { text: 'Enterprise-grade design', included: true },
      { text: 'Multiple custom domains', included: true },
      { text: 'SSL certificates for all domains', included: true },
      { text: 'Advanced SEO & marketing', included: true },
      { text: 'Unlimited revisions', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Fast-track delivery (1-2 days)', included: true },
      { text: 'E-commerce & payment integration', included: true },
      { text: 'Custom AI features', included: true },
      { text: 'White-label solution', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Team collaboration tools', included: true },
      { text: 'Priority feature requests', included: true },
      { text: 'SLA guarantee (99.99% uptime)', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Training sessions included', included: true },
    ],
  },
]

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section id="pricing" className="section-padding bg-dark-bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-secondary-400 font-semibold mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Choose the Plan That Fits Your Needs
          </h2>
          <p className="text-lg text-dark-text-secondary">
            Professional websites delivered in business days. All plans include hosting, SSL, and support.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-dark-text-muted'}`}>
            One-Time
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="relative w-14 h-8 bg-dark-bg-tertiary rounded-full transition-colors border border-dark-border"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-primary-500 rounded-full shadow-md transition-transform ${
                billingCycle === 'annual' ? 'translate-x-6' : ''
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-white' : 'text-dark-text-muted'}`}>
            Annual
            <span className="ml-2 px-2 py-0.5 bg-success-500/20 text-success-400 rounded text-xs font-semibold border border-success-500/30">
              Save 10%
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-dark-bg-tertiary border-2 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                plan.featured
                  ? 'border-primary-500 shadow-secondary scale-105 z-10'
                  : 'border-dark-border'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-semibold rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                {!plan.featured && (
                  <span className="inline-block px-3 py-1 bg-dark-bg-secondary text-dark-text-secondary text-xs font-medium rounded-full mb-4 border border-dark-border">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-3xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-dark-text-secondary">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.customPricing ? (
                  <div>
                    <div className="text-4xl font-black text-white mb-2">Custom Pricing</div>
                    <div className="text-sm text-dark-text-secondary">Contact us for a quote</div>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-medium text-dark-text-secondary">$</span>
                    <span className="text-5xl font-black text-white">
                      {billingCycle === 'monthly' ? (plan.monthlyPrice ?? 0) : (plan.annualPrice ?? 0)}
                    </span>
                    <span className="text-lg text-dark-text-secondary">one-time</span>
                  </div>
                )}
                {!plan.customPricing && billingCycle === 'annual' && plan.monthlyPrice !== null && plan.annualPrice !== null && (
                  <div className="mt-2 inline-block px-3 py-1 bg-success-500/20 text-success-400 rounded text-xs font-semibold border border-success-500/30">
                    Save ${plan.monthlyPrice - plan.annualPrice} with annual payment
                  </div>
                )}
              </div>

              <Link
                href="#contact"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 mb-6 ${
                  plan.featured
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-secondary hover:scale-105'
                    : plan.customPricing
                    ? 'bg-accent-500 text-white hover:bg-accent-600'
                    : 'bg-primary-500 text-white hover:bg-primary-600'
                }`}
              >
                {plan.customPricing ? 'Contact Sales' : 'Get Started'}
              </Link>

              <div className="border-t border-dark-border pt-6">
                <h4 className="font-semibold text-white mb-4">What&apos;s included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-success-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-dark-text-muted flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-dark-text-primary' : 'text-dark-text-muted'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-sm text-dark-text-secondary mb-2">
            <Link href="#faq" className="text-secondary-400 hover:text-secondary-300 hover:underline">
              Have questions? View our pricing FAQ
            </Link>
          </p>
          <p className="text-sm text-dark-text-muted">
            Satisfaction guaranteed • All prices in USD. Local taxes may apply.
          </p>
        </div>
      </div>
    </section>
  )
}
