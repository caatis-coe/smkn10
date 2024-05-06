import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import AppTable from '@/Components/AppTable'
import DefaultLayout from '@/Layouts/DefaultLayout'


/*
Kepala Sekolah
Wakil Kepala Sekolah
Ketua Program Keahlian Seni Pertunjukan
Ketua Program Keahlian Broadcasting dan Perfilman
Ketua Konsentrasi Keahlian Seni Karawitan
Ketua Konsentrasi Keahlian Seni Tari
Ketua Konsentrasi Keahlian Seni Musik
Ketua Konsentrasi Keahlian Seni Teater
Ketua Konsentrasi Keahlian Produksi dan Siaran Program Televisi
Ketua Konsentrasi Keahlian Produksi Film
*/
function DaftarGuru({daftarGuru = []}) {

  return (
    <DefaultLayout>
      <div className='w-full'>
        <ContentTitle title='PROFIL' subTitle='DAFTAR GURU' />
        <AppTable contents={[["Nama", 'NIP', 'pangkat', 'jabatan', 'pendidikan'], ...daftarGuru]} />
      </div>
    </DefaultLayout>
  )
}

export default DaftarGuru