'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [templatesOpen, setTemplatesOpen] = useState(false)

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Features', hasDropdown: true, href: '#features' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Team', href: '#team' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  const featuresItems = [
    { icon: '✨', title: 'AI Website Builder', desc: 'Conversational AI that understands your needs' },
    { icon: '📐', title: 'Smart Templates', desc: 'Industry-specific templates that adapt' },
    { icon: '🚀', title: 'Instant Deployment', desc: 'Go live in one click with automatic SSL' },
    { icon: '✏️', title: 'Visual Editor', desc: 'Drag and drop interface with real-time preview' },
    { icon: '🔍', title: 'SEO Optimization', desc: 'Built-in SEO tools and best practices' },
    { icon: '📊', title: 'Analytics Dashboard', desc: 'Track visitors and performance metrics' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Websevix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && item.name === 'Features' && setFeaturesOpen(true)}
                onMouseLeave={() => item.hasDropdown && item.name === 'Features' && setFeaturesOpen(false)}
              >
                <Link
                  href={item.href || '#'}
                  className="text-sm font-medium text-dark-text-secondary hover:text-secondary-400 transition-colors duration-200 flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Features Mega Menu */}
                {item.name === 'Features' && featuresOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-dark-bg-tertiary rounded-lg shadow-2xl border border-dark-border p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {featuresItems.map((feature) => (
                        <Link
                          key={feature.title}
                          href="#"
                          className="p-4 rounded-lg hover:bg-dark-bg-secondary transition-colors border border-transparent hover:border-primary-500/30"
                        >
                          <div className="text-2xl mb-2">{feature.icon}</div>
                          <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                          <p className="text-sm text-dark-text-secondary line-clamp-2">{feature.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact"
              className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg hover:shadow-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-dark-text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-dark-bg-primary/95 backdrop-blur-md z-40">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href || '#'}
                className="block py-3 text-base font-medium text-dark-text-primary hover:text-secondary-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-dark-border space-y-3">
              <Link
                href="#contact"
                className="block py-3 text-center text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
