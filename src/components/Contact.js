// 'use client'

// import React, { useState } from 'react'
// import useInView from '@/hooks/useInView'
// import { MapPin, Phone, Mail, Clock } from 'lucide-react'

// /* ================= CONTACT CARDS DATA ================= */
// const contactCards = [
//   {
//     title: "Address",
//     icon: MapPin,
//     content: "Chhatarpur, Madhya Pradesh - 471201, India"
//   },
//   {
//     title: "Phone",
//     icon: Phone,
//     content: "+91 9131558153"
//   },
//   {
//     title: "Email",
//     icon: Mail,
//     content: "stackmintslabs@gmail.com"
//   },
//   {
//     title: "Business Hours",
//     icon: Clock,
//     content: [
//       "Mon - Fri: 9:00 AM - 6:00 PM",
//       "Saturday: 10:00 AM - 4:00 PM",
//       "Sunday: Closed"
//     ]
//   }
// ]

// /* ================= CARD ================= */
// const ContactInfoCard = ({ card, index, isInView }) => {
//   const Icon = card.icon

//   return (
//     <div className="group perspective-[1200px]">
//       <div
//         className={`
//         tilt-card
//         relative p-6 rounded-2xl
//         bg-[#0b1220]
//         border border-white/10
//         shadow-[0_20px_60px_rgba(0,0,0,0.7)]
//         transition-all duration-500
//         group-hover:-translate-y-3
//         group-hover:shadow-[0_50px_100px_rgba(0,0,0,0.9)]

//         ${isInView ? "animate-scroll-up" : "opacity-0"}
//         ${isInView ? `animate-stagger-${(index % 6) + 1}` : ""}
//         `}
//       >
//         <div className="flex items-start gap-4">

//           {/* Icon */}
//           <div className="
//             w-14 h-14 rounded-xl flex items-center justify-center
//             bg-[#1e293b]
//             shadow-[0_10px_30px_rgba(0,0,0,0.9),
//                     inset_0_2px_6px_rgba(255,255,255,0.05)]
//             transition duration-500
//             group-hover:scale-110 group-hover:rotate-6
//           ">
//             <Icon size={26} className="text-cyan-400 group-hover:text-white transition" />
//           </div>

//           {/* Content */}
//           <div className="flex-1">
//             <h4 className="text-lg font-bold text-white mb-1">
//               {card.title}
//             </h4>

//             {Array.isArray(card.content) ? (
//               <div className="space-y-1 text-sm text-gray-400">
//                 {card.content.map((line, i) => (
//                   <p key={i}>{line}</p>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-gray-400 text-sm">
//                 {card.content}
//               </p>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// /* ================= WRAPPER ================= */
// const ContactInfoCardWrapper = ({ card, index }) => {
//   const [ref, isInView] = useInView()

//   return (
//     <div ref={ref}>
//       <ContactInfoCard card={card} index={index} isInView={isInView} />
//     </div>
//   )
// }

// /* ================= MAIN COMPONENT ================= */
// const Contact = () => {

//   const [lightOn, setLightOn] = useState(false)
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   })

//   const [status, setStatus] = useState({
//     type: '',
//     message: '',
//     loading: false
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setStatus({ type: '', message: '', loading: true })

//     try {
//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       })

//       const data = await res.json()

//       if (!res.ok) throw new Error(data?.error || 'Failed')

//       setStatus({
//         type: 'success',
//         message: 'Message sent successfully!',
//         loading: false
//       })

//       setFormData({ name: '', email: '', phone: '', message: '' })

//     } catch (err) {
//       setStatus({
//         type: 'error',
//         message: err.message,
//         loading: false
//       })
//     }
//   }

//   return (
//     <section className="py-20 px-4 bg-gradient-to-br from-slate-950 via-cyan-900 to-purple-950">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-black text-white mb-4">
//             Get In Touch
//           </h2>
//           <p className="text-gray-300">
//             Let’s build something amazing together
//           </p>
//         </div>




//         <div className="grid md:grid-cols-2 gap-12">



