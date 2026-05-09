import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import ModalConfirmation from '@/Components/ModalConfirmation'
import Pagination from '@/Components/Pagination'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'

function Index({ auth, datas, session, success }) {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);


    const changeNavStatus = (url) => {
        Inertia.get(`pembelajaran-db?type=${url}`)
    }

    const deletePembelajaran = (pembelajaran) => {
        setSelectedData(pembelajaran);
        setIsConfirmOpen(true);
    }

    const handleConfirmDelete = () => {
        router.delete(route("pembelajaran-db.destroy", selectedData.id), {
            data: { session: session }
        });
        setIsConfirmOpen(false);
    }

    const handleInformasiKelulusanSubmit = () => {
        e.preventDefault()
        Inertia.post(route('informasi-kelulusan-db.store'), {
            
        });
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {
                            session
                        }
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
            <Head title={
                session
            } />



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
                                <div className={`${session == "fasilitas" ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                transition-all border-b-2 text-xs sm:text-sm sm:text-left sm:block  flex items-center`} onClick={() => changeNavStatus("fasilitas")}>
                                    Fasilitas
                                </div>
                                <div className={`${session == "kegiatanMahasiswa" ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                transition-all border-b-2 text-xs sm:text-sm sm:text-left sm:block  flex items-center`} onClick={() => changeNavStatus("kegiatanMahasiswa")}>
                                    Kegiatan Mahasiswa
                                </div>
                                {/* <div className={`${session == "informasiKelulusan" ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                transition-all border-b-2 text-xs sm:text-sm sm:text-left sm:block  flex items-center`} onClick={() => changeNavStatus("informasiKelulusan")}>
                                    Informasi Kelulusan
                                </div> */}
                            </nav>

                            {session == "informasiKelulusan" ?
                                <form className='grid grid-cols-2 gap-x-6 md:gap-x-12 px-4' onSubmit={handleInformasiKelulusanSubmit}>
                                    {datas && datas.map((item, index) => (
                                        <div key={index} className='mt-4'>
                                            <InputLabel htmlFor={`title-${item.title}`} value={`*${item.title}`} />
                                            <TextInput
                                                id={`title-${index}`}
                                                type="number"
                                                name={`title-${index}`}
                                                value={item.amount}
                                                className="mt-1 block w-full"
                                                isFocused={true}
                                                onChange={e => handleHomeAnalyticsInputChange(index, 'amount', e.target.value)}
                                            />
                                            <InputError message={errors[`content.${index}.amount`]} className='mt-2' />
                                        </div>
                                    ))}
                                    <div className='mt-4 flex items-end justify-between col-span-2 '>
                                        <div className='text-xs'>
                                            *required
                                        </div>
                                        <div className='mt-4 flex-nowrap flex-shrink-0'>
                                            <Link href={route("home-db.index", { type: 1 })}
                                                className='bg-gray-100  py-2 px-4 text-gray-800 rounded 
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
                                :
                                <>
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
                                                        <td className='px-3 py-2 text-nowrap'>{pembelajaran.published_by.name}</td>
                                                        <td className='px-3 py-2 text-nowrap'>{pembelajaran.updated_by.name}</td>
                                                        <td className='px-3 py-2  text-right'>
                                                            <div className='flex justify-end gap-x-2 items-center'>
                                                                <Link href={route("pembelajaran-db.edit", pembelajaran.id)}
                                                                    className='text-blue-500 text-lg hover:text-blue-400 transition-all'
                                                                >
                                                                    <MdEdit />
                                                                </Link>
                                                                <button
                                                                    onClick={() => deletePembelajaran(pembelajaran)}
                                                                    className='text-red-500 text-lg hover:text-red-400 transition-all'
                                                                >
                                                                    <MdDelete />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <Pagination links={datas.meta.links} additionalUrlParams={session ? 'fasilitas' : 'kegiatanMahasiswa'} />
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {session != "informasiKelulusan" && selectedData && (
                <ModalConfirmation
                    isOpen={isConfirmOpen}
                    onRequestClose={() => setIsConfirmOpen(false)}
                    onConfirm={handleConfirmDelete}
                    headerMessage={`"${selectedData.title}"`}
                />
            )}
        </AuthenticatedLayout>
    )
}

export default Index