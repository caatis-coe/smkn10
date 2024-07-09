import Pagination from '@/Components/Pagination'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link, router } from '@inertiajs/react'
import React from 'react'

function Index({ auth, datas, success }) {

    const deleteBerita = (prestasiSekolah) => {
        if (!window.confirm(`Are you sure you want to delete "${prestasiSekolah.achievement}" with id: ${prestasiSekolah.id} `)) {
            return;
        }
        router.delete(route("prestasi-sekolah-db.destroy", prestasiSekolah.id))
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Prestasi Sekolah
                    </h2>
                    <Link href={route('prestasi-sekolah-db.create')}
                        className='bg-emerald-500 py-2 px-3 text-white rounded
                shadow transition-all hover:bg-emerald-600'
                    >
                        Add new Prestasi Sekolah
                    </Link>
                </div>

            }
        >
            <Head title="Prestasi Sekolah" />

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
                                <div className={`${route().current('prestasi-sekolah-db.index') ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2  text-[12px] sm:text-sm sm:text-left sm:block  flex items-center`} onClick={() => Inertia.get(route('prestasi-sekolah-db.index'))}>
                                    Prestasi Sekolah
                                </div>
                                <div className={`${route().current('prestasi-siswa-db.index') ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2  text-[12px] sm:text-sm sm:text-left sm:block  flex items-center`} onClick={() => Inertia.get(route('prestasi-siswa-db.index'))}>
                                    Prestasi Siswa
                                </div>
                                <div className={`${route().current('prestasi-guru-db.index') ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2  text-[12px] sm:text-sm sm:text-left sm:block  flex items-center`} onClick={() => Inertia.get(route('prestasi-guru-db.index'))}>
                                    Prestasi Guru
                                </div>
                            </nav>
                            <div className='overflow-auto'>
                                <table className='w-full text-sm text-left rtl:text-right
                                    text-gray-500 '>

                                    <thead className='text-xs text-gray-700 uppercase bg-gray-100
                                        border-b-2 border-gray-500'>
                                        <tr className='text-nowrap'>
                                            <th className='px-5 py-5'>ID</th>
                                            <th className='px-5 py-5'>Competition</th>
                                            <th className='px-5 py-5'>Achievement</th>
                                            <th className='px-5 py-5'>Created At</th>
                                            <th className='px-5 py-5'>Updated At</th>
                                            <th className='px-5 py-5 text-right'>Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {datas.data.map((data, index) => (
                                            <tr key={index} className='bg-white border-b 
                                                border-gray-300'>
                                                <td className='px-5 py-4 text-nowrap'>{data.id}</td>
                                                <td className='px-5 py-4 '>
                                                    {data.achievement}
                                                </td>
                                                <td className='px-5 py-4  text-nowrap'>
                                                    {data.result}
                                                </td>
                                                <td className='px-5 py-4 text-nowrap'>{data.created_at}</td>
                                                <td className='px-5 py-4 text-nowrap'>{data.created_at}</td>
                                                <td className='px-5 py-4 text-nowrap text-right' >
                                                    <Link href={route("prestasi-sekolah-db.edit", data.id)}
                                                        className='font-medium text-blue-500 hover:underline mx-1'
                                                    >
                                                        edit
                                                    </Link>
                                                    <button
                                                        onClick={() => deleteBerita(data)}
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
                            <Pagination links={datas.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index