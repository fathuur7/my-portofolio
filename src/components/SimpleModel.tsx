'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function SimpleModel(props: JSX.IntrinsicElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2
    meshRef.current.rotation.y += delta * 0.3
  })

  return (
    <mesh {...props} ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="white" wireframe />
    </mesh>
  )
}

