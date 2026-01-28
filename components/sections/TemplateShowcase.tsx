'use client'

import { useState } from 'react'
import { Users, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const categories = ['All', 'Business', 'Portfolio', 'E-commerce', 'Blog', 'Restaurant', 'Education', 'Healthcare', 'Real Estate', 'Fitness']

const templates = [
  {
    id: 1,
    category: 'Business',
    name: 'Corporate Pro',
    description: 'Professional corporate template with service pages, team section, and contact form.',
    image: 'https://via.placeholder.com/400x300?text=Corporate+Pro',
    used: 847,
    rating: 4.9,
    badges: ['Popular'],
  },
  {
    id: 2,
    category: 'Portfolio',
    name: 'Photography Pro',
    description: 'Full-screen image galleries with lightbox and portfolio showcase.',
    image: 'https://via.placeholder.com/400x300?text=Photography+Pro',
    used: 623,
    rating: 4.8,
    badges: ['New'],
  },
  {
    id: 3,
    category: 'E-commerce',
    name: 'Fashion Store',
    description: 'Modern fashion e-commerce with product filters and shopping cart.',
    image: 'https://via.placeholder.com/400x300?text=Fashion+Store',
    used: 1124,
    rating: 4.9,
    badges: ['Popular'],
  },
  {
    id: 4,
    category: 'Blog',
    name: 'Magazine Style',
    description: 'News and magazine layout with categories and featured articles.',
    image: 'https://via.placeholder.com/400x300?text=Magazine+Style',
    used: 456,
    rating: 4.7,
    badges: [],
  },
  {
    id: 5,
    category: 'Restaurant',
    name: 'Fine Dining',
    description: 'Elegant restaurant website with menu and reservation system.',
    image: 'https://via.placeholder.com/400x300?text=Fine+Dining',
    used: 789,
    rating: 4.9,
    badges: ['Popular'],
  },
  {
    id: 6,
    category: 'Education',
    name: 'Online Course',
    description: 'Course platform with enrollment and student dashboard.',
    image: 'https://via.placeholder.com/400x300?text=Online+Course',
    used: 342,
    rating: 4.8,
    badges: ['New'],
  },
  {
    id: 7,
    category: 'Business',
    name: 'Startup Launch',
    description: 'One-page startup landing with product showcase and CTA.',
    image: 'https://via.placeholder.com/400x300?text=Startup+Launch',
    used: 567,
    rating: 4.6,
    badges: [],
  },
  {
    id: 8,
    category: 'Portfolio',
    name: 'Designer Showcase',
    description: 'Minimal portfolio with project details and case studies.',
    image: 'https://via.placeholder.com/400x300?text=Designer+Showcase',
    used: 891,
    rating: 4.9,
    badges: ['Popular'],
  },
]

export default function TemplateShowcase() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredTemplates = activeCategory === 'All' 
    ? templates 
    : templates.filter(t => t.category === activeCategory)

  return (
    <section id="templates" className="section-padding bg-dark-bg-primary text-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-white/70 font-semibold mb-4">
            Templates
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Industry-Specific Templates for Every Business
          </h2>
          <p className="text-lg text-white/70">
            Choose from our curated collection of professionally designed templates. Each template is fully customizable and optimized for conversions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                  : 'bg-dark-bg-secondary text-dark-text-secondary hover:bg-dark-bg-tertiary hover:text-white border border-dark-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-dark-bg-secondary rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button className="px-4 py-2 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-dark-bg-primary transition-colors">
                    Preview
                  </button>
                  <button className="px-4 py-2 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-lg font-medium hover:shadow-accent transition-all">
                    Use Template
                  </button>
                </div>
                {/* Badges */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {template.badges.map((badge) => (
                    <span
                      key={badge}
                      className={`px-3 py-1 rounded-md text-xs font-semibold ${
                        badge === 'New' ? 'bg-success-600' : 'bg-accent-600'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="text-xs uppercase tracking-widest text-secondary-600 font-medium mb-2">
                  {template.category}
                </div>
                <h4 className="text-xl font-display font-semibold text-white mb-2">
                  {template.name}
                </h4>
                <p className="text-sm text-white/60 line-clamp-2 mb-4">
                  {template.description}
                </p>
                <div className="flex items-center justify-between text-xs text-white/50">
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{template.used} sites</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-warning-600 text-warning-600" />
                    <span>{template.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
            View All Templates
          </button>
          <p className="text-sm text-white/60 mt-4">
            Showing {filteredTemplates.length} of 150+ templates
          </p>
        </div>
      </div>
    </section>
  )
}
