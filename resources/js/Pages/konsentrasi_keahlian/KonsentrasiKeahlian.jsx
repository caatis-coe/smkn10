import ContentTitle from '@/Components/ContentTitle'
import SubTitle from '@/Components/SubTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'

function KonsentrasiKeahlian({ data }) {


  //const keahlianImage = `url('${window.location.origin}/images/image3.jpg')`

  return (
    <DefaultLayout
      // headerChildren={
      //   <div className='bg-center grid place-items-center min-h-40 md:min-h-50 w-[100vw] bg-cover bg-blue-600'>
      //     <div className='text-white text-2xl md:text-6xl font-semibold text-center bg-black/50 w-full h-full grid place-items-center'>
      //       {data.title}
      //     </div>
      //   </div>
      // }
    >
      <ContentTitle title={"KEAHLIAN"} subTitle={data.title.toUpperCase()} />
      <div>
        <p>{data.description}</p>
      </div>
      <SubTitle title={"Dokumentasi"}></SubTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:gap-16 border border-gray-200 p-12 rounded-lg">

        {data.image_path.map((url, index) => (
          <img
            key={index}
            src={'storage/' + url}
            alt={`Image ${index + 1}`}
            className='m-2 shadow-md w-full'
            style={{ objectFit: 'cover' }}
          />
        ))}
      </div>
    </DefaultLayout>
  )
}

export default KonsentrasiKeahlian