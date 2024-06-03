import React from 'react'

function TeachingFactoryProductCard({ productData }) {
  const backgroundImage = `url('images/image1.jpg')`;
  return (
    <div className='flex flex-col '>
      <div className={`w-full aspect-square bg-cover bg-center `} style={{ backgroundImage }}>
      </div>
      <div className='p-2 h-48 after: flex flex-col justify-between'>
        <div className='flex flex-col gap-1'>
          <div className='line-clamp-2 text-xl font-semibold text-black'>
            {productData.title}
          </div>
          <div className='line-clamp-3 text-sm font-light text-black'>
            {productData.description}
          </div>
        </div>
        <div className='py-2 px-4 rounded-md text-sm self-start text-black bg-lightgreenprimary cursor-pointer font-normal'>
          See Details
        </div>
      </div>

    </div>
  )
}

export default TeachingFactoryProductCard
