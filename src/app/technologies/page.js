import React from 'react'

import Navbar from '@/components/Navbar'
import Technologies from '@/components/Technologies'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: "Technologies We Use",
  description: "Cutting-edge technologies we work with: React, Next.js, Node.js, Python, MongoDB, AWS, Docker, and more. Modern tech stack for scalable solutions.",
  alternates: {
    canonical: '/technologies',
  },
  openGraph: {
    title: "Technologies | Stack Mints Labs",
    description: "Explore the cutting-edge technologies we use to build amazing solutions.",
    url: 'https://vpm-solutions.com/technologies',
  },
}

export default function TechnologiesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-cyan-900 to-purple-950">
      <Navbar />
      <div className="animate-fadein">
        <Technologies />
        <Footer />
      </div>
      <ScrollToTop />
      <WhatsAppButton phone="9131558153" message="Hi SML team! I'd like to discuss a project." />
    </div>
  )
}
