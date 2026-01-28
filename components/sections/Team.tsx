'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail } from 'lucide-react'

const team = [
  {
    name: 'Raj Sharma',
    role: 'Founder & CEO',
    bio: 'Serial entrepreneur with 10+ years in tech. Previously led engineering teams at Fortune 500 companies.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'raj@websevix.com'
    }
  },
  {
    name: 'Priya Patel',
    role: 'CTO & Co-Founder',
    bio: 'AI/ML expert with PhD in Computer Science. Former research scientist at Google AI.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: '#',
      github: '#',
      email: 'priya@websevix.com'
    }
  },
  {
    name: 'Arjun Singh',
    role: 'Head of Design',
    bio: 'Award-winning designer with expertise in UX/UI. Led design teams at top agencies for 8+ years.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'arjun@websevix.com'
    }
  },
  {
    name: 'Sneha Gupta',
    role: 'VP of Operations',
    bio: 'Operations expert ensuring seamless project delivery. MBA from IIM with consulting background.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    social: {
      linkedin: '#',
      email: 'sneha@websevix.com'
    }
  }
]

export default function Team() {
  return (
    <section id="team" className="section-padding bg-dark-bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-secondary-400 font-semibold mb-4">
            Our Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Meet the Innovators Behind Websevix
          </h2>
          <p className="text-lg text-dark-text-secondary leading-relaxed">
            Our diverse team of experts brings together decades of experience in technology, design, and business to deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-bg-tertiary rounded-2xl p-6 border border-dark-border hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary-500/30 group-hover:border-primary-400/50 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-success-500 rounded-full border-2 border-dark-bg-tertiary"></div>
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-dark-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-dark-bg-secondary rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-dark-bg-secondary rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="w-10 h-10 bg-dark-bg-secondary rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-dark-bg-secondary rounded-lg flex items-center justify-center hover:bg-primary-500 hover:text-white transition-all duration-300"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-900/50 to-secondary-900/50 rounded-2xl p-8 border border-primary-500/30">
            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-dark-text-secondary mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our passion for innovation and excellence. Check out our open positions.
            </p>
            <a
              href="mailto:careers@websevix.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-secondary hover:scale-105 transition-all duration-300"
            >
              View Careers
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}