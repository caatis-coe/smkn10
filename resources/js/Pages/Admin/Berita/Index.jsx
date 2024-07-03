import Pagination from '@/Components/Pagination'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

function Index({ auth, beritas }) {

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className='flex justify-between items-center'>
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
            Berita
          </h2>
          <Link href={route('berita-db.create')}
            className='bg-emerald-500 py-2 px-3 text-white rounded
              shadow transition-all hover:bg-emerald-600
            '
          >
            Add new
          </Link>
        </div>
      }

    >

      <Head title="Berita" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-950">
              <table className='w-full text-sm text-left rtl:text-right
              text-gray-500 '>
                <thead className='text-xs text-gray-700 uppercase bg-gray-100
                border-b-2 border-gray-500'>
                  <tr className='text-nowrap'>
                    <th className='px-3 py-5'>ID</th>
                    <th className='px-3 py-5'>Thumbnail Image</th>
                    <th className='px-3 py-5'>Title</th>
                    <th className='px-3 py-5'>Description</th>
                    <th className='px-3 py-5'>Created At</th>
                    <th className='px-3 py-5'>Updated At</th>
                    <th className='px-3 py-5'>Published By</th>
                    <th className='px-3 py-5'>Updated By</th>
                    <th className='px-3 py-5 text-center'>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {beritas.data.map((berita, index) => (
                    <tr key={index} className='bg-white border-b 
                     border-gray-300'>
                      <td className='px-3 py-2'>{berita.id}</td>
                      <td className='px-3 py-2 '>
                        <img src={berita.thumbnail_image} alt="" className='bg-center' style={{ width: 120 }} />
                      </td>
                      <td className='px-3 py-2'>{berita.title}</td>
                      <td className='px-3 py-2'>{berita.description}</td>
                      <td className='px-3 py-2 text-nowrap'>{berita.created_at}</td>
                      <td className='px-3 py-2 text-nowrap'>{berita.updated_at}</td>
                      <td className='px-3 py-2'>{berita.published_by.name}</td>
                      <td className='px-3 py-2'>{berita.updated_by.name}</td>
                      <td className='px-3 py-2'>
                        <Link href={route("berita-db.edit", berita.id)}
                          className='font-medium text-blue-600 hover:underline mx-1'
                        >
                          edit
                        </Link>
                        <Link href={route("berita-db.destroy", berita.id)}
                          className='font-medium text-red-600 hover:underline mx-1'
                        >
                          delete
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination links={beritas.meta.links} />
              {/* <pre>{JSON.stringify(beritas,undefined,3)}</pre> */}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}

export default Index