//           {/* FORM */}
//           {/* <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
//             <form onSubmit={handleSubmit} className="space-y-6">

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/20"
//                 required
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/20"
//                 required
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/20"
//               />

//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/20"
//                 required
//               />

//               <button
//                 type="submit"
//                 disabled={status.loading}
//                 className="w-full bg-cyan-500 py-3 rounded-xl font-bold hover:bg-cyan-400 transition"
//               >
//                 {status.loading ? "Sending..." : "Send Message"}
//               </button>

//               {status.message && (
//                 <p className="text-sm text-center mt-2">
//                   {status.message}
//                 </p>
//               )}
//             </form>
//           </div> */}

//           <div className="relative flex flex-col items-center w-full min-h-[650px]">

//             {/* Ceiling */}
//             <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10"></div>

//             {/* Center wrapper (IMPORTANT FIX) */}
//             <div className="flex flex-col items-center w-full max-w-lg mx-auto">

//               {/* Rope */}
//               <div
//                 onClick={() => setLightOn(prev => !prev)}
//                 className="cursor-pointer flex flex-col items-center group"
//               >
//                 <div className="w-[2px] h-32 bg-white/40"></div>

//                 <div className="
//         w-6 h-6 bg-white rounded-full shadow-xl
//         transition-all duration-200
//         group-active:translate-y-3
//       "></div>
//               </div>

//               {/* Lamp */}
//               <div className="relative flex flex-col items-center">

//                 {/* Light Cone (center fixed) */}
//                 <div className={`
//         absolute top-14 left-1/2 -translate-x-1/2
//         w-[360px] h-[260px]
//         bg-gradient-to-b from-yellow-300/40 via-yellow-200/10 to-transparent
//         blur-2xl transition-all duration-700
//         ${lightOn ? "opacity-100 scale-100" : "opacity-0 scale-75"}
//       `}></div>

//                 {/* Lamp Head */}
//                 <div className={`
//         w-28 h-16 rounded-b-full
//         shadow-xl
//         transition-all duration-500

//         ${lightOn
//                     ? "bg-yellow-300 shadow-yellow-300/50 animate-flicker"
//                     : "bg-gray-600"
//                   }
//       `}></div>

//               </div>

//               {/* FORM */}
//               <div className={`
//       mt-20 w-full
//       backdrop-blur-xl p-8 rounded-3xl border border-white/20
//       shadow-[0_20px_60px_rgba(0,0,0,0.6)]
//       transition-all duration-700

//       ${lightOn
//                   ? "opacity-100 translate-y-0 scale-100"
//                   : "opacity-0 translate-y-20 scale-90 pointer-events-none"
//                 }
//     `}>

//                 <form onSubmit={handleSubmit} className="space-y-6">

//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/20"
//                     required
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/20"
//                     required
//                   />

//                   <input
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/20"
//                   />

//                   <textarea
//                     name="message"
//                     placeholder="Message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full p-3 rounded-xl bg-white/5 text-white border border-white/20"
//                     required
//                   />

//                   <button
//                     type="submit"
//                     disabled={status.loading}
//                     className="w-full bg-cyan-500 py-3 rounded-xl font-bold hover:bg-cyan-400 transition"
//                   >
//                     {status.loading ? "Sending..." : "Send Message"}
//                   </button>

//                   {status.message && (
//                     <p className="text-sm text-center mt-2">
//                       {status.message}
//                     </p>
//                   )}

//                 </form>
//               </div>

//             </div>
//           </div>
//           {/* CONTACT INFO */}
//           <div className="space-y-6">
//             {contactCards.map((card, index) => (
//               <ContactInfoCardWrapper key={index} card={card} index={index} />
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact




