import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'

function KonsentrasiKeahlian({ data }) {
  
  const keahlianImage = `url('${window.location.origin}/images/image3.jpg')`
  
  return (
    <DefaultLayout headerChildren={
    <div className='bg-center grid place-items-center min-h-40 md:min-h-50 w-[100vw] bg-cover bg-blue-600'>
      <div className='text-white text-2xl md:text-6xl font-semibold text-center bg-black/50 w-full h-full grid place-items-center'>
        {data.title}
      </div>
    </div>
    }>
      <div>
        <p>{data.description}</p>
      </div>

    <div className="flex flex-wrap justify-center mt-20">

      {data.image_path.map((url, index) => (
          <img
              key={index}
              src={'/images/'+ url}
              alt={`Image ${index + 1}`}
              className='m-2 shadow-md lg:max-h-[600px] lg:max-w-[600px] md:max-w-[300px]'
              style={{objectFit: 'cover'}}
          />
      ))}
    </div>
    </DefaultLayout>
  )
}

export default KonsentrasiKeahlian