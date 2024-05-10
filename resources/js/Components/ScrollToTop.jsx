import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={` bg-yellow-400 fixed bottom-5 left-5 p-3 text-white rounded ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ${isVisible ? 'visible' : 'invisible'} cursor-pointer `}
      onClick={scrollToTop}
    >
      <IoIosArrowUp className='text-3xl'/>
    </div>
  )
}
