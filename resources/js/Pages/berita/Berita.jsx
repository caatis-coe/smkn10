import BlogCard from '@/Components/BlogCard';
import ContentTitle from '@/Components/ContentTitle';
import DefaultLayout from '@/Layouts/DefaultLayout';
import ReactPaginate from 'react-paginate';
import React, { useEffect, useState } from 'react';

function Berita({ beritaDatas = [] }) {
  return (
    <DefaultLayout>
      <ContentTitle subTitle='BERITA' />
      {<PaginatedItems itemsPerPage={6} items={beritaDatas} />}
    </DefaultLayout>
  );
}

function PaginatedItems({ itemsPerPage, items }) {

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //     `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [handlePageClick]);

  return (
    <>
      <div className='grid grid-cols-1 place-items md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-12 '>
        {currentItems.map((blogdata, index) => <BlogCard key={index} blogData={blogdata} />)}
      </div>
      <div className='mt-16 grid place-items-center'>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          nextLinkClassName="font-bold text-primary text-2xl py-2 px-3 rounded-md ms-3"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          previousLinkClassName="font-bold text-2xl text-primary py-2 px-3 rounded-md me-3"
          renderOnZeroPageCount={null}
          className="flex items-center"
          pageLinkClassName="py-2 px-4 duration-75 ease-in rounded-md mx-1 hover:bg-grey "
          activeLinkClassName="py-2 px-4 bg-primary rounded-md text-white "
        />
      </div>
    </>
  );
}

export default Berita;