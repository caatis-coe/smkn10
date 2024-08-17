import { Swiper, SwiperSlide } from 'swiper/react';
import DefaultLayout from '@/Layouts/DefaultLayout'
import React, { useEffect, useRef, useState } from 'react'
import BlogCard from '@/Components/BlogCard';
import { Link } from '@inertiajs/react';
import HomeMiniButton from '@/Components/HomeMiniButton';
import SubTitle from '@/Components/SubTitle';
import { Autoplay } from 'swiper/modules';
import logoSma from '@/Assets/Logo-SMK-10-Bandung.png'
import smkHebat from '@/Assets/SMK-HEBAT.png'
import disdik from '@/Assets/disdik.png'

import "swiper/css";
import { FaPlay } from 'react-icons/fa';


function HomeAnalytics({ data }) {
    const [displayedTotal, setDisplayedTotal] = useState(0);
    const analyticsRef = useRef(null); // Ref to hold reference to the component's DOM element

    useEffect(() => {
        // Function to handle the intersection observer callback
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    let currentValue = 0;
                    const incrementValue = () => {
                        if (currentValue < data.amount) {
                            setDisplayedTotal(currentValue);
                            currentValue += Math.ceil(data.amount * 0.01);
                            setTimeout(incrementValue, 10);
                        } else {
                            setDisplayedTotal(data.amount);
                        }
                    };
                    incrementValue();

                    // Once we start updating, disconnect the observer to avoid unnecessary updates
                    observer.disconnect();
                }
            });
        };

        // Creating an Intersection Observer
        const observer = new IntersectionObserver(handleIntersect, {
            root: null, // Use the viewport as the root
            rootMargin: '0px', // No margin around the viewport
            threshold: 0.5, // Trigger when 10% of the component is visible
        });

        // Observe the component's DOM element
        if (analyticsRef.current) {
            observer.observe(analyticsRef.current);
        }

        // Clean up function to disconnect the observer when component unmounts or if already observed
        return () => {
            if (analyticsRef.current) {
                observer.unobserve(analyticsRef.current);
            }
        };
    }, [data.amount]);

    return (
        <div ref={analyticsRef} className='flex flex-col w-24 items-center'>
            <div className='text-2xl sm:text-4xl md:text-6xl font-bold text-lighttertiary'>
                {displayedTotal < 10000 ? displayedTotal : `${(displayedTotal / 1000).toFixed()}k`}
            </div>
            <div className='text-[9px] sm:text-base md:text-lg text-black'>{data.title}</div>
        </div>
    );
}

