'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [templatesOpen, setTemplatesOpen] = useState(false)

  const navItems = [
    { name: 'Features', hasDropdown: true, href: '#features' },
    { name: 'Templates', hasDropdown: true, href: '#templates' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
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
                  className="text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors duration-200 flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Features Mega Menu */}
                {item.name === 'Features' && featuresOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white rounded-lg shadow-2xl border border-neutral-200 p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {featuresItems.map((feature) => (
                        <Link
                          key={feature.title}
                          href="#"
                          className="p-4 rounded-lg hover:bg-neutral-50 transition-colors"
                        >
                          <div className="text-2xl mb-2">{feature.icon}</div>
                          <h4 className="font-semibold text-neutral-900 mb-1">{feature.title}</h4>
                          <p className="text-sm text-neutral-600 line-clamp-2">{feature.desc}</p>
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
              href="#login"
              className="px-5 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-md transition-colors"
            >
              Login
            </Link>
            <Link
              href="#signup"
              className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-accent-600 to-accent-700 rounded-lg hover:shadow-accent hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-neutral-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-md z-40">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href || '#'}
                className="block py-3 text-base font-medium text-neutral-700 hover:text-primary-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-neutral-200 space-y-3">
              <Link
                href="#login"
                className="block py-3 text-center text-base font-medium text-neutral-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="#signup"
                className="block py-3 text-center text-base font-semibold text-white bg-gradient-to-r from-accent-600 to-accent-700 rounded-lg"
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
