import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'
import logoSMA from '@/Assets/slogan.png'

function NilaiBudaya() {

    const keren = [
        {
            "title": "Kapabilitas",
            "description": "Guru Tenaga Kependidikan (GTK) SMKN 10 Bandung memiliki kapabilitas / kecakapan / kemampuan hard skill dan soft skill dalam mengajar, membimbing, dan bekerja."
        },
        {
            "title": "Edutaiment",
            "description": "Pembelajaran di SMKN 10 Bandung berbudaya menyenangkan, berpusat dan ramah pada peserta didik, serta menghasilkan karya Teaching Factory (TeFa) bermutu."
        },
        {
            "title": "Rasional",
            "description": "Logis dan berbasis data, yaitu dalam setiap pengambilan keputusan dan pengembangan sekolah berdasarkan perencanaan berbasis data (PBD)."
        },
        {
            "title": "Enerjik",
            "description": "Peserta didik dibangun budaya enerjik atau semangat dalam belajar, berkarya, dan dalam menampilkan karakter Profil Pelajar Pancasila."
        },
        {
            "title": "Nilai Budaya",
            "description": "SMKN 10 Bandung sebagai sekolah atau lembaga pendidikan vokasi yang menjunjung nilai luhur sebagai konservatori karawitan/pelestari budaya Sunda di Jawa Barat dan dapat beradaptasi dengan nilai budaya global/modern."
        }
    ]
    

    return (
        <DefaultLayout>
        <ContentTitle title='PROFIL' subTitle='NILAI BUDAYA' />
        <div className='grid place-items-center'>
            <img src={logoSMA} className='w-96 -translate-y-12 aspect-square' /> 
        </div>
        <div className='grid grid-cols-3 gap-12'>
            {keren.map((item, index) => (
                <>
                    <div 
                        key={index} 
                        className={`col-span-1 `}
                    >
                        <div className='text-2xl font-bold'>
                            <span className='text-5xl text-lighttertiary'>{item.title.charAt(0)}</span>
                            {item.title.substring(1)}
                        </div>
                        <div className='font-light'>{item.description}</div>
                    </div>
                </>
            ))}
        </div>
        </DefaultLayout>
    )
}

export default NilaiBudaya