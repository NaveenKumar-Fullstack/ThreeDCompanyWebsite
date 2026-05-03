// // // 'use client'

// // // import React from 'react'
// // // import ThreeDHero from './ThreeDHero'

// // // const Hero = () => {
// // //   return (
// // //     <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-20 px-4 bg-gradient-to-br from-slate-950 via-cyan-900 to-purple-950 relative overflow-hidden min-h-screen flex items-center">
// // //       {/* Three.js Background */}
// // //       <div className="absolute inset-0">
// // //         <ThreeDHero />
// // //       </div>

// // //       {/* Animated background elements - Optimized for mobile */}
// // //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// // //         <div className="absolute w-64 md:w-96 h-64 md:h-96 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-20 md:opacity-30 md:animate-pulse"></div>
// // //         <div className="absolute w-64 md:w-96 h-64 md:h-96 bg-[#8B5CF6] rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-20 md:opacity-30 md:animate-pulse" style={{ animationDelay: '2s' }}></div>
// // //         <div className="absolute w-64 md:w-96 h-64 md:h-96 bg-[#EC4899] rounded-full mix-blend-multiply filter blur-xl md:blur-3xl opacity-20 md:opacity-30 md:animate-pulse" style={{ animationDelay: '4s' }}></div>
// // //       </div>

// // //       <div className="max-w-7xl mx-auto relative z-10 w-full">
// // //         <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
// // //           <div>
// // //             <div className="inline-block mb-4 md:mb-6 px-3 md:px-4 py-2 bg-[#0EA5E9]/20 border border-[#0EA5E9] rounded-full">
// // //               <span className="text-[#06B6D4] text-xs md:text-sm font-semibold">✨ Welcome to Stack Mits Lab</span>
// // //             </div>
// // //             <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
// // //               Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] via-[#8B5CF6] to-[#EC4899]">Excellence</span>
// // //             </h1>
// // //             <p className="text-sm sm:text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
// // //               Transform your vision into reality with cutting-edge IT solutions, stunning web experiences, and powerful mobile applications.
// // //             </p>
// // //             <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
// // //               <a href="/contact" className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#F97316] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg hover:shadow-2xl hover:shadow-[#EC4899]/60 transform hover:scale-105 transition duration-300 text-center">
// // //                 Start Project →
// // //               </a>
// // //               <a href="/portfolio" className="border-2 border-[#06B6D4] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-[#06B6D4]/20 hover:border-[#06B6D4] transition duration-300 backdrop-blur">
// // //                 Watch Demo
// // //               </a>
// // //             </div>
// // //           </div>

