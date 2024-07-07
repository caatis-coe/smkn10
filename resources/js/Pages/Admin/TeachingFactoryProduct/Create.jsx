import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import SelectInput from '@/Components/SelectInput'
import TextAreaInput from '@/Components/TextAreaInput'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

function Create({ auth, konsentrasiKeahlian }) {

    const { data, setData, post, errors, reset } = useForm({
        image_path: '',
        title: '',
        description: '',
        konsentrasi_keahlian_id: '',
    })


    const onSubmit = (e) => {
        e.preventDefault();
        post(route("teaching-factory-product-db.store"))
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Create New Teaching Factory Product
                    </h2>
                </div>
            }
        >
            <Head title="Teaching Factory Product" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg text-gray-900">
                        <form
                            onSubmit={onSubmit}
                            className='p-4 sm:p-8 bg-white shadow sm:rounded-lg'>
                            {data.image_path &&
                                <div className='mb-4'>
                                    <img src={URL.createObjectURL(data.image_path)} alt="" className='aspect-video w-full object-cover' />
                                </div>
                            }
                            {/* <pre>
                                {JSON.stringify(data,undefined,2)}
                            </pre> */}
                            <div>
                                <InputLabel htmlFor="teachingFactoryProduct_image_path" value="*Thumbnail Image" />
                                <TextInput
                                    id="teachingFactoryProduct_image_path"
                                    type="file"
                                    name="image"

                                    className="mt-1 block w-full"
                                    onChange={e => setData('image_path', e.target.files[0])}
                                />
                                <InputError message={errors.image_path} className='mt-2' />
                            </div>
                            <div className='mt-4'>
                                <InputLabel htmlFor="teachingFactoryProduct_title" value="*Title" />
                                <TextInput
                                    id="teachingFactoryProduct_title"
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
                                <InputLabel htmlFor="teachingFactoryProduct_description" value="*Description" />
                                <TextAreaInput
                                    id="teachingFactoryProduct_description"
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
                                <InputLabel htmlFor="teachingFactoryProduct_konsentrasi_keahlian" value="*Konsentrasi Keahlian" />
                                <SelectInput
                                    id="teachingFactoryProduct_konsentrasi_keahlian"
                                    name="konsentrasi_keahlian"
                                    className="mt-1 block w-full"
                                    onChange={(e) => {
                                        setData('konsentrasi_keahlian_id', e.target.value);
                                    }}
                                >
                                    <option value="">Select Konsentrasi Keahlian</option>
                                    {konsentrasiKeahlian.map((item) => (
                                        <option key={item.id} value={item.id}>{item.title}</option>
                                    ))}
                                </SelectInput>
                                <InputError message={errors.konsentrasi_keahlian_id} className='mt-2' />
                            </div>
                            <div className='mt-4 flex items-end justify-between'>
                                <div className='text-xs'>
                                    *required
                                </div>
                                <div className=''>

                                    <Link href={route("teaching-factory-product-db.index")}
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

export default Create