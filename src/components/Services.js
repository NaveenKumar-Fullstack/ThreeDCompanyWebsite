'use client'

import React, { useState } from 'react'
import useInView from '@/hooks/useInView'
import {
  Globe,
  Smartphone,
  Settings,
  ShieldCheck,
  BarChart3,
  Cloud
} from 'lucide-react'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom, responsive websites built with modern frameworks and best practices. SEO-optimized and performance-driven solutions.',
      gradient: 'from-blue-600 to-cyan-600',
      color: 'bg-blue-500/20 border-blue-400/30',
      details: 'We create stunning, high-performance websites that not only look great but also convert visitors into customers. Our team specializes in modern web technologies and responsive design that works perfectly on all devices.',
      benefits: ['Custom Design', 'Mobile Responsive', 'SEO Optimized', 'Fast Performance', 'Secure & Scalable', 'Analytics Integration']
    },
    {
      icon: Smartphone,

      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android. Intuitive UI/UX with seamless functionality.',
      gradient: 'from-purple-600 to-pink-600',
      color: 'bg-purple-500/20 border-purple-400/30',
      details: 'Build powerful mobile applications that engage your users and drive business growth. We develop both native and cross-platform solutions with exceptional user experience.',
      benefits: ['iOS & Android', 'Cross-Platform', 'User-Centric Design', 'Push Notifications', 'Offline Support', 'Real-time Sync']
    },
    {
      icon: Settings,
      title: 'IT Consulting',
      description: 'Strategic IT solutions tailored to your business needs. Digital transformation and technology roadmap planning.',
      gradient: 'from-indigo-600 to-blue-600',
      color: 'bg-indigo-500/20 border-indigo-400/30',
      details: 'Partner with our IT experts to transform your business through technology. We provide strategic guidance and practical solutions for your digital transformation journey.',
      benefits: ['Strategy Planning', 'Technology Assessment', 'Digital Transformation', 'Roadmap Development', 'Best Practices', 'Ongoing Support']
    },
    {
      icon: ShieldCheck,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets. Risk assessment and compliance management.',
      gradient: 'from-red-600 to-orange-600',
      color: 'bg-red-500/20 border-red-400/30',
      details: 'Protect your business from cyber threats with our comprehensive security solutions. We implement industry-leading security practices to safeguard your data.',
      benefits: ['Risk Assessment', 'Threat Detection', 'Data Protection', 'Compliance', 'Incident Response', 'Security Training']
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Business intelligence and data-driven insights. Advanced analytics and visualization for informed decisions.',
      gradient: 'from-green-600 to-emerald-600',
      color: 'bg-green-500/20 border-green-400/30',
      details: 'Transform your data into actionable insights. Our analytics solutions help you make informed business decisions with real-time data visualization.',
      benefits: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Predictive Analytics', 'Business Intelligence', 'Report Generation']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud migration, deployment, and management. Scalable infrastructure for growing businesses.',
      gradient: 'from-orange-600 to-yellow-600',
      color: 'bg-orange-500/20 border-orange-400/30',
      details: 'Leverage the power of cloud computing to scale your business. We handle migration, deployment, and ongoing management of your cloud infrastructure.',
      benefits: ['Cloud Migration', 'Infrastructure Setup', 'Cost Optimization', 'Auto-scaling', '24/7 Monitoring', 'Disaster Recovery']
    }
  ]

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-slate-950 via-cyan-900 to-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">Our</span> Services
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8 rounded-full shadow-lg shadow-cyan-500/50"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-semibold">
            Comprehensive IT solutions designed to accelerate your business growth and transform your operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCardWrapper key={index} service={service} index={index} onExplore={() => setSelectedService(service)} />
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
      )}
    </section>
  )
}

const ServiceCardWrapper = ({ service, index, onExplore }) => {
  const [ref, isInView] = useInView()
  return (
    <div ref={ref}>
      <ServiceCard service={service} index={index} isInView={isInView} onExplore={onExplore} />
    </div>
  )
}


const ServiceCard = ({ service, index, isInView, onExplore }) => {
  const Icon = service.icon

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden h-full
      transform-gpu transition-all duration-500
      [transform-style:preserve-3d]

      /* smooth lift */
      hover:-translate-y-3 hover:scale-[1.02]

      /* subtle floating */
      animate-[float_8s_ease-in-out_infinite]

      ${isInView ? 'animate-scroll-up' : 'opacity-0'}
      ${isInView ? `animate-stagger-${(index % 6) + 1}` : ''}`}
    >

      {/* BASE DARK */}
      <div className="absolute inset-0 bg-[#0b0f19]"></div>

      {/* DEPTH SHADOW */}
      <div className="absolute inset-0 rounded-2xl
      shadow-[0_30px_80px_rgba(0,0,0,0.8)]
      [transform:translateZ(-10px)]"></div>

      {/* THREE.JS STYLE LIGHT (MAIN EFFECT 🔥) */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
      bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_60%)]
      pointer-events-none"></div>

      {/* EDGE LIGHT */}
      <div className="absolute inset-0 rounded-2xl border border-white/10
      group-hover:border-cyan-400/30 transition"></div>

      {/* CONTENT */}
      <div className="relative z-10 p-8 flex flex-col h-full
      [transform:translateZ(25px)]">

        {/* ICON */}
        <div className="mb-6 relative">

          {/* soft light behind icon */}
          <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-100
          bg-cyan-400/20 transition duration-500
          [transform:translateZ(-10px)]"></div>

          <div
            className="relative w-14 h-14 flex items-center justify-center rounded-xl
            bg-white/10 border border-white/20
            transition duration-300
            group-hover:bg-cyan-400/10 group-hover:scale-110
            [transform:translateZ(30px)]"
          >
            <Icon className="w-7 h-7 text-white" strokeWidth={2.2} />
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
          {service.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
          {service.description}
        </p>

        {/* BUTTON */}
        <button
          onClick={onExplore}
          className="mt-auto text-sm font-medium text-white
          border border-white/20 px-4 py-2 rounded-lg
          hover:bg-cyan-400/10 hover:border-cyan-400/40
          transition"
        >
          Explore →
        </button>

      </div>
    </div>
  )
}

const ServiceModal = ({ service, onClose }) => {
  const Icon = service.icon
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in duration-300">

        {/* Header */}
        <div className={`bg-gradient-to-r ${service.gradient} p-8 relative`}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 p-2 rounded-full transition"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>


          <div className="text-6xl mb-4">
            <Icon className="w-12 h-12 text-white" strokeWidth={2.2} />
          </div>
          <h2 className="text-4xl font-black text-white mb-2">{service.title}</h2>
          <p className="text-white/90 text-lg font-semibold">{service.description}</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Details */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">About This Service</h3>
            <p className="text-gray-300 leading-relaxed text-lg">{service.details}</p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <span className={`text-2xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent flex-shrink-0`}>✓</span>
                  <span className="text-white font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={onClose}
            className={`w-full bg-gradient-to-r ${service.gradient} text-white font-bold py-4 px-6 rounded-xl hover:shadow-2xl transition duration-300 uppercase tracking-widest`}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Services
