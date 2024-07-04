import { Link } from '@inertiajs/react'
import React from 'react'

function Pagination({ links, additionalUrlParams = ""}) {


    return (
        <nav className='text-center mt-4'>
            {links.map((link) => (
                <Link
                href={(link.url || "") + (additionalUrlParams !== "" ? ("&type=" + additionalUrlParams) : "")}
                onClick={() => handleClick(link.url)}
                key={link.label} 
                className=
                {`
                    inline-block py-2 px-3 mx-2 rounded-lg text-gray-200 text-xs  
                    ${link.active ? "bg-gray-700 font-medium cursor-default pointer-events-none" : "cursor-pointer "}
                    ${!link.url ? "!text-gray-500 cursor-default pointer-events-none" : 
                        "hover:bg-gray-700"
                    }
                `} 
                dangerouslySetInnerHTML={{__html: link.label}}>
                </Link>
            ))}
        </nav>
    )
}

export default Pagination