// // //           <div className="relative h-64 sm:h-80 md:h-96 hidden md:block">
// // //             <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/30 to-[#EC4899]/30 rounded-3xl blur-2xl"></div>
// // //             <div className="relative grid grid-cols-2 gap-4 md:gap-6 h-full">
// // //               <div className="flex flex-col gap-4 md:gap-6">
// // //                 <div className="bg-gradient-to-br from-[#0EA5E9]/40 to-[#06B6D4]/30 backdrop-blur-xl p-4 md:p-6 rounded-2xl border-2 border-[#06B6D4]/50 hover:border-[#06B6D4] hover:shadow-lg hover:shadow-[#06B6D4]/50 transition h-1/2 overflow-hidden relative">
// // //                   <img src="/image/project-delivered.jpg" alt="Fast Delivery" className="absolute inset-0 w-full h-full object-cover opacity-70" />
// // //                   <div className="relative z-10">
// // //                     <div className="text-3xl md:text-4xl font-black text-white drop-shadow-lg" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>100+</div>
// // //                     <div className="text-white font-bold text-xs md:text-xl mt-2 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Projects Delivered</div>
// // //                   </div>
// // //                 </div>
// // //                 <div className="bg-gradient-to-br from-[#8B5CF6]/40 to-[#A855F7]/30 backdrop-blur-xl p-4 md:p-6 rounded-2xl border-2 border-[#8B5CF6]/50 hover:border-[#8B5CF6] hover:shadow-lg hover:shadow-[#8B5CF6]/50 transition h-1/2 overflow-hidden relative">
// // //                   <img src="/image/happy-customber.jpg" alt="Happy Clients" className="absolute inset-0 w-full h-full object-cover opacity-70" />
// // //                   <div className="relative z-10">
// // //                     <div className="text-3xl md:text-4xl font-black text-white drop-shadow-lg" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>50+</div>
// // //                     <div className="text-white font-bold text-xs md:text-xl mt-2 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Happy Clients</div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //               <div className="flex flex-col gap-4 md:gap-6">
// // //                 <div className="bg-gradient-to-br from-[#EC4899]/40 to-[#F472B6]/30 backdrop-blur-xl p-4 md:p-6 rounded-2xl border-2 border-[#EC4899]/50 hover:border-[#EC4899] hover:shadow-lg hover:shadow-[#EC4899]/50 transition h-1/2 overflow-hidden relative">
// // //                   <img src="/image/journey.jpg" alt="Years Journey" className="absolute inset-0 w-full h-full object-cover opacity-70" />
// // //                   <div className="relative z-10">
// // //                     <div className="text-3xl md:text-4xl font-black text-white drop-shadow-lg" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>10+</div>
// // //                     <div className="text-white font-bold text-xs md:text-xl mt-2 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Years Journey</div>
// // //                   </div>
// // //                 </div>
// // //                 <div className="bg-gradient-to-br from-[#F97316]/40 to-[#FB923C]/30 backdrop-blur-xl p-4 md:p-6 rounded-2xl border-2 border-[#F97316]/50 hover:border-[#F97316] hover:shadow-lg hover:shadow-[#F97316]/50 transition h-1/2 overflow-hidden relative">
// // //                   <img src="/image/fast-delievery.jpg" alt="Fast Delivery" className="absolute inset-0 w-full h-full object-cover opacity-70" />
// // //                   <div className="relative z-10">
// // //                     <div className="text-2xl md:text-3xl drop-shadow-lg">⚡</div>
// // //                     <div className="text-white font-bold text-xs md:text-xl mt-2 drop-shadow-lg" >Fast Delivery</div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // export default Hero



// // 'use client'

// // import React from 'react'
// // import ThreeDHero from './ThreeDHero'
// // import ThreeDRobot from '@/app/home/ThreeDRobot'

// // const faces = [
// //   {
// //     title: 'Projects Delivered',
// //     value: '100+',
// //     img: '/image/project-delivered.jpg'
// //   },
// //   {
// //     title: 'Happy Clients',
// //     value: '50+',
// //     img: '/image/happy-customber.jpg'
// //   },
// //   {
// //     title: 'Years Journey',
// //     value: '10+',
// //     img: '/image/journey.jpg'
// //   },
// //   {
// //     title: 'Fast Delivery',
// //     value: '⚡',
// //     img: '/image/fast-delievery.jpg'
// //   }
// // ]


// // const Hero = () => {
// //   return (
// //     <section className="relative min-h-screen flex items-center bg-[#05070d] overflow-hidden px-4 pt-24">

// //       {/* OPTIONAL subtle background glow */}
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)]" />

// //       <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

// //         {/* 🔥 LEFT CONTENT */}
// //         <div>
// //           <span className="px-4 py-2 text-sm bg-white/10 border border-white/10 rounded-full text-cyan-300">
// //             ✨ Welcome to Stack Mints Lab
// //           </span>

// //           <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-white">
// //             Build <br />
// //             <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
// //               Digital Products
// //             </span>
// //           </h1>

// //           <p className="mt-6 text-gray-400 text-lg max-w-xl">
// //             We create stunning web experiences, scalable apps, and modern digital solutions.
// //           </p>

// //           <div className="mt-8 flex gap-4 flex-wrap">
// //             <a
// //               href="/contact"
// //               className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
// //             >
// //               Start Project →
// //             </a>

// //             <a
// //               href="/portfolio"
// //               className="border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/10 transition"
// //             >
// //               View Work
// //             </a>
// //           </div>
// //         </div>

// //         {/* 🤖 RIGHT SIDE ROBOT */}
// //         <div className="relative h-[500px] md:h-[600px] w-full">

// //           {/* Glow effect */}
// //           <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 blur-3xl rounded-full pointer-events-none" />

// //           {/* Glow under feet */}
// //           <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-32 h-6 bg-cyan-400/20 blur-xl rounded-full pointer-events-none" />

// //           <ThreeDRobot />
// //         </div>

// //       </div>
// //     </section>
// //   )
// // }

// // export default Hero

