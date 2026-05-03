'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { isMobileDevice, getOptimalPixelRatio, getOptimalParticleCount } from '@/utils/deviceDetect'

const ThreeDBackground = () => {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const rendererRef = useRef(null)
  const particlesRef = useRef([])
  const animationIdRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Mobile optimization - disable 3D on low-end devices
    const isMobile = isMobileDevice()
    
    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.background = new THREE.Color(0x0f172a)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 30

    // Renderer setup with mobile optimizations
    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile, // Disable antialiasing on mobile
      alpha: true,
      powerPreference: isMobile ? 'low-power' : 'high-performance'
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(getOptimalPixelRatio()) // Limit pixel ratio on mobile
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create floating cubes
    const createCube = (x, y, z) => {
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshPhongMaterial({
        color: Math.random() > 0.5 ? 0x3b82f6 : 0xa855f7,
        emissive: Math.random() > 0.5 ? 0x1e40af : 0x6b21a8,
        wireframe: false
      })
      const cube = new THREE.Mesh(geometry, material)
      cube.position.set(x, y, z)
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      cube.velocity = {
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05,
        z: (Math.random() - 0.5) * 0.05
      }
      cube.rotationVelocity = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      }
      scene.add(cube)
      return cube
    }

    // Create particles with mobile optimization
    const particles = []
    const particleCount = getOptimalParticleCount(8) // Reduce on mobile
    for (let i = 0; i < particleCount; i++) {
      const cube = createCube(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30
      )
      particles.push(cube)
    }
    particlesRef.current = particles

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x3b82f6, 1)
    pointLight1.position.set(20, 20, 20)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xa855f7, 1)
    pointLight2.position.set(-20, -20, 20)
    scene.add(pointLight2)

    // Animation loop with frame rate limiting on mobile
    let lastFrameTime = 0
    const targetFPS = isMobile ? 30 : 60 // Limit to 30fps on mobile
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime) => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Frame rate limiting for mobile
      const timeSinceLastFrame = currentTime - lastFrameTime
      if (timeSinceLastFrame < frameInterval) return
      lastFrameTime = currentTime - (timeSinceLastFrame % frameInterval)

      particles.forEach((particle) => {
        particle.position.x += particle.velocity.x
        particle.position.y += particle.velocity.y
        particle.position.z += particle.velocity.z

        particle.rotation.x += particle.rotationVelocity.x
        particle.rotation.y += particle.rotationVelocity.y
        particle.rotation.z += particle.rotationVelocity.z

        // Boundary wrapping
        const boundary = 35
        if (particle.position.x > boundary) particle.position.x = -boundary
        if (particle.position.x < -boundary) particle.position.x = boundary
        if (particle.position.y > boundary) particle.position.y = -boundary
        if (particle.position.y < -boundary) particle.position.y = boundary
        if (particle.position.z > boundary) particle.position.z = -boundary
        if (particle.position.z < -boundary) particle.position.z = boundary
      })

      renderer.render(scene, camera)
    }

    animate(0)

    // Handle window resize with debouncing
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        if (!containerRef.current) return
        const width = containerRef.current.clientWidth
        const height = containerRef.current.clientHeight
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
        renderer.setPixelRatio(getOptimalPixelRatio())
      }, 250)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      
      // Dispose geometries and materials
      particles.forEach((particle) => {
        if (particle.geometry) particle.geometry.dispose()
        if (particle.material) particle.material.dispose()
      })
      
      renderer.dispose()
      scene.clear()
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" />
}

export default ThreeDBackground
