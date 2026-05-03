'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { isMobileDevice, getOptimalPixelRatio, getOptimalParticleCount } from '@/utils/deviceDetect'

const ThreeDParticles = ({ color1 = 0x3b82f6, color2 = 0xa855f7 }) => {
  const containerRef = useRef(null)
  const animationIdRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Mobile optimization
    const isMobile = isMobileDevice()

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile, 
      alpha: true,
      powerPreference: isMobile ? 'low-power' : 'high-performance'
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(getOptimalPixelRatio())
    containerRef.current.appendChild(renderer.domElement)

    // Create particles - drastically reduced on mobile
    const particlesGeometry = new THREE.BufferGeometry()
    const particleCount = getOptimalParticleCount(150) // 30-60 on mobile
    const positionArray = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positionArray[i] = (Math.random() - 0.5) * 100
      positionArray[i + 1] = (Math.random() - 0.5) * 100
      positionArray[i + 2] = (Math.random() - 0.5) * 100
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.3 : 0.5,
      color: color1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Create floating cubes - reduced on mobile
    const cubes = []
    const cubeCount = getOptimalParticleCount(8)
    for (let i = 0; i < cubeCount; i++) {
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? color1 : color2,
        emissive: i % 2 === 0 ? 0x1e40af : 0x6b21a8,
        wireframe: false
      })
      const cube = new THREE.Mesh(geometry, material)
      cube.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 30
      )
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      cube.userData.velocity = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      }
      cube.userData.rotationVelocity = {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01
      }
      scene.add(cube)
      cubes.push(cube)
    }

    // Lighting - simplified on mobile
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    if (!isMobile) {
      const pointLight1 = new THREE.PointLight(color1, 1)
      pointLight1.position.set(20, 20, 20)
      scene.add(pointLight1)

      const pointLight2 = new THREE.PointLight(color2, 1)
      pointLight2.position.set(-20, -20, 20)
      scene.add(pointLight2)
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

      particles.rotation.y += 0.0005
      particles.rotation.x += 0.0003

      cubes.forEach((cube) => {
        cube.position.x += cube.userData.velocity.x
        cube.position.y += cube.userData.velocity.y
        cube.position.z += cube.userData.velocity.z

        cube.rotation.x += cube.userData.rotationVelocity.x
        cube.rotation.y += cube.userData.rotationVelocity.y
        cube.rotation.z += cube.userData.rotationVelocity.z

        const boundary = 35
        if (cube.position.x > boundary) cube.userData.velocity.x *= -1
        if (cube.position.x < -boundary) cube.userData.velocity.x *= -1
        if (cube.position.y > boundary) cube.userData.velocity.y *= -1
        if (cube.position.y < -boundary) cube.userData.velocity.y *= -1
        if (cube.position.z > boundary) cube.userData.velocity.z *= -1
        if (cube.position.z < -boundary) cube.userData.velocity.z *= -1
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

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
      
      // Dispose geometries and materials
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      cubes.forEach((cube) => {
        if (cube.geometry) cube.geometry.dispose()
        if (cube.material) cube.material.dispose()
      })
      
      renderer.dispose()
      scene.clear()
    }
  }, [color1, color2])

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />
}

export default ThreeDParticles