// // // const Hero = () => {
// // //   return (
// // //     <section className="relative min-h-screen flex items-center bg-[#05070d] overflow-hidden px-4 pt-24">

// // //       {/* 3D Background */}
// // //       <div className="absolute inset-0">
// // //         <ThreeDHero />
// // //       </div>

// // //       <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

// // //         {/* LEFT */}
// // //         <div>
// // //           <h1 className="text-5xl md:text-7xl font-bold text-white">
// // //             Build <br />
// // //             <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
// // //               Digital Products
// // //             </span>
// // //           </h1>
// // //         </div>

// // //         {/* RIGHT - 3D CUBE */}
// // //         <div className="hidden md:flex justify-center items-center perspective-[1200px]">

// // //           <div className="cube-container">

// // //             <div className="cube">

// // //               {/* FRONT */}
// // //               <div className="cube-face front">
// // //                 <Card {...faces[0]} />
// // //               </div>

// // //               {/* RIGHT */}
// // //               <div className="cube-face right">
// // //                 <Card {...faces[1]} />
// // //               </div>

// // //               {/* BACK */}
// // //               <div className="cube-face back">
// // //                 <Card {...faces[2]} />
// // //               </div>

// // //               {/* LEFT */}
// // //               <div className="cube-face left">
// // //                 <Card {...faces[3]} />
// // //               </div>

// // //             </div>
// // //           </div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }

// // // export default Hero

// // const Card = ({ title, value, img }) => (
// //   <div className="relative w-full h-full rounded-2xl overflow-hidden

// //   /* less transparent + solid glass */
// //   bg-white/10 backdrop-blur-2xl border border-white/20

// //   /* stronger shadow = depth */
// //   shadow-[0_25px_80px_rgba(0,0,0,0.8)]

// //   /* 3D feel */
// //   transform-gpu [transform-style:preserve-3d]
// //   ">

// //     {/* IMAGE (background depth) */}
// //     <img
// //       src={img}
// //       className="absolute inset-0 w-full h-full object-cover
// //       opacity-70
// //       [transform:translateZ(-20px)_scale(1.1)]"
// //     />

// //     {/* DARK OVERLAY (readability + premium) */}
// //     <div className="absolute inset-0 bg-black/40 [transform:translateZ(0px)]"></div>

// //     {/* GLASS LIGHT */}
// //     <div className="absolute inset-0 rounded-2xl
// //     bg-gradient-to-tr from-white/20 via-transparent to-white/10
// //     opacity-60
// //     [transform:translateZ(10px)]"></div>

// //     {/* INNER GLOW */}
// //     <div className="absolute inset-0 rounded-2xl
// //     shadow-[inset_0_0_40px_rgba(255,255,255,0.08)]
// //     [transform:translateZ(5px)]"></div>

// //     {/* CONTENT (front layer) */}
// //     <div className="relative z-10 p-6 text-white
// //     [transform:translateZ(40px)]">

// //       <div
// //         className="relative z-10 p-6 text-white
// //   [transform:translateZ(50px)] flex flex-col justify-end h-full"
// //       >

// //         {/* VALUE */}
// //         <div className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-2xl">
// //           {value}
// //         </div>

// //         {/* TITLE */}
// //         <div className="mt-2 text-base md:text-lg font-semibold text-gray-200 tracking-wide">
// //           {title}
// //         </div>

// //       </div>

// //     </div>

// //   </div>
// // )






// 'use client'

// import React, { useEffect, useRef } from 'react'
// import ThreeDHero from './ThreeDHero'
// import ThreeDRobot from '@/app/home/ThreeDRobot'

// const faces = [
//   { title: 'Projects Delivered', value: '100+', img: '/image/project-delivered.jpg', color: '#06b6d4' },
//   { title: 'Happy Clients', value: '50+', img: '/image/happy-customber.jpg', color: '#a855f7' },
//   { title: 'Years Journey', value: '10+', img: '/image/journey.jpg', color: '#ec4899' },
//   { title: 'Fast Delivery', value: '⚡', img: '/image/fast-delievery.jpg', color: '#f97316' }
// ]