function Home({ blogDatas, headmaster, swiperImage, homeAnalytics, urlVideoProfile }) {

    const youtubeLink = 'https://youtu.be/51HWQSC-B-o?si=eeoUBjIuQZJzs8hF'

    const profilePage = () => {
        window.open(youtubeLink, '_blank')
    }

    useEffect(() => {
        // Function to process Instagram embeds
        const processEmbeds = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };

        // Check if Instagram embed script is already loaded
        if (!window.instgrm) {
            const script = document.createElement('script');
            script.src = "https://www.instagram.com/embed.js";
            script.async = true;
            script.defer = true;
            script.onload = processEmbeds; // Process embeds after script loads
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        } else {
            processEmbeds(); // Process embeds immediately if script is already loaded
        }
    }, []);

    return (
        <DefaultLayout headerChildren={
            (
                <div className="relative text-white">
                    {
                        swiperImage.length > 0 ? <Swiper className='-z-50'
                            modules={[Autoplay]} // Ensure modules are imported and passed correctly
                            autoplay={{
                                delay: 1500,
                            }}
                            loop={true}
                        >
                            {swiperImage.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <div className='bg-center bg-cover min-h-[650px] w-[100vw]' style={{ backgroundImage: `url(/storage/${data.image_path})` }}></div>
                                </SwiperSlide>
                            ))}
                        </Swiper> : <div className='bg-center bg-cover min-h-[650px] w-[100vw]'></div>
                    }

                    <div className='absolute z-40 w-full h-full top-0 flex flex-col justify-center bg-cover gap-y-1 px-10 md:px-20 bg-black/70 flex-1'>
                        <div className='flex gap-x-6 items-center'>
                            <img className='aspect-square h-12' src={logoSma} alt="" />
                            <img className='aspect-auto h-16' src={smkHebat} alt="" />
                            <img className='aspect-auto h-12' src={disdik} alt="" />
                        </div>
                        <div className='text-[48px] font-semibold'>
                            SMKN 10 Bandung
                        </div>
                        <div className='font-medium  text-2xl'>
                            Kapabilitas Edutaiment Rasional Enerjik Nilai Budaya
                        </div>
                        <div>
                            #SMKN10BANDUNG
                        </div>
                        <div className='flex flex-col gap-2 w-full md:flex-row md:gap-4 mt-6'>
                            <div className='flex rounded-full  justify-between items-center border-[2px] hover:border-2 
                            border-white p-2 h-12 w-48 cursor-pointer hover:bg-lighttertiary hover:border-lighttertiary
                            transition ease-in-out duration-200 group' onClick={profilePage}>
                                <div className='border-[1px] group-hover:border-2 p-2 rounded-full grid place-items-center h-fit border-white'>
                                    <FaPlay className='w-2 h-2 group-hover:scale-125 transition ease-in-out duration-150' />
                                </div>
                                <div className='flex-1 font-semibold group-hover:font-semibold text-center '>
                                    Profil Sekolah
                                </div>
                            </div>
                            <Link href='/info-ppdb' className='flex rounded-full justify-between items-center border-[2px] hover:border-2
                            border-white p-2 h-12 w-48 cursor-pointer hover:bg-lighttertiary hover:border-lighttertiary
                            transition ease-in-out duration-200 group'>
                                <div className='flex-1 font-semibold group-hover:font-semibold text-center '>
                                    Info PPDB
                                </div>
                            </Link>
                            <Link href='teaching-factory' className='flex rounded-full justify-between items-center border-[2px] hover:border-2
                            border-white p-2 h-12 w-48 cursor-pointer hover:bg-lighttertiary hover:border-lighttertiary
                            transition ease-in-out duration-200 group'>
                                <div className='flex-1 font-semibold group-hover:font-semibold text-center '>
                                    Teaching Factory
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            )
        }>
            <div className='my-4 md:my-8 flex items-center justify-around'>
                {homeAnalytics && homeAnalytics.map((data, index) => <HomeAnalytics key={index} data={data} />)}
            </div>
            <SubTitle containerClassName={"my-0 mb-6"} title={"Profil Sekolah"} />
            <iframe className='aspect-video w-full' src={urlVideoProfile} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className='mt-6 lg:mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6'>
                <HomeMiniButton text={"Visi Misi"} link='visi-misi' />
                <HomeMiniButton text={"Sejarah"} link='sejarah' />
                <HomeMiniButton text={"Struktur Organisasi"} link='struktur-organisasi' />
            </div>
            <SubTitle title={"Kepala Sekolah"} />
            <div className='flex flex-col items-center justify-center gap-y-12 md:flex-row md:gap-y-0'>
                <div className='bg-cover bg-center h-72 aspect-[3/4] ' style={{ backgroundImage: `url(/storage/${headmaster.image_path})` }} />
                <div className='flex-1 md:ms-12'>
                    <div className='font-semibold text-[24px] text-center md:text-left mb-2'>{headmaster.name}</div>
                    <div>“{headmaster.message}”
                    </div>
                </div>
            </div>
            {blogDatas.length > 0 && (
                <>
                    <SubTitle title={"Berita"} />
                    <div className='grid grid-cols-1 place-items md:grid-cols-2 xl:grid-cols-3  gap-x-16 gap-y-12 '>
                        {blogDatas.map((blogdata, index) => <BlogCard key={index} blogData={blogdata} />)}
                    </div>
                    <div className='grid place-items-center mt-9'>
                        <Link href='berita'>
                            <div className='grid place-items-center text-[16px] font-medium text-white 
                    rounded-md bg-primary py-3 px-16 cursor-pointer hover:bg-lighttertiary transition duration-75'>
                                Lihat Selebihnya
                            </div>
                        </Link>
                    </div>
                </>
            )}
            <SubTitle title={"Instagram Feed"} />
            <div>
                <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/official_smkn10bdg/"
                    data-instgrm-version="12"
                    style={{
                        background: "#FFF",
                        border: 0,
                        borderRadius: "3px",
                        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                        margin: "1px",
                        minWidth: "326px",
                        padding: 0,
                        width: "100%",
                        maxHeight: "100%"
                    }}
                >
                    <div style={{ padding: "16px" }}>
                        <a
                            href="https://www.instagram.com/official_smkn10bdg/"
                            style={{
                                background: "#FFFFFF",
                                lineHeight: 0,
                                padding: "0 0",
                                textAlign: "center",
                                textDecoration: "none",
                                width: "100%"
                            }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <div
                                    style={{
                                        backgroundColor: "#F4F4F4",
                                        borderRadius: "50%",
                                        flexGrow: 0,
                                        height: "40px",
                                        marginRight: "14px",
                                        width: "40px"
                                    }}
                                ></div>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        flexGrow: 1,
                                        justifyContent: "center"
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: "#F4F4F4",
                                            borderRadius: "4px",
                                            flexGrow: 0,
                                            height: "14px",
                                            marginBottom: "6px",
                                            width: "100px"
                                        }}
                                    ></div>
                                    <div
                                        style={{
                                            backgroundColor: "#F4F4F4",
                                            borderRadius: "4px",
                                            flexGrow: 0,
                                            height: "14px",
                                            width: "60px"
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div style={{ padding: "19% 0" }}></div>
                            <div
                                style={{
                                    display: "block",
                                    height: "50px",
                                    margin: "0 auto 12px",
                                    width: "50px"
                                }}
                            >
                                <svg
                                    width="50px"
                                    height="50px"
                                    viewBox="0 0 60 60"
                                    version="1.1"
                                    xmlns="https://www.w3.org/2000/svg"
                                    xmlnsXlink="https://www.w3.org/1999/xlink"
                                >
                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                        <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                                            <g>
                                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.166 525.438,79.674 528.631,79.82 C531.831,79.966 532.853,80 541,80 C549.148,80 550.169,79.966 553.369,79.82 C556.562,79.674 558.743,79.166 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div
                                style={{
                                    color: "#c9c8cd",
                                    fontFamily: "Arial,sans-serif",
                                    fontSize: "14px",
                                    lineHeight: "17px",
                                    margin: "8px 0 0 0",
                                    overflow: "hidden",
                                    padding: "8px 0 7px",
                                    textAlign: "center",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                <a
                                    href="https://www.instagram.com/official_smkn10bdg/"
                                    style={{ color: "#c9c8cd", textDecoration: "none" }}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    official_smkn10bdg
                                </a>
                            </div>
                        </a>
                    </div>
                </blockquote>
                <style jsx="true">{`
                    .instagram-media {
                        border-radius: 16px !important;
                        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.1) !important;
                    }
                `}
                </style>
            </div>
            <div className='text-center grid place-items-center gap-4 lg:gap-8 border-t-2 mt-12 pt-12'>
                <div className='text-3xl lg:text-4xl font-bold text-secondary'>Penerimaan Peserta Didik Baru</div>
                <div className='text-sm md:text-md lg:text-lg font-light'>Butuh Informasi Lebih Lengkap mengenai penerimaan peserta didik baru?</div>
                <Link href='info-ppdb' className='rounded-full w-44 border-2 
                    py-2 text-sm md:text-base lg:text-md
                    cursor-pointer  hover:bg-secondary border-secondary
                    group transition duration-1000'>
                    <div className='text-secondary font-medium group-hover:scale-105 group-hover:text-white transition duration-500'>Info PPDB</div>
                </Link>
            </div>
        </DefaultLayout>
    )
}

export default Home