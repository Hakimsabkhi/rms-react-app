// CameraDebugGUI.tsx
import React, { useEffect, useRef, useMemo } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { GUI } from "lil-gui";

const CameraDebugGUI: React.FC = () => {
  const { camera } = useThree();
  const guiRef = useRef<GUI | null>(null);

  // Helper to round numbers to two decimals.
  const round = (num: number) => parseFloat(num.toFixed(2));

  // Wrap cameraParams in useMemo to avoid re-creating it on every render.
  const cameraParams = useMemo(
    () => ({
      posX: round(camera.position.x),
      posY: round(camera.position.y),
      posZ: round(camera.position.z),
      rotX: round(camera.rotation.x),
      rotY: round(camera.rotation.y),
      rotZ: round(camera.rotation.z),
      // Compute the radius from the origin.
      radius: round(
        Math.sqrt(
          camera.position.x ** 2 +
            camera.position.y ** 2 +
            camera.position.z ** 2
        )
      ),
    }),
    [camera]
  );

  useEffect(() => {
    const gui = new GUI();
    guiRef.current = gui;
    const cameraFolder = gui.addFolder("Camera");

    // Position Folder
    const posFolder = cameraFolder.addFolder("Position");
    posFolder.add(cameraParams, "posX").listen();
    posFolder.add(cameraParams, "posY").listen();
    posFolder.add(cameraParams, "posZ").listen();

    // Rotation Folder
    const rotFolder = cameraFolder.addFolder("Rotation");
    rotFolder.add(cameraParams, "rotX").listen();
    rotFolder.add(cameraParams, "rotY").listen();
    rotFolder.add(cameraParams, "rotZ").listen();

    // Add the radius display directly in the Camera folder.
    cameraFolder.add(cameraParams, "radius").listen();

    cameraFolder.open();
    posFolder.open();
    rotFolder.open();

    return () => {
      gui.destroy();
    };
  }, [camera, cameraParams]);

  // Update the cameraParams on every frame.
  useFrame(() => {
    cameraParams.posX = round(camera.position.x);
    cameraParams.posY = round(camera.position.y);
    cameraParams.posZ = round(camera.position.z);
    cameraParams.rotX = round(camera.rotation.x);
    cameraParams.rotY = round(camera.rotation.y);
    cameraParams.rotZ = round(camera.rotation.z);
    cameraParams.radius = round(
      Math.sqrt(
        camera.position.x ** 2 +
          camera.position.y ** 2 +
          camera.position.z ** 2
      )
    );
  });

  return null;
};

export default CameraDebugGUI;
