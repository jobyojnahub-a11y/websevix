'use client'

import { Send, Twitter, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Templates', href: '#templates' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'API Documentation', href: '#api' },
    { name: 'Changelog', href: '#changelog' },
    { name: 'Roadmap', href: '#roadmap' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Press Kit', href: '#press' },
    { name: 'Partners', href: '#partners' },
    { name: 'Affiliate Program', href: '#affiliates' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Help Center', href: '#help' },
    { name: 'Video Tutorials', href: '#tutorials' },
    { name: 'Community', href: '#community' },
    { name: 'Webinars', href: '#webinars' },
    { name: 'Guides', href: '#guides' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'System Status', href: '#status' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Cookie Policy', href: '#cookies' },
    { name: 'Security', href: '#security' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-bg-primary text-dark-text-secondary">
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                Websevix
              </span>
            </Link>
            <p className="text-sm text-dark-text-muted leading-relaxed mb-6 max-w-md">
              AI-powered website builder trusted by thousands of businesses worldwide. Create, launch, and grow your online presence with ease.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-dark-bg-secondary flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-text-muted hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-text-muted hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-text-muted hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm text-dark-text-muted mb-4">Get the latest updates and offers</p>
            <form className="flex gap-2 mb-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-dark-bg-secondary border border-dark-border rounded-lg text-white placeholder-dark-text-muted focus:outline-none focus:ring-2 focus:ring-primary-400"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>

            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-text-muted hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-dark-text-muted">
            © 2025 Websevix. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-dark-text-muted">GDPR Compliant</span>
            <span className="text-xs text-dark-text-muted">SOC 2 Certified</span>
            <span className="text-xs text-dark-text-muted">SSL Secure</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
