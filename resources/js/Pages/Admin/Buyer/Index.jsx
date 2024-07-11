import Pagination from '@/Components/Pagination'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router } from '@inertiajs/react'
import React from 'react'
import { MdDelete } from 'react-icons/md'

function Index({ auth, datas, success }) {

    const deleteBerita = (buyer) => {
        if (!window.confirm(`Are you sure you want to delete buyer data from "${buyer.name}"`)){
            return;
        }
        router.delete(route("buyer-db.destroy", buyer.id))
    }
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Buyer
                    </h2>
                </div>
            }
        >
            <Head title="Buyer" />



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
                                <table className='w-full text-sm text-left rtl:text-right
                                    text-gray-500 '>

                                    <thead className='text-xs text-gray-700 uppercase bg-gray-100
                                        border-b-2 border-gray-500'>
                                        <tr className='text-nowrap'>
                                            <th className='px-3 py-5'>ID</th>
                                            <th className='px-3 py-5'>Name</th>
                                            <th className='px-3 py-5'>Company Name</th>
                                            <th className='px-3 py-5'>Company Address</th>
                                            <th className='px-3 py-5'>Created At</th>
                                            <th className='px-3 py-5'>Teaching Factory Product</th>
                                            <th className='px-3 py-5 text-right'>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {datas.data.map((buyer, index) => (
                                            <tr key={index} className='bg-white border-b 
                                                border-gray-300'>
                                                <td className='px-3 py-4 text-nowrap'>{buyer.id}</td>
                                                <td className='px-3 py-4 text-nowrap text-gray-600 font-medium  hover:underline'>
                                                    <Link href={route('buyer-db.show', buyer.id)}>
                                                        {buyer.name}
                                                    </Link>
                                                </td>
                                                <td className='px-3 py-4  text-nowrap'>
                                                    {buyer.company_name}
                                                </td>
                                                <td className='px-3 py-4 '>
                                                    {buyer.company_address}
                                                </td>
                                                <td className='px-3 py-4 text-nowrap'>{buyer.created_at}</td>
                                                <td className='px-3 py-4 '>
                                                    {buyer.teaching_factory_product.title}
                                                </td>
                                                <td className='px-3 py-4 text-right' >
                                                    <button 
                                                    onClick={() => deleteBerita(buyer)}
                                                    className=' text-red-500 hover:text-red-400 transition-all text-lg'
                                                    >
                                                        <MdDelete/>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={datas.meta.links}/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index