'use client'

import { ArrowRight, Sparkles, Zap, Code, Palette } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-dark-bg-primary">
      {/* Animated Background - Dark Blue Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-dark-bg-primary to-primary-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(30,97,215,0.3)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(0,217,255,0.2)_0%,_transparent_50%)] animate-gradient-xy" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse-slow" />
        </div>
        
        {/* Morphing Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-500/15 to-primary-500/15 animate-morph blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360],
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </div>

      {/* Floating Animated Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10"
          animate={{ 
            y: [0, -30, 0], 
            x: [0, 20, 0], 
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Sparkles className="w-16 h-16 text-primary-400/40 animate-pulse-slow" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20"
          animate={{ 
            y: [0, 20, 0], 
            x: [0, -15, 0], 
            rotate: [0, -180, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Code className="w-12 h-12 text-secondary-400/40 animate-bounce-slow" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-20"
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 15, 0], 
            rotate: [0, 180, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        >
          <Palette className="w-14 h-14 text-accent-400/40 animate-wiggle" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10"
          animate={{ 
            y: [0, 30, 0], 
            x: [0, -20, 0], 
            rotate: [0, -360, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <Zap className="w-18 h-18 text-primary-300/30 animate-glow" />
        </motion.div>
        
        {/* Additional Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block animate-neon-pulse"
              >
                Professional Websites
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-gradient-to-r from-secondary-400 via-primary-400 to-secondary-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-x inline-block"
              >
                Built with AI
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-lg sm:text-xl lg:text-2xl text-dark-text-secondary mb-10 max-w-2xl leading-relaxed"
            >
              Get a custom, professional website for your business. Our team uses AI technology to create beautiful, fast websites that help you grow online.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-secondary hover:scale-110 transition-all duration-300 flex items-center gap-2 animate-glow"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" />
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 font-semibold text-lg rounded-xl hover:bg-primary-500/20 hover:border-secondary-400 hover:text-secondary-400 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Animated Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap gap-8 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="group cursor-pointer"
              >
                <motion.div 
                  className="text-3xl font-bold text-secondary-400 animate-neon-pulse"
                  animate={{ textShadow: ['0 0 10px rgba(0,217,255,0.5)', '0 0 20px rgba(0,217,255,0.8)', '0 0 10px rgba(0,217,255,0.5)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  500+
                </motion.div>
                <div className="text-sm text-dark-text-secondary group-hover:text-secondary-300 transition-colors">Projects Delivered</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="group cursor-pointer"
              >
                <motion.div 
                  className="text-3xl font-bold text-primary-400"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  98%
                </motion.div>
                <div className="text-sm text-dark-text-secondary group-hover:text-primary-300 transition-colors">Client Satisfaction</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="group cursor-pointer"
              >
                <motion.div 
                  className="text-3xl font-bold text-accent-400"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  24h
                </motion.div>
                <div className="text-sm text-dark-text-secondary group-hover:text-accent-300 transition-colors">Response Time</div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-6 h-6 rounded-full bg-success-500 flex items-center justify-center"
                  animate={{ 
                    boxShadow: ['0 0 10px rgba(34,197,94,0.5)', '0 0 20px rgba(34,197,94,0.8)', '0 0 10px rgba(34,197,94,0.5)'],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <motion.span 
                    className="text-white text-xs"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✓
                  </motion.span>
                </motion.div>
                <div className="text-sm text-dark-text-secondary group-hover:text-success-300 transition-colors">Enterprise Grade Security</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-dark-bg-tertiary rounded-2xl shadow-2xl p-4 border border-dark-border animate-glow">
              {/* Browser Mockup */}
              <motion.div 
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="flex gap-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
                <div className="flex-1 bg-dark-bg-secondary rounded px-4 py-1 text-xs text-dark-text-secondary animate-pulse">
                  yoursite.websevix.com
                </div>
              </motion.div>

              {/* Animated Website Preview */}
              <div className="bg-gradient-to-br from-primary-900/50 to-secondary-900/50 rounded-lg p-8 min-h-[400px] flex items-center justify-center border border-primary-500/20 relative overflow-hidden">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-primary-500/10 animate-gradient-x" />
                
                {/* Content */}
                <div className="text-center relative z-10">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1], 
                      rotate: [0, 360, 0],
                      filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)', 'hue-rotate(0deg)']
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="mb-6"
                  >
                    <Sparkles className="w-16 h-16 text-secondary-400 mx-auto animate-neon-pulse" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-white font-semibold text-lg mb-2"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Custom Website
                  </motion.div>
                  
                  <motion.div 
                    className="text-dark-text-secondary text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    Delivered in Business Days
                  </motion.div>
                  
                  {/* Animated Progress Bar */}
                  <motion.div 
                    className="mt-4 w-32 h-1 bg-dark-bg-secondary rounded-full mx-auto overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary-400 to-secondary-400"
                      animate={{ width: ['0%', '100%', '0%'] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    />
                  </motion.div>
                </div>
                
                {/* Floating Code Elements */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-xs font-mono text-primary-400/30"
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${10 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    {'</>'}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Animated Floating Badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-dark-bg-tertiary rounded-lg shadow-lg px-4 py-2 border border-primary-500/30"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-sm font-semibold text-secondary-400 flex items-center gap-1">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Sparkles className="w-4 h-4" />
                </motion.div>
                AI-Powered
              </span>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-dark-bg-tertiary rounded-lg shadow-lg px-4 py-2 border border-success-500/30"
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            >
              <span className="text-sm font-semibold text-success-400 flex items-center gap-1">
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                  <Zap className="w-4 h-4" />
                </motion.div>
                Fast Delivery
              </span>
            </motion.div>
            
            {/* Additional Floating Elements */}
            <motion.div
              className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute top-1/4 -right-6 w-3 h-3 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full"
              animate={{
                x: [0, -15, 0],
                y: [0, 25, 0],
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
