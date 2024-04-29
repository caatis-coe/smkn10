import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';
import React from 'react';
import image from 

function Blog({ blogDatas }) {
  return (
    <DefaultLayout>
      <ContentTitle subTitle='BLOG' />
      <div className=''>
        <img src='../../Assets/image1.jpg' alt="" />
      </div>
    </DefaultLayout>
  );
}

export default Blog;