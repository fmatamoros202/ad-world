import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import './Home.scss';
import { OrbitControls } from '@react-three/drei';
import House from '../../objects/House/House';


function Home(props) {
    return (
        <>
        <section className='section'>
            <div className="section__container">
                <Canvas className='canvas-element' camera={{position:[0,10,50]}}>
                    <OrbitControls/>
                    <ambientLight intensity={0.5}/>
                    <Suspense fallback='null'>
                        <House  position={[0,5,0]}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="section__container">
                <Canvas className='canvas-element' camera={{position:[0,10,50]}}>
                    <OrbitControls/>
                    <ambientLight intensity={0.5}/>
                    <Suspense fallback='null'>
                        <House  position={[0,5,0]}/>
                    </Suspense>
                </Canvas>
            </div>
            <div className="section__container">
                <Canvas className='canvas-element' camera={{position:[0,10,50]}}>
                    <OrbitControls/>
                    <ambientLight intensity={0.5}/>
                    <Suspense fallback='null'>
                        <House  position={[0,5,0]}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
        </>
    );
}

export default Home;