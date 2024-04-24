import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';
import React from 'react'
import { useParams } from 'react-router-dom';

function BlogDetail() {
    let { id } = useParams();

    return (
        <DefaultLayout>
            <div className='w-full'>
                <ContentTitle subTitle={id} />
            </div>
        </DefaultLayout>
    )
}

export default BlogDetail