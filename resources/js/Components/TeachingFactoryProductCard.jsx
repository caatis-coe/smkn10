import React, { useState } from 'react'
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { Inertia } from '@inertiajs/inertia';

const customStyles = {
  content: {
    position: 'fixed',  // Ensure the element is fixed in place
    top: '58%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    maxWidth: '762px',
    width: '80%',
    maxHeight: '512px',
    overflow: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1rem',
    zIndex: -9999,
  },
};

function FormText({ title, callbackText, isNumber = false, errorMessage }) {
  return (
    <div className='mb-6 flex flex-col-reverse'>
      {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
      <input
        type={isNumber ? "number" : "text"}
        onChange={callbackText}
        className='w-full rounded-md my-2 border-grey focus:ring-lighttertiary no-spinner peer transition-all'

      />
      <div className='ms-1 text-gray-400 peer-focus:font-semibold peer-focus:text-lighttertiary transition-all'>{title}</div>
    </div>
  )
}

function TeachingFactoryProductCard({ productData }) {
  const backgroundImage = `url('storage/${productData.image_path}')`;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [namaPembeli, setNamaPembeli] = useState("")
  const [namaPerusahaan, setNamaPerusahaan] = useState("")
  const [alamatPerusahaan, setAlamatPerusahaan] = useState("")
  const [noKontak, setNoKontak] = useState("")
  const [errors, setErrors] = useState({});
  const errorMessage = "Fill out this field"

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setNamaPembeli("");
    setNamaPerusahaan("");
    setAlamatPerusahaan("")
    setNoKontak("");
    setErrors({});
  }

  function sendDataBuyer() {
    const newErrors = {};
    if (namaPembeli === "") newErrors.namaPembeli = errorMessage;
    if (namaPerusahaan === "") newErrors.namaPerusahaan = errorMessage;
    if (alamatPerusahaan === "") newErrors.alamatPerusahaan = errorMessage;
    if (noKontak === "") newErrors.noKontak = errorMessage;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Show error toast here for validation errors
    } else {
      const idProduct = productData.id;
      Inertia.post('/send-data-buyer', {
        idProduct,
        namaPembeli,
        namaPerusahaan,
        alamatPerusahaan,
        noKontak
      },
        {
          onFinish: () => {
            Inertia.visit('/teaching-factory');
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
          },
          onError: (error) => {
            console.error("Failed to send data:", error);
            toast.error("Failed to send data. Please try again later.", {
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
        });
    }
  }



  return (
    <>
      <div className='flex flex-col text-black hover:shadow rounded-xl p-2 border border-gray-200 transition-all'>
        <div className={`w-full aspect-square bg-cover bg-center rounded-md `} style={{ backgroundImage }}>
        </div>
        <div className='p-3 h-48 flex flex-col justify-between'>
          <div className='flex flex-col gap-1'>
            <div className='line-clamp-2 text-xl font-semibold '>
              {productData.title}
            </div>
            <div className='line-clamp-3 text-sm font-light '>
              {productData.description}
            </div>
          </div>
          <div className='flex items-center gap-3 mt-4
        justify-between bg-lightgrey py-2 px-5 rounded-xl
        self-start cursor-pointer hover:bg-lightgreenprimary hover:text-white 
        transition-all
        ease-out ' onClick={openModal}>
            <IoBagRemoveOutline className='text-lg' />
            <div className='font-semibold'>Beli</div>
          </div>
        </div>



        <style jsx="true">{`
        .no-spinner::-webkit-outer-spin-button,
        .no-spinner::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        .no-spinner[type='number'] {
          -moz-appearance: textfield;
        }
      `}</style>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className='flex flex-col-reverse md:flex-row items-center'>
          <div className={`w-full md:w-72 shrink-0 aspect-square bg-cover bg-center rounded-xl`} style={{ backgroundImage }}>
          </div>
          <div className='p-6 md:p-12 flex-grow-0 font-semibold text-4xl md:text-2xl'>
            {productData.title}
          </div>
        </div>
        <div className='my-7 bg-lightgrey rounded-lg p-9'>
          {productData.description}
        </div>
        <FormText title="Nama :" callbackText={(event) => { setNamaPembeli(event.target.value) }} errorMessage={errors.namaPembeli} />
        <FormText title="Nama Perusahaan/Organisasi/Lembaga :" callbackText={(event) => { setNamaPerusahaan(event.target.value) }} errorMessage={errors.namaPerusahaan} />
        <FormText title="Alamat Perusahaan/Organisasi/Lembaga :" callbackText={(event) => { setAlamatPerusahaan(event.target.value) }} errorMessage={errors.alamatPerusahaan} />
        <FormText title="No Kontak :" callbackText={(event) => { setNoKontak(event.target.value) }} isNumber={true} errorMessage={errors.noKontak} />
        <button className='ms-1 flex items-center gap-2 bg-lightgreenprimary hover:text-white text-black font-medium py-2 px-5 rounded-md'
          onClick={sendDataBuyer}>
          <IoSend />
          Kirim
        </button>
      </Modal>
    </>

  )
}

export default TeachingFactoryProductCard
