import { useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import AOS from 'aos';
import Button from '../components/Button.jsx';
import { useTranslation } from 'react-i18next';
import { GrContact } from "react-icons/gr";
import { MdDone } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { toast } from 'react-toastify';

const About = () => {

    const { t, i18n } = useTranslation();

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('baohungdinhnguyen1412@gmail.com');
        setHasCopied(true);
        toast.success(t('copy_email_success'))
        setTimeout(() => {
            setHasCopied(false);
        }, 5000);
    };

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            delay: 50,
            once: false,
        });
    }, []);

    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3"
                    data-aos="fade-down"
                    data-aos-offset="200">
                    <div className="grid-container">
                        <div className='flex justify-center items-center'>
                            <img src="assets/avaCV.jpg" alt="grid-1" className="rounded-3xl sm:h-[276px] object-contain" />
                        </div>

                        <div>
                            <p className="grid-headtext">{t('about_me')}</p>
                            <p className="grid-subtext">
                                {t('about_me_desc')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container"
                        data-aos="fade-up"
                        data-aos-offset="200"
                    >
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">{t('about_techstack')}</p>
                            <p className="grid-subtext">
                                {t('about_techstack_desc')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4"
                    data-aos="fade-right"
                    data-aos-offset="200"
                >
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">{t('about_work_location')}</p>
                            <p className="grid-subtext">{t('about_work_location_desc')}</p>
                            <Button name="contact_me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3"
                    data-aos="fade-left"
                    data-aos-offset="200"
                >
                    <div className="grid-container">
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">{t('about_my_passion_title')}</p>
                            <p className="grid-subtext">
                                {t('about_my_passion_desc')}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2"
                    data-aos="fade-up"
                    data-aos-offset="200"
                >
                    <div className="grid-container">
                        {/* <img
                            src="assets/grid5.png"
                            alt="grid-4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        /> */}
                        <div className='flex justify-center items-center animate-bounce'>
                            <GrContact className='text-white' size={100} />
                        </div>

                        <div className="space-y-2">
                            <p className="grid-subtext text-center"> {t('contact_me')}</p>
                            <p className="text-sm text-gray-300 text-center"> {t('contact_me_via_mail')}</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <div className='text-white'>
                                    {hasCopied ? <MdDone size={35} /> : <FaRegCopy size={35} />}
                                </div>
                                {/* <img src={hasCopied ? <MdDone size={20} /> : <FaRegCopy size={20} />} alt="copy" /> */}
                                {/* <lord-icon
                                    src="https://cdn.lordicon.com/ijahpotn.json"
                                    trigger="hover"
                                    colors="primary:#ffffff,secondary:#ffffff"
                                    style={{ width: "80px", height: "80px" }}
                                >
                                </lord-icon> */}
                                <p className="lg:text-base md:text-xl font-medium text-gray_gradient text-white">baohungdinhnguyen1412@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;