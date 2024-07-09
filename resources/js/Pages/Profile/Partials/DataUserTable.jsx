import React from 'react'

function DataUserTable({ className, users,auth }) {

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Accounts</h2>

                <p className="mt-1 text-sm text-gray-600">
                </p>
            </header>

            <div className='max-w-full overflow-auto'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-100
                                        border-b-2 border-gray-500'>
                        <tr className='text-nowrap'>
                            {users && Object.keys(users[0]).map((key, index) => (
                                <th key={index} className='px-3 py-5'>{key.replace(/_/g, ' ')}</th>
                            ))}
                            {/* <th className='px-3 py-5'>action</th> */}
                        </tr>
                    </thead>

                    <tbody>
                        {users && users.map((user, index) => (
                            <tr key={index} className='bg-white border-b  border-gray-300'>
                                {
                                    Object.values(user).map((value, index) => (
                                        <td key={index} className='px-3 py-2 text-nowrap'>
                                            {value || <span className='text-gray-300'>None</span>}
                                        </td>
                                    ))
                                }
                                {/* <td className='px-3 py-2 text-nowrap'>
                                    <button
                                        onClick={() => deleteBerita(user)}
                                        className='font-medium text-red-500 hover:underline mx-1'
                                    >
                                        delete
                                    </button>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default DataUserTable