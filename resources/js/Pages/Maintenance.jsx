import React from 'react'
import logoSma from '@/Assets/Logo-SMK-10-Bandung.png'

function Maintenance() {
    return (
        <div className='min-h-screen grid place-items-center'>
            <div className="py-12 w-full">
                <div className="max-w-4xl mx-auto  px-4 sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-lg sm:rounded-lg w-full">
                        <div className="p-12 text-gray-900 ">
                            <header className='grid place-items-center'>
                                <img src={logoSma} className='size-72 mb-6' alt="" />
                                <h2 className="text-xl font-medium text-gray-900 text-center">Under Maintenance</h2>

                                <p className="mt-1 text-sm text-center text-gray-600 max-w-96">
                                    The Page you're looking for is currently
                                    under maintenance and will be back soon
                                </p>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maintenance