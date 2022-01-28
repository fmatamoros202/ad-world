/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import rig3 from './rig3.gltf';
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Model({ ...props }) {

  useFrame((state,delta)=>{
    (group.current.rotation.y += 0.01)
  })


  const group = useRef()
  const { nodes, materials } = useGLTF(rig3)
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 5, 0]} scale={[1, 5, 1]}>
        <mesh geometry={nodes.Cylinder001_1.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['Material.005']} />
      </group>
    </group>
  )
}

useGLTF.preload(rig3)
