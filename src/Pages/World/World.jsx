import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import './World.scss';



import Plane from '../../Components/Plane/Plane';

function World(props) {
    return (
        <div className='world'>
            <Canvas sRGB camera={{position:[0,2,10]}}>
                <OrbitControls/>
                <Sky sunPosition={[50,100,100]}/>
                <ambientLight intensity={0.5}/>
                <pointLight intensity={0.7} color='red' position={[0,2,1]}/>
                <Suspense fallback='null'>
                    <Plane position={[0,-1,0]}/>
                </Suspense>
                <mesh>
                    <boxGeometry/>
                    <meshStandardMaterial/>
                </mesh>
            </Canvas>
        </div>
    );
}

export default World;