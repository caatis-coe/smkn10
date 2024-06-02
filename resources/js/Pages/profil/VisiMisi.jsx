import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'


function Container({ containerClass, title, description = "" }) {
  return (
    <div className={`${containerClass} flex-1 relative border-black border-2 bg-white rounded-lg h-auto`}>
      <div className='absolute top-0 left-8 font-medium text-[36px] rounded-full -translate-y-1/2 text-black bg-white px-2'>
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
};

function VisiMisi() {

  const data = {
    "visi": "Menghasilkan lulusan Unggul dan Produktif di Bidang Seni dan ekonomi Kreatif berkarakter Profil Pelajar Pancasila pada abad ke -21.",
    "misi": `1.  Menyelenggarakan pembelajaran menyenangkan, ramah anak, berpusat pada peserta didik,membudayakan Pola Hidup bersih  dan sehat ( PHBS) dengan berdasarkan budaya kearifan Lokal Jabar Masagi.\n
            2. Melaksanakan Pembelajaran Bermutu, inovatif , kreatif, membudayakan karajter kewirausahaan melalui Model  pembelajaran Teaching Factory ( TeFa) yang menghasilkan produk dan jasa di bidang  karya seni dan ekonomi Kreatif pada program Keahlian seni pertunjukan, broadcasting dan perfilman.\n
            3. Mewujudkan pembelajaran kerjasama kemitraan dengan dunia kerja dalam link and match untuk menghasilkan lulusan berstandar industry yang berakhlak Mulia dan berbudi pekerti utama.`
  }
  return (
    <DefaultLayout>
      <div className='w-full '>
        <ContentTitle title='PROFIL' subTitle='VISI MISI' />
        <div className='flex flex-col md:flex-row gap-12 mt-12'>
          <Container title={"VISI"} description={data.visi} />
          <Container title={"MISI"} description={data.misi} />
        </div>
      </div>
    </DefaultLayout>
  )
}

export default VisiMisi