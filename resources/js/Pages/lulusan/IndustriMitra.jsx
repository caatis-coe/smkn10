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
                                    rounded-lg group  cursor-pointer hover:bg-gray-50
                                    duration-500 transition-all ease-out
                                    '>
                                        <img className='max-h-40 max-w-48 group-hover:scale-90 
                                        transition ease-out group-hover:blur-sm
                                        duration-500' 
                                        src={`storage/${item.image_path}`} alt={item.description} />
                                        <div className=' text-white translate-y-0 opacity-0
                                        group-hover:opacity-100 overflow-hidden
                                        transition ease-out duration-100 text-center absolute'>
                                            <div className='bg-lighttertiary py-1 px-4 w-48 translate-y-full 
                                            group-hover:translate-y-0 transition duration-700'>
                                                {item.description}
                                            </div>
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