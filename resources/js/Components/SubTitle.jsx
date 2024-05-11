import React from 'react'

function SubTitle({ title, containerClassName }) {
    return (
        <div className={`${containerClassName} font-semibold text-[32px] my-6 text-grey`}>{title}</div>
    )
}


export default SubTitle