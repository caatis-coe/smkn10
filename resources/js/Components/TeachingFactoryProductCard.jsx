import React from 'react'

function TeachingFactoryProductCard({productData}) {
  const backgroundImage = `url('images/image1.jpg')`;
  return (
    <div className='w-9 h-12'>
      <div className={`w-full aspect-square bg-cover bg-center`} style={{ backgroundImage }}>

      </div>
      {productData.title}
    </div>
  )
}

export default TeachingFactoryProductCard
