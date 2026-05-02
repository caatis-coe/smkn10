import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'


function Container({ containerClass, title, data = ""}) {
  return (
    <div className={`${containerClass} flex-1 relative border-grey border-2 bg-white rounded-lg h-auto`}>
      <div className='absolute top-0 left-8 font-semibold  text-[36px] rounded-full -translate-y-1/2 text-primary bg-white px-2'>
        {title}
      </div>
      <div className='p-8'>
        <div className="prose max-w-none ">
          <div className="space-y-2 " dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </div>
    </div>
  )
};

function VisiMisi({visi, misi}) {

  return (
    <DefaultLayout>
      <div className='w-full '>
        <ContentTitle title='PROFIL' subTitle='VISI MISI' />
        <div className='flex flex-col md:flex-row gap-12 mt-12'>
          <Container title={"VISI"} data={visi} />
          <Container title={"MISI"} data={misi} />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default VisiMisi