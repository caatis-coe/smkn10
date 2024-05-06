import DefaultLayout from '@/Layouts/DefaultLayout'
import React, { useEffect } from 'react'
import logoSma from '@/Assets/Logo-SMK-10-Bandung.png'
import { FaPlay } from "react-icons/fa";
import BlogCard from '@/Components/BlogCard';
import { Link } from '@inertiajs/react';
import HomeMiniButton from '@/Components/HomeMiniButton';
import SubTitle from '@/Components/SubTitle';

function Home({ blogDatas = [] }) {

    const homeImage = `url('images/homeImage.jpg')`;
    const kepsek = `url('images/kepsek.jpg')`

    return (
        <DefaultLayout headerChildren={
            (
                <div className="flex bg-center min-h-96 w-[100vw] text-white" style={{ backgroundImage: homeImage }}>
                    <div className='flex flex-col justify-center bg-cover gap-y-1 px-10 md:px-20 bg-black/70 flex-1'>
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
                        <div className='flex rounded-full mt-6 justify-between items-center border-2 border-white p-2 h-12 w-48'>
                            <div className='border-2 p-2 rounded-full grid place-items-center h-fit border-white'>
                                <FaPlay className='w-2 h-2' />
                            </div>
                            <div className='flex-1 text-center'>
                                Profil Sekolah
                            </div>
                        </div>
                    </div>
                </div>
            )
        }>
            <SubTitle title={"Profil Sekolah"} />
            <iframe className='aspect-video w-full' src="https://www.youtube.com/embed/xNRJwmlRBNU?si=ZrNt4ic-ur8J9_5l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6'>
                    <HomeMiniButton text={"Visi Misi"} link='visi-misi'/>
                    <HomeMiniButton text={"Sejarah"}  link='sejarah'/>
                    <HomeMiniButton text={"Struktur Organisasi"} link='struktur-organisasi'/>
                    <HomeMiniButton text={"Info PPDB"} link='info-ppdb'/>
            </div>
            <SubTitle title={"Kepala Sekolah"} />
            <div className='flex flex-col gap-y-12 md:flex-row md:gap-y-0 justify-between items-center'>
                <div className='bg-cover bg-center h-72 aspect-[3/4]' style={{ backgroundImage: kepsek }} />
                <div className='flex-1 ms-12'>
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
                <Link href='blog'>
                    <div className='grid place-items-center text-[16px] font-medium text-white 
                    rounded-full bg-primary py-3 px-16 cursor-pointer hover:bg-lighttertiary transition duration-75'>
                        Lihat Selebihnya
                    </div>
                </Link>
            </div>
        </DefaultLayout>
    )
}


export default Home