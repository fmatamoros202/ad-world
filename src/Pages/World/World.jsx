import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, FirstPersonControls} from '@react-three/drei';
import './World.scss';
import HouseStatic from '../../objects/HouseStatic/HouseStatic';
import RigStatic from '../../objects/RigStatic/RigStatic';
import Rig3Static from '../../objects/Rig3Static/Rig3Static';

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
        <div  className='world'>
            <Canvas shadows sRGB camera={{position:[0,10,35]}}>
                {/* <OrbitControls/> */}
                <FirstPersonControls />
                <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} {...props} />
                <ambientLight intensity={0.5}/>
                <Suspense fallback='null'>
                    <Plane position={[0,-1,0]} receiveShadow/>
                    <HouseStatic position={[0,4,0]}/>
                    <RigStatic  position={[-25,0,-25]}/>
                    <Rig3Static position={[20,5,10]}/>
                </Suspense>
                <pointLight intensity={2} position={[-10,2,50]}/>
                {/* <pointLight intensity={5} position={[-10,2,22]}/> */}
            </Canvas>
        </div>
    );
}

export default World;