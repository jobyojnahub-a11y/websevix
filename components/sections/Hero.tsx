'use client'

import { ArrowRight, Sparkles, Zap, Code, Palette } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-dark-bg-primary">
      {/* Animated Background - Dark Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-dark-bg-primary to-primary-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(30,97,215,0.2)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(0,217,255,0.15)_0%,_transparent_50%)] animate-mesh-move" />
      </div>

      {/* Floating Minimal Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10"
          animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="w-16 h-16 text-primary-400/30" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20"
          animate={{ y: [0, 20, 0], x: [0, -15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Code className="w-12 h-12 text-secondary-400/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20"
          animate={{ y: [0, -20, 0], x: [0, 15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <Palette className="w-14 h-14 text-accent-400/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10"
          animate={{ y: [0, 30, 0], x: [0, -20, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <Zap className="w-18 h-18 text-primary-300/20" />
        </motion.div>
      </div>

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight tracking-tight">
              Professional Websites
              <br />
              <span className="bg-gradient-to-r from-secondary-400 via-primary-400 to-secondary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]">
                Built with AI
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-dark-text-secondary mb-10 max-w-2xl leading-relaxed">
              Get a custom, professional website for your business. Our team uses AI technology to create beautiful, fast websites that help you grow online.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 font-semibold text-lg rounded-xl hover:bg-primary-500/10 transition-all duration-300 flex items-center gap-2"
              >
                Learn More
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-8 items-center">
              <div>
                <div className="text-3xl font-bold text-secondary-400">500+</div>
                <div className="text-sm text-dark-text-secondary">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400">98%</div>
                <div className="text-sm text-dark-text-secondary">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-400">24h</div>
                <div className="text-sm text-dark-text-secondary">Response Time</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-success-500 flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div className="text-sm text-dark-text-secondary">Enterprise Grade Security</div>
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
            <div className="relative bg-dark-bg-tertiary rounded-2xl shadow-2xl p-4 border border-dark-border">
              {/* Browser Mockup */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-dark-bg-secondary rounded px-4 py-1 text-xs text-dark-text-secondary">
                  yoursite.websevix.com
                </div>
              </div>

              {/* Website Preview */}
              <div className="bg-gradient-to-br from-primary-900/50 to-secondary-900/50 rounded-lg p-8 min-h-[400px] flex items-center justify-center border border-primary-500/20">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mb-6"
                  >
                    <Sparkles className="w-16 h-16 text-secondary-400 mx-auto" />
                  </motion.div>
                  <div className="text-white font-semibold text-lg mb-2">Custom Website</div>
                  <div className="text-dark-text-secondary text-sm">Delivered in Business Days</div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-dark-bg-tertiary rounded-lg shadow-lg px-4 py-2 border border-primary-500/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-sm font-semibold text-secondary-400 flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                AI-Powered
              </span>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -left-4 bg-dark-bg-tertiary rounded-lg shadow-lg px-4 py-2 border border-success-500/30"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <span className="text-sm font-semibold text-success-400 flex items-center gap-1">
                <Zap className="w-4 h-4" />
                Fast Delivery
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
