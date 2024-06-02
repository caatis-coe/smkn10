import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import AppTable from '@/Components/AppTable'
import DefaultLayout from '@/Layouts/DefaultLayout'

function PrestasiSekolah({daftarKejuaraan = []}) {
  return (
    <DefaultLayout>
      <div className='w-full'>
        <ContentTitle title='PRESTASI' subTitle='SEKOLAH' />
        <AppTable contents={[["Nama Kejuaraan", 'Hasil yang dicapai'], ...daftarKejuaraan]} />
      </div>
    </DefaultLayout>
  )
}

export default PrestasiSekolah