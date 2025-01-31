import React from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "../assets/model";
import Lighting from "../components/Lighting";
import { CustomizationProvider } from '../components/Customization'
/* import ColorSelection from '../components/colorSelection' */

const Scene: React.FC = () => {
  return (
    <>
      <CustomizationProvider>
        {/* <ColorSelection /> */}
        <Canvas
          shadows={{ enabled: true, type: THREE.PCFSoftShadowMap }}
          camera={{ position: [3, 3, 3], fov: 50 }}
          style={{ height: "100vh" }}
        >
          {/* Stage sets up an environment and optionally auto-lights the scene. */}
          <Environment preset="city" />
          <Lighting />
          <Model position={[0, -0.55, 0]} castShadow />
          <OrbitControls />
        </Canvas>
      </CustomizationProvider>
    </>
  );
};

export default Scene;
