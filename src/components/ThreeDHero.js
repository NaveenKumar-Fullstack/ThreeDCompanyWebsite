'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { isMobileDevice, getOptimalPixelRatio, getOptimalParticleCount } from '@/utils/deviceDetect'

const ThreeDHero = () => {
  const containerRef = useRef(null)
  const objectsRef = useRef([])
  const animationIdRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Mobile optimization
    const isMobile = isMobileDevice()

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = null

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 25

    // Renderer setup with mobile optimizations
    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile, 
      alpha: true,
      powerPreference: isMobile ? 'low-power' : 'high-performance'
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(getOptimalPixelRatio())
    containerRef.current.appendChild(renderer.domElement)

    // Create geometric shapes
    const objects = []

    // Reduce object count on mobile
    const objectCount = getOptimalParticleCount(5)

    // Floating spheres with wireframe
    for (let i = 0; i < objectCount; i++) {
      const geometry = new THREE.IcosahedronGeometry(2 + i * 0.5, isMobile ? 2 : 4) // Lower poly on mobile
      const material = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? 0x3b82f6 : 0xa855f7,
        emissive: i % 2 === 0 ? 0x1e40af : 0x6b21a8,
        shininess: 100,
        wireframe: i % 3 === 0
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 40
      )
      mesh.userData.velocity = {
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03
      }
      mesh.userData.rotationSpeed = (Math.random() - 0.5) * 0.02
      scene.add(mesh)
      objects.push(mesh)
    }
    objectsRef.current = objects

    // Lighting - simplified on mobile
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    if (!isMobile) {
      const directionalLight = new THREE.DirectionalLight(0x3b82f6, 0.8)
      directionalLight.position.set(5, 5, 5)
      scene.add(directionalLight)

      const pointLight = new THREE.PointLight(0xa855f7, 0.8)
      pointLight.position.set(-5, -5, 5)
      scene.add(pointLight)
    }

    // Mouse tracking - disabled on mobile for performance
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event) => {
      if (isMobile) return
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    // Animation loop with frame rate limiting on mobile
    let lastFrameTime = 0
    const targetFPS = isMobile ? 30 : 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime) => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Frame rate limiting for mobile
      const timeSinceLastFrame = currentTime - lastFrameTime
      if (timeSinceLastFrame < frameInterval) return
      lastFrameTime = currentTime - (timeSinceLastFrame % frameInterval)

      objects.forEach((obj) => {
        obj.position.x += obj.userData.velocity.x
        obj.position.y += obj.userData.velocity.y
        obj.position.z += obj.userData.velocity.z

        obj.rotation.x += obj.userData.rotationSpeed * 0.5
        obj.rotation.y += obj.userData.rotationSpeed
        obj.rotation.z += obj.userData.rotationSpeed * 0.3

        // Boundary wrapping
        const boundary = 30
        if (obj.position.x > boundary) obj.userData.velocity.x *= -1
        if (obj.position.x < -boundary) obj.userData.velocity.x *= -1
        if (obj.position.y > boundary) obj.userData.velocity.y *= -1
        if (obj.position.y < -boundary) obj.userData.velocity.y *= -1
        if (obj.position.z > boundary) obj.userData.velocity.z *= -1
        if (obj.position.z < -boundary) obj.userData.velocity.z *= -1
      })

      // Mouse interaction - only on desktop
      if (!isMobile) {
        camera.position.x += (mouseX * 5 - camera.position.x) * 0.05
        camera.position.y += (mouseY * 5 - camera.position.y) * 0.05
        camera.lookAt(0, 0, 0)
      }

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
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove)
      }
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      
      // Dispose geometries and materials
      objects.forEach((obj) => {
        if (obj.geometry) obj.geometry.dispose()
        if (obj.material) obj.material.dispose()
      })
      
      renderer.dispose()
      scene.clear()
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />
  )
}

export default ThreeDHero
