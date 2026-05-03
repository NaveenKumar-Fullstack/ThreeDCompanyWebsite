'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { isMobileDevice, getOptimalPixelRatio } from '@/utils/deviceDetect'

const ThreeDShapes = ({ color1 = 0x3b82f6, color2 = 0xa855f7 }) => {
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
    camera.position.z = 10

    const renderer = new THREE.WebGLRenderer({ 
      antialias: !isMobile, 
      alpha: true,
      powerPreference: isMobile ? 'low-power' : 'high-performance'
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(getOptimalPixelRatio())
    containerRef.current.appendChild(renderer.domElement)

    // Create geometries
    const geometries = [
      new THREE.IcosahedronGeometry(2, isMobile ? 2 : 4),
      new THREE.OctahedronGeometry(2),
      new THREE.TetrahedronGeometry(2)
    ]

    const shapes = []
    geometries.forEach((geom, i) => {
      const material = new THREE.MeshPhongMaterial({
        color: i % 2 === 0 ? color1 : color2,
        emissive: i % 2 === 0 ? 0x1e40af : 0x6b21a8,
        shininess: 100,
        wireframe: i === 2
      })
      const mesh = new THREE.Mesh(geom, material)
      mesh.position.x = (i - 1) * 6
      mesh.userData.speed = Math.random() * 0.01 + 0.005
      scene.add(mesh)
      shapes.push(mesh)
    })

    // Lighting
    if (!isMobile) {
      const light = new THREE.DirectionalLight(0xffffff, 1)
      light.position.set(10, 10, 10)
      scene.add(light)
    }

    const ambientLight = new THREE.AmbientLight(color1, 0.5)
    scene.add(ambientLight)

    let lastFrameTime = 0
    const targetFPS = isMobile ? 30 : 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime) => {
      animationIdRef.current = requestAnimationFrame(animate)

      const timeSinceLastFrame = currentTime - lastFrameTime
      if (timeSinceLastFrame < frameInterval) return
      lastFrameTime = currentTime - (timeSinceLastFrame % frameInterval)

      shapes.forEach((shape) => {
        shape.rotation.x += shape.userData.speed
        shape.rotation.y += shape.userData.speed * 0.7
        shape.position.y = Math.sin(Date.now() * 0.0005) * 2
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
      shapes.forEach((shape) => {
        if (shape.geometry) shape.geometry.dispose()
        if (shape.material) shape.material.dispose()
      })
      renderer.dispose()
      scene.clear()
    }
  }, [color1, color2])

  return <div ref={containerRef} className="w-full h-full" />
}

export default ThreeDShapes
