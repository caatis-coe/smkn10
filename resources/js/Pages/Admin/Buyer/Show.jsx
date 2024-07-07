import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

function Show({ auth, buyer }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {`buyer ${buyer.name}'s form for "${buyer.teaching_factory_product.title}" product`}
                    </h2>
                </div>
            }
        >


            <Head title={`${buyer.name}-${buyer.id}`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-700">
                            <div className='flex flex-col lg:flex-row gap-1 '>
                                <div className='basis-1/2 gap-y-2  lg:gap-y-6 lg:ps-12 flex flex-col justify-center'>
                                    <div>
                                        <label className='text-lg'>
                                            Buyer Id
                                        </label>
                                        <p className='mt-1'>
                                            {buyer.id}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Buyer Name
                                        </label>
                                        <p className='mt-1'>
                                            {buyer.name}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Contact
                                        </label>
                                        <p className='mt-1'>
                                            {buyer.contact}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Company Name
                                        </label>
                                        <p className='mt-1'>
                                            {buyer.company_name}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Company Address
                                        </label>
                                        <p className='mt-1'>
                                            {buyer.company_address}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Created At
                                        </label>
                                        <p className='mt-1'>
                                            {buyer.created_at}
                                        </p>
                                    </div>
                                </div>
                                <div className='basis-1/2 w-full flex flex-col items-center'>
                                    <label className='my-4 text-4xl text-gray-400'> 
                                        Product Detail
                                    </label>
                                    <div className='flex flex-col  shadow-lg rounded-[24px] w-96 p-[16px] border border-gray-200 transition-all'>
                                        <img src={buyer.teaching_factory_product.image_path} className={`w-full aspect-square bg-cover bg-center rounded-[14px] `} >
                                        </img>
                                        <div className='p-3 min-h-48 flex flex-col justify-between'>
                                            <div className='flex flex-col gap-1'>
                                                <div className='mb-2 text-gray-600 text-xl font-bold '>
                                                    {buyer.teaching_factory_product.title}
                                                </div>
                                                <div className='mb-4 text-sm font-light '>
                                                    {buyer.teaching_factory_product.description}
                                                </div>
                                            </div>
                                            <div className='flex items-center text-gray-400'>
                                                <div className='font-semibold'>Product id : {buyer.teaching_factory_product.id}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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