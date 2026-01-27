'use client'

import { ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(30,97,215,0.15)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(0,217,255,0.15)_0%,_transparent_50%)] animate-mesh-move" />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-neutral-900 mb-6 leading-tight">
              Build Your Dream Website
              <br />
              <span className="gradient-text">With AI in Minutes</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 mb-10 max-w-2xl leading-relaxed">
              No coding, no design skills required. Just describe what you want, and our AI will create a professional website tailored to your needs. Launch in minutes, not weeks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#signup"
                className="group px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white font-semibold text-lg rounded-xl shadow-accent hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold text-lg rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 items-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">10,000+</div>
                <div className="text-sm text-neutral-600">Websites Created</div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-2xl text-warning-600">★★★★★</span>
                </div>
                <div className="text-sm text-neutral-600">4.9/5 from 2,000+ reviews</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-success-600 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div className="text-sm text-neutral-600">100% AI-Powered & Secure</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-neutral-200">
              {/* Browser Mockup */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-neutral-100 rounded px-4 py-1 text-xs text-neutral-600">
                  yoursite.websevix.com
                </div>
              </div>

              {/* Website Preview */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-4"
                  >
                    ✨
                  </motion.div>
                  <div className="text-neutral-700 font-semibold">AI Generating Your Website...</div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg px-4 py-2 border border-neutral-200"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sm font-semibold text-primary-600">AI Generated</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg px-4 py-2 border border-neutral-200"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="text-sm font-semibold text-success-600">✓ Responsive</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
