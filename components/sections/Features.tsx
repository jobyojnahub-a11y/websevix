'use client'

import { Sparkles, Zap, Shield, Palette, Headphones, Globe, ArrowRight, Rocket, Code, Database } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Website Design',
    description: 'Our team creates stunning, professional websites using advanced AI tools. Custom designs that perfectly match your brand and business goals.',
    gradient: 'from-blue-500 to-purple-600',
    delay: 0
  },
  {
    icon: Globe,
    title: 'Domain Registration',
    description: 'Get the perfect domain name for your business. We handle registration, DNS setup, and domain management for you.',
    gradient: 'from-green-500 to-blue-600',
    delay: 0.1
  },
  {
    icon: Database,
    title: 'Web Hosting Services',
    description: 'Fast, reliable hosting with 99.9% uptime guarantee. SSL certificates, daily backups, and global CDN included.',
    gradient: 'from-purple-500 to-pink-600',
    delay: 0.2
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Complete website with hosting and domain ready in just 3-5 business days. No more waiting weeks for your online presence.',
    gradient: 'from-orange-500 to-red-600',
    delay: 0.3
  },
  {
    icon: Shield,
    title: 'Complete Security',
    description: 'SSL certificates, malware protection, automatic backups, and 24/7 monitoring keep your website safe and secure.',
    gradient: 'from-teal-500 to-cyan-600',
    delay: 0.4
  },
  {
    icon: Headphones,
    title: '24/7 Support & Maintenance',
    description: 'Round-the-clock technical support, regular updates, and website maintenance. We keep your site running perfectly.',
    gradient: 'from-indigo-500 to-purple-600',
    delay: 0.5
  },
]

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"])

  return (
    <section ref={containerRef} id="features" className="relative py-32 overflow-hidden">
      {/* Spaceship-style Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900">
        {/* Animated Background Elements */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full blur-3xl" />
        </motion.div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header - Spaceship Style */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/90 mb-6"
          >
            <Code className="w-4 h-4" />
            Powerful Features
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Choose and connect
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              exactly what you need
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/80 leading-relaxed"
          >
            Take your website and business to the world with our comprehensive suite of tools and services.
          </motion.p>
        </motion.div>

        {/* Features Grid - Spaceship Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`} />
                
                {/* Icon with Animation */}
                <motion.div 
                  className={`relative w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
                
                <motion.div
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white group-hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Explore feature
                  <ArrowRight className="w-4 h-4" />
                </motion.div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
