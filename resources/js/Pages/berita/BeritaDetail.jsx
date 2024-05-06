import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';
import React from 'react'
import { useParams } from 'react-router-dom';

function BlogDetail({data = blogData = {
    "id" : "1",
    "title": "Trekking to Everest Base Camp",
    "description": "Embarking on a challenging trek to the base camp of the world's highest mountain.",
    "image_path": "image1.jpg",
    "date_updated": "2022-01-22"
}}) {

    const backgroundImage = `url('images/${data.image_path}')`;

    return (
        <DefaultLayout>
            <ContentTitle subTitle={data.title} />
            <div className='flex flex-col min-w-[324px]  min-h-[484px] bg-white shadow-md rounded-2xl '>
            <div className={`flex-1 bg-cover bg-center`} style={{backgroundImage}}/>
            </div>
            <div>
                {data.description}
            </div>
        </DefaultLayout>
    )
}

export default BlogDetail