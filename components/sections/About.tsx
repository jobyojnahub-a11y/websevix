'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Target, Users, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We leverage cutting-edge AI technology to create websites that are not just beautiful, but intelligent and future-ready.'
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'Every website we build is designed with your business goals in mind - driving conversions, engagement, and growth.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'We believe in building long-term relationships. Your success is our success, and we&apos;re with you every step of the way.'
  },
  {
    icon: Zap,
    title: 'Speed & Quality',
    description: 'Fast delivery doesn&apos;t mean compromising on quality. We deliver enterprise-grade websites in days, not months.'
  }
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-bg-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-sm uppercase tracking-widest text-secondary-400 font-semibold mb-4">
              About Websevix
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
              Pioneering the Future of Web Development
            </h2>
            <div className="space-y-6 text-lg text-dark-text-secondary leading-relaxed">
              <p>
                Founded in 2024, Websevix is a technology startup at the forefront of AI-powered web development. We&apos;re not just another web agency - we&apos;re innovators who believe that every business deserves a world-class digital presence.
              </p>
              <p>
                Our team combines years of experience in web development, design, and artificial intelligence to create websites that don&apos;t just look great, but perform exceptionally. We&apos;ve helped over 200 businesses across 25 countries establish their online presence and achieve their digital goals.
              </p>
              <p>
                What sets us apart is our commitment to innovation and results. We don&apos;t just build websites - we create digital experiences that drive business growth, engage customers, and establish lasting brand presence.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-secondary hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="px-8 py-4 border-2 border-primary-400 text-primary-400 font-semibold rounded-xl hover:bg-primary-500/10 transition-all duration-300"
              >
                Our Process
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-dark-bg-secondary rounded-2xl p-8 border border-dark-border">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Our Core Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                        <Icon className="w-6 h-6 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                        <p className="text-dark-text-secondary leading-relaxed">{value.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-br from-primary-900/50 to-secondary-900/50 rounded-2xl p-8 border border-primary-500/30">
              <h3 className="text-xl font-display font-bold text-white mb-4">Our Mission</h3>
              <p className="text-dark-text-secondary leading-relaxed">
                To democratize professional web development by making enterprise-grade websites accessible to businesses of all sizes through the power of artificial intelligence and human expertise.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}