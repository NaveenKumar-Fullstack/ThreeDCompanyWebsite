import React from 'react'

import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: "Our Portfolio",
  description: "Explore our portfolio of 100+ successful projects. Web applications, mobile apps, e-commerce solutions, and enterprise software delivered for clients across India.",
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: "Portfolio | Stack Mints Labs",
    description: "View our portfolio of 100+ successful projects and case studies.",
    url: 'https://SML-solutions.com/portfolio',
  },
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-cyan-900 to-purple-950 overflow-x-hidden">
      <Navbar />
      <div className="animate-fadein">
        <Portfolio />
        <Footer />
      </div>
      <ScrollToTop />
      <WhatsAppButton phone="916204899360" message="Hi SML team! I'd like to discuss a project." />
    </div>
  )
}
