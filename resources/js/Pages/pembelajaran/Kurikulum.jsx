import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import AppTableKurikulum from '@/Components/AppTableKurikulum'
import SubTitle from '@/Components/SubTitle'

function Kurikulum() {

    const contents = {
        "X": {
            "Kelompok Mata Pelajaran Umum:": [
                {
                    "mata_pelajaran": "Pendidikan Agama Islam dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Kristen dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Katolik dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Buddha dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Hindu dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Khonghucu dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Pancasila",
                    "alokasi_intra": "54",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "72"
                },
                {
                    "mata_pelajaran": "Bahasa Indonesia",
                    "alokasi_intra": "108",
                    "alokasi_projek": "36",
                    "total_jp_per_tahun": "144"
                },
                {
                    "mata_pelajaran": "Pendidikan Jasmani, Olahraga, dan Kesehatan",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Sejarah",
                    "alokasi_intra": "54",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "72"
                },
                {
                    "mata_pelajaran": `Seni dan Budaya
                    \n 1&#46; Seni Musik
                    \n 2&#46; Seni Rupa
                    \n 3&#46; Seni Teater
                    \n 4&#46; Seni Tari`,
                    "alokasi_intra": "54",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "72"
                },
                {
                    "mata_pelajaran": "**Jumlah JP Mata Pelajaran Umum**",
                    "alokasi_intra": "**450**",
                    "alokasi_projek": "**126**",
                    "total_jp_per_tahun": "**576**"
                },
            ],
            "Kelompok Mata Pelajaran Kejuruan:": [
                {
                    "mata_pelajaran": "Matematika",
                    "alokasi_intra": "108",
                    "alokasi_projek": "36",
                    "total_jp_per_tahun": "144"
                },
                {
                    "mata_pelajaran": "Bahasa Inggris",
                    "alokasi_intra": "108",
                    "alokasi_projek": "36",
                    "total_jp_per_tahun": "144"
                },
                {
                    "mata_pelajaran": "Informatika",
                    "alokasi_intra": "108",
                    "alokasi_projek": "36",
                    "total_jp_per_tahun": "144"
                },
                {
                    "mata_pelajaran": "Projek Ilmu Pengetahuan Alam dan Sosial",
                    "alokasi_intra": "162",
                    "alokasi_projek": "54",
                    "total_jp_per_tahun": "216"
                },
                {
                    "mata_pelajaran": "Dasar-Dasar Program Keahlian",
                    "alokasi_intra": "432",
                    "alokasi_projek": "",
                    "total_jp_per_tahun": "432"
                },
                {
                    "mata_pelajaran": "**Jumlah JP Kelompok Mata Pelajaran Kejuruan**",
                    "alokasi_intra": "**918**",
                    "alokasi_projek": "**162**",
                    "total_jp_per_tahun": "**1.080**"
                },
                {
                    "mata_pelajaran": "Total JP Mata Pelajaran Umum + Kejuruan",
                    "alokasi_intra": "1.368",
                    "alokasi_projek": "288",
                    "total_jp_per_tahun": "1.656"
                },
                {
                    "mata_pelajaran": "Muatan Lokal",
                    "alokasi_intra": "72",
                    "alokasi_projek": "",
                    "total_jp_per_tahun": "72"
                },
                {
                    "mata_pelajaran": "Total JP Mata Pelajaran Umum + Kejuruan + Muatan Lokal",
                    "alokasi_intra": "1.440",
                    "alokasi_projek": "288",
                    "total_jp_per_tahun": "1.728"
                },
            ],
        },
        "XI": {
            "Kelompok Mata Pelajaran Umum:": [
                {
                    "mata_pelajaran": "Pendidikan Agama Islam dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Kristen dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Katolik dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Buddha dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Hindu dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Khonghucu dan Budi Pekerti",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Pancasila",
                    "alokasi_intra": "54",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "72"
                },
                {
                    "mata_pelajaran": "Bahasa Indonesia",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Pendidikan Jasmani, Olahraga, dan Kesehatan",
                    "alokasi_intra": "54",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "72"
                },
                {
                    "mata_pelajaran": "Sejarah",
                    "alokasi_intra": "54",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "72"
                },
                {
                    "mata_pelajaran": "**Jumlah JP Mata Pelajaran Umum**",
                    "alokasi_intra": "**342**",
                    "alokasi_projek": "**90**",
                    "total_jp_per_tahun": "**432**"
                },
            ],
            "Kelompok Mata Pelajaran Kejuruan:": [
                {
                    "mata_pelajaran": "Matematika",
                    "alokasi_intra": "90",
                    "alokasi_projek": "18",
                    "total_jp_per_tahun": "108"
                },
                {
                    "mata_pelajaran": "Bahasa Inggris",
                    "alokasi_intra": "108",
                    "alokasi_projek": "36",
                    "total_jp_per_tahun": "144"
                },
                {
                    "mata_pelajaran": "Konsentrasi Keahlian",
                    "alokasi_intra": "648",
                    "alokasi_projek": "-",
                    "total_jp_per_tahun": "648"
                },
                {
                    "mata_pelajaran": "Projek Kreatif dan Kewirausahaan",
                    "alokasi_intra": "180",
                    "alokasi_projek": "-",
                    "total_jp_per_tahun": "180"
                },
                {
                    "mata_pelajaran": "Mata Pelajaran Pilihan",
                    "alokasi_intra": "144",
                    "alokasi_projek": "",
                    "total_jp_per_tahun": "144"
                },
                {
                    "mata_pelajaran": "**Jumlah JP Kelompok Mata Pelajaran Kejuruan**",
                    "alokasi_intra": "**1.170**",
                    "alokasi_projek": "**54**",
                    "total_jp_per_tahun": "**1.224**"
                },
                {
                    "mata_pelajaran": "Total JP Mata Pelajaran Umum + Kejuruan",
                    "alokasi_intra": "1.512",
                    "alokasi_projek": "144",
                    "total_jp_per_tahun": "1.656"
                },
                {
                    "mata_pelajaran": "Muatan Lokal",
                    "alokasi_intra": "72",
                    "alokasi_projek": "",
                    "total_jp_per_tahun": "72"
                },
                {
                    "mata_pelajaran": "Total JP Mata Pelajaran Umum + Kejuruan + Muatan Lokal",
                    "alokasi_intra": "1.584",
                    "alokasi_projek": "144",
                    "total_jp_per_tahun": "1.728"
                },
            ],
        },
        "XII": {
            "Kelompok Mata Pelajaran Umum:": [
                {
                    "mata_pelajaran": "Pendidikan Agama Islam dan Budi Pekerti",
                    "alokasi_intra": "32",
                    "alokasi_projek": "16",
                    "total_jp_per_tahun": "48"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Kristen dan Budi Pekerti",
                    "alokasi_intra": "32",
                    "alokasi_projek": "16",
                    "total_jp_per_tahun": "48"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Katolik dan Budi Pekerti",
                    "alokasi_intra": "32",
                    "alokasi_projek": "16",
                    "total_jp_per_tahun": "48"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Buddha dan Budi Pekerti",
                    "alokasi_intra": "32",
                    "alokasi_projek": "16",
                    "total_jp_per_tahun": "48"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Hindu dan Budi Pekerti",
                    "alokasi_intra": "32",
                    "alokasi_projek": "16",
                    "total_jp_per_tahun": "48"
                },
                {
                    "mata_pelajaran": "Pendidikan Agama Khonghucu dan Budi Pekerti",
                    "alokasi_intra": "32",
                    "alokasi_projek": "16",
                    "total_jp_per_tahun": "48"
                },
                {
                    "mata_pelajaran": "Pendidikan Pancasila",
                    "alokasi_intra": "32",
                    "alokasi_projek": "-",
                    "total_jp_per_tahun": "32"
                },
                {
                    "mata_pelajaran": "Bahasa Indonesia",
                    "alokasi_intra": "32",
                    "alokasi_projek": "16",
                    "total_jp_per_tahun": "48"
                },
                {
                    "mata_pelajaran": "**Jumlah JP Mata Pelajaran Umum**",
                    "alokasi_intra": "**96**",
                    "alokasi_projek": "**32**",
                    "total_jp_per_tahun": "**576**"
                },
            ],
            "Kelompok Mata Pelajaran Kejuruan:": [
                {
                    "mata_pelajaran": "Matematika",
                    "alokasi_intra": "48",
                    "alokasi_projek": "-",
                    "total_jp_per_tahun": "48"
                },
                {
                    "mata_pelajaran": "Bahasa Inggris",
                    "alokasi_intra": "64",
                    "alokasi_projek": "-",
                    "total_jp_per_tahun": "64"
                },
                {
                    "mata_pelajaran": "Konsentrasi Keahlian",
                    "alokasi_intra": "352",
                    "alokasi_projek": "-",
                    "total_jp_per_tahun": "352"
                },
                {
                    "mata_pelajaran": "Projek Kreatif dan Kewirausahaan",
                    "alokasi_intra": "80",
                    "alokasi_projek": "-",
                    "total_jp_per_tahun": "80"
                },
                {
                    "mata_pelajaran": "Praktik Kerja Lapangan",
                    "alokasi_intra": "736",
                    "alokasi_projek": "-",
                    "total_jp_per_tahun": "736"
                },
                {
                    "mata_pelajaran": "Mata Pelajaran Pilihan",
                    "alokasi_intra": "64",
                    "alokasi_projek": "-",
                    "total_jp_per_tahun": "64"
                },
                {
                    "mata_pelajaran": "**Jumlah JP Kelompok Mata Pelajaran Kejuruan**",
                    "alokasi_intra": "**1.344**",
                    "alokasi_projek": "**-**",
                    "total_jp_per_tahun": "**1.344**"
                },
                {
                    "mata_pelajaran": "Total JP Mata Pelajaran Umum + Kejuruan",
                    "alokasi_intra": "1.440",
                    "alokasi_projek": "32",
                    "total_jp_per_tahun": "1.472"
                },
                {
                    "mata_pelajaran": "Muatan Lokal",
                    "alokasi_intra": "72",
                    "alokasi_projek": "-",
                    "total_jp_per_tahun": "72"
                },
                {
                    "mata_pelajaran": "Total JP Mata Pelajaran Umum + Kejuruan + Muatan Lokal",
                    "alokasi_intra": "1.512",
                    "alokasi_projek": "32",
                    "total_jp_per_tahun": "1.544"
                },
            ],
        },
    }

    return (
        <DefaultLayout>
            <ContentTitle title='PEMBELAJARAN' subTitle='KURIKULUM' />
            {
                Object.entries(contents).map(([key, value]) => {
                    return (
                        <div className='mb-9'>
                            <SubTitle title={`Kelas ${key}`} containerClassName={'mb-4'} />
                            <AppTableKurikulum content={{ ...value }} />
                        </div>
                    )
                })
            }

        </DefaultLayout>
    )
}

export default Kurikulum