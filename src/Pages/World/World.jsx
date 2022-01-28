import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, FirstPersonControls} from '@react-three/drei';
import './World.scss';
import House from '../../objects/House/House';
import Rig from '../../objects/Rig/Rig';
import Rig3 from '../../objects/Rig3/Rig3';

// import FirstPersonControls from '../../functions/controls';
import Plane from '../../Components/Plane/Plane';


// const object = document.querySelector(".world");
// const domElement = window.document
// const Controls = new FirstPersonControls(object,document);
// console.log(object);
// console.log(domElement);
console.log(FirstPersonControls);


function World(props) {
    return (
        <div className='world'>
            <Canvas sRGB camera={{position:[0,10,50]}}>
                {/* <OrbitControls/> */}
                <FirstPersonControls />
                <Sky sunPosition={[50,100,100]}/>
                <ambientLight intensity={0.5}/>
                {/* <pointLight intensity={0.7} color='red' position={[0,2,1]}/> */}
                <Suspense fallback='null'>
                    <Plane position={[0,-1,0]}/>
                    <House  position={[0,5,0]}/>
                    <Rig position={[-25,-2,-25]}/>
                    <Rig3  position={[10,-2,20]}/>
                </Suspense>
                <pointLight intensity={2} position={[10,2,22]}/>
                {/* <pointLight intensity={5} position={[-10,2,22]}/> */}
            </Canvas>
        </div>
    );
}

export default World;