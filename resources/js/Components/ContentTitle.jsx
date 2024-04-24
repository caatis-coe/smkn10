import React from 'react'

function ContentTitle({title, subTitle = "None"}) {
  return (
    <div className='text-center mb-7 font-semibold'>
        {title && (<div className='text-[18px] text-grey'>
            {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
        </div>)}
        <div className='text-[48px]'>
            {subTitle}
        </div>
    </div>
  )
}

export default ContentTitle