'use client'

import { Rocket, Calendar, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,217,255,0.1)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(30,97,215,0.1)_0%,_transparent_50%)] animate-mesh-move" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white mb-4 drop-shadow-lg">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join 10,000+ businesses who&apos;ve transformed their online presence with our AI-powered websites
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="#contact"
              className="group px-10 py-5 bg-white text-primary-700 font-bold text-xl rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Get Started Now
              <Rocket className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#how-it-works"
              className="px-10 py-5 border-2 border-white text-white font-bold text-xl rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Calendar className="w-6 h-6" />
              Learn More
            </Link>
          </div>

          {/* Trust Line */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-white/80">
              <Check className="w-5 h-5 text-success-400" />
              <span>Professional quality</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Check className="w-5 h-5 text-success-400" />
              <span>Fast delivery</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Check className="w-5 h-5 text-success-400" />
              <span>Satisfaction guaranteed</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary-400 to-secondary-400"
                  style={{ zIndex: 5 - i }}
                />
              ))}
            </div>
            <span className="text-white/80 font-medium">Join 10,000+ happy clients</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
