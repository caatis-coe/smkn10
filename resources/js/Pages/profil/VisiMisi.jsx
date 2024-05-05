import React, { useEffect, useState } from 'react'
import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'


function VisiMisi() {

  const data = {
    "visi": "Menjadi pusat pendidikan seni budaya yang unggul, menginspirasi, dan berinovasi dalam mengembangkan potensi kreativitas siswa-siswinya",
    "misi": `1. Mengembangkan bakat dan minat siswa di bidang seni budaya melalui program pendidikan yang berkualitas.\n
            2. Menyediakan fasilitas dan lingkungan belajar yang kondusif untuk pengembangan kreativitas siswa.\n
            3. Mendorong kolaborasi antara siswa, guru, dan komunitas seni budaya untuk menciptakan karya yang berkualitas dan bermakna.\n
            4. Memperkenalkan beragam seni budaya kepada siswa agar memiliki pemahaman yang mendalam dan apresiasi yang tinggi terhadap keanekaragaman budaya.\n
            5. Mengintegrasikan teknologi dalam pembelajaran seni budaya untuk memperluas ruang ekspresi dan inovasi siswa.\n
            6. Menumbuhkan sikap tanggap dan peduli terhadap masalah sosial melalui karya seni budaya yang berdampak positif bagi masyarakat.`
  }

  const container = (containerClass, title, description = "") => (
    <div className={`${containerClass} flex-1  relative border-grey border-2 bg-white rounded-lg -z-50 h-auto`}>
      <div className='absolute top-0 left-8 font-medium text-[36px] rounded-full -translate-y-1/2 text-grey bg-white px-2'>
        {title}
      </div>
      <div className='p-8'>
        {description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== description.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )

  return (
    <DefaultLayout>
      <div className='w-full '>
        <ContentTitle title='PROFIL' subTitle='VISI MISI' />
        <div className='flex flex-col md:flex-row gap-12 mt-12'>
          {container('', "VISI", data.visi)}
          {container('', "MISI", data.misi)}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default VisiMisi