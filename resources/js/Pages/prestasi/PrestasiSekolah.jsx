import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import AppTable from '@/Components/AppTable'
import DefaultLayout from '@/Layouts/DefaultLayout'

function PrestasiSekolah() {
  return (
    <DefaultLayout>
      <div className='w-full'>
        <ContentTitle title='PRESTASI' subTitle='SEKOLAH' />
        <AppTable contents={[["Prestasi yang diterima", 'Tahun']]} />
      </div>
    </DefaultLayout>
  )
}

export default PrestasiSekolah