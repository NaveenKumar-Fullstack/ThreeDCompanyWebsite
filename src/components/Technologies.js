'use client'

import React from 'react'
import useInView from '@/hooks/useInView'
import { Users, Briefcase, Trophy, Check, Crown, Rocket, Settings } from "lucide-react"
import { useCounter } from "./useCounter"

const TechCardWrapper = ({ plan, index }) => {
  const [ref, isInView] = useInView()
  return (
    <div ref={ref}>
      <TechCard plan={plan} index={index} isInView={isInView} />
    </div>
  )
}



const TechCard = ({ plan, index, isInView }) => {
  const isHighlighted = plan.name === "Premium"

  const getIcon = () => {
    if (plan.name === "Premium") return Crown
    if (plan.name === "Standard") return Rocket
    return Settings
  }

  const Icon = getIcon()

  return (
    <div className="group perspective-[1200px]">

      <div
        className={`
        tilt-card
        relative p-8 rounded-2xl
        bg-[#0b1220]
        border border-white/10
        shadow-[0_20px_60px_rgba(0,0,0,0.7)]
        transition-all duration-500
        group-hover:-translate-y-4
        group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.9)]
        flex flex-col h-full
        ${isInView ? "animate-scroll-up" : "opacity-0"}
        ${isInView ? `animate-stagger-${(index % 6) + 1}` : ""}
        `}
      >

        {/* Premium Glow */}
        {isHighlighted && (
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400/10 via-transparent to-orange-400/10 pointer-events-none"></div>
        )}

        {/* Icon */}
        <div className="flex justify-between items-center mb-6">
          <div className="
            w-14 h-14 rounded-xl flex items-center justify-center
            bg-[#1e293b]
            shadow-[0_10px_30px_rgba(0,0,0,0.9),
                    inset_0_2px_6px_rgba(255,255,255,0.05)]
            transition duration-500
            group-hover:scale-110 group-hover:rotate-6
          ">
            <Icon className={`${isHighlighted ? "text-yellow-400" : "text-cyan-400"}`} size={26} />
          </div>

          {isHighlighted && (
            <span className="text-xs font-bold text-yellow-300 border border-yellow-400/40 px-3 py-1 rounded-full">
              BEST
            </span>
          )}
        </div>

        {/* Plan Name */}
        <h3 className="text-2xl font-bold text-white mb-2">
          {plan.name}
        </h3>

        {/* Price */}
        <div className="mb-6">
          {plan.originalPrice && (
            <p className="text-gray-500 line-through text-sm">
              ₹{plan.originalPrice.toLocaleString()}
            </p>
          )}

          <div className="text-4xl font-black text-white">
            {typeof plan.price === "number" ? `₹${plan.price}` : "Custom"}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/10 mb-6"></div>

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-grow">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 group/item">
              <Check
                size={18}
                className={`${isHighlighted ? "text-yellow-400" : "text-cyan-400"} mt-1`}
              />
              <span className="text-gray-300 text-sm group-hover/item:text-white transition">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button
          onClick={() => window.location.href = 'tel:+918709472551'}
          className={`
            py-4 rounded-xl font-bold transition duration-300
            ${isHighlighted
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-cyan-500 text-white hover:bg-cyan-400"}
          `}
        >
          Get Started →
        </button>

      </div>
    </div>
  )
}


const StatCard = ({ icon: Icon, value, label }) => {
  const [ref, isInView] = useInView()
  const count = useCounter(value, isInView)

  return (
    <div ref={ref} className="group perspective-[1200px]">

      <div className="
        tilt-card
        relative p-8 rounded-2xl
        bg-[#0f172a]
        border border-white/10
        shadow-[0_20px_50px_rgba(0,0,0,0.6)]
        transition-all duration-500
        group-hover:-translate-y-3
        group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.9)]
        text-center
      ">

        {/* Icon */}
        <div className="mb-4 flex justify-center">
          <div className="
            w-14 h-14 flex items-center justify-center rounded-xl
            bg-[#1e293b]
            shadow-[0_10px_25px_rgba(0,0,0,0.8),
                    inset_0_2px_4px_rgba(255,255,255,0.05)]
          ">
            <Icon size={26} className="text-cyan-400" />
          </div>
        </div>

        {/* Counter */}
        <div className="text-5xl font-black text-white mb-2">
          {count}+
        </div>

        {/* Label */}
        <p className="text-gray-400 font-semibold tracking-wide">
          {label}
        </p>

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
              <div className="grid md:grid-cols-3 gap-8">
                <StatCard icon={Users} value={100} label="Clients Worldwide" />
                <StatCard icon={Briefcase} value={500} label="Projects Delivered" />
                <StatCard icon={Trophy} value={10} label="Years Experience" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technologies
