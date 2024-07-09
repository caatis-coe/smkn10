import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'

function KeterserapanLulusan({ datas }) {
    return (
        <DefaultLayout>
            <ContentTitle title={'Lulusan'} subTitle='KETERSERAPAN LULUSAN' />
            <div className='flex flex-col justify-center gap-y-9 mt-4'>
                {datas && datas.map((data) => (
                    <img src={`storage/${data.image_path}`} alt="" />
                ))}
            </div>
        </DefaultLayout>
    )
}

export default KeterserapanLulusan