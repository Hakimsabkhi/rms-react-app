import React, { useEffect, useRef } from "react";  // Importing React and necessary hooks.
import { useThree, useFrame } from "@react-three/fiber";  // Importing hooks from `react-three/fiber` for managing the scene and animation frame.
import { useSelector } from "react-redux";  // Importing `useSelector` from `react-redux` to access the Redux store.
import * as THREE from "three";  // Importing the `three` library to interact with 3D objects and math functions.
import { selectRideauMetallique } from "../store/rideauSlice";  // Importing the selector to get rideau state from the Redux store.

interface ControlledCameraProps {
  controlsRef?: React.MutableRefObject<any>;  // Defining a prop to optionally pass a reference to the controls (used to manipulate the camera).
}

const ControlledCamera: React.FC<ControlledCameraProps> = ({ controlsRef }) => {
  const { camera, gl } = useThree();  // Extracting the `camera` and `gl` (WebGLRenderer) from the `useThree` hook.
  const rideau = useSelector(selectRideauMetallique);  // Accessing the `rideau` state from the Redux store.

  const targetPositionRef = useRef(new THREE.Vector3());  // Creating a reference to hold the target position for the camera.

  const isUserInteracting = useRef(false);  // Creating a reference to track whether the user is interacting with the camera (through mouse events).
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);  // Creating a reference to store the timeout ID.

  // Handling mouse interaction state to track if the user is interacting with the camera.
  useEffect(() => {
    const onPointerDown = () => {
      isUserInteracting.current = true;  // When the mouse is pressed down, set the interaction state to `true`.

      // Reset the timeout if it's already set.
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout to reset the interaction state after 5 seconds.
      timeoutRef.current = setTimeout(() => {
        isUserInteracting.current = false;
      }, 5000);  // 5000 milliseconds = 5 seconds
    };

    const onPointerUp = () => {
      // Set to true immediately when the mouse is released.
      isUserInteracting.current = true;

      // Reset the timeout.
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        isUserInteracting.current = false;
      }, 5000);
    };

    const onWheel = () => {
      // Reset the timeout when the mouse wheel is used.
      isUserInteracting.current = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        isUserInteracting.current = false;
      }, 5000);
    };

    // Adding event listeners to detect mouse down, mouse up, and wheel events.
    gl.domElement.addEventListener("mousedown", onPointerDown);
    gl.domElement.addEventListener("mouseup", onPointerUp);
    gl.domElement.addEventListener("wheel", onWheel);

    // Cleanup event listeners on component unmount.
    return () => {
      gl.domElement.removeEventListener("mousedown", onPointerDown);
      gl.domElement.removeEventListener("mouseup", onPointerUp);
      gl.domElement.removeEventListener("wheel", onWheel);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [gl]);

  useEffect(() => {
    // Fixed current radius (distance from the origin) set to 5.
    let currentRadius = 5;
    let theta = 0;  // Variable to hold the angle that the camera will be placed at.

    // Determine the angle (theta) based on the `rideau` object (state from Redux).
    if (rideau.typeDePose.mainType === "En applique") {
      if (rideau.typeDePose.subType === "extérieur" && rideau.motorisation === "Manuel") {
        currentRadius = 5;
        isUserInteracting.current = false;
        theta = -0.9;
      } else if (rideau.typeDePose.subType === "extérieur" && rideau.motorisation === "Motorisé") {
        currentRadius = 3;
        isUserInteracting.current = false;
        theta = -0.9;
      } else if (rideau.typeDePose.subType === "intérieur" && rideau.motorisation === "Manuel") {
        currentRadius = 5;
        isUserInteracting.current = false;
        theta = 2;
      } else if (rideau.typeDePose.subType === "intérieur" && rideau.motorisation === "Motorisé") {
        currentRadius = 3;
        isUserInteracting.current = false;
        theta = 2;
      }
    } else if (rideau.typeDePose.mainType === "Tunnel") {
      if (rideau.typeDePose.subType === "extérieur" && rideau.motorisation === "Manuel") {
        currentRadius = 5;
        isUserInteracting.current = false;
        theta = -0.9;
      } else if (rideau.typeDePose.subType === "extérieur" && rideau.motorisation === "Motorisé") {
        currentRadius = 3;
        isUserInteracting.current = false;
        theta = -0.9;
      } else if (rideau.typeDePose.subType === "intérieur" && rideau.motorisation === "Manuel") {
        currentRadius = 5;
        isUserInteracting.current = false;
        theta = 2;
      } else if (rideau.typeDePose.subType === "intérieur" && rideau.motorisation === "Motorisé") {
        currentRadius = 3;
        isUserInteracting.current = false;
        theta = 2;
      }
    }

    // Calculate the new target position based on the radius and angle (theta).
    const x = currentRadius * Math.sin(theta);
    const y = 0;
    const z = currentRadius * Math.cos(theta);
    targetPositionRef.current.set(x, y, z);
  }, [rideau, camera]);

  useFrame(() => {
    // Update the camera's position on each frame (for smooth animation)
    // Only update if the user is not interacting.
    if (!isUserInteracting.current) {
      camera.position.lerp(targetPositionRef.current, 0.02);
    }
  });

  return null;  // This component does not render any JSX.
};

export default ControlledCamera;
