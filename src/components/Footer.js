'use client'

import React, { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = /.+@.+\..+/.test(email.trim())
    if (!isValid) {
      setStatus({ type: 'error', message: 'Please enter a valid email.' })
      return
    }
    setStatus({ type: 'success', message: 'Thanks! You are subscribed.' })
    setEmail('')
  }

  return (
    <footer className="relative overflow-hidden text-white
bg-[#05070d] backdrop-blur-xl border-t border-white/10">  {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-1.5 mb-4">
              <img src="/image/companylogo.png" alt="VPM logo" width={60} height={60} />
              <div className="flex flex-col justify-center">
                <span className="font-bold text-lg leading-tight">Stack</span>
                <span className="text-xs text-gray-400 leading-tight">Mints Lab</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative IT solutions and cutting-edge technology.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1ENX3fc2gX/" className="text-gray-400 hover:text-blue-400 transition text-sm font-semibold">Facebook</a>
              <a href="https://www.instagram.com/stack_mints_labs?igsh=MWJwbzJmN2lrMzZnMA==" className="text-gray-400 hover:text-blue-400 transition text-sm font-semibold">Instagram</a>
              <a href="https://www.linkedin.com/in/stackmints-labs-2a7611405" className="text-gray-400 hover:text-blue-400 transition text-sm font-semibold">LinkedIn</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/" className="hover:text-blue-400 transition font-medium">Home</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition font-medium">Services</a></li>
              <li><a href="/technologies" className="hover:text-blue-400 transition font-medium">Technologies</a></li>
              <li><a href="/portfolio" className="hover:text-blue-400 transition font-medium">Portfolio</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition font-medium">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-black mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition font-medium">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition font-medium">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-blue-400 transition font-medium">IT Consulting</a></li>
              <li><a href="#" className="hover:text-blue-400 transition font-medium">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-blue-400 transition font-medium">Cloud Solutions</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-black mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to our newsletter for latest updates and offers.</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-blue-500 outline-none font-medium"
                  aria-label="Email for newsletter"
                  required
                />
                <button
                  type="submit"
                  className="bg-linear-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition font-bold"
                  aria-label="Subscribe"
                >
                  →
                </button>
              </div>
              {status.message && (
                <p className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-gray-400 text-sm">
            <div>
              <p>&copy; {new Date().getFullYear()} VPM. All rights reserved.</p>
            </div>
            <div className="flex gap-6 justify-end">
              <a href="/privacy" className="hover:text-blue-400 transition font-medium">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition font-medium">Terms of Service</a>
              <a href="/cookie" className="hover:text-blue-400 transition font-medium">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
