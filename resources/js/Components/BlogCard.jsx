import { Link } from '@inertiajs/react';
import React from 'react'

function BlogCard({ blogData = {
    "id": "1",
    "title": "Trekking to Everest Base Camp",
    "description": "Embarking on a challenging trek to the base camp of the world's highest mountain.",
    "image_path": "image1.jpg",
    "date_updated": "2022-01-22"
} }) {

    const backgroundImageStyle = {
        backgroundImage: `url('images/${blogData.image_path}')`
    };

    return (
        <div className='flex flex-col min-w-[256px]  min-h-[484px] bg-white shadow-md rounded-2xl '>
            <div className={`flex-1  bg-cover bg-center
            rounded-t-2xl`} style={backgroundImageStyle}>
            </div>
            <div className='flex flex-col justify-between h-[256px] px-5 pt-4 pb-7'>
                <div className=''>
                    <div className='font-medium mb-2 text-[18px]'>
                        {blogData.title}
                    </div>
                    <div className='text-[12px] line-clamp-6'>
                        {blogData.description}
                    </div>
                </div>
                <div className='flex items-center justify-between '>
                    <Link
                        href={'berita/' + blogData.id}
                        className='bg-primary text-[12px] font-medium
                        grid place-items-center rounded-full
                        text-white flex-1 py-3 px-2 w-full
                        cursor-pointer hover:bg-lighttertiary transition duration-75'>
                        Selengkapnya
                    </Link>
                    <div className='text-center flex-1 text-[14px] font-light text-grey'>
                        {blogData.date_updated}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard