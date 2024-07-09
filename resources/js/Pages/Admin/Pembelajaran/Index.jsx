import Pagination from '@/Components/Pagination'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link, router } from '@inertiajs/react'
import React from 'react'

function Index({ auth, datas, session, success }) {
    const navStatus = {
        'fasilitas': session,
        'kegiatanMahasiswa': !session,
    }


    const changeNavStatus = (url) => {
        Inertia.get(`pembelajaran-db?type=${url}`)
    }


    const deletePembelajaran = (pembelajaran) => {
        if (!window.confirm(`Are you sure you want to delete "${pembelajaran.title}"`)){
            return;
        }
        router.delete(route("pembelajaran-db.destroy", pembelajaran.id))
    }


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Pembelajaran
                    </h2>
                    <Link href={route('pembelajaran-db.create')}
                        className='bg-emerald-500 py-2 px-3 text-white rounded
                shadow transition-all hover:bg-emerald-600'
                    >
                        Add new
                    </Link>
                </div>
            }
        >
            <Head title="Pembelajaran" />



            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {
                        success && <div className='bg-emerald-500 py-2 px-4 mb-4 text-white rounded'>
                            {success}
                        </div>
                    }
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <nav className='border-b text-gray-400 border-gray-200 w-full mb-6 flex gap-x-6 pt-2 h-12 px-4 text-sm'>
                                <div className={`${navStatus.fasilitas ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                transition-all border-b-2`} onClick={() => changeNavStatus("fasilitas")}>
                                    Fasilitas
                                </div>
                                <div className={`${navStatus.kegiatanMahasiswa ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                transition-all border-b-2`} onClick={() => changeNavStatus("kegiatanMahasiswa")}>
                                    Kegiatan Mahasiswa
                                </div>
                            </nav>
                            <div className='overflow-auto'>
                                <table className='w-full text-sm text-left rtl:text-right
                                    text-gray-500 '>

                                    <thead className='text-xs text-gray-700 uppercase bg-gray-100
                                        border-b-2 border-gray-500'>
                                        <tr className='text-nowrap'>
                                            <th className='px-3 py-5'>ID</th>
                                            <th className='px-3 py-5'>Thumbnail Image</th>
                                            <th className='px-3 py-5'>Title</th>
                                            <th className='px-3 py-5'>Description</th>
                                            <th className='px-3 py-5'>Group</th>
                                            <th className='px-3 py-5'>Created At</th>
                                            <th className='px-3 py-5'>Updated At</th>
                                            <th className='px-3 py-5'>Published By</th>
                                            <th className='px-3 py-5'>Updated By</th>
                                            <th className='px-3 py-5 text-center'>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {datas.data.map((pembelajaran, index) => (
                                            <tr key={index} className='bg-white border-b 
                                                border-gray-300'>
                                                <td className='px-3 py-2'>{pembelajaran.id}</td>
                                                <td className='px-3 py-2 overflow-hidden w-48'>
                                                    <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect ratio container */}
                                                        <img
                                                            src={`${pembelajaran.image_path}`}
                                                            alt={`${pembelajaran.image_path}`}
                                                            className='absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2'
                                                        />
                                                    </div>
                                                </td>
                                                <td className='px-3 py-2 max-w-48 truncate text-gray-600 font-medium  hover:underline'>
                                                    <Link href={route('pembelajaran-db.show', pembelajaran.id)}>
                                                        {pembelajaran.title}
                                                    </Link>
                                                </td>
                                                <td className='px-3 py-2 min-w-56'>
                                                    <div className='line-clamp-4'>
                                                        {pembelajaran.description || <span className='text-gray-300'>None</span>}
                                                    </div>
                                                </td>
                                                <td className='px-3 py-2'>{pembelajaran.group}</td>
                                                <td className='px-3 py-2 text-nowrap'>{pembelajaran.created_at}</td>
                                                <td className='px-3 py-2 text-nowrap'>{pembelajaran.updated_at}</td>
                                                <td className='px-3 py-2'>{pembelajaran.published_by.name}</td>
                                                <td className='px-3 py-2'>{pembelajaran.updated_by.name}</td>
                                                <td className='px-3 py-2 text-nowrap'>
                                                    <Link href={route("pembelajaran-db.edit", pembelajaran.id)}
                                                        className='font-medium text-blue-500 hover:underline mx-1'
                                                    >
                                                        edit
                                                    </Link>
                                                    <button 
                                                    onClick={() => deletePembelajaran(pembelajaran)}
                                                    className='font-medium text-red-500 hover:underline mx-1'
                                                    >
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={datas.meta.links} additionalUrlParams={session ? 'fasilitas' : 'kegiatanMahasiswa'} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index