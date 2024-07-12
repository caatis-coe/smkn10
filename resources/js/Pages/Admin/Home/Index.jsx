import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from '@/Components/Modal'
import Pagination from '@/Components/Pagination'
import TextAreaInput from '@/Components/TextAreaInput'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Inertia } from '@inertiajs/inertia'
import { Head, Link, router, useForm } from '@inertiajs/react'
import React, { useState } from 'react'
import { IoMdImage } from 'react-icons/io'
import { MdDelete, MdEdit } from 'react-icons/md'

function Index({ auth, datas, success, session }) {
    const { data, setData, post, errors, reset } = useForm(
        session == 0 ? {
            file: null,
        } : session == 1 ? {
            "content": datas
        } : session == 2 ? {
            url: datas,
        } : session == 3 ? { ...datas, 'file': null } : null
    );

    

    const resetAllState = () => {
        setModalSession({
            'id': '',
            'description': '',
            'image_path': '',
            'action': ''
        })
        reset();
    }

    // Headmaster Functions
    const handleHeadmasterSubmit = (e) => {
        e.preventDefault();
        post(route("home-db.editDocHeadmaster"))
    }


    // URL Video Profile Functions
    const handleURLVideoProfileSubmit = (e) => {
        e.preventDefault();
        post(route("home-db.editDocURLVideoProfile"))
    }


    // Home analytics image Functions
    const handleHomeAnalyticsSubmit = (e) => {
        e.preventDefault();
        post(route("home-db.editDocHomeAnalytics"))
    }
    const handleHomeAnalyticsInputChange = (index, field, value) => {
        setData(prevData => {
            const updatedHomeAnalytics = [...prevData.content];
            updatedHomeAnalytics[index][field] = value;
            return { ...prevData, content: updatedHomeAnalytics };
        });
    };

    // Home swiper image Functions
    const deleteImage = (data) => {
        if (!window.confirm(`Are you sure you want to delete image id: ${data.id}`)) {
            return;
        }
        router.delete(route("home-db.destroy", data.id))
    }

    const changeNavStatus = (type) => {
        Inertia.get(`home-db?type=${type}`)
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
                        {
                            session == 0 ? "Swiper Image"
                            : session == 1 ? "Home Analytics"
                            : session == 2 ? "Youtube Link" 
                            : session == 3 ? "Headmaster" : ""
                        }
                    </h2>
                    {session == 0 &&
                        (
                            <button onClick={() => {
                                setIsModalOpen((prev) => !prev)
                                setModalSession((prev) =>
                                ({
                                    ...prev,
                                    'used_as': 'home_swiper',
                                    'action': 'create',
                                })
                                )
                            }}
                                className='bg-emerald-500 py-2 px-3 text-white rounded
                shadow transition-all hover:bg-emerald-600'
                            >
                                Add new swiper image
                            </button>
                        )
                    }

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
                                transition-all border-b-2  text-xs sm:text-sm sm:text-left sm:block  flex items-center`} onClick={() => changeNavStatus(0)}>
                                    Swiper Image
                                </div>
                                <div className={`${session == 1 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                transition-all border-b-2  text-xs sm:text-sm sm:text-left sm:block  flex items-center`} onClick={() => changeNavStatus(1)}>
                                    Home Analytics
                                </div>
                                <div className={`${session == 2 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                transition-all border-b-2 text-xs sm:text-sm sm:text-left sm:block  flex items-center`} onClick={() => changeNavStatus(2)}>
                                    Youtube Link
                                </div>
                                <div className={`${session == 3 ? "font-medium cursor-default pointer-events-none px-2  border-indigo-400 text-gray-900 focus:border-indigo-700" :
                                    "cursor-pointer pointer-events-auto border-transparent text-gray-500 hover:text-gray-700 hover:px-2 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"} 
                                transition-all border-b-2 text-xs sm:text-sm sm:text-left sm:block flex items-center`} onClick={() => changeNavStatus(3)}>
                                    Headmaster
                                </div>
                            </nav>
                            {session == 0 ? //=========Swiper Image=========
                                <>
                                    <div className='overflow-auto'>
                                        <table className='w-full text-sm text-left rtl:text-right
                                    text-gray-500 '>

                                            <thead className='text-xs text-gray-700 uppercase bg-gray-100
                                        border-b-2 border-gray-500'>
                                                <tr className='text-nowrap'>
                                                    <th className='px-3 py-5'>ID</th>
                                                    <th className='px-3 py-5'>Image</th>
                                                    <th className='px-3 py-5 text-right'>Actions</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {datas.data.map((data, index) => (
                                                    <tr key={index} className='bg-white border-b 
                                                border-gray-300'>
                                                        <td className='px-3 py-2'>{data.id}</td>
                                                        <td className='px-3 py-2 overflow-hidden w-72'>
                                                            <div className="relative w-full h-0 pb-[56.25%]"> {/* Aspect ratio container */}
                                                                <img
                                                                    src={`${data.image_path}`}
                                                                    alt={`${data.image_path}`}
                                                                    className='absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2'
                                                                />
                                                            </div>
                                                        </td>
                                                        <td className='px-3 py-2 text-right text-lg space-x-2'>
                                                            <button onClick={() => {
                                                                setIsModalOpen((prev) => !prev)
                                                                setModalSession(
                                                                    {
                                                                        ...data,
                                                                        'action': 'edit',
                                                                    }
                                                                )
                                                            }}
                                                                className='text-blue-500 hover:text-blue-400 transition-all'
                                                            >
                                                                <MdEdit/>
                                                            </button>
                                                            <button
                                                                onClick={() => deleteImage(data)}
                                                                className='text-red-500 hover:text-red-400 transition-all'
                                                            >
                                                                <MdDelete/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <Pagination links={datas.meta.links} />
                                </>
                                :
                                session == 1 ? //=========Home Analytics=========
                                    <form className='grid grid-cols-2 gap-x-6 md:gap-x-12 px-4' onSubmit={handleHomeAnalyticsSubmit}>
                                        {data.content && data.content.map((item, index) => (
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
                                    : session == 2 ?  //=========Youtube Link=========
                                        <form className='flex flex-col gap-x-12 px-4' onSubmit={handleURLVideoProfileSubmit}>
                                            <div className='mt-4'>
                                                <InputLabel htmlFor={`url-video-link`} value={`*URL Video Link`} />
                                                <TextInput
                                                    id={`url-video-link`}
                                                    type="text"
                                                    name={`url-video-link`}
                                                    value={data.url}
                                                    className="mt-1 block w-full"
                                                    isFocused={true}
                                                    onChange={e => setData('url', e.target.value)}
                                                />
                                                <InputError message={errors.url} className='mt-2' />
                                            </div>
                                            <div className='mt-4 flex items-end justify-between col-span-2'>
                                                <div className='text-xs'>
                                                    *required and ensure the link is embedded for HTML iframe
                                                </div>
                                                <div className='mt-4 flex-nowrap flex-shrink-0'>
                                                    <Link href={route("home-db.index", { type: 2 })}
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
                                        : session == 3 ? //=========Headmaster=========
                                            <form className='gap-x-12 pt-4 px-9' onSubmit={handleHeadmasterSubmit}>
                                                <div className='flex flex-col md:flex-row gap-x-12 w-full'>
                                                    <div>
                                                        <InputLabel htmlFor={`headmaster-image-path`} value={`*Image`} />
                                                        {
                                                            !data.file ? (
                                                                <div className='relative bg-gray-200 mt-1 h-96 aspect-[3/4] rounded overflow-hidden'>
                                                                    <img
                                                                        className='absolute inset-0 w-full h-full object-cover object-center'
                                                                        src={`/storage/${data.image_path}`}
                                                                        alt="Stored image"
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div className='relative bg-gray-200 mt-1 h-96 aspect-[3/4] rounded overflow-hidden'>
                                                                    <img
                                                                        className='absolute inset-0 w-full h-full object-cover object-center'
                                                                        src={URL.createObjectURL(data.file)}
                                                                        alt="New upload preview"
                                                                    />
                                                                </div>
                                                            )
                                                        }
                                                        <TextInput
                                                            id={`headmaster-image-path`}
                                                            type="file"
                                                            name={`headmaster-image-path`}
                                                            className="mt-4 block w-full"
                                                            isFocused={true}
                                                            onChange={e => setData('file', e.target.files[0])}
                                                        />
                                                        <InputError message={errors.file} className='mt-2' />
                                                        <InputError message={errors.image_path} className='mt-2' />
                                                    </div>
                                                    <div className='basis-4/5 mt-3 md:mt-0 w-full'>
                                                        <div className='mt-1'>
                                                            <InputLabel htmlFor={`headmaster-name`} value={`*Name`} />
                                                            <TextInput
                                                                id={`headmaster-name`}
                                                                type="text"
                                                                value={data.name}
                                                                name={`headmaster-name`}
                                                                className="mt-1 block w-full"
                                                                isFocused={true}
                                                                onChange={e => setData('name', e.target.value)}
                                                            />
                                                            <InputError message={errors.name} className='mt-2' />
                                                        </div>
                                                        <div className='mt-4'>
                                                            <InputLabel htmlFor={`headmaster-message`} value={`*Message`} />

                                                            <TextAreaInput
                                                                id={`headmaster-message`}
                                                                type="text"
                                                                value={data.message}
                                                                name={`headmaster-message`}
                                                                className="mt-1 block w-full h-56"
                                                                isFocused={true}
                                                                onChange={e => setData('message', e.target.value)}
                                                            />
                                                            <InputError message={errors.message} className='mt-2' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-4 flex items-end justify-between col-span-2'>
                                                    <div className='text-xs'>
                                                        *required
                                                    </div>
                                                    <div className='mt-4 flex-nowrap flex-shrink-0'>
                                                        <Link href={route("home-db.index", { type: 3 })}
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
                                            : <>Null</>
                            }
                        </div>
                    </div>

                </div>
            </div>
            <Modal show={isModalOpen}>
                <div className='p-6 text-gray-700'>
                    {/* <pre>
                                                {JSON.stringify(modalSession, undefined, 2)}
                                            </pre> */}
                    <div className='mb-4 text-xl font-semibold '>
                        {modalSession.action == 'create' ?
                            'Create New Image' :

                            `Edit Image id: ${modalSession ? modalSession.id : ''}`

                        }

                    </div>
                    <div className='border border-gray-300 mb-4 rounded h-96 p-4'>
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
                            id="berita_thumbnail_image"
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
                        <InputError message={errors.thumbnail_image} className='mt-2' />
                    </div>
                    <div className='mt-4 text-right'>
                        <button onClick={() => {
                            setIsModalOpen((prev) => !prev)
                            resetAllState()
                        }}
                            className='bg-gray-100 py-2 px-4 text-gray-800 rounded 
                                    transition-all hover:bg-gray-200 mr-2 text-sm
                                    '>
                            Cancel
                        </button>
                        <button onClick={() => {
                            setIsModalOpen((prev) => !prev)
                            post(modalSession.action == 'create' ? route('home-db.store') : route('home-db.update', modalSession.id))
                            resetAllState()
                        }}
                            className={`bg-emerald-500 py-2 px-4 text-white
                                    rounded shadow transition-all hover:bg-emerald-600 text-sm
                                    ${data.file ? '' : 'pointer-events-none bg-emerald-300'}`}>
                            Submit
                        </button>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    )
}

export default Index