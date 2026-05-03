'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
      ? 'bg-slate-950/90 backdrop-blur-xl shadow-2xl border-b border-white/10'
      : 'bg-linear-to-b from-slate-950/50 to-transparent border-b border-white/5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-0.6  group cursor-pointer hover:opacity-80 transition">
            {/* <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center font-bold text-white text-2xl shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 transform group-hover:scale-110">
              <img src="/image/companylogo.png" alt="SML logo" width={60} height={60} />
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-xl block">Stack</span>
              <span className="text-xs text-cyan-400 font-semibold">Mints Lab</span>
            </div> */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-400 blur-xl opacity-40 group-hover:opacity-70 transition duration-500 rounded-full"></div>

              <Logo size={100} />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Technologies', href: '/technologies' },
              { label: 'Portfolio', href: '/portfolio' },
              { label: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white px-5 py-2 rounded-xl font-medium transition duration-300 relative group border border-transparent hover:border-white/20 hover:bg-white/5"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-linear-to-r from-cyan-400 to-purple-600 group-hover:w-12 transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/contact" className="hidden sm:block bg-linear-to-r from-cyan-500 to-purple-600 text-white px-7 py-3 rounded-full font-bold text-sm hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 border border-white/20">
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition border border-white/10 hover:border-white/20"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Technologies', href: '/technologies' },
              { label: 'Portfolio', href: '/portfolio' },
              { label: 'Contact', href: '/contact' }
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-white px-4 py-3 rounded-xl font-medium transition duration-300 hover:bg-linear-to-r hover:from-cyan-500/20 hover:to-purple-600/20 border border-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="block bg-linear-to-r from-cyan-500 to-purple-600 text-white px-4 py-3 rounded-xl font-bold text-center hover:shadow-lg transition duration-300 w-full">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
