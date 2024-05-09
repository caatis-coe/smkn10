import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'

function ContactUs() {
  return (
    <DefaultLayout headerChildren={
      <>
        <iframe className='w-full aspect-[7/2]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.557909291896!2d107.65130486200746!3d-6.963297844790215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e83a61af0995%3A0x718dc5862a314182!2sSMK%20Negeri%2010%20Bandung!5e0!3m2!1sen!2sid!4v1715280795161!5m2!1sen!2sid"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  
      </>
    }>
      <div className='mt-7 flex'>
        <div>
          <div>
            
          </div>
        </div>
        <div>

        </div>
      </div>
    </DefaultLayout>
  )
}

export default ContactUs