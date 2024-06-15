import React from 'react';
import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';
import PembelajaranSwiper from '@/Components/PembelajaranSwiper';

function KegiatanMahasiswa({kegiatanDatas = []}) {
    return (
        <DefaultLayout>
            <ContentTitle title='PEMBELAJARAN' subTitle='KEGIATAN MAHASISWA' />
            <div className='w-full'>
                <PembelajaranSwiper  datas={kegiatanDatas} />
            </div>
        </DefaultLayout>
    );
}

export default KegiatanMahasiswa