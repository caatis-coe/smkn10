import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import AppTable from '@/Components/AppTable'
import DefaultLayout from '@/Layouts/DefaultLayout'


function PrestasiSiswa() {
  return (
    <DefaultLayout>
      <div className='w-full'>
        <ContentTitle title='PRESTASI' subTitle='SISWA' />
        <AppTable contents={[["Nama", 'Prestasi', 'Juara', 'Penyelenggara', 'Tahun', 'Tingkat']]} />
      </div>
    </DefaultLayout>
  )
}

export default PrestasiSiswa