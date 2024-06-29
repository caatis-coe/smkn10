import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import AppTable from '@/Components/AppTable'
import DefaultLayout from '@/Layouts/DefaultLayout'

function DaftarKaryawan() {
  return (
    <DefaultLayout>
      <div className='w-full'>
        <ContentTitle title='PROFIL' subTitle='DAFTAR TENAGA PENDIDIKAN' />
        <AppTable contents={[["Nama", 'Posisi/Jabatan']]} />
      </div>
    </DefaultLayout>
  )
}

export default DaftarKaryawan