import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function Show({ auth, data}) {

    const teachingFactoryProduct = data.teaching_factory_products[0]


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {`${teachingFactoryProduct.title}`}
                    </h2>
                </div>
            }
        >


            <Head title={`${teachingFactoryProduct.title}`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-700">
                            <div>
                                <img
                                    src={'/storage/'+teachingFactoryProduct.image_path}
                                    alt=""
                                    className='w-full aspect-video object-cover'
                                />
                            </div>
                            <div className='grid gap-1 gap-y-4 grid-cols-1 md:grid-cols-2 mt-3'>
                                <div>
                                    <div>
                                        <label className='text-lg'>
                                            Teaching Factory Product Id
                                        </label>
                                        <p className='mt-1'>
                                            {teachingFactoryProduct.id}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Title
                                        </label>
                                        <p className='mt-1'>
                                            {teachingFactoryProduct.title}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Konsentrasi Keahlian
                                        </label>
                                        <p className='mt-1'>
                                            {data.title}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label className='text-lg'>
                                            Created at
                                        </label>
                                        <p className='mt-1'>
                                            {new Date(teachingFactoryProduct.created_at).toLocaleDateString('en-GB').replace(/\//g, '-')}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Updated at
                                        </label>
                                        <p className='mt-1'>
                                            {new Date(teachingFactoryProduct.updated_at).toLocaleDateString('en-GB').replace(/\//g, '-')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='text-lg'>
                                    Description
                                </label>
                                <p className='mt-1'>
                                    {teachingFactoryProduct.description || <span className='text-gray-300'>None</span>}
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