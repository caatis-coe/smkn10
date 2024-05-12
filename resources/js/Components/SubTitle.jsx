import React from 'react'

function SubTitle({ title, containerClassName = null}) {
    return (
        <div className={`${containerClassName == null ? `my-6` : containerClassName}  
        font-semibold text-[32px]  text-grey`}>{title}</div>
    )
}


export default SubTitle