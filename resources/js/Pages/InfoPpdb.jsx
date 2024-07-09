import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';
import React, { useState } from 'react';
import '../../css/ppdb.css';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

function Td({ children, tdClassName, colSpanLength, rowSpanLength }) {
    return <td className={`${tdClassName} py-3 px-6`} colSpan={colSpanLength} rowSpan={rowSpanLength}> {children}</td>
}

function TableBodyRows({ content = [
    {
        "Aspek": "Rencana Jumlah Peserta Didik Baru Kelas X",
        "Seni Karawitan": 180,
        "Seni Tari": 108,
        "Seni Teater": 72,
        "Seni Musik": 72,
        "Produksi dan Siaran Program Televisi (PSPT)": 36,
        "Produksi Film (PF)": 72,
        "JML": 540
    },
] }) {

    return (
        <>
            {content.map((value, index) => {
                const htmlAspek = md.renderInline(value.Aspek);
                return (
                    <tr key={index} className='text-center'>
                        <Td>{index + 1}</Td>
                        <Td>
                            <span dangerouslySetInnerHTML={{ __html: htmlAspek }} />
                        </Td>
                        <Td>{value['Seni Karawitan']}</Td>
                        <Td>{value['Seni Tari']}</Td>
                        <Td>{value['Seni Teater']}</Td>
                        <Td>{value['Seni Musik']}</Td>
                        <Td>{value["Produksi dan Siaran Program Televisi (PSPT)"]}</Td>
                        <Td>{value['Produksi Film (PF)']}</Td>
                        <Td>{value['JML']}</Td>
                    </tr>
                );
            })}
        </>
    );
}

