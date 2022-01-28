import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import './Home.scss';
import { OrbitControls } from '@react-three/drei';
import House from '../../objects/House/House';
import Rig from '../../objects/Rig/Rig';
import Rig2 from '../../objects/Rig2/Rig2';
import Rig3 from '../../objects/Rig3/Rig3';


function Home(props) {
    return (
        <>
        <section className='section'>
            <div className="section__container">
                <h2>Create Your Objects</h2>
                <Canvas className='canvas-element' camera={{position:[0,10,25]}}>
                    {/* <OrbitControls/> */}
                    <ambientLight intensity={10}/>
                    <pointLight intensity={2}  position={[0,5,50]}/>
                    <Suspense fallback='null'>
                        <House  position={[0,5,0]}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="section__container">
                <h2>Showcase Them In Your Page</h2>
                <Canvas  className='canvas-element' camera={{position:[0,10,25]}}>
                    {/* <OrbitControls/> */}
                    <ambientLight intensity={0.5}/>
                    <pointLight intensity={10} position={[0,2,20]}/>
                    <Suspense fallback='null'>
                        <Rig  position={[0,-2,0]}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="section__container">
                <h2>Sell Advertising Space </h2>
                <Canvas linear='true' className='canvas-element' camera={{position:[0,10,25]}}>
                    {/* <OrbitControls/> */}
                    <ambientLight intensity={10}/>
                    <pointLight intensity={2} position={[0,2,15]}/>
                    <Suspense fallback='null'>
                        <Rig3  position={[0,-2,0]}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
        </>
    );
}

export default Home;