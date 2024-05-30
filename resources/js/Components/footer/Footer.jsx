import React from 'react'
import SocialMediaButton from './Partials/SocialMediaButton'
import smknNegeri10 from '@/Assets/slogan.png'
import contactData from '@/Data/ContactData'

function Footer() {
  return (
    <div className='flex flex-col items-center md:flex-row flex-nowrap bg-black text-white mt-6'>
      <div className='flex-shrink-0'>
        <img className='size-72' src={smknNegeri10} alt="" />
      </div>
      <div className='hidden md:grid gap-y-7 grid-rows-[auto,auto] grid-cols-[auto,auto] w-full h-full ps-0 lg:ps-12 p-12'>
        <div className='font-bold text-xl xl:text-2xl'>
          TENTANG KAMI
        </div>
        <div className='font-bold text-xl xl:text-2xl'>
          IKUTI KAMI
        </div>
        <div className='font-light text-sm xl:text-base flex flex-col gap-3'>
          <div>{contactData.address}</div>
          <div><span className='font-medium'>Hubungi Kami :</span> {contactData.email}</div>
        </div>
        <div className='flex flex-nowrap gap-x-5'>
          <SocialMediaButton logo={"FaInstagram"} link={"https://www.instagram.com/official_smkn10bdg/"} />
          <SocialMediaButton logo={"FaTiktok"} link={"https://www.tiktok.com/@smkn10bandung_official"} />
          <SocialMediaButton logo={"FaFacebook"} link={"https://www.facebook.com/AdminSmkn10Bandung"} />
          <SocialMediaButton logo={"FaYoutube"} link={"https://www.youtube.com/@smkn10bandungofficial83"} />
        </div>
      </div>
      <div className='flex-col flex md:hidden gap-y-7 w-full h-full px-12 pb-16'>
        <div>
          <div className='font-bold text-xl xl:text-2xl mb-4'>
            TENTANG KAMI
          </div>
          <div className='font-light text-sm xl:text-base flex flex-col gap-3'>
            <div>{contactData.address}</div>
            <div><span className='font-medium'>Hubungi Kami :</span> {contactData.email}</div>
          </div>
        </div>
        <div>
          <div className='font-bold text-xl xl:text-2xl mb-4'>
            IKUTI KAMI
          </div>
          <div className='flex  flex-nowrap gap-x-5'>
            <SocialMediaButton logo={"FaInstagram"} link={"https://www.instagram.com/official_smkn10bdg/"} />
            <SocialMediaButton logo={"FaTiktok"} link={"https://www.tiktok.com/@smkn10bandung_official"} />
            <SocialMediaButton logo={"FaFacebook"} link={"https://www.facebook.com/AdminSmkn10Bandung"} />
            <SocialMediaButton logo={"FaYoutube"} link={"https://www.youtube.com/@smkn10bandungofficial83"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer