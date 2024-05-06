import React from 'react'

function PembelajaranCard({data}) {

    const backgroundImage = `url('images/${data.image_path}')`;

    return (
        <div className='flex flex-col min-w-[324px] h-[441px] bg-white shadow-sm'>
            <div className={`flex-1 border-b-2 bg-cover bg-center
            border-grey`} style={{backgroundImage}}>
            </div>
            <div className='flex flex-col justify-between h-[128px] px-5 pt-4 pb-7'>
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