import Footer from '@/Components/footer/Footer'
import Nav from '@/Components/navbar/Nav'
import { Head } from '@inertiajs/react'
import React from 'react'
import logoSMA from '@/Assets/Logo-SMK-10-Bandung.png'
import WhatsAppButton from '@/Components/WhatsappButton'
import ScrollToTop from '@/Components/ScrollToTop'
import RightDrawer from '@/Components/RightDrawer'
import contactData from '@/Data/ContactData'

function DefaultLayout({ children, headerChildren }) {
    return (
        <div className=' bg-white'>
            <Head>
                <title>SMKN 10 Bandung - KEREN</title>
                <link rel="icon" href={logoSMA} />
            </Head>
            <div className='sticky top-0 z-50'>
                <Nav />
            </div>
            <div className='overflow-x-hidden w-full flex flex-col min-h-screen min-w-screen'>
                <div>
                    {headerChildren}
                </div>
                <div className='flex flex-col flex-1 w-full h-full px-10 md:px-20 py-7' >
                    {children}
                </div>
                <div className=''>
                    <Footer />
                </div>
                <WhatsAppButton 
                    // phone='6281396969696'
                    phone={contactData.phone}
                    text='Chat with SMKN 10'
                />
                <ScrollToTop />
                <RightDrawer />
                
            </div>
        </div>

    )
}

export default DefaultLayout