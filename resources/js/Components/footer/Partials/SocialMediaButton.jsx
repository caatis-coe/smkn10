import React from 'react'

import * as reactIconsFa from "react-icons/fa";

function SocialMediaButton({ logo, link }) {

    const SocialMediaLogo = reactIconsFa[logo]

    return (
        <a className='flex size-11 xl:size-14 items-center justify-center transition ease-out duration-150
        bg-darkgrey rounded-md hover:scale-105'
        href={link} target='_blank' >
        {<SocialMediaLogo className="size-3/5" />}
    </a>
        
    )
}

export default SocialMediaButton