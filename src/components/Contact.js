'use client'

import React, { useState } from 'react'
import ThreeDContact from './ThreeDContact'
import useInView from '@/hooks/useInView'

const ContactInfoCardWrapper = ({ card, index }) => {
  const [ref, isInView] = useInView()
  return (
    <div ref={ref}>
      <ContactInfoCard card={card} index={index} isInView={isInView} />
    </div>
  )
}

const ContactInfoCard = ({ card, index, isInView }) => {
  return (
    <div className={`group relative rounded-3xl overflow-hidden ${isInView ? 'animate-scroll-up' : 'opacity-0'} ${isInView ? `animate-stagger-${(index % 6) + 1}` : ''}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradientBg} opacity-100`}></div>
      <div className={`relative bg-gradient-to-br ${card.bgColor} backdrop-blur-2xl px-8 py-6 rounded-3xl border ${card.borderColor} hover:${card.hoverBorder} transition-all duration-300 hover:shadow-2xl ${card.shadowColor}`}>
        <div className={`flex items-${card.align} gap-6`}>
          <div className={`w-16 h-16 bg-gradient-to-br ${card.iconGradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 ${card.iconRotate} transition-all duration-300`}>
            {card.icon}
          </div>
          <div className={`${card.align === 'start' ? 'flex-1' : 'flex-1'}`}>
            <h4 className={`text-lg font-black ${card.titleColor} mb-${card.align === 'center' ? '1' : '2'}`}>{card.title}</h4>
            <div className={card.align === 'center' ? 'text-white font-semibold text-sm leading-relaxed' : 'space-y-1'}>
              {card.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [status, setStatus] = useState({ type: '', message: '', loading: false })

  const contactCards = [
    {
      title: 'ADDRESS',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      gradientBg: 'from-cyan-500 via-teal-500 to-emerald-600',
      bgColor: 'from-cyan-950/90 to-teal-950/90',
      borderColor: 'border-cyan-400/30',
      hoverBorder: 'border-cyan-300/60',
      shadowColor: 'hover:shadow-cyan-500/30',
      titleColor: 'text-cyan-200',
      iconGradient: 'from-cyan-400 to-teal-500',
      iconRotate: 'group-hover:rotate-6',
      align: 'center',
      content: 'Chhatarpur,Madhya Pradesh-471201, India'
    },
    {
      title: 'PHONE',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      gradientBg: 'from-violet-500 via-purple-500 to-fuchsia-600',
      bgColor: 'from-violet-950/90 to-purple-950/90',
      borderColor: 'border-purple-400/30',
      hoverBorder: 'border-purple-300/60',
      shadowColor: 'hover:shadow-purple-500/30',
      titleColor: 'text-purple-200',
      iconGradient: 'from-purple-400 to-fuchsia-500',
      iconRotate: 'group-hover:-rotate-6',
      align: 'center',
      content: (
        <div className="space-y-1">
          <p className="text-white font-semibold text-sm hover:text-purple-300 cursor-pointer transition">+91 9131558153</p>
        </div>
      )
    },
    {
      title: 'EMAIL',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradientBg: 'from-pink-500 via-rose-500 to-red-600',
      bgColor: 'from-rose-950/90 to-pink-950/90',
      borderColor: 'border-pink-400/30',
      hoverBorder: 'border-pink-300/60',
      shadowColor: 'hover:shadow-pink-500/30',
      titleColor: 'text-pink-200',
      iconGradient: 'from-pink-400 to-rose-500',
      iconRotate: 'group-hover:rotate-6',
      align: 'center',
      content: (
        <div className="space-y-1">
          <p className="text-white font-semibold text-sm hover:text-pink-300 cursor-pointer transition">stackmintslabs@gmail.com</p>
          <p className="text-white font-semibold text-sm hover:text-pink-300 cursor-pointer transition">support@stackmintslabs.com</p>
        </div>
      )
    },
    {
      title: 'BUSINESS HOURS',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradientBg: 'from-amber-500 via-orange-500 to-red-600',
      bgColor: 'from-amber-950/90 to-orange-950/90',
      borderColor: 'border-orange-400/30',
      hoverBorder: 'border-orange-300/60',
      shadowColor: 'hover:shadow-orange-500/30',
      titleColor: 'text-orange-200',
      iconGradient: 'from-orange-400 to-red-500',
      iconRotate: '',
      align: 'start',
      content: (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-orange-100 font-semibold">Mon - Fri:</span>
            <span className="text-white font-bold">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-orange-100 font-semibold">Saturday:</span>
            <span className="text-white font-bold">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-orange-100 font-semibold">Sunday:</span>
            <span className="text-white font-bold">Closed</span>
          </div>
        </div>
      )
    }
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', message: '', loading: true })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed to send message')
      setStatus({ type: 'success', message: 'Message sent! We will reply soon.', loading: false })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Something went wrong.', loading: false })
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-950 via-cyan-900 to-purple-950 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <ThreeDContact />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl relative overflow-hidden group border border-white/20 hover:border-white/40 hover:bg-white/15 transition">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-8">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 font-bold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9442329485"
                    className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border-2 border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition duration-300 ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status.loading ? 'Sending...' : 'Send Message →'}
                </button>
                {status.message && (
                  <p className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {contactCards.map((card, index) => (
              <ContactInfoCardWrapper key={index} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
