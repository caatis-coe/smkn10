import React from 'react'

function PembelajaranCard({data}) {

    const backgroundImage = `url('images/${data.image_path}')`;

    return (
        <div className='flex flex-col min-w-[256px] h-[441px] bg-white'>
            <div className={`flex-1  bg-cover bg-center
            border-grey`} style={{backgroundImage}}>
            </div>
            <div className='border-2 flex flex-col justify-between h-[128px] px-5 pt-4 pb-7'>
                <div className=''>
                    <div className='font-medium mb-2 text-[18px]'>
                        {data.title}
                    </div>
                    <div className='text-[12px]'>
                        {data.description}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PembelajaranCard