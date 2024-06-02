import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import AppTable from '@/Components/AppTable'
import DefaultLayout from '@/Layouts/DefaultLayout'

function PrestasiGuru() {
  return (
    <DefaultLayout>
      <div className='w-full'>
        <ContentTitle title='PRESTASI' subTitle='GURU' />
        <AppTable contents={[["Nama", 'Prestasi', 'Tahun']]} />
      </div>
    </DefaultLayout>
  )
}

export default PrestasiGuru