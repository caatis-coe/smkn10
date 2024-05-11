import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { HiMenuAlt3 } from "react-icons/hi";
import SmallScreenNavLink from './Partials/SmallScreenNavLink'
import DropdownNavLink from './Partials/DropdownNavLink'
import logoSMA from '@/Assets/Logo-SMK-10-Bandung.png'
import WideScreenNavLink from './Partials/WideScreenNavLink';
import { FaPhone, FaEnvelope } from 'react-icons/fa'

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
  const keahlianData = [
    {
        "title": "Seni Karawitan",
        "endpoint": "/keahlian-seni-karawitan",
    },
    {
        "title": "Seni Tari",
        "endpoint": "/keahlian-seni-tari",
    },
    {
        "title": "Seni Musik",
        "endpoint": "/keahlian-seni-musik",
    },
    {
        "title": "Seni Teater",
        "endpoint": "/keahlian-seni-teater",
    },
    {
        "title": "Produksi dan Siaran Program Televisi",
        "endpoint": "/keahlian-produksi-dan-siaran-program-televisi",
    },
    {
        "title": "Produksi Film",
        "endpoint": "/keahlian-produksi-film",
    },
];
  /*
  Seni Karawitan
  Seni Tari
  Seni Musik
  Seni Teater
  Produksi dan Siaran Program Televisi
  Produksi Film
  */
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
    <div className='xl:hidden block absolute w-full left-0 right-0 bg-white transition'>
      <ul className='text-center text-[14px] overflow-y-auto max-h-[80vh] border-b-[1px]'>
        <SmallScreenNavLink title="Home" endpoint="/" handleClick={handleClickLink} />
        <SmallScreenNavLink title="Profil" handleClick={handleClickLink} subMenu={profilData} />
        <SmallScreenNavLink title="Pembelajaran" handleClick={handleClickLink} subMenu={pembelajaranData} />
        <SmallScreenNavLink title="Konsentrasi Keahlian" handleClick={handleClickLink} subMenu={keahlianData} />
        <SmallScreenNavLink title="Prestasi" handleClick={handleClickLink} subMenu={prestasiData} />
        <SmallScreenNavLink title="Berita" endpoint="/berita" handleClick={handleClickLink} />
        <SmallScreenNavLink title="Info PPDB" endpoint="/info-ppdb" handleClick={handleClickLink} />
        <SmallScreenNavLink title="Hubungi Kami" endpoint="/contact-us" handleClick={handleClickLink} />
      </ul>
    </div>
  )

  return (
    <nav className=''>
      <div className='z-50'>
        <div className=' h-8 flex justify-end items-center gap-x-6 bg-primary text-white px-10 md:px-20'>
          <a className='flex items-center' href='tel:6281369696969'>
            <div className='mr-2'>
              <FaPhone className='text-white text-[12px] sm:text-sm' />
            </div>
            <span className='text-[9px] sm:text-xs'>+62813 6969 6969</span>
          </a>
          <a className=' flex items-center' href='mailto:admin@smkn10bandung.sch.id'>
            <div className='mr-2'>
              <FaEnvelope className='text-white text-[12px] sm:text-sm' />
            </div>
            <span className='text-[9px] sm:text-xs'>admin@smkn10bandung.sch.id</span>
          </a>
        </div>

        <div className='h-10vh flex justify-between border-b border-grey bg-white text-black px-10 md:px-20 py-4'>
          <div className='flex items-center justify-center cursor-default'>
            <img className='size-10' src={logoSMA} alt='SMK 10 Bandung Logo' />
            <div className='hidden md:block  ms-2 text-[14px] font-semibold'>
              SMKN 10 Bandung
            </div>
          </div>
          <div className='flex items-center justify-end'>
            <div className='hidden xl:block'>
              <ul className='flex gap-5 text-[14px] font-medium'>
                <WideScreenNavLink title="Home" endpoint="/" />
                <DropdownNavLink title="Profil" subMenu={profilData} />
                <DropdownNavLink title="Pembelajaran" subMenu={pembelajaranData} />
                <DropdownNavLink title="Konsentrasi Keahlian" subMenu={keahlianData} />
                <DropdownNavLink title="Prestasi" subMenu={prestasiData} />
                <WideScreenNavLink title="Berita" endpoint="/berita" />
                <WideScreenNavLink title="Info PPDB" endpoint="/info-ppdb" />
                <WideScreenNavLink title="Hubungi Kami" endpoint="/contact-us" />
              </ul>
            </div>
          </div>
          <button className='block xl:hidden transition scale-150' onClick={() => setClick(!click)}>
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