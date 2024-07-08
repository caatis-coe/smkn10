import React from 'react'; // Import Quill styles
import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';

// Define the Sejarah component
function Sejarah({ data }) {
  return (
    <DefaultLayout>
      <ContentTitle title='PROFIL' subTitle='SEJARAH' />
      <div className="prose max-w-none ">
        <div className="space-y-2 " dangerouslySetInnerHTML={{ __html: data }} />
      </div>
    </DefaultLayout>
  );
}

export default Sejarah;