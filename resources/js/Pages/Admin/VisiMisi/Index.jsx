
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

function Index({ auth, visi, misi, success, session }) {
    const [visiValue, setVisiValue] = useState(visi);
    const [misiValue, setMisiValue] = useState(misi);

    const onSubmit = (e) => {
        e.preventDefault()
        Inertia.post(route('visi-misi-db.store'), {
            visi: visiValue,
            misi: misiValue
        });
    }
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Visi & Misi
                    </h2>
                </div>
            }
        >
            <Head title="Sejarah" />I

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {
                        success && <div className='bg-emerald-500 py-2 px-4 mb-4 text-white rounded'>
                            {success}
                        </div>
                    }
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg ">
                        <div className="p-6 text-gray-900">
                        <nav className='border-b text-gray-400 border-gray-200 w-full mb-4 flex gap-x-6 pt-2 h-12 px-4 text-sm'>
                                <div className={`${session == 0 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2  text-xs sm:text-sm sm:text-left sm:block  flex items-center`} onClick={()=> Inertia.get(`daftar-guru-db`)}>
                                    Daftar Guru
                                </div>
                                <div className={`${session == 1 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2  text-xs sm:text-sm sm:text-left sm:block  flex items-center`} onClick={()=> Inertia.get(`daftar-tenaga-pendidikan-db`)}>
                                    Daftar Tenaga Pendidikan
                                </div>
                                <div className={`${session == 2 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2 text-xs sm:text-sm sm:text-left sm:block  flex items-center`} onClick={() => Inertia.get(`sejarah-db`)}>
                                    Sejarah
                                </div>
                                <div className={`${session == 3 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2 text-xs sm:text-sm sm:text-left sm:block  flex items-center`} onClick={()=> Inertia.get(`struktur-organisasi-db`)}>
                                    Struktur Organisasi
                                </div>
                                <div className={`${session == 4 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                        transition-all border-b-2 text-xs sm:text-sm sm:text-left sm:block  flex items-center`} onClick={()=> Inertia.get(`visi-misi-db`)}>
                                    Visi & Misi
                                </div>
                            </nav>
                            <form className='p-4' onSubmit={onSubmit}>
                                <div className='text-lg font-bold mb-4'>VISI</div>
                                <ReactQuill theme="snow" value={visiValue} onChange={setVisiValue} />
                                <div className='text-lg font-bold my-4'>MISI</div>
                                <ReactQuill theme="snow" value={misiValue} onChange={setMisiValue} />
                                <div className='mt-4 flex items-end justify-between col-span-2'>
                                    <div className='mt-4 flex-nowrap flex-shrink-0'>
                                        <Link href={route("sejarah-db.index")}
                                            className='bg-gray-100 py-2 px-4 text-gray-800 rounded 
                                                        transition-all hover:bg-gray-200 mr-2 text-sm
                                                        '>
                                            Reset
                                        </Link>
                                        <button className='bg-emerald-500 py-2 px-4 text-white
                                    rounded shadow transition-all hover:bg-emerald-600 text-sm'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index