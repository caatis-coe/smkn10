
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Pagination, Scrollbar,  EffectFade } from 'swiper/modules';
import ContentTitle from '@/Components/ContentTitle'
import SubTitle from '@/Components/SubTitle'
import TeachingFactoryProductCard from '@/Components/TeachingFactoryProductCard'
import DefaultLayout from '@/Layouts/DefaultLayout'

function TeachingFactory({ data }) {

    console.log(data)

    return (
        <DefaultLayout>
            <ContentTitle subTitle='TEACHING FACTORY' />
            {
                data.map((konsentrasiKeahlian, index) => (
                    <div  key={index}>
                        <SubTitle title={konsentrasiKeahlian.title} />
                        <Swiper modules={[Pagination, Scrollbar, EffectFade]}
                            spaceBetween={50}
                            slidesPerView={1}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 100,
                                },
                            }}
                            pagination={{ clickable: true }}
                            >
                            {
                                konsentrasiKeahlian.teaching_factory_products.map((product, index) => (
                                    <SwiperSlide key={index} className='pb-12'>
                                        <TeachingFactoryProductCard productData={product} />
                                    </SwiperSlide>
                                    
                                ))
                            }
                        </Swiper>

                    </div>

                ))
            }
        </DefaultLayout>
    )
}

export default TeachingFactory