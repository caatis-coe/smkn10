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
                    <li className={`${id === endpoint && "bg-tertiary text-white"} py-4 border-b border-grey hover:bg-tertiary hover:text-white cursor-pointer`}>
                        {title}
                    </li>
                </Link>
            ) : ( // WITH SUBMENU
                <li className={`${clicked && "bg-tertiary text-white"} flex gap-2 justify-center items-center py-4 border-b border-grey  cursor-pointer`}
                    onClick={() => setExpand(!expand)}
                >
                    {title}
                    {expand ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                </li>
            )}
            {subMenu && ( //SUBMENU CONTENT
                <div className={`${expand ? "block" : "hidden"}`}>
                    {
                    subMenu.map((navLink, index) => (
                        <Link key = {index} href={navLink.endpoint} onClick={handleClick}>
                            <li className={`${navLink.endpoint === id ? " bg-lighttertiary text-white font-semibold event cursor-default" : "hover:bg-tertiary hover:text-white cursor-pointer"} py-4 text-[12px] bg-lightgrey text-black border-b border-grey `}>
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