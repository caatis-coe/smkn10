import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';
import React from 'react';
import '../../css/ppdb.css';
import SubTitle from '@/Components/SubTitle';

function InfoPpdb() {
    const imageData = [
        {
            "title": "Panduan PPDB",
            "image": "images/ppdb/image1.jpeg",
        },
        {
            "title": "",
            "image": "images/ppdb/image2.jpeg",
        },
        {
            "title": "",
            "image": "images/ppdb/image4.jpeg",
        },
        {
            "title": "",
            "image": "images/ppdb/image6.jpeg",
        },
        {
            "title": "Kontak Kami",
            "image": "images/ppdb/image5.jpeg",
        },
        {
            "title": "",
            "image": "images/ppdb/image3.jpeg",
        },
        
        {
            "title": "Dokumen Persyaratan",
            "image": "images/ppdb/image7.jpg",
        },
        {
            "title": "",
            "image": "images/ppdb/image8.jpg",
        },
    ];

    const konsentrasiData = [
        {
            "title": "Konsentrasi Keahlian",
            "image": "images/karawitan.jpg",
        },
        {
            "title": "",
            "image": "images/seni-tari.jpg",
        },
        {
            "title": "",
            "image": "images/seni-musik.jpg",
        },
        {
            "title": "",
            "image": "images/seni-teater.jpg",
        },
        {
            "title": "",
            "image": "images/siaran.jpg",
        },
        {
            "title": "",
            "image": "images/produksi-film.jpg",
        },
        
    ];

    return (
        <DefaultLayout>
            <ContentTitle subTitle='INFO PPDB'/>
            <div className="flex flex-col items-center">
                {imageData.map((data, index) => (
                    <div>
                       <div className={`my-6 font-semibold text-[25px] sm:text-[30px] text-secondary text-center sm:text-left`}>{data.title}</div>
                        <img
                            key={index}
                            src={data.image}
                            alt={`PPDB Image ${index + 1}`}
                            className='content shadow-md lg:h-[600px] sm:h-[184px] slide-in-up sm:mb-5 md:mb-20'
                            style={{objectFit: 'cover'}}
                        />
                    </div>
                ))}
            </div>
            <section>
                <div className={`my-6 font-semibold text-[25px] sm:text-[30px] text-secondary text-center`}>Konsentrasi Keahlian</div>
            
                <div className="flex flex-wrap justify-center items-center">
                    {konsentrasiData.map((data, index) => (
                        <div key={index} className="m-2">
                            <img
                                src={data.image}
                                alt={`PPDB Image ${index + 1}`}
                                className='content shadow-md lg:h-[300px] sm:h-[184px] slide-in-up'
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex justify-center items-center bg-gray-100 rounded-xl border border-blue-500 my-20">
            <div className="container mx-auto px-4 py-5">
                <div className="flex flex-wrap -mx-4">
                    {/* First Column */}
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">Dokumen Prosedur Operasional Standar</h2>
                        <a href="/doc/pos-smkn10bdg.pdf" download>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Download
                            </button>
                        </a>
                        </div>
                    </div>
                    {/* Second Column */}
                    {/* <div className="w-full lg:w-1/2 px-4">
                        <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">Dokumen Profil Smkn 10 Bandung</h2>
                        <a href="/doc/profile-smkn10bdg.pdf" download>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Download
                            </button>
                        </a>
                        </div>
                    </div> */}
                </div>
            </div>
            </section>
            
        </DefaultLayout>
    );
}

export default InfoPpdb;
