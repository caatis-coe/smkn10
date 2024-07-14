import DataPreview from '@/Components/DataPreview'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from '@/Components/Modal'
import ModalConfirmation from '@/Components/ModalConfirmation'
import Pagination from '@/Components/Pagination'

import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Inertia } from '@inertiajs/inertia'
import { Head, router, useForm } from '@inertiajs/react'
import React, { useState } from 'react'
import { IoMdImage } from 'react-icons/io'
import { MdDelete, MdEdit } from 'react-icons/md'

function Index({ auth, datas, success, session }) {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);
    const { data, setData, post, errors, reset } = useForm({
        file: null,
        description: session == 0 ? '-' : '',
        _method: 'PUT',
    });

    const resetAllState = () => {
        setModalSession({
            'id': '',
            'description': '',
            'image_path': '',
            'action': ''
        })
        reset();
    }

    // Home swiper image Functions
    const deleteImage = (data) => {
        setSelectedData(data);
        setIsConfirmOpen(true);
    }

    const handleConfirmDelete= () => {
        router.delete(route("lulusan-db.destroy", selectedData.id));
        setIsConfirmOpen(false);
    }

    const changeNavStatus = (type) => {
        Inertia.get(`lulusan-db?type=${type}`)
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalSession, setModalSession] = useState({
        'id': '',
        'description': '',
        'image_path': '',
        'action': ''
    });

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {session == 0 ? 'Keterserapan Lulusan' : 'Industri Mitra'}
                    </h2>
                    <button onClick={() => {
                        setIsModalOpen(true)
                        setModalSession((prev) =>
                        ({
                            ...prev,
                            'used_as': session == 0 ? 'keterserapan_lulusan' : 'industri_mitra',
                            'action': "create",
                        })
                        )
                        setIsSubmitClicked(false)
                    }}
                        className='bg-emerald-500 py-2 px-3 text-white rounded
                        shadow transition-all hover:bg-emerald-600 text-left'
                    >
                        Add new {session == 0 ? 'keterserapan lulusan' : 'industri mitra'}
                    </button>

                </div>
            }
        >
            <Head title={session == 0 ? 'Keterserapan Lulusan' : 'Industri Mitra'} />

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
                                transition-all border-b-2  text-xs sm:text-sm sm:text-left sm:block text-center flex items-center`} onClick={() => changeNavStatus(0)}>
                                    Keterserapan Lulusan
                                </div>
                                <div className={`${session == 1 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                transition-all border-b-2  text-xs sm:text-sm sm:text-left sm:block text-center flex items-center`} onClick={() => changeNavStatus(1)}>
                                    Industri Mitra
                                </div>
                            </nav>
                            <div className='overflow-auto'>
                                <DataPreview data={{
                                    'File Data' : data.file,
                                    'isSubmitClicked' : isSubmitClicked,
                                    'isModalOpen' : isModalOpen,
                                    'errors' :  errors
                                }}/>
                                <table className='w-full text-sm text-left rtl:text-right
                                    text-gray-500 '>

                                    <thead className='text-xs text-gray-700 uppercase bg-gray-100
                                        border-b-2 border-gray-500'>
                                        <tr className='text-nowrap'>
                                            <th className='px-3 py-5'>ID</th>
                                            <th className='px-3 py-5'>Image</th>
                                            {session == 1 && <th className='px-3 py-5'>Description</th>}
                                            <th className='px-3 py-5 text-right'>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {datas.data.map((data, index) => (
                                            <tr key={index} className='bg-white border-b 
                                                border-gray-300'>
                                                <td className='px-3 py-2'>{data.id}</td>
                                                <td className='px-3 py-2 overflow-hidden w-72'>
                                                    <img
                                                        src={`${data.image_path}`}
                                                        alt={`${data.image_path}`}
                                                    />
                                                </td>
                                                {session == 1 && <th className='px-3 py-5 font-normal'>{data.description}</th>}
                                                <td className='px-3 py-2 text-right space-x-2'>
                                                    <button onClick={() => {
                                                        setIsSubmitClicked(false)
                                                        setModalSession(
                                                            {
                                                                ...data,
                                                                'action': 'edit',
                                                            }
                                                        )
                                                        setData((prev) => ({
                                                            ...prev,
                                                            used_as: data.used_as,
                                                            description: session == 1 ? data.description : '-'
                                                        }))
                                                        setIsModalOpen(true)
                                                    }}
                                                        className='text-blue-500 hover:text-blue-400 transition-all text-lg'
                                                    >
                                                        <MdEdit />
                                                    </button>
                                                    <button
                                                        onClick={() => deleteImage(data)}
                                                        className='text-red-500 hover:text-red-400 transition-all text-lg'
                                                    >
                                                        <MdDelete />
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
            {!(Object.keys(errors).length === 0 && data.file && isSubmitClicked) 
            && <Modal show={isModalOpen}>
                <div className='p-6 text-gray-700'>
                    <div className='mb-4 text-xl font-semibold '>
                        {modalSession.action == 'create' ?
                            'Create New Image' :

                            `Edit Image id: ${modalSession ? modalSession.id : ''}`

                        }

                    </div>
                    <div className='border border-gray-300 mb-4 rounded h-72 p-4'>
                        <div className=' w-full h-full flex justify-center items-center'>
                            {
                                modalSession.image_path ?
                                    <img src={modalSession.image_path} alt="" className='h-full object-cover' />
                                    :
                                    <div className='flex flex-col items-center'>
                                        <IoMdImage className='size-24 text-gray-200' />
                                        <span className='text-md'>Select an image</span>
                                    </div>

                            }
                        </div>
                    </div>
                    <div>
                        <TextInput
                            id="lulusan_image"
                            type="file"
                            name="image"
                            className="mt-1 block w-full"
                            onChange={e => {
                                setData((prev) => ({
                                    ...prev,
                                    '_method': modalSession.action == "create" ? "POST" : 'PUT',
                                    'used_as': modalSession.used_as,
                                    "file": e.target.files[0]
                                }))
                                setModalSession((prev) => ({
                                    ...prev,
                                    'image_path': URL.createObjectURL(e.target.files[0])
                                })

                                )
                            }}
                        />
                        <InputError message={errors.file} className='mt-2' />
                    </div>
                    {session == 1 && <div className='mt-4'>
                        <InputLabel htmlFor="lulusan_description" value="*Description" />
                        <TextInput
                            id="lulusan_description"
                            type="text"
                            value={modalSession.description}
                            name="image"
                            className="mt-1 block w-full"
                            onChange={e => {
                                setData((prev) => ({
                                    ...prev,
                                    "description": e.target.value,
                                }))
                                setModalSession((prev) => ({
                                    ...prev,
                                    "description": e.target.value,
                                })

                                )
                            }}
                        />
                        <InputError message={errors.description} className='mt-2' />
                    </div>}
                    <div className='mt-4 text-right'>
                        <button onClick={() => {
                            setIsModalOpen(false)
                            setIsSubmitClicked(false)
                            Object.keys(errors).forEach(key => {
                                delete errors[key];
                            });
                            setTimeout(() => {
                                resetAllState();
                            }, 200);
                        }}
                            className='bg-gray-100 py-2 px-4 text-gray-800 rounded 
                                    transition-all hover:bg-gray-200 mr-2 text-sm
                                    '>
                            Cancel
                        </button>
                        <button onClick={() => {
                            post(modalSession.action == 'create' ? route('lulusan-db.store') : route('lulusan-db.update', modalSession.id))
                            setIsSubmitClicked(true)
                        }}
                            className={`bg-emerald-500 py-2 px-4 text-white
                                    rounded shadow transition-all hover:bg-emerald-600 text-sm
                                    ${data.description ? '' : 'pointer-events-none bg-emerald-200'}`}>
                            Submit
                        </button>
                    </div>
                </div>
            </Modal>}
            {selectedData && (
                <ModalConfirmation
                    isOpen={isConfirmOpen}
                    onRequestClose={() => setIsConfirmOpen(false)}
                    onConfirm={handleConfirmDelete}
                    headerMessage={`the image with id: ${selectedData.id}`}
                />
            )}
        </AuthenticatedLayout>
    )
}

export default Index