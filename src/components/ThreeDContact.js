'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { isMobileDevice, getOptimalPixelRatio } from '@/utils/deviceDetect'

const ThreeDContact = () => {
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
    camera.position.z = 20

    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: isMobile ? 'low-power' : 'high-performance'
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(getOptimalPixelRatio())
    containerRef.current.appendChild(renderer.domElement)

    // Create animated geometric shapes
    const shapes = []
    const geometries = [
      new THREE.DodecahedronGeometry(2),
      new THREE.IcosahedronGeometry(1.5),
      new THREE.OctahedronGeometry(2),
      new THREE.TetrahedronGeometry(2.5)
    ]

    const colors = [0x3b82f6, 0xa855f7, 0xec4899, 0xf59e0b]

    geometries.forEach((geom, i) => {
      const material = new THREE.MeshPhongMaterial({
        color: colors[i],
        emissive: colors[i],
        shininess: 100,
        transparent: true,
        opacity: 0.7
      })
      const mesh = new THREE.Mesh(geom, material)
      mesh.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      )
      mesh.userData.velocity = {
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03
      }
      mesh.userData.rotationSpeed = Math.random() * 0.02
      scene.add(mesh)
      shapes.push(mesh)
    })

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    if (!isMobile) {
      const pointLight1 = new THREE.PointLight(0x3b82f6, 0.8)
      pointLight1.position.set(15, 15, 15)
      scene.add(pointLight1)

      const pointLight2 = new THREE.PointLight(0xa855f7, 0.8)
      pointLight2.position.set(-15, -15, 15)
      scene.add(pointLight2)
    }

    let lastFrameTime = 0
    const targetFPS = isMobile ? 30 : 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime) => {
      animationIdRef.current = requestAnimationFrame(animate)

      const timeSinceLastFrame = currentTime - lastFrameTime
      if (timeSinceLastFrame < frameInterval) return
      lastFrameTime = currentTime - (timeSinceLastFrame % frameInterval)

      shapes.forEach((shape) => {
        shape.position.x += shape.userData.velocity.x
        shape.position.y += shape.userData.velocity.y
        shape.position.z += shape.userData.velocity.z

        shape.rotation.x += shape.userData.rotationSpeed * 0.5
        shape.rotation.y += shape.userData.rotationSpeed
        shape.rotation.z += shape.userData.rotationSpeed * 0.3

        const boundary = 20
        if (shape.position.x > boundary || shape.position.x < -boundary) {
          shape.userData.velocity.x *= -1
        }
        if (shape.position.y > boundary || shape.position.y < -boundary) {
          shape.userData.velocity.y *= -1
        }
        if (shape.position.z > boundary || shape.position.z < -boundary) {
          shape.userData.velocity.z *= -1
        }
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
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full opacity-80 blur-[1px]"
      style={{ zIndex: 0 }}
    />
  )
}

export default ThreeDContact

