import React from 'react'

import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: "Our Services",
  description: "Professional IT services including web development, mobile applications, IT consulting, cybersecurity, data analytics, and cloud solutions. Custom solutions tailored to your business needs.",
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Our Services | Stack Mints Labs",
    description: "Professional IT services including web development, mobile apps, IT consulting, and more.",
    url: 'https://vpm-solutions.com/services',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-cyan-900 to-purple-950">
      <Navbar />
      <div className="animate-fadein">
        <Services />
        <Footer />
      </div>
      <ScrollToTop />
      <WhatsAppButton phone="916204899360" message="Hi VPM team! I'd like to discuss a project." />
    </div>
  )
}