function InfoPpdb({ konsentrasiData, contentTable =
    [
        {
            "Aspek": "Rencana Jumlah Peserta Didik Baru Kelas X",
            "Seni Karawitan": 180,
            "Seni Tari": 108,
            "Seni Teater": 72,
            "Seni Musik": 72,
            "Produksi dan Siaran Program Televisi (PSPT)": 36,
            "Produksi Film (PF)": 72,
            "JML": 540
        },
        {
            "Aspek": "Daya Tampung Total Jalur PRESTASI (60%) **(Nilai Rapor)**",
            "Seni Karawitan": 108,
            "Seni Tari": 66,
            "Seni Teater": 44,
            "Seni Musik": 44,
            "Produksi dan Siaran Program Televisi (PSPT)": 21,
            "Produksi Film (PF)": 44,
            "JML": 327
        },
        {
            "Aspek": "Daya Tampung Total Jalur PRESTASI (60%) \n **(Kejuaraan: 5%)**",
            "Seni Karawitan": 9,
            "Seni Tari": 5,
            "Seni Teater": 3,
            "Seni Musik": 3,
            "Produksi dan Siaran Program Televisi (PSPT)": 2,
            "Produksi Film (PF)": 3,
            "JML": 25
        },
        {
            "Aspek": "Daya Tampung Afirmasi (KETM, Prioritas terdekat 25%)",
            "Seni Karawitan": 45,
            "Seni Tari": 27,
            "Seni Teater": 19,
            "Seni Musik": 19,
            "Produksi dan Siaran Program Televisi (PSPT)": 9,
            "Produksi Film (PF)": 19,
            "JML": 138
        },
        {
            "Aspek": "Disabilitas/CIBI: 5%",
            "Seni Karawitan": 9,
            "Seni Tari": 5,
            "Seni Teater": 3,
            "Seni Musik": 3,
            "Produksi dan Siaran Program Televisi (PSPT)": 2,
            "Produksi Film (PF)": 3,
            "JML": 25
        },
        {
            "Aspek": "Perpindahan Orang Tua/Wali/Anak Guru: 5%",
            "Seni Karawitan": 9,
            "Seni Tari": 5,
            "Seni Teater": 3,
            "Seni Musik": 3,
            "Produksi dan Siaran Program Televisi (PSPT)": 2,
            "Produksi Film (PF)": 3,
            "JML": 25
        },
        {
            "Aspek": "Siswa Tidak Naik Kelas (Jika Ada)",
            "Seni Karawitan": 0,
            "Seni Tari": 0,
            "Seni Teater": 0,
            "Seni Musik": 0,
            "Produksi dan Siaran Program Televisi (PSPT)": 0,
            "Produksi Film (PF)": 0,
            "JML": 0
        },
        {
            "Aspek": "DAYA TAMPUNG PPDB THN.2024-2025",
            "Seni Karawitan": 180,
            "Seni Tari": 108,
            "Seni Teater": 72,
            "Seni Musik": 72,
            "Produksi dan Siaran Program Televisi (PSPT)": 36,
            "Produksi Film (PF)": 72,
            "JML": 540
        }
    ]
}) {
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

    return (
        <DefaultLayout>
            <ContentTitle subTitle='INFO PPDB' />
            <div className="flex flex-col items-center">
                {imageData.map((data, index) => (
                    <div key={index}>
                        <div className={`my-6 font-semibold text-[25px] sm:text-[30px] text-secondary text-center sm:text-left`}>{data.title}</div>
                        <img

                            src={"storage/" + data.image}
                            alt={`PPDB Image ${index + 1}`}
                            className='content shadow-md lg:h-[600px] sm:h-[184px] slide-in-up sm:mb-5 md:mb-20'
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </div>
            
            <section>
                {
                    konsentrasiData && (
                        <>
                            <div className={`my-6 font-semibold text-[25px] sm:text-[30px] text-secondary text-center`}>Konsentrasi Keahlian</div>

                            <div className="flex flex-wrap justify-center items-center">
                                {konsentrasiData.map((data, index) => (
                                    <div key={index} className="m-2">
                                        <img
                                            src={'/storage/'+data.images[0].image_path}
                                            alt={`PPDB Image ${index + 1}`}
                                            className='content shadow-md lg:h-[300px] sm:h-[184px] slide-in-up'
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </>
                    )
                }

            </section>

            <div className="mx-auto my-20 p-9 border-[1px] rounded-xl group hover:scale-[1.01] transition ease-in-out
            hover:bg-lighttertiary">
                <div className=" -mx-4">
                    {/* First Column */}
                    <div className=" px-4 mb-8 lg:mb-0">
                        <div className="text-center">
                            <h2 className="text-4xl font-semibold mb-9 group-hover:text-white text-black">Dokumen Prosedur Operasional Standar</h2>
                            <a href="/doc/pos-smkn10bdg.pdf" download>
                                <button className="bg-primary group-hover:bg-white group-hover:text-lighttertiary 
                                font-semibold text-white py-2 px-4 rounded 
                                hover:shadow-lg group-hover:hover:scale-[1.01] transition ease-in duration-75   
                                ">
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

            <div className='overflow-x-auto'>
                <table className='w-full text-[14px]'>
                    <thead className='bg-lighttertiary text-white text-center font-semibold'>
                        <tr>
                            <Td rowSpanLength={2}>No</Td>
                            <Td rowSpanLength={2}>Aspek</Td>
                            <Td colSpanLength={4}>Seni Pertunjukkan</Td>
                            <Td colSpanLength={2}>Broadcasting dan Film</Td>
                            <Td rowSpanLength={2}>jumlah</Td>
                        </tr>
                        <tr className='border-y-2'>
                            <Td >Seni Karawitan</Td>
                            <Td>Seni Tari</Td>
                            <Td>Seni Teater</Td>
                            <Td >Seni Musik</Td>
                            <Td>Produksi dan Siaran Program Televisi(PSPT)</Td>
                            <Td>Produksi Film(PF)</Td>
                        </tr>

                    </thead>
                    <tbody>
                        <TableBodyRows content={contentTable} />
                    </tbody>
                </table>
            </div>

        </DefaultLayout>
    );
}

export default InfoPpdb;
