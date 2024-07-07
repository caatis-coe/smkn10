import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Inertia } from '@inertiajs/inertia'
import { Head, router, useForm } from '@inertiajs/react'
import React from 'react'

function Index({ auth, image, success, session }) {
    const { data, setData, post, errors, reset } = useForm({
        'file': null,
        _method: 'PUT'
    });

    console.log('hit')
    // Home swiper image Functions

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Struktur Organisasi
                    </h2>
                </div>
            }
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {
                        success && <div className='bg-emerald-500 py-2 px-4 mb-4 text-white rounded'>
                            {success}
                        </div>
                    }
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <nav className='border-b text-gray-400 border-gray-200 w-full mb-4 flex gap-x-6 pt-2 h-12 px-4 text-sm'>
                                <div className={`${session == 0 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2  text-xs sm:text-sm sm:text-left sm:block text-center flex items-center`} onClick={() => Inertia.get(`daftar-guru-db`)}>
                                    Daftar Guru
                                </div>
                                <div className={`${session == 1 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2  text-xs sm:text-sm sm:text-left sm:block text-center flex items-center`} onClick={() => Inertia.get(`daftar-tenaga-pendidikan-db`)}>
                                    Daftar Tenaga Pendidikan
                                </div>
                                <div className={`${session == 2 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2 text-xs sm:text-sm sm:text-left sm:block text-center flex items-center`} onClick={() => changeNavStatus(2)}>
                                    Sejarah
                                </div>
                                <div className={`${session == 3 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2 text-xs sm:text-sm sm:text-left sm:block text-center flex items-center`} onClick={() => Inertia.get(`struktur-organisasi-db`)}>
                                    Struktur Organisasi
                                </div>
                            </nav>
                            <pre>
                            {JSON.stringify(image,undefined,2)}
                            </pre>
                            <div className='border border-gray-200'>
                                <img src={image.image_path} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index