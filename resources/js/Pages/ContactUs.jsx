import DefaultLayout from '@/Layouts/DefaultLayout'
import React, { useState } from 'react'
import { MdLocalPhone, MdLocationOn, MdOutlineEmail } from "react-icons/md";

function ContactUs() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const inputStyle = `border-grey w-full rounded-xl py-3 px-4 border-2 focus:bg-[#FFF] placeholder:text-black bg-white`

  return (
    <DefaultLayout headerChildren={
      <>
        <iframe className='w-full aspect-[7/4] sm:aspect-[7/3] md:aspect-[7/2]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.557909291896!2d107.65130486200746!3d-6.963297844790215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e83a61af0995%3A0x718dc5862a314182!2sSMK%20Negeri%2010%20Bandung!5e0!3m2!1sen!2sid!4v1715280795161!5m2!1sen!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </>
    }>
      <div className='mt-7 flex-nowrap min-h-96 flex flex-col gap-x-6 gap-y-12 lg:flex-row'>
        <div className='gap-y-9 lg:gap-y-16 flex flex-col'>
          {/* ALAMAT  */}
          <div className='flex items-center gap-x-6'>
            <div className='h-10 lg:h-12 grid place-items-center bg-lighttertiary text-white aspect-square rounded-full'>
              <MdLocationOn className='size-1/2' />
            </div>
            <div>
              <div className='font-semibold text-grey text-2xl lg:text-3xl'>Alamat</div>
              <div className='font-light text-md'>Jl. Cijawura Hilir No.339 40286 Bandung Jawa Barat</div>
            </div>
          </div>

          {/* EMAIL */}
          <div className='flex items-center gap-x-6'>
            <div className='h-10 lg:h-12 grid place-items-center bg-lighttertiary text-white aspect-square rounded-full'>
              <MdOutlineEmail className='size-1/2' />
            </div>
            <div>
              <div className='font-semibold text-grey text-2xl lg:text-3xl'>Email</div>
              <div className='font-light text-md'>SMKNBandung@gmail.com
              </div>
            </div>
          </div>

          {/* TELEFON  */}
          <div className='flex items-center gap-x-6'>
            <div className='h-10 lg:h-12 grid place-items-center bg-lighttertiary text-white aspect-square rounded-full'>
              <MdLocalPhone className='size-1/2' />
            </div>
            <div>
              <div className='font-semibold text-grey text-2xl lg:text-3xl'>Telepon</div>
              <div className='font-light text-md'>0821-3218-32 (0812)</div>
            </div>
          </div>
        </div>
        <form className=' flex flex-col flex-1 gap-y-6'>
          <div className='flex flex-col sm:flex-row lg:flex-col gap-y-6 xl:flex-row gap-x-6'>
            <input placeholder='Your Name'
              className={inputStyle} />
            <input placeholder='Your Email'
              className={inputStyle} />
          </div>
          <input placeholder='Subject'
              className={inputStyle} />
          <textarea placeholder='Message'
              className={`flex-1 min-h-72 lg:min-h-0  ${inputStyle}`}/>
          <button className='p-3 self-end bg-primary rounded-lg
          text-white hover:bg-lighttertiary transition duration-75 ease-in w-32'>Submit</button>
        </form>
      </div>
    </DefaultLayout>
  )
}

export default ContactUs