import { useState } from 'react';
import ApplicationLogo from '@/Assets/Logo-SMK-10-Bandung.png';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Head, Link } from '@inertiajs/react';
import logoSMA from '@/Assets/Logo-SMK-10-Bandung.png'

export default function AuthenticatedLayout({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);


    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href={logoSMA} />
            </Head>
            <nav className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 xl:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex me-6 items-center">
                                <Link href="/">
                                    <img src={ApplicationLogo} className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>
                            <div className="hidden space-x-6 xl:-my-px xl:flex">
                                <NavLink href={route('home-db.index')} active={route().current('home-db.*')}>
                                    Home
                                </NavLink>
                                <NavLink href={route('daftar-guru-db.index')} active={
                                    route().current('daftar-guru-db.*') ||
                                    route().current('daftar-tenaga-pendidikan-db.*') ||
                                    route().current('sejarah-db.*') ||
                                    route().current('struktur-organisasi-db.*') ||
                                    route().current('visi-misi-db.*')
                                }>
                                    Profil
                                </NavLink>
                                <NavLink href={route('berita-db.index')} active={route().current('berita-db.*')}>
                                    Berita
                                </NavLink>
                                <NavLink href={route('pembelajaran-db.index')} active={route().current('pembelajaran-db.*')}>
                                    Pembelajaran
                                </NavLink>
                                <NavLink href={route('konsentrasi-keahlian-db.index')} active={route().current('konsentrasi-keahlian-db.*')}>
                                    Konsentrasi Keahlian
                                </NavLink>
                                <NavLink href={route('teaching-factory-product-db.index')} active={route().current('teaching-factory-product-db.*')}>
                                    Teaching Factory
                                </NavLink>
                                <NavLink href={route('buyer-db.index')} active={route().current('buyer-db.*')}>
                                    Buyer
                                </NavLink>
                                <NavLink href={route('prestasi-sekolah-db.index')} active={
                                    route().current('prestasi-sekolah-db.*') ||
                                    route().current('prestasi-siswa-db.*') ||
                                    route().current('prestasi-guru-db.*')
                                }>
                                    Prestasi
                                </NavLink>
                                <NavLink href={route('lulusan-db.index')} active={route().current('lulusan-db.*')}>
                                    Lulusan
                                </NavLink>
                            </div>
                        </div>

                        <div className="hidden xl:flex xl:items-center xl:ms-6">
                            <div className="ms-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.name}

                                                <svg
                                                    className="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center xl:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' xl:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('home-db.index')} active={route().current('home-db.*')}>
                            Home
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('daftar-guru-db.index')} active={
                            route().current('daftar-guru-db.*') ||
                            route().current('daftar-tenaga-pendidikan-db.*') ||
                            route().current('sejarah-db.*') ||
                            route().current('struktur-organisasi-db.*')
                        }>
                            Profil
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('berita-db.index')} active={route().current('berita-db.*')}>
                            Berita
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('pembelajaran-db.index')} active={route().current('pembelajaran-db.*')}>
                            Pembelajaran
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('konsentrasi-keahlian-db.index')} active={route().current('konsentrasi-keahlian-db.*')}>
                            Konsentrasi Keahlian
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('teaching-factory-product-db.index')} active={route().current('teaching-factory-product-db.*')}>
                            Teaching Factory
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('buyer-db.index')} active={route().current('buyer-db.*')}>
                            Buyer
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('prestasi-sekolah-db.index')} active={
                            route().current('prestasi-sekolah-db.*') ||
                            route().current('prestasi-siswa-db.*') ||
                            route().current('prestasi-guru-db.*')
                        }>
                            Prestasi
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('lulusan-db.index')} active={route().current('lulusan-db.*')}>
                            Lulusan
                        </ResponsiveNavLink>
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">{user.name}</div>
                            <div className="font-medium text-sm text-gray-500">{user.email}</div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
                            <ResponsiveNavLink method="post" href={route('logout')} as="button">
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
