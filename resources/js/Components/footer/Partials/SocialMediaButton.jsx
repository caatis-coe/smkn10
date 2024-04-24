import React from 'react'

import * as reactIconsFa from "react-icons/fa";

function SocialMediaButton({ logo, link }) {

    const SocialMediaLogo = reactIconsFa[logo]

    return (
        <a className='flex w-12 aspect-square md:w-[60px] md:max-w-none items-center justify-center transition
            bg-secondary rounded-full hover:scale-105'
            href={link}>
            {<SocialMediaLogo className="size-7" />}
        </a>
    )
}

export default SocialMediaButton