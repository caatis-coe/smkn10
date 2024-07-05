import React, { useState } from 'react'
import { IoBagRemoveOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import Modal from 'react-modal';
import { Inertia } from '@inertiajs/inertia';

const customStyles = {
  content: {
    position: 'fixed',  // Ensure the element is fixed in place
    top: '58%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '762px',
    maxHeight: '512px',
    overflow: 'auto',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1rem',
    zIndex: 9999,
  },
};

function FormText({title, callbackText, isNumber = false, errorMessage}){
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
        }
      }
      );
    }
  }


  return (
    <div className='flex flex-col text-black'>
      <div className={`w-full aspect-square bg-cover bg-center rounded-xl`} style={{ backgroundImage }}>
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
        {/* <div className='py-2 px-4 rounded-md text-sm self-start text-black bg-lightgreenprimary cursor-pointer font-normal'>
          See Details
        </div> */}
        <div className='flex items-center gap-3 mt-4
        justify-between bg-lightgrey py-2 px-5 rounded-xl
        self-start cursor-pointer hover:bg-lightgreenprimary hover:text-white hover:px-6
        transition-all
        ease-out ' onClick={openModal}>
          <IoBagRemoveOutline className='text-lg'/>
          <div className='font-semibold'>Beli</div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='flex items-center '>
          <div className={`w-72 shrink-0 aspect-square bg-cover bg-center rounded-xl`} style={{ backgroundImage }}>
          </div>
          <div className='p-12 flex-grow-0 font-semibold text-2xl'>
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
  )
}

export default TeachingFactoryProductCard
