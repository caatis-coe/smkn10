import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextAreaInput from '@/Components/TextAreaInput'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

function Edit({ auth, berita }) {

    const { data, setData, post, errors, reset } = useForm({
        thumbnail_image: null,
        title: berita.title || "",
        description: berita.description || "",
        _method: 'PUT'
    })

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("berita-db.update", berita.id))
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit {berita.title}
                    </h2>
                </div>
            }
        >
            <Head title="Berita" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg text-gray-900">

                        {/* <pre>
                            {JSON.stringify(data, undefined, 2)}
                        </pre> */}
                        <form
                            onSubmit={onSubmit}
                            className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
                            {
                                data.thumbnail_image ?
                                    <div className='mb-4'>
                                        <img src={URL.createObjectURL(data.thumbnail_image)} alt="" className='aspect-video w-full object-cover' />
                                    </div>
                                    :
                                    berita.thumbnail_image &&
                                    <div className='mb-4'>
                                        <img src={berita.thumbnail_image} alt="" className='aspect-video w-full object-cover' />
                                    </div>
                            }
                            <div>
                                <InputLabel htmlFor="berita_thumbnail_image" value="*Thumbnail Image" />
                                <TextInput
                                    id="berita_thumbnail_image"
                                    type="file"
                                    name="image"
                                    className="mt-1 block w-full"
                                    onChange={e => setData('thumbnail_image', e.target.files[0])}
                                />
                                <InputError message={errors.thumbnail_image} className='mt-2' />
                            </div>
                            <div className='mt-4'>
                                <InputLabel htmlFor="berita_title" value="*Title" />
                                <TextInput
                                    id="berita_title"
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
                                <InputLabel htmlFor="berita_description" value="*Description" />
                                <TextAreaInput
                                    id="berita_description"
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={e => setData('description', e.target.value)}
                                />
                                <InputError message={errors.description} className='mt-2' />
                            </div>
                            <div className='mt-4 flex items-end justify-between'>
                                <div className='text-xs'>
                                    *required
                                </div>
                                <div className='mt-4 text-right'>
                                    <Link href={route("berita-db.index")}
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

                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Edit