// const Card = ({ title, value, img, color }) => (
//   <div style={{
//     position: 'relative',
//     width: '100%',
//     height: '100%',
//     borderRadius: 20,
//     overflow: 'hidden',
//     border: `1.5px solid ${color}55`,
//     boxShadow: `0 0 30px ${color}33, inset 0 0 20px rgba(0,0,0,0.5)`,
//     background: 'rgba(0,0,0,0.6)',
//     backdropFilter: 'blur(12px)',
//   }}>
//     {/* Background image */}
//     <img src={img} alt={title} style={{
//       position: 'absolute', inset: 0, width: '100%', height: '100%',
//       objectFit: 'cover', opacity: 0.45
//     }} />

//     {/* Gradient overlay */}
//     <div style={{
//       position: 'absolute', inset: 0,
//       background: `linear-gradient(135deg, ${color}22 0%, rgba(0,0,0,0.7) 100%)`
//     }} />

//     {/* Top accent line */}
//     <div style={{
//       position: 'absolute', top: 0, left: 0, right: 0, height: 2,
//       background: `linear-gradient(90deg, transparent, ${color}, transparent)`
//     }} />

//     {/* Corner glow */}
//     <div style={{
//       position: 'absolute', top: -20, right: -20,
//       width: 80, height: 80, borderRadius: '50%',
//       background: `${color}33`, filter: 'blur(20px)'
//     }} />

//     {/* Content */}
//     <div style={{
//       position: 'relative', zIndex: 10,
//       padding: 20, height: '100%',
//       display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
//     }}>
//       <div style={{
//         fontSize: 36, fontWeight: 900, color: '#fff',
//         textShadow: `0 0 20px ${color}`,
//         lineHeight: 1
//       }}>{value}</div>
//       <div style={{
//         marginTop: 6, fontSize: 12, fontWeight: 600,
//         color: color, letterSpacing: 1, textTransform: 'uppercase'
//       }}>{title}</div>
//     </div>
//   </div>
// )

// const PremiumCube = () => {
//   const cubeRef = useRef(null)
//   const angleRef = useRef(0)
//   const rafRef = useRef(null)
//   const size = 200

//   useEffect(() => {
//     const animate = () => {
//       angleRef.current += 0.35
//       if (cubeRef.current) {
//         cubeRef.current.style.transform = `rotateX(18deg) rotateY(${angleRef.current}deg)`
//       }
//       rafRef.current = requestAnimationFrame(animate)
//     }
//     rafRef.current = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(rafRef.current)
//   }, [])

//   const faceStyle = (transform) => ({
//     position: 'absolute',
//     width: size,
//     height: size,
//     transform,
//     borderRadius: 20,
//     overflow: 'hidden',
//     backfaceVisibility: 'hidden',
//   })

//   const glassFace = (transform, color) => ({
//     position: 'absolute',
//     width: size,
//     height: size,
//     transform,
//     borderRadius: 20,
//     background: `linear-gradient(135deg, ${color}18, ${color}08)`,
//     border: `1px solid ${color}33`,
//     backdropFilter: 'blur(10px)',
//     boxShadow: `inset 0 0 30px ${color}11`,
//   })

//   return (
//     <div style={{ position: 'relative' }}>

//       {/* Glow under cube */}
//       <div style={{
//         position: 'absolute',
//         bottom: -30, left: '50%', transform: 'translateX(-50%)',
//         width: 220, height: 40,
//         background: 'radial-gradient(ellipse, rgba(6,182,212,0.4) 0%, transparent 70%)',
//         filter: 'blur(12px)',
//         pointerEvents: 'none'
//       }} />

//       {/* Orbit ring */}
//       <div style={{
//         position: 'absolute',
//         top: '50%', left: '50%',
//         transform: 'translate(-50%, -50%) rotateX(75deg)',
//         width: 300, height: 300,
//         borderRadius: '50%',
//         border: '1px solid rgba(6,182,212,0.2)',
//         pointerEvents: 'none'
//       }} />

//       <div style={{ perspective: 1000, width: size, height: size }}>
//         <div
//           ref={cubeRef}
//           style={{
//             width: size, height: size,
//             position: 'relative',
//             transformStyle: 'preserve-3d',
//             transform: `rotateX(18deg) rotateY(0deg)`,
//             transition: 'none',
//           }}
//         >
//           {/* 4 card faces */}
//           <div style={faceStyle(`translateZ(${size / 2}px)`)}>
//             <Card {...faces[0]} />
//           </div>
//           <div style={faceStyle(`rotateY(180deg) translateZ(${size / 2}px)`)}>
//             <Card {...faces[1]} />
//           </div>
//           <div style={faceStyle(`rotateY(-90deg) translateZ(${size / 2}px)`)}>
//             <Card {...faces[2]} />
//           </div>
//           <div style={faceStyle(`rotateY(90deg) translateZ(${size / 2}px)`)}>
//             <Card {...faces[3]} />
//           </div>

