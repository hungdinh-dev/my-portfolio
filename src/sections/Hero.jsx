import React from 'react'
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';
import { OldComputer } from '../components/OldComputer';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    const { t } = useTranslation()

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'> {t('about_me')} <span className='waving-hand'>🖐️</span></p>
                <p className='hero_tag text-gray_gradient'> {t('fullstack_developer')} </p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                {/* <Leva /> */}
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HeroCamera isMobile={isMobile}>
                            {/* <HackerRoom
                                // scale={0.07} 
                                // position={[0, 0, 0]}
                                position={sizes.deskPosition}
                                scale={sizes.deskScale}
                                rotation={[0, -Math.PI, 0]}
                            // position={[x.positionX, x.positionY, x.positionZ]}
                            // rotation={[x.rotationX, x.rotationY, x.rotationZ]}
                            // scale={[x.scale, x.scale, x.scale]}
                            /> */}

                            <OldComputer
                                position={sizes.deskPosition}
                                scale={1}
                                rotation={[0, 0, 0]}
                            />
                        </HeroCamera>

                        <group>
                            {/* <Target position={sizes.targetPosition} /> */}
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Rings position={sizes.ringPosition} />
                            {/* <Cube position={sizes.cubePosition} /> */}
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href="#contact" className='w-fit'>
                    <Button name="btn_works" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero

// Check inset css, c-space,
// Warning when using Canvas that mean using 3D model
// we need to use html file to

//whenever you are creating some components within the canvas you have to keep in mind you not writing actual jsx you are within 3D environment so if you wanna show some html within the canvas you have to define it as a HTML tag and this tag is coming from react-three/drei
// cool thing react-three/drei provided to us is hook calling useProgress
// useProgress is a hook that gives us the progress of the scene loading (1 - 100%)
//  3D model, you need to use html file to render it