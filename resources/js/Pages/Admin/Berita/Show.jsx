import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function Show({ auth, berita }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {`${berita.title}`}
                    </h2>
                </div>
            }
        >


            <Head title={`${berita.title}`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-700">
                            <div>
                                <img
                                    src={berita.thumbnail_image}
                                    alt=""
                                    className='w-full aspect-video object-cover'
                                />
                            </div>
                            <div className='grid gap-1 gap-y-4 grid-cols-1 md:grid-cols-2 mt-3'>
                                <div>
                                    <div>
                                        <label className='text-lg'>
                                            Berita Id
                                        </label>
                                        <p className='mt-1'>
                                            {berita.id}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Title
                                        </label>
                                        <p className='mt-1'>
                                            {berita.title}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Published by
                                        </label>
                                        <p className='mt-1'>
                                            {berita.published_by.name}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Updated by
                                        </label>
                                        <p className='mt-1'>
                                            {berita.updated_by.name}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Created at
                                        </label>
                                        <p className='mt-1'>
                                            {berita.created_at}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Updated at
                                        </label>
                                        <p className='mt-1'>
                                            {berita.updated_at}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='text-lg'>
                                    Description
                                </label>
                                <p className='mt-1'>
                                    {berita.description || <span className='text-gray-300'>None</span>}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx='true'>
                {`
                    label{
                        font-weight: bold;
                    }
                    p{
                        font-weight: 300;
                    }
                `}
            </style>
        </AuthenticatedLayout>
    )
}

export default Show