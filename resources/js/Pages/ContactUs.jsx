import DefaultLayout from '@/Layouts/DefaultLayout'
import React, { useState } from 'react'
import { MdLocalPhone, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import contactData from '@/Data/ContactData.jsx';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { Inertia } from '@inertiajs/inertia';
import { toast } from 'react-toastify';
import { usePage } from '@inertiajs/react';

function ContactUs() {
  const { register, handleSubmit, formState: { errors }, reset, control} = useForm();
  const { props } = usePage();
  const { success, error } = props;

  React.useEffect(() => {
    if (success) {
      toast.success(success, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }

    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  }, [success, error]);

  const onSubmit = (data) => {
    Inertia.post('/send-email', data, {
      onSuccess: () => {
        reset();
      },
      onError: (errors) => {
        console.error(errors);
      }
    });
  };

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
              <div className='font-light text-md'>{contactData.address}</div>
            </div>
          </div>

          {/* EMAIL */}
          <div className='flex items-center gap-x-6'>
            <div className='h-10 lg:h-12 grid place-items-center bg-lighttertiary text-white aspect-square rounded-full'>
              <MdOutlineEmail className='size-1/2' />
            </div>
            <div>
              <div className='font-semibold text-grey text-2xl lg:text-3xl'>Email</div>
              <div className='font-light text-md'>{contactData.email}</div>
            </div>
          </div>

          {/* TELEFON  */}
          <div className='flex items-center gap-x-6'>
            <div className='h-10 lg:h-12 grid place-items-center bg-lighttertiary text-white aspect-square rounded-full'>
              <MdLocalPhone className='size-1/2' />
            </div>
            <div>
              <div className='font-semibold text-grey text-2xl lg:text-3xl'>Telepon</div>
              <div className='font-light text-md'>{contactData.phone}</div>
            </div>
          </div>
        </div>

        {/* FORM EMAIL  */}
        <form className=' flex flex-col flex-1 gap-y-6' onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='flex flex-col sm:flex-row lg:flex-col gap-y-6 xl:flex-row gap-x-6'>
            <div className='grow'>
              <input placeholder='Your Name'
                className={inputStyle} {...register("name", {
                  required: "Name is required"
                })} />
              <p>{errors.name?.message}</p>
            </div>
            <div className='grow'>
              <input placeholder='Your Email' type='email'
                className={inputStyle} {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                    message: "Invalid email format"
                  },
                  required: "Email is required"
                })} />
              <p>{errors.email?.message}</p>
            </div>
          </div>
          <div>
            <input placeholder='Subject'
              className={inputStyle} {...register("subject", {
                required: {
                  value: true,
                  message: "Subject is required"
                }
              })} />
            <p>{errors.subject?.message}</p>
          </div>
          <div>
            <textarea placeholder='Message'
              className={`flex-1 h-36 lg:min-h-0  ${inputStyle}`}
              {...register("message", {
                required: {
                  value: true,
                  message: "Message is required"
                }
              })} />
            <p>{errors.message?.message}</p>
          </div>

          <button className='p-3 self-center bg-primary rounded-lg
          text-white hover:bg-lighttertiary transition duration-75 ease-in w-32'>Submit</button>
        </form>


      </div>
      <DevTool control={control} />
      <style jsx="true">{`
                p {
                    color : rgb(239 68 68);
                    margin-top : 2px
                }
            `}</style>
    </DefaultLayout>
  )
}

export default ContactUs