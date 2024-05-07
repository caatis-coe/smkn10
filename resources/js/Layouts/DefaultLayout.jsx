import Footer from '@/Components/footer/Footer'
import Nav from '@/Components/navbar/Nav'
import { Head } from '@inertiajs/react'
import React from 'react'
import logoSMA from '@/Assets/Logo-SMK-10-Bandung.png'

function DefaultLayout({children, headerChildren }) {
    return (
        <div className='overflow-x-hidden'>
            <Head>
                <title>SMKN 10 Bandung</title>
                <link rel="icon" href={logoSMA} />
            </Head>
            <div className='flex flex-col min-h-[100vh] min-w-[100wh]'>
                <div className='sticky top-0'>
                    <Nav />
                </div>
                <div>
                    {headerChildren}
                </div>
                <div className='flex flex-col flex-1 h-auto px-10 md:px-20 py-7' >
                    {children}
                </div>
                <div className=''>
                    <Footer />
                </div>
            </div>
        </div>

    )
}

export default DefaultLayout