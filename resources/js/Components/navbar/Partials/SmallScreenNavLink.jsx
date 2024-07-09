import { Link } from '@inertiajs/react'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function SmallScreenNavLink({ title, endpoint = "", handleClick, subMenu = null }) {
    const id  = window.location.pathname;
    const [clicked, setClicked] = useState(false);
    const [expand, setExpand] = useState(false)
    const ref = useRef(null);

    useEffect(() => {
        subMenu && setClicked(subMenu.some(item => id === item.endpoint)); 
    }, [id, subMenu]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setExpand(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);


    return (
        <div ref={ref} className='group'>
            {!subMenu? ( // NO SUBMENU
                <Link href={endpoint} onClick={handleClick}>
                    <li className={`${id === endpoint && "bg-lighttertiary text-white pointer-events-none cursor-default"} px-4 py-3  text-gray-700 font-medium transition-all hover:bg-lightgrey cursor-pointer`}>
                        {title}
                    </li>
                </Link>
            ) : ( // WITH SUBMENU
                <li className={`${clicked && "bg-lighttertiary text-white"} flex gap-2 px-4 items-center text-gray-700 py-3 font-medium  cursor-pointer`}
                    onClick={() => setExpand(!expand)}
                >
                    {title}
                    {expand ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                </li>
            )}
            {subMenu && ( //SUBMENU CONTENT
                <div className={`${expand ? "block" : "hidden"} w-full h-full`}>
                    {
                    subMenu.map((navLink, index) => (
                        <Link key = {index} href={navLink.endpoint} onClick={handleClick}>
                            <li className={`${navLink.endpoint === id ? " text-black font-bold event cursor-default" : "hover:bg-lightgrey   cursor-pointer"} 
                            px-9 py-4  w-full h-full transition-all text-xs
                            text-black  `}>
                                {navLink.title}
                            </li>
                        </Link>
                    ))
                    }
                </div>
            )}
        </div>
    )
}

export default SmallScreenNavLink