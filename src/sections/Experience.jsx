import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/CanvasLoader';
import { workExperiences } from '../constants/index.js';
import Cat from '../components/Cat.jsx';
import AOS from 'aos';
import DemoComputer from '../components/DemoComputer.jsx';
import { useTranslation } from 'react-i18next';

const WorkExperience = () => {
    const [animationName, setAnimationName] = useState('idle');

    const { t, i18n } = useTranslation();

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            delay: 50,
            once: false,
        });
    }, []);

    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-white-600">
                <p className="head-text" data-aos="fade-up" data-aos-offset="200">{t('work_exp')}</p>

                <div className="work-container">
                    <div className="work-canvas" data-aos="fade-right" data-aos-offset="200">
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />

                            <Suspense fallback={<CanvasLoader />}>
                                {/* <Developer position-y={-3} scale={3} animationName={animationName} /> */}
                                {/* <Cat rotation={[0, -Math.PI, 0]} position-y={0} scale={2.5} animationName={animationName} /> */}
                                <group scale={4} position={[1, -6, -10]} rotation={[0, 0, 0]}>
                                    <DemoComputer />
                                </group>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content" data-aos="fade-left" data-aos-offset="200">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((item, index) => (
                                <div
                                    data-aos="fade-right"
                                    data-aos-offset="200"
                                    data-aos-delay="700"
                                    key={index}
                                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                                    onPointerOut={() => setAnimationName('idle')}
                                    className="work-content_container group">
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img className="w-full h-full object-cover" src={item.icon} alt="" />
                                        </div>

                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{t(`${item.name}`)}</p>
                                        <p className="text-sm mb-5">
                                            {t(`${item.pos}`)} -- <span>{t(`${item.duration}`)}</span>
                                        </p>
                                        <p className="group-hover:text-white transition-all ease-in-out duration-500">{t(`${item.title}`)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;