//           {/* Top glass */}
//           <div style={glassFace(`rotateX(90deg) translateZ(${size / 2}px)`, '#06b6d4')} />

//           {/* Bottom glass */}
//           <div style={glassFace(`rotateX(-90deg) translateZ(${size / 2}px)`, '#a855f7')} />
//         </div>
//       </div>
//     </div>
//   )
// }

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center bg-[#05070d] overflow-hidden px-4 pt-24">

//       {/* 3D Background */}
//       <div className="absolute inset-0 z-0">
//         <ThreeDHero />
//       </div>
//       <div className="absolute inset-0 z-0 bg-[#05070d]/60" />
//       <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.06),transparent_70%)]" />

//       <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
//         {/* LEFT */}
//         <div>
//           <span className="px-4 py-2 text-sm bg-white/10 border border-white/10 rounded-full text-cyan-300">
//             ✨ Welcome to Stack Mints Lab
//           </span>

//           <h1 className="mt-6 text-3xl sm:text-4xl md:text-7xl font-extrabold leading-tight text-white">

//             Build <br />
//             <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
//               Digital Products
//             </span>
//           </h1>

//           <p className="mt-6 text-gray-400 text-lg max-w-xl">
//             We create stunning web experiences, scalable apps, and modern digital solutions.
//           </p>

//           <div className="mt-8 flex gap-4 flex-wrap">
//             <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition">
//               Start Project →
//             </a>
//             <a href="/portfolio" className="border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white/10 transition">
//               View Work
//             </a>
//           </div>
//         </div>

//         {/* RIGHT — Robot + Cube */}
//         <div className="relative flex flex-col items-center justify-center gap-6 md:gap-8 mt-10 md:mt-0">

//           <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 blur-3xl rounded-full pointer-events-none" />

//           {/* Robot */}
//           <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] relative z-10">
//             <ThreeDRobot />
//           </div>

//           {/* Premium Cube */}
//           <div className="relative z-10 flex justify-center scale-75 sm:scale-90 md:scale-100">
//             <PremiumCube />
//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Hero




'use client'

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import ThreeDRobot from '@/app/home/ThreeDRobot'

/* ================= PREMIUM CUBE COMPONENT ================= */
const faces = [
  { title: 'Projects Delivered', value: '100+', img: '/image/project-delivered.jpg', color: '#06b6d4' },
  { title: 'Happy Clients', value: '50+', img: '/image/happy-customber.jpg', color: '#a855f7' },
  { title: 'Years Journey', value: '10+', img: '/image/journey.jpg', color: '#ec4899' },
  { title: 'Fast Delivery', value: '⚡', img: '/image/fast-delievery.jpg', color: '#f97316' }
]

const Card = ({ title, value, img, color }) => (
  <div style={{
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    border: `1.5px solid ${color}55`,
    boxShadow: `0 0 30px ${color}33, inset 0 0 20px rgba(0,0,0,0.5)`,
    background: 'rgba(0,0,0,0.6)',
    backdropFilter: 'blur(12px)',
  }}>
    <img src={img} alt={title} style={{
      position: 'absolute', inset: 0, width: '100%', height: '100%',
      objectFit: 'cover', opacity: 0.45
    }} />
    <div style={{
      position: 'absolute', inset: 0,
      background: `linear-gradient(135deg, ${color}22 0%, rgba(0,0,0,0.7) 100%)`
    }} />
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: 2,
      background: `linear-gradient(90deg, transparent, ${color}, transparent)`
    }} />
    <div style={{
      position: 'absolute', top: -20, right: -20,
      width: 80, height: 80, borderRadius: '50%',
      background: `${color}33`, filter: 'blur(20px)'
    }} />
    <div style={{
      position: 'relative', zIndex: 10,
      padding: 20, height: '100%',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'
    }}>
      <div style={{
        fontSize: 36, fontWeight: 900, color: '#fff',
        textShadow: `0 0 20px ${color}`,
        lineHeight: 1
      }}>{value}</div>
      <div style={{
        marginTop: 6, fontSize: 12, fontWeight: 600,
        color: color, letterSpacing: 1, textTransform: 'uppercase'
      }}>{title}</div>
    </div>
  </div>
)

