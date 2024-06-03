import React from 'react'
import PembelajaranCard from '@/Components/PembelajaranCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import SubTitle from '@/Components/SubTitle';

function PembelajaranSwiper({ title, datas }) {

    return (
        <>
            <SubTitle containerClassName={"mb-6"} title={title} />
            <Swiper modules={[Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 100,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                style={{ overflow: 'visible' }}>
                {datas.map((data, index) => (
                    <SwiperSlide key={index} className='pb-12'>
                        <PembelajaranCard key={index} data={data} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default PembelajaranSwiper
