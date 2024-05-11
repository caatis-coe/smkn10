import React, { useState } from 'react';
import { FaAngleRight, FaTimes} from 'react-icons/fa';

const RightDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const URL = 'https://forms.office.com/Pages/ResponsePage.aspx?id=gxFu22VMXECCznzVP6bp3IGtHvHKRcdNkTPWKTWeVYFUNFYySjE2TDFLSE9MWFMxSExFVVZDR1dKOS4u&embed=true';

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-40">
      <div
        className="fixed top-1/2 transform right-0 translate-x-[86px] -translate-y-1/2 m-4 px-4 py-1 bg-primary text-white rounded-t-lg shadow -rotate-90 cursor-pointer border-2 hover:bg-lighttertiary"
        onClick={toggleDrawer}
      >
        Rate Our Services
      </div>
      <div
        className={`fixed  h-screen w-80 bg-white transition-all duration-1000 z-10 ${
          isOpen ? 'right-0 top-0' : '-right-96 top-0'
        }`}
        // style={{ right: isOpen ? '-400' : '' }}
      >
        <div className='fixed top-[50%] text-white bg-primary rounded-l-lg h-24 grid place-items-center -z-0
         -translate-x-4 translate-y-1/2 cursor-pointer' onClick={()=>(setIsOpen(false))}>
          <FaAngleRight />
        </div>
        <div className="flex justify-end p-4">
          <FaTimes
            className="text-2xl cursor-pointer text-red-600 border hover:border-white border-dotted border-grey"
            onClick={toggleDrawer}
          />
        </div>
        
        {/* Drawer Content */}
        {/* <div className="p-4 fixed">
          
          <h2 className="text-3xl text-grey font-semibold mb-4 text-center mt-16">SHARE YOUR FEEDBACK WITH US</h2>
        </div> */}

        <iframe className="entered lazyloaded absolute h-screen" loading="lazy" allowFullScreen={true} width="854px" src={URL}  style={{border: 'medium', maxWidth: '100%', maxHeight: '700px'}} webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" data-rocket-lazyload="fitvidscompatible" data-lazy-src={URL} data-gtm-yt-inspected-7="true" data-ll-status="loaded" > </iframe>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-9"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default RightDrawer;