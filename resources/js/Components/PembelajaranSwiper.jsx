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

function PembelajaranSwiper({ datas }) {

    const groupedData = datas.reduce((result, currentValue) => {
        (result[currentValue['group']] = result[currentValue['group']] || []).push(currentValue);
        return result;
    }, {});

    return (
        <>
            {Object.keys(groupedData).map((group, index) => (
                <div key={index}>
                    <SubTitle containerClassName={"mb-6"} title={group} />
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
                        {groupedData[group].map((data, idx) => (
                            <SwiperSlide key={idx} className='pb-12'>
                                <PembelajaranCard key={idx} data={data} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </>
    )
}

export default PembelajaranSwiper
