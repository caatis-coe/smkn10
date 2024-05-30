import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'


function ContainerPost({ content }) {

  const contentImage = `url('${window.location.origin}/images/${content.image_path}')`

  return (
    <div className='flex flex-col lg:flex-row gap-x-4 mb-9'>
      <div className='bg-cover bg-center min-h-72
      aspect-video rounded-md grid place-items-center group
      lg:hover:scale-105 transition duration-300 '
        style={{ backgroundImage: contentImage }}>
        <div className='hidden lg:grid bg-black/20 rounded-md w-full h-full place-items-center
        group-hover:opacity-0 transition duration-200'>
          <div className='text-4xl font-bold text-white  group-hover:scale-75 
          transition duration-200'>
            {content.year}
          </div>
        </div>
      </div>
     

    </div>
  )
}

function Sejarah({ data }) {
  return (
    <DefaultLayout>
      <ContentTitle title='PROFIL' subTitle='SEJARAH' />
      <div className='w-full'>
        {/* {data.map((content, index) => <ContainerPost key={index} content={content} />)} */}
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: data[0].description }}></div>
      </div>

    </DefaultLayout>
  )
}

export default Sejarah