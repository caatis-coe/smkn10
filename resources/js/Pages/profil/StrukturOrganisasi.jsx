import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'

function StrukturOrganisasi() {

  const bagan = `url('images/chart.jpg')`

  return (
    <DefaultLayout>
      <ContentTitle title='PROFIL' subTitle='STRUKTUR ORGANISASI' />
      <div className='overflow-x-auto'>
        <div className='min-w-96 aspect-[5/3]'>
          <div className='bg-cover bg-center h-full' style={{ backgroundImage: bagan }} />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default StrukturOrganisasi