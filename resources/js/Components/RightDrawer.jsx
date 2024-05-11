import React, { useState } from 'react';
import { FaTimes} from 'react-icons/fa';

const RightDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const URL = 'https://forms.office.com/Pages/ResponsePage.aspx?id=gxFu22VMXECCznzVP6bp3IGtHvHKRcdNkTPWKTWeVYFUNFYySjE2TDFLSE9MWFMxSExFVVZDR1dKOS4u&embed=true';

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="fixed top-1/2 transform -translate-y-1/2 m-4 px-4 py-1 bg-blue-500 text-white rounded-t-lg shadow -rotate-90 cursor-pointer border-blue-700 border-2 hover:border-red-500"
        onClick={toggleDrawer}
        style={{ right: -81 }}
      >
        Rate Our Services
      </div>
      <div
        className={`fixed  h-full w-96 bg-white transition-all duration-1000 z-10 ${
          isOpen ? 'right-0 top-0' : '-right-96 top-0'
        }`}
        // style={{ right: isOpen ? '-400' : '' }}
      >
        <div className="flex justify-end p-4">
          <FaTimes
            className="text-2xl cursor-pointer text-red-600 border hover:border-white border-dotted border-gray-600"
            onClick={toggleDrawer}
          />
        </div>
        
        {/* Drawer Content */}
        <div className="p-4">
          
          <h2 className="text-3xl font-semibold mb-4 text-center">SHARE YOUR FEEDBACK WITH US</h2>
        </div>

        <iframe loading="lazy" allowFullScreen="true" width="854px" height="800px" src={URL} frameBorder={0} marginWidth={600} marginHeight={424} style={{border: 'medium', maxWidth: '100%', maxHeight: '700px'}} webkitallowfullscreen mozallowfullscreen msallowfullscreen data-rocket-lazyload="fitvidscompatible" data-lazy-src={URL} data-gtm-yt-inspected-7="true" data-ll-status="loaded" className="entered lazyloaded"> </iframe>
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