const PremiumCube = () => {
  const cubeRef = useRef(null)
  const angleRef = useRef(0)
  const rafRef = useRef(null)
  const size = 200

  useEffect(() => {
    const animate = () => {
      angleRef.current += 0.35
      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(18deg) rotateY(${angleRef.current}deg)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const faceStyle = (transform) => ({
    position: 'absolute',
    width: size,
    height: size,
    transform,
    borderRadius: 20,
    overflow: 'hidden',
    backfaceVisibility: 'hidden',
  })

  const glassFace = (transform, color) => ({
    position: 'absolute',
    width: size,
    height: size,
    transform,
    borderRadius: 20,
    background: `linear-gradient(135deg, ${color}18, ${color}08)`,
    border: `1px solid ${color}33`,
    backdropFilter: 'blur(10px)',
    boxShadow: `inset 0 0 30px ${color}11`,
  })

  return (
    <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{
        position: 'absolute',
        bottom: -30, left: '50%', transform: 'translateX(-50%)',
        width: 240, height: 45,
        background: 'radial-gradient(ellipse, rgba(6,182,212,0.5) 0%, transparent 70%)',
        filter: 'blur(12px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%) rotateX(75deg)',
        width: 320, height: 320,
        borderRadius: '50%',
        border: '1px solid rgba(6,182,212,0.25)',
        pointerEvents: 'none',
        animation: 'spin 8s linear infinite'
      }} />
      <div style={{ perspective: 1000, width: size, height: size }}>
        <div
          ref={cubeRef}
          style={{
            width: size, height: size,
            position: 'relative',
            transformStyle: 'preserve-3d',
            transform: `rotateX(18deg) rotateY(0deg)`,
          }}
        >
          <div style={faceStyle(`translateZ(${size / 2}px)`)}>
            <Card {...faces[0]} />
          </div>
          <div style={faceStyle(`rotateY(180deg) translateZ(${size / 2}px)`)}>
            <Card {...faces[1]} />
          </div>
          <div style={faceStyle(`rotateY(-90deg) translateZ(${size / 2}px)`)}>
            <Card {...faces[2]} />
          </div>
          <div style={faceStyle(`rotateY(90deg) translateZ(${size / 2}px)`)}>
            <Card {...faces[3]} />
          </div>
          <div style={glassFace(`rotateX(90deg) translateZ(${size / 2}px)`, '#06b6d4')} />
          <div style={glassFace(`rotateX(-90deg) translateZ(${size / 2}px)`, '#a855f7')} />
        </div>
      </div>
      <style jsx>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(0deg); }
          to { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(360deg); }
        }
      `}</style>
    </div>
  )
}

/* ================= CUSTOM 3D AI ROBOT SCENE ================= */
const CustomRobotScene = () => {
  const containerRef = useRef(null)
  const robotRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x010101)
    scene.fog = new THREE.FogExp2(0x010101, 0.008)

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 1000)
    camera.position.set(0, 1.5, 10)
    camera.lookAt(0, 1.2, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x111122, 0.6)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xffcc88, 1.2)
    keyLight.position.set(3, 5, 4)
    keyLight.castShadow = true
    scene.add(keyLight)

    const fillLight = new THREE.PointLight(0x4488ff, 0.6)
    fillLight.position.set(-2, 3, 3)
    scene.add(fillLight)

    const rimLight = new THREE.PointLight(0xffaa66, 0.8)
    rimLight.position.set(0, 2, -4)
    scene.add(rimLight)

    const cyanLight = new THREE.PointLight(0x06b6d4, 0.5)
    cyanLight.position.set(2, 1.5, 2)
    scene.add(cyanLight)

    const purpleLight = new THREE.PointLight(0x8b5cf6, 0.5)
    purpleLight.position.set(-2, 1.5, 2)
    scene.add(purpleLight)

    // Robot Group
    const robotGroup = new THREE.Group()

    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x1a2a3a, metalness: 0.92, roughness: 0.18, emissive: 0x0a1a2a, emissiveIntensity: 0.15 })
    const chromeMaterial = new THREE.MeshStandardMaterial({ color: 0xccddff, metalness: 0.98, roughness: 0.12 })
    const energyMaterial = new THREE.MeshStandardMaterial({ color: 0x22d3ee, metalness: 0.9, roughness: 0.2, emissive: 0x06b6d4, emissiveIntensity: 0.6 })

    // Body
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.5, 1.4, 32), bodyMaterial)
    body.position.y = 0
    body.castShadow = true
    robotGroup.add(body)

    // Chest
    const chest = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.7, 0.25), chromeMaterial)
    chest.position.set(0, 0.25, 0.55)
    robotGroup.add(chest)

    // Energy Core
    const core = new THREE.Mesh(new THREE.SphereGeometry(0.22, 64, 64), energyMaterial)
    core.position.set(0, 0.25, 0.75)
    robotGroup.add(core)

    // Head
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.52, 64, 64), bodyMaterial)
    head.position.y = 1.05
    robotGroup.add(head)

    // Visor
    const visorMat = new THREE.MeshPhysicalMaterial({ color: 0x22d3ee, metalness: 0.95, emissive: 0x06b6d4, emissiveIntensity: 0.5, transparent: true, opacity: 0.9 })
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.35, 0.08), visorMat)
    visor.position.set(0, 1.08, 0.62)
    robotGroup.add(visor)

    // Eyes
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xff3366, emissive: 0xff1144, emissiveIntensity: 0.8 })
    const leftEye = new THREE.Mesh(new THREE.SphereGeometry(0.09, 32, 32), eyeMat)
    leftEye.position.set(-0.22, 1.15, 0.68)
    robotGroup.add(leftEye)
    const rightEye = new THREE.Mesh(new THREE.SphereGeometry(0.09, 32, 32), eyeMat)
    rightEye.position.set(0.22, 1.15, 0.68)
    robotGroup.add(rightEye)

    // Antenna
    const antennaBase = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.35, 16), chromeMaterial)
    antennaBase.position.set(0, 1.55, 0)
    robotGroup.add(antennaBase)
    const antennaBall = new THREE.Mesh(new THREE.SphereGeometry(0.1, 32, 32), energyMaterial)
    antennaBall.position.set(0, 1.72, 0)
    robotGroup.add(antennaBall)

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.28, 0.24, 1.1, 24)
    const leftArm = new THREE.Mesh(armGeo, bodyMaterial)
    leftArm.position.set(-0.9, 0.55, 0)
    robotGroup.add(leftArm)
    const rightArm = new THREE.Mesh(armGeo, bodyMaterial)
    rightArm.position.set(0.9, 0.55, 0)
    robotGroup.add(rightArm)

    // Shoulders
    const shoulderMat = new THREE.MeshStandardMaterial({ color: 0x8b5cf6, metalness: 0.9 })
    const leftShoulder = new THREE.Mesh(new THREE.SphereGeometry(0.32, 32, 32), shoulderMat)
    leftShoulder.position.set(-1.05, 0.95, 0)
    robotGroup.add(leftShoulder)
    const rightShoulder = new THREE.Mesh(new THREE.SphereGeometry(0.32, 32, 32), shoulderMat)
    rightShoulder.position.set(1.05, 0.95, 0)
    robotGroup.add(rightShoulder)

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.32, 0.28, 1.0, 24)
    const leftLeg = new THREE.Mesh(legGeo, bodyMaterial)
    leftLeg.position.set(-0.4, -0.8, 0)
    robotGroup.add(leftLeg)
    const rightLeg = new THREE.Mesh(legGeo, bodyMaterial)
    rightLeg.position.set(0.4, -0.8, 0)
    robotGroup.add(rightLeg)

    scene.add(robotGroup)
    robotRef.current = { robotGroup, leftArm, rightArm, core, eyeMat, antennaBall }

    // Platform
    const platformMat = new THREE.MeshPhysicalMaterial({ color: 0x06b6d4, metalness: 0.95, transparent: true, opacity: 0.7 })
    const platform = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, 0.08, 32), platformMat)
    platform.position.y = -1.25
    platform.receiveShadow = true
    scene.add(platform)

    // Particles
    const particleCount = 1500
    const particlesGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const radius = 3 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.7 + 1
      particlePositions[i * 3 + 2] = radius * Math.cos(phi)
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))
    const particles = new THREE.Points(particlesGeometry, new THREE.PointsMaterial({ color: 0x44aaff, size: 0.02, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending }))
    scene.add(particles)

    // Mouse move
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect()
      mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseRef.current.y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    let armSwing = 0, floatOffset = 0
    const animate = () => {
      requestAnimationFrame(animate)
      timeRef.current += 0.016

      if (robotRef.current) {
        floatOffset += 0.025
        robotRef.current.robotGroup.position.y = Math.sin(floatOffset) * 0.06

        armSwing += 0.035
        if (robotRef.current.leftArm) robotRef.current.leftArm.rotation.z = Math.sin(armSwing) * 0.6
        if (robotRef.current.rightArm) robotRef.current.rightArm.rotation.z = -Math.sin(armSwing) * 0.6

        robotRef.current.robotGroup.rotation.y = Math.sin(timeRef.current * 0.4) * 0.1

        const intensity = 0.6 + Math.sin(timeRef.current * 12) * 0.3
        robotRef.current.eyeMat.emissiveIntensity = intensity
        if (robotRef.current.core.material) robotRef.current.core.material.emissiveIntensity = 0.5 + Math.sin(timeRef.current * 15) * 0.3
        if (robotRef.current.antennaBall.material) robotRef.current.antennaBall.material.emissiveIntensity = 0.4 + Math.sin(timeRef.current * 10) * 0.3
      }

      particles.rotation.y = timeRef.current * 0.05
      cyanLight.intensity = 0.4 + Math.sin(timeRef.current * 2) * 0.2
      purpleLight.intensity = 0.4 + Math.cos(timeRef.current * 1.8) * 0.2

      const targetX = mouseRef.current.x * 0.3
      const targetY = mouseRef.current.y * 0.2
      camera.position.x += (targetX - camera.position.x) * 0.05
      camera.position.y += (-targetY - camera.position.y) * 0.05
      camera.lookAt(0, 1.2, 0)

      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />
}

/* ================= BACKGROUND STARFIELD ================= */
const BackgroundStars = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
    camera.position.set(0, 0, 5)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    const starCount = 2000
    const starGeometry = new THREE.BufferGeometry()
    const starPositions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 200
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 100
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 50
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
    const stars = new THREE.Points(starGeometry, new THREE.PointsMaterial({ color: 0xffffff, size: 0.06, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending }))
    scene.add(stars)

    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.002
      stars.rotation.y = time
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />
}

/* ================= MAIN HERO COMPONENT ================= */
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeRobot, setActiveRobot] = useState('glb') // 'glb' or 'custom'

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Stars */}
      <BackgroundStars />

      {/* Custom 3D Robot Scene (Background layer) */}
      <CustomRobotScene />

      {/* Gradient Overlays for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - TEXT CONTENT */}
          <div className={`
            transform transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}
          `}>




            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
              <span className="text-white">Build</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Digital Prouducts
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg md:text-xl max-w-lg mb-8 leading-relaxed backdrop-blur-sm">
              Step into the future with our advanced AI chatbots,web experience,scalable apps and modern digital solutions. Cutting-edge technology
              meets intuitive design for unparalleled digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="/contact"
                className="group relative px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>

              <a
                href="/portfolio"
                className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 backdrop-blur-md hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">▶ Watch Demo</span>
              </a>
            </div>


          </div>

          {/* RIGHT SIDE - Robots + Premium Cube */}
          <div className={`
            flex flex-col items-center justify-center gap-6
            transform transition-all duration-1000 delay-300
            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}
          `}>
            {/* Active Robot Display */}
            <div className="w-full max-w-md h-[320px] md:h-[380px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 blur-3xl rounded-full" />
              {activeRobot === 'glb' ? (
                <ThreeDRobot />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🤖</div>
                    <p className="text-cyan-400 text-sm">Custom 3D Robot Active</p>
                    <p className="text-gray-500 text-xs mt-2">(Background scene visible)</p>
                  </div>
                </div>
              )}
            </div>

            {/* Premium Cube with Stats */}
            <div className="relative">
              <PremiumCube />
            </div>
          </div>

        </div>
      </div>



      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(4px); }
        }
        .animate-bounce {
          animation: bounce 1.5s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero