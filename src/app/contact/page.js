import React from 'react'

import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Stack Mints Labs. Phone: +91-8709472551. Email us or fill out our contact form. Located in Jharkhand, India. Free consultation available.",
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact Us | Stack Mints Labs",
    description: "Get in touch with our team for your IT solutions needs in Jharkhand, India.",
    url: 'https://SML-solutions.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-cyan-900 to-purple-950">
      <Navbar />
      <div className="animate-fadein">
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
      <WhatsAppButton phone="91315 58153" message="Hi SML team! I'd like to discuss a project." />
    </div>
  )
}
