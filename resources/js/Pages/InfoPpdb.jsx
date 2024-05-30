import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';
import React from 'react';
import '../../css/ppdb.css';
import SubTitle from '@/Components/SubTitle';

function InfoPpdb() {
    const imageData = [
        {
            "title": "JADWAL PPDB 2024 TAHAP 2",
            "image": "images/ppdb/image1.jpeg",
        },
        {
            "title": "INFORMASI PPDB",
            "image": "images/ppdb/image2.jpeg",
        },
        {
            "title": "SOSIAL MEDIA SMKN 10 BANDUNG",
            "image": "images/ppdb/image3.jpeg",
        },
        {
            "title": "INFORMASI DAFTAR ULANG",
            "image": "images/ppdb/image4.jpeg",
        },
        {
            "title": "CONTACT PERSON PPDB SMKN 10 BANDUNG",
            "image": "images/ppdb/image5.jpeg",
        },
        {
            "title": "JADWAL TES WAWANCARA",
            "image": "images/ppdb/image6.jpeg",
        },
        {
            "title": "DOKUMEN PERSYARATAN UMUM",
            "image": "images/ppdb/image7.jpg",
        },
        {
            "title": "DOKUMEN PERSYARATAN KHUSUS",
            "image": "images/ppdb/image8.jpg",
        },
    ];

    return (
        <DefaultLayout>
            <ContentTitle subTitle='INFO PPDB'/>
            <div className="flex flex-col items-center">
                {imageData.map((data, index) => (
                    <div>
                        <div className={`mb-6 font-semibold sm:text-[25px] md:text-[30px]`}>{data.title}</div>
                        <img
                            key={index}
                            src={data.image}
                            alt={`PPDB Image ${index + 1}`}
                            className='content m-2 shadow-md lg:h-[600px] sm:h-[184px] slide-in-up mb-20'
                            style={{objectFit: 'cover'}}
                        />
                    </div>
                ))}
            </div>
        </DefaultLayout>
    );
}

export default InfoPpdb;
