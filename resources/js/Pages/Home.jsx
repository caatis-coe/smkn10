import { Swiper, SwiperSlide } from 'swiper/react';
import DefaultLayout from '@/Layouts/DefaultLayout'
import React, { useEffect, useState } from 'react'
import BlogCard from '@/Components/BlogCard';
import { Link } from '@inertiajs/react';
import HomeMiniButton from '@/Components/HomeMiniButton';
import SubTitle from '@/Components/SubTitle';
import { Autoplay } from 'swiper/modules';
import logoSma from '@/Assets/Logo-SMK-10-Bandung.png'

import "swiper/css";
import { FaPlay } from 'react-icons/fa';


function HomeAnalytics({data}){
    const [displayedTotal, setDisplayedTotal] = useState(0);

    useEffect(() => {
        let currentValue = 0;
        const incrementValue = () => {
            if (currentValue < data.total) {
                setDisplayedTotal(currentValue);
                currentValue += Math.ceil(data.total * 0.01);
                setTimeout(incrementValue, 10);
            } else {
                setDisplayedTotal(data.total)
            }
        };
        incrementValue();
    }, [data.total]); 

    return (
        <div className='flex flex-col w-24 items-center'>
            <div className='text-2xl sm:text-4xl md:text-6xl font-bold text-lighttertiary'>{displayedTotal}</div>
            <div className='text-[9px] sm:text-base md:text-lg text-grey'>{data.context}</div>
        </div>
    );
}

function Home({ blogDatas = [] }) {

    const baseURL = window.location.origin;

    const homeImage1 = `url('${baseURL}/images/homeImage.jpg')`;
    const homeImage2 = `url('${baseURL}/images/image1.jpg')`;
    const homeImage3 = `url('${baseURL}/images/image2.jpg')`;
    const homeImage4 = `url('${baseURL}/images/image3.jpg')`;

    const homeImages = [homeImage1, homeImage2, homeImage3, homeImage4]

    const kepsek = `url('images/kepsek.jpg')`


    const numberData = [
        {
            'total' : 1226,
            'context' : 'Siswa'
        },
        {
            'total' : 81,
            'context' : 'Guru'
        },
        {
            'total' : 12,
            'context' : 'Laboratorium'
        },
        {
            'total' : 8765,
            'context' : 'Lulusan'
        },
    ]

    const profilePage = () => {
        window.open("https://youtu.be/xNRJwmlRBNU", '_blank')
    }

    return (
        <DefaultLayout headerChildren={
            (
                <div className="relative text-white">
                    <Swiper className='-z-50'
                        modules={[Autoplay]} // Ensure modules are imported and passed correctly
                        autoplay={{
                            delay: 1500,
                        }}
                        loop={true}
                    >
                        {homeImages.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className='bg-center bg-cover min-h-96 w-[100vw]' style={{ backgroundImage: data }}></div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='absolute z-40 w-full h-full top-0 flex flex-col justify-center bg-cover gap-y-1 px-10 md:px-20 bg-black/70 flex-1'>
                        <div className='flex gap-x-6'>
                            <img className='aspect-square w-12' src={logoSma} alt="" />
                            {[...Array(3)].map((_, index) => (
                                <div className='rounded-full grid place-items-center text-black bg-lightgrey aspect-square w-12' key={index}>
                                    {index}
                                </div>
                            ))}
                        </div>
                        <div className='text-[48px] font-semibold'>
                            SMKN 10 Bandung
                        </div>
                        <div>
                            {"<Slogan>"}
                        </div>
                        <div>
                            #Tagline
                        </div>
                        <div className='flex rounded-full mt-6 justify-between items-center border-2
                            border-white p-2 h-12 w-48 cursor-pointer hover:bg-lighttertiary hover:border-lighttertiary
                            transition ease-in-out duration-200 group' onClick={profilePage}>
                            <div className='border-2 p-2 rounded-full grid place-items-center h-fit border-white'>
                                <FaPlay className='w-2 h-2 group-hover:scale-125 transition ease-in-out duration-150' />
                            </div>
                            <div className='flex-1 text-center '>
                                Profil Sekolah
                            </div>
                        </div>
                    </div>
                </div>
            )
        }>
            <div className='my-4 md:my-8 flex items-center justify-around'>
                {numberData.map((data, index) => <HomeAnalytics key={index} data={data} />)}
            </div>
            <SubTitle containerClassName={"my-0 mb-6"} title={"Profil Sekolah"} />
            <iframe className='aspect-video w-full' src="https://www.youtube.com/embed/xNRJwmlRBNU?si=ZrNt4ic-ur8J9_5l" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div className='mt-6 lg:mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6'>
                <HomeMiniButton text={"Visi Misi"} link='visi-misi' />
                <HomeMiniButton text={"Sejarah"} link='sejarah' />
                <HomeMiniButton text={"Struktur Organisasi"} link='struktur-organisasi' />
            </div>
            <SubTitle title={"Kepala Sekolah"} />
            <div className='flex flex-col items-center justify-center gap-y-12 md:flex-row md:gap-y-0'>
                <div className='bg-cover bg-center h-72 aspect-[3/4] ' style={{ backgroundImage: kepsek }} />
                <div className='flex-1 md:ms-12'>
                    <div className='font-semibold text-[24px] text-center md:text-left mb-2'>Jonathan William Rawrrrr (JWR) </div>
                    <div>“ Salam sejahtera kepada seluruh warga SMKN! Kami dengan bangga menyambut Anda di website resmi
                        Sekolah Menengah Kejuruan Negeri (SMKN) kami. Di sini, kami berkomitmen untuk
                        memberikan pendidikan berkualitas, membuka peluang, dan menginspirasi para siswa
                        untuk meraih impian mereka. Selamat datang di dunia belajar yang penuh dengan
                        potensi dan peluang! ”
                    </div>
                </div>
            </div>
            <SubTitle title={"Blog"} />
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
            <div className='text-center grid place-items-center gap-8 border-t-2 mt-12 pt-12'>
                <div className='text-lg md:text-xl lg:text-4xl font-bold text-secondary'>Penerimaan Peserta Didik Baru</div>
                <div className='text-base md:text-md lg:text-lg font-light'>Butuh Informasi Lebih Lengkap mengenai penerimaan peserta didik baru?</div>
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