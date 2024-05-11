import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'

function KonsentrasiKeahlian({ data }) {
  
  const keahlianImage = `url('${window.location.origin}/images/image3.jpg')`
  
  return (
    <DefaultLayout headerChildren={
    <div className='bg-center grid place-items-center min-h-56 md:min-h-96 w-[100vw] bg-cover' style={{backgroundImage : keahlianImage}}>
      <div className='text-white text-2xl md:text-6xl font-semibold text-center bg-black/50 w-full h-full grid place-items-center'>
        {data.title}
      </div>
    </div>
    }>
      <div>
        <p>{data.description}</p>
      </div>
    </DefaultLayout>
  )
}

export default KonsentrasiKeahlian