'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Send, MapPin, Phone, Mail, Clock, Sparkles, ArrowRight, CheckCircle, AlertCircle, User, MessageCircle } from 'lucide-react'
import * as THREE from 'three'
/* ================= CONTACT CARDS DATA ================= */
const contactCards = [
  {
    title: "Visit Studio",
    icon: MapPin,
    content: "Chhatarpur, Madhya Pradesh - 471201, India",
    subtext: "Come say hello 👋",
    gradient: "from-cyan-500/20 to-blue-500/20",
    color: "#06b6d4"
  },
  {
    title: "Phone",
    icon: Phone,
    content: "+91 9131558153",
    subtext: "Mon-Fri: 9AM - 6PM",
    gradient: "from-purple-500/20 to-pink-500/20",
    color: "#a855f7"
  },
  {
    title: "Email",
    icon: Mail,
    content: "stackmintslabs@gmail.com",
    subtext: "24/7 responded within 2h",
    gradient: "from-orange-500/20 to-red-500/20",
    color: "#f97316"
  },
  {
    title: "Business Hours",
    icon: Clock,
    content: [
      "Mon - Fri: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed"
    ],
    subtext: "Let's connect",
    gradient: "from-green-500/20 to-emerald-500/20",
    color: "#10b981"
  }
]

