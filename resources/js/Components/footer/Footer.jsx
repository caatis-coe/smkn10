import React from 'react'
import SocialMediaButton from './Partials/SocialMediaButton'
import smknNegeri10 from '@/Assets/slogan.png'

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
          <div>Jl. Cijawura Hilir No.339 40286 Bandung Jawa Barat</div>
          <div><span className='font-medium'>Hubungi Kami :</span> SMKNBandung@gmail.com</div>
        </div>
        <div className='flex flex-nowrap gap-x-5'>
          <SocialMediaButton logo={"FaInstagram"} link={"https://www.instagram.com/raychan.jpg/"} />
          <SocialMediaButton logo={"FaTiktok"} link={"https://www.tiktok.com/"} />
          <SocialMediaButton logo={"FaFacebook"} link={"https://www.facebook.com/"} />
          <SocialMediaButton logo={"FaYoutube"} link={"https://www.youtube.com/"} />
        </div>
      </div>
      <div className='flex-col flex md:hidden gap-y-7 w-full h-full px-12 pb-16'>
        <div>
          <div className='font-bold text-xl xl:text-2xl mb-4'>
            TENTANG KAMI
          </div>
          <div className='font-light text-sm xl:text-base flex flex-col gap-3'>
            <div>Jl. Cijawura Hilir No.339 40286 Bandung Jawa Barat</div>
            <div><span className='font-medium'>Hubungi Kami :</span> SMKNBandung@gmail.com</div>
          </div>
        </div>
        <div>
          <div className='font-bold text-xl xl:text-2xl mb-4'>
            IKUTI KAMI
          </div>
          <div className='flex  flex-nowrap gap-x-5'>
            <SocialMediaButton logo={"FaInstagram"} link={"https://www.instagram.com/raychan.jpg/"} />
            <SocialMediaButton logo={"FaTiktok"} link={"https://www.tiktok.com/"} />
            <SocialMediaButton logo={"FaFacebook"} link={"https://www.facebook.com/"} />
            <SocialMediaButton logo={"FaYoutube"} link={"https://www.youtube.com/"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer