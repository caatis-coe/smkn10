import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';

function IndustriMitra({datas}) {

    
    return (
        <DefaultLayout>
            <ContentTitle title={'Lulusan'} subTitle='INDUSTRI MITRA' />
            <Swiper
                modules={[Pagination, Scrollbar, Autoplay]}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                className='w-full'
            >
                
                {
                    datas && Array(Math.ceil(datas.length / 2)).fill(0).map((_, i) => (
                        <SwiperSlide key={i} className='pb-12 '>
                            <div className='flex flex-col w-full items-center gap-9'>
                                {datas.slice(i * 2, i * 2 + 2).map((item, index) =>
                                (
                                    <div key={index} className=' border-2 p-12
                                    w-full h-56 flex flex-col justify-center items-center
                                    rounded-lg group  cursor-pointer hover:bg-lighttertiary
                                    duration-500 transition ease-out
                                    '>
                                        <img className='w-32 group-hover:scale-75 
                                        transition ease-out group-hover:translate-y-0
                                        duration-500' 
                                        src={`storage/${item.image_path}`} alt={item.description} />
                                        <div className='font-medium text-white translate-y-0 hidden opacity-0
                                        group-hover:opacity-100 group-hover:block 
                                        transition ease-out duration-100 text-center'>
                                            {item.description}
                                        </div>
                                    </div>
                                )
                                )}
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </DefaultLayout>
    )
}

export default IndustriMitra