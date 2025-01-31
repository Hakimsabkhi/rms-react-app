import React, { useEffect, useRef, useState, useMemo } from 'react';
import { GUI } from 'lil-gui';
import * as THREE from 'three';

const Lighting = () => {
  // ------------------------------------------------------------------
  // REFS
  // ------------------------------------------------------------------
  const directionalLightRef1 = useRef<THREE.DirectionalLight>(null);
  const directionalLightRef2 = useRef<THREE.DirectionalLight>(null);
  const ambientLightRef = useRef<THREE.AmbientLight>(null);

  // ------------------------------------------------------------------
  // STATE: DIRECTIONAL LIGHT 1
  // ------------------------------------------------------------------
  const [light1Position, setLight1Position] = useState({ x: -2, y: 1.5, z: 0 });
  const [light1Intensity, setLight1Intensity] = useState(5);
  const [light1Color, setLight1Color] = useState('#e3e3e3');
  // Target for Light 1 (the direction is from position -> target)
  const [light1Target, setLight1Target] = useState({ x: 0, y: -0.5, z: 0 });
  // Show/hide the black arrow for Light 1
  const [showRay1, setShowRay1] = useState(true);

  // ------------------------------------------------------------------
  // STATE: DIRECTIONAL LIGHT 2
  // ------------------------------------------------------------------
  const [light2Position, setLight2Position] = useState({ x: 2, y: 1.5, z: 0 });
  const [light2Intensity, setLight2Intensity] = useState(5);
  const [light2Color, setLight2Color] = useState('#e3e3e3');
  // Target for Light 2
  const [light2Target, setLight2Target] = useState({ x: 0, y: 0, z: 0 });
  // Show/hide the black arrow for Light 2
  const [showRay2, setShowRay2] = useState(true);

  // ------------------------------------------------------------------
  // STATE: AMBIENT LIGHT
  // ------------------------------------------------------------------
  const [ambientLightIntensity, setAmbientLightIntensity] = useState(3);

  // ------------------------------------------------------------------
  // GUI REFS (to bind data to lil-gui)
  // ------------------------------------------------------------------
  // Light 1
  const light1PositionRef = useRef(light1Position);
  const light1OptionsRef = useRef({
    intensity: light1Intensity,
    color: light1Color,
  });
  const light1TargetRef = useRef(light1Target);
  const showRay1Ref = useRef({ showRay1 });

  // Light 2
  const light2PositionRef = useRef(light2Position);
  const light2OptionsRef = useRef({
    intensity: light2Intensity,
    color: light2Color,
  });
  const light2TargetRef = useRef(light2Target);
  const showRay2Ref = useRef({ showRay2 });

  // Ambient Light
  const ambientLightOptionsRef = useRef({
    intensity: ambientLightIntensity,
  });

  // ------------------------------------------------------------------
  // SETUP: LIL-GUI
  // ------------------------------------------------------------------
  useEffect(() => {
    const gui = new GUI();

    // -----------------------------
    // Folder: Directional Light 1
    // -----------------------------
    const dirLightFolder1 = gui.addFolder('Directional Light 1');

    // Position (X,Y,Z)
    dirLightFolder1
      .add(light1PositionRef.current, 'x', -10, 10, 0.1)
      .name('Position X')
      .onChange((val: number) => {
        light1PositionRef.current.x = val;
        setLight1Position({ ...light1PositionRef.current });
      });
    dirLightFolder1
      .add(light1PositionRef.current, 'y', -10, 10, 0.1)
      .name('Position Y')
      .onChange((val: number) => {
        light1PositionRef.current.y = val;
        setLight1Position({ ...light1PositionRef.current });
      });
    dirLightFolder1
      .add(light1PositionRef.current, 'z', -10, 10, 0.1)
      .name('Position Z')
      .onChange((val: number) => {
        light1PositionRef.current.z = val;
        setLight1Position({ ...light1PositionRef.current });
      });

    // Color & Intensity
    dirLightFolder1
      .addColor(light1OptionsRef.current, 'color')
      .name('Color')
      .onChange((val: string) => {
        light1OptionsRef.current.color = val;
        setLight1Color(val);
      });
    dirLightFolder1
      .add(light1OptionsRef.current, 'intensity', 0, 10, 0.1)
      .name('Intensity')
      .onChange((val: number) => {
        light1OptionsRef.current.intensity = val;
        setLight1Intensity(val);
      });

    // Target
    const dirLight1TargetFolder = dirLightFolder1.addFolder('Target');
    dirLight1TargetFolder
      .add(light1TargetRef.current, 'x', -10, 10, 0.1)
      .name('Target X')
      .onChange((val: number) => {
        light1TargetRef.current.x = val;
        setLight1Target({ ...light1TargetRef.current });
      });
    dirLight1TargetFolder
      .add(light1TargetRef.current, 'y', -10, 10, 0.1)
      .name('Target Y')
      .onChange((val: number) => {
        light1TargetRef.current.y = val;
        setLight1Target({ ...light1TargetRef.current });
      });
    dirLight1TargetFolder
      .add(light1TargetRef.current, 'z', -10, 10, 0.1)
      .name('Target Z')
      .onChange((val: number) => {
        light1TargetRef.current.z = val;
        setLight1Target({ ...light1TargetRef.current });
      });

    // Show Ray (checkbox)
    dirLightFolder1
      .add(showRay1Ref.current, 'showRay1')
      .name('Show Ray')
      .onChange((val: boolean) => {
        showRay1Ref.current.showRay1 = val;
        setShowRay1(val);
      });

    // -----------------------------
    // Folder: Directional Light 2
    // -----------------------------
    const dirLightFolder2 = gui.addFolder('Directional Light 2');

    // Position (X,Y,Z)
    dirLightFolder2
      .add(light2PositionRef.current, 'x', -10, 10, 0.1)
      .name('Position X')
      .onChange((val: number) => {
        light2PositionRef.current.x = val;
        setLight2Position({ ...light2PositionRef.current });
      });
    dirLightFolder2
      .add(light2PositionRef.current, 'y', -10, 10, 0.1)
      .name('Position Y')
      .onChange((val: number) => {
        light2PositionRef.current.y = val;
        setLight2Position({ ...light2PositionRef.current });
      });
    dirLightFolder2
      .add(light2PositionRef.current, 'z', -10, 10, 0.1)
      .name('Position Z')
      .onChange((val: number) => {
        light2PositionRef.current.z = val;
        setLight2Position({ ...light2PositionRef.current });
      });

    // Color & Intensity
    dirLightFolder2
      .addColor(light2OptionsRef.current, 'color')
      .name('Color')
      .onChange((val: string) => {
        light2OptionsRef.current.color = val;
        setLight2Color(val);
      });
    dirLightFolder2
      .add(light2OptionsRef.current, 'intensity', 0, 10, 0.1)
      .name('Intensity')
      .onChange((val: number) => {
        light2OptionsRef.current.intensity = val;
        setLight2Intensity(val);
      });

    // Target
    const dirLight2TargetFolder = dirLightFolder2.addFolder('Target');
    dirLight2TargetFolder
      .add(light2TargetRef.current, 'x', -10, 10, 0.1)
      .name('Target X')
      .onChange((val: number) => {
        light2TargetRef.current.x = val;
        setLight2Target({ ...light2TargetRef.current });
      });
    dirLight2TargetFolder
      .add(light2TargetRef.current, 'y', -10, 10, 0.1)
      .name('Target Y')
      .onChange((val: number) => {
        light2TargetRef.current.y = val;
        setLight2Target({ ...light2TargetRef.current });
      });
    dirLight2TargetFolder
      .add(light2TargetRef.current, 'z', -10, 10, 0.1)
      .name('Target Z')
      .onChange((val: number) => {
        light2TargetRef.current.z = val;
        setLight2Target({ ...light2TargetRef.current });
      });

    // Show Ray (checkbox)
    dirLightFolder2
      .add(showRay2Ref.current, 'showRay2')
      .name('Show Ray')
      .onChange((val: boolean) => {
        showRay2Ref.current.showRay2 = val;
        setShowRay2(val);
      });

    // -----------------------------
    // Folder: Ambient Light
    // -----------------------------
    const ambLightFolder = gui.addFolder('Ambient Light');
    ambLightFolder
      .add(ambientLightOptionsRef.current, 'intensity', 0, 10, 0.1)
      .name('Intensity')
      .onChange((val: number) => {
        ambientLightOptionsRef.current.intensity = val;
        setAmbientLightIntensity(val);
      });

    return () => {
      gui.destroy();
    };
  }, []);

  // ------------------------------------------------------------------
  // EFFECTS: Update each directional light's "target" in three.js
  // ------------------------------------------------------------------
  useEffect(() => {
    if (!directionalLightRef1.current) return;
    directionalLightRef1.current.target.position.set(
      light1Target.x,
      light1Target.y,
      light1Target.z
    );
    directionalLightRef1.current.target.updateMatrixWorld();
  }, [light1Target]);

  useEffect(() => {
    if (!directionalLightRef2.current) return;
    directionalLightRef2.current.target.position.set(
      light2Target.x,
      light2Target.y,
      light2Target.z
    );
    directionalLightRef2.current.target.updateMatrixWorld();
  }, [light2Target]);

  // ------------------------------------------------------------------
  // ARROW HELPERS (Black Rays)
  // ------------------------------------------------------------------
  // Light 1 arrow: direction, length, origin
  const {
    arrowDirection: arrowDirection1,
    arrowLength: arrowLength1,
    arrowOrigin: arrowOrigin1,
  } = useMemo(() => {
    const pos1 = new THREE.Vector3(
      light1Position.x,
      light1Position.y,
      light1Position.z
    );
    const tar1 = new THREE.Vector3(
      light1Target.x,
      light1Target.y,
      light1Target.z
    );
    const direction1 = new THREE.Vector3().subVectors(tar1, pos1).normalize();
    const length1 = pos1.distanceTo(tar1);
    return {
      arrowDirection: direction1,
      arrowLength: length1,
      arrowOrigin: pos1,
    };
  }, [light1Position, light1Target]);

  // Light 2 arrow: direction, length, origin
  const {
    arrowDirection: arrowDirection2,
    arrowLength: arrowLength2,
    arrowOrigin: arrowOrigin2,
  } = useMemo(() => {
    const pos2 = new THREE.Vector3(
      light2Position.x,
      light2Position.y,
      light2Position.z
    );
    const tar2 = new THREE.Vector3(
      light2Target.x,
      light2Target.y,
      light2Target.z
    );
    const direction2 = new THREE.Vector3().subVectors(tar2, pos2).normalize();
    const length2 = pos2.distanceTo(tar2);
    return {
      arrowDirection: direction2,
      arrowLength: length2,
      arrowOrigin: pos2,
    };
  }, [light2Position, light2Target]);

  // ------------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------------
  return (
    <>
      {/* Ambient Light */}
      <ambientLight ref={ambientLightRef} intensity={ambientLightIntensity} />

      {/* ---------------- Directional Light #1 ---------------- */}
      <directionalLight
        ref={directionalLightRef1}
        position={[light1Position.x, light1Position.y, light1Position.z]}
        intensity={light1Intensity}
        color={light1Color}
        castShadow
      />
      {/* Sphere to visualize Light #1 position */}
      <mesh position={[light1Position.x, light1Position.y, light1Position.z]}>
        <sphereGeometry args={[0.03, 10, 10]} />
        <meshBasicMaterial color={light1Color} />
      </mesh>
      {/* Sphere to visualize Light #1 target */}
      <mesh position={[light1Target.x, light1Target.y, light1Target.z]}>
        <sphereGeometry args={[0.03, 10, 10]} />
        <meshBasicMaterial color="yellow" />
      </mesh>
      {/* Black Arrow (Ray) from Light #1 position -> target */}
      {showRay1 && (
        <primitive
          object={
            new THREE.ArrowHelper(
              arrowDirection1,        // direction
              arrowOrigin1,           // origin
              arrowLength1,           // length
              0x000000                // color (black)
            )
          }
        />
      )}

      {/* ---------------- Directional Light #2 ---------------- */}
      <directionalLight
        ref={directionalLightRef2}
        position={[light2Position.x, light2Position.y, light2Position.z]}
        intensity={light2Intensity}
        color={light2Color}
      />
      {/* Sphere to visualize Light #2 position */}
      <mesh position={[light2Position.x, light2Position.y, light2Position.z]}>
        <sphereGeometry args={[0.03, 10, 10]} />
        <meshBasicMaterial color={light2Color} />
      </mesh>
      {/* Sphere to visualize Light #2 target */}
      <mesh position={[light2Target.x, light2Target.y, light2Target.z]}>
        <sphereGeometry args={[0.03, 10, 10]} />
        <meshBasicMaterial color="yellow" />
      </mesh>
      {/* Black Arrow (Ray) from Light #2 position -> target */}
      {showRay2 && (
        <primitive
          object={
            new THREE.ArrowHelper(
              arrowDirection2,        // direction
              arrowOrigin2,           // origin
              arrowLength2,           // length
              0x000000                // color (black)
            )
          }
        />
      )}
    </>
  );
};

export default Lighting;
