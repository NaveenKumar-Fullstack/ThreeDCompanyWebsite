'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { isMobileDevice, getOptimalPixelRatio, getOptimalParticleCount } from '@/utils/deviceDetect'

const ThreeDTechnology = ({ colors = [0x3b82f6, 0xa855f7, 0xec4899] }) => {
  const containerRef = useRef(null)
  const animationIdRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const isMobile = isMobileDevice()

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 15

    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile, 
      alpha: true,
      powerPreference: isMobile ? 'low-power' : 'high-performance'
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(getOptimalPixelRatio())
    containerRef.current.appendChild(renderer.domElement)

    // Create rotating badges/spheres
    const badges = []
    const radius = 8
    const badgeCount = getOptimalParticleCount(6)

    for (let i = 0; i < badgeCount; i++) {
      const angle = (i / badgeCount) * Math.PI * 2
      const geometry = new THREE.IcosahedronGeometry(1.5, isMobile ? 2 : 4)
      const material = new THREE.MeshPhongMaterial({
        color: colors[i % colors.length],
        emissive: colors[i % colors.length],
        shininess: 100,
        wireframe: i % 3 === 0
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.x = Math.cos(angle) * radius
      mesh.position.y = Math.sin(angle) * radius
      mesh.userData.angle = angle
      mesh.userData.index = i
      scene.add(mesh)
      badges.push(mesh)
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    if (!isMobile) {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(5, 5, 5)
      scene.add(directionalLight)
    }

    let lastFrameTime = 0
    const targetFPS = isMobile ? 30 : 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime) => {
      animationIdRef.current = requestAnimationFrame(animate)

      const timeSinceLastFrame = currentTime - lastFrameTime
      if (timeSinceLastFrame < frameInterval) return
      lastFrameTime = currentTime - (timeSinceLastFrame % frameInterval)

      badges.forEach((badge) => {
        badge.userData.angle += 0.005
        badge.position.x = Math.cos(badge.userData.angle) * radius
        badge.position.y = Math.sin(badge.userData.angle) * radius
        badge.rotation.x += 0.01
        badge.rotation.y += 0.015
      })

      renderer.render(scene, camera)
    }

    animate(0)

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
      badges.forEach((badge) => {
        if (badge.geometry) badge.geometry.dispose()
        if (badge.material) badge.material.dispose()
      })
      renderer.dispose()
      scene.clear()
    }
  }, [colors])

  return <div ref={containerRef} className="w-full h-full" />
}

export default ThreeDTechnology
