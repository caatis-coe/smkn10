import React from 'react'
import SocialMediaButton from './Partials/SocialMediaButton'

function Footer() {
  return (
    <div className='px-14 py-12 flex flex-col items-center md:flex-row w-full h-auto bg-gradient-to-r from-tertiary to-primary md:justify-between text-white'>
      <div className='flex flex-col justify-between'>
        <div>
          <div className='text-[36px] sm:text-[48px] font-semibold'>
            SMKN 10 Bandung
          </div>
          <div className='text-[12px] sm:text-[16px] mb-3 font-extralight'>
            Jl. Cijawura Hilir No.339 40286 Bandung Jawa Barat
          </div>
        </div>
        <div className='text-[12px] sm:text-[16px]'>
          <table>
            <thead>
              <tr>
                <td className='font-semibold'>Phone </td>
                <td className='font-semibold'>:</td>
                <td className='font-light  ps-2'>0821-3218-32 (0812)</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='font-semibold'>Email</td>
                <td className='font-semibold'>:</td>
                <td className='font-light ps-2'>SMKNBandung@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='flex mt-6 flex-nowrap md:grid md:grid-cols-3 gap-x-5 gap-y-5 items-center'>
        <SocialMediaButton logo={"FaInstagram"} link={"https://www.instagram.com/"} />
        <SocialMediaButton logo={"FaTiktok"} link={"https://www.tiktok.com/"} />
        <SocialMediaButton logo={"FaFacebookF"} link={"https://www.facebook.com/"} />
        <div className='hidden md:block'></div>
        <SocialMediaButton logo={"FaTwitter"} link={"https://www.twitter.com/"} />
        <SocialMediaButton logo={"FaYoutube"} link={"https://www.youtube.com/"} />
      </div>
    </div>
  )
}

export default Footer