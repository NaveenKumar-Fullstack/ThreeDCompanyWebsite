// 'use client'

// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls, useGLTF } from '@react-three/drei'
// import { Suspense, useRef, useEffect, useState } from 'react'
// import * as THREE from 'three'

// function Robot() {
//     const { scene } = useGLTF('/image/models/Robot.glb')
//     const groupRef = useRef()
//     const [ready, setReady] = useState(false)
//     const setupDone = useRef(false)  // ✅ guard

//     useEffect(() => {
//         if (!scene || setupDone.current) return
//         setupDone.current = true

//         const box = new THREE.Box3().setFromObject(scene)
//         const size = box.getSize(new THREE.Vector3())
//         const maxDim = Math.max(size.x, size.y, size.z)

//         // Scale: robot ~3 units tall
//         const scale = 3 / maxDim
//         scene.scale.setScalar(scale)

//         // Center after scale
//         const box2 = new THREE.Box3().setFromObject(scene)
//         const center = box2.getCenter(new THREE.Vector3())
//         scene.position.set(-center.x, -box2.min.y, -center.z)

//         scene.traverse((child) => {
//             if (child.isMesh) {
//                 child.material = child.material.clone()
//                 child.material.roughness = 0.3
//                 child.material.metalness = 0.6
//             }
//         })

//         setReady(true)
//     }, [scene])

//     useFrame(({ clock }) => {
//         if (!groupRef.current || !ready) return
//         groupRef.current.rotation.y += 0.004
//         groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.08
//     })

//     return (
//         <group ref={groupRef} visible={ready} position={[0, -3, 0]}>
//             <primitive object={scene} />
//         </group>
//     )
// }

// export default function ThreeDRobot() {
//     return (
//         <div className="w-full h-full" style={{ minHeight: '500px' }}>
//             <Canvas
//                 camera={{ position: [0, 0, 7], fov: 50 }}
//                 dpr={[1, 1.5]}
//                 style={{ background: 'transparent' }}
//             >
//                 <ambientLight intensity={0.8} />
//                 <directionalLight position={[3, 5, 3]} intensity={1.5} />
//                 <directionalLight position={[-3, 2, 2]} intensity={0.6} />
//                 <pointLight position={[0, 3, 3]} intensity={1.2} color="#38bdf8" />
//                 <pointLight position={[0, -1, 2]} intensity={0.4} color="#a855f7" />

//                 <Suspense fallback={null}>
//                     <Robot />
//                 </Suspense>

//                 <OrbitControls
//                     enableZoom={false}
//                     enablePan={false}
//                     minPolarAngle={Math.PI / 3}
//                     maxPolarAngle={Math.PI / 1.8}
//                 />
//             </Canvas>
//         </div>
//     )
// }


'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import * as THREE from 'three'

function Robot() {
    const { scene } = useGLTF('/image/models/Robot.glb')
    const groupRef = useRef()
    const [ready, setReady] = useState(false)
    const setupDone = useRef(false)

    useEffect(() => {
        if (!scene || setupDone.current) return
        setupDone.current = true

        const box = new THREE.Box3().setFromObject(scene)
        const size = box.getSize(new THREE.Vector3())
        const maxDim = Math.max(size.x, size.y, size.z)

        const scale = 3 / maxDim
        scene.scale.setScalar(scale)

        const box2 = new THREE.Box3().setFromObject(scene)
        const center = box2.getCenter(new THREE.Vector3())
        scene.position.set(-center.x, -box2.min.y, -center.z)

        scene.traverse((child) => {
            if (child.isMesh) {
                child.material = child.material.clone()
                child.material.roughness = 0.3
                child.material.metalness = 0.6
            }
        })

        setReady(true)
    }, [scene])

    useFrame(({ clock }) => {
        if (!groupRef.current || !ready) return
        const t = clock.elapsedTime

        // 🕺 Hip sway - smooth left right
        groupRef.current.rotation.z = Math.sin(t * 2.5) * 0.18

        // 🔄 Slow front-back tilt (head nod feel)
        groupRef.current.rotation.x = Math.sin(t * 2.5 + 1) * 0.08

        // 🌀 Slow y rotation — looks around while dancing
        groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.6

        // ⬆️ Bounce — snappy up down
        groupRef.current.position.y = -1.5 + Math.abs(Math.sin(t * 3)) * 0.35

        // 🎵 Beat pulse on every beat
        const beat = 1 + Math.sin(t * 5) * 0.04
        groupRef.current.scale.set(beat, beat, beat)

        // 💃 Side step left-right
        groupRef.current.position.x = Math.sin(t * 1.5) * 0.3
    })

    return (
        <group ref={groupRef} visible={ready} position={[0, -1.5, 0]}>
            <primitive object={scene} />
        </group>
    )
}

export default function ThreeDRobot() {
    return (
        <div className="w-full h-full" style={{ minHeight: '500px' }}>
            <Canvas
                camera={{ position: [0, 1, 7], fov: 50 }}
                dpr={[1, 1.5]}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.8} />
                <directionalLight position={[3, 5, 3]} intensity={1.5} />
                <directionalLight position={[-3, 2, 2]} intensity={0.6} />
                <pointLight position={[0, 3, 3]} intensity={1.2} color="#38bdf8" />
                <pointLight position={[0, -1, 2]} intensity={0.4} color="#a855f7" />

                <Suspense fallback={null}>
                    <Robot />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 3}
                    maxPolarAngle={Math.PI / 1.8}
                />
            </Canvas>
        </div>
    )
}