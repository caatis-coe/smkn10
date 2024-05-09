import React from 'react'
import PembelajaranCard from '@/Components/PembelajaranCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import SubTitle from '@/Components/SubTitle';

function PembelajaranSwiper({ title, datas }) {
    const pairs = [];
    for (let i = 0; i < datas.length - 2; i += 2) {
        pairs.push([datas[i], datas[i + 1]]);
    }
    if (datas.length % 2 !== 0) {
        pairs.push([datas[datas.length - 1]]);
    } else {
        pairs.push([datas[datas.length - 1], datas[datas.length - 2]]);
    }

    return (
        <>
            <SubTitle title={title} />
            <Swiper modules={[Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={100}
                slidesPerView={1}
                breakpoints={{
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 100,
                    },
                }}
                pagination={{ clickable: true }}>
                {datas.map((data, index) => (
                    <SwiperSlide key={index}>
                        <PembelajaranCard key={index} data={data} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default PembelajaranSwiper

// pairs.map((pair, index) => (
//     <SwiperSlide key={index}>
//         <div className='grid grid-cols-1 place-items md:grid-cols-2 h-[484px] gap-x-16 gap-y-6'>
//                 {pair.map((data, innerIndex) => (
//                     <PembelajaranCard key={innerIndex} data={data} />
//                 ))}
            
//         </div>
//     </SwiperSlide>
// ))}