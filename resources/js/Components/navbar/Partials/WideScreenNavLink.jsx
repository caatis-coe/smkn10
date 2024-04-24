import { Link } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

function WideScreenNavLink({ title, endpoint, setDropdownClicked = (temp) => {} }) {
    const id  = window.location.pathname; // Assuming 'id' is the parameter you want to compare
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(id === endpoint);
    }, [id, endpoint]);

    return (
        <li className={`inline-block hover:text-tertiary transition cursor-pointer ${clicked && "text-tertiary font-semibold"}`}>
            <Link href={endpoint}>
                {title}
            </Link>
        </li>
    )
}

export default WideScreenNavLink;