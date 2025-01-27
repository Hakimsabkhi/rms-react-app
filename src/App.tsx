import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three'; // Import THREE for type definitions
import { OrbitControls } from '@react-three/drei';

const RotatingCube = () => {
  const cubeRef = useRef<THREE.Mesh>(null); // Explicitly type the ref as THREE.Mesh

  // Rotate the cube on every frame
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.01;
      cubeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={cubeRef} position={[0, 0, 0]} castShadow>
      {/* Cube Geometry */}
      <boxGeometry args={[1, 1, 1]} />
      {/* Material */}
      <meshStandardMaterial
        color="black"
        roughness={0.4} // Controls the reflectiveness (lower = shinier)
        metalness={0.5} // Gives the material a metallic appearance
      />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      shadows
      style={{ height: '100vh', background: '#ffffff' }}
      camera={{ position: [3, 3, 3], fov: 50 }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[-2, 5, 2]} intensity={0.5} castShadow />

      {/* Ground */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[10, 10]} />
        <shadowMaterial opacity={0.3} />
      </mesh>

      {/* Cube */}
      <RotatingCube />

      {/* Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default App;
