import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';
import React from 'react'

function BeritaDetail({ data = {
    "id": "1",
    "title": "Trekking to Everest Base Camp",
    "description": "Embarking on a challenging trek to the base camp of the world's highest mountain.",
    "image_path": "image1.jpg",
    "date_updated": "2022-01-22"
} }) {

    const resolveImagePath = (path) => {
        if (path.startsWith('http')) {
            return path;
        }
        return `${window.location.origin}/storage/${path}`;
    };

    return (
        <DefaultLayout>
            <ContentTitle subTitle={data.title} />
            <img src={resolveImagePath(data.thumbnail_image)} className='min-w-[324px] min-h-[484px] rounded shadow-md bg-cover bg-center mb-12'/>
            <div>
                {data.description}
            </div>
        </DefaultLayout>
    )
}

export default BeritaDetail