/* ================= 3D SCENE COMPONENT ================= */
const ThreeScene = () => {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const particlesRef = useRef(null)
  const torusKnotRef = useRef(null)
  const spheresRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current) return

    // Setup Three.js
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x03050b)
    scene.fog = new THREE.FogExp2(0x03050b, 0.002)
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
    camera.position.set(0, 2, 12)
    camera.lookAt(0, 0, 0)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.toneMapping = THREE.ReinhardToneMapping
    renderer.toneMappingExposure = 1.2
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x111122)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 1)
    mainLight.position.set(2, 5, 3)
    scene.add(mainLight)

    const backLight = new THREE.PointLight(0x22aaff, 0.5)
    backLight.position.set(-2, 3, -4)
    scene.add(backLight)

    const fillLight = new THREE.PointLight(0xff44aa, 0.3)
    fillLight.position.set(3, 1, 2)
    scene.add(fillLight)

    const rimLight = new THREE.PointLight(0x44aaff, 0.8)
    rimLight.position.set(2, 2, 5)
    scene.add(rimLight)

    // Animated lights
    const movingLight = new THREE.PointLight(0x44ccff, 0.6)
    movingLight.position.set(3, 2, 3)
    scene.add(movingLight)

    // Main Centerpiece: Animated Torus Knot
    const geometry = new THREE.TorusKnotGeometry(1.1, 0.28, 180, 24, 3, 4)
    const material = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x0a4c66,
      emissiveIntensity: 0.5,
      metalness: 0.85,
      roughness: 0.25,
      flatShading: false
    })
    const torusKnot = new THREE.Mesh(geometry, material)
    scene.add(torusKnot)
    torusKnotRef.current = torusKnot

    // Inner glowing core
    const coreGeometry = new THREE.IcosahedronGeometry(0.45, 0)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x22ddff,
      emissive: 0x2288aa,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.1
    })
    const coreSphere = new THREE.Mesh(coreGeometry, coreMaterial)
    scene.add(coreSphere)

    // Particle System - Floating particles around the knot
    const particleCount = 2500
    const particlesGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      // Spherical distribution
      const radius = 1.8 + Math.random() * 1.2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.8
      positions[i * 3 + 2] = radius * Math.cos(phi)

      // Colors based on position
      const color = new THREE.Color().setHSL(0.55 + Math.random() * 0.2, 0.8, 0.6)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(particlesGeometry, particleMaterial)
    scene.add(particles)
    particlesRef.current = particles

    // Floating orbs (8 spheres around)
    const spheres = []
    const orbColors = [0x22d3ee, 0xa855f7, 0xf97316, 0x10b981, 0xef4444, 0x8b5cf6, 0xec4899, 0x06b6d4]
    for (let i = 0; i < 8; i++) {
      const sphereGeo = new THREE.SphereGeometry(0.08, 16, 16)
      const sphereMat = new THREE.MeshStandardMaterial({
        color: orbColors[i % orbColors.length],
        emissive: orbColors[i % orbColors.length],
        emissiveIntensity: 0.4,
        metalness: 0.9
      })
      const sphere = new THREE.Mesh(sphereGeo, sphereMat)
      const angle = (i / 8) * Math.PI * 2
      const radius = 2.2
      sphere.userData = {
        angle: angle,
        radius: radius,
        speed: 0.005,
        yOffset: Math.sin(angle * 2) * 0.5
      }
      sphere.position.x = Math.cos(angle) * radius
      sphere.position.z = Math.sin(angle) * radius
      sphere.position.y = Math.sin(angle * 2) * 0.5
      scene.add(sphere)
      spheres.push(sphere)
    }
    spheresRef.current = spheres

    // Starfield background
    const starCount = 1500
    const starGeometry = new THREE.BufferGeometry()
    const starPositions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 200
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 80 - 40
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })
    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Rotating rings
    const ringGeometry = new THREE.TorusGeometry(1.45, 0.02, 64, 300)
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.3,
      metalness: 0.9
    })
    const ring1 = new THREE.Mesh(ringGeometry, ringMaterial)
    ring1.rotation.x = Math.PI / 2
    scene.add(ring1)

    const ringGeometry2 = new THREE.TorusGeometry(1.65, 0.015, 64, 300)
    const ringMaterial2 = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 0.2
    })
    const ring2 = new THREE.Mesh(ringGeometry2, ringMaterial2)
    ring2.rotation.z = Math.PI / 3
    ring2.rotation.x = Math.PI / 3
    scene.add(ring2)

    // Mouse move handler
    const handleMouseMove = (event) => {
      const rect = containerRef.current.getBoundingClientRect()
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      mouseRef.current.y = ((event.clientY - rect.top) / rect.height) * 2 - 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation Loop
    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      timeRef.current += 0.012

      // Rotate main torus knot
      if (torusKnotRef.current) {
        torusKnotRef.current.rotation.x = timeRef.current * 0.3
        torusKnotRef.current.rotation.y = timeRef.current * 0.5
        torusKnotRef.current.rotation.z = timeRef.current * 0.2
      }

      // Rotate core sphere
      if (coreSphere) {
        coreSphere.rotation.x = timeRef.current * 0.5
        coreSphere.rotation.y = timeRef.current * 0.7
      }

      // Animate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y = timeRef.current * 0.05
        particlesRef.current.rotation.x = Math.sin(timeRef.current * 0.2) * 0.1
      }

      // Animate floating spheres
      spheresRef.current.forEach((sphere, idx) => {
        const data = sphere.userData
        data.angle += data.speed
        sphere.position.x = Math.cos(data.angle) * data.radius
        sphere.position.z = Math.sin(data.angle) * data.radius
        sphere.position.y = Math.sin(data.angle * 2) * 0.6 + Math.sin(timeRef.current * 2) * 0.1
        sphere.scale.setScalar(1 + Math.sin(timeRef.current * 5 + idx) * 0.2)
      })

      // Rotate rings
      if (ring1) {
        ring1.rotation.z = timeRef.current * 0.2
        ring2.rotation.y = timeRef.current * 0.15
        ring2.rotation.x = Math.PI / 3 + Math.sin(timeRef.current * 0.3) * 0.1
      }

      // Animate moving light
      movingLight.position.x = 3 + Math.sin(timeRef.current) * 1.5
      movingLight.position.z = 3 + Math.cos(timeRef.current * 1.3) * 1.5
      movingLight.intensity = 0.6 + Math.sin(timeRef.current * 2) * 0.2

      // Camera movement based on mouse
      const targetX = mouseRef.current.x * 0.5
      const targetY = mouseRef.current.y * 0.3
      camera.position.x += (targetX - camera.position.x) * 0.05
      camera.position.y += (-targetY - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)

      // Starfield rotation
      stars.rotation.y = timeRef.current * 0.01
      stars.rotation.x = timeRef.current * 0.005

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationId)
      if (containerRef.current && rendererRef.current?.domElement) {
        containerRef.current.removeChild(rendererRef.current.domElement)
      }
      // Dispose geometries and materials
      geometry.dispose()
      material.dispose()
      particlesGeometry.dispose()
      particleMaterial.dispose()
      starGeometry.dispose()
      starMaterial.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{ background: 'radial-gradient(circle at center, #0a1220 0%, #03050b 100%)' }}
    />
  )
}

