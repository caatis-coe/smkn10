import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from "react-icons/hi";
import SmallScreenNavLink from './Partials/SmallScreenNavLink'
import DropdownNavLink from './Partials/DropdownNavLink'
import logoSMA from '@/Assets/Logo-SMK-10-Bandung.png'
import WideScreenNavLink from './Partials/WideScreenNavLink';

function Nav() {
  const profilData = ([
    {
      "title": "Sejarah",
      "endpoint": "/sejarah"
    },
    {
      "title": "Daftar Guru",
      "endpoint": "/daftar-guru"
    },
    {
      "title": "Daftar Karyawan",
      "endpoint": "/daftar-karyawan"
    },
    {
      "title": "Visi dan Misi",
      "endpoint": "/visi-misi"
    },
    {
      "title": "Struktur Organisasi",
      "endpoint": "/struktur-organisasi"
    },
  ])
  const pembelajaranData = ([
    {
      "title": "Fasilitas",
      "endpoint": "/fasilitas"
    },
    {
      "title": "Kegiatan Mahasiswa",
      "endpoint": "/kegiatan-mahasiswa"
    },
    {
      "title": "Kurikulum",
      "endpoint": "/kurikulum"
    },
  ])
  const jurusanData = ([
    {
      "title": "Seni dan Budaya",
      "endpoint": "/jurusan-seni-budaya",
      "visi": "jadi ayam",
      "misi": "cari ayam"
    },
    {
      "title": "Multimedia",
      "endpoint": "/jurusan-multimedia",
      "visi": "gak tau",
      "misi": "lebih gak tau"
    },
    {
      "title": "Digididaw Art",
      "endpoint": "/jurusan-digidaw-art",
      "visi": "desain",
      "misi": "digidaw"
    },
  ])
  const prestasiData = ([
    {
      "title": "Prestasi Sekolah",
      "endpoint": "/prestasi-sekolah"
    },
    {
      "title": "Prestasi Siswa",
      "endpoint": "/prestasi-siswa"
    },
    {
      "title": "Prestasi Guru",
      "endpoint": "/prestasi-guru"
    },
  ])

  const [click, setClick] = useState(false)

  const handleClickLink = () => {
    setClick(false)
  }

  const content = (
    <div className='lg:hidden block absolute w-full left-0 right-0 bg-white transition'>
      <ul className='text-center text-[14px]'>
        <SmallScreenNavLink title="Home" endpoint="/" handleClick={handleClickLink} />
        <SmallScreenNavLink title="Profil" handleClick={handleClickLink} subMenu={profilData} />
        <SmallScreenNavLink title="Pembelajaran" handleClick={handleClickLink} subMenu={pembelajaranData} />
        <SmallScreenNavLink title="Jurusan" handleClick={handleClickLink} subMenu={jurusanData} />
        <SmallScreenNavLink title="Prestasi" handleClick={handleClickLink} subMenu={prestasiData} />
        <SmallScreenNavLink title="Blog" endpoint="/blog" handleClick={handleClickLink} />
        <SmallScreenNavLink title="Hubungi Kami" endpoint="/contact-us" handleClick={handleClickLink} />
      </ul>
    </div>
  )

  return (
    <nav className=''>
      <div className='z-50'>
        <div className='h-10vh flex justify-between border-b border-grey bg-white text-black px-10 md:px-20 py-4'>
          <div className='flex items-center justify-center cursor-default'>
            <img className='size-10' src={logoSMA} alt='SMK 10 Bandung Logo' />
            <div className='hidden md:block  ms-2 text-[14px] font-semibold'>
              SMKN 10 Bandung
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='hidden lg:block'>
              <ul className='flex gap-7 text-[14px] font-medium'>
                <WideScreenNavLink title="Home" endpoint="/" />
                <DropdownNavLink title="Profil" subMenu={profilData} />
                <DropdownNavLink title="Pembelajaran" subMenu={pembelajaranData} />
                <DropdownNavLink title="Jurusan" subMenu={jurusanData} />
                <DropdownNavLink title="Prestasi" subMenu={prestasiData} />
                <WideScreenNavLink title="Blog" endpoint="/blog" />
                <WideScreenNavLink title="Hubungi Kami" endpoint="/contact-us" />
              </ul>
            </div>
          </div>
          <button className='block lg:hidden transisition scale-150' onClick={() => setClick(!click)}>
            {click ? <FaTimes /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
      <div>
        {click && content}
      </div>
    </nav>
  )
}

export default Nav;