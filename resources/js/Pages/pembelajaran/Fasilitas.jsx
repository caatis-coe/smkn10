import React from 'react';
import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';


import PembelajaranSwiper from '@/Components/PembelajaranSwiper';

function Fasilitas({ fasilitasDatas = [] }) {
    return (
        <DefaultLayout>
            <ContentTitle title='PEMBELAJARAN' subTitle='FASILITAS' />
            <div className='w-full'>
                <PembelajaranSwiper datas={fasilitasDatas} />
            </div>
        </DefaultLayout>
    );
}

export default Fasilitas;
