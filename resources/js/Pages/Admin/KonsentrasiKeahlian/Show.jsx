import Modal from '@/Components/Modal'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'

function Show({ auth, konsentrasiKeahlian }) {

    const [navStatus, setNavStatus] = useState({
        'teaching_factory_products': true,
        'images': false,
    })

    const changeNavStatus = () => {
        setNavStatus((prev) => ({
            'teaching_factory_products': !prev['teaching_factory_products'],
            'images': !prev['images'],
        }))
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {`${konsentrasiKeahlian.title}`}
                    </h2>
                </div>
            }
        >


            <Head title={`${konsentrasiKeahlian.title}`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* <pre>
                        {JSON.stringify(konsentrasiKeahlian, undefined, 2)}
                    </pre> */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-700">
                            <div className='grid gap-1 gap-y-4 grid-cols-1 md:grid-cols-2 mt-3'>
                                <div>
                                    <div>
                                        <label className='text-lg'>
                                            Konsentrasi Keahlian Id
                                        </label>
                                        <p className='mt-1'>
                                            {konsentrasiKeahlian.id}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Title
                                        </label>
                                        <p className='mt-1'>
                                            {konsentrasiKeahlian.title}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Created at
                                        </label>
                                        <p className='mt-1'>
                                            {konsentrasiKeahlian.created_at}
                                        </p>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='text-lg'>
                                            Updated at
                                        </label>
                                        <p className='mt-1'>
                                            {konsentrasiKeahlian.updated_at}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label className='text-lg'>
                                    Description
                                </label>
                                <p className='mt-1'>
                                    {konsentrasiKeahlian.description || <span className='text-gray-300'>None</span>}
                                </p>
                            </div>
                            <nav className='border-b text-gray-400 border-gray-200 w-full my-6 flex gap-x-6 pt-2 h-12  text-sm'>
                                <div className={`${navStatus.teaching_factory_products ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                transition-all border-b-2`} onClick={() => changeNavStatus("fasilitas")}>
                                    Teaching Factory Products
                                </div>
                                <div className={`${navStatus.images ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                transition-all border-b-2`} onClick={() => changeNavStatus("kegiatanMahasiswa")}>
                                    Images
                                </div>
                            </nav>
                            <div className='mt-4 '>
                                {navStatus.teaching_factory_products && <div>
                                    <label className='text-lg'>
                                        Teaching Factory Products
                                    </label>
                                    <table className='text-sm text-left rtl:text-right
                                    text-gray-500 w-full '>

                                        <thead className='text-xs text-gray-700 uppercase bg-gray-100
                                        border-b-2 border-gray-500'>
                                            <tr className='text-nowrap'>
                                                <th className='px-3 py-5'>ID</th>
                                                <th className='px-3 py-5'>Image</th>
                                                <th className='px-3 py-5'>Title</th>
                                                <th className='px-3 py-5'>Description</th>
                                                <th className='px-3 py-5'>Created At</th>
                                                <th className='px-3 py-5'>Updated At</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {konsentrasiKeahlian.teaching_factory_products.map((data, index) => (
                                                <tr key={index} className='bg-white border-b 
                                                border-gray-300'>
                                                    <td className='px-3 py-2 text-left'>{data.id}</td>

                                                    <td className='px-3 py-2 w-48'>
                                                        <img
                                                            src={`${data.image_path}`}
                                                            alt={`${data.image_path}`}
                                                        />
                                                    </td>
                                                    <td className='px-3 py-2 max-w-48 text-gray-600 font-medium  hover:underline'>
                                                        {data.title}
                                                    </td>
                                                    <td className='px-3 py-2 max-w-56'>
                                                        <div className='line-clamp-4'>
                                                            {data.description || <span className='text-gray-300'>None</span>}
                                                        </div>
                                                    </td>
                                                    <td className='px-3 py-2 text-nowrap'>{data.created_at}</td>
                                                    <td className='px-3 py-2 text-nowrap'>{data.updated_at}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>}
                                {navStatus.images && <div>
                                    <label className='text-lg'>
                                        Images
                                    </label>
                                    <table className='text-sm text-left rtl:text-right
                                    text-gray-500 w-full '>

                                        <thead className='text-xs text-gray-700 uppercase bg-gray-100
                                        border-b-2 border-gray-500'>
                                            <tr className='text-nowrap'>
                                                <th className='px-3 py-5'>ID Image</th>
                                                <th className='px-3 py-5'>Image</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {konsentrasiKeahlian.images.map((image, index) => (
                                                <>
                                                    {   
                                                        image.image_path &&
                                                        <tr key={index} className='bg-white border-b 
                                                    border-gray-300'>
                                                            <td className='px-3 py-2 text-center w-2'>{image.id}</td>
                                                            <td className='px-3 py-2  flex-grow'>
                                                                <img
                                                                    src={`${image.image_path}`}
                                                                    alt={`${image.image_path}`}
                                                                    className='w-72'
                                                                />
                                                            </td>
                                                        </tr>
                                                    }
                                                </>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>}
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
            <Modal show={false}>
                hai
            </Modal>
        </AuthenticatedLayout>
    )
}

export default Show