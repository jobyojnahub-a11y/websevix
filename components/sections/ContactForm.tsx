'use client'

import { useState } from 'react'
import { Send, Mail, Phone, MessageSquare, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', businessType: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="section-padding bg-dark-bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-secondary-400 font-semibold mb-4">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Let&apos;s Build Your Dream Website
          </h2>
          <p className="text-lg text-dark-text-secondary leading-relaxed">
            Share your requirements with us. Our team will contact you within 24 hours and deliver a professional, AI-powered website tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-dark-bg-tertiary rounded-2xl p-8 md:p-12 border border-dark-border">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-success-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Thank You!</h3>
                <p className="text-dark-text-secondary">
                  We&apos;ve received your request. Our team will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-text-secondary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-bg-secondary border border-dark-border rounded-lg text-white placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-text-secondary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-bg-secondary border border-dark-border rounded-lg text-white placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-dark-text-secondary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-bg-secondary border border-dark-border rounded-lg text-white placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all"
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-dark-text-secondary mb-2">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3 bg-dark-bg-secondary border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all"
                    >
                      <option value="">Select business type</option>
                      <option value="business">Business/Corporate</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="portfolio">Portfolio</option>
                      <option value="blog">Blog</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-text-secondary mb-2">
                    Project Requirements *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-dark-bg-secondary border border-dark-border rounded-lg text-white placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-secondary-500 transition-all resize-none"
                    placeholder="Tell us about your website requirements, target audience, design preferences, and any specific features you need..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold text-lg rounded-lg hover:shadow-secondary hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Request
                    </>
                  )}
                </button>

                <p className="text-sm text-dark-text-muted text-center">
                  By submitting this form, you agree to our terms of service. We&apos;ll contact you within 24 hours.
                </p>
              </div>
            )}
          </form>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-center p-6 bg-dark-bg-tertiary rounded-xl border border-dark-border"
            >
              <div className="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Email Us</h4>
              <p className="text-sm text-dark-text-secondary">contact@websevix.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-center p-6 bg-dark-bg-tertiary rounded-xl border border-dark-border"
            >
              <div className="w-12 h-12 bg-secondary-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-secondary-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Call Us</h4>
              <p className="text-sm text-dark-text-secondary">+1 (555) 123-4567</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center p-6 bg-dark-bg-tertiary rounded-xl border border-dark-border"
            >
              <div className="w-12 h-12 bg-accent-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-accent-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Response Time</h4>
              <p className="text-sm text-dark-text-secondary">Within 24 hours</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
