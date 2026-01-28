'use client'

import { ArrowRight, Sparkles, Zap, Code, Palette } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-dark-bg-primary">
      {/* Clean Minimal Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg-primary via-dark-bg-primary to-primary-950/50">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
      </div>

      {/* Minimal Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
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
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              Build your website
              <br />
              <span className="text-primary-400">for free</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-dark-text-secondary mb-8 max-w-xl leading-relaxed font-light"
            >
              More than a website builder, Websevix helps you create professional websites with AI. Start free, then get premium features.
            </motion.p>

            {/* Clean CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="#contact"
                className="px-8 py-4 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Start free trial
              </Link>
              <Link
                href="#pricing"
                className="px-8 py-4 border border-dark-border text-dark-text-primary font-medium rounded-lg hover:border-primary-500 hover:text-primary-400 transition-colors duration-200"
              >
                View pricing
              </Link>
            </motion.div>

            {/* Simple Trust Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-sm text-dark-text-muted"
            >
              You agree to receive Websevix marketing emails.
            </motion.div>
          </motion.div>

          {/* Clean Right Side Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-dark-bg-secondary rounded-xl p-6 border border-dark-border">
              {/* Simple Browser Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <div className="flex-1 bg-dark-bg-tertiary rounded px-3 py-1 text-xs text-dark-text-muted">
                  yoursite.websevix.com
                </div>
              </div>

              {/* Clean Website Preview */}
              <div className="bg-gradient-to-b from-dark-bg-tertiary to-dark-bg-primary rounded-lg p-8 min-h-[300px] flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary-400" />
                </div>
                <div className="text-white font-medium text-lg mb-2">Your Website</div>
                <div className="text-dark-text-secondary text-sm text-center">
                  Beautiful, fast, and professional
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
