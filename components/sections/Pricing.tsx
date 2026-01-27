'use client'

import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    badge: 'Best for Beginners',
    description: 'Perfect for personal projects and small websites',
    monthlyPrice: 19,
    annualPrice: 15,
    features: [
      { text: '5 AI-generated websites', included: true },
      { text: '10 GB storage', included: true },
      { text: 'Custom subdomain (yoursite.websevix.com)', included: true },
      { text: 'SSL certificate included', included: true },
      { text: 'Mobile responsive designs', included: true },
      { text: 'Basic templates access', included: true },
      { text: 'Email support (24h response)', included: true },
      { text: '50 GB bandwidth/month', included: true },
      { text: 'Custom domain', included: false },
      { text: 'Advanced AI features', included: false },
      { text: 'E-commerce functionality', included: false },
    ],
  },
  {
    name: 'Professional',
    badge: 'Most Popular',
    description: 'For growing businesses and agencies',
    monthlyPrice: 49,
    annualPrice: 39,
    featured: true,
    features: [
      { text: '25 AI-generated websites', included: true },
      { text: '50 GB storage', included: true },
      { text: 'Custom domain included (1 year free)', included: true },
      { text: 'SSL certificate included', included: true },
      { text: 'Mobile responsive designs', included: true },
      { text: 'All premium templates', included: true },
      { text: 'Priority support (4h response)', included: true },
      { text: '500 GB bandwidth/month', included: true },
      { text: 'Advanced AI features (image generation, content writing)', included: true },
      { text: 'SEO optimization tools', included: true },
      { text: 'Analytics dashboard', included: true },
      { text: 'Custom code injection', included: true },
      { text: 'Remove Websevix branding', included: true },
      { text: 'White-label solution', included: false },
      { text: 'Dedicated account manager', included: false },
    ],
  },
  {
    name: 'Enterprise',
    badge: 'For Teams',
    description: 'Unlimited possibilities for large organizations',
    monthlyPrice: null,
    annualPrice: null,
    customPricing: true,
    features: [
      { text: 'Unlimited AI-generated websites', included: true },
      { text: '500 GB storage (expandable)', included: true },
      { text: 'Unlimited custom domains', included: true },
      { text: 'SSL certificates for all domains', included: true },
      { text: 'Mobile responsive designs', included: true },
      { text: 'All premium templates + custom designs', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Unlimited bandwidth', included: true },
      { text: 'Advanced AI features with API access', included: true },
      { text: 'White-label solution', included: true },
      { text: 'Custom branding', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Team collaboration tools (up to 50 users)', included: true },
      { text: 'Priority feature requests', included: true },
      { text: 'SLA guarantee (99.99% uptime)', included: true },
      { text: 'Advanced security features', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Training sessions included', included: true },
    ],
  },
]

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-primary-600 font-semibold mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-neutral-900 mb-4">
            Choose the Plan That Fits Your Needs
          </h2>
          <p className="text-lg text-neutral-600">
            All plans include core features. Scale as you grow. No hidden fees.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-neutral-900' : 'text-neutral-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="relative w-14 h-8 bg-neutral-200 rounded-full transition-colors"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                billingCycle === 'annual' ? 'translate-x-6' : ''
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-neutral-900' : 'text-neutral-500'}`}>
            Annual
            <span className="ml-2 px-2 py-0.5 bg-success-100 text-success-600 rounded text-xs font-semibold">
              Save 20%
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
              className={`relative bg-white border-2 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                plan.featured
                  ? 'border-primary-600 shadow-primary scale-105 z-10'
                  : 'border-neutral-200'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-semibold rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                {!plan.featured && (
                  <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full mb-4">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-3xl font-display font-bold text-neutral-900 mb-2">{plan.name}</h3>
                <p className="text-neutral-600">{plan.description}</p>
              </div>

              <div className="mb-6">
                {plan.customPricing ? (
                  <div>
                    <div className="text-4xl font-black text-neutral-900 mb-2">Custom Pricing</div>
                    <div className="text-sm text-neutral-600">Starting at $199/month</div>
                  </div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-medium">$</span>
                    <span className="text-5xl font-black text-neutral-900">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                    </span>
                    <span className="text-lg text-neutral-600">/month</span>
                  </div>
                )}
                {!plan.customPricing && billingCycle === 'annual' && (
                  <div className="mt-2 inline-block px-3 py-1 bg-success-100 text-success-600 rounded text-xs font-semibold">
                    ${plan.annualPrice}/month when billed annually
                  </div>
                )}
              </div>

              <Link
                href="#signup"
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 mb-6 ${
                  plan.featured
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg hover:scale-105'
                    : plan.customPricing
                    ? 'bg-accent-600 text-white hover:bg-accent-700'
                    : 'bg-primary-600 text-white hover:bg-primary-700'
                }`}
              >
                {plan.customPricing ? 'Contact Sales' : 'Get Started'}
              </Link>

              <div className="border-t border-neutral-200 pt-6">
                <h4 className="font-semibold text-neutral-900 mb-4">What's included:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-neutral-700' : 'text-neutral-400'}`}>
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
          <p className="text-sm text-neutral-600 mb-2">
            <Link href="#faq" className="text-primary-600 hover:underline">
              Have questions? View our pricing FAQ
            </Link>
          </p>
          <p className="text-sm text-neutral-500">
            30-day money-back guarantee • All prices in USD. Local taxes may apply.
          </p>
        </div>
      </div>
    </section>
  )
}
