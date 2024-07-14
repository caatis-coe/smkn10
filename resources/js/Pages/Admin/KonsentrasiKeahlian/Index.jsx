import ModalConfirmation from '@/Components/ModalConfirmation'
import Pagination from '@/Components/Pagination'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router } from '@inertiajs/react'
import React, { useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'

function Index({ auth, datas, success }) {
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const deleteKonsentrasiKeahlian = (konsentrasiKeahlian) => {
        const message = `
WARNING!!!
Deleting this data will also delete the corresponding "Teaching Factory Products" and their associated "Buyers".
Please consider this consequence before proceeding.

Do you still want to delete "${konsentrasiKeahlian.title}"?
        `;
        setConfirmationMessage(message.trim());
        setSelectedData(konsentrasiKeahlian);
        setIsConfirmOpen(true);
    }

    const handleConfirmDelete= () => {
        router.delete(route("konsentrasi-keahlian-db.destroy", selectedData.id));
        setIsConfirmOpen(false);
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Konsentrasi Keahlian
                    </h2>
                    <Link href={route('konsentrasi-keahlian-db.create')}
                        className='bg-emerald-500 py-2 px-3 text-white rounded
                shadow transition-all hover:bg-emerald-600'
                    >
                        Add new
                    </Link>
                </div>
            }
        >
            <Head title="Konsentrasi Keahlian" />



            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {
                        success && <div className='bg-emerald-500 py-2 px-4 mb-4 text-white rounded'>
                            {success}
                        </div>
                    }
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className='overflow-auto'>
                                {/* <pre className='text-xs'>
                                    {JSON.stringify(datas, undefined, 1)}
                                </pre> */}
                                <table className='w-full text-sm text-left rtl:text-right
                                    text-gray-500 '>

                                    <thead className='text-xs text-gray-700 uppercase bg-gray-100
                                        border-b-2 border-gray-500'>
                                        <tr className='text-nowrap'>
                                            <th className='px-3 py-5'>ID</th>
                                            <th className='px-3 py-5'>Title</th>
                                            <th className='px-3 py-5'>Description</th>
                                            <th className='px-3 py-5'>Created At</th>
                                            <th className='px-3 py-5'>Updated At</th>
                                            <th className='px-3 py-5 text-right'>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {datas.data.map((konsentrasiKeahlian, index) => (
                                            <tr key={index} className='bg-white border-b 
                                                border-gray-300'>
                                                <td className='px-3 py-2'>{konsentrasiKeahlian.id}</td>
                                                <td className='px-3 py-2 max-w-48 truncate text-gray-600 font-medium  hover:underline'>
                                                    <Link href={route('konsentrasi-keahlian-db.show', konsentrasiKeahlian.id)}>
                                                        {konsentrasiKeahlian.title}
                                                    </Link>
                                                </td>
                                                <td className='px-3 py-2 max-w-56'>
                                                    <div className='line-clamp-4'>
                                                        {konsentrasiKeahlian.description || <span className='text-gray-300'>None</span>}
                                                    </div>
                                                </td>
                                                <td className='px-3 py-2 text-nowrap'>{konsentrasiKeahlian.created_at}</td>
                                                <td className='px-3 py-2 text-nowrap'>{konsentrasiKeahlian.updated_at}</td>

                                                <td className='px-3 py-2 text-nowrap text-right'>
                                                    <div className='flex justify-end gap-x-2 items-center'>
                                                        <Link href={route("konsentrasi-keahlian-db.edit", konsentrasiKeahlian.id)}
                                                            className='text-blue-500 text-lg hover:text-blue-400 transition-all'
                                                        >
                                                            <MdEdit />
                                                        </Link>
                                                        <button
                                                            onClick={() => deleteKonsentrasiKeahlian(konsentrasiKeahlian)}
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
                            <Pagination links={datas.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
            {selectedData && (
                <ModalConfirmation
                    isOpen={isConfirmOpen}
                    onRequestClose={() => setIsConfirmOpen(false)}
                    onConfirm={handleConfirmDelete}
                    headerMessage={`"${selectedData.title}"`}
                    message={confirmationMessage}
                />
            )}
        </AuthenticatedLayout>
    )
}

export default Index