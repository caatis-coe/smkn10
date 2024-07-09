import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

function Edit({ auth, daftarGuru }) {

    const { data, setData, post, errors, reset } = useForm({
        name: daftarGuru.name || "",
        nip_nuptk: daftarGuru.nip_nuptk || "",
        _method: 'PUT'
    })


    const onSubmit = (e) => {
        e.preventDefault();
        post(route("daftar-guru-db.update", daftarGuru.id))
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Edit "{daftarGuru.name}"
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
                            <div className='mt-4'>
                                <InputLabel htmlFor="daftarGuru_name" value="*Name" />
                                <TextInput
                                    id="daftarGuru_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={e => setData('name', e.target.value)}
                                />
                                <InputError message={errors.name} className='mt-2' />
                            </div>
                            <div className='mt-4'>
                                <InputLabel htmlFor="daftarGuru_nip_nuptk" value="*NIP/NUPTK" />
                                <TextInput
                                    id="daftarGuru_nip_nuptk"
                                    type="text"
                                    name="nip_nuptk"
                                    value={data.nip_nuptk}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={e => setData('nip_nuptk', e.target.value)}
                                />
                                <InputError message={errors.nip_nuptk} className='mt-2' />
                            </div>
                            <div className='mt-4 flex items-end justify-between'>
                                <div className='text-xs'>
                                    *required
                                </div>
                                <div className='mt-4 text-right'>
                                    <Link href={route("daftar-guru-db.index")}
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