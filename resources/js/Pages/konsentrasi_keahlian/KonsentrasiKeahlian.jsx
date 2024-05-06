import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'

function KonsentrasiKeahlian({ datas }) {
  return (
    <DefaultLayout headerChildren={
    <>
    </>}>
      <div>
        <ContentTitle title='JURUSAN' subTitle={datas.title} />
        <p>{datas.description}</p>
      </div>
    </DefaultLayout>
  )
}

export default KonsentrasiKeahlian