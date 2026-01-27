'use client'

import { useState, useEffect } from 'react'
import { Quote, Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "Websevix transformed how I build websites for my clients. What used to take weeks now takes minutes. The AI understands exactly what I need, and the results are consistently impressive. My clients love their sites, and I love the time savings. Absolute game-changer for my agency.",
    author: {
      name: 'Sarah Chen',
      title: 'Founder, PixelPerfect Agency',
      avatar: 'https://via.placeholder.com/64?text=SC',
      rating: 5,
    },
    website: '#',
  },
  {
    quote: "I launched my online store in just one afternoon using Websevix. The AI handled everything - product pages, checkout, even suggested layouts based on my inventory. Sales have exceeded expectations, and customers love how professional everything looks. Best investment I've made in my business.",
    author: {
      name: 'Raj Patel',
      title: 'E-commerce Owner',
      avatar: 'https://via.placeholder.com/64?text=RP',
      rating: 5,
    },
    website: '#',
  },
  {
    quote: "As a designer without coding skills, Websevix is perfect. I can focus on the creative vision while the AI handles the technical implementation. My clients get beautiful, functional websites, and I can take on more projects. The visual editor is intuitive and powerful.",
    author: {
      name: 'Emily Rodriguez',
      title: 'Freelance Designer',
      avatar: 'https://via.placeholder.com/64?text=ER',
      rating: 5,
    },
    website: '#',
  },
  {
    quote: "We needed websites for all 12 of our restaurant locations. Websevix's AI created unique sites for each location in under two hours total. Online reservations increased 300%, and our customers love being able to view menus and book tables easily. Incredible ROI.",
    author: {
      name: 'Michael Zhang',
      title: 'Restaurant Chain Owner',
      avatar: 'https://via.placeholder.com/64?text=MZ',
      rating: 5,
    },
    website: '#',
  },
  {
    quote: "Building my coaching website was so easy with Websevix. I just described what I wanted - video sections, booking calendar, payment integration - and the AI built it perfectly. Now I can focus on my clients instead of wrestling with website builders. Highly recommend!",
    author: {
      name: 'Priya Sharma',
      title: 'Fitness Coach',
      avatar: 'https://via.placeholder.com/64?text=PS',
      rating: 5,
    },
    website: '#',
  },
]

const stats = [
  { number: '10,000+', label: 'Websites Created' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '2,000+', label: 'Happy Customers' },
  { number: '15min', label: 'Average Build Time' },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-white/70 font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Loved by Thousands of Users Worldwide
          </h2>
          <p className="text-lg text-white/70">
            See what our customers have to say about their experience
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-display font-black text-white mb-2">
                {stat.number}
              </div>
              <div className="text-base text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-white/20 relative"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-white/30" />
              <blockquote className="text-xl md:text-2xl italic text-white leading-relaxed mb-8 relative z-10">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[currentIndex].author.avatar}
                  alt={testimonials[currentIndex].author.name}
                  className="w-16 h-16 rounded-full border-2 border-white"
                />
                <div>
                  <div className="font-semibold text-lg text-white">
                    {testimonials[currentIndex].author.name}
                  </div>
                  <div className="text-sm text-white/70">
                    {testimonials[currentIndex].author.title}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(testimonials[currentIndex].author.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning-600 text-warning-600" />
                    ))}
                  </div>
                </div>
              </div>
              <a
                href={testimonials[currentIndex].website}
                className="inline-flex items-center gap-2 text-sm font-medium text-secondary-400 hover:text-secondary-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Visit their website →
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-secondary-400'
                      : 'w-2 bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
