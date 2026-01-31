'use client'

import { ArrowRight, Sparkles, Zap, Code, Palette, Globe, Rocket } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Professional Background with Custom Image */}
      <div className="absolute inset-0 bg-black">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: 'url(https://i.ibb.co/Rp5JbVrm/Gemini-Generated-Image-bsivrbsivrbsivrb.png)',
            backgroundBlendMode: 'overlay'
          }}
        />
        
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Spaceship Primary Color Orbs - Subtle */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-48 h-48 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full blur-2xl"
          style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)' }}
          animate={{ 
            scale: [1, 1.4, 1],
            rotate: [0, 360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Parallax Content */}
      <motion.div 
        style={{ y, opacity }}
        className="container-custom relative z-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Spaceship-style Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90 mb-8"
          >
            <Rocket className="w-4 h-4" />
            Launch your digital presence
          </motion.div>

          {/* Original Websevix Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            style={{ color: 'var(--sds-color-text-spaceship-primary, #6366f1)' }}
          >
            <span className="block">Your Dream</span>
            <motion.span 
              className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Website Reality
            </motion.span>
          </motion.h1>

          {/* Websevix Services Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ color: 'rgba(99, 102, 241, 0.8)' }}
          >
            Complete digital solutions: <strong>Website Development</strong>, <strong>Domain Registration</strong>, <strong>Web Hosting</strong>, and <strong>AI-Powered Design</strong>. Everything you need to launch your online business.
          </motion.p>

          {/* Spaceship-style CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                className="group px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg"
                style={{ 
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 10px 25px rgba(99, 102, 241, 0.3)'
                }}
              >
                Get Your Website
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#pricing"
                className="px-8 py-4 backdrop-blur-sm font-semibold rounded-xl transition-all duration-300"
                style={{ 
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  color: '#6366f1'
                }}
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>

          {/* Spaceship-style Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                10K+
              </motion.div>
              <div className="text-white/60 text-sm">Websites Launched</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                99.9%
              </motion.div>
              <div className="text-white/60 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                24/7
              </motion.div>
              <div className="text-white/60 text-sm">Support</div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Spaceship-style Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </section>
  )
}
