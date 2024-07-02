import React from 'react'

function SubTitle({ title, containerClassName = null}) {
    return (
        <div className={`${containerClassName == null ? `mb-6 mt-9` : containerClassName}  
        font-semibold text-[32px] `}>{title}</div>
    )
}


export default SubTitle