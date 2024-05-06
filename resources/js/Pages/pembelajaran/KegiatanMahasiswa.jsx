import React from 'react';
import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';
import PembelajaranCard from '@/Components/PembelajaranCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SubTitle from '@/Components/SubTitle';

function KegiatanMahasiswa({kegiatanDatas = []}) {
    const pairs = [];
    for (let i = 0; i < kegiatanDatas.length; i += 2) {
        pairs.push([kegiatanDatas[i], kegiatanDatas[i + 1]]);
    }

    return (
        <DefaultLayout>
            <ContentTitle title='PEMBELAJARAN' subTitle='FASILITAS' />
            <div className='w-full'>
                <SubTitle title={"Bidang Pendidikan"} />
                <Swiper modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                    {pairs.map((pair, index) => (
                        <SwiperSlide key={index}>
                            <div className='grid grid-cols-1 place-items md:grid-cols-2 h-[484px] gap-x-16 gap-y-12'>
                                {pair.map((data, innerIndex) => (
                                    <PembelajaranCard key={innerIndex} data={data} />
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <SubTitle title={"Bidang Olahraga"} />
                <Swiper modules={[Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}>
                    {pairs.map((pair, index) => (
                        <SwiperSlide key={index}>
                            <div className='grid grid-cols-1 place-items md:grid-cols-2 h-[484px] gap-x-16 gap-y-12'>
                                {pair.map((data, innerIndex) => (
                                    <PembelajaranCard key={innerIndex} data={data} />
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </DefaultLayout>
    );
}

export default KegiatanMahasiswa