/* ================= 3D CARD COMPONENT ================= */
const ContactInfoCard = ({ card, index, isInView }) => {
  const Icon = card.icon
  const cardRef = useRef(null)

  useEffect(() => {
    if (!cardRef.current) return

    const handleMouseMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 15
      const rotateY = (centerX - x) / 15

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
    }

    const handleMouseLeave = () => {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    }

    const card = cardRef.current
    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-2xl p-6
        bg-gradient-to-br ${card.gradient}
        backdrop-blur-xl
        border border-white/10
        transition-all duration-700 ease-out
        cursor-pointer
        ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-xl blur-xl animate-pulse" />
            <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Icon size={26} className="text-cyan-400" />
            </div>
          </div>

          <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-2">
              {card.title}
            </h4>

            {Array.isArray(card.content) ? (
              <div className="space-y-1 text-sm text-gray-300">
                {card.content.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ) : (
              <>
                <p className="text-gray-300 text-base font-medium">
                  {card.content}
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  {card.subtext}
                </p>
              </>
            )}
          </div>

          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowRight size={20} className="text-cyan-400" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </div>
  )
}

/* ================= MAIN CONTACT COMPONENT ================= */
const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    // Simulate API call - Replace with your actual endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))

      console.log('Form submitted:', formData)

      setStatus({
        type: 'success',
        message: '✨ Message sent successfully! Our cosmic team will contact you soon.'
      })

      setFormData({ name: '', email: '', phone: '', message: '' })

      setTimeout(() => {
        setStatus({ type: '', message: '' })
      }, 5000)
    } catch (error) {
      setStatus({
        type: 'error',
        message: '❌ Something went wrong. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen py-24 px-4 overflow-hidden">
      {/* 3D Background Scene */}
      <ThreeScene />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`
          text-center mb-16 transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
        `}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 mb-6">
            <Sparkles size={16} className="text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Cosmic Connection</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's Create
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              {' '}Magic Together
            </span>
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto backdrop-blur-sm">
            Ready to transform your ideas into reality? We're just a message away.
            Let's build something extraordinary.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className={`
            transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
          `}>
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
                  <MessageCircle size={16} className="text-cyan-400" />
                  <span className="text-cyan-400 text-sm font-medium">Quantum Communication</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Send a Message
                </h3>
                <p className="text-gray-400 text-sm">
                  Fill the form and our team will get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <div className="relative">
                    <MessageCircle size={18} className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="relative w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </button>

                {status.message && (
                  <div className={`
                    flex items-center gap-2 p-3 rounded-xl backdrop-blur-sm
                    ${status.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                      : 'bg-red-500/20 border border-red-500/30 text-red-400'
                    }
                  `}>
                    {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                    <span className="text-sm">{status.message}</span>
                  </div>
                )}
              </form>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex justify-center gap-6 text-xs text-gray-500">
                  <span className="flex items-center gap-1">🔒 256-bit SSL Secure</span>
                  <span className="flex items-center gap-1">⚡ 24/7 Support</span>
                  <span className="flex items-center gap-1">🌟 100% Privacy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Cards Section */}
          <div className={`
            space-y-4 transition-all duration-1000 delay-600
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
          `}>
            {/* <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-between">
                <div className="text-center flex-1">
                  <p className="text-cyan-400 text-2xl font-bold">24/7</p>
                  <p className="text-gray-400 text-sm">Response Time</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center flex-1">
                  <p className="text-cyan-400 text-2xl font-bold">100+</p>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center flex-1">
                  <p className="text-cyan-400 text-2xl font-bold">50+</p>
                  <p className="text-gray-400 text-sm">Clients</p>
                </div>
              </div>
            </div> */}

            {contactCards.map((card, index) => (
              <ContactInfoCard
                key={index}
                card={card}
                index={index}
                isInView={isVisible}
              />
            ))}

            {/* <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 text-center">
              <p className="text-white text-sm">
                🚀 Need immediate assistance?
                <button className="ml-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  Start Live Chat
                </button>
              </p>
            </div> */}
          </div>
        </div>


      </div>
    </section>
  )
}

export default Contact