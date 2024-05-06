import { Link } from '@inertiajs/react'
import React from 'react'

function HomeMiniButton({ text, link = 'error404' }) {

    return (
        <Link href={link}>
            <div
                className={`grid place-items-center text-inherit cursor-pointer 
                p-4 text-black border-2 border-grey hover:border-lighttertiary
                font-normal transition-all duration-75 ease-in group hover:text-lighttertiary`}
            >
                <div>{text}</div>
            </div>
        </Link>
    );
}

export default HomeMiniButton