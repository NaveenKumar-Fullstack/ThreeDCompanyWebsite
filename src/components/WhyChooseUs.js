'use client'

import React from 'react'
import useInView from '@/hooks/useInView'

const ReasonCardWrapper = ({ reason, index }) => {
  const [ref, isInView] = useInView()
  return (
    <div ref={ref}>
      <ReasonCard reason={reason} index={index} isInView={isInView} />
    </div>
  )
}

const ReasonCard = ({ reason, index, isInView }) => {
  return (
    <div className={`group relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-3xl transition duration-500 border border-white/20 hover:border-cyan-400/40 hover:bg-white/15 ${isInView ? 'animate-scroll-up' : 'opacity-0'} ${isInView ? `animate-stagger-${(index % 6) + 1}` : ''}`}>
      {/* Number positioned outside the card */}
      <div className="absolute -top-10 -left-10">
        <div className="relative w-32 h-32">
          {/* Outer ring */}
          <div className="absolute inset-2 rounded-full border-2 border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-500 group-hover:rotate-180" style={{ transformOrigin: 'center' }}></div>

          {/* Lightning bolts around */}
          <svg className="absolute top-0 right-2 w-5 h-5 text-cyan-400/70 group-hover:text-cyan-300 transition-all group-hover:scale-125" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
          </svg>
          <svg className="absolute bottom-2 left-0 w-4 h-4 text-purple-400/70 group-hover:text-purple-300 transition-all group-hover:scale-125" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
          </svg>

          {/* Number with enhanced styling */}
          <div className="relative flex items-center justify-center h-full">
            <div className="relative text-7xl font-black leading-none select-none">
              {/* Main gradient number */}
              <div className="relative bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:via-blue-300 group-hover:to-purple-400 transition-all duration-500">
                {reason.number}
              </div>

              {/* Crack overlay SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {/* Main diagonal cracks */}
                <line x1="25" y1="15" x2="75" y2="85" stroke="url(#crack-gradient-1)" strokeWidth="2" strokeLinecap="round" strokeDasharray="3,2" />
                <line x1="35" y1="5" x2="65" y2="95" stroke="url(#crack-gradient-2)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4,3" />
                <line x1="75" y1="25" x2="25" y2="75" stroke="url(#crack-gradient-3)" strokeWidth="2" strokeLinecap="round" strokeDasharray="3,2" />

                {/* Branch cracks */}
                <polyline points="40,30 45,40 42,50" fill="none" stroke="rgba(6, 182, 212, 0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="60,50 55,60 58,70" fill="none" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="50,20 48,30 52,40" fill="none" stroke="rgba(96, 165, 250, 0.5)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

                {/* Small fracture details */}
                <circle cx="35" cy="35" r="1.5" fill="rgba(6, 182, 212, 0.7)" />
                <circle cx="65" cy="65" r="1.5" fill="rgba(139, 92, 246, 0.7)" />
                <circle cx="50" cy="50" r="1" fill="rgba(96, 165, 250, 0.6)" />

                {/* Define gradients for cracks */}
                <defs>
                  <linearGradient id="crack-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgb(6, 182, 212)', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 0.8 }} />
                  </linearGradient>
                  <linearGradient id="crack-gradient-2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 0.7 }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(6, 182, 212)', stopOpacity: 0.7 }} />
                  </linearGradient>
                  <linearGradient id="crack-gradient-3" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: 'rgb(96, 165, 250)', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: 'rgb(168, 85, 247)', stopOpacity: 0.8 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r from-cyan-400 to-purple-600 group-hover:bg-clip-text transition-all duration-500">{reason.title}</h3>
        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-all duration-300">{reason.description}</p>
      </div>
    </div>
  )
}

const WhyChooseUs = () => {
  const reasons = [
    {
      number: '01',
      title: 'Expert Team',
      description: 'Experienced developers and designers with proven track record in delivering high-quality solutions'
    },
    {
      number: '02',
      title: 'Agile Methodology',
      description: 'Flexible approach to project management ensuring timely delivery and continuous improvements'
    },
    {
      number: '03',
      title: 'Custom Solutions',
      description: 'Tailored approaches for your unique business needs, not one-size-fits-all templates'
    },
    {
      number: '04',
      title: 'Cost Effective',
      description: 'Competitive pricing without compromising on quality and performance'
    },
    {
      number: '05',
      title: 'Post-Launch Support',
      description: 'Comprehensive maintenance, updates, and support even after project completion'
    },
    {
      number: '06',
      title: 'Transparent Communication',
      description: 'Regular updates, clear reporting, and open channels for collaboration'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-950 via-cyan-900 to-purple-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Why Choose SML?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here's what makes us the perfect partner for your IT journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCardWrapper key={index} reason={reason} index={index} />
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-3xl p-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-[26px] p-12 backdrop-blur-xl border border-white/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-black text-white mb-6">Ready to Start Your Project?</h3>
                <p className="text-lg text-gray-300 mb-8">
                  Let's collaborate to bring your vision to life with cutting-edge technology and expert guidance.
                </p>
                <a href='/contact' className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition duration-300">
                  Get Free Consultation
                </a>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-3xl p-8 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 group">
                    <span className="text-3xl group-hover:scale-125 transition">✓</span>
                    <span className="text-gray-200 font-semibold group-hover:text-cyan-400 transition">Free Initial Consultation</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <span className="text-3xl group-hover:scale-125 transition">✓</span>
                    <span className="text-gray-200 font-semibold group-hover:text-cyan-400 transition">Custom Project Proposal</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <span className="text-3xl group-hover:scale-125 transition">✓</span>
                    <span className="text-gray-200 font-semibold group-hover:text-cyan-400 transition">Flexible Payment Terms</span>
                  </div>
                  <div className="flex items-center gap-3 group">
                    <span className="text-3xl group-hover:scale-125 transition">✓</span>
                    <span className="text-gray-200 font-semibold group-hover:text-cyan-400 transition">Dedicated Project Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
