/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/3Dmodel/model.gltf --exportdefault --shadows --types --output src/assets/model2.tsx 
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type ActionName = 'Animation'

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    ground_Baked: THREE.Mesh
    Blue_Baked: THREE.Mesh
    lampe_Baked: THREE.Mesh
    Light_Baked: THREE.Mesh
    Orange_Baked: THREE.Mesh
    SignBackground_Baked: THREE.Mesh
    wallTop_Baked: THREE.Mesh
    Vittre_Baked: THREE.Mesh
    MainRMAEELamesPleines007_Baked: THREE.Mesh
    RMAEELamesPleines023_Baked: THREE.Mesh
    RMAEELamesPleines024_Baked: THREE.Mesh
    RMAEELamesPleines025_Baked: THREE.Mesh
    RMAEELamesPleines026_Baked: THREE.Mesh
    RMAEELamesPleines027_Baked: THREE.Mesh
    RMAEELamesPleines028_Baked: THREE.Mesh
    RMAEELamesPleines029_Baked: THREE.Mesh
    RMAEELamesPleines030_Baked: THREE.Mesh
    RMAEELamesPleines031_Baked: THREE.Mesh
    RMAEELamesPleines032_Baked: THREE.Mesh
    RMAEELamesPleines033_Baked: THREE.Mesh
    RMAEELamesPleines034_Baked: THREE.Mesh
    RMAEELamesPleines035_Baked: THREE.Mesh
    RMAEELamesPleines036_Baked: THREE.Mesh
    RMAEELamesPleines037_Baked: THREE.Mesh
    RMAEELamesPleines038_Baked: THREE.Mesh
    RMAEELamesPleines039_Baked: THREE.Mesh
    RMAEELamesPleines040_Baked: THREE.Mesh
    RMAEELamesPleines041_Baked: THREE.Mesh
    RMAEELamesPleines042_Baked: THREE.Mesh
    RMAEELamesPleines043_Baked: THREE.Mesh
    RMAEELamesPleines044_Baked: THREE.Mesh
    MainRMAEELamesPleines006_Baked: THREE.Mesh
    RMAEELamesmicroperforees023_Baked: THREE.Mesh
    RMAEELamesmicroperforees024_Baked: THREE.Mesh
    RMAEELamesmicroperforees025_Baked: THREE.Mesh
    RMAEELamesmicroperforees026_Baked: THREE.Mesh
    RMAEELamesmicroperforees027_Baked: THREE.Mesh
    RMAEELamesmicroperforees028_Baked: THREE.Mesh
    RMAEELamesmicroperforees029_Baked: THREE.Mesh
    RMAEELamesmicroperforees030_Baked: THREE.Mesh
    RMAEELamesmicroperforees031_Baked: THREE.Mesh
    RMAEELamesmicroperforees032_Baked: THREE.Mesh
    RMAEELamesmicroperforees033_Baked: THREE.Mesh
    RMAEELamesmicroperforees034_Baked: THREE.Mesh
    RMAEELamesmicroperforees035_Baked: THREE.Mesh
    RMAEELamesmicroperforees036_Baked: THREE.Mesh
    RMAEELamesmicroperforees037_Baked: THREE.Mesh
    RMAEELamesmicroperforees038_Baked: THREE.Mesh
    RMAEELamesmicroperforees039_Baked: THREE.Mesh
    RMAEELamesmicroperforees040_Baked: THREE.Mesh
    RMAEELamesmicroperforees041_Baked: THREE.Mesh
    RMAEELamesmicroperforees042_Baked: THREE.Mesh
    RMAEELamesmicroperforees043_Baked: THREE.Mesh
    RMAEELamesmicroperforees044_Baked: THREE.Mesh
    MainRMAEELamesPleines002_Baked: THREE.Mesh
    RMAEEGrilleBijoutier022_Baked: THREE.Mesh
    RMAEEGrilleBijoutier023_Baked: THREE.Mesh
    RMAEEGrilleBijoutier024_Baked: THREE.Mesh
    RMAEEGrilleBijoutier025_Baked: THREE.Mesh
    RMAEEGrilleBijoutier026_Baked: THREE.Mesh
    RMAEEGrilleBijoutier027_Baked: THREE.Mesh
    RMAEEGrilleBijoutier028_Baked: THREE.Mesh
    RMAEEGrilleBijoutier029_Baked: THREE.Mesh
    RMAEEGrilleBijoutier030_Baked: THREE.Mesh
    RMAEEGrilleBijoutier031_Baked: THREE.Mesh
    RMAEEGrilleBijoutier032_Baked: THREE.Mesh
    RMAEEGrilleBijoutier033_Baked: THREE.Mesh
    RMAEEGrilleBijoutier034_Baked: THREE.Mesh
    RMAEEGrilleBijoutier035_Baked: THREE.Mesh
    RMAEEGrilleBijoutier036_Baked: THREE.Mesh
    RMAEEGrilleBijoutier037_Baked: THREE.Mesh
    RMAEEGrilleBijoutier038_Baked: THREE.Mesh
    RMAEEGrilleBijoutier039_Baked: THREE.Mesh
    RMAEEGrilleBijoutier040_Baked: THREE.Mesh
    RMAEEGrilleBijoutier041_Baked: THREE.Mesh
    RMAEEGrilleBijoutier042_Baked: THREE.Mesh
    RMAEEGrilleBijoutier043_Baked: THREE.Mesh
    MainRMAEELamesPleines005_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple022_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple023_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple024_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple025_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple026_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple027_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple028_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple029_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple030_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple031_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple032_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple033_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple034_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple035_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple036_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple037_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple038_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple039_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple040_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple041_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple042_Baked: THREE.Mesh
    RMAEEGrilleCobraSimple043_Baked: THREE.Mesh
    MainRMAEEGrilleCobraRenforcees001_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees022_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees023_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees024_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees025_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees026_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees027_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees028_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees029_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees030_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees031_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees032_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees033_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees034_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees035_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees036_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees037_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees038_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees039_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees040_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees041_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees042_Baked: THREE.Mesh
    RMAEEGrilleCobraRenforcees043_Baked: THREE.Mesh
    CoffreFrontRMAEI_Baked: THREE.Mesh
  }
  materials: {
    ['Main-ground_Baked']: THREE.MeshStandardMaterial
    ['Maintop_Baked.021']: THREE.MeshStandardMaterial
    ['Maintop_Baked.024']: THREE.MeshStandardMaterial
    ['Maintop_Baked.019']: THREE.MeshStandardMaterial
    ['Maintop_Baked.020']: THREE.MeshStandardMaterial
    ['Maintop_Baked.022']: THREE.MeshStandardMaterial
    ['Maintop_Baked.023']: THREE.MeshStandardMaterial
    vittre_Baked: THREE.MeshPhysicalMaterial
    RimsR: THREE.MeshStandardMaterial
  }
  animations: GLTFAction[]
}

export default function Model(props: JSX.IntrinsicElements['group']) {

  const { nodes, materials } = useGLTF('/model.gltf') as GLTFResult

  return (
    <group  {...props} dispose={null}>
      <group name="Scene">
        <group name="Scene_Collection">
          <group name="SimpleBake_Bakes">
            <group name="RM_Main_Baked">
              <mesh name="ground_Baked" castShadow receiveShadow geometry={nodes.ground_Baked.geometry} material={materials['Main-ground_Baked']} />
              <mesh name="Blue_Baked" castShadow receiveShadow geometry={nodes.Blue_Baked.geometry} material={materials['Maintop_Baked.021']} />
              <mesh name="lampe_Baked" castShadow receiveShadow geometry={nodes.lampe_Baked.geometry} material={materials['Maintop_Baked.024']} />
              <mesh name="Light_Baked" castShadow receiveShadow geometry={nodes.Light_Baked.geometry} material={materials['Maintop_Baked.019']} />
              <mesh name="Orange_Baked" castShadow receiveShadow geometry={nodes.Orange_Baked.geometry} material={materials['Maintop_Baked.020']} />
              <mesh name="SignBackground_Baked" castShadow receiveShadow geometry={nodes.SignBackground_Baked.geometry} material={materials['Maintop_Baked.022']} />
              <mesh name="wallTop_Baked" castShadow receiveShadow geometry={nodes.wallTop_Baked.geometry} material={materials['Maintop_Baked.023']} />
              <mesh name="Vittre_Baked" castShadow receiveShadow geometry={nodes.Vittre_Baked.geometry} material={materials.vittre_Baked} />
            </group>
            <group name="RMBaked">
              <group name="RM_en_applique_enroulement_interieurBaked">
                <group name="RMAEILamesPleinesBaked">
                  <mesh name="MainRMAEELamesPleines007_Baked" castShadow receiveShadow geometry={nodes.MainRMAEELamesPleines007_Baked.geometry} material={materials.RimsR} position={[0.145, 0.089, -0.001]} rotation={[Math.PI, 0, Math.PI]} />
                  <mesh name="RMAEELamesPleines023_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines023_Baked.geometry} material={materials.RimsR} position={[0.179, 0.969, -0.001]} rotation={[-Math.PI, 0, -2.186]} />
                  <mesh name="RMAEELamesPleines024_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines024_Baked.geometry} material={materials.RimsR} position={[0.154, 0.938, -0.001]} rotation={[Math.PI, 0, -2.791]} />
                  <mesh name="RMAEELamesPleines025_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines025_Baked.geometry} material={materials.RimsR} position={[0.146, 0.898, -0.001]} rotation={[Math.PI, 0, -3.094]} />
                  <mesh name="RMAEELamesPleines026_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines026_Baked.geometry} material={materials.RimsR} position={[0.145, 0.858, -0.001]} rotation={[Math.PI, 0, 3.141]} />
                  <mesh name="RMAEELamesPleines027_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines027_Baked.geometry} material={materials.RimsR} position={[0.145, 0.817, -0.001]} rotation={[Math.PI, 0, 3.141]} />
                  <mesh name="RMAEELamesPleines028_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines028_Baked.geometry} material={materials.RimsR} position={[0.145, 0.777, -0.001]} rotation={[Math.PI, 0, 3.142]} />
                  <mesh name="RMAEELamesPleines029_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines029_Baked.geometry} material={materials.RimsR} position={[0.145, 0.736, -0.001]} rotation={[Math.PI, 0, 3.142]} />
                  <mesh name="RMAEELamesPleines030_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines030_Baked.geometry} material={materials.RimsR} position={[0.145, 0.696, -0.001]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesPleines031_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines031_Baked.geometry} material={materials.RimsR} position={[0.145, 0.655, -0.001]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesPleines032_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines032_Baked.geometry} material={materials.RimsR} position={[0.145, 0.615, -0.001]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesPleines033_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines033_Baked.geometry} material={materials.RimsR} position={[0.145, 0.574, -0.001]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesPleines034_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines034_Baked.geometry} material={materials.RimsR} position={[0.145, 0.534, -0.001]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesPleines035_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines035_Baked.geometry} material={materials.RimsR} position={[0.145, 0.493, -0.001]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesPleines036_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines036_Baked.geometry} material={materials.RimsR} position={[0.145, 0.453, -0.001]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesPleines037_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines037_Baked.geometry} material={materials.RimsR} position={[0.145, 0.412, -0.001]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesPleines038_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines038_Baked.geometry} material={materials.RimsR} position={[0.145, 0.372, -0.001]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesPleines039_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines039_Baked.geometry} material={materials.RimsR} position={[0.145, 0.331, -0.001]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesPleines040_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines040_Baked.geometry} material={materials.RimsR} position={[0.145, 0.291, -0.001]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesPleines041_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines041_Baked.geometry} material={materials.RimsR} position={[0.145, 0.25, -0.001]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesPleines042_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines042_Baked.geometry} material={materials.RimsR} position={[0.145, 0.21, -0.001]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesPleines043_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines043_Baked.geometry} material={materials.RimsR} position={[0.145, 0.169, -0.001]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesPleines044_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesPleines044_Baked.geometry} material={materials.RimsR} position={[0.145, 0.129, -0.001]} rotation={[Math.PI, 0, Math.PI]} />
                </group>
                <group name="RMAEILamesmicroperforeesBaked">
                  <mesh name="MainRMAEELamesPleines006_Baked" castShadow receiveShadow geometry={nodes.MainRMAEELamesPleines006_Baked.geometry} material={materials.RimsR} position={[0.145, 0.089, -0.001]} rotation={[Math.PI, 0, Math.PI]} />
                  <mesh name="RMAEELamesmicroperforees023_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees023_Baked.geometry} material={materials.RimsR} position={[0.179, 0.969, 0.002]} rotation={[-Math.PI, 0, -2.186]} />
                  <mesh name="RMAEELamesmicroperforees024_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees024_Baked.geometry} material={materials.RimsR} position={[0.153, 0.938, 0.002]} rotation={[Math.PI, 0, -2.791]} />
                  <mesh name="RMAEELamesmicroperforees025_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees025_Baked.geometry} material={materials.RimsR} position={[0.146, 0.898, 0.002]} rotation={[Math.PI, 0, -3.094]} />
                  <mesh name="RMAEELamesmicroperforees026_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees026_Baked.geometry} material={materials.RimsR} position={[0.145, 0.858, 0.002]} rotation={[Math.PI, 0, 3.141]} />
                  <mesh name="RMAEELamesmicroperforees027_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees027_Baked.geometry} material={materials.RimsR} position={[0.145, 0.817, 0.002]} rotation={[Math.PI, 0, 3.141]} />
                  <mesh name="RMAEELamesmicroperforees028_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees028_Baked.geometry} material={materials.RimsR} position={[0.145, 0.777, 0.002]} rotation={[Math.PI, 0, 3.142]} />
                  <mesh name="RMAEELamesmicroperforees029_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees029_Baked.geometry} material={materials.RimsR} position={[0.145, 0.736, 0.002]} rotation={[Math.PI, 0, 3.142]} />
                  <mesh name="RMAEELamesmicroperforees030_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees030_Baked.geometry} material={materials.RimsR} position={[0.145, 0.696, 0.002]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesmicroperforees031_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees031_Baked.geometry} material={materials.RimsR} position={[0.145, 0.655, 0.002]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesmicroperforees032_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees032_Baked.geometry} material={materials.RimsR} position={[0.145, 0.615, 0.002]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesmicroperforees033_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees033_Baked.geometry} material={materials.RimsR} position={[0.145, 0.574, 0.002]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesmicroperforees034_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees034_Baked.geometry} material={materials.RimsR} position={[0.145, 0.534, 0.002]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesmicroperforees035_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees035_Baked.geometry} material={materials.RimsR} position={[0.145, 0.493, 0.002]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesmicroperforees036_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees036_Baked.geometry} material={materials.RimsR} position={[0.145, 0.453, 0.002]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesmicroperforees037_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees037_Baked.geometry} material={materials.RimsR} position={[0.145, 0.412, 0.002]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesmicroperforees038_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees038_Baked.geometry} material={materials.RimsR} position={[0.145, 0.372, 0.002]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesmicroperforees039_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees039_Baked.geometry} material={materials.RimsR} position={[0.145, 0.331, 0.002]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesmicroperforees040_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees040_Baked.geometry} material={materials.RimsR} position={[0.145, 0.291, 0.002]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesmicroperforees041_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees041_Baked.geometry} material={materials.RimsR} position={[0.145, 0.25, 0.002]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesmicroperforees042_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees042_Baked.geometry} material={materials.RimsR} position={[0.145, 0.21, 0.002]} rotation={[-Math.PI, 0, -3.141]} />
                  <mesh name="RMAEELamesmicroperforees043_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees043_Baked.geometry} material={materials.RimsR} position={[0.145, 0.169, 0.002]} rotation={[-Math.PI, 0, -3.142]} />
                  <mesh name="RMAEELamesmicroperforees044_Baked" castShadow receiveShadow geometry={nodes.RMAEELamesmicroperforees044_Baked.geometry} material={materials.RimsR} position={[0.145, 0.129, 0.002]} rotation={[Math.PI, 0, Math.PI]} />
                </group>
                <group name="RMAEIGrilleBijoutierBaked">
                  <mesh name="MainRMAEELamesPleines002_Baked" castShadow receiveShadow geometry={nodes.MainRMAEELamesPleines002_Baked.geometry} material={materials.RimsR} position={[0.145, 0.089, -0.001]} rotation={[Math.PI, 0, Math.PI]} />
                  <mesh name="RMAEEGrilleBijoutier022_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier022_Baked.geometry} material={materials.RimsR} position={[0.166, 0.96, -0.007]} rotation={[-Math.PI, 0, -2.186]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier023_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier023_Baked.geometry} material={materials.RimsR} position={[0.148, 0.924, -0.007]} rotation={[Math.PI, 0, -2.791]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier024_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier024_Baked.geometry} material={materials.RimsR} position={[0.145, 0.883, -0.007]} rotation={[Math.PI, 0, -3.094]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier025_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier025_Baked.geometry} material={materials.RimsR} position={[0.145, 0.843, -0.007]} rotation={[Math.PI, 0, 3.141]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier026_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier026_Baked.geometry} material={materials.RimsR} position={[0.145, 0.802, -0.007]} rotation={[Math.PI, 0, 3.141]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier027_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier027_Baked.geometry} material={materials.RimsR} position={[0.145, 0.762, -0.007]} rotation={[Math.PI, 0, 3.142]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier028_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier028_Baked.geometry} material={materials.RimsR} position={[0.145, 0.721, -0.007]} rotation={[Math.PI, 0, 3.142]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier029_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier029_Baked.geometry} material={materials.RimsR} position={[0.145, 0.681, -0.007]} rotation={[-Math.PI, 0, -3.142]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier030_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier030_Baked.geometry} material={materials.RimsR} position={[0.145, 0.64, -0.007]} rotation={[-Math.PI, 0, -3.142]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier031_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier031_Baked.geometry} material={materials.RimsR} position={[0.145, 0.6, -0.007]} rotation={[-Math.PI, 0, -3.142]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier032_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier032_Baked.geometry} material={materials.RimsR} position={[0.145, 0.559, -0.007]} rotation={[-Math.PI, 0, -3.142]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier033_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier033_Baked.geometry} material={materials.RimsR} position={[0.145, 0.519, -0.007]} rotation={[-Math.PI, 0, -3.142]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier034_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier034_Baked.geometry} material={materials.RimsR} position={[0.145, 0.478, -0.007]} rotation={[-Math.PI, 0, -3.142]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier035_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier035_Baked.geometry} material={materials.RimsR} position={[0.145, 0.438, -0.007]} rotation={[-Math.PI, 0, -3.142]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier036_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier036_Baked.geometry} material={materials.RimsR} position={[0.145, 0.397, -0.007]} rotation={[-Math.PI, 0, -3.141]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier037_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier037_Baked.geometry} material={materials.RimsR} position={[0.145, 0.357, -0.007]} rotation={[-Math.PI, 0, -3.141]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier038_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier038_Baked.geometry} material={materials.RimsR} position={[0.145, 0.316, -0.007]} rotation={[-Math.PI, 0, -3.141]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier039_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier039_Baked.geometry} material={materials.RimsR} position={[0.145, 0.276, -0.007]} rotation={[-Math.PI, 0, -3.141]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier040_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier040_Baked.geometry} material={materials.RimsR} position={[0.145, 0.235, -0.007]} rotation={[-Math.PI, 0, -3.141]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier041_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier041_Baked.geometry} material={materials.RimsR} position={[0.145, 0.195, -0.007]} rotation={[-Math.PI, 0, -3.141]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier042_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier042_Baked.geometry} material={materials.RimsR} position={[0.145, 0.154, -0.007]} rotation={[-Math.PI, 0, -3.142]} scale={1.149} />
                  <mesh name="RMAEEGrilleBijoutier043_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleBijoutier043_Baked.geometry} material={materials.RimsR} position={[0.145, 0.114, -0.007]} rotation={[Math.PI, 0, Math.PI]} scale={1.149} />
                </group>
                <group name="RMAEIGrilleCobraSimpleBaked">
                  <mesh name="MainRMAEELamesPleines005_Baked" castShadow receiveShadow geometry={nodes.MainRMAEELamesPleines005_Baked.geometry} material={materials.RimsR} position={[0.145, 0.089, -0.001]} rotation={[Math.PI, 0, Math.PI]} />
                  <mesh name="RMAEEGrilleCobraSimple022_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple022_Baked.geometry} material={materials.RimsR} position={[0.176, 0.967, 0.002]} rotation={[-Math.PI, 0, -2.186]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple023_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple023_Baked.geometry} material={materials.RimsR} position={[0.153, 0.935, 0.002]} rotation={[Math.PI, 0, -2.791]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple024_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple024_Baked.geometry} material={materials.RimsR} position={[0.145, 0.896, 0.002]} rotation={[Math.PI, 0, -3.094]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple025_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple025_Baked.geometry} material={materials.RimsR} position={[0.145, 0.855, 0.002]} rotation={[Math.PI, 0, 3.141]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple026_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple026_Baked.geometry} material={materials.RimsR} position={[0.145, 0.815, 0.002]} rotation={[Math.PI, 0, 3.141]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple027_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple027_Baked.geometry} material={materials.RimsR} position={[0.145, 0.774, 0.002]} rotation={[Math.PI, 0, 3.142]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple028_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple028_Baked.geometry} material={materials.RimsR} position={[0.145, 0.734, 0.002]} rotation={[Math.PI, 0, 3.142]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple029_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple029_Baked.geometry} material={materials.RimsR} position={[0.145, 0.693, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple030_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple030_Baked.geometry} material={materials.RimsR} position={[0.145, 0.653, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple031_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple031_Baked.geometry} material={materials.RimsR} position={[0.145, 0.612, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple032_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple032_Baked.geometry} material={materials.RimsR} position={[0.145, 0.572, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple033_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple033_Baked.geometry} material={materials.RimsR} position={[0.145, 0.531, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple034_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple034_Baked.geometry} material={materials.RimsR} position={[0.145, 0.491, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple035_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple035_Baked.geometry} material={materials.RimsR} position={[0.145, 0.45, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple036_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple036_Baked.geometry} material={materials.RimsR} position={[0.145, 0.41, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple037_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple037_Baked.geometry} material={materials.RimsR} position={[0.145, 0.369, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple038_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple038_Baked.geometry} material={materials.RimsR} position={[0.145, 0.329, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple039_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple039_Baked.geometry} material={materials.RimsR} position={[0.145, 0.288, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple040_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple040_Baked.geometry} material={materials.RimsR} position={[0.145, 0.248, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple041_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple041_Baked.geometry} material={materials.RimsR} position={[0.145, 0.207, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple042_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple042_Baked.geometry} material={materials.RimsR} position={[0.145, 0.167, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.065} />
                  <mesh name="RMAEEGrilleCobraSimple043_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraSimple043_Baked.geometry} material={materials.RimsR} position={[0.145, 0.126, 0.002]} rotation={[Math.PI, 0, Math.PI]} scale={1.065} />
                </group>
                <group name="RMAEIGrilleCobraRenforceesBaked">
                  <mesh name="MainRMAEEGrilleCobraRenforcees001_Baked" castShadow receiveShadow geometry={nodes.MainRMAEEGrilleCobraRenforcees001_Baked.geometry} material={materials.RimsR} position={[0.145, 0.089, -0.001]} rotation={[Math.PI, 0, Math.PI]} />
                  <mesh name="RMAEEGrilleCobraRenforcees022_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees022_Baked.geometry} material={materials.RimsR} position={[0.179, 0.969, 0.002]} rotation={[-Math.PI, 0, -2.186]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees023_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees023_Baked.geometry} material={materials.RimsR} position={[0.154, 0.938, 0.002]} rotation={[Math.PI, 0, -2.791]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees024_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees024_Baked.geometry} material={materials.RimsR} position={[0.146, 0.899, 0.002]} rotation={[Math.PI, 0, -3.094]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees025_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees025_Baked.geometry} material={materials.RimsR} position={[0.145, 0.858, 0.002]} rotation={[Math.PI, 0, 3.141]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees026_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees026_Baked.geometry} material={materials.RimsR} position={[0.145, 0.818, 0.002]} rotation={[Math.PI, 0, 3.141]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees027_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees027_Baked.geometry} material={materials.RimsR} position={[0.145, 0.777, 0.002]} rotation={[Math.PI, 0, 3.142]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees028_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees028_Baked.geometry} material={materials.RimsR} position={[0.145, 0.737, 0.002]} rotation={[Math.PI, 0, 3.142]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees029_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees029_Baked.geometry} material={materials.RimsR} position={[0.145, 0.696, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees030_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees030_Baked.geometry} material={materials.RimsR} position={[0.145, 0.656, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees031_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees031_Baked.geometry} material={materials.RimsR} position={[0.145, 0.615, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees032_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees032_Baked.geometry} material={materials.RimsR} position={[0.145, 0.575, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees033_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees033_Baked.geometry} material={materials.RimsR} position={[0.145, 0.534, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees034_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees034_Baked.geometry} material={materials.RimsR} position={[0.145, 0.494, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees035_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees035_Baked.geometry} material={materials.RimsR} position={[0.145, 0.453, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees036_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees036_Baked.geometry} material={materials.RimsR} position={[0.145, 0.413, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees037_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees037_Baked.geometry} material={materials.RimsR} position={[0.145, 0.372, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees038_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees038_Baked.geometry} material={materials.RimsR} position={[0.145, 0.332, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees039_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees039_Baked.geometry} material={materials.RimsR} position={[0.145, 0.291, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees040_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees040_Baked.geometry} material={materials.RimsR} position={[0.145, 0.251, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees041_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees041_Baked.geometry} material={materials.RimsR} position={[0.145, 0.21, 0.002]} rotation={[-Math.PI, 0, -3.141]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees042_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees042_Baked.geometry} material={materials.RimsR} position={[0.145, 0.17, 0.002]} rotation={[-Math.PI, 0, -3.142]} scale={1.072} />
                  <mesh name="RMAEEGrilleCobraRenforcees043_Baked" castShadow receiveShadow geometry={nodes.RMAEEGrilleCobraRenforcees043_Baked.geometry} material={materials.RimsR} position={[0.145, 0.129, 0.002]} rotation={[Math.PI, 0, Math.PI]} scale={1.072} />
                </group>
                <group name="CoffreAndCoulisseBaked">
                  <mesh name="CoffreFrontRMAEI_Baked" castShadow receiveShadow geometry={nodes.CoffreFrontRMAEI_Baked.geometry} material={materials.RimsR} position={[-0.09, 0.039, -0.005]} rotation={[Math.PI, 0, Math.PI]} />
                </group>
              </group>
              <group name="RM_sous_linteau_enroulement_exterieurBaked" />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.gltf')
