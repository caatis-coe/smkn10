import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'

function Jurusan({ jurusan }) {
  return (
    <DefaultLayout>
      <div>
        <ContentTitle title='JURUSAN' subTitle={jurusan.title} />
        <p>Visi: {jurusan.visi}</p>
        <p>Misi: {jurusan.misi}</p>
      </div>
    </DefaultLayout>
  )
}

export default Jurusan