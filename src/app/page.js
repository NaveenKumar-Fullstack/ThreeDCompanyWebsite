import React from 'react'
import Script from 'next/script'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Technologies from '@/components/Technologies'
import WhyChooseUs from '@/components/WhyChooseUs'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: "Home",
  description: "Stack Mints Labs - Your trusted partner for web development, mobile apps, IT consulting, and digital transformation. 100+ projects delivered.",
  alternates: {
    canonical: '/',
  },
}

const HomePage = () => {

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Stack Mints Labs",
            "url": "https://vpm-solutions.com",
            "logo": "https://vpm-solutions.com/image/companylogo.png",
            "description": "Leading IT solutions provider specializing in web development, mobile applications, and digital transformation.",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Jharkhand",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-8709472551",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["en", "hi"]
            },
            "sameAs": [
              "https://www.linkedin.com/in/ravi-mahto-41aa82195/"
            ]
          })
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Stack Mints Labs",
            "url": "https://vpm-solutions.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://vpm-solutions.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-cyan-900 to-purple-950">
        <Navbar />
        <div className="animate-fadein">
          <Hero />
          <Services />
          <Technologies />
          <WhyChooseUs />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
        <ScrollToTop />
        <WhatsAppButton phone="916204899360" message="Hi SML team! I'd like to discuss a project." />
      </div>
    </>
  )
}

export default HomePage