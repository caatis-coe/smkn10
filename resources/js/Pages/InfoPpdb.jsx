import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';
import React from 'react';
import '../../css/ppdb.css';

function InfoPpdb() {
    const imageData = [
        'images/ppdb/image1.jpeg',
        'images/ppdb/image2.jpeg',
        'images/ppdb/image3.jpeg',
        'images/ppdb/image4.jpeg',
        'images/ppdb/image5.jpeg',
        'images/ppdb/image6.jpeg',
        'images/ppdb/image7.jpg',
        'images/ppdb/image8.jpg',
    ];

    return (
        <DefaultLayout>
            <ContentTitle subTitle='INFO PPDB'/>
            <div className="flex flex-wrap justify-center">
                {imageData.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`PPDB Image ${index + 1}`}
                        className='content m-2 shadow-md lg:h-[600px] sm:h-[184px] slide-in-up'
                        style={{objectFit: 'cover'}}
                    />
                ))}
            </div>
        </DefaultLayout>
    );
}

export default InfoPpdb;
