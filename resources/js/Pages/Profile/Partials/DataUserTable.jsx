import React from 'react'

function DataUserTable({ className, users }) {

    console.log(users[0])
    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </p>
            </header>

            <table className='w-full text-sm text-left rtl:text-right
                                    text-gray-500 '>
                <thead className='text-xs text-gray-700 uppercase bg-gray-100
                                        border-b-2 border-gray-500'>
                    <tr className='text-nowrap'>
                        {users && Object.keys(users[0]).map((key, index) => (
                            <th className='px-3 py-5'>{key.replace(/_/g, ' ')}</th>
                        ))}
                        <th className='px-3 py-5'>action</th>
                    </tr>
                </thead>

                <tbody>
                    {users && users.map((user, index) => (
                        <tr key={index} className='bg-white border-b  border-gray-300'>
                            <td className='px-3 py-2'>{user.id}</td>
                            <td className='px-3 py-2'>{user.name}</td>
                            <td className='px-3 py-2'>{user.email}</td>
                            <td className='px-3 py-2'>{user.username || <span className='text-gray-300'>None</span>}</td>
                            <td className='px-3 py-2'>{user.role}</td>
                            <td className='px-3 py-2 max-w-56'>
                                <div className='line-clamp-4'>
                                    {user.email_verified_at || <span className='text-gray-300'>None</span>}
                                </div>
                            </td>
                            <td className='px-3 py-2 text-nowrap'>{user.created_at}</td>
                            <td className='px-3 py-2 text-nowrap'>{user.updated_at}</td>
                            <td className='px-3 py-2 text-nowrap'>
                                <button
                                    onClick={() => deleteBerita(user)}
                                    className='font-medium text-red-500 hover:underline mx-1'
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default DataUserTable