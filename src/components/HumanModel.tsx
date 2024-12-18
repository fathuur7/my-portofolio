import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function HumanModel() {
  const gltf = useGLTF('./human_character_gltf/scene.gltf'); // Ensure the path to your .glb file is correct
  const modelRef = useRef<THREE.Object3D>(null);

  // Rotation animation
  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5; // Rotate around Y-axis
    }
  });
  
  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={[1, 1, 1]} // Adjust scale as needed
      position={[0, -1, 0]} // Adjust position to center the model
    />
  );
}

// Preload the model to improve performance
useGLTF.preload('/model.glb');