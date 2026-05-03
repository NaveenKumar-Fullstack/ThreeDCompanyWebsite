'use client'

import React from 'react'
import useInView from '@/hooks/useInView'

const TechCardWrapper = ({ plan, index }) => {
  const [ref, isInView] = useInView()
  return (
    <div ref={ref}>
      <TechCard plan={plan} index={index} isInView={isInView} />
    </div>
  )
}

const TechCard = ({ plan, index, isInView }) => {
  const isHighlighted = plan.name === 'Premium'

  return (
    <div className={`group relative overflow-hidden rounded-3xl transition duration-500 ${isInView ? 'animate-scroll-up' : 'opacity-0'} ${isInView ? `animate-stagger-${(index % 6) + 1}` : ''} h-full`}>
      {/* Glow effect for Premium */}
      {isHighlighted && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 rounded-3xl z-0"></div>
          <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500 z-0"></div>
        </>
      )}

      <div className={`relative rounded-3xl overflow-hidden h-full backdrop-blur-xl transition duration-300 flex flex-col ${
        isHighlighted 
          ? 'bg-blue-600/95 shadow-2xl shadow-blue-500/50 transform group-hover:scale-105 border border-yellow-400/50 group-hover:border-yellow-300' 
          : 'bg-gradient-to-br from-slate-900/95 to-slate-800/95 border border-white/10 group-hover:border-cyan-400/50 shadow-xl group-hover:shadow-2xl group-hover:shadow-cyan-500/20'
      }`}>
        
        {/* Premium Ribbon */}
        {isHighlighted && (
          <div className="absolute top-0 right-0 w-55 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 transform rotate-45 translate-x-12 -translate-y-2 shadow-lg">
            <span className="absolute text-xs font-black text-blue-900 top-2 right-8">BEST VALUE</span>
          </div>
        )}

        {/* Plan Badge */}
        <div className="relative pt-8 pb-3 px-6">
          <div className={`inline-block rounded-full px-7 py-2.5 font-bold text-xs uppercase tracking-widest mb-8 shadow-lg transition ${
            isHighlighted 
              ? 'bg-gradient-to-r from-yellow-300 to-orange-400 text-blue-900 shadow-yellow-500/50' 
              : 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-orange-500/30'
          }`}>
            {plan.badge}
          </div>
        </div>

        {/* Price Section */}
        <div className="px-6 pb-8 relative">
          {plan.originalPrice && (
            <div className={`text-sm font-bold mb-3 ${isHighlighted ? 'text-yellow-100' : 'text-gray-500'} line-through uppercase tracking-wide`}>
              ₹{plan.originalPrice.toLocaleString()}
            </div>
          )}
          <div className="flex items-baseline gap-1 mb-3">
            <div className={`text-6xl font-black ${isHighlighted ? 'text-yellow-300' : 'text-white'}`}>
              {typeof plan.price === 'number' ? '₹' : ''}
            </div>
            <div className={`text-4xl font-black ${isHighlighted ? 'text-yellow-300' : 'text-white'}`}>
              {typeof plan.price === 'number' ? plan.price.toLocaleString() : plan.price}
            </div>
          </div>
          {/* <div className={`text-xs font-bold uppercase tracking-wider ${isHighlighted ? 'text-blue-100' : 'text-gray-400'}`}>
            (+ 18% GST {plan.gst})
          </div> */}
        </div>

        {/* Divider */}
        <div className={`mx-6 h-0.5 ${isHighlighted ? 'bg-gradient-to-r from-yellow-300 via-yellow-200 to-transparent' : 'bg-gradient-to-r from-cyan-400 via-purple-500 to-transparent'} mb-6`}></div>

        {/* Features Section */}
        <div className="px-6 pb-8 flex-grow">
          <h3 className={`text-sm font-black uppercase tracking-widest mb-6 ${isHighlighted ? 'text-yellow-100' : 'text-cyan-300'}`}>
            Features Includes
          </h3>
          <ul className="space-y-3.5">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition">
                <span className={`text-lg mt-0.5 flex-shrink-0 transform group-hover/item:scale-125 transition ${isHighlighted ? 'text-yellow-300' : 'text-cyan-400'}`}>✓</span>
                <span className={`text-sm font-semibold leading-relaxed ${isHighlighted ? 'text-blue-50 group-hover/item:text-yellow-100' : 'text-gray-300 group-hover/item:text-white'} transition`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Call Now Button */}
        <div className="px-6 pb-8">
          <button 
            onClick={() => window.location.href = 'tel:+918709472551'}
            className={`w-full py-4 px-6 rounded-xl font-bold text-base uppercase tracking-widest transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl relative overflow-hidden group/btn ${
            isHighlighted 
              ? 'bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 text-blue-900 hover:shadow-yellow-400/60' 
              : 'bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white hover:shadow-orange-500/60'
          }`}>
            {/* Animated background shine effect */}
            <div className={`absolute inset-0 ${isHighlighted ? 'bg-gradient-to-r from-transparent via-white/30 to-transparent' : 'bg-gradient-to-r from-transparent via-white/20 to-transparent'} transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500`}></div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>📞 Call Now</span>
              <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          {/* Additional CTA Text */}
          <p className={`text-xs font-semibold text-center mt-4 ${isHighlighted ? 'text-yellow-100' : 'text-gray-400'} uppercase tracking-wide`}>
            Get started in minutes
          </p>
        </div>
      </div>
    </div>
  )
}

const Technologies = () => {
  const plans = [
    {
      name: 'Standard',
      badge: 'Standard Plan',
      originalPrice: 10000,
      price: 7999,
      gst: '₹1440',
      features: [
        '5 Pages Website',
        '1 Year Free Domain (.com/.in/.org)',
        '1 Year Free Cloud Hosting',
        'Dynamic Website (Premium Design)',
        'Basic SEO Optimization',
        'Mobile Responsive Design',
        'Contact Form Integration',
        'Social Media Links'
      ]
    },
    {
      name: 'Premium',
      badge: 'Premium Plan',
      originalPrice: 20000,
      price: 13999,
      gst: '₹2520',
      features: [
        '12 Pages Website',
        '1 Year Free Domain (.com/.in/.org)',
        '1 Year Free Cloud Hosting',
        'Dynamic Website (Premium Design)',
        'Advanced SEO Optimization',
        'Mobile Responsive Design',
        'Annual Renewal Hosting ₹4000',
        'Email Integration',
        'Analytics Dashboard',
        'Advanced Security Features',
        'Priority Support',
        'Blog Section'
      ]
    },
    {
      name: 'Custom',
      badge: 'Custom Plan',
      originalPrice: null,
      price: '',
      gst: 'Applicable',
      features: [
        'Pages According to Requirement',
        '1 Year Free Domain',
        '1 Year Free Hosting',
        'Custom Features',
        'E-commerce Integration',
        'Payment Gateway Setup',
        'Custom Database Design',
        'Advanced Features',
        '24/7 Technical Support',
        'Custom Branding',
        'Ongoing Maintenance',
        'Training & Documentation'
      ]
    }
  ]

  return (
    <section id="technologies" className="py-20 px-4 bg-gradient-to-br from-slate-950 via-cyan-900 to-purple-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl bottom-0 right-0"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">Pricing</span> Plans
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8 rounded-full shadow-lg shadow-cyan-500/50"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-semibold">
            Choose the perfect plan that fits your business needs and budget. Get started with our affordable pricing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-8 mb-20">
          {plans.map((plan, index) => (
            <TechCardWrapper key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl"></div>
          <div className="relative overflow-hidden rounded-3xl p-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600">
            <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 rounded-[26px] p-12 md:p-16 backdrop-blur-xl border border-white/10">
              <div className="grid md:grid-cols-3 gap-12 text-center">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-cyan-500/10 rounded-2xl transform scale-0 group-hover:scale-100 transition duration-300"></div>
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition duration-300 transform">100+</div>
                    <p className="text-gray-300 font-bold uppercase tracking-wide group-hover:text-cyan-300 transition">Clients Worldwide</p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-purple-500/10 rounded-2xl transform scale-0 group-hover:scale-100 transition duration-300"></div>
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition duration-300 transform">500+</div>
                    <p className="text-gray-300 font-bold uppercase tracking-wide group-hover:text-purple-300 transition">Projects Delivered</p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-orange-500/10 rounded-2xl transform scale-0 group-hover:scale-100 transition duration-300"></div>
                  <div className="relative">
                    <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition duration-300 transform">10+</div>
                    <p className="text-gray-300 font-bold uppercase tracking-wide group-hover:text-orange-300 transition">Years of Experience</p>
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

export default Technologies
