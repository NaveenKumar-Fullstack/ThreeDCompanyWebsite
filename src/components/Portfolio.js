'use client'

import React, { useEffect, useRef, useState } from 'react'

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollerRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: '/image/e-commarce.jpeg',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: 'Next.js, Node.js, MongoDB, Stripe',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      image: '/image/fitness.jpg',
      description: 'Cross-platform fitness and health tracking application',
      tech: 'React Native, Firebase, Redux',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'Web Development',
      image: '/image/admin-dashboard.jpg',
      description: 'Real-time business analytics and reporting dashboard',
      tech: 'React, D3.js, PostgreSQL, AWS',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      id: 4,
      title: 'Social Media App',
      category: 'Mobile Development',
      image: '/image/SocialMedia.jpg',
      description: 'Feature-rich social networking mobile application',
      tech: 'Flutter, Firebase, Cloud Storage',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 5,
      title: 'CMS Platform',
      category: 'Web Development',
      image: '/image/cms.jpg',
      description: 'Custom content management system for enterprises',
      tech: 'Next.js, TypeScript, Headless CMS',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 6,
      title: 'AI Chatbot Integration',
      category: 'IT Solutions',
      image: '/image/ChatBot.jpg',
      description: 'Intelligent chatbot with AI/ML capabilities',
      tech: 'Python, TensorFlow, Node.js, WebSocket',
      gradient: 'from-yellow-600 to-orange-600'
    },{
      id: 7,
      title: 'WashHub car wash',
      category: 'Web Development',
      image: '/image/WashHub.png',
      description: 'Comprehensive car wash service platform with booking and management features',
      tech: 'React, Node.js, MongoDB, Next.js',
      gradient: 'from-teal-600 to-blue-900'
    },{
      id: 8,
      title:'Foodies',
      category:'Web Development',
      image:'/image/Foodies.jpeg',
      description:'A dynamic food delivery platform connecting users with local restaurants for quick and easy meal orders.',
      tech:'Spring Boot, React, MongoDB, Cloudinary, JWT',
      gradient:'from-red-600 to-yellow-600'
    },{
      id: 9,
      title:'WeatherApp',
      category:'Mobile Development',
      image:'/image/WeatherApp.jpeg',
      description:'A mobile application providing real-time weather updates and forecasts with an intuitive user interface.',
      tech:'kotlin, OpenWeatherMap API, android studio',
      gradient:'from-blue-600 to-indigo-600'
    },{
      id: 10,
      title:'InterviewApp',
      category:'Web Development',
      image:'/image/interview.jpg',
      description:'A web application designed to facilitate mock interviews and provide feedback for job seekers.',
      tech:'NodeJS, React, MongoDB, JWT',
      gradient:'from-green-600 to-teal-600'
    },{
      id: 11,
      title:'Blogify',
      category:'Web Development',
      image:'/image/Blogify.png',
      description:'A blogging platform that allows users to create, share, and engage with content.',
      tech:'NodeJS, React, MongoDB, JWT',
      gradient:'from-pink-600 to-red-400'
    },{
      id: 12,
      title:'WonderLust',
      category:'Web Development',
      image:'/image/WonderLust.jpeg',
      description:'A travel booking platform offering personalized trip planning and reservations.',
      tech:'React, MongoDB, ExpressJS, EJS',
      gradient:'from-purple-600 to-pink-700'
    }
  ]

  const scrollByCard = (direction) => {
    const container = scrollerRef.current
    if (!container || !container.firstChild) return
    const gap = 24
    const cardWidth = container.firstChild.getBoundingClientRect().width
    container.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' })
  }

  const scrollToProject = (index) => {
    const container = scrollerRef.current
    if (!container || !container.children[index]) return
    const target = container.children[index]
    container.scrollTo({ left: target.offsetLeft - container.offsetLeft, behavior: 'smooth' })
    setCurrentIndex(index)
  }

  useEffect(() => {
    const container = scrollerRef.current
    if (!container) return

    const handleScroll = () => {
      if (!container.firstChild) return
      const gap = 24
      const cardWidth = container.firstChild.getBoundingClientRect().width
      const idx = Math.round(container.scrollLeft / (cardWidth + gap))
      const boundedIndex = Math.min(projects.length - 1, Math.max(0, idx))
      setCurrentIndex(boundedIndex)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [projects.length])

  return (
    <section id="portfolio" className="relative overflow-hidden bg-slate-950 py-20 px-4">
      <div className="absolute inset-0 opacity-80" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(168,85,247,0.18),transparent_32%),radial-gradient(circle_at_50%_80%,rgba(45,212,191,0.16),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 text-center md:mb-16">
          <span className="mx-auto rounded-full bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300 ring-1 ring-white/10">
            Portfolio Spotlight
          </span>
          <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">Recent Projects</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-200 md:text-xl">
            Fewer, stronger cards with a clean layout so your work reads well on mobile and desktop.
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between gap-4 pb-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              {currentIndex + 1} / {projects.length}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => scrollByCard(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-cyan-200 hover:shadow-[0_10px_35px_rgba(14,165,233,0.35)]"
                aria-label="Previous project"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollByCard(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-0.5 hover:border-purple-300/50 hover:text-purple-200 hover:shadow-[0_10px_35px_rgba(168,85,247,0.35)]"
                aria-label="Next project"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pr-4 sm:gap-7 md:gap-8"
            style={{ scrollbarWidth: 'none' }}
          >
            {projects.map((project, idx) => (
                <div key={project.id} className="min-w-[88%] snap-start sm:min-w-[70%] md:min-w-[55%] lg:min-w-[32%]" style={{maxWidth: '100vw'}}>
                  <style jsx>{`
                    @media (max-width: 600px) {
                      .portfolio-card-fix {
                        min-width: 96vw !important;
                        max-width: 100vw !important;
                      }
                    }
                  `}</style>
                  <div className="portfolio-card-fix">
                <PortfolioCard project={project} index={idx} />
                  </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToProject(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-gradient-to-r from-cyan-400 to-purple-500'
                    : 'w-2.5 bg-white/20 hover:bg-white/35'
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const PortfolioCard = ({ project, index }) => {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-white/5 bg-white/5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_30px_90px_rgba(14,165,233,0.35)]">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-30`} aria-hidden="true" />

      <div className="relative flex h-full flex-col gap-5 p-6 md:p-7">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
          <span className="rounded-full bg-white/10 px-3 py-1 text-cyan-100 ring-1 ring-white/10">{project.category}</span>
          <span className="text-white/60">{String(index + 1).padStart(2, '0')}</span>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-25`} />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-black leading-snug text-white md:text-2xl">{project.title}</h3>
          <p className="text-sm leading-relaxed text-slate-200 md:text-base">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.split(', ').map((t, idx) => (
            <span
              key={idx}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 transition duration-200 group-hover:border-white/30 group-hover:bg-white/15"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
