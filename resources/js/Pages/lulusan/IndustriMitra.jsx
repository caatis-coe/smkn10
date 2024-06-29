import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Card(){
    return (
        <div className=''>
        </div>
    )
}

function IndustriMitra(data = [
    {
        "image_path" : ""
    }
]) {

    return (
        <DefaultLayout>
            <ContentTitle title={'Lulusan'} subTitle='INDUSTRI MITRA' />
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
        </DefaultLayout>
    )
}

export default IndustriMitra