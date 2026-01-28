'use client'

import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Features', href: '#features', hasDropdown: false },
    { name: 'How It Works', href: '#how-it-works', hasDropdown: false },
    { name: 'Templates', href: '#templates', hasDropdown: false },
    { name: 'Pricing', href: '#pricing', hasDropdown: false },
    { name: 'Contact', href: '#contact', hasDropdown: false },
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
              <Link
                key={item.name}
                href={item.href || '#'}
                className="text-sm font-medium text-dark-text-secondary hover:text-secondary-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
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
