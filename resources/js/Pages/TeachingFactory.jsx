
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { Pagination, Scrollbar, EffectFade } from 'swiper/modules';
import ContentTitle from '@/Components/ContentTitle'
import SubTitle from '@/Components/SubTitle'
import TeachingFactoryProductCard from '@/Components/TeachingFactoryProductCard'
import DefaultLayout from '@/Layouts/DefaultLayout'

function TeachingFactory({ data }) {

    return (
        <DefaultLayout>
            <ContentTitle subTitle='TEACHING FACTORY' />
            <div className="relative pt-[56.25%] overflow-hidden max-w-full bg-black mt-5 w-[95%] self-center">
                <iframe
                    src="https://heyzine.com/flip-book/1836a6f59b.html"
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowFullScreen
                ></iframe>
            </div>
            <div className='border-[1px] w-full mt-14'/>
            {
                data.map((konsentrasiKeahlian, index) => {
                    if (konsentrasiKeahlian.teaching_factory_products.length == 0) return null;
                    return (
                        <div key={index} className='-z-0'>
                            <SubTitle title={konsentrasiKeahlian.title} />
                            <Swiper modules={[Pagination, Scrollbar, EffectFade]}
                                spaceBetween={50}
                                slidesPerView={1}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                    },
                                }}
                                pagination={{ clickable: true }}
                            >
                                {
                                    konsentrasiKeahlian.teaching_factory_products.map((product, index) => (
                                        <SwiperSlide key={index} className='pb-12 '>
                                            <TeachingFactoryProductCard productData={product} />
                                        </SwiperSlide>

                                    ))
                                }
                            </Swiper>
                        </div>
                    )
                }
                )
            }
        </DefaultLayout>
    )
}

export default TeachingFactory