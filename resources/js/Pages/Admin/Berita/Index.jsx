import Pagination from '@/Components/Pagination'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link, router } from '@inertiajs/react'
import React from 'react'

function Index({ auth, datas, success }) {


    const changeNavStatus = (url) => {
        Inertia.get(`berita-db?type=${url}`)
    }


    const deleteBerita = (berita) => {
        if (!window.confirm(`Are you sure you want to delete "${berita.title}"`)){
            return;
        }
        router.delete(route("berita-db.destroy", berita.id))
    }

    console.log(datas)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Berita
                    </h2>
                    <Link href={route('berita-db.create')}
                        className='bg-emerald-500 py-2 px-3 text-white rounded
                shadow transition-all hover:bg-emerald-600'
                    >
                        Add new
                    </Link>
                </div>
            }
        >
            <Head title="Berita" />



            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {
                        success && <div className='bg-emerald-500 py-2 px-4 mb-4 text-white rounded'>
                            {success}
                        </div>
                    }
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
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
                                            <th className='px-3 py-5'>Created At</th>
                                            <th className='px-3 py-5'>Updated At</th>
                                            <th className='px-3 py-5'>Published By</th>
                                            <th className='px-3 py-5'>Updated By</th>
                                            <th className='px-3 py-5 text-center'>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {datas.data.map((berita, index) => (
                                            <tr key={index} className='bg-white border-b 
                                                border-gray-300'>
                                                <td className='px-3 py-2'>{berita.id}</td>
                                                <td className='px-3 py-2 overflow-hidden w-48'>
                                                    <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect ratio container */}
                                                        <img
                                                            src={`${berita.thumbnail_image}`}
                                                            alt={`${berita.thumbnail_image}`}
                                                            className='absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2'
                                                        />
                                                    </div>
                                                </td>
                                                <td className='px-3 py-2 max-w-48 truncate text-gray-600 font-medium  hover:underline'>
                                                    <Link href={route('berita-db.show', berita.id)}>
                                                        {berita.title}
                                                    </Link>
                                                </td>
                                                <td className='px-3 py-2 max-w-56'>
                                                    <div className='line-clamp-4'>
                                                        {berita.description || <span className='text-gray-300'>None</span>}
                                                    </div>
                                                </td>
                                                <td className='px-3 py-2 text-nowrap'>{berita.created_at}</td>
                                                <td className='px-3 py-2 text-nowrap'>{berita.updated_at}</td>
                                                <td className='px-3 py-2'>{berita.published_by.name}</td>
                                                <td className='px-3 py-2'>{berita.updated_by.name}</td>
                                                <td className='px-3 py-2 text-nowrap'>
                                                    <Link href={route("berita-db.edit", berita.id)}
                                                        className='font-medium text-blue-500 hover:underline mx-1'
                                                    >
                                                        edit
                                                    </Link>
                                                    <button 
                                                    onClick={() => deleteBerita(berita)}
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
                            <Pagination links={datas.meta.links}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index