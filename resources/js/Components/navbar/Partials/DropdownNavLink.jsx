import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import WideScreenNavLink from './WideScreenNavLink';
import './nav.css';

function DropdownNavLink({ title, subMenu}) {

    const id  = window.location.pathname;
    const [clicked, setClicked] = useState(false);


    useEffect(() => {
        setClicked(subMenu.some(item => id === item.endpoint)); 
    }, [id, subMenu]);

    return (
        <div className='group relative'>
                <div className={`flex items-center group-hover:text-tertiary cursor-pointer ${clicked && "text-tertiary font-semibold"}`}>
                    <li className={`transition group-hover:border-b-1 group-hover:border-tertiary `}>
                        {title}
                    </li>
                    <IoIosArrowDown />
                </div>
                <div className='submenu-animate'>
                    <div className="absolute pt-6 min-w-max">
                    {subMenu && (
                        <div className='grid grid-cols-1 gap-4 drop-shadow-lg rounded-lg bg-white px-6 py-5'>
                            {subMenu.map((navLink, index) => (
                                <WideScreenNavLink
                                    key={index}
                                    title={navLink.title}
                                    endpoint={navLink.endpoint}
                                />
                            ))}
                        </div>
                    )}
                    </div>
                </div>
            </div>

    )
}

export default DropdownNavLink