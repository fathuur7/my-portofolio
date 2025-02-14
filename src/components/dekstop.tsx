import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  
  return (
    <mesh>
      {/* Ambient light for overall scene brightness */}
      <ambientLight intensity={0.5} />
      
      {/* Main directional light from above */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
r
& Designer
Transforming ideas into elegant digital experiences with cutting-edge technology and innovative design.

View Projects
Contact Me
      
      {/* Fill light from the opposite side */}
      <directionalLight 
        position={[-10, 10, -5]} 
        intensity={0.3} 
      />
      
      {/* Soft hemisphere light for natural ambient */}
      <hemisphereLight 
        intensity={0.3} 
        groundColor="white" 
        color="#ffffff" 
      />
      
      {/* Accent spotlight */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={0.8}
        castShadow
        shadow-mapSize={2048}
      />
      
      {/* Bottom fill light */}
      <pointLight 
        position={[0, -10, 0]} 
        intensity={0.2} 
      />

      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
        receiveShadow
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        alpha: true // Ensures white background
      }}
      style={{ background: 'gray-50' }} // Sets white background
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;