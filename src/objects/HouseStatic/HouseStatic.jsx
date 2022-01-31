/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import house from './untitled.gltf'
// import { useFrame } from '@react-three/fiber';

export default function HouseStatic({ ...props }) {


  const group = useRef()
  const { nodes, materials } = useGLTF(house)
  return (
    <group ref={group} {...props} dispose={null} rotation={[0,-Math.PI / 2,0]} castShadow>
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} scale={3} castShadow/>
    </group>
  )
}

useGLTF.preload(house)
