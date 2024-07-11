import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import SelectInput from '@/Components/SelectInput'
import TextAreaInput from '@/Components/TextAreaInput'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React, { useState } from 'react'

function Edit({ auth, groups, pembelajaran }) {

    const [toogleGroupOption, setToogleGroupOption] = useState(true)

    const { data, setData, post, errors, reset } = useForm({
        image_path: null,
        title: pembelajaran.title || "",
        description: pembelajaran.description || "",
        type: pembelajaran.type || "",
        group: pembelajaran.group || "",
        _method: 'PUT'
    })

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("pembelajaran-db.update", pembelajaran.id))
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit {pembelajaran.title}
                    </h2>
                </div>
            }
        >
            <Head title="Pembelajaran" />

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
                                data.image_path ?
                                    <div className='mb-4'>
                                        <img src={URL.createObjectURL(data.image_path)} alt="" className='aspect-video w-full object-cover' />
                                    </div>
                                    :
                                    pembelajaran.image_path &&
                                    <div className='mb-4'>
                                        <img src={pembelajaran.image_path} alt="" className='aspect-video w-full object-cover' />
                                    </div>
                            }
                            <div>
                                <InputLabel htmlFor="pembelajaran_image_path" value="*Thumbnail Image" />
                                <TextInput
                                    id="pembelajaran_image_path"
                                    type="file"
                                    name="image"
                                    className="mt-1 block w-full"
                                    onChange={e => setData('image_path', e.target.files[0])}
                                />
                                <InputError message={errors.image_path} className='mt-2' />
                            </div>
                            <div className='mt-4'>
                                <InputLabel htmlFor="pembelajaran_title" value="*Title" />
                                <TextInput
                                    id="pembelajaran_title"
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
                                <InputLabel htmlFor="pembelajaran_description" value="Description" />
                                <TextAreaInput
                                    id="pembelajaran_description"
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={e => setData('description', e.target.value)}
                                />
                                <InputError message={errors.description} className='mt-2' />
                            </div>
                            <div className='mt-4'>
                                <InputLabel htmlFor="pembelajaran_type" value="*Type" />
                                <SelectInput
                                    id="pembelajaran_type"
                                    name="type"
                                    value={data.type}
                                    className="mt-1 block w-full"
                                    onChange={(e) => {
                                        setData((prevData) => ({
                                            ...prevData,
                                            type: e.target.value,
                                            group: ''  // Reset 'group' when 'type' changes
                                        }));
                                    }}
                                >
                                    <option value="">Select Type</option>
                                    <option value="fasilitas">Fasilitas</option>
                                    <option value="kegiatan mahasiswa">Kegiatan Mahasiswa</option>
                                </SelectInput>
                                <InputError message={errors.type} className='mt-2' />
                            </div>
                            <div className='mt-4'>
                                <InputLabel htmlFor="pembelajaran_group">
                                    *Group {
                                        data.type &&
                                        <span >
                                            | <span className='hover:underline cursor-pointer text-blue-500  transition-all'
                                                onClick={() => {
                                                    setToogleGroupOption((prev) => !prev)
                                                    setData('group', '')
                                                }}
                                            >
                                                {toogleGroupOption ? "Make new group" : "Select existing one"}
                                            </span>
                                        </span>
                                    }
                                </InputLabel>
                                {toogleGroupOption ?
                                    <SelectInput
                                        id="pembelajaran_group"
                                        name="group"
                                        value={data.group}
                                        className={`mt-1 block w-full ${!data.type ? "pointer-events-none text-gray-200" : ''}`}
                                        onChange={e => setData('group', e.target.value)}
                                    >
                                        {!data.type ? <option value="">Select Type First</option> : <>
                                            <option value="">Select Group</option>
                                            {groups[data.type].map((group) => (
                                                <option key={group} value={group}>{group}</option>
                                            ))}
                                        </>}
                                    </SelectInput>
                                    :
                                    <TextInput
                                        id="pembelajaran_group"
                                        type="text"
                                        name="group"
                                        value={data.group}
                                        className="mt-1 block w-full capitalize"
                                        isFocused={true}
                                        onChange={e => setData('group', e.target.value.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "))}
                                    />
                                }

                                <InputError message={errors.group} className='mt-2' />
                            </div>
                            <div className='mt-4 flex items-end justify-between'>
                                <div className='text-xs'>
                                    *required
                                </div>
                                <div className=''>

                                    <Link href={route("pembelajaran-db.index")}
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