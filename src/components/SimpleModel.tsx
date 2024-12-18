'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function SimpleModel(props: JSX.IntrinsicElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 2
    meshRef.current.rotation.y += delta * 1
  })
  
  return (
    <mesh {...props} ref={meshRef}>
      <octahedronGeometry args={[10,5]} />
      <meshStandardMaterial color="white" wireframe />
    </mesh>
  )
}

export function BallBounce() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    meshRef.current.position.y = Math.abs(Math.sin(a * 2)) * 2;
  });
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 10, 32]} />
      <meshStandardMaterial color="white" wireframe />
    </mesh>
  );
}