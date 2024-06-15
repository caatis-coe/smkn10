import React from 'react'

function PembelajaranCard({ data }) {

    const backgroundImage = `url('images/${data.image_path}')`;

    return (
        <div className='relative flex flex-col min-w-[256px] h-[441px] group hover:scale-[1.01] 
        transition ease-in duration-75 '>
            <div className='hover:absolute w-full hover:shadow-lg hover:shadow-lightgrey bg-white'>
                <div className={`flex-shrink-0 h-[313px] bg-cover bg-center
                border-grey rounded-t-md`} style={{ backgroundImage }}>
                </div>
                <div className={`border-2 border-lightgrey border-t-0 flex flex-col  min-h-[128px] 
                px-5 pt-4 pb-7 rounded-b-md ${data.description == "" ? "items-center justify-center" : "justify-between"}`}>
                    <div>
                        <div className={`${data.description == "" ? "text-[24px] font-semibold" : "text-[18px] font-medium"}  mb-2 line-clamp-1`}>
                            {data.title}
                        </div>
                        {data.description != "" && <div className='text-[12px] line-clamp-3 group-hover:line-clamp-none transition'>
                            {data.description}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PembelajaranCard