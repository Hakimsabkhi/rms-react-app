import React from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "../assets/model";
import CameraDebugGUI from "./CameraDebugGUI";
import ControlledCamera from "./ControlledCamera";

const Scene: React.FC = () => {
  return (
    <div className="fixed right-0 w-[100%] h-full">
      <Canvas
        camera={{ position: [0, 0, 0], fov: 30 }}
        shadows={{ enabled: true, type: THREE.PCFSoftShadowMap }}
      >
        <ControlledCamera />
        <CameraDebugGUI />
        <Environment preset="city" environmentIntensity={2} />
        <Model
          position={[0, -0.7, 0]}
          rotation={[0, 0, 0]}
          castShadow
        />
        {/* Ensure OrbitControls is aware of camera interaction */}
        <OrbitControls minDistance={2} maxDistance={20} />
      </Canvas>
    </div>
  );
};

export default Scene;
