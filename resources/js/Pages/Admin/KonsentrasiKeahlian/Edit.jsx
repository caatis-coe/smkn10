import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import Modal from '@/Components/Modal'
import TextAreaInput from '@/Components/TextAreaInput'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { IoMdImage } from 'react-icons/io'

function Edit({ auth, konsentrasiKeahlian }) {

    const status = konsentrasiKeahlian.images.map((image) => (
        image.id ? {
            'initStatus': true,
            'statusState': 'available',
            'text_button_1': 'edit',
            'text_button_2': 'delete',
        }
            :
            {
                'initStatus': false,
                'statusState': '',
                'text_button_1': '',
                'text_button_2': 'create',
            }
    ))
    const [shouldSubmit, setShouldSubmit] = useState(false);
    const tempImages = konsentrasiKeahlian.images || ""
    const [imageStatus, setImageStatus] = useState(status);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalSession, setModalSession] = useState({
        'index': 0,
        'image': {},
        'action': ''
    });

    const { data, setData, post, errors, reset } = useForm({
        title: konsentrasiKeahlian.title || "",
        description: konsentrasiKeahlian.description || "",
        images: konsentrasiKeahlian.images || "",
        _method: 'PUT'
    })




    const onSubmit = (e) => {
        e.preventDefault();
        setData((prev) => {
            let updatedImages = [...prev.images].map((item, index) => ({
                ...item,
                'image_path': tempImages[index].image_path,
                'init_status': imageStatus[index].initStatus,
                'status_state': imageStatus[index].statusState,
            }))
            return {
                ...prev,
                images: updatedImages
            };
        });
        setShouldSubmit(true);
    };

    useEffect(() => {
        if (shouldSubmit) {
            post(route("konsentrasi-keahlian-db.update", konsentrasiKeahlian.id));
            setShouldSubmit(false); // Reset the flag
        }
    }, [shouldSubmit, post, konsentrasiKeahlian.id]);

    const changeModalSession = (index, image, action) => {
        setModalSession({
            'index': index,
            'image': image,
            'action': action,
        })
    }

    const toogleIsModalOpen = () => {
        setIsModalOpen((prev) => !prev)
    }

    const changeImageStatus = (index, action) => {
        let newImageStatus = [...imageStatus];
        let prev = newImageStatus[index]
        if (action == 'delete') {
            newImageStatus[index] = {
                ...prev,
                statusState:
                    prev.statusState === 'available'
                        ? 'available_delete'
                        : prev.statusState === 'available_delete'
                            ? 'available'
                            : prev.statusState === 'post'
                                ? 'delete'
                                : 'post',
                text_button_1: prev.text_button_1 === 'edit' ? '' : 'edit',
                text_button_2:
                    prev.text_button_2 === 'delete' ? 'cancel' : 'delete',
            };


        } else if (action == 'post') {
            setData(prev => {
                const updatedImages = [...prev.images];
                updatedImages[index] = modalSession.image; // Update the image at the specific index
                return {
                    ...prev,
                    images: updatedImages
                };
            });
            newImageStatus[index] = {
                ...prev,
                statusState: 'post',
                text_button_1: 'edit',
                text_button_2: 'cancel',
            };
        } else if (action == 'cancel') {
            setData(prev => {
                const updatedImages = [...prev.images];
                updatedImages[index] = tempImages[index]; // Update the image at the specific index
                return {
                    ...prev,
                    images: updatedImages
                };
            });
            newImageStatus[index] = {
                ...prev,
                statusState: prev.initStatus ? 'available' : '',
                text_button_1: prev.initStatus ? 'edit' : '',
                text_button_2: prev.initStatus ? 'delete' : 'create',
            };
        }
        setImageStatus(newImageStatus)
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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className='p-4 sm:p-8 shadow sm:rounded-lg flex flex-col lg:flex-row gap-9'>
                            <form className='basis-1/2'
                                onSubmit={onSubmit}>

                                <div className='mt-4'>
                                    <InputLabel htmlFor="konsentrasiKeahlian_title" value="*Title" />
                                    <TextInput
                                        id="konsentrasiKeahlian_title"
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={e => setData('title', e.target.value)}
                                    />
                                    <InputError message={errors.title} className='mt-2' />
                                </div>
                                <div className='mt-4'>
                                    <InputLabel htmlFor="konsentrasiKeahlian_description" value="*Description" />
                                    <TextAreaInput
                                        id="konsentrasiKeahlian_description"
                                        type="text"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full h-72"
                                        isFocused={true}
                                        onChange={e => setData('description', e.target.value)}
                                    />
                                    <InputError message={errors.description} className='mt-2' />
                                </div>
                            </form>
                            <div className='mt-4 flex-grow border rounded p-4 border-gray-200'>
                                <label className='text-lg'>
                                    Images
                                </label>
                                <div className='h-96 overflow-auto'>
                                    <table className='text-sm text-left rtl:text-right
                                    text-gray-500 w-full'>

                                        <thead className='text-xs text-gray-700 uppercase bg-gray-100
                                        border-b-2 border-gray-500  w-full'>
                                            <tr className='text-nowrap'>
                                                <th className='px-3 py-5'>ID Image</th>
                                                <th className='px-3 py-5'>Image</th>
                                                <th className='px-3 py-5 text-right'>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {data.images.map((image, index) => (
                                                <tr key={index} className={`${imageStatus[index].statusState.includes('delete') ?
                                                    'bg-red-50' : imageStatus[index].statusState.includes('post') ?
                                                        (imageStatus[index].initStatus ? 'bg-blue-50' : 'bg-green-50')
                                                        : 'bg-white-50'} 
                                                border-b border-gray-300`}>
                                                    <td className='px-3 py-2 text-left'>{
                                                        imageStatus[index].statusState.includes('delete') ?
                                                            <span className='text-red-400 font-medium'>Delete id : {image.id}</span> :
                                                            imageStatus[index].statusState.includes('post') ?
                                                                (imageStatus[index].initStatus ?
                                                                    <span className='text-blue-400 font-medium'>Update id : {image.id}</span>
                                                                    :
                                                                    <span className='text-green-400 font-medium'>Store New Image </span>
                                                                ) : image.id
                                                    }</td>

                                                    <td className='px-3 py-2 w-48'>
                                                        {
                                                            image.image_path ?
                                                                <img
                                                                    src={`${image.image_path}`}
                                                                    alt={`${image.image_path}`}
                                                                /> :
                                                                <div className='text-gray-300 font-semibold text-center text-xl py-9'>
                                                                    None
                                                                </div>
                                                        }

                                                    </td>

                                                    <td className='px-3 py-2 text-right'>
                                                        <div className='inline-block'>
                                                            <button onClick={() => {
                                                                changeModalSession(index, image, 'edit')
                                                                toogleIsModalOpen()
                                                            }}
                                                                className='font-medium text-blue-500 hover:underline mx-1 inline-block'>
                                                                {imageStatus[index].text_button_1}
                                                            </button>
                                                            {image.id ?
                                                                <button
                                                                    onClick={() => {
                                                                        changeImageStatus(index,
                                                                            imageStatus[index].statusState.includes('available') ? 'delete' : 'cancel'
                                                                        )
                                                                    }}
                                                                    className={`font-medium hover:underline mx-1 inline-block
                                                                ${imageStatus[index].statusState.includes('delete') ||
                                                                            imageStatus[index].statusState.includes('post')
                                                                            ? 'text-gray-500'
                                                                            : 'text-red-500'
                                                                        }`}
                                                                >
                                                                    {imageStatus[index].text_button_2}
                                                                </button>
                                                                :
                                                                <>
                                                                    <button
                                                                        onClick={() => {
                                                                            changeModalSession(index, image, 'create')
                                                                            toogleIsModalOpen()
                                                                        }}
                                                                        className={`font-medium hover:underline mx-1 inline-block
                                                                text-blue-500`}
                                                                    >
                                                                        {imageStatus[index].text_button_2}
                                                                    </button>
                                                                </>
                                                            }

                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4 flex items-end justify-between'>
                            <div className='text-xs'>
                                *required
                            </div>
                            <div className='mt-4 text-right'>
                                <Link href={route("konsentrasi-keahlian-db.index")}
                                    className='bg-gray-100 py-2 px-4 text-gray-800 rounded 
                                    transition-all hover:bg-gray-200 mr-2 text-sm
                                    '>
                                    Cancel
                                </Link>
                                <button className='bg-emerald-500 py-2 px-4 text-white
                                    rounded shadow transition-all hover:bg-emerald-600 text-sm'>
                                    Submit
                                </button>
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
            <Modal show={isModalOpen}>
                <div className='p-6 text-gray-700'>
                    {/* <pre>
                        {JSON.stringify(modalSession, undefined, 2)}
                    </pre> */}
                    <div className='mb-4 text-xl font-semibold '>
                        {modalSession.action == 'create' ?
                            'Create New Image' :

                            `Edit Image id: ${modalSession && modalSession.image ? modalSession.image.id : ''}`

                        }

                    </div>
                    <div className='border border-gray-300 mb-4 rounded h-96 p-4'>
                        <div className=' w-full h-full flex justify-center items-center'>
                            {
                                modalSession && modalSession.image && modalSession.image.image_path ?
                                    <img src={modalSession.image.image_path} alt="" className='h-full object-cover' />
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
                            onChange={e => setModalSession((prev) => ({
                                ...prev,
                                'image': {
                                    "id": prev.image.id == null ? '#' : prev.image.id,
                                    "description": prev.image.description,
                                    "image_path": URL.createObjectURL(e.target.files[0]),
                                    "used_as": "konsentrasi_keahlian",
                                    "file": e.target.files[0]
                                }
                            }))}
                        />
                        <InputError message={errors.thumbnail_image} className='mt-2' />
                    </div>
                    <div className='mt-4 text-right'>
                        <button onClick={toogleIsModalOpen}
                            className='bg-gray-100 py-2 px-4 text-gray-800 rounded 
                                    transition-all hover:bg-gray-200 mr-2 text-sm
                                    '>
                            Cancel
                        </button>
                        <button onClick={() => {
                            toogleIsModalOpen()
                            changeImageStatus(modalSession.index, 'post')
                        }}
                            className={`bg-emerald-500 py-2 px-4 text-white
                                    rounded shadow transition-all hover:bg-emerald-600 text-sm
                                    ${modalSession.image.file ? '' : 'pointer-events-none bg-emerald-300'}`}>
                            Submit
                        </button>
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    )
}

export default Edit


{/* <nav className='border-b text-gray-400 border-gray-200 w-full my-6 flex gap-x-6 pt-2 h-12  text-sm'>
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
                                                <th className='px-3 py-5 text-right'>Actions</th>
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

                                                    <td className='px-3 py-2 text-nowrap text-right'>
                                                        <Link href={route("konsentrasi-keahlian-db.edit", data.id)}
                                                            className='font-medium text-blue-500 hover:underline mx-1'
                                                        >
                                                            edit
                                                        </Link>
                                                        <button
                                                            onClick={() => deleteTeachingFactory(data)}
                                                            className='font-medium text-red-500 hover:underline mx-1'
                                                        >
                                                            delete
                                                        </button>
                                                    </td>
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
                                                <th className='px-3 py-5 text-right'>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {konsentrasiKeahlian.images.map((image, index) => (
                                                <tr key={index} className='bg-white border-b 
                                                border-gray-300'>
                                                    <td className='px-3 py-2 text-left'>{image.id}</td>

                                                    <td className='px-3 py-2 w-48'>
                                                        <img
                                                            src={`${image.image_path}`}
                                                            alt={`${image.image_path}`}

                                                        />
                                                    </td>

                                                    <td className='px-3 py-2 text-nowrap text-right'>
                                                        <div href={route("konsentrasi-keahlian-db.edit", image.id)}
                                                            className='font-medium text-blue-500 hover:underline mx-1'
                                                        >
                                                            edit
                                                        </div>
                                                        <button
                                                            onClick={() => deleteImage(image)}
                                                            className='font-medium text-red-500 hover:underline mx-1'
                                                        >
                                                            delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>}
                            </div> */}