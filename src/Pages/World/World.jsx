import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, FirstPersonControls} from '@react-three/drei';
import './World.scss';
import House from '../../objects/House/House';

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
                </Suspense>
            </Canvas>
        </div>
    );
}

export default World;