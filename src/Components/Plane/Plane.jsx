import React from 'react';
import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, RepeatWrapping } from 'three';
import grass from '../../textures/grass.jpeg';

function Plane(props) {

    
    const planeTexture = useLoader(TextureLoader, grass);
    planeTexture.wrapS = RepeatWrapping;
    planeTexture.wrapT = RepeatWrapping;
    planeTexture.repeat.set(50,50);


    return (
       <mesh rotation={[-Math.PI / 2,0,0]} receiveShadow>
           <planeBufferGeometry  args={[100,100]}/>
           <meshStandardMaterial color='hotpink'/>
       </mesh>
    );
